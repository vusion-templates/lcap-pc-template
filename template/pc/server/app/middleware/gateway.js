'use strict';
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

    if (ctx.request.url.startsWith('/gateway/')) {
      const host = 'api.gateway.lowcode';
      await ctx.proxyRequest(host, {
        rewrite(urlObj) {
          urlObj.port = 80;
          urlObj.host = host;
          return urlObj;
        },
        headers: {
          DomainName,
          userName,
          authorization,
        },
        beforeResponse(proxyResult) {
          const urlObj = new URL(ctx.href);
          const isLogout = urlObj.pathname === '/gateway/nuims/nuims' && (urlObj.searchParams.get('Action') === 'Logout');
          if (isLogout) {
            ctx.cookies.set('authorization');
          }
          return proxyResult;
        },
      });
    } else if (ctx.request.url.startsWith('/gw/')) {
      const host = `${TENANT}.gateway.lowcode`;
      await ctx.proxyRequest(host, {
        rewrite(urlObj) {
          urlObj.port = 80;
          urlObj.host = host;
          return urlObj;
        },
        headers: {
          DomainName,
          userName,
          authorization,
        },
      });
    } else {
      await next();
    }
  };
};
