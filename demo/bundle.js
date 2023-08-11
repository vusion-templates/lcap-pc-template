import initModule from '../src/init.js';
        var platformConfig = {
    appConfig: {
        project: 'lq0810',
        domainName: 'lq0810',
        envConfig: {},
        documentTitle: null,
        rootViewData: [
            {
                name: 'aaa',
                title: 'aaa',
            },
            {
                name: 'da',
                title: 'da',
            },
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
                isIndex: true,
            },
            {
                name: 'permission_center',
                title: '权限中心',
                isIndex: false,
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
    dnsAddr: 'officialmultipc.defaulttenant.lcap.hatest.163yun.com',
    hasUserCenter: true,
    hasAuth: true,
    authResourcePaths: [
        '/permission_center/addRoleUser',
        '/permission_center/resourceManagement',
        '/permission_center/roleManagement',
        '/permission_center/userManagement',
        '/permission_center',
    ],
    baseResourcePaths: [
        '/aaa',
        '/da',
        '/login',
        '/index',
        '/dashboard',
        '/noAuth',
        '/notFound',
    ],
};
        var metaData = {frontendEvents:{},frontendVariables:[],dataTypesMap:{'app.enums.UserStatusEnum':{concept:'Enum',name:'UserStatusEnum',label:null,description:'统一定义用户的状态',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'正常'},{concept:'EnumItem',name:'',value:'Forbidden',label:'禁用'}],isLeaf:true},'app.enums.UserSourceEnum':{concept:'Enum',name:'UserSourceEnum',label:null,description:'统一定义用户的来源',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'普通登录'}],isLeaf:true},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping':{concept:'Entity',name:'LCAPLogicViewMapping',uuid:'5f06d6db4f724c688397ad423481d0eb',tableName:'LCAPLogicViewMapping_ee5daa',description:'记录应用全局逻辑与页面资源的关联关系',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'00ca333bdeea4d6caa09c0d296cc0892',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14946531801',isLeaf:true},{concept:'EntityProperty',name:'logicIdentifier',uuid:'702c064af3ff42c9aece0671456f593e',columnName:'logicIdentifier',label:'逻辑标识',description:'/api/logic1:GET',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceName',uuid:'c2c5f289ff3d4250b2047e0041a247dd',columnName:'resourceName',label:'资源路径',description:'/dashboard/button1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceType',uuid:'b5b1e3c970454ff4887a9c5c94ebd34f',columnName:'resourceType',label:'资源类型',description:'页面-page 组件-component 逻辑-logic',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'group',uuid:'ddd0e5d0c7c64c65872e0f4ad78a3a8d',columnName:'group',label:'逻辑与资源绑定的分组关系',description:'值一样的为同一组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'changeTime',uuid:'6791c104dfef42139a31f306da771cdb',columnName:'changeTime',label:'创建时间',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'nasl.core.Long':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},'nasl.core.String':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPUser':{concept:'Entity',name:'LCAPUser',uuid:'441e5caf2b704133991eb1829111bdbc',tableName:'LCAPUser_ee5daa',description:'制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'4697e091201d45d592f28881cc223904',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14476992223',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'fb223319c82f40a78e0c5ee7fa7b21ff',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'4ea2a93a29394a6c8bf97423ee32195e',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'41f6e2283ecf424f98fd25cf96db235f',columnName:'userId',label:'用户id',description:'第三方登录方式唯一id；普通登录使用userName+source作为userId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'c8aa563bd6cc4aa9b264f7c099ae9908',columnName:'userName',label:'用户名',description:'普通登录用户名，类似账号的概念',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'password',uuid:'55bb894635bf4a8cb9ef993bcc37d025',columnName:'password',label:'登录密码',description:'普通登录密码，密码建议加密存储。第三方登录不会存储密码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'phone',uuid:'1e5b52eb6e9c42f9887f21a3a5e5f492',columnName:'phone',label:'手机号',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'email',uuid:'373e7347d93142e89b31cbeb327e2f7e',columnName:'email',label:'邮箱',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'displayName',uuid:'f26cedc755594e46997b27e17d59da02',columnName:'displayName',label:'昵称',description:'展示的名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'status',uuid:'39db68eb3bb0427a81eb08604da37e0c',columnName:'status',label:'状态',description:'状态，标识当前用户的状态是什么',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserStatusEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'4b713fa82fce488990d37cd459fa3376',columnName:'source',label:'用户来源',description:'当前条用户数据来自哪个用户源，如普通登录、微信登录',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserSourceEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'nasl.core.DateTime':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPRolePerMapping':{concept:'Entity',name:'LCAPRolePerMapping',uuid:'9ad3867cb3df4c1bb7a7fde8cd9bd4f6',tableName:'LCAPRolePerMapping_ee5daa',description:'角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'7923965fcfdc4c03b1447e028060e880',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'328f4ae487c445cab884ed00b35f7da1',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'37c8bd54ae784f759cc26eac462b1b61',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'1125b72cd0074cefacd9803026e63880',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'457b195a2b484409914807ab284b14fe',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'6610ad53895944ab822c7e9325b9297b',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'3061b62fda794567bfff9b5d0028eb1d',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPerResMapping':{concept:'Entity',name:'LCAPPerResMapping',uuid:'ba727062351640e48f8b0b9cf9682cb8',tableName:'LCAPPerResMapping_ee5daa',description:'权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'156ef915693a4c13a1311babc43550cf',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'9db23cf2f13c4ed2bea520e64e853a9c',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'c09f9bec507045028d28fd2dc3f7ec85',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'03366e7877cf4d169f24561f11f3a45c',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'846cd19bc8844441bc2ea7a0a4097b7a',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'00e6881dbca145b19ffc8c78ccbe442a',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceId',uuid:'60f14e92734f494fb4ade2c1cf08b9e3',columnName:'resourceId',label:'资源唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPResource',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping':{concept:'Entity',name:'LCAPUserRoleMapping',uuid:'33181480b01e44e8b0c428f2724d854e',tableName:'LCAPUserRoleMapping_ee5daa',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'2e62b535fd7647b6a18ebe17ade4846f',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'022b13dd44434ee4b634ce3b2f8ab49f',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'e1cd6672b42f462090c0507898b6cce3',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'f77c8a18eca143f7acdaa00acb6d1fd6',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'da9c39011e6342a1a04498d278658ac5',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'4bb3ff8f66c94a4d91c48f44d1735c06',columnName:'userId',label:'用户唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPUser',relationProperty:'userId',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'a41321636c4d43688471beb5f6c3b4aa',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'eb7de42683c44f64842937de161994b2',columnName:'userName',label:'用户名',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'3b22311184824c2cb22a4bf55c3fdabf',columnName:'source',label:'用户来源',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRole':{concept:'Entity',name:'LCAPRole',uuid:'0dd7862f392649e9a56bf3f693488fcb',tableName:'LCAPRole_ee5daa',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'a3a773373a8f4bdbb5fbfeac6ffc220d',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'9cecfb2f32054e0e870cb779e44c47ff',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'40b7d16a93db4dc593cba3f74c446747',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'c5badf10eeec4520a1e39acfc702542f',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'9830754687b34e8da7bbc74fa5800089',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'913a4c94dc51447a8a27f0f81d4d3aa8',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'77d435f04da6465ca03e93907192ebb9',columnName:'name',label:'角色名称',description:'角色名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'2c1920ed95e74abfbaacb160325d2e8e',columnName:'description',label:'角色描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleStatus',uuid:'3eabcf426a0b43af87cc52073846dc98',columnName:'roleStatus',label:'角色状态',description:'角色状态，可配置true启用，false禁用。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'editable',uuid:'a50398f5944f46c1b87defd952185794',columnName:'editable',label:'是否可编辑',description:'系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'nasl.core.Boolean':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPPermission':{concept:'Entity',name:'LCAPPermission',uuid:'6664be2d47de48579b46397fa404953d',tableName:'LCAPPermission_ee5daa',description:'权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'859584a4eb4a40c1892ba48b693b9364',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'7049c4f9f65743dba5a22357fd476eb4',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'3091ef769cb44e2bb38fc515a5e586f2',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'f86bee1364044a14a2d66319c07b1772',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'2b821616fedc40b29dd42ece8d8787eb',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'7d73291c1f3e48d8be65424f90eb8282',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'7ddf5b1c7e704857ae4e63a8b490b64f',columnName:'name',label:'权限名称',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'d988e78ea21b4254b353ad41c7588311',columnName:'description',label:'权限描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPResource':{concept:'Entity',name:'LCAPResource',uuid:'033066dc63de47f4b91ef12181869457',tableName:'LCAPResource_ee5daa',description:'资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'baca4a40df3f4a08a0a31e2c24eb6772',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'980cf6cedf4b410b83c6dacaf29cdd67',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'1ae63d47a7c64f7aa301cd326fc6ab4e',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'c46f80432ed94b8e82b37f0162d0dbd1',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'8130917b1d3845468fafbe6febfc19f3',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'c908780730b84bab8674bdd8a10ae2f6',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'05d08f632e604354ab37de0ec468b66c',columnName:'name',label:'资源名称',description:'资源路径，如/test/api',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'11129257ed8944549e4d98e23a977aeb',columnName:'description',label:'资源描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'type',uuid:'c93d12feb78e4924a42545b387069069',columnName:'type',label:'资源类型',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'clientType',uuid:'cb90ece32b23445aa0cbbdd81fa4d338',columnName:'clientType',label:'端标识',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.structures.LCAPGetResourceResult':{concept:'Structure',name:'LCAPGetResourceResult',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'resourceValue',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'resourceType',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true}]},'app.structures.LCAPRoleBindUsersBody':{concept:'Structure',name:'LCAPRoleBindUsersBody',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'roleId',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'userIdList',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true}]},'nasl.collection.List<nasl.core.String>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'extensions.auth_library_guosen.structures.Result':{concept:'Structure',name:'Result',description:'',compilerInfoMap:{java:{packageName:'com.netease.lowcode.auth.guosen.structure'}},typeParams:null,properties:[{concept:'StructureProperty',name:'SUCCESS',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'FAIL',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'code',description:'成功为0 失败为-1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'msg',description:'错误信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'extensions.auth_library_guosen.structures.UserInfo':{concept:'Structure',name:'UserInfo',description:'',compilerInfoMap:{java:{packageName:'com.netease.lowcode.auth.guosen.structure'}},typeParams:null,properties:[{concept:'StructureProperty',name:'userId',description:'用户唯一标识 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'userName',description:'用户名 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'source',description:'认证来源 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'empno',description:'工号，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'title',description:'职位，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'department',description:'部门，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'dep3',description:'二级部门，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'email',description:'邮箱，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'fullname',description:'中文名称，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'nickname',description:'昵称，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'phone',description:'手机号，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'openid',description:'openid，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'nasl.ui.Current':{concept:'Structure',name:'Current',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'rowIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},T:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},'nasl.ui.CurrentDynamic':{concept:'Structure',name:'CurrentDynamic',typeParams:[{concept:'TypeParam',name:'T'},{concept:'TypeParam',name:'T1'}],properties:[{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnItem',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T1',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'rowIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},T1:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T1',typeArguments:null,returnType:null,properties:null},'nasl.ui.Error':{concept:'Structure',name:'Error',typeParams:null,properties:[{concept:'StructureProperty',name:'errorType',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'errorMsg',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.BaseEvent':{concept:'Structure',name:'BaseEvent',typeParams:null,properties:[]},'nasl.ui.DataSourceParams':{concept:'Structure',name:'DataSourceParams',typeParams:null,properties:[{concept:'StructureProperty',name:'page',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'sort',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'filterText',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.EventTarget':{concept:'Structure',name:'EventTarget',typeParams:null,properties:[]},'nasl.ui.MouseEvent':{concept:'Structure',name:'MouseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'altKey',description:'如果alt 键被按下，返回true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'button',description:'如果鼠标按钮被按下（如果有的话），将会返回一个数值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientX',description:'鼠标指针在点击元素（DOM）中的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientY',description:'鼠标指针在点击元素（DOM）中的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'ctrlKey',description:'如果 control 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'metaKey',description:'如果 meta 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementX',description:'鼠标指针相对于最后mousemove事件位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementY',description:'鼠标指针相对于最后mousemove事件位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetX',description:'鼠标指针相对于目标节点内边位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetY',description:'鼠标指针相对于目标节点内边位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenX',description:'相对于全局（屏幕）的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenY',description:'相对于全局（屏幕）的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.FocusEvent':{concept:'Structure',name:'FocusEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'cancelBubble',description:'是否取消冒泡',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'detail',description:'详情',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerX',description:'相对于当前层的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerY',description:'相对于当前层的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeEvent':{concept:'Structure',name:'ChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formattedValue',description:'格式化后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'改变后的值是否合法',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<T>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.NavigateEvent':{concept:'Structure',name:'NavigateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'to',description:'to属性的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'replace',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'append',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemEvent':{concept:'Structure',name:'ChangeItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'选择项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItem',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemsEvent':{concept:'Structure',name:'ChangeItemsEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'该选中项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'所有选中项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'items',description:'所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItems',description:'旧的所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CascadeCapsulesEvent':{concept:'Structure',name:'CascadeCapsulesEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'level',description:'选择的层级',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CollapseEvent':{concept:'Structure',name:'CollapseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'expanded',description:'展开/折叠状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'open',description:'弹出/隐藏状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'节点相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SliderEvent':{concept:'Structure',name:'SliderEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'滑块的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'percent',description:'滑块位置所在的百分比',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DateEvent':{concept:'Structure',name:'DateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'date',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'time',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.core.Date':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},'nasl.ui.OperatorItemEvent':{concept:'Structure',name:'OperatorItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'添加的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',description:'添加的索引',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'当前数据',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ValidateEvent':{concept:'Structure',name:'ValidateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'rawValue',description:'用户输入的原始值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'验证修复的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'trigger',description:'本次验证的触发方式',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'muted',description:'是否验证后无提示',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'验证是否通过',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'touched',description:'用户是否触碰',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'dirty',description:'用户是否修改值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'firstError',description:'第一个错误提示消息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PaginationEvent':{concept:'Structure',name:'PaginationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'page',description:'选择的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPage',description:'旧的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageSize',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPageSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'number',description:'当前页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNumber',description:'旧的页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DurationEvent':{concept:'Structure',name:'DurationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'text',description:'提示的内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'color',description:'提示的颜色',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'duration',description:'提示停留的时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TransferEvent':{concept:'Structure',name:'TransferEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'原数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',description:'目标数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transfer',description:'移动的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transferValues',description:'移动项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TreeChangeEvent':{concept:'Structure',name:'TreeChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNode',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CheckedEvent':{concept:'Structure',name:'CheckedEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'checked',description:'选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldChecked',description:'旧的选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.UploadEvent':{concept:'Structure',name:'UploadEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'File',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'file',description:'上传文件信息，不包含文件主体内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xhr',description:'发送前的 XMLHttpRequest 对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formData',description:'用于发送的数据对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xml',description:'服务器回传信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.File':{concept:'Structure',name:'File',typeParams:null,properties:[{concept:'StructureProperty',name:'status',description:'文件状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'url',description:'文件链接',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'文件名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'文件大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'type',description:'文件类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.UploadErrorEvent':{concept:'Structure',name:'UploadErrorEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'name',description:'错误名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'message',description:'错误描述',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'extensions',description:'限制类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'maxSize',description:'限制大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'count',description:'当前数量',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'limit',description:'数量配额',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SortEvent':{concept:'Structure',name:'SortEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'field',description:'排序属性',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',description:'排序顺序',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'compare',description:'排序比较函数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PoiInfo':{concept:'Structure',name:'PoiInfo',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'信息来源',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'id',description:'POI点的id',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'location',description:'经纬度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'address',description:'地址',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SelectData':{concept:'Structure',name:'SelectData',typeParams:null,properties:[{concept:'StructureProperty',name:'parent',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'level',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropUpdateData':{concept:'Structure',name:'DragAndDropUpdateData',typeParams:null,properties:[{concept:'StructureProperty',name:'sourceList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'targetList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropEvent':{concept:'Structure',name:'DragAndDropEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'source',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finalSource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'updateData',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'DragAndDropUpdateData',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ExpandEvent':{concept:'Structure',name:'ExpandEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'展开项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'expanded',description:'展开状态值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ScrollEvent':{concept:'Structure',name:'ScrollEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'scrollHeight',description:'滚动内容高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollWidth',description:'滚动内容宽度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollTop',description:'滚动内容距离顶部高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'scrollLeft',description:'滚动内容距离左侧距离',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientHeight',description:'可视区域高度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientWidth',description:'可视区域宽度由',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List':{concept:'Structure',name:'List',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.Map':{concept:'Structure',name:'Map',typeParams:[{concept:'TypeParam',name:'K'},{concept:'TypeParam',name:'V'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.interface.ApiReturnOf':{concept:'Structure',name:'ApiReturnOf',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'Data',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Message',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessDefinition':{concept:'Structure',name:'LCAPProcessDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'suspended',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessInstance':{concept:'Structure',name:'LCAPProcessInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'endTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskDefinition':{concept:'Structure',name:'LCAPTaskDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'emptyAssignee',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'skipEnabled',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskInstance':{concept:'Structure',name:'LCAPTaskInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'taskId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'createTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'taskDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPOperateProcessResult':{concept:'Structure',name:'LCAPOperateProcessResult',typeParams:null,properties:[{concept:'StructureProperty',name:'success',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'failMessage',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<nasl.core.Long>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPerResMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPerResMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'list',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'total',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.core.Null':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Null',typeArguments:null,returnType:null,properties:null},loadResourceByRoleId:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'loadResourceByRoleId',typeArguments:null,returnType:null,properties:null},load:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'load',typeArguments:null,returnType:null,properties:null},getUsersListFromNumis:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeName:'getUsersListFromNumis',typeArguments:null,returnType:null,properties:null},'nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'text',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}],returnType:null,properties:null},'{text: nasl.core.String, value: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'text',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{CreateTime: nasl.core.Long, Email: nasl.core.String, LoginCount: nasl.core.Long, Phone: nasl.core.String, Source: nasl.core.String, Status: nasl.core.String, UpdateTime: nasl.core.Long, UserId: nasl.core.String, UserInfoExtend: {Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}, UserName: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'CreateTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Email',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'LoginCount',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Phone',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Source',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Status',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UpdateTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UserId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'UserInfoExtend',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'Company',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Department',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'EmployeeId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobLevel',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobNum',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobYear',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NameAndEmail',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NickName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'RealName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},isLeaf:true},{concept:'StructureProperty',name:'UserName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'{Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeArguments:null,returnType:null,properties:[{concept:'StructureProperty',name:'Company',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Department',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'EmployeeId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobLevel',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobNum',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'JobYear',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NameAndEmail',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'NickName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'RealName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]}},enumsMap:{UserStatusEnum:{Normal:'正常',Forbidden:'禁用'},UserSourceEnum:{Normal:'普通登录'}},logicsMap:{'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/import'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/import'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/import'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/import'}},'app.logics.LCAPGetUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserList'}},'app.logics.LCAPGetUserByUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserByUserId'}},'app.logics.LCAPGetAllUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetAllUsers'}},'app.logics.LCAPGetUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserTableView'}},'app.logics.LCAPRoleBindUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPRoleBindUsers'}},'app.logics.LCAPLoadPermissionManagementTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadPermissionManagementTableView'}},'app.logics.LCAPIsExistRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsExistRoleId'}},'app.logics.LCAPLoadPermissionResourceListView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadPermissionResourceListView'}},'app.logics.LCAPGetMappingByPermissionIdAndResourceId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingByPermissionIdAndResourceId'}},'app.logics.LCAPGetScopeResourceByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetScopeResourceByRoleId'}},'app.logics.loadAddRoleUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadAddRoleUserTableView'}},'app.logics.LCAPGetRoleBindUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRoleBindUserList'}},'app.logics.LCAPLoadRoleManagementTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadRoleManagementTableView'}},'app.logics.LCAPUnBindUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPUnBindUsers'}},'app.logics.LCAPLoadUserRoleMappingTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadUserRoleMappingTableView'}},'app.logics.LCAPGetRolePermissionList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRolePermissionList'}},'app.logics.LCAPLoadAddRoleUserSelectLCAPRole':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadAddRoleUserSelectLCAPRole'}},'app.logics.LCAPGetUserResources':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserResources'}},'app.logics.LCAPGetPermissionByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetPermissionByRoleId'}},'app.logics.LCAPGetResourceListByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetResourceListByRoleId'}},'app.logics.LCAPGetMappingIdByRoleIdAndUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingIdByRoleIdAndUserId'}},'app.logics.LCAPIsAlreadBindUserIdList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsAlreadBindUserIdList'}},'app.logics.LCAPLoadResourceTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadResourceTableView'}},'app.logics.LCAPIsRoleNameRepeated':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsRoleNameRepeated'}},'extensions.auth_library_guosen.logics.getAuthViewUrl':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/auth_library_guosen/getAuthViewUrl'}}},servicesMap:{_custom:{}}};
        var routes = [{
            path: '/aaa',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['variable1']:"2233"
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

this.$utils['ToString'](`1111`, 'nasl.core.String')
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <u-button :ref="\`button1\`" color="primary" text="确 定" @click="button1_click(\$event)"></u-button>
    <u-text :ref="\`text1\`" :text="\$utils['ToString'](variable1, 'nasl.core.String')"></u-text>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/da',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    
},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout :ref="\`uLinearLayout1\`" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view :ref="\`router_view1\`"></u-router-view>
    <cw-add-select :ref="\`cw_add_select1\`"></cw-add-select>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
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
    crumb: "",
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
                
            };
        },
meta: {
    title: "总览页",
    crumb: undefined,
    first: undefined,
    auth: undefined,
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
                        <u-text :ref="\`text1\`" style="color: white; --custom-start: auto; vertical-align: middle;" size="large" text="应用名称"></u-text>
                    </u-multi-layout-item>
                </template>
                <u-multi-layout-item :ref="\`multi_layout_item5\`" align-items="center">
                    <u-navbar-item-multi :ref="\`navbar_item_multi1\`" target="_blank">
                        <u-text :ref="\`text6\`" text="Item 1"></u-text>
                    </u-navbar-item-multi>
                    <u-navbar-item-multi :ref="\`navbar_item_multi2\`" target="_blank">
                        <u-text :ref="\`text7\`" text="Item 2"></u-text>
                    </u-navbar-item-multi>
                </u-multi-layout-item>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item :ref="\`multi_layout_item2\`">
            <u-multi-layout :ref="\`multi_layout2\`">
                <u-multi-layout-item :ref="\`multi_layout_item3\`" style="width: 200px;left:0;" :fixed="true">
                    <u-sidebar :ref="\`sidebar1\`" :router="true">
                        <u-sidebar-item :ref="\`sidebar_item1\`" destination="/overview" :value="null">
                            <u-text :ref="\`text4\`" text="总览 "></u-text>
                        </u-sidebar-item>
                        <u-sidebar-item :ref="\`sidebar_item2\`" :value="null">
                            <u-text :ref="\`text5\`" text="item2"></u-text>
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
},
{
            path: '/',
redirect: '/dashboard',
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
['userIdListBySelect']:this.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined)
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
                    "lcap-calllogic-uuid": "7c53e6911c4f42a9b78f4e6b82f004e2",
                },
            path: {},
                body: {
inputRoleId: inputRoleId
}
})))
var $forEachListVariable9932 = this.alreadyBindRoleUserList;
var $forEachStartVariable9932 = 0;
var $forEachEndVariable9932 = (this.alreadyBindRoleUserList || {}).length;
if(Array.isArray($forEachListVariable9932)) {
for (let i = $forEachStartVariable9932; i < $forEachEndVariable9932; i++) {
const item = $forEachListVariable9932[i];
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
                    "lcap-calllogic-uuid": "9599c72a537f43a78fd4596dd0e9c0b1",
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
                    "lcap-calllogic-uuid": "ebe37b22cf2741e99c486d16056e10e6",
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
                    "lcap-calllogic-uuid": "21fbe8aed9994611b8bef43d897a6242",
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
                    "lcap-calllogic-uuid": "6c9b6fd8d595453daf714a82eb63e537",
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

var $forEachListVariable1353 = this.userIdListBySelect;
var $forEachStartVariable1353 = 0;
var $forEachEndVariable1353 = (this.userIdListBySelect || {}).length;
if(Array.isArray($forEachListVariable1353)) {
for (let i = $forEachStartVariable1353; i < $forEachEndVariable1353; i++) {
const item = $forEachListVariable1353[i];
isDuplicateUserId = await (this.roleAddUserReduplicate(item, this.roleid))
returnOfGetUser = this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser', await (this.$logics['app.logics.LCAPGetUserByUserId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "e6e08eceee064261917423ea3735e112",
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
                    "lcap-calllogic-uuid": "c202de33ae0e482195eb1070941c7b35",
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
                    "lcap-calllogic-uuid": "c30f2a78bc114645832dff6f64f5adef",
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
                        <u-select :ref="\`uSelect1\`" placeholder="请选择用户名，支持搜索" :data-source="getUsersListFromNumis" :filterable="true" :value.sync="userIdListBySelect"
                            :multiple="true" :remote-filtering="true" value-field="lCAPUser.userId" :pageable="true" text-field="lCAPUser.userName" :remote-paging="false"
                            :clearable="true" key="uSelect1"></u-select>
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
                    "lcap-calllogic-uuid": "20cdffe1e6fa44859a1e00e188b8a6a3",
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
                    "lcap-calllogic-uuid": "83302a91110f46eda79b36140f5f4887",
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
                    "lcap-calllogic-uuid": "a2dc3ddbc4c243ff92f7252119ad10ff",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable8297 = (variable2 || {}).list;
var $forEachStartVariable8297 = 0;
var $forEachEndVariable8297 = ((variable2 || {}).list || {}).length;
if(Array.isArray($forEachListVariable8297)) {
for (let i = $forEachStartVariable8297; i < $forEachEndVariable8297; i++) {
const item = $forEachListVariable8297[i];
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
                    "lcap-calllogic-uuid": "e85df847178f4ebbaca4c8e2fba75dca",
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
                    "lcap-calllogic-uuid": "5facce4740544419a5385cd94231c90a",
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
                    "lcap-calllogic-uuid": "adbb1db75568405597d6e966ddc36b4b",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable7626 = permissionList;
var $forEachStartVariable7626 = 0;
var $forEachEndVariable7626 = (permissionList || {}).length;
if(Array.isArray($forEachListVariable7626)) {
for (let i = $forEachStartVariable7626; i < $forEachEndVariable7626; i++) {
const item = $forEachListVariable7626[i];
mappingIdList = this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "609ab0e8a26c413f9a4914d32b8b3c31",
                },
            path: {},
                body: {
permissionId: (item || {}).id, 
resourceId: this.removeResourceId
}
})))
var $forEachListVariable379 = mappingIdList;
var $forEachStartVariable379 = 0;
var $forEachEndVariable379 = (mappingIdList || {}).length;
if(Array.isArray($forEachListVariable379)) {
for (let j = $forEachStartVariable379; j < $forEachEndVariable379; j++) {
const item1 = $forEachListVariable379[j];
await (this.$logics['app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "71f4aea74a0047bcb1413a6b86851c12",
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
                    "lcap-calllogic-uuid": "a2c89d7cc03d4df69b6bd256338ee220",
                },
            path: {},
                body: {
roleId: this.roleId
}
})))
var $forEachListVariable6408 = permissionList;
var $forEachStartVariable6408 = 0;
var $forEachEndVariable6408 = (permissionList || {}).length;
if(Array.isArray($forEachListVariable6408)) {
for (let i = $forEachStartVariable6408; i < $forEachEndVariable6408; i++) {
const item = $forEachListVariable6408[i];
var $forEachListVariable5543 = this.alreadySelectedResourceIdList;
var $forEachStartVariable5543 = 0;
var $forEachEndVariable5543 = (this.alreadySelectedResourceIdList || {}).length;
if(Array.isArray($forEachListVariable5543)) {
for (let j = $forEachStartVariable5543; j < $forEachEndVariable5543; j++) {
const item1 = $forEachListVariable5543[j];
mapping.permissionId = (item || {}).id
mapping.resourceId = item1
mappingIdList = this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>', await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "9ddf2bbbefc241199ffd83a52fde652f",
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
                    "lcap-calllogic-uuid": "7d84d9178e354f5aad961b1b0bf22a11",
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
                    "lcap-calllogic-uuid": "2eaaca6c4d00498390135e8d15dbbbd1",
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
                    "lcap-calllogic-uuid": "87746a5f96fe431296243f04af64974d",
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
                    "lcap-calllogic-uuid": "e3781f90f8c243c1b3a7eae78f18c03c",
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
                    "lcap-calllogic-uuid": "22d5d2cea34947b8889d453032dfed80",
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
                    "lcap-calllogic-uuid": "2db9036c6f00461eb1b1227cd76c0a5c",
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
                    "lcap-calllogic-uuid": "c4b275248986432ba1d7d3b14d67b7f4",
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
                    "lcap-calllogic-uuid": "bbd35b468d71497c87dd7a934b509152",
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
                    "lcap-calllogic-uuid": "e3748a310d7d457da369bac123a86aca",
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
                    "lcap-calllogic-uuid": "69e2b489f7564d3791705085a23693c7",
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
                    "lcap-calllogic-uuid": "cb1e2d5a84aa4a02a7710300e35880f3",
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
                    "lcap-calllogic-uuid": "960d1a95ce8542a59fd5258d56707fad",
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
                    "lcap-calllogic-uuid": "49374421a65f4c0c8676af4808791a6a",
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
                    "lcap-calllogic-uuid": "ab73954d09d046678297b5eafc7456ea",
                },
            path: {},
                body: {
inputRoleId: (((current || {}).item || {}).lCAPRole || {}).id
}
})))
variable2 = (variable1 || {}).list
this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>', this.$utils['Clear'](this.rolePermissionList))
var $forEachListVariable1326 = variable2;
var $forEachStartVariable1326 = 0;
var $forEachEndVariable1326 = (variable2 || {}).length;
if(Array.isArray($forEachListVariable1326)) {
for (let i = $forEachStartVariable1326; i < $forEachEndVariable1326; i++) {
const item = $forEachListVariable1326[i];
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
        <u-modal :ref="\`deleteRolePopup\`" size="normal" :is-title-slot-empty=true>
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
            <template #title :ref="\`template12\`"></template>
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
            <u-text :ref="\`uText3\`" text="标题"></u-text>
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
                    "lcap-calllogic-uuid": "e0dbc73e85d7438b930dbc7ef7cc84a2",
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
                    "lcap-calllogic-uuid": "867535b5373841c585af167a7de86a74",
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
                    "lcap-calllogic-uuid": "3c979f0a889f4161ad12d788ceba4539",
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
                    "lcap-calllogic-uuid": "edf69e7a2fbc4485ab08a7741f9962aa",
                },
            path: {},
                body: {
}
})))
var $forEachListVariable9870 = (result || {}).list;
var $forEachStartVariable9870 = 0;
var $forEachEndVariable9870 = ((result || {}).list || {}).length;
if(Array.isArray($forEachListVariable9870)) {
for (let index = $forEachStartVariable9870; index < $forEachEndVariable9870; index++) {
const item = $forEachListVariable9870[index];
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
                    "lcap-calllogic-uuid": "81c4df6eefea469bae4cec0ea927fa58",
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
        <u-alert :ref="\`alert1\`" style="margin:0 0 10px 0;" type="info" title="开发者可根据需求情况，自行修改或新建用户管理、权限管理页面"></u-alert>
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
            var customNames = ['lcap-login','select_add_library'];
            for(var i=0;i<customNames.length;i++){
                var name = window.kebab2Camel(customNames[i]);
                if(window[name]){
                    window.CloudUI.install(window.Vue, window[name]);
                }
            }
            window.createLcapApp();
        }, 1000)
    