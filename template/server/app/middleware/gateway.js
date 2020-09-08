'use strict';
const k2c = require('koa2-connect');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(options) {
  const DomainName = options.DomainName;
  const TENANT = options.TENANT;

  return async function(ctx, next) {
    const authorization = ctx.cookies.get('authorization', {
      signed: false,
    });
    const userName = ctx.cookies.get('userName', {
      signed: false,
    });
    const onProxyReq = function(proxyReq) {
      proxyReq.removeHeader('x-forwarded-port');
      proxyReq.removeHeader('x-forwarded-host'); // api gateway will read it
      authorization && proxyReq.setHeader('authorization', authorization);
      userName && proxyReq.setHeader('UserName', userName);
      proxyReq.setHeader('DomainName', DomainName);
      proxyReq.setHeader('content-type', 'application/json');

      if ([ 'POST', 'PUT', 'DELETE', 'PATCH' ].includes(ctx.method)) {
        const { rawBody, body: requestBody } = ctx.request;
        if (requestBody && rawBody) {
          proxyReq.removeHeader('content-length');
          proxyReq.write(rawBody);
          proxyReq.end();
        }
      }
      return proxyReq;
    };
    if (ctx.request.url.startsWith('/gateway/')) {
      await k2c(createProxyMiddleware('/gateway', {
        target: 'http://api.gateway.lowcode',
        changeOrigin: true,
        onProxyReq,
      }))(ctx, next);
    } else if (ctx.request.url.startsWith('/gw/')) {
      await k2c(createProxyMiddleware('/gw', {
        target: `http://${TENANT}.gateway.lowcode`,
        changeOrigin: true,
        onProxyReq,
      }))(ctx, next);
    } else {
      await next();
    }
  };
};
