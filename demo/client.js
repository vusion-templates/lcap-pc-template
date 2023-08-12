(function() {
    const loadAssets = () => {
        LazyLoad.js([
            '//ceph.lcap.hatest.163yun.com/lcap-test-static/packages/lcap-login@1.2.2/dist-theme/index.js'
        ]);
        LazyLoad.css([
            '//ceph.lcap.hatest.163yun.com/lcap-test-static/packages/cloud-ui.vusion@0.14.37/dist-theme/index.css',
            '//ceph.lcap.hatest.163yun.com/lcap-test-static/packages/lcap-pc-template@0.4.35/cloudAdminDesigner.css'
        ]);     
    }
    if(window.ICESTARK?.root) {
        Object.assign(window.ICESTARK, {
            appEnter({ container, customProps  }) {
                window.LcapMicro = window.LcapMicro || {};
                Object.assign(window.LcapMicro, {});
            
                if(window.LcapMicro.noAuthUrl && !window.LcapMicro.noAuthFn)
                    window.LcapMicro.noAuthFn = () => {
                        location.href = window.LcapMicro.noAuthUrl;
                    };
            
                if(window.LcapMicro.loginUrl && !window.LcapMicro.loginFn)
                    window.LcapMicro.loginFn = () => {
                        location.href = window.LcapMicro.loginUrl;
                    };

                if(window.LcapMicro.notFoundUrl && !window.LcapMicro.notFoundFn)
                    window.LcapMicro.notFoundFn = () => {
                        location.href = window.LcapMicro.notFoundUrl;
                    };
                
                // 兼容 ICESTARK 旧集成方式
                if(!window.LcapMicro.loginFn)
                    window.LcapMicro.loginFn = window.ICESTARK.loginFn;
                if(!window.LcapMicro.routePrefix)
                    window.LcapMicro.routePrefix = window.ICESTARK.basename;
                if(!window.LcapMicro.proxyPrefix)
                    window.LcapMicro.proxyPrefix = window.ICESTARK.proxyPrefix;

                window.LcapMicro.container = container; 
                window.LcapMicro.props = customProps;
                loadAssets();
            },
            appLeave({ container }) {
                container.innerHTML = null;
                window.appVM?.$destroy();
                document.querySelectorAll('script.lazyload').forEach((ele) => {
                    ele.active = false;
                });
            },
        });
    } else
        loadAssets();
})()
