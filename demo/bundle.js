import initModule from '../src/init.js';
        var platformConfig = {
    appConfig: {
        project: 'xbtest',
        domainName: 'xbtest',
        envConfig: {},
        documentTitle: null,
        rootViewData: [
            {
                name: 'login',
                title: '登录页',
                isIndex: false,
            },
            {
                name: 'index',
                title: '首页',
                isIndex: false,
            },
            {
                name: 'dashboard',
                title: '总览页',
                isIndex: false,
            },
            {
                name: 'permission_center',
                title: '权限中心',
                isIndex: true,
            },
            {
                name: 'noAuth',
                title: '无权限页面',
                isIndex: false,
            },
            {
                name: 'notFound',
                title: '找不到页面',
                isIndex: false,
            },
        ],
        basePath: '',
        frontendName: 'pc',
        sysPrefixPath: '',
    },
    dnsAddr: 'http://mubanpc.defaulttenant.lcap.hatest.163yun.com',
    hasUserCenter: true,
    hasAuth: true,
    authResourcePaths: [
        '/permission_center/addRoleUser',
        '/permission_center/resourceManagement',
        '/permission_center/roleManagement',
        '/permission_center/userManagement',
        '/permission_center',
        '/',
    ],
    baseResourcePaths: [
        '/login',
        '/index',
        '/dashboard/process2renwu2',
        '/dashboard/process2renwu1',
        '/dashboard/process2faqi',
        '/dashboard/process2shenpi',
        '/dashboard',
        '/noAuth',
        '/notFound',
    ],
};
        var metaData = {frontendEvents:{postRequest:"window.postRequest = async (event) => { \nawait (async () => {\n    ;\n    let code =undefined;\n    let msg =undefined;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面逻辑调用服务端逻辑后，会执行本事件逻辑\n\n接收返回信息，处理状态码和错误码\n\n如有需要，开发者可变更错误码对应的处理方式\n */\nawait (async () => {\n            'use JSBlock' \r\n var body = JSON.parse(event.body)\r\nif(body){\r\n    code = body.code\r\n    msg = body.msg || body.message || '系统错误，请查看日志'\r\n}\n        })();\nawait (console.log(this.$utils['ToString'](this.$utils['ToString'](code, 'nasl.core.String'), 'nasl.core.String')))\nif (((event || {}).status) == (`200`)) {\nif (this.$global.isEqual(code, `400`)) {\nawait (this.$toast.show(this.$utils['ToString'](this.$utils['ToString'](`msg`, 'nasl.core.String'), 'nasl.core.String')))\n}\nelse if (this.$global.isEqual(code, `401`)) {\nawait (async () => {\n            'use JSBlock' \r\nif (body.Message === 'token.is.invalid') {\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `403`)) {\nawait (async () => {\n             'use JSBlock' \r\n if (err.Code === 'InvalidToken' && err.Message === 'Token is invalid') {\r\n    if (!config.noErrorTip) {\r\n        instance.show('登录失效', '请重新登录');\r\n    }\r\n    localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `500`)) {\nawait (this.$toast.show(this.$utils['ToString'](this.$utils['ToString'](`msg`, 'nasl.core.String'), 'nasl.core.String')))\n}\nelse if (this.$global.isEqual(code, `501`)) {\nif ((msg) == (`abort`)) {\nthrow Error('程序中止');\n} else {\n}\n\n}\nelse {\n}\n\n}     else {\nif ((code) == (this.$utils['ToString'](`200`, 'nasl.core.String'))) {\n}         else {\nthrow Error('程序中止');\n}\n\n}\n\nreturn;\n})();\n}\n",beforeRouter:"window.beforeRouter = async (event) => { \nawait (async () => {\n    ;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面切换前，会执行本事件逻辑\n\n判断当前访问用户是否对即将访问的页面具有权限，如无权限则跳转处理。\n\n如有需要，开发者可变更处理方式\n */\nawait (async () => {\n                'use JSBlock' \r\n\r\n    console.log(1)\r\n    \r\n     try {\r\n           await this.$auth.getUserInfo()\r\n    } catch (err) {\r\n        console.log(err);\r\n    }\r\n\r\n    const { router, routes, authResourcePaths,\r\n        appConfig, beforeRouter,filterRoutes,\r\n        to, from, next ,parsePath, getBasePath, filterAuthResources, findNoAuthView,baseResourcePaths} = event;\r\n         \r\n    function concatResourcesRoutes(resources, baseRoutes) {\r\n        return resources.concat(baseRoutes.map((route) => ({\r\n            resourceValue: route,\r\n            // 如果后续需要区分路由类型，这里也需要补充 resourceType\r\n        })));\r\n    }\r\n    function addAuthRoutes(resources) {\r\n        if (Array.isArray(resources) && resources.length) {\r\n            const userResourcePaths = (resources || []).map((resource) => resource?.resourceValue || resource?.ResourceValue);\r\n            const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {\r\n                const routePath = route.path;\r\n                const completePath = [...ancestorPaths, routePath].join('/');\r\n                const authPath = userResourcePaths.find((userResourcePath) => userResourcePath?.startsWith(completePath));\r\n                return authPath;\r\n            });\r\n            otherRoutes.forEach((route) => {\r\n                router.addRoute(route);\r\n            });\r\n        }\r\n    }\r\n    const userInfo = this.$global.userInfo || {};\r\n    const $auth = this.$auth;\r\n    const redirectedFrom = parsePath(to.redirectedFrom);\r\n    const toPath = redirectedFrom?.path || to.path;\r\n    const toQuery = to.query;\r\n    const authPath = authResourcePaths.find((authResourcePath) => {\r\n        if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {\r\n            return true;\r\n        }\r\n        return false;\r\n    });\r\n\r\n    const noAuthView = findNoAuthView(routes);\r\n\r\n    if (authPath) {\r\n        if (!$auth.isInit()) {\r\n            if (!userInfo.UserId) {\r\n                localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n                next({ path: `${getBasePath()}/login` });\r\n            } else {\r\n                try {\r\n                    const resources = await $auth.getUserResources(appConfig.domainName);\r\n                    // addAuthRoutes(filterAuthResources(resources));\r\n                     const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n                    addAuthRoutes(realResources);\r\n                    // 即使没有查到权限，也需要重新进一遍，来决定去 无权限页面 还是 404页面\r\n                    next({\r\n                        path: toPath,\r\n                        query: toQuery,\r\n                    });\r\n                } catch (err) {\r\n                    console.log('err',err)\r\n                    if (noAuthView?.path) {\r\n                        next({ path: noAuthView.path });\r\n                    }\r\n                }\r\n            }\r\n        } else if (redirectedFrom?.path !== to.path && to.path === `${getBasePath()}/notFound`) {\r\n            if (noAuthView?.path) {\r\n                next({ path: noAuthView.path });\r\n            }\r\n        }\r\n    } else if (!$auth.isInit() && userInfo.UserId) {\r\n        const resources = await $auth.getUserResources(appConfig.domainName);\r\n        // addAuthRoutes(filterAuthResources(resources));\r\n        const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n        addAuthRoutes(realResources);\r\n    }\r\n\r\n    next();\r\n\r\n\n        })();\nreturn;\n})();\n}\n"},frontendVariables:[],dataTypesMap:{'app.enums.UserStatusEnum':{concept:'Enum',name:'UserStatusEnum',label:null,description:'统一定义用户的状态',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'正常'},{concept:'EnumItem',name:'',value:'Forbidden',label:'禁用'}],isLeaf:true},'app.enums.UserSourceEnum':{concept:'Enum',name:'UserSourceEnum',label:null,description:'统一定义用户的来源',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'普通登录'}],isLeaf:true},'app.dataSources.defaultDS.entities.Entity1':{concept:'Entity',changedTime:1691563379071,name:'Entity1',uuid:'564d90ed37a54ae9827011ffa52a8b84',tableName:'Entity1',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'3e96d62db39448ac87b3b72daa81f19b',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,primaryKey:true,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity10818429946',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'a4ce585a468d4bfda87aa9a42d316a79',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'6525061524424f9594a8c0c21f31ccf7',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'8665a3697fbb4a2cab000a47d7c0410a',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'59abcf4e2f1649a6ab7dea4709765ef7',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true}],indexes:[]},'nasl.core.Long':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},'nasl.core.DateTime':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},'nasl.core.String':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping':{concept:'Entity',name:'LCAPLogicViewMapping',uuid:'53d74f46eacf403c8eac7280ebbd0086',tableName:'LCAPLogicViewMapping_38f034',description:'记录应用全局逻辑与页面资源的关联关系',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'da9ebc7935ca4573a10ef9870d0ba922',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14946531801',isLeaf:true},{concept:'EntityProperty',name:'logicIdentifier',uuid:'b2230bbefa324d319ab17de2474251a1',columnName:'logicIdentifier',label:'逻辑标识',description:'/api/logic1:GET',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceName',uuid:'fcfdb2b458df479ebc6db5a05d196bff',columnName:'resourceName',label:'资源路径',description:'/dashboard/button1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceType',uuid:'0d3d96599a7e4902b5e859b052aac3cb',columnName:'resourceType',label:'资源类型',description:'页面-page 组件-component 逻辑-logic',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'group',uuid:'946aa1ec5e0f40bb8b387ec04c2fda86',columnName:'group',label:'逻辑与资源绑定的分组关系',description:'值一样的为同一组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'changeTime',uuid:'664dec5af49445ed995cdee48d0caf75',columnName:'changeTime',label:'创建时间',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUser':{concept:'Entity',name:'LCAPUser',uuid:'46d1ced08a0d4e92b28076357d4b6da3',tableName:'LCAPUser_38f034',description:'制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'33c02e83f1e64d32bf0f80f89d846e3c',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14476992223',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'8f25ab6476c543c89caecb3912f05e45',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'268273b8ca05467ab6d8f5f4ae88609a',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'8a93c21eb1a5405486b02ce617842d76',columnName:'userId',label:'用户id',description:'第三方登录方式唯一id；普通登录使用userName+source作为userId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'b6c589556950407f8827eb2e098de553',columnName:'userName',label:'用户名',description:'普通登录用户名，类似账号的概念',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'password',uuid:'c77df8559b8c422da0b9381a1d720ccd',columnName:'password',label:'登录密码',description:'普通登录密码，密码建议加密存储。第三方登录不会存储密码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'phone',uuid:'cfb8a4449ab14510810bce80f1ee3244',columnName:'phone',label:'手机号',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'email',uuid:'2e545afb4890431685cd55fc27fc1835',columnName:'email',label:'邮箱',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'displayName',uuid:'1e75c737f6284a2083242bf7d9209106',columnName:'displayName',label:'昵称',description:'展示的名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'status',uuid:'2aef8b7ffc304e2292126dba1c658e4c',columnName:'status',label:'状态',description:'状态，标识当前用户的状态是什么',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserStatusEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'c8c6bf465f5748b7b0ff6016d948b4d3',columnName:'source',label:'用户来源',description:'当前条用户数据来自哪个用户源，如普通登录、微信登录',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserSourceEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRolePerMapping':{concept:'Entity',name:'LCAPRolePerMapping',uuid:'3aad0e57b32141b595e27001f5289d98',tableName:'LCAPRolePerMapping_38f034',description:'角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'fa3374eb214d4c0299464dbd2fdaf925',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'e64c83a2474d46fbbcf358fc45a9f517',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'292525c8e3e64b6fa94fa4f48ae73f93',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'446e6d74b1c54e33a02ac1eec44b5755',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'990ae8251ad24d7194b2af4faa0ddf26',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'28981d363a904ae484f517efd6fc1c48',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'cf904f1d30d14584990219ea4878ba03',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPerResMapping':{concept:'Entity',name:'LCAPPerResMapping',uuid:'9850bf005b6142dcb45bcc285477730c',tableName:'LCAPPerResMapping_38f034',description:'权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'163f36b1e1ec4671ba12b3abf29786a9',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'35cd09aab4664346a9b80f3ac04892da',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'d5e1524704124c3880f800978a13a478',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'6d131cbd468a4723908cd363607cca57',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'3f2788b9d2e346aca1af19fcf4cb35bc',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'c9fd97d411ab439fad1960ac3ece5d45',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceId',uuid:'3df87d35ad9f4b57bf0aab7557755a07',columnName:'resourceId',label:'资源唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPResource',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping':{concept:'Entity',name:'LCAPUserRoleMapping',uuid:'8d5b8ea772c8464c8f8d759bf4f8d2fa',tableName:'LCAPUserRoleMapping_38f034',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'9e2decf323684da69efcb85fe8276ec2',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'c7567f2b070947df95113afbe8b68a98',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'16d75cac201647c3b7acedd9413ba415',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'f9c37efa57e94f0981eaa241c6acde0e',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'7bd7de7f9209425481d1dec06500a7a9',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'e01847bbca484b738a958f5d0900852c',columnName:'userId',label:'用户唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPUser',relationProperty:'userId',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'a7274f7ab38d4c0abec0f30a74afd321',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'ce517ce0b4bc431cb28fb0ceaf88ca1c',columnName:'userName',label:'用户名',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'aecafe1c2bc84b74b7c8f82914dbc564',columnName:'source',label:'用户来源',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRole':{concept:'Entity',name:'LCAPRole',uuid:'822614e65fae48f9bd4d3a34ab43d124',tableName:'LCAPRole_38f034',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'a211c1ef354e46718f4913393a3104cd',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'13054b7c5a194498bc396348d5980c4b',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'2339f6799f504dff9703eab305613fe1',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'28cfd5d680c649e0a3f4a9efd2cbb748',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'e48b3d110f65485b9d5dbf558826aa98',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'7a2b550fa30044008002857ba6517bfd',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'feb72290cddc4ab49aa49ad2de66f465',columnName:'name',label:'角色名称',description:'角色名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'d7c18d37ae714f43b150c79b8048701c',columnName:'description',label:'角色描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleStatus',uuid:'5520cc1057dc43ca8d9a6853c62249e6',columnName:'roleStatus',label:'角色状态',description:'角色状态，可配置true启用，false禁用。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'editable',uuid:'e1eec135755c41adb26f0ab696c196a0',columnName:'editable',label:'是否可编辑',description:'系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'nasl.core.Boolean':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPPermission':{concept:'Entity',name:'LCAPPermission',uuid:'db57159db09a455493a24fd066933cc0',tableName:'LCAPPermission_38f034',description:'权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'268312b2dd2e4807b289dfbfc2781d41',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'c685740f8f974924b1bcc54e342b3a59',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'3233cfbbdcbd4d5e9921496d52e0aaa3',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'5df0469e769d4b239f6b6f06d053221f',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'50bf97a11be44b419d1d3c0c33c7b169',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'011a515f31e94bfdbfc06e74ba38477c',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'3becbb03e7f644019548aba2feb9321b',columnName:'name',label:'权限名称',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'789f373f7500489dadc1db25881e7295',columnName:'description',label:'权限描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPResource':{concept:'Entity',name:'LCAPResource',uuid:'d914aab34a6c426a92d19cce8ef32ad2',tableName:'LCAPResource_38f034',description:'资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'7cc0541af31a4bbca2049102a6967fa5',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'f3f1fe843fa247afa315167a16b23c55',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'de95d5416f424d4b81c27d421664f588',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'71ed60475ccb4d74a4b3631f6b7454ce',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'a78fd577e7394f419c5a8391d6991188',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'47a9a47e4ce242ada4536aba03201588',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'a9ed1408d64543f7a3ff8ca69d91a5a4',columnName:'name',label:'资源名称',description:'资源路径，如/test/api',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'5c7ad2641cd5494abc8856673e66a9da',columnName:'description',label:'资源描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'type',uuid:'0e97baad03f94d80aa2cccec2c06dc71',columnName:'type',label:'资源类型',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'clientType',uuid:'45fccde9498745d0a5d11aff4de4d634',columnName:'clientType',label:'端标识',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.structures.LCAPGetResourceResult':{concept:'Structure',name:'LCAPGetResourceResult',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'resourceValue',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'resourceType',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true}]},'app.structures.LCAPRoleBindUsersBody':{concept:'Structure',name:'LCAPRoleBindUsersBody',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'roleId',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'userIdList',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true}]},'nasl.collection.List<nasl.core.String>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'app.structures.PostRequest':{concept:'Structure',name:'PostRequest',description:null,origin:'ide',compilerInfoMap:null,typeParams:null,properties:[{concept:'StructureProperty',name:'response',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.http',typeName:'HttpResponse',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'status',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'requestInfo',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Map',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true}]},'nasl.http.HttpResponse<nasl.core.String>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.http',typeName:'HttpResponse',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.collection.Map<nasl.core.String, nasl.core.String>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Map',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'extensions.lcap_auth.structures.LCAPUser':{concept:'Structure',name:'LCAPUser',description:'System built in generic class LCAPUser',typeParams:null,properties:[{concept:'StructureProperty',name:'userId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:true,isLeaf:true},{concept:'StructureProperty',name:'userName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:true,isLeaf:true},{concept:'StructureProperty',name:'extensionInfos',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Map',typeArguments:[{concept:'TypeAnnotation',name:'K',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},{concept:'TypeAnnotation',name:'V',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:false,isLeaf:true}]},'extensions.lcap_permission.structures.UserResourceQueryResult':{concept:'Structure',name:'UserResourceQueryResult',description:'System built in generic class DeployLogicAuthMetaData',typeParams:null,properties:[{concept:'StructureProperty',name:'resourceValue',description:'资源值(通常为浏览器上的访问路径或逻辑请求路径)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'resourceType',description:'资源的类型(表示当前资源是页面还是组件或者逻辑)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'clientType',description:'资源所属的端标识(多端场景下存在重名资源)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'description',description:'资源的描述信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'createdTime',description:'资源的创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'extensions.lcap_permission.structures.DeployResourceMetaData':{concept:'Structure',name:'DeployResourceMetaData',description:'System built in generic class LCAPPermissionService',typeParams:null,properties:[{concept:'StructureProperty',name:'resourceValue',description:'资源值(通常为浏览器上的访问路径或逻辑请求路径)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'resourceType',description:'资源的类型(表示当前资源是页面还是组件或者逻辑)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'clientType',description:'资源所属的端标识(多端场景下存在重名资源)',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'description',description:'资源的描述信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'createdTime',description:'资源的创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'nasl.ui.Current':{concept:'Structure',name:'Current',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'rowIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},T:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},'nasl.ui.CurrentDynamic':{concept:'Structure',name:'CurrentDynamic',typeParams:[{concept:'TypeParam',name:'T'},{concept:'TypeParam',name:'T1'}],properties:[{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnItem',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T1',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'rowIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},T1:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T1',typeArguments:null,returnType:null,properties:null},'nasl.ui.Error':{concept:'Structure',name:'Error',typeParams:null,properties:[{concept:'StructureProperty',name:'errorType',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'errorMsg',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.BaseEvent':{concept:'Structure',name:'BaseEvent',typeParams:null,properties:[]},'nasl.ui.DataSourceParams':{concept:'Structure',name:'DataSourceParams',typeParams:null,properties:[{concept:'StructureProperty',name:'page',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'sort',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'filterText',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.EventTarget':{concept:'Structure',name:'EventTarget',typeParams:null,properties:[]},'nasl.ui.MouseEvent':{concept:'Structure',name:'MouseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'altKey',description:'如果alt 键被按下，返回true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'button',description:'如果鼠标按钮被按下（如果有的话），将会返回一个数值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientX',description:'鼠标指针在点击元素（DOM）中的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientY',description:'鼠标指针在点击元素（DOM）中的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'ctrlKey',description:'如果 control 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'metaKey',description:'如果 meta 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementX',description:'鼠标指针相对于最后mousemove事件位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementY',description:'鼠标指针相对于最后mousemove事件位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetX',description:'鼠标指针相对于目标节点内边位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetY',description:'鼠标指针相对于目标节点内边位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenX',description:'相对于全局（屏幕）的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenY',description:'相对于全局（屏幕）的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.FocusEvent':{concept:'Structure',name:'FocusEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'cancelBubble',description:'是否取消冒泡',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'detail',description:'详情',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerX',description:'相对于当前层的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerY',description:'相对于当前层的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeEvent':{concept:'Structure',name:'ChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formattedValue',description:'格式化后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'改变后的值是否合法',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<T>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.NavigateEvent':{concept:'Structure',name:'NavigateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'to',description:'to属性的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'replace',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'append',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemEvent':{concept:'Structure',name:'ChangeItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'选择项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItem',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemsEvent':{concept:'Structure',name:'ChangeItemsEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'该选中项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'所有选中项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'items',description:'所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItems',description:'旧的所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CascadeCapsulesEvent':{concept:'Structure',name:'CascadeCapsulesEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'level',description:'选择的层级',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CollapseEvent':{concept:'Structure',name:'CollapseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'expanded',description:'展开/折叠状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'open',description:'弹出/隐藏状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'节点相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SliderEvent':{concept:'Structure',name:'SliderEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'滑块的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'percent',description:'滑块位置所在的百分比',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DateEvent':{concept:'Structure',name:'DateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'date',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'time',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.core.Date':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},'nasl.ui.OperatorItemEvent':{concept:'Structure',name:'OperatorItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'添加的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',description:'添加的索引',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'当前数据',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ValidateEvent':{concept:'Structure',name:'ValidateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'rawValue',description:'用户输入的原始值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'验证修复的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'trigger',description:'本次验证的触发方式',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'muted',description:'是否验证后无提示',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'验证是否通过',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'touched',description:'用户是否触碰',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'dirty',description:'用户是否修改值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'firstError',description:'第一个错误提示消息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PaginationEvent':{concept:'Structure',name:'PaginationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'page',description:'选择的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPage',description:'旧的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageSize',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPageSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'number',description:'当前页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNumber',description:'旧的页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DurationEvent':{concept:'Structure',name:'DurationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'text',description:'提示的内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'color',description:'提示的颜色',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'duration',description:'提示停留的时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TransferEvent':{concept:'Structure',name:'TransferEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'原数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',description:'目标数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transfer',description:'移动的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transferValues',description:'移动项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TreeChangeEvent':{concept:'Structure',name:'TreeChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNode',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CheckedEvent':{concept:'Structure',name:'CheckedEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'checked',description:'选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldChecked',description:'旧的选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.UploadEvent':{concept:'Structure',name:'UploadEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'File',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'file',description:'上传文件信息，不包含文件主体内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xhr',description:'发送前的 XMLHttpRequest 对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formData',description:'用于发送的数据对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xml',description:'服务器回传信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.File':{concept:'Structure',name:'File',typeParams:null,properties:[{concept:'StructureProperty',name:'status',description:'文件状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'url',description:'文件链接',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'文件名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'文件大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'type',description:'文件类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.UploadErrorEvent':{concept:'Structure',name:'UploadErrorEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'name',description:'错误名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'message',description:'错误描述',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'extensions',description:'限制类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'maxSize',description:'限制大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'count',description:'当前数量',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'limit',description:'数量配额',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SortEvent':{concept:'Structure',name:'SortEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'field',description:'排序属性',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',description:'排序顺序',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'compare',description:'排序比较函数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PoiInfo':{concept:'Structure',name:'PoiInfo',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'信息来源',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'id',description:'POI点的id',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'location',description:'经纬度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'address',description:'地址',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SelectData':{concept:'Structure',name:'SelectData',typeParams:null,properties:[{concept:'StructureProperty',name:'parent',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'level',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropUpdateData':{concept:'Structure',name:'DragAndDropUpdateData',typeParams:null,properties:[{concept:'StructureProperty',name:'sourceList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'targetList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropEvent':{concept:'Structure',name:'DragAndDropEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'source',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finalSource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'updateData',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'DragAndDropUpdateData',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ExpandEvent':{concept:'Structure',name:'ExpandEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'展开项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'expanded',description:'展开状态值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ScrollEvent':{concept:'Structure',name:'ScrollEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'scrollHeight',description:'滚动内容高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollWidth',description:'滚动内容宽度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollTop',description:'滚动内容距离顶部高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollLeft',description:'滚动内容距离左侧距离',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientHeight',description:'可视区域高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientWidth',description:'可视区域宽度由',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List':{concept:'Structure',name:'List',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.Map':{concept:'Structure',name:'Map',typeParams:[{concept:'TypeParam',name:'K'},{concept:'TypeParam',name:'V'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.interface.ApiReturnOf':{concept:'Structure',name:'ApiReturnOf',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'Data',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Message',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessDefinition':{concept:'Structure',name:'LCAPProcessDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'suspended',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessInstance':{concept:'Structure',name:'LCAPProcessInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'endTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskDefinition':{concept:'Structure',name:'LCAPTaskDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'emptyAssignee',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'skipEnabled',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskInstance':{concept:'Structure',name:'LCAPTaskInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'taskId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'createTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'taskDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPOperateProcessResult':{concept:'Structure',name:'LCAPOperateProcessResult',typeParams:null,properties:[{concept:'StructureProperty',name:'success',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'failMessage',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<nasl.core.Long>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'{list: nasl.collection.List<nasl.process.LCAPTaskInstance>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.process',typeName:'LCAPTaskInstance',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<nasl.process.LCAPTaskInstance>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.process',typeName:'LCAPTaskInstance',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.collection.List<nasl.process.LCAPTaskDefinition>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.process',typeName:'LCAPTaskDefinition',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'nasl.core.Null':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Null',typeArguments:null,returnType:null,properties:null},'{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},loadResourceByRoleId:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'loadResourceByRoleId',typeArguments:null,returnType:null,properties:null},load:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'load',typeArguments:null,returnType:null,properties:null},getUsersListFromNumis:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'getUsersListFromNumis',typeArguments:null,returnType:null,properties:null},'nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'text',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{text: nasl.core.String, value: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'text',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{CreateTime: nasl.core.Long, Email: nasl.core.String, LoginCount: nasl.core.Long, Phone: nasl.core.String, Source: nasl.core.String, Status: nasl.core.String, UpdateTime: nasl.core.Long, UserId: nasl.core.String, UserInfoExtend: {Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}, UserName: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'CreateTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Email',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'LoginCount',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Phone',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Source',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Status',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UpdateTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UserId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UserInfoExtend',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'Company',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Department',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'EmployeeId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobLevel',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobNum',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobYear',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NameAndEmail',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NickName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'RealName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},isLeaf:true},{concept:'StructureProperty',name:'UserName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'Company',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Department',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'EmployeeId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobLevel',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobNum',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobYear',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NameAndEmail',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NickName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'RealName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}},enumsMap:{UserStatusEnum:{Normal:'正常',Forbidden:'禁用'},UserSourceEnum:{Normal:'普通登录'}},logicsMap:{'app.dataSources.defaultDS.entities.Entity1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/createOrUpdate'}},'app.dataSources.defaultDS.entities.Entity1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1/by'}},'app.dataSources.defaultDS.entities.Entity1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1/by'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/import'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/import'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/import'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/import'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/import'}},'app.logics.LCAPGetUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserList'}},'app.logics.LCAPGetUserByUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserByUserId'}},'app.logics.LCAPGetAllUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetAllUsers'}},'app.logics.LCAPGetUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserTableView'}},'app.logics.LCAPIsExistRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsExistRoleId'}},'app.logics.LCAPLoadPermissionResourceListView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadPermissionResourceListView'}},'app.logics.LCAPGetMappingByPermissionIdAndResourceId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingByPermissionIdAndResourceId'}},'app.logics.LCAPGetScopeResourceByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetScopeResourceByRoleId'}},'app.logics.loadAddRoleUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadAddRoleUserTableView'}},'app.logics.LCAPGetRoleBindUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRoleBindUserList'}},'app.logics.LCAPLoadRoleManagementTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadRoleManagementTableView'}},'app.logics.LCAPLoadUserRoleMappingTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadUserRoleMappingTableView'}},'app.logics.LCAPGetRolePermissionList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRolePermissionList'}},'app.logics.LCAPGetUserResources':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserResources'}},'app.logics.LCAPGetPermissionByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetPermissionByRoleId'}},'app.logics.LCAPGetMappingIdByRoleIdAndUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingIdByRoleIdAndUserId'}},'app.logics.LCAPIsAlreadBindUserIdList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsAlreadBindUserIdList'}},'app.logics.LCAPLoadResourceTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadResourceTableView'}},'app.logics.LCAPIsRoleNameRepeated':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsRoleNameRepeated'}},'extensions.lcap_auth.logics.getUser':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_auth/getUser'}},'extensions.lcap_auth.logics.createToken':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_auth/createToken'}},'extensions.lcap_auth.logics.removeToken':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_auth/removeToken'}},'extensions.lcap_permission.logics.uploadResource':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_permission/uploadResource'}},'extensions.lcap_permission.logics.checkPermission':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_permission/checkPermission'}},'extensions.lcap_permission.logics.getUserResources':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcap_permission/getUserResources'}},'extensions.encrypttools.logics.encryptWithDesAndBase64':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithDesAndBase64'}},'extensions.encrypttools.logics.decryptWithBase64AndDes':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/decryptWithBase64AndDes'}},'extensions.encrypttools.logics.encryptWithMD5':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithMD5'}},'extensions.encrypttools.logics.encryptWithUrlEncode':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithUrlEncode'}},'extensions.encrypttools.logics.encryptWithUrlEncodeByEnc':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithUrlEncodeByEnc'}},'extensions.encrypttools.logics.decryptWithUrlDecode':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/decryptWithUrlDecode'}},'extensions.encrypttools.logics.decryptWithUrlDecodeByEnc':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/decryptWithUrlDecodeByEnc'}},'extensions.encrypttools.logics.signByPrivateKeyWithRSA':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/signByPrivateKeyWithRSA'}},'extensions.encrypttools.logics.encryptWithMD5AndBase64':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithMD5AndBase64'}},'extensions.encrypttools.logics.encryptWithSHA1AndHexLowerCase':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithSHA1AndHexLowerCase'}},'extensions.encrypttools.logics.encryptWithSHA256AndBase64':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithSHA256AndBase64'}},'extensions.encrypttools.logics.encryptWithMD5AndSHA1Base64':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/encrypttools/encryptWithMD5AndSHA1Base64'}},'app.processes.Process2.logics.launch':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/launch'}},'app.processes.Process2.elements.InitiateTask.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/InitiateTask/complete'}},'app.processes.Process2.elements.ApprovalTask.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/ApprovalTask/complete'}},'app.processes.Process2.elements.ApprovalTask.logics.reject':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/ApprovalTask/reject'}},'app.processes.Process2.elements.UserTask1.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/UserTask1/complete'}},'app.processes.Process2.elements.UserTask1.logics.reject':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/UserTask1/reject'}},'app.processes.Process2.elements.UserTask2.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/UserTask2/complete'}},'app.processes.Process2.elements.UserTask2.logics.reject':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process2/UserTask2/reject'}},'app.processes.Process1.logics.launch':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process1/launch'}},'app.processes.Process1.elements.InitiateTask.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process1/InitiateTask/complete'}},'app.processes.Process1.elements.ApprovalTask.logics.complete':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process1/ApprovalTask/complete'}},'app.processes.Process1.elements.ApprovalTask.logics.reject':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/Process1/ApprovalTask/reject'}}},servicesMap:{_custom:{}}};
        var routes = [{
            path: '/login',
component: (function(){
                var componentOptions = (function(){
const mixin = {
    data() {
        const { tenant, domainName, env, nuimsDomain = 'user.lcap.163yun.com' } = window.appInfo;
        const envUri = env === 'dev' ? 'dev.' : '';
        return {
            // window 等变量暂时不支持变成 ASL
            tenantName: tenant,
            domainName,
            env,
            src: `${window.location.protocol}//${envUri}${tenant}.${nuimsDomain}`,
        };
    },
    methods: {
        onSuccess() {
            location.href = '/';
        },
    },
};return {
mixins: [mixin],
        data() {
            return {
                
            };
        },
meta: {
    title: "登录页",
    crumb: undefined,
    first: undefined,
    auth: undefined,
},
methods: {
    async onSuccess () {

await (async () => {
            location.href = '/';
        })();
return;
    }

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="background: url('/assets/login-bg-1.jpg') no-repeat; background-size: cover; height: 100vh;"
    alignment="center" justify="center" type="flex">
    <u-linear-layout :ref="\`uLinearLayout2\`" justify="center" direction="vertical">
        <h1 :ref="\`h11\`">
            <u-text :ref="\`uText1\`" text="登录"></u-text>
        </h1>
        <lcap-login :ref="\`lcap_login1\`" src="http://nuims.vusion.top" :useRedirect="true"
            :mainLoginTypes="[{'name':'Normal','title':'普通登录','type':'boolean','default':true,'description':'是否开启普通登录，默认开启','hidden':true,'plugin':false,'extendProperties':{}}]"></lcap-login>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/index',
component: (function(){
                var componentOptions = (function(){
const mixin = {
    data() {
        return {
            linkCode: 'weixin',
        };
    },
};return {
mixins: [mixin],
        data() {
            return {
                
            };
        },
meta: {
    title: "首页",
    crumb: undefined,
    first: undefined,
    auth: undefined,
},
methods: {
    
},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<div :ref="\`div1\`" style="min-width:1200px;height:100%;">
    <u-multi-layout :ref="\`multi_layout1\`" direction="vertical">
        <u-multi-layout-item :ref="\`multi_layout_item1\`" style="height:60px;">
            <u-navbar-multi :ref="\`navbar_multi1\`">
                <template #right :ref="\`template1\`"></template>
                <template #left :ref="\`template2\`"></template>
                <u-multi-layout-item :ref="\`multi_layout_item5\`" align-items="center">
                    <u-navbar-item-multi :ref="\`navbar_item_multi1\`" text="轻舟低代码" href="/"></u-navbar-item-multi>
                    <u-navbar-item-multi :ref="\`navbar_item_multi2\`" href="/" text="产品"></u-navbar-item-multi>
                    <u-navbar-item-multi :ref="\`navbar_item_multi4\`" href="/" text="关于我们"></u-navbar-item-multi>
                </u-multi-layout-item>
                <u-navbar-item-multi :ref="\`navbar_item_multi3\`" href="/dashboard" text="控制台"></u-navbar-item-multi>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item2\`" style="height:420px;">
            <u-carousel :ref="\`uCarousel1\`" style="width:100%;margin:0 auto;height:420px;text-align:center;">
                <u-carousel-item :ref="\`uCarouselItem1\`">
                    <u-link :ref="\`uLink1\`">
                        <u-image :ref="\`uImage2\`" style="width:100%;height:100%" src="/assets/cloud-ui/1.jpg"></u-image>
                    </u-link>
                </u-carousel-item>
                <u-carousel-item :ref="\`uCarouselItem2\`">
                    <u-link :ref="\`uLink2\`">
                        <u-image :ref="\`uImage3\`" style="width:100%;height:100%" src="/assets/cloud-ui/3.jpg"></u-image>
                    </u-link>
                </u-carousel-item>
            </u-carousel>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item3\`" style="height:;">
            <u-linear-layout :ref="\`uLinearLayout1\`" style="width: 1200px; margin: 0 auto;">
                <u-linear-layout :ref="\`uLinearLayout2\`" style="position:relative;height:840px;margin:0 auto;">
                    <div :ref="\`div4\`" style="position: absolute; top:80px;left:0;right:0; margin:0 auto;text-align:center;">
                        <div :ref="\`div8\`" style="color:#333;font-size:32px;line-height:45px;margin-bottom:12px;font-weight:500">
                            <u-text :ref="\`uText1\`" text="让软件驱动生产力"></u-text>
                        </div>
                        <div :ref="\`div9\`" style="color:#687492;font-size:16px;line-height:22px;">
                            <u-text :ref="\`uText2\`" text="
                    打造更敏捷、更高效的软件生产力平台
                "></u-text>
                        </div>
                    </div>
                    <div :ref="\`div5\`" style="position: absolute;top:285px;left:75px;width:288px">
                        <div :ref="\`div10\`" style="color:#333;font-size:24px;line-height:34px;margin-bottom:16px;font-weight:500">
                            <u-text :ref="\`uText3\`" text="让软件驱动生产力"></u-text>
                        </div>
                        <div :ref="\`div11\`" style="color:#687492;font-size:16px;line-height:32px;">
                            <span :ref="\`span1\`" style="color:#333">
                                <u-text :ref="\`uText10\`" text="服务化："></u-text>
                            </span>
                            <u-text :ref="\`uText4\`" text="重塑企业面向数字化的服务能力
                    "></u-text>
                            <br :ref="\`br1\`" />
                            <span :ref="\`span2\`" style="color:#333">
                                <u-text :ref="\`uText11\`" text="敏   捷："></u-text>
                            </span>
                            <u-text :ref="\`uText5\`" text="敏捷迭代提升研发和运维效率
                    "></u-text>
                            <br :ref="\`br2\`" />
                            <span :ref="\`span3\`" style="color:#333">
                                <u-text :ref="\`uText12\`" text="高   效："></u-text>
                            </span>
                            <u-text :ref="\`uText6\`" text="软件生命周期自动化与协作水平
                    "></u-text>
                            <br :ref="\`br3\`" />
                            <span :ref="\`span4\`" style="color:#333">
                                <u-text :ref="\`uText13\`" text="开   放："></u-text>
                            </span>
                            <u-text :ref="\`uText7\`" text="打造开放的技术体系和软件架构
                "></u-text>
                        </div>
                        <u-link :ref="\`uLink3\`" style="margin-top:16px;font-size:16px;line-height:32px;display: block;" text="查看详情 >"></u-link>
                        <u-button :ref="\`uButton1\`" style="margin-top:40px;height:42px;line-height:42px" color="primary" href="/" text="免费试用"></u-button>
                    </div>
                    <u-image :ref="\`uImage1\`" style="position: absolute;top:240px;left:455px;width:672px;height: 400px" src="/assets/%E5%8F%B3%E5%9B%BE%402x.png"></u-image>
                </u-linear-layout>
            </u-linear-layout>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item4\`">
            <div :ref="\`div2\`" style="height:320px;background:#242A38;width:100%;">
                <div :ref="\`div3\`" style="width: 1200px;margin: 0 auto;">
                    <div :ref="\`div6\`" style="position: relative;height:174px;margin:0 auto ;left:30px;right:0">
                        <div :ref="\`div12\`" style="position: absolute;top:30px;left:0">
                            <div :ref="\`div20\`" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text :ref="\`uText14\`" text="产品和服务"></u-text>
                            </div>
                            <a :ref="\`a1\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText15\`" text="轻舟微服务"></u-text>
                            </a>
                            <a :ref="\`a2\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText16\`" text="轻舟混合云"></u-text>
                            </a>
                            <a :ref="\`a3\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText17\`" text="轻舟低代码"></u-text>
                            </a>
                            <a :ref="\`a4\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText18\`" text="轻舟中间件"></u-text>
                            </a>
                        </div>
                        <div :ref="\`div13\`" style="position: absolute;top:30px;left:217px;">
                            <div :ref="\`div21\`" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text :ref="\`uText19\`" text="关于我们"></u-text>
                            </div>
                            <a :ref="\`a5\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText20\`" text="公司简介"></u-text>
                            </a>
                            <a :ref="\`a6\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText21\`" text="媒体报道"></u-text>
                            </a>
                            <a :ref="\`a7\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText22\`" text="荣誉与认证"></u-text>
                            </a>
                            <a :ref="\`a8\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText23\`" text="友情链接"></u-text>
                            </a>
                        </div>
                        <div :ref="\`div14\`" style="position: absolute;top:30px;left:424px;">
                            <div :ref="\`div22\`" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text :ref="\`uText24\`" text="资源与文档"></u-text>
                            </div>
                            <a :ref="\`a9\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText25\`" text="新手帮助"></u-text>
                            </a>
                            <a :ref="\`a10\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText26\`" text="产品文档"></u-text>
                            </a>
                            <a :ref="\`a11\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText27\`" text="开发者资源"></u-text>
                            </a>
                            <a :ref="\`a12\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText28\`" text="备案帮助"></u-text>
                            </a>
                        </div>
                        <div :ref="\`div15\`" style="position: absolute;top:30px;left:641px;">
                            <div :ref="\`div23\`" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text :ref="\`uText29\`" text="诚邀合作"></u-text>
                            </div>
                            <a :ref="\`a13\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText30\`" text="渠道合作"></u-text>
                            </a>
                            <a :ref="\`a14\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText31\`" text="社区合作"></u-text>
                            </a>
                            <a :ref="\`a15\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText32\`" text="教育合作"></u-text>
                            </a>
                        </div>
                        <div :ref="\`div16\`" style="position: absolute;top:30px;left:842px;">
                            <div :ref="\`div24\`" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text :ref="\`uText33\`" text="管理与支持"></u-text>
                            </div>
                            <a :ref="\`a16\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText34\`" text="控制台"></u-text>
                            </a>
                            <a :ref="\`a17\`" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text :ref="\`uText35\`" text="联系我们"></u-text>
                            </a>
                        </div>
                        <div :ref="\`div17\`" style="position: absolute;left:1049px;top:30px">
                            <a :ref="\`a18\`"
                                style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
background-size: 24px auto;
background-position: 0 -72px;
background-image: url(/assets/footer-icon-sns.png);"
                                :weixin="true">
                                <u-image :ref="\`uImage4\`" style=" position: absolute;width: 120px;height: 120px;max-width: none;top: 30px;right: -30px;" fit="full"
                                    src="/assets/weixin%402x.png"></u-image>
                            </a>
                        </div>
                    </div>
                    <div :ref="\`div7\`" style="margin-top: 70px;font-size: 14px;line-height: 20px;color:#999;text-align:center">
                        <div :ref="\`div18\`">
                            <u-text :ref="\`uText8\`" text="XX 公司版权所有 © 1997-2020 "></u-text>
                        </div>
                        <div :ref="\`div19\`" style="margin-top:10px">
                            <u-text :ref="\`uText9\`" text="备案号"></u-text>
                        </div>
                    </div>
                </div>
            </div>
        </u-multi-layout-item>
    </u-multi-layout>
</div>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/dashboard',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['taskId']:this.$route.query.hasOwnProperty('taskId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.taskId) :""
            };
        },
meta: {
    title: "总览页",
    crumb: undefined,
    first: undefined,
    auth: undefined,
},
methods: {
    async button1_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process1.logics.launch']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "f52a1639d6d1407b840308b6c8a8e0c4",
                },
            path: {},
                body: {
}
}))
return;
    })();
}
,

async button2_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process1.elements.ApprovalTask.logics.complete']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId, 
approvalComment: `111`, 
approvalResult: `111`},
                headers: {
                    "lcap-calllogic-uuid": "a0135a493eaf4f6f9f33c38fda9f84ec",
                },
            path: {},
                body: {
}
}))
return;
    })();
}
,

async button9_click (event) { 
await (async () => {

this.$genInitFromSchema('{list: nasl.collection.List<nasl.process.LCAPTaskInstance>, total: nasl.core.Long}', await (this.$global.getTaskInstanceList({taskId: undefined, user: undefined, finished: undefined, processId: `5329fe5a-3756-11ee-ba9c-76f9f4ac2cf3`, processIdIn: undefined, processDefName: undefined, taskDefName: undefined, createTimeBefore: undefined, createTimeAfter: undefined, completeTimeBefore: undefined, completeTimeAfter: undefined, page: undefined, size: undefined, sort: undefined, order: undefined})))
return;
    })();
}
,

async button3_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.logics.launch']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "53d3de178b6d42d6bbe234b0a38a4c6b",
                },
            path: {},
                body: {
}
}))
return;
    })();
}
,

async button4_click (event) { 
await (async () => {

this.$genInitFromSchema('nasl.process.LCAPProcessDefinition', await (this.$global.getProcessDefinition({name: `Process2`})))
return;
    })();
}
,

async button5_click (event) { 
await (async () => {

this.$genInitFromSchema('nasl.collection.List<nasl.process.LCAPTaskDefinition>', await (this.$global.getTaskDefinitionList({processDefName: `Process2`})))
return;
    })();
}
,

async button6_click (event) { 
await (async () => {

this.$genInitFromSchema('nasl.process.LCAPOperateProcessResult', await (this.$global.setProcessDefinitionState({name: `Process2`, state: false, processInstancesAffected: false, effectiveDate: this.$utils['CurrDate']()})))
return;
    })();
}
,

async button7_click (event) { 
await (async () => {

this.$genInitFromSchema('nasl.process.LCAPOperateProcessResult', await (this.$global.setProcessDefinitionState({name: `Process2`, state: true, processInstancesAffected: false, effectiveDate: this.$utils['CurrDate']()})))
return;
    })();
}
,

async button8_click (event) { 
await (async () => {

this.$genInitFromSchema('nasl.process.LCAPOperateProcessResult', await (this.$global.updateTaskDefinitionStrategy({processDefName: `Process2`, name: `ApprovalTask`, emptyAssignee: `RETURN_INITIALTASK`, skipEnabled: true})))
return;
    })();
}
,

async dropdown_item1_click (event) { 
await (async () => {

await (this.$global.logout({}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-multi-layout :ref="\`multi_layout1\`" direction="vertical">
        <u-multi-layout-item :ref="\`multi_layout_item1\`" style="height: 60px;">
            <u-navbar-multi :ref="\`navbar_multi1\`">
                <template #right :ref="\`template1\`">
                    <u-multi-layout-item :ref="\`multi_layout_item6\`" align-items="center" justify="end">
                        <u-dropdown :ref="\`dropdown1\`" style="margin-right: 10px;">
                            <template #default :ref="\`template3\`">
                                <u-dropdown-item :ref="\`dropdown_item1\`" @click="dropdown_item1_click(\$event)">
                                    <u-text :ref="\`text2\`" text="安全退出"></u-text>
                                </u-dropdown-item>
                            </template>
                            <template #title :ref="\`template4\`">
                                <u-linear-layout :ref="\`linear_layout1\`" gap="small" v-if="\$global.userInfo">
                                    <u-taskbox :ref="\`taskbox1\`" icon="notice"></u-taskbox>
                                    <u-image :ref="\`image2\`" style="width: 36px; height: 36px; vertical-align: middle;" src="/assets/avatar-default.svg" fit="cover"></u-image>
                                    <span :ref="\`span1\`" style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                                        <u-text :ref="\`text3\`" :text="\$utils['ToString']((\$global.userInfo || {}).UserName, 'nasl.core.String')"></u-text>
                                    </span>
                                </u-linear-layout>
                            </template>
                        </u-dropdown>
                    </u-multi-layout-item>
                </template>
                <template #left :ref="\`template2\`">
                    <u-multi-layout-item :ref="\`multi_layout_item7\`" style="width:200px;" align-items="center">
                        <u-image :ref="\`image1\`" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;" fit="cover"
                            src="/assets/lcap-logo-light.svg"></u-image>
                        <u-text :ref="\`text1\`" style="color: white; --custom-start: auto; vertical-align: middle;" size="large" text="应用名称"></u-text>
                    </u-multi-layout-item>
                </template>
                <u-multi-layout-item :ref="\`multi_layout_item5\`" align-items="center">
                    <u-navbar-item-multi :ref="\`navbar_item_multi1\`" :destination="\`\`" target="_self">
                        <u-text :ref="\`text6\`" text="顶部导航1"></u-text>
                    </u-navbar-item-multi>
                    <u-navbar-item-multi :ref="\`navbar_item_multi2\`" target="_self">
                        <u-text :ref="\`text7\`" text="顶部导航2"></u-text>
                    </u-navbar-item-multi>
                </u-multi-layout-item>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item2\`">
            <u-multi-layout :ref="\`multi_layout2\`">
                <u-multi-layout-item :ref="\`multi_layout_item3\`" style="width: 200px;left:0;" :fixed="true">
                    <u-sidebar :ref="\`sidebar1\`" :router="true">
                        <u-sidebar-item :ref="\`sidebar_item1\`" :value="null" :destination="\`\`">
                            <u-text :ref="\`text4\`" text="导航链接1"></u-text>
                        </u-sidebar-item>
                        <u-sidebar-item :ref="\`sidebar_item2\`" :value="null" :destination="\`\`">
                            <u-text :ref="\`text5\`" text="导航链接2"></u-text>
                        </u-sidebar-item>
                    </u-sidebar>
                </u-multi-layout-item>
                <u-multi-layout-item :ref="\`multi_layout_item4\`" style="margin-left:200px;padding:40px 40px 40px 40px;">
                    <u-crumb :ref="\`crumb1\`" :auto="true"></u-crumb>
                    <u-router-view :ref="\`router_view1\`"></u-router-view>
                    <u-button :ref="\`button1\`" color="primary" text="启动" @click="button1_click(\$event)"></u-button>
                    <u-button :ref="\`button2\`" color="primary" text="审批" @click="button2_click(\$event)"></u-button>
                    <u-linear-layout :ref="\`linear_layout2\`" direction="horizontal">
                        <u-button :ref="\`button3\`" color="primary" text="启动2" @click="button3_click(\$event)"></u-button>
                    </u-linear-layout>
                    <u-linear-layout :ref="\`linear_layout3\`" direction="horizontal">
                        <u-button :ref="\`button4\`" color="primary" text="查询流程2定义" @click="button4_click(\$event)"></u-button>
                    </u-linear-layout>
                    <u-linear-layout :ref="\`linear_layout4\`" direction="vertical">
                        <u-linear-layout :ref="\`linear_layout5\`">
                            <u-button :ref="\`button5\`" color="primary" text="查询流程2任务定义" @click="button5_click(\$event)"></u-button>
                        </u-linear-layout>
                        <u-linear-layout :ref="\`linear_layout6\`">
                            <u-button :ref="\`button6\`" color="primary" text="挂起" @click="button6_click(\$event)"></u-button>
                        </u-linear-layout>
                    </u-linear-layout>
                    <u-linear-layout :ref="\`linear_layout7\`" direction="vertical">
                        <u-linear-layout :ref="\`linear_layout8\`">
                            <u-button :ref="\`button7\`" color="primary" text="激活" @click="button7_click(\$event)"></u-button>
                        </u-linear-layout>
                        <u-linear-layout :ref="\`linear_layout9\`">
                            <u-button :ref="\`button8\`" color="primary" text="审批任务设为自动跳过" @click="button8_click(\$event)"></u-button>
                        </u-linear-layout>
                    </u-linear-layout>
                    <u-button :ref="\`button9\`" color="primary" text="查询流程实例下任务列表" @click="button9_click(\$event)"></u-button>
                </u-multi-layout-item>
            </u-multi-layout>
        </u-multi-layout-item>
    </u-multi-layout>
</l-root>
`,
                });
                return componentOptions;
            })(),
children: [
                {
            path: 'process2renwu2',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['taskId']:this.$route.query.hasOwnProperty('taskId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.taskId) :""
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async button1_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.elements.UserTask2.logics.complete']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId},
                headers: {
                    "lcap-calllogic-uuid": "c8c1f544bb474a83ba98c9ecc1c33924",
                },
            path: {},
                body: {
}
}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <u-button :ref="\`button1\`" color="primary" text="完成" @click="button1_click(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'process2renwu1',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['taskId']:this.$route.query.hasOwnProperty('taskId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.taskId) :""
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async button1_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.elements.UserTask1.logics.complete']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId},
                headers: {
                    "lcap-calllogic-uuid": "e2eb80b1b1ed4856beb9a9f6b3b17629",
                },
            path: {},
                body: {
}
}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <u-button :ref="\`button1\`" color="primary" text="完成" @click="button1_click(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'process2faqi',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['taskId']:this.$route.query.hasOwnProperty('taskId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.taskId) :""
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async button1_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.elements.InitiateTask.logics.complete']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId},
                headers: {
                    "lcap-calllogic-uuid": "66cac9cfc3be4a7c9f6a7c6f5180274c",
                },
            path: {},
                body: {
}
}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <u-button :ref="\`button1\`" color="primary" text="发起" @click="button1_click(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'process2shenpi',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['taskId']:this.$route.query.hasOwnProperty('taskId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.taskId) :""
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async button1_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.elements.ApprovalTask.logics.complete']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId, 
approvalComment: `111`, 
approvalResult: `111`},
                headers: {
                    "lcap-calllogic-uuid": "c4d99e13e1c044339f7366868d077a6f",
                },
            path: {},
                body: {
}
}))
return;
    })();
}
,

async button2_click (event) { 
await (async () => {

await (this.$logics['app.processes.Process2.elements.ApprovalTask.logics.reject']({
                config: {
                    download: false,
                },
                query: {
taskId: this.taskId, 
targetTaskDefinitionId: `InitiateTask`, 
approvalComment: `111`, 
approvalResult: `111`},
                headers: {
                    "lcap-calllogic-uuid": "ed9b251fcc3545028386a62a3b5338e8",
                },
            path: {},
                body: {
}
}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <u-button :ref="\`button1\`" color="primary" text="审批" @click="button1_click(\$event)"></u-button>
    <u-button :ref="\`button2\`" color="primary" text="驳回" @click="button2_click(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
}
            ],
},
{
            path: '/permission_center',
component: (function(){
                var componentOptions = (function(){
const mixin = {     data() {         return {             userInfo: null,             noticeCount: 0,             noticeActive: false,         };     },     watch: {         $route: {             immediate: true,             handler($route) {                 this.noticeActive = $route.path.startsWith('/notice');             },         },     },     created() {         this.$auth && this.$auth.getUserInfo().then((userInfo) => this.userInfo = userInfo);     },     methods: {         logout() {             /* eslint-disable new-cap */             this.$confirm('确定退出登录吗？', '提示')                 .then(() => this.$auth.logout())                 .then(() => {                     this.eraseCookie();                     location.reload();                 });         },         eraseCookie() {             const cookies = document.cookie.split(';');             cookies.forEach((cookie) => {                 const eqPos = cookie.indexOf('=');                 const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;                 const d = new Date();                 d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));                 document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;             });         },     }, };return {
mixins: [mixin],
        data() {
            return {
                
            };
        },
meta: {
    title: "权限中心",
    crumb: undefined,
    first: "userManagement",
    auth: "loginAuth",
},
methods: {
    async dropdown_item1_click (event) { 
await (async () => {

await (this.$global.logout({}))
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-multi-layout :ref="\`multi_layout1\`" direction="vertical">
        <u-multi-layout-item :ref="\`multi_layout_item1\`" style="height: 60px;">
            <u-navbar-multi :ref="\`navbar_multi1\`">
                <template #right :ref="\`template1\`">
                    <u-multi-layout-item :ref="\`multi_layout_item6\`" align-items="center" justify="end">
                        <u-dropdown :ref="\`dropdown1\`" style="margin-right: 10px;">
                            <template #default :ref="\`template3\`">
                                <u-dropdown-item :ref="\`dropdown_item1\`" @click="dropdown_item1_click(\$event)">
                                    <u-text :ref="\`text2\`" text="安全退出"></u-text>
                                </u-dropdown-item>
                            </template>
                            <template #title :ref="\`template4\`">
                                <u-linear-layout :ref="\`linear_layout1\`" gap="small" v-if="\$global.userInfo">
                                    <u-image :ref="\`image2\`" style="width: 36px; height: 36px; vertical-align: middle;" src="/assets/avatar-default.svg" fit="cover"></u-image>
                                    <span :ref="\`span1\`" style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                                        <u-text :ref="\`text3\`" :text="\$utils['ToString']((\$global.userInfo || {}).UserName, 'nasl.core.String')"></u-text>
                                    </span>
                                </u-linear-layout>
                            </template>
                        </u-dropdown>
                    </u-multi-layout-item>
                </template>
                <template #left :ref="\`template2\`">
                    <u-multi-layout-item :ref="\`multi_layout_item7\`" style="width:200px;" align-items="center">
                        <u-image :ref="\`image1\`" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;" fit="cover"
                            src="/assets/lcap-logo-light.svg"></u-image>
                        <u-text :ref="\`text1\`" style="color: white; --custom-start: auto; vertical-align: middle;" text="权限中心" size="large"></u-text>
                    </u-multi-layout-item>
                </template>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item2\`">
            <u-multi-layout :ref="\`multi_layout2\`">
                <u-multi-layout-item :ref="\`multi_layout_item3\`" style="width: 200px;left:0;" :fixed="true">
                    <u-sidebar :ref="\`sidebar1\`" value="3" :router="true">
                        <u-sidebar-item :ref="\`sidebar_item1\`" :destination="\`/permission_center/userManagement\`" value="1">
                            <u-text :ref="\`text4\`" text="用户管理"></u-text>
                        </u-sidebar-item>
                        <u-sidebar-item :ref="\`sidebar_item2\`" :destination="\`/permission_center/roleManagement\`" value="1">
                            <u-text :ref="\`text5\`" text="角色管理"></u-text>
                        </u-sidebar-item>
                    </u-sidebar>
                </u-multi-layout-item>
                <u-multi-layout-item :ref="\`multi_layout_item4\`" style="margin-left:200px;padding:40px 40px 40px 40px;">
                    <u-crumb :ref="\`crumb1\`" :auto="true"></u-crumb>
                    <u-router-view :ref="\`router_view1\`"></u-router-view>
                </u-multi-layout-item>
            </u-multi-layout>
        </u-multi-layout-item>
    </u-multi-layout>
</l-root>
`,
                });
                return componentOptions;
            })(),
children: [
                {
            path: 'addRoleUser',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['roleid']:this.$route.query.hasOwnProperty('roleid') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.roleid) :1,
['roleName']:this.$route.query.hasOwnProperty('roleName') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.roleName) :"",
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', undefined),
['alreadyBindRoleUserList']:this.$genInitFromSchema('nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', undefined),
['lCAPUserRoleMapping']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', undefined),
['userIdListBySelect']:this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
['itemInputVariable']:undefined,
['itemInputVariable1']:undefined
            };
        },
meta: {
    title: "为角色添加成员",
    crumb: undefined,
    first: undefined,
    auth: "loginAuth",
},
methods: {
    async getRoleNameByRoleId () {

await (this.$toast.show(this.$utils['ToString'](this.roleid, 'nasl.core.Long')))
return;
    }
,

async create () {

this.input = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', this.$utils['Clone'](this.lCAPUserRoleMapping))
return;
    }
,

async roleAddUserReduplicate (inputUserId, inputRoleId) {
        inputUserId = inputUserId || (this.$route.query.hasOwnProperty('inputUserId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.inputUserId) : "");
        inputRoleId = inputRoleId || (this.$route.query.hasOwnProperty('inputRoleId') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.inputRoleId) : "");
        let userIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.String>',undefined);
        let result =undefined;

this.alreadyBindRoleUserList = this.$genInitFromSchema('nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>', await (this.$logics['app.logics.LCAPGetRoleBindUserList']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "b52127a8a3924adbbde249442fac8983",
                },
            path: {},
                body: {
inputRoleId: inputRoleId
}
})))
var $forEachListVariable5680 = this.alreadyBindRoleUserList;
var $forEachStartVariable5680 = 0;
var $forEachEndVariable5680 = (this.alreadyBindRoleUserList || {}).length;
if(Array.isArray($forEachListVariable5680)) {
for (let i = $forEachStartVariable5680; i < $forEachEndVariable5680; i++) {
const item = $forEachListVariable5680[i];
this.$utils['Add'](userIdList, ((item || {}).lCAPUserRoleMapping || {}).userId)
}
}

result = this.$utils['Contains'](userIdList, inputUserId)
return result;
    }
,

async submit () {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs[`form1`] && this.$refs[`form1`].validate && this.$refs[`form1`].validate())
if ((validateResult || {}).valid) {
if (this.$utils['Convert']((this.input || {}).id, {"concept":"TypeAnnotation","name":"","typeKind":"primitive","typeNamespace":"nasl.core","typeName":"Boolean","typeArguments":null,"returnType":null,"properties":null})) {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "fe5252b664ee4575ade12c4da2ba5ec6",
                },
            body: {
entity: this.input},

})))
}             else {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "04aa301b15ec4ed9bd9f05fe539456f8",
                },
            
body: this.input
})))
}

await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
}         else {
}

return;
    }
,

async modify (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>',current || (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>', this.$route.query.current) : ""));

this.input = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', this.$utils['Clone'](((current || {}).item || {}).lCAPUserRoleMapping))
await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open())
return;
    }
,

async getUsersListFromNumis () {
        let returnBody =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}',undefined);
        let result =this.$genInitFromSchema('nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>',undefined);

returnBody = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPGetAllUsers']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "36ea8f560eb24517a50069e0c21ffe17",
                },
            path: {},
                body: {
}
})))
result = (returnBody || {}).list
await (console.log(this.$utils['ToString'](result, 'nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>')))
this.$utils['ListDistinct'](this.userIdListBySelect)
return result;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}',undefined);

this.filter.roleId = this.roleid
result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPLoadUserRoleMappingTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "1564ff5e9c6449e98669fb25cd3e8edf",
                },
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
})))
return result;
    }
,

async addRoleUser_created (event) { 
await (async () => {

this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', this.$utils['Clear'](this.filter))
return;
    })();
}
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let createUserAndRole =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping',undefined);
        let isDuplicateUserId =undefined;
        let UserName ="";
        let returnOfGetUser =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser',undefined);

var $forEachListVariable8509 = this.userIdListBySelect;
var $forEachStartVariable8509 = 0;
var $forEachEndVariable8509 = (this.userIdListBySelect || {}).length;
if(Array.isArray($forEachListVariable8509)) {
for (let i = $forEachStartVariable8509; i < $forEachEndVariable8509; i++) {
const item = $forEachListVariable8509[i];
isDuplicateUserId = await (this.roleAddUserReduplicate(item, this.roleid))
returnOfGetUser = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', await (this.$logics['app.logics.LCAPGetUserByUserId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "38d3629ca7d64149bbf9e788d364b108",
                },
            path: {},
                body: {
userId: item
}
})))
UserName = (returnOfGetUser || {}).userName
if ((isDuplicateUserId) == (true)) {
} else {
createUserAndRole.roleId = this.roleid
createUserAndRole.userName = UserName
createUserAndRole.userId = item
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping', await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "4ff4bbb303244b18b800eff5cd794405",
                },
            
body: createUserAndRole
})))
}

}
}

await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close())
this.userIdListBySelect = undefined
await (this.$toast.show(this.$utils['ToString'](`添加成功！`, 'nasl.core.String')))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close())
return;
    })();
}
,

async uLink1_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "f639b13331354c5b82c034355e590564",
                },
            query: {
id: (((current || {}).item || {}).lCAPUserRoleMapping || {}).id},
body: {}
}))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`移除成功！`, 'nasl.core.String')))
return;
    })();
}

},
        async created () {
        await this.addRoleUser_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-router-view :ref="\`uRouterView1\`"></u-router-view>
    <u-form-item :ref="\`uFormItem1\`" style="margin:0 0 0 0;" placement="right">
        <u-input :ref="\`uInput1\`" style="border-color:#FEFEFE;" :readonly="true" placeholder="请输入用户名" :value="roleName"></u-input>
        <template #label :ref="\`template10\`">
            <u-text :ref="\`text5\`" text="角色名"></u-text>
        </template>
    </u-form-item>
    <u-linear-layout :ref="\`uLinearLayout1\`" direction="vertical">
        <u-button :ref="\`uButton1\`" style="text-align:left;margin:0 0 0 0;" text="添加成员" color="primary" @click="uButton1_click(\$event)"></u-button>
        <u-linear-layout :ref="\`uLinearLayout2\`" style="margin:10px 0px 0px 0px;text-align:left;" justify="space-between"></u-linear-layout>
        <u-table-view :ref="\`tableView\`" :data-source="load" value-field="lCAPUserRoleMapping.id" :show-total="true" pageable="" :remote-paging="true"
            key="tableView">
            <u-table-view-column :ref="\`uTableViewColumn1\`" type="index" width="60">
                <template #title :ref="\`template6\`">
                    <u-text :ref="\`text1\`" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`uTableViewColumn2\`">
                <template #cell="current" :ref="\`template4\`">
                    <u-linear-layout :ref="\`uLinearLayout4_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`uText2_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUserRoleMapping || {}).userName, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template7\`">
                    <u-text :ref="\`text2\`" text="用户名"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`uTableViewColumn3\`">
                <template #cell="current" :ref="\`template5\`">
                    <u-linear-layout :ref="\`uLinearLayout5_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-link :ref="\`uLink1_\${(current || {}).__nodeKey || (current || {}).index}\`" text="移除 " @click="uLink1_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template8\`">
                    <u-text :ref="\`text3\`" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :ref="\`saveModal\`">
            <template #foot :ref="\`template1\`">
                <u-linear-layout :ref="\`uLinearLayout3\`">
                    <u-button :ref="\`uButton2\`" text="添加" color="primary" @click="uButton2_click(\$event)" v-if="((input || {}).id) == (undefined)"></u-button>
                    <u-button :ref="\`uButton3\`" style="border-color:#327EF8;color:#8D8787;background-color:#F8F8F8;" text="取消" color="primary" @click="uButton3_click(\$event)"
                        v-if="((input || {}).id) == (undefined)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="\`template2\`">
                <u-form :ref="\`form1\`" key="form1">
                    <u-form-item :ref="\`uFormItem2\`">
                        <u-select :ref="\`uSelect1\`" placeholder="请选择用户名，支持搜索" :data-source="getUsersListFromNumis" :filterable="false" :value.sync="userIdListBySelect"
                            :multiple="true" :remote-filtering="true" value-field="lCAPUser.userId" :pageable="true" text-field="lCAPUser.userName" :remote-paging="false"
                            :clearable="true" :show-render-footer="false" :pagination="true" :page-size="10" key="uSelect1"></u-select>
                        <template #label :ref="\`template9\`">
                            <u-text :ref="\`text4\`" text="用户名"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="\`template3\`">
                <div :ref="\`div1\`" v-if="(input || {}).id"></div>
                <div :ref="\`div2\`" v-if="((input || {}).id) == (undefined)">
                    <u-text :ref="\`uText1\`" text="请添加用户 "></u-text>
                </div>
            </template>
        </u-modal>
    </u-linear-layout>
</l-root>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'resourceManagement',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['roleId']:this.$route.query.hasOwnProperty('roleId') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.roleId) :1,
['roleName']:this.$route.query.hasOwnProperty('roleName') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.roleName) :"",
['editable']:this.$route.query.hasOwnProperty('editable') ? this.$genInitFromSchema('nasl.core.Boolean', this.$route.query.editable) :undefined,
['removeResourceId']:undefined,
['variable']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource', undefined),
['removeResourceName']:undefined,
['alreadySelectedResourceIdList']:this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', undefined)
            };
        },
meta: {
    title: "资源管理",
    crumb: undefined,
    first: undefined,
    auth: "loginAuth",
},
methods: {
    async addResource () {

this.variable.name = `13123`
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource', await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "a54c6a85f7a24174b5b867b418006936",
                },
            
body: this.variable
})))
return;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}',undefined);

result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPLoadResourceTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "8c00beb7044c4385a10aa292bffa05a4",
                },
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order
}
})))
return result;
    }
,

async loadResourceByRoleId () {
        let variable2 =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}',undefined);
        let variable4 =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource',undefined);
        let variable5 =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>',undefined);
        let result =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>',undefined);

variable2 = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPGetScopeResourceByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "c65908077fab44ba8480ecb96443b7a3",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable5688 = (variable2 || {}).list;
var $forEachStartVariable5688 = 0;
var $forEachEndVariable5688 = ((variable2 || {}).list || {}).length;
if(Array.isArray($forEachListVariable5688)) {
for (let i = $forEachStartVariable5688; i < $forEachEndVariable5688; i++) {
const item = $forEachListVariable5688[i];
variable4 = (item || {}).lCAPResource
this.$utils['Add'](variable5, variable4)
}
}

result = variable5
return result;
    }
,

async remove (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>',current || (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>', this.$route.query.current) : ""));

await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "bd318d032f94439e8837471af00670c4",
                },
            query: {
id: (((current || {}).item || {}).lCAPResource || {}).id},
body: {}
}))
await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload())
return;
    }
,

async loadListView (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}',undefined);

result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPLoadPermissionResourceListView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "5abb2be265c5485696cc32a43e9ba987",
                },
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size
}
})))
return result;
    }
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].open && this.$refs[`selectResourcePopup`].open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let permissionList =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>',undefined);
        let mappingIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>',undefined);

permissionList = this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "022bb889b29a436fb1b677d2997625b4",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable5240 = permissionList;
var $forEachStartVariable5240 = 0;
var $forEachEndVariable5240 = (permissionList || {}).length;
if(Array.isArray($forEachListVariable5240)) {
for (let i = $forEachStartVariable5240; i < $forEachEndVariable5240; i++) {
const item = $forEachListVariable5240[i];
mappingIdList = this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "d4c1ffaccc1142c4ad518805454b1e51",
                },
            path: {},
                body: {
permissionId: (item || {}).id, 
resourceId: this.removeResourceId
}
})))
var $forEachListVariable5778 = mappingIdList;
var $forEachStartVariable5778 = 0;
var $forEachEndVariable5778 = (mappingIdList || {}).length;
if(Array.isArray($forEachListVariable5778)) {
for (let j = $forEachStartVariable5778; j < $forEachEndVariable5778; j++) {
const item1 = $forEachListVariable5778[j];
await (this.$logics['app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "8614faa5521946018e2e0320235f67fb",
                },
            query: {
id: item1},
body: {}
}))
}
}

}
}

await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`移除成功！`, 'nasl.core.String')))
return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close())
return;
    })();
}
,

async uButton4_click (event) { 
await (async () => {
        let permissionList =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>',undefined);
        let mapping =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPerResMapping',undefined);
        let mappingIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>',undefined);

permissionList = this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "69b84106325d4839a497f515e7a7557c",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable3747 = permissionList;
var $forEachStartVariable3747 = 0;
var $forEachEndVariable3747 = (permissionList || {}).length;
if(Array.isArray($forEachListVariable3747)) {
for (let i = $forEachStartVariable3747; i < $forEachEndVariable3747; i++) {
const item = $forEachListVariable3747[i];
var $forEachListVariable6513 = this.alreadySelectedResourceIdList;
var $forEachStartVariable6513 = 0;
var $forEachEndVariable6513 = (this.alreadySelectedResourceIdList || {}).length;
if(Array.isArray($forEachListVariable6513)) {
for (let j = $forEachStartVariable6513; j < $forEachEndVariable6513; j++) {
const item1 = $forEachListVariable6513[j];
mapping.permissionId = (item || {}).id
mapping.resourceId = item1
mappingIdList = this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "14a472301cc54dfca9187d75272bb9fa",
                },
            path: {},
                body: {
permissionId: (mapping || {}).permissionId, 
resourceId: (mapping || {}).resourceId
}
})))
if (((mappingIdList || {}).length) > (0)) {
} else {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPerResMapping', await (this.$logics['app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "29c4f05780e84caea6170411b333afe2",
                },
            
body: mapping
})))
}

}
}

}
}

await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`资源添加成功！`, 'nasl.core.String')))
return;
    })();
}
,

async uButton5_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close())
this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', this.$utils['Clear'](this.alreadySelectedResourceIdList))
return;
    })();
}
,

async uLink1_click (event,current) { 
await (async () => {

this.removeResourceName = ((current || {}).item || {}).name
this.removeResourceId = ((current || {}).item || {}).id
await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].open && this.$refs[`removeResourcePopup`].open())
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-router-view :ref="\`uRouterView1\`"></u-router-view>
    <u-button :ref="\`uButton1\`" style="margin:0 0 15px 0;" text="新增关联资源 " :disabled="(editable) == (false)" color="primary" @click="uButton1_click(\$event)"></u-button>
    <u-form :ref="\`uForm1\`" gap="large" key="uForm1">
        <u-form-item :ref="\`uFormItem1\`" style="margin:0 0 0 0;text-align:left;" :required="false">
            <u-input :ref="\`uInput1\`" style="border-color:#fcfcfc;" :placeholder="roleId" :disabled="false" :value.sync="roleName" :readonly="true"></u-input>
            <template #label :ref="\`template12\`">
                <u-text :ref="\`text1\`" text="角色名"></u-text>
            </template>
        </u-form-item>
    </u-form>
    <u-table-view :ref="\`tableView\`" :data-source="loadResourceByRoleId" :show-sizer="true" values="" value-field="lCAPResource.id" :remote-paging="false"
        :show-total="true" :pageable="true" key="tableView">
        <u-table-view-column :ref="\`uTableViewColumn1\`" style="height:auto;width:40px;" :width="50" type="index">
            <template #title :ref="\`template13\`">
                <u-text :ref="\`text2\`" text="序号"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column :ref="\`uTableViewColumn2\`" type="normal">
            <template #cell="current" :ref="\`template7\`">
                <u-linear-layout :ref="\`uLinearLayout5_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                    <u-text :ref="\`uText4_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString'](((current || {}).item || {}).name, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="\`template14\`">
                <u-text :ref="\`text3\`" text="资源路径"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column :ref="\`uTableViewColumn3\`">
            <template #cell="current" :ref="\`template8\`">
                <u-linear-layout :ref="\`uLinearLayout6_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                    <u-text :ref="\`uText5_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString'](((current || {}).item || {}).description, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="\`template15\`">
                <u-text :ref="\`text4\`" text="资源描述"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column :ref="\`uTableViewColumn4\`">
            <template #cell="current" :ref="\`template9\`">
                <u-linear-layout :ref="\`uLinearLayout7_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                    <u-link :ref="\`uLink1_\${(current || {}).__nodeKey || (current || {}).index}\`" text="移除该资源 " :disabled="(editable) == (false)" @click="uLink1_click(\$event, current)"></u-link>
                </u-linear-layout>
            </template>
            <template #title :ref="\`template16\`">
                <u-text :ref="\`text5\`" text="操作"></u-text>
            </template>
        </u-table-view-column>
    </u-table-view>
    <u-modal :ref="\`removeResourcePopup\`">
        <template #foot :ref="\`template1\`">
            <u-linear-layout :ref="\`uLinearLayout1\`">
                <u-button :ref="\`uButton2\`" text="确定" color="primary" @click="uButton2_click(\$event)"></u-button>
                <u-button :ref="\`uButton3\`" text="取消" @click="uButton3_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template2\`">
            <u-linear-layout :ref="\`uLinearLayout2\`" direction="vertical">
                <u-text :ref="\`uText3\`" :text="\$utils['ToString'](removeResourceName, 'nasl.core.String')"></u-text>
            </u-linear-layout>
        </template>
        <template #title :ref="\`template3\`">
            <u-text :ref="\`uText1\`" text="确定移除下面资源？"></u-text>
        </template>
    </u-modal>
    <u-modal :ref="\`selectResourcePopup\`" size="huge">
        <template #foot :ref="\`template4\`">
            <u-linear-layout :ref="\`uLinearLayout3\`">
                <u-button :ref="\`uButton4\`" color="primary" text="确定" @click="uButton4_click(\$event)"></u-button>
                <u-button :ref="\`uButton5\`" text="取消" @click="uButton5_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template5\`">
            <u-linear-layout :ref="\`uLinearLayout4\`" direction="vertical">
                <u-table-view :ref="\`tableView1\`" :values="alreadySelectedResourceIdList" value-field="lCAPResource.id" :pageable="true" :show-sizer="true"
                    :data-source="load" :remote-paging="true" key="tableView1">
                    <u-table-view-column :ref="\`uTableViewColumn5\`" type="checkbox" :width="100">
                        <template #title :ref="\`template17\`">
                            <u-text :ref="\`text6\`" text="序号"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="\`uTableViewColumn6\`">
                        <template #cell="current" :ref="\`template10\`">
                            <u-linear-layout :ref="\`uLinearLayout8_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                                <u-text :ref="\`uText6_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource || {}).name, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="\`template18\`">
                            <u-text :ref="\`text7\`" text="资源路径"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="\`uTableViewColumn7\`">
                        <template #cell="current" :ref="\`template11\`">
                            <u-linear-layout :ref="\`uLinearLayout9_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                                <u-text :ref="\`uText7_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource || {}).description, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="\`template19\`">
                            <u-text :ref="\`text8\`" text="资源描述"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </template>
        <template #title :ref="\`template6\`">
            <u-text :ref="\`uText2\`" text="请勾选需要控制的资源 "></u-text>
        </template>
    </u-modal>
</l-root>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'roleManagement',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['rolePermissionBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPermission', undefined),
['updateRoleDes']:"",
['rolePermissionMappingBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRolePerMapping', undefined),
['deleteRoleBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', undefined),
['rolePermissionList']:this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', undefined),
['updateRoleName']:"",
['lCAPRole']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', undefined),
['permissionDescription']:"",
['updateRoleId']:undefined,
['inputRoleBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', undefined),
['isNameRepeated']:undefined
            };
        },
meta: {
    title: "角色管理",
    crumb: undefined,
    first: undefined,
    auth: "loginAuth",
},
methods: {
    async submit () {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

if ((validateResult || {}).valid) {
if (this.$utils['Convert']((this.inputRoleBody || {}).id, {"concept":"TypeAnnotation","name":"","typeKind":"primitive","typeNamespace":"nasl.core","typeName":"Boolean","typeArguments":null,"returnType":null,"properties":null})) {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "fd59b09e022d498c8f78a3a9b460f34f",
                },
            body: {
entity: this.inputRoleBody},

})))
}             else {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "4bf39a3e86284c09a9d03e64b1d293b5",
                },
            
body: this.inputRoleBody
})))
}

await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
}         else {
}

return;
    }
,

async getRolePermission () {
        let result =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>',undefined);

result = this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "c56618e87d774f40b513f51de20bfc64",
                },
            path: {},
                body: {
roleId: (this.inputRoleBody || {}).id
}
})))
return result;
    }
,

async modify (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>',current || (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>', this.$route.query.current) : ""));
        let resultRoleId =undefined;

this.inputRoleBody = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clone'](((current || {}).item || {}).lCAPRole))
resultRoleId = (((current || {}).item || {}).lCAPRole || {}).id
return resultRoleId;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}',undefined);

result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPLoadRoleManagementTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "43c894bde23345d48f4cecb81b3a8b97",
                },
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
})))
return result;
    }
,

async isRoleNameRepeated (roleName) {
        roleName = roleName || (this.$route.query.hasOwnProperty('roleName') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.roleName) : "");
        let result =undefined;

result = await (this.$logics['app.logics.LCAPIsRoleNameRepeated']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "c32baaca823943f68d51aa3d5c325bce",
                },
            path: {},
                body: {
roleName: roleName
}
}))
return result;
    }
,

async create () {

this.inputRoleBody = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clone'](this.lCAPRole))
return;
    }
,

async remove (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>',current || (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>', this.$route.query.current) : ""));

await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "32abe51881c744b1935571e693189b96",
                },
            query: {
id: (((current || {}).item || {}).lCAPRole || {}).id},
body: {}
}))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
return;
    }
,

async roleManagement_created (event) { 
await (async () => {

this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clear'](this.filter))
return;
    })();
}
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].open && this.$refs[`createRolePopup`].open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let updateRoleBody =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole',undefined);
        let variable1 =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole',undefined);

this.isNameRepeated = await (this.isRoleNameRepeated(this.updateRoleName))
variable1 = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.get']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "8ca6393c14ab479b8369d2b3bf7f149b",
                },
            query: {
id: this.updateRoleId},
body: {}
})))
if (((this.isNameRepeated) == (true)) && ((this.updateRoleName) != ((variable1 || {}).name))) {
await (this.$toast.show(this.$utils['ToString'](`重复的角色名！`, 'nasl.core.String')))
}         else {
updateRoleBody = variable1
updateRoleBody.id = this.updateRoleId
updateRoleBody.name = this.updateRoleName
updateRoleBody.description = this.updateRoleDes
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "31f8f52ddb7542279626f06a58eb2dd4",
                },
            body: {
entity: updateRoleBody},

})))
await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].close && this.$refs[`updateRolePopup`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`修改成功！`, 'nasl.core.String')))
}

return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].close && this.$refs[`updateRolePopup`].close())
return;
    })();
}
,

async uButton4_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].close && this.$refs[`rolePermissionPopup`].close())
return;
    })();
}
,

async uButton5_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].close && this.$refs[`rolePermissionPopup`].close())
return;
    })();
}
,

async uButton6_click (event) { 
await (async () => {

this.isNameRepeated = await (this.isRoleNameRepeated((this.inputRoleBody || {}).name))
if ((this.isNameRepeated) == (true)) {
await (this.$toast.show(this.$utils['ToString'](`重复的角色名！`, 'nasl.core.String')))
}         else {
this.inputRoleBody = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "24984f03f7664239aed2d7da2523fab5",
                },
            
body: this.inputRoleBody
})))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
this.rolePermissionBody.name = (this.inputRoleBody || {}).name
this.permissionDescription = this.$utils['Concat'](this.$utils['ToString'](`角色`, 'nasl.core.String'), this.$utils['ToString']((this.inputRoleBody || {}).name, 'nasl.core.String'))
this.permissionDescription = this.$utils['Concat'](this.$utils['ToString'](this.permissionDescription, 'nasl.core.String'), this.$utils['ToString'](`对应的权限`, 'nasl.core.String'))
this.rolePermissionBody.description = this.permissionDescription
this.rolePermissionBody = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPermission', await (this.$logics['app.dataSources.defaultDS.entities.LCAPPermission.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "e87a6504a6e44c53b22d492f09dc1760",
                },
            
body: this.rolePermissionBody
})))
this.rolePermissionMappingBody.permissionId = (this.rolePermissionBody || {}).id
this.rolePermissionMappingBody.roleId = (this.inputRoleBody || {}).id
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRolePerMapping', await (this.$logics['app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "8407fbe0262a461c9fba53dccb1144a4",
                },
            
body: this.rolePermissionMappingBody
})))
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clear'](this.inputRoleBody))
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPermission', this.$utils['Clear'](this.rolePermissionBody))
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRolePerMapping', this.$utils['Clear'](this.rolePermissionMappingBody))
await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].close && this.$refs[`createRolePopup`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`创建成功！`, 'nasl.core.String')))
}

return;
    })();
}
,

async uButton7_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].close && this.$refs[`createRolePopup`].close())
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clear'](this.inputRoleBody))
return;
    })();
}
,

async uButton8_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
return;
    })();
}
,

async uButton9_click (event) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "a0ff47a13c7e4062a0e450f65c05f517",
                },
            query: {
id: (this.deleteRoleBody || {}).id},
body: {}
}))
await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close())
await (this.$toast.show(this.$utils['ToString'](`删除成功！`, 'nasl.core.String')))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
return;
    })();
}
,

async uButton10_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close())
return;
    })();
}
,

async uLink2_click (event,current) { 
await (async () => {
        let variable1 =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}',undefined);
        let variable2 =this.$genInitFromSchema('nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>',undefined);

this.inputRoleBody = this.$utils['Clone'](((current || {}).item || {}).lCAPRole)
variable1 = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPGetRolePermissionList']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "bf227c1bf20f486ba4b2ea292f99e88d",
                },
            path: {},
                body: {
inputRoleId: (((current || {}).item || {}).lCAPRole || {}).id
}
})))
variable2 = (variable1 || {}).list
this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', this.$utils['Clear'](this.rolePermissionList))
var $forEachListVariable8720 = variable2;
var $forEachStartVariable8720 = 0;
var $forEachEndVariable8720 = (variable2 || {}).length;
if(Array.isArray($forEachListVariable8720)) {
for (let i = $forEachStartVariable8720; i < $forEachEndVariable8720; i++) {
const item = $forEachListVariable8720[i];
this.$utils['Add'](this.rolePermissionList, (item || {}).lCAPPermission)
}
}

await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].open && this.$refs[`rolePermissionPopup`].open())
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole', this.$utils['Clear'](this.inputRoleBody))
return;
    })();
}
,

async uLink4_click (event,current) { 
await (async () => {

this.updateRoleName = (((current || {}).item || {}).lCAPRole || {}).name
this.updateRoleId = (((current || {}).item || {}).lCAPRole || {}).id
this.updateRoleDes = (((current || {}).item || {}).lCAPRole || {}).description
await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].open && this.$refs[`updateRolePopup`].open())
return;
    })();
}
,

async uLink5_click (event,current) { 
await (async () => {

this.deleteRoleBody = ((current || {}).item || {}).lCAPRole
await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].open && this.$refs[`deleteRolePopup`].open())
return;
    })();
}

},
        async created () {
        await this.roleManagement_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-router-view :ref="\`uRouterView1\`"></u-router-view>
    <u-linear-layout :ref="\`uLinearLayout1\`" direction="vertical">
        <u-form :ref="\`uForm1\`" layout="inline" label-size="auto" key="uForm1">
            <u-form-item :ref="\`uFormItem1\`">
                <u-button :ref="\`uButton1\`" style="margin:0 0 0 0;text-align:left;" color="primary" text="新建角色" :disabled="false" @click="uButton1_click(\$event)"></u-button>
                <u-form-item :ref="\`uFormItem2\`" style="margin:0 0 0 700px;text-align:left;">
                    <u-input :ref="\`uInput1\`" style="margin:0 00px 0 0;" placeholder="请输入角色名称" :value.sync="filter.name"></u-input>
                    <u-button :ref="\`uButton8\`" style="margin:0 00px 0 0;" text="查询" color="primary" @click="uButton8_click(\$event)"></u-button>
                    <template #label :ref="\`template21\`">
                        <u-text :ref="\`text5\`" text="角色名称"></u-text>
                    </template>
                </u-form-item>
            </u-form-item>
        </u-form>
        <u-table-view :ref="\`tableView\`" value-field="lCAPRole.id" :data-source="load" :show-total="true" :sorting="{ field: undefined, order: 'desc' }"
            pageable="" :remote-paging="true" key="tableView">
            <u-table-view-column :ref="\`uTableViewColumn1\`" type="index" width="60">
                <template #title :ref="\`template17\`">
                    <u-text :ref="\`text1\`" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`uTableViewColumn2\`" :width="300">
                <template #cell="current" :ref="\`template13\`">
                    <u-linear-layout :ref="\`uLinearLayout12_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`uText8_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole || {}).name, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template18\`">
                    <u-text :ref="\`text2\`" text="角色名称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`uTableViewColumn3\`" :width="300">
                <template #cell="current" :ref="\`template14\`">
                    <u-linear-layout :ref="\`uLinearLayout13_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small" v-if="((((current || {}).item || {}).lCAPRole || {}).editable) == (true)">
                        <u-text :ref="\`uText9_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole || {}).description, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template19\`">
                    <u-text :ref="\`text3\`" text="角色描述"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`uTableViewColumn4\`">
                <template #cell="current" :ref="\`template15\`">
                    <u-linear-layout :ref="\`uLinearLayout14_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-link :ref="\`uLink1_\${(current || {}).__nodeKey || (current || {}).index}\`"
                            :destination="\`/permission_center/addRoleUser?roleid=\${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=\${(((current || {}).item || {}).lCAPRole || {}).name}\`"
                            text="添加成员"></u-link>
                        <u-link :ref="\`uLink2_\${(current || {}).__nodeKey || (current || {}).index}\`" linkType="href" text="关联权限" @click="uLink2_click(\$event, current)"></u-link>
                        <u-link :ref="\`uLink3_\${(current || {}).__nodeKey || (current || {}).index}\`"
                            :destination="\`/permission_center/resourceManagement?roleId=\${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=\${(((current || {}).item || {}).lCAPRole || {}).name}&editable=\${(((current || {}).item || {}).lCAPRole || {}).editable}\`"
                            text="关联资源" :disabled="false" linkType="href"></u-link>
                        <u-link :ref="\`uLink4_\${(current || {}).__nodeKey || (current || {}).index}\`" :disabled="((((current || {}).item || {}).lCAPRole || {}).editable) != (true)"
                            href="" text="编辑角色" linkType="href" @click="uLink4_click(\$event, current)"></u-link>
                        <u-link :ref="\`uLink5_\${(current || {}).__nodeKey || (current || {}).index}\`" text="删除角色" :disabled="((((current || {}).item || {}).lCAPRole || {}).editable) != (true)"
                            linkType="href" href="" @click="uLink5_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template20\`">
                    <u-text :ref="\`text4\`" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :ref="\`deleteRolePopup\`" size="normal">
            <template #foot :ref="\`template10\`">
                <u-linear-layout :ref="\`uLinearLayout8\`">
                    <u-button :ref="\`uButton9\`" color="primary" text="确定" @click="uButton9_click(\$event)"></u-button>
                    <u-button :ref="\`uButton10\`" text="取消" @click="uButton10_click(\$event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="\`template11\`">
                <u-linear-layout :ref="\`uLinearLayout9\`" direction="vertical">
                    <u-text :ref="\`uText4\`" text="删除后，该角色对应的成员、权限、资源关联关系都会被删除！"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="\`uLinearLayout10\`" direction="vertical">
                    <u-text :ref="\`uText5\`" text="确定删除角色： "></u-text>
                    <u-text :ref="\`uText6\`" :text="\$utils['ToString']((deleteRoleBody || {}).name, 'nasl.core.String')"></u-text>
                    <u-text :ref="\`uText7\`" text="？"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="\`uLinearLayout11\`" direction="vertical"></u-linear-layout>
            </template>
            <template #title :ref="\`template12\`">
                <u-text :ref="\`text12\`" text="删除角色"></u-text>
            </template>
        </u-modal>
    </u-linear-layout>
    <u-modal :ref="\`updateRolePopup\`">
        <template #foot :ref="\`template1\`">
            <u-linear-layout :ref="\`uLinearLayout2\`">
                <u-button :ref="\`uButton2\`" color="primary" text="提交修改 " @click="uButton2_click(\$event)"></u-button>
                <u-button :ref="\`uButton3\`" text="取消" @click="uButton3_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template2\`">
            <u-linear-layout :ref="\`uLinearLayout3\`" direction="vertical">
                <u-form :ref="\`form2\`" key="form2">
                    <u-form-item :ref="\`uFormItem3\`" :required="true" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]">
                        <u-input :ref="\`uInput2\`" placeholder="请输入角色名称" :value.sync="updateRoleName"></u-input>
                        <template #label :ref="\`template22\`">
                            <u-text :ref="\`text6\`" text="角色名称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`uFormItem4\`">
                        <u-input :ref="\`uInput3\`" :value.sync="updateRoleDes" placeholder="请输入角色描述"></u-input>
                        <template #label :ref="\`template23\`">
                            <u-text :ref="\`text7\`" text="角色描述"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </u-linear-layout>
        </template>
        <template #title :ref="\`template3\`">
            <u-text :ref="\`uText1\`" text="编辑角色"></u-text>
        </template>
    </u-modal>
    <u-modal :ref="\`rolePermissionPopup\`">
        <template #foot :ref="\`template4\`">
            <u-linear-layout :ref="\`uLinearLayout4\`">
                <u-button :ref="\`uButton4\`" color="primary" text="确定" @click="uButton4_click(\$event)"></u-button>
                <u-button :ref="\`uButton5\`" text="取消" @click="uButton5_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template5\`">
            <u-linear-layout :ref="\`uLinearLayout5\`" direction="vertical">
                <u-table-view :ref="\`tableView1\`" value-field="lCAPPermission.id" :pageable="false" :data-source="rolePermissionList" :remote-paging="true"
                    key="tableView1">
                    <u-table-view-column :ref="\`uTableViewColumn5\`" width="60" type="index">
                        <template #title :ref="\`template24\`">
                            <u-text :ref="\`text8\`" text="序号"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column :ref="\`uTableViewColumn6\`">
                        <template #cell="current" :ref="\`template16\`">
                            <u-linear-layout :ref="\`uLinearLayout15_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                                <u-text :ref="\`uText10_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString'](((current || {}).item || {}).name, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title :ref="\`template25\`">
                            <u-text :ref="\`text9\`" text="权限名称"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </template>
        <template #title :ref="\`template6\`">
            <u-text :ref="\`uText2\`" text="关联权限"></u-text>
        </template>
    </u-modal>
    <u-modal :ref="\`createRolePopup\`">
        <template #foot :ref="\`template7\`">
            <u-linear-layout :ref="\`uLinearLayout6\`">
                <u-button :ref="\`uButton6\`" text="立即创建" color="primary" @click="uButton6_click(\$event)"></u-button>
                <u-button :ref="\`uButton7\`" text="取消" @click="uButton7_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template8\`">
            <u-linear-layout :ref="\`uLinearLayout7\`" direction="vertical">
                <u-form :ref="\`form1\`" key="form1">
                    <u-form-item :ref="\`uFormItem5\`" :required="true" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]">
                        <u-input :ref="\`uInput4\`" placeholder="请输入角色名称" :value.sync="inputRoleBody.name"></u-input>
                        <template #label :ref="\`template26\`">
                            <u-text :ref="\`text10\`" text="角色名称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`uFormItem6\`">
                        <u-input :ref="\`uInput5\`" :value.sync="inputRoleBody.description" placeholder="请输入角色描述"></u-input>
                        <template #label :ref="\`template27\`">
                            <u-text :ref="\`text11\`" text="角色描述"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </u-linear-layout>
        </template>
        <template #title :ref="\`template9\`">
            <u-text :ref="\`uText3\`" text="新建角色"></u-text>
        </template>
    </u-modal>
</l-root>
`,
                });
                return componentOptions;
            })(),
},
{
            path: 'userManagement',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['lCAPUser']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', undefined),
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', undefined),
['isUpdate']:undefined,
['deleteUserBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', undefined),
['userList']:this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined)
            };
        },
meta: {
    title: "用户管理",
    crumb: undefined,
    first: undefined,
    auth: "loginAuth",
},
methods: {
    async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params || (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}',undefined);

result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPGetUserTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "ec256e2321d043a68b520559ee0e73bd",
                },
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
})))
return result;
    }
,

async submit () {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}', await (this.getUserNameList()))
this.$utils['ListDistinct'](this.userList)
validateResult = await (this.$refs && this.$refs[`saveModalForm`] && this.$refs[`saveModalForm`].validate && this.$refs[`saveModalForm`].validate())
if ((validateResult || {}).valid) {
if ((this.isUpdate) == (true)) {
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "6fd6deca1ba74926a27e76bb2d319250",
                },
            body: {
entity: this.input},

})))
}             else {
this.input.password = await (this.$global.encryptByAES({string: (this.input || {}).password}))
this.input.userId = this.$utils['Concat'](this.$utils['ToString']((this.input || {}).userName, 'nasl.core.String'), this.$utils['ToString']((this.input || {}).source, 'app.enums.UserSourceEnum'))
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "775e97be796b4929aea9b35397f50854",
                },
            
body: this.input
})))
}

await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close())
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$toast.show(this.$utils['ToString'](`操作成功！`, 'nasl.core.String')))
}         else {
}

return;
    }
,

async getUserNameList () {
        let result =this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}',undefined);

result = this.$genInitFromSchema('{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}', await (this.$logics['app.logics.LCAPGetAllUsers']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "4cf74e40cae3410db8d2bcc2b95d19f1",
                },
            path: {},
                body: {
}
})))
var $forEachListVariable6415 = (result || {}).list;
var $forEachStartVariable6415 = 0;
var $forEachEndVariable6415 = ((result || {}).list || {}).length;
if(Array.isArray($forEachListVariable6415)) {
for (let index = $forEachStartVariable6415; index < $forEachEndVariable6415; index++) {
const item = $forEachListVariable6415[index];
this.$utils['Add'](this.userList, ((item || {}).lCAPUser || {}).userName)
}
}

return result;
    }
,

async userManagement_created (event) { 
await (async () => {

this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', this.$utils['Clear'](this.filter))
return;
    })();
}
,

async button2_click (event) { 
await (async () => {

this.isUpdate = false
this.input = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', this.$utils['Clone'](this.lCAPUser))
await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open())
return;
    })();
}
,

async button5_click (event) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "6d5e5bb1b1754825ab17a119e1433fdb",
                },
            query: {
id: (this.deleteUserBody || {}).id},
body: {}
}))
await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close())
await (this.$toast.show(this.$utils['ToString'](`删除成功！`, 'nasl.core.String')))
this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', this.$utils['Clear'](this.deleteUserBody))
return;
    })();
}
,

async button6_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close())
return;
    })();
}
,

async button1_click (event) { 
await (async () => {

await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload())
return;
    })();
}
,

async button3_click (event) { 
await (async () => {

await (this.submit())
return;
    })();
}
,

async button4_click (event) { 
await (async () => {

await (this.submit())
return;
    })();
}
,

async link1_click (event,current) { 
await (async () => {

this.isUpdate = true
this.input = this.$utils['Clone'](((current || {}).item || {}).lCAPUser)
await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open())
return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

this.deleteUserBody = ((current || {}).item || {}).lCAPUser
await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].open && this.$refs[`deleteModal`].open())
return;
    })();
}

},
        async created () {
        await this.userManagement_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root :ref="\`lRoot1\`">
    <u-router-view :ref="\`uRouterView1\`"></u-router-view>
    <u-linear-layout :ref="\`linear_layout11\`" direction="horizontal">
        <u-alert :ref="\`alert1\`" style="margin:0 0 10px 0;" type="info">
            <template #title :ref="\`template30\`">
                <u-text :ref="\`text29\`" text="开发者可根据需求情况，自行修改或新建用户管理、权限管理页面"></u-text>
            </template>
        </u-alert>
    </u-linear-layout>
    <u-linear-layout :ref="\`linear_layout1\`" direction="vertical">
        <u-linear-layout :ref="\`linear_layout2\`" justify="space-between">
            <u-button :ref="\`button2\`" color="primary" text="创建普通用户" @click="button2_click(\$event)"></u-button>
            <u-form :ref="\`form1\`" layout="inline" label-size="auto" key="form1">
                <u-form-item :ref="\`form_item1\`" style="width:332px;text-align:left;">
                    <u-input :ref="\`input1\`" placeholder="请输入用户名或昵称" :value.sync="filter.userName"></u-input>
                    <template #label :ref="\`template14\`">
                        <u-text :ref="\`text13\`" text="用户名"></u-text>
                    </template>
                </u-form-item>
                <u-form-item :ref="\`form_item5\`">
                    <u-button :ref="\`button1\`" color="primary" text="查询" @click="button1_click(\$event)"></u-button>
                </u-form-item>
            </u-form>
        </u-linear-layout>
        <u-table-view :ref="\`tableView\`" :data-source="load" data-schema="LoadTest2TableViewStructure" value-field="lCAPUser.id" :pageable="true" :remote-paging="true"
            :show-sizer="true" key="tableView">
            <u-table-view-column :ref="\`table_view_column1\`" type="index" width="60">
                <template #title :ref="\`template15\`">
                    <u-text :ref="\`text14\`" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column2\`" field="lCAPUser.userName">
                <template #cell="current" :ref="\`template1\`">
                    <u-linear-layout :ref="\`linear_layout3_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text1_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).userName, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template16\`">
                    <u-text :ref="\`text15\`" text="用户名"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column3\`" field="lCAPUser.phone">
                <template #cell="current" :ref="\`template2\`">
                    <u-linear-layout :ref="\`linear_layout4_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text2_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).phone, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template17\`">
                    <u-text :ref="\`text16\`" text="手机号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column4\`" field="lCAPUser.email">
                <template #cell="current" :ref="\`template3\`">
                    <u-linear-layout :ref="\`linear_layout5_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text3_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).email, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template18\`">
                    <u-text :ref="\`text17\`" text="邮箱"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column5\`" field="lCAPUser.displayName">
                <template #cell="current" :ref="\`template4\`">
                    <u-linear-layout :ref="\`linear_layout6_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text4_\${(current || {}).__nodeKey || (current || {}).index}\`" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).displayName, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template19\`">
                    <u-text :ref="\`text18\`" text="昵称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column6\`" field="lCAPUser.status">
                <template #cell="current" :ref="\`template5\`">
                    <u-linear-layout :ref="\`linear_layout7_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text5_\${(current || {}).__nodeKey || (current || {}).index}\`"
                            :text="\$utils['ToString'](\$utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).status, {'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserStatusEnum','typeArguments':null,'returnType':null,'properties':null}), 'nasl.core.String')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template20\`">
                    <u-text :ref="\`text19\`" text="状态"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column8\`" field="lCAPUser.status">
                <template #cell="current" :ref="\`template13\`">
                    <u-linear-layout :ref="\`linear_layout12_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-text :ref="\`text12_\${(current || {}).__nodeKey || (current || {}).index}\`"
                            :text="\$utils['ToString'](\$utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).source, {'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserSourceEnum','typeArguments':null,'returnType':null,'properties':null}), 'nasl.core.String')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template21\`">
                    <u-text :ref="\`text20\`" text="登录方式"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="\`table_view_column7\`">
                <template #cell="current" :ref="\`template6\`">
                    <u-linear-layout :ref="\`linear_layout8_\${(current || {}).__nodeKey || (current || {}).index}\`" gap="small">
                        <u-link :ref="\`link1_\${(current || {}).__nodeKey || (current || {}).index}\`" text="修改" @click="link1_click(\$event, current)"></u-link>
                        <u-link :ref="\`link2_\${(current || {}).__nodeKey || (current || {}).index}\`" text="删除" :disabled="((((current || {}).item || {}).lCAPUser || {}).userName) == ((\$global.userInfo || {}).UserName)"
                            @click="link2_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title :ref="\`template22\`">
                    <u-text :ref="\`text21\`" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :ref="\`saveModal\`">
            <template #foot :ref="\`template7\`">
                <u-linear-layout :ref="\`linear_layout9\`">
                    <u-button :ref="\`button3\`" color="primary" text="提交修改" @click="button3_click(\$event)" v-if="isUpdate"></u-button>
                    <u-button :ref="\`button4\`" color="primary" text="立即创建" @click="button4_click(\$event)" v-if="!(isUpdate)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="\`template8\`">
                <u-form :ref="\`saveModalForm\`" key="saveModalForm">
                    <u-form-item :ref="\`form_item6\`" :required="true"
                        :rules="[{validate: 'filled',message: \`表单项不得为空\`,trigger: 'input+blur',required: true} , {validate: 'excluded',args: [userList] ,message: \`该表单项已经存在\`,trigger: 'input+blur'}]"
                        :ignore-validation="isUpdate">
                        <u-input :ref="\`input4\`" placeholder="请输入用户名" :value.sync="input.userName" :disabled="isUpdate"></u-input>
                        <template #label :ref="\`template23\`">
                            <u-text :ref="\`text22\`" text="用户名"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item7\`" :required="true"
                        :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true} , {validate: 'rangeLength',args: [8, 12] ,message: \`请输入\${8}-\${12}个字符\`,trigger: 'input+blur'} , {validate: '^azAZ09-_\$',message: \`以字母、数字、'-'或'_'组成\`,trigger: 'input+blur'}]"
                        v-if="!(isUpdate)">
                        <u-input :ref="\`input5\`" placeholder="请输入8-12位普通登录密码" :value.sync="input.password" :password="true"></u-input>
                        <template #label :ref="\`template24\`">
                            <u-text :ref="\`text23\`" text="登录密码"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item8\`" :rules="[{validate: 'mobile',args: [\`zh-CN\`, undefined] ,message: \`请输入合法的手机号码\`,trigger: 'input+blur'}]">
                        <u-input :ref="\`input6\`" placeholder="请输入手机号" :value.sync="input.phone"></u-input>
                        <template #label :ref="\`template25\`">
                            <u-text :ref="\`text24\`" text="手机号"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item9\`" :rules="[{validate: 'email',message: \`请输入正确的邮箱\`,trigger: 'input+blur'}]">
                        <u-input :ref="\`input7\`" placeholder="请输入邮箱" :value.sync="input.email"></u-input>
                        <template #label :ref="\`template26\`">
                            <u-text :ref="\`text25\`" text="邮箱"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item10\`">
                        <u-input :ref="\`input8\`" placeholder="请输入昵称" :value.sync="input.displayName"></u-input>
                        <template #label :ref="\`template27\`">
                            <u-text :ref="\`text26\`" text="昵称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item3\`" v-if="isUpdate">
                        <u-select :ref="\`select1\`" placeholder="请选择" value-field="value"
                            :data-source="\$utils['EnumToList']({'concept':'TypeAnnotation','changedTime':1676988664861,'name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserStatusEnum','typeArguments':null,'returnType':null,'properties':null})"
                            :value.sync="input.status" key="select1"></u-select>
                        <template #label :ref="\`template28\`">
                            <u-text :ref="\`text27\`" text="状态"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="\`form_item2\`" :required="true">
                        <u-input :ref="\`input2\`" placeholder="普通登录" :disabled="true"></u-input>
                        <template #label :ref="\`template29\`">
                            <u-text :ref="\`text28\`" text="用户来源"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="\`template9\`">
                <div :ref="\`div1\`" v-if="isUpdate">
                    <u-text :ref="\`text6\`" text="修改"></u-text>
                </div>
                <div :ref="\`div2\`" v-if="!(isUpdate)">
                    <u-text :ref="\`text7\`" text="创建"></u-text>
                </div>
            </template>
        </u-modal>
    </u-linear-layout>
    <u-modal :ref="\`deleteModal\`">
        <template #foot :ref="\`template10\`">
            <u-linear-layout :ref="\`linear_layout10\`">
                <u-button :ref="\`button5\`" color="primary" text="确定" @click="button5_click(\$event)"></u-button>
                <u-button :ref="\`button6\`" text="取消" @click="button6_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body :ref="\`template11\`">
            <u-text :ref="\`text8\`" text="该用户相关的角色关联关系都会被删除！确认删除用户："></u-text>
            <u-text :ref="\`text10\`" :text="\$utils['ToString']((deleteUserBody || {}).userName, 'nasl.core.String')"></u-text>
            <u-text :ref="\`text11\`" text=" ？"></u-text>
        </template>
        <template #title :ref="\`template12\`">
            <u-text :ref="\`text9\`" text="删除用户 "></u-text>
        </template>
    </u-modal>
</l-root>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '',
redirect: 'userManagement',
}
            ],
},
{
            path: '/',
redirect: '/permission_center',
},
{
            path: '/noAuth',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                
            };
        },
meta: {
    title: "无权限页面",
    crumb: undefined,
    first: undefined,
    auth: undefined,
},
methods: {
    
},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height: 100vh;" type="flex" justify="center" alignment="center">
    <u-linear-layout :ref="\`uLinearLayout2\`" direction="vertical" justify="center">
        <img :ref="\`img1\`" src="/assets/error-code.svg" width="240" />
        <h1 :ref="\`h11\`"
            style="margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px;">
            <u-text :ref="\`uText1\`" text="401"></u-text>
        </h1>
        <h2 :ref="\`h21\`" style="color: var(--color-light);">
            <u-text :ref="\`uText2\`" text="你没有访问该页面的权限"></u-text>
        </h2>
        <u-linear-layout :ref="\`uLinearLayout3\`">
            <u-button :ref="\`uButton1\`" text="重新登录" href="/login" color="primary" shape="round"></u-button>
            <u-button :ref="\`uButton2\`" href="/" text="返回首页" shape="round"></u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/notFound',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                
            };
        },
meta: {
    title: "找不到页面",
    crumb: undefined,
    first: undefined,
    auth: undefined,
},
methods: {
    
},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height: 100vh;" justify="center" type="flex" alignment="center">
    <u-linear-layout :ref="\`uLinearLayout2\`" justify="center" direction="vertical">
        <img :ref="\`img1\`" width="240" src="/assets/error-code.svg" />
        <h1 :ref="\`h11\`"
            style="margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px;">
            <u-text :ref="\`uText1\`" text="404"></u-text>
        </h1>
        <h2 :ref="\`h21\`" style="color: var(--color-light);">
            <u-text :ref="\`uText2\`" text="抱歉，你访问的页面不存在"></u-text>
        </h2>
        <u-button :ref="\`uButton1\`" text="返回首页" color="primary" href="/" shape="round"></u-button>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '*',
            redirect: '/notFound',
        }
];

        window.createLcapApp = () => {
            const appVM = initModule.init(platformConfig.appConfig, platformConfig, routes, metaData);

            try {
                var push = appVM.$router.history.push;
                appVM.$router.history.push = function (a, b) {
                    push.apply(this, [a, b, console.warn]);
                };
            } catch (e) { console.error(e) }

            return window.appVM = appVM;
        };

        setTimeout(() => {
            var customNames = ['lcap-login'];
            for(var i=0;i<customNames.length;i++){
                var name = window.kebab2Camel(customNames[i]);
                if(window[name]){
                    window.CloudUI.install(window.Vue, window[name]);
                }
            }
            window.createLcapApp();
        }, 1000)
    