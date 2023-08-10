{
                            const el = document.createElement('style');
                            el.id = 'theme';
                            el.innerHTML = `:root {
                --brand-primary-darkest: #25105e;
    --brand-primary-darker: #2d1371;
    --brand-primary-dark: #3c1a97;
    --brand-primary: #431daa;
    --brand-primary-light: #4f22c8;
    --brand-primary-lighter: #baa6f0;
    --brand-primary-lightest: #e8e1fa;
    --brand-primary-disabled: #baa6f0;
    --brand-primary-opacity-20: #431daa33;
    --crumb-color-link: #c68529;
    --brand-success-darkest: #2b4839;
    --brand-success-darker: #335745;
    --brand-success-dark: #44745c;
    --brand-success: #4d8267;
    --brand-success-light: #5a9778;
    --brand-success-lighter: #c0d9cc;
    --brand-success-lightest: #eaf2ee;
    --brand-success-disabled: #c0d9cc;
    --brand-success-opacity-20: #4d826733;
        }`;
                            document.head.appendChild(el);
                        }
        

    import initModule from '../../src/init.js';

    var customNames = ['lcap-you-data','lcap-echarts-customization','lcap-echarts-bar','lcap-video','lcap-wang-editor','lcap-markdown-doc-render','lcap-gantt','lcap-login','calendar_library','drawing_pad','adapter_sdk'];
    for(var i=0;i<customNames.length;i++){
        var name = window.kebab2Camel(customNames[i]);
        if(window[name]){
            window.CloudUI.install(window.Vue, window[name]);
        }
    }
        var platformConfig = {
    appConfig: {
        project: 'zxrtest22',
        domainName: 'zxrtest22',
        envConfig: {},
        documentTitle: null,
        rootViewData: [
            {
                name: 'ddddd',
                title: 'ddddd',
            },
            {
                name: 'sss1',
                title: 'www1rr',
            },
            {
                name: 'entityDrag',
                title: 'entityDrag',
            },
            {
                name: 'gante',
                title: 'gante',
            },
            {
                name: 'test',
                title: 'test',
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
            {
                name: 'gante1',
                title: 'gante1',
                isIndex: false,
            },
        ],
        basePath: '/pc',
        frontendName: 'pc',
        sysPrefixPath: '',
    },
    dnsAddr: 'officialmultipc.defaulttenant.lcap.hatest.163yun.com',
    hasUserCenter: true,
    hasAuth: true,
    authResourcePaths: [
        '/pc/sss1/subsss',
        '/pc/sss1',
        '/pc/permission_center/addRoleUser',
        '/pc/permission_center/resourceManagement',
        '/pc/permission_center/roleManagement',
        '/pc/permission_center/userManagement',
        '/pc/permission_center',
    ],
    baseResourcePaths: [
        '/pc/ddddd',
        '/pc/entityDrag',
        '/pc/gante',
        '/pc/test',
        '/pc/login',
        '/pc/index',
        '/pc/dashboard',
        '/pc/noAuth',
        '/pc/notFound',
        '/pc/gante1',
    ],
};
        var metaData = {frontendVariables:[{concept:'Variable',changedTime:1691040941456,name:'variable1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}},{concept:'Variable',changedTime:1691040966248,name:'variable2',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}},{concept:'Variable',changedTime:1691040966140,name:'variable2',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}},{concept:'Variable',changedTime:1691040941356,name:'variable1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}}],dataTypesMap:{'app.enums.UserStatusEnum':{concept:'Enum',name:'UserStatusEnum',label:null,description:'统一定义用户的状态',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'正常'},{concept:'EnumItem',name:'',value:'Forbidden',label:'禁用'}],isLeaf:true},'app.enums.UserSourceEnum':{concept:'Enum',name:'UserSourceEnum',label:null,description:'统一定义用户的来源',enumItems:[{concept:'EnumItem',name:'',value:'Normal',label:'普通登录'}],isLeaf:true},'app.dataSources.defaultDS.entities.Entity3':{concept:'Entity',changedTime:1691638410634,name:'Entity3',uuid:'0b943d8a36764065899becc9dc259340',tableName:'Entity3',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'553b0b1addc24d8abf654e3be63c7468',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,primaryKey:true,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity35561447998',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'3c6088f7dd8d4e80a3a0ed326a41f4f6',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'85b93719970d40d3b5da980936711c5e',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'5413b78aec744f748bb301b7f2cf8392',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'9d6779fdf14a4b608f54e5f915a65093',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true}],indexes:[]},'nasl.core.Long':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},'nasl.core.DateTime':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},'nasl.core.String':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.Entity2':{concept:'Entity',changedTime:1691638406764,name:'Entity2',uuid:'f7bcfd7c9cf84756b89744a4409bbce3',tableName:'Entity2',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'ea9c9ed426ae40b1a75dd0d5bab5dbf0',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,primaryKey:true,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity24149338753',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'38481ccd2c1b448e9fa2dabb850c177f',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'2cdc34f07e0c42c48968b44e9a2d7cbe',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'860faaea89824f92ae1a5497d3c2284b',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'10120b31264d4202a418534d4e23b89b',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.Entity1':{concept:'Entity',changedTime:1691638214425,name:'Entity1',uuid:'f1391c938fc74bbc8875c568fcf9e2a9',tableName:'Entity1',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'d00c0103d12a4e48bb4d4ddedecd4cd8',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,primaryKey:true,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity10679599287',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'56592b4ef52c43848edfc5690bcf7c09',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'326ffd979b024fe2a15b59d8c6861f88',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'fc77bb8747df40e2982826951851d241',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'09a881b2a7d54b5daefc2897e6f2627d',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPResource1':{concept:'Entity',changedTime:1690633426669,name:'LCAPResource1',uuid:'b5b71fb617924a2da1889d7b2537163b',tableName:'LCAPResource1',description:'资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'3d071b67830047c9bc5629637054762a',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'979cf9131d2941608e04180d40949a57',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'76638d879fc9484b9cbbcc7602641521',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'1d6c0b7f0d7847f3968e5607099601ef',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'c7532bd22fe74bbebebfcd2b2bb539cd',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'87de0f96ed164d01a2be08d2fe3f6088',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'114518921877410294368f9bcf351133',columnName:'name',label:'资源名称',description:'资源路径，如/test/api',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'41cd6640885a4ecc8593c92364cecc53',columnName:'description',label:'资源描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'type',uuid:'aa02ce63bbdc4d1fa6aabeda1db3e7b4',columnName:'type',label:'资源类型',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'clientType',uuid:'160cb93c76764841a91b5c13a9c2fb93',columnName:'clientType',label:'端标识',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPermission1':{concept:'Entity',changedTime:1690633426667,name:'LCAPPermission1',uuid:'0997f811db86454a9ce446b36ad69976',tableName:'LCAPPermission1',description:'权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'933f3a0e171c4933aa45c0c3e6c85d81',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'65ae54c4f5fc46f09199050833beee47',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'5b25e29231444439b11beef5dbac6835',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'d216875369284da89480950f1f6b62e4',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'31d54802983d4112a9191e602e667655',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'0b1cf8873fb8491c83e5ba32a3928b2f',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'0821892b817348b2b7fc13d1cb25eb06',columnName:'name',label:'权限名称',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'49241f118142428682043248dabdc1ac',columnName:'description',label:'权限描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRole1':{concept:'Entity',changedTime:1690633426664,name:'LCAPRole1',uuid:'343bd963a62e4cc09297993861df707a',tableName:'LCAPRole1',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'55725d52bd854d5b97380c44fc5884c6',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'6a2a1d02ce9842c6a3571ef1e71f9417',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'e9ec7ac547874413b85c885ab3d7440d',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'d0d2094169884290b83179e34660b5a9',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'ecdb8fbbab074b998094c2f35a706d3a',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'1ccd54d61e1845cc84ebfc43926492db',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'549c2dbb424b4687b2932d98f696846b',columnName:'name',label:'角色名称',description:'角色名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'6261a720e18a471da65253e8d67607c0',columnName:'description',label:'角色描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleStatus',uuid:'5f60708f9a4b44bdb0a264f7c6427ec4',columnName:'roleStatus',label:'角色状态',description:'角色状态，可配置true启用，false禁用。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'editable',uuid:'4498e904b0ea460b82b400d5e4e487de',columnName:'editable',label:'是否可编辑',description:'系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'nasl.core.Boolean':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1':{concept:'Entity',changedTime:1690633426661,name:'LCAPUserRoleMapping1',uuid:'26397484f9b542dd800a8a7f25ba9d8c',tableName:'LCAPUserRoleMapping1',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'ce82489b2d2543a29f96d27084c5126d',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'8135dea96c9a48d5a6d1b830c85d29d4',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'ce91a482184742d682a8fa34eaaf7d20',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'fcce860f604d413f9d2a30e56f6c2129',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'72c0e3cc6f464d09a6f4cf57152bf40c',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'7cd01bf789314276bd9e4792e86afa23',columnName:'userId',label:'用户唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPUser1',relationProperty:'userId',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'eb9b30cb94f848ddafcfb6ede382f1f6',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'1a282124de864cf2a49ca609667b26c6',columnName:'userName',label:'用户名',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'03945ff1814a4c2ea44488a529255c29',columnName:'source',label:'用户来源',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPerResMapping1':{concept:'Entity',changedTime:1690633426659,name:'LCAPPerResMapping1',uuid:'a79dde05129a4ad9a344009a3993e870',tableName:'LCAPPerResMapping1',description:'权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'e99e0bc83b3b49d7a1f2f2588b3aabbd',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'afdd69ba057d434787a6581f223a5723',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'626fa270ab584354976cf4e0bb8585a4',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'dcdde9de5d3f4416b8e6e989efbc6456',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'bf8ab0a9f34b49fcaf8d82255864bd21',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'122a6bfc43e94c1b9109c07a3d2e95f5',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceId',uuid:'20b88b978f404e5cbef485d3dec33b5c',columnName:'resourceId',label:'资源唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPResource',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1':{concept:'Entity',changedTime:1690633426657,name:'LCAPRolePerMapping1',uuid:'f459f688c5e9496aa5c2918cfa794ee8',tableName:'LCAPRolePerMapping1',description:'角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'08686fab6c1c4d6ebe720e16597b9fb7',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'b0e5e7261e0a4ac3b763eb3bcacbc4d0',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'9d3dac518fb947af81162c8e5a7b76ce',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'09c096f3828b4e738962d25426e9eada',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'99cb54a097464a4ab14d14345d3abd58',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'db73c5f2f1cf452db27365d5e5a8139c',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'c1bc3d0e90cd43e3adee1fedce33306e',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUser1':{concept:'Entity',changedTime:1690633426654,name:'LCAPUser1',uuid:'fde2d834276248d689a45147db93b0fa',tableName:'LCAPUser1',description:'制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'bcb0d7ee8b4941209bea365d35259da3',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14476992223',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'4a99789d4fe74a24b0d26f699ed3cf57',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'b2df858e62bc47d18559f845f59beea3',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'4addccce42ee42028c803a7eb87c2e42',columnName:'userId',label:'用户id',description:'第三方登录方式唯一id；普通登录使用userName+source作为userId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'01824a7ac87e418a8ab483c22404810e',columnName:'userName',label:'用户名',description:'普通登录用户名，类似账号的概念',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'password',uuid:'4d2a7c85058f40f6af4eb659df85e8be',columnName:'password',label:'登录密码',description:'普通登录密码，密码建议加密存储。第三方登录不会存储密码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'phone',uuid:'cab750285ca24859b98eae9d27b2af6d',columnName:'phone',label:'手机号',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'email',uuid:'b3f6dab72e5c475997b1a0a68cfd7772',columnName:'email',label:'邮箱',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'displayName',uuid:'939a80e755b54c408a6fa577261718d1',columnName:'displayName',label:'昵称',description:'展示的名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'status',uuid:'8115f9a036bc4410b769f9c6267e670f',columnName:'status',label:'状态',description:'状态，标识当前用户的状态是什么',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserStatusEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'b2c4404867a44fd89704c329f07a31e9',columnName:'source',label:'用户来源',description:'当前条用户数据来自哪个用户源，如普通登录、微信登录',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserSourceEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1':{concept:'Entity',changedTime:1690633426651,name:'LCAPLogicViewMapping1',uuid:'96b48758c96d4a82b01af8070700748d',tableName:'LCAPLogicViewMapping1',description:'记录应用全局逻辑与页面资源的关联关系',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'8500d8f529574c2db1b2145bb43999cb',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14946531801',isLeaf:true},{concept:'EntityProperty',name:'logicIdentifier',uuid:'b219fa10843041d29fe96d9a535c63ab',columnName:'logicIdentifier',label:'逻辑标识',description:'/api/logic1:GET',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceName',uuid:'96cac206e2374b20bd9b2796f4e0d1e4',columnName:'resourceName',label:'资源路径',description:'/dashboard/button1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceType',uuid:'d3a76f6407144f2ebe6227bc2a8229a0',columnName:'resourceType',label:'资源类型',description:'页面-page 组件-component 逻辑-logic',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'group',uuid:'881f214d62334ed68568ed2c35eff237',columnName:'group',label:'逻辑与资源绑定的分组关系',description:'值一样的为同一组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'changeTime',uuid:'dc539a492c334b719a85d21dd193cec5',columnName:'changeTime',label:'创建时间',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping':{concept:'Entity',name:'LCAPLogicViewMapping',uuid:'adfdf20bd4b24709b978d9249a27bdcc',tableName:'LCAPLogicViewMapping_f15285',description:'记录应用全局逻辑与页面资源的关联关系',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'03627b4d18d246e8bb1db53c95b3029e',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14946531801',isLeaf:true},{concept:'EntityProperty',name:'logicIdentifier',uuid:'7771febe1066495c8710aff0039df43a',columnName:'logicIdentifier',label:'逻辑标识',description:'/api/logic1:GET',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceName',uuid:'3e0f23cdac754576bf794c8fd98889f5',columnName:'resourceName',label:'资源路径',description:'/dashboard/button1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceType',uuid:'803c912c1e0a40489c9c42ef2c5a509a',columnName:'resourceType',label:'资源类型',description:'页面-page 组件-component 逻辑-logic',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'group',uuid:'513811c2fbbc4f9abd9dee370138bb63',columnName:'group',label:'逻辑与资源绑定的分组关系',description:'值一样的为同一组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'changeTime',uuid:'6c4bbbdc6cba45749cf44710732e6c36',columnName:'changeTime',label:'创建时间',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUser':{concept:'Entity',name:'LCAPUser',uuid:'0519ac79796d4e4cbe21f3665ff243bc',tableName:'LCAPUser_f15285',description:'制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'b9aa40ebafae4368ad4cc0b03df5bcac',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:true,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:'Entity14476992223',isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'c7bb22da1f124b44933b5d6ee0e2d343',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'cc4a8a78690a41fb80ba9e7b082ab089',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'aae937a9ccb74f71b130470773b3defd',columnName:'userId',label:'用户id',description:'第三方登录方式唯一id；普通登录使用userName+source作为userId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'8e392da097db42879608ab2545720a7f',columnName:'userName',label:'用户名',description:'普通登录用户名，类似账号的概念',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'password',uuid:'e1f9b853a5774b85a522b12e958f463c',columnName:'password',label:'登录密码',description:'普通登录密码，密码建议加密存储。第三方登录不会存储密码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'phone',uuid:'dae8a169b2e14d1c8cfada5d16395182',columnName:'phone',label:'手机号',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'email',uuid:'57e543c11623427eb3af18576c70449a',columnName:'email',label:'邮箱',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'displayName',uuid:'cd768ae87c9845abb6ebd22f1c271afe',columnName:'displayName',label:'昵称',description:'展示的名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'status',uuid:'76baaa6e2e374881bef08e7745835e20',columnName:'status',label:'状态',description:'状态，标识当前用户的状态是什么',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserStatusEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'86efacb63c1e430d9b94e44d1880858c',columnName:'source',label:'用户来源',description:'当前条用户数据来自哪个用户源，如普通登录、微信登录',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.enums',typeName:'UserSourceEnum',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:'Normal',primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRolePerMapping':{concept:'Entity',name:'LCAPRolePerMapping',uuid:'ef6937ec5baf46da81636027b8eb9eb1',tableName:'LCAPRolePerMapping_f15285',description:'角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'fe8fd8b205034429a361fa92fb744942',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'35aa32df3f2743238dd58ff6b0a43a0b',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'506892c59c494bacbf60b58c7a22813b',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'ef1d18ea38a54fb4a632a858436bf0af',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'4c37443db3314ab0bd48c78e9bd6f834',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'c2fc041bc3d2424790bf93e249481bea',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'8159eed26d3c4471bd4304dae95005f0',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPerResMapping':{concept:'Entity',name:'LCAPPerResMapping',uuid:'8d355ce2b3474829a0b436633882e38c',tableName:'LCAPPerResMapping_f15285',description:'权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'06eb2320cca5449ca44f14ff52352a87',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'9a1d64382f7b4f14af973b805a181ca1',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'25bb752e79774e8fb062932a951fbc66',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'963e4ba019a44c738b510f99d90b85ba',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'8a901881a1d04afb8770990d99a02a22',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'permissionId',uuid:'e91a996a651c463fbf286a8ee6949dde',columnName:'permissionId',label:'权限唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPPermission',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'resourceId',uuid:'eb64fc59ae7343a8b8556b3b98a1f503',columnName:'resourceId',label:'资源唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPResource',relationProperty:'id',deleteRule:'cascade',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping':{concept:'Entity',name:'LCAPUserRoleMapping',uuid:'6a1d387610ae446190fc386cae98c145',tableName:'LCAPUserRoleMapping_f15285',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'0163131e6b7142af9b052527fa237783',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'1475ec41bad245a18877b5367fcd4a94',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'e79000be070046709039ab4dcec68e41',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'a1e51241027e4fe2a7ee52a807fb255a',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'8e26eea329bf46249ee46e1451e0ee3c',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userId',uuid:'60332b3288d8479e9cac4acb65d64ece',columnName:'userId',label:'用户唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPUser',relationProperty:'userId',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleId',uuid:'294c7982fbe74c4fbe5d16853fecc0cd',columnName:'roleId',label:'角色唯一ID',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'LCAPRole',relationProperty:'id',deleteRule:'cascade',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'userName',uuid:'f3c1dc547d314792b9f8c6f4aab395f5',columnName:'userName',label:'用户名',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'source',uuid:'0668c00d842b439ea04c12147303158b',columnName:'source',label:'用户来源',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPRole':{concept:'Entity',name:'LCAPRole',uuid:'1c87d061b50f46b3a304bf5ea4a06374',tableName:'LCAPRole_f15285',description:'用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'9c29c40fce7046469a40a25e2bd86333',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'d7397fd3d0814e1593fc971df0789c3b',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'f47a8b43cf3643239237be6a98ce0737',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'8d7953b5d597408f951bce4850943676',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'a5c1ec101afc4946805fa984cba6ad88',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'a5e07c01a2b24c3d9a87bb616678adf9',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'2cc16a28a25444c183df3d9081a247b2',columnName:'name',label:'角色名称',description:'角色名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'8f009a93db7c4e95a9c2c2b185b2614d',columnName:'description',label:'角色描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'roleStatus',uuid:'37426b3c4d5d4ef5a8e54934808e7cc0',columnName:'roleStatus',label:'角色状态',description:'角色状态，可配置true启用，false禁用。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'editable',uuid:'ef92d92035d2455d84471bb070b8ec5c',columnName:'editable',label:'是否可编辑',description:'系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:'true',primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPPermission':{concept:'Entity',changedTime:1691649899473,name:'LCAPPermission',uuid:'30ffa10652854668af66e10216073c67',tableName:'LCAPPermission_f15285',description:'权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'ca5d863f15c44ac1b8853cd12587f363',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'760d6755c1064e8eba46e341d189056d',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'ad97e5cdf54e4664920a1f1bf483c7a2',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'830aff8932fc447a9caad07596808e15',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'630f6e017ea4402ea310baf74569214e',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'cab914b3e78f457aa15fe4a3818e8095',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'646de1ee1e964510bb2e08ada8cfc7ee',columnName:'name',label:'权限名称',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'6fe424d6bdac438d998fecb28725b4e6',columnName:'description',label:'权限描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',changedTime:1691649767922,name:'property1',uuid:'090e97b3ddb4493488bb1c2b339a3b3a',columnName:'property1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},display:{inDetail:true,inFilter:true,inForm:true,inTable:true},rules:[],generationRule:'manual',isLeaf:true}],indexes:[]},'app.dataSources.defaultDS.entities.LCAPResource':{concept:'Entity',name:'LCAPResource',uuid:'4c772acad0c542ccbc89c245c3f81e52',tableName:'LCAPResource_f15285',description:'资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。',origin:'ide',properties:[{concept:'EntityProperty',name:'id',uuid:'1565bde5b0da49c8a40d54654581a68b',columnName:'id',label:'主键',description:'主键',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:true,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdTime',uuid:'18d934dc5a71438ab06c543dba7017d7',columnName:'createdTime',label:'创建时间',description:'创建时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedTime',uuid:'f49be15af1f24995844d2515147945cc',columnName:'updatedTime',label:'更新时间',description:'更新时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'createdBy',uuid:'5a6cb41abbe54140906c88c428902c12',columnName:'createdBy',label:'创建者',description:'创建者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'updatedBy',uuid:'e7ce289c74ee406a80b6164e6dc6c806',columnName:'updatedBy',label:'更新者',description:'更新者',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'uuid',uuid:'a22e0ebbb7434df190954a5c067c172e',columnName:'uuid',label:'唯一标识',description:'唯一标识',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'name',uuid:'5f7699e808e4434ba2d43326dfa0917e',columnName:'name',label:'资源名称',description:'资源路径，如/test/api',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:true,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'description',uuid:'4b90f80a8450441eb93b93ba9f9be24e',columnName:'description',label:'资源描述',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'type',uuid:'8790186b61b34d9fb7f073a1c80fbe85',columnName:'type',label:'资源类型',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:'app.dataSources.defaultDS.entities',relationEntity:'',relationProperty:'',deleteRule:'',display:{inTable:false,inFilter:false,inForm:false,inDetail:false},rules:[],generationRule:'auto',sequence:null,isLeaf:true},{concept:'EntityProperty',name:'clientType',uuid:'947bba06c1484b38893f69de1e76e0f6',columnName:'clientType',label:'端标识',description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},databaseTypeAnnotation:null,required:false,defaultValue:null,primaryKey:false,relationNamespace:null,relationEntity:null,relationProperty:null,deleteRule:null,display:{inTable:true,inFilter:true,inForm:true,inDetail:true},rules:[],generationRule:'auto',sequence:null,isLeaf:true}],indexes:[]},'app.structures.LCAPGetResourceResult':{concept:'Structure',name:'LCAPGetResourceResult',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'resourceValue',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'resourceType',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,defaultValue:null,jsonName:null,isLeaf:true}]},'app.structures.LCAPRoleBindUsersBody':{concept:'Structure',name:'LCAPRoleBindUsersBody',description:null,origin:null,compilerInfoMap:null,typeParams:[],properties:[{concept:'StructureProperty',name:'roleId',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true},{concept:'StructureProperty',name:'userIdList',label:null,description:null,typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},required:true,defaultValue:null,jsonName:null,isLeaf:true}]},'nasl.collection.List<nasl.core.String>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'extensions.auth_library_guosen.structures.Result':{concept:'Structure',name:'Result',description:'',compilerInfoMap:{java:{packageName:'com.netease.lowcode.auth.guosen.structure'}},typeParams:null,properties:[{concept:'StructureProperty',name:'SUCCESS',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'FAIL',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'code',description:'成功为0 失败为-1',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'msg',description:'错误信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'extensions.auth_library_guosen.structures.UserInfo':{concept:'Structure',name:'UserInfo',description:'',compilerInfoMap:{java:{packageName:'com.netease.lowcode.auth.guosen.structure'}},typeParams:null,properties:[{concept:'StructureProperty',name:'userId',description:'用户唯一标识 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'userName',description:'用户名 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'source',description:'认证来源 必须要有此字段',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'empno',description:'工号，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'title',description:'职位，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'department',description:'部门，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'dep3',description:'二级部门，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'email',description:'邮箱，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'fullname',description:'中文名称，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'nickname',description:'昵称，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'phone',description:'手机号，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'openid',description:'openid，可能为空',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}]},'nasl.ui.Current':{concept:'Structure',name:'Current',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'rowIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'columnIndex',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},T:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},'nasl.ui.Error':{concept:'Structure',name:'Error',typeParams:null,properties:[{concept:'StructureProperty',name:'errorType',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'errorMsg',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.BaseEvent':{concept:'Structure',name:'BaseEvent',typeParams:null,properties:[]},'nasl.ui.DataSourceParams':{concept:'Structure',name:'DataSourceParams',typeParams:null,properties:[{concept:'StructureProperty',name:'page',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'sort',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'filterText',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.EventTarget':{concept:'Structure',name:'EventTarget',typeParams:null,properties:[]},'nasl.ui.MouseEvent':{concept:'Structure',name:'MouseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'altKey',description:'如果alt 键被按下，返回true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'button',description:'如果鼠标按钮被按下（如果有的话），将会返回一个数值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientX',description:'鼠标指针在点击元素（DOM）中的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'clientY',description:'鼠标指针在点击元素（DOM）中的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'ctrlKey',description:'如果 control 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'metaKey',description:'如果 meta 键被按下，则返回 true',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementX',description:'鼠标指针相对于最后mousemove事件位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'movementY',description:'鼠标指针相对于最后mousemove事件位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetX',description:'鼠标指针相对于目标节点内边位置的X坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'offsetY',description:'鼠标指针相对于目标节点内边位置的Y坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenX',description:'相对于全局（屏幕）的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'screenY',description:'相对于全局（屏幕）的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.FocusEvent':{concept:'Structure',name:'FocusEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'cancelBubble',description:'是否取消冒泡',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'detail',description:'详情',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerX',description:'相对于当前层的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'layerY',description:'相对于当前层的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageX',description:'相对于整个文档的水平坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageY',description:'相对于整个文档的垂直坐标',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'which',description:'对应（键盘）按下的数字类型的 keyCode',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeEvent':{concept:'Structure',name:'ChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formattedValue',description:'格式化后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'改变后的值是否合法',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<T>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.NavigateEvent':{concept:'Structure',name:'NavigateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'to',description:'to属性的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'replace',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'append',description:'',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemEvent':{concept:'Structure',name:'ChangeItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'选择项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItem',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'label',description:'此选框的标签',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ChangeItemsEvent':{concept:'Structure',name:'ChangeItemsEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'selected',description:'选中还是取消',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'该选中项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'所有选中项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'items',description:'所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldItems',description:'旧的所有选中项相关对象的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CascadeCapsulesEvent':{concept:'Structure',name:'CascadeCapsulesEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'level',description:'选择的层级',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CollapseEvent':{concept:'Structure',name:'CollapseEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'expanded',description:'展开/折叠状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'open',description:'弹出/隐藏状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的开关状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'节点相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SliderEvent':{concept:'Structure',name:'SliderEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'滑块的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'旧的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'percent',description:'滑块位置所在的百分比',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DateEvent':{concept:'Structure',name:'DateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'date',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'time',description:'日期值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.core.Date':{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Date',typeArguments:null,returnType:null,properties:null},'nasl.ui.OperatorItemEvent':{concept:'Structure',name:'OperatorItemEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'添加的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',description:'添加的索引',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'当前数据',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ValidateEvent':{concept:'Structure',name:'ValidateEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'rawValue',description:'用户输入的原始值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'value',description:'验证修复的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'trigger',description:'本次验证的触发方式',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'muted',description:'是否验证后无提示',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'valid',description:'验证是否通过',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'touched',description:'用户是否触碰',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'dirty',description:'用户是否修改值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'firstError',description:'第一个错误提示消息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PaginationEvent':{concept:'Structure',name:'PaginationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'page',description:'选择的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPage',description:'旧的页码',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'pageSize',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldPageSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldSize',description:'旧的每页条数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'number',description:'当前页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNumber',description:'旧的页数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DurationEvent':{concept:'Structure',name:'DurationEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'text',description:'提示的内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'color',description:'提示的颜色',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'duration',description:'提示停留的时间',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TransferEvent':{concept:'Structure',name:'TransferEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'原数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',description:'目标数据列表',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transfer',description:'移动的项',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'transferValues',description:'移动项的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.TreeChangeEvent':{concept:'Structure',name:'TreeChangeEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'value',description:'改变后的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValue',description:'待改变的值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldNode',description:'旧的选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.CheckedEvent':{concept:'Structure',name:'CheckedEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'checked',description:'选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldChecked',description:'旧的选中/取消状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'values',description:'改变后每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'oldValues',description:'旧的每项值的数组',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'node',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',description:'选择项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.Boolean<>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},'nasl.ui.UploadEvent':{concept:'Structure',name:'UploadEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'File',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'data',description:'进度相关信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'file',description:'上传文件信息，不包含文件主体内容',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xhr',description:'发送前的 XMLHttpRequest 对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'formData',description:'用于发送的数据对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'xml',description:'服务器回传信息',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.File':{concept:'Structure',name:'File',typeParams:null,properties:[{concept:'StructureProperty',name:'status',description:'文件状态',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'url',description:'文件链接',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'文件名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'文件大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'type',description:'文件类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.UploadErrorEvent':{concept:'Structure',name:'UploadErrorEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'name',description:'错误名',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'message',description:'错误描述',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'extensions',description:'限制类型',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'maxSize',description:'限制大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'size',description:'当前大小',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'count',description:'当前数量',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'limit',description:'数量配额',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SortEvent':{concept:'Structure',name:'SortEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'field',description:'排序属性',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'order',description:'排序顺序',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'compare',description:'排序比较函数',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.PoiInfo':{concept:'Structure',name:'PoiInfo',typeParams:null,properties:[{concept:'StructureProperty',name:'source',description:'信息来源',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'id',description:'POI点的id',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'name',description:'名称',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'location',description:'经纬度',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'address',description:'地址',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.SelectData':{concept:'Structure',name:'SelectData',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'parent',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'item',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'level',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'index',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropUpdateData':{concept:'Structure',name:'DragAndDropUpdateData',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'sourceList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'targetList',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},isLeaf:true}]},'nasl.ui.DragAndDropEvent':{concept:'Structure',name:'DragAndDropEvent',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'source',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'target',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finalSource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'SelectData',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'position',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'updateData',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'nasl.ui',typeName:'DragAndDropUpdateData',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.ui.ExpandEvent':{concept:'Structure',name:'ExpandEvent',typeParams:null,properties:[{concept:'StructureProperty',name:'item',description:'展开项相关对象',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'expanded',description:'展开状态值',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List':{concept:'Structure',name:'List',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.Map':{concept:'Structure',name:'Map',typeParams:[{concept:'TypeParam',name:'K'},{concept:'TypeParam',name:'V'}],properties:[{concept:'StructureProperty',name:'length',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.interface.ApiReturnOf':{concept:'Structure',name:'ApiReturnOf',typeParams:[{concept:'TypeParam',name:'T'}],properties:[{concept:'StructureProperty',name:'Data',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'typeParam',typeName:'T',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'Message',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessDefinition':{concept:'Structure',name:'LCAPProcessDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'suspended',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPProcessInstance':{concept:'Structure',name:'LCAPProcessInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'startTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'endTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskDefinition':{concept:'Structure',name:'LCAPTaskDefinition',typeParams:null,properties:[{concept:'StructureProperty',name:'name',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'emptyAssignee',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'skipEnabled',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPTaskInstance':{concept:'Structure',name:'LCAPTaskInstance',typeParams:null,properties:[{concept:'StructureProperty',name:'taskId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'title',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'description',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'finished',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeBy',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'createTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'completeTime',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'DateTime',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'taskDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processId',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'processDefName',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.process.LCAPOperateProcessResult':{concept:'Structure',name:'LCAPOperateProcessResult',typeParams:null,properties:[{concept:'StructureProperty',name:'success',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Boolean',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'failMessage',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true},{concept:'StructureProperty',name:'code',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'String',typeArguments:null,returnType:null,properties:null},isLeaf:true}]},'nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<nasl.core.Long>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'primitive',typeNamespace:'nasl.core',typeName:'Long',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission1>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission1',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPUserRoleMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUserRoleMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPUser',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPUser1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource1>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource1',typeArguments:null,returnType:null,properties:null}],returnType:null,properties:null},'nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPResource',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPResource1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.ui',typeName:'Current',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPRole',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRole1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null},'nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission1, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping1}>':{concept:'TypeAnnotation',name:'',typeKind:'generic',typeNamespace:'nasl.collection',typeName:'List',typeArguments:[{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}],returnType:null,properties:null},'{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission1, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping1}':{concept:'TypeAnnotation',name:'',typeKind:'anonymousStructure',typeNamespace:null,typeName:null,typeArguments:[],returnType:null,inferred:false,properties:[{concept:'StructureProperty',name:'lCAPPermission',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPPermission1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true},{concept:'StructureProperty',name:'lCAPRolePerMapping',typeAnnotation:{concept:'TypeAnnotation',name:'',typeKind:'reference',typeNamespace:'app.dataSources.defaultDS.entities',typeName:'LCAPRolePerMapping1',typeArguments:null,returnType:null,properties:null},required:false,isLeaf:true}],ruleMap:null}},enumsMap:{UserStatusEnum:{Normal:'正常',Forbidden:'禁用'},UserSourceEnum:{Normal:'普通登录'}},logicsMap:{'app.dataSources.defaultDS.entities.Entity3.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/entity3'}},'app.dataSources.defaultDS.entities.Entity3.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity3'}},'app.dataSources.defaultDS.entities.Entity3.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity3'}},'app.dataSources.defaultDS.entities.Entity3.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity3'}},'app.dataSources.defaultDS.entities.Entity3.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity3/createOrUpdate'}},'app.dataSources.defaultDS.entities.Entity3.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity3/by'}},'app.dataSources.defaultDS.entities.Entity3.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity3/by'}},'app.dataSources.defaultDS.entities.Entity3.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity3/batch'}},'app.dataSources.defaultDS.entities.Entity3.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity3/batch'}},'app.dataSources.defaultDS.entities.Entity3.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity3/batch'}},'app.dataSources.defaultDS.entities.Entity3.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity3/import'}},'app.dataSources.defaultDS.entities.Entity2.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/entity2'}},'app.dataSources.defaultDS.entities.Entity2.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity2'}},'app.dataSources.defaultDS.entities.Entity2.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity2'}},'app.dataSources.defaultDS.entities.Entity2.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity2'}},'app.dataSources.defaultDS.entities.Entity2.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity2/createOrUpdate'}},'app.dataSources.defaultDS.entities.Entity2.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity2/by'}},'app.dataSources.defaultDS.entities.Entity2.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity2/by'}},'app.dataSources.defaultDS.entities.Entity2.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity2/batch'}},'app.dataSources.defaultDS.entities.Entity2.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity2/batch'}},'app.dataSources.defaultDS.entities.Entity2.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity2/batch'}},'app.dataSources.defaultDS.entities.Entity2.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity2/import'}},'app.dataSources.defaultDS.entities.Entity1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1'}},'app.dataSources.defaultDS.entities.Entity1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/createOrUpdate'}},'app.dataSources.defaultDS.entities.Entity1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1/by'}},'app.dataSources.defaultDS.entities.Entity1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1/by'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/entity1/batch'}},'app.dataSources.defaultDS.entities.Entity1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/entity1/import'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-resource1'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource1'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource1'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource1'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource1/by'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource1/by'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource1/batch'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource1/batch'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource1/batch'}},'app.dataSources.defaultDS.entities.LCAPResource1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource1/import'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-permission1'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission1'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission1'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission1'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission1/by'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission1/by'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission1/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission1/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission1/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission1/import'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role1'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role1'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role1'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role1'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role1/by'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role1/by'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role1/batch'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role1/batch'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role1/batch'}},'app.dataSources.defaultDS.entities.LCAPRole1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role1/import'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user-role-mapping1'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping1'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping1'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping1'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping1/import'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-per-res-mapping1'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping1'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping1'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping1'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping1/import'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role-per-mapping1'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping1'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping1'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping1'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping1/import'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user1'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user1'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user1'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user1'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user1/by'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user1/by'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user1/batch'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user1/batch'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user1/batch'}},'app.dataSources.defaultDS.entities.LCAPUser1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user1/import'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-logic-view-mapping1'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping1'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping1'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping1'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping1/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping1/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping1/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping1.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping1/import'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-logic-view-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-logic-view-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/by'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user/batch'}},'app.dataSources.defaultDS.entities.LCAPUser.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user/import'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role-per-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role-per-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-per-res-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-per-res-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/by'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-user-role-mapping/batch'}},'app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-user-role-mapping/import'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/by'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-role/batch'}},'app.dataSources.defaultDS.entities.LCAPRole.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-role/import'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/by'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-permission/batch'}},'app.dataSources.defaultDS.entities.LCAPPermission.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-permission/import'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.get':{config:{serviceType:'entity'},url:{method:'GET',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.create':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.update':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.delete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.createOrUpdate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/createOrUpdate'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.updateBy':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.deleteBy':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/by'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchCreate':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchUpdate':{config:{serviceType:'entity'},url:{method:'PUT',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.batchDelete':{config:{serviceType:'entity'},url:{method:'DELETE',path:'/api/l-c-a-p-resource/batch'}},'app.dataSources.defaultDS.entities.LCAPResource.logics.import':{config:{serviceType:'entity'},url:{method:'POST',path:'/api/l-c-a-p-resource/import'}},'app.logics.logic4':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/logic4'}},'app.logics.logic3':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/logic3'}},'app.logics.logic2':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/logic2'}},'app.logics.loadEntityDragSelect':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadEntityDragSelect'}},'app.logics.loadEntityDragTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadEntityDragTableView'}},'app.logics.loadEntitydragListView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadEntitydragListView'}},'app.logics.logic1':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/logic1'}},'app.logics.loadGanteTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadGanteTableView'}},'app.logics.LCAPUser_Normal_GetUser':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPUser_Normal_GetUser'}},'app.logics.LCAPUser_Normal_UpdateUser':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPUser_Normal_UpdateUser'}},'app.logics.loadTestTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadTestTableView'}},'app.logics.LCAPGetUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserList'}},'app.logics.LCAPGetUserByUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserByUserId'}},'app.logics.LCAPGetAllUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetAllUsers'}},'app.logics.LCAPGetUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserTableView'}},'app.logics.LCAPRoleBindUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPRoleBindUsers'}},'app.logics.LCAPLoadPermissionManagementTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadPermissionManagementTableView'}},'app.logics.LCAPIsExistRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsExistRoleId'}},'app.logics.LCAPLoadPermissionResourceListView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadPermissionResourceListView'}},'app.logics.LCAPGetMappingByPermissionIdAndResourceId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingByPermissionIdAndResourceId'}},'app.logics.LCAPGetScopeResourceByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetScopeResourceByRoleId'}},'app.logics.loadAddRoleUserTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/loadAddRoleUserTableView'}},'app.logics.LCAPGetRoleBindUserList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRoleBindUserList'}},'app.logics.LCAPLoadRoleManagementTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadRoleManagementTableView'}},'app.logics.LCAPUnBindUsers':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPUnBindUsers'}},'app.logics.LCAPLoadUserRoleMappingTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadUserRoleMappingTableView'}},'app.logics.LCAPGetRolePermissionList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetRolePermissionList'}},'app.logics.LCAPLoadAddRoleUserSelectLCAPRole':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadAddRoleUserSelectLCAPRole'}},'app.logics.LCAPGetUserResources':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetUserResources'}},'app.logics.LCAPGetPermissionByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetPermissionByRoleId'}},'app.logics.LCAPGetResourceListByRoleId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetResourceListByRoleId'}},'app.logics.LCAPGetMappingIdByRoleIdAndUserId':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPGetMappingIdByRoleIdAndUserId'}},'app.logics.LCAPIsAlreadBindUserIdList':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsAlreadBindUserIdList'}},'app.logics.LCAPLoadResourceTableView':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPLoadResourceTableView'}},'app.logics.LCAPIsRoleNameRepeated':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/lcplogics/LCAPIsRoleNameRepeated'}},'extensions.auth_library_guosen.logics.getAuthViewUrl':{config:{serviceType:'micro'},url:{method:'POST',path:'/api/auth_library_guosen/getAuthViewUrl'}}},servicesMap:{_custom:{}}};
        var routes = [{
            path: '/pc/ddddd',
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
    async logic1 () {

return;
    }
,

async button1_click (event) { 
await (async () => {

return;
    })();
}
,

async button1_dblclick (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" :loadingIconRotate="true"
    layout="none">
    <u-router-view ref="router_view1"></u-router-view>
    <lcap-you-data ref="lcap_you_data1"></lcap-you-data>
    <u-button ref="button1" color="primary" text="确 定" @click="button1_click(\$event)" @dblclick="button1_dblclick(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/sss1',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                
            };
        },
meta: {
    title: "www1rr",
    crumb: "",
    first: undefined,
    auth: "loginAuth",
},
methods: {
    
},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" mode="inline" direction="horizontal">
    <u-router-view ref="router_view1"></u-router-view>
    <lcap-echarts-bar ref="lcap_echarts_bar1" style="--xAxis-label-font-size:12;"></lcap-echarts-bar>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
children: [
                {
            path: 'subsss',
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
    auth: "loginAuth",
},
methods: {
    async logic1 () {

await (this.$logics['app.logics.logic1']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
}
}))
return;
    }

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none">
    <u-router-view ref="router_view1"></u-router-view>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
}
            ],
},
{
            path: '/pc/entityDrag',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['lCAPResource1']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource1', undefined),
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource1', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource1', undefined),
['isUpdate']:undefined
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.loadEntityDragTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
}))
return result;
    }
,

async loadSelect (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.loadEntityDragSelect']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size
}
}))
return result;
    }
,

async logic1 () {
        let variable1 =undefined;

await (this.$logics['app.logics.loadEntitydragListView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: undefined, 
size: undefined
}
}))
return;
    }
,

async entityDrag_created (event) { 
await (async () => {

this.$utils['Clear'](this.filter)
return;
    })();
}
,

async button2_click (event) { 
await (async () => {

this.isUpdate = false
this.input = this.$utils['Clone'](this.lCAPResource1)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async button3_click (event) { 
await (async () => {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs.saveModalForm && this.$refs.saveModalForm.validate && this.$refs.saveModalForm.validate())
if ((validateResult || {}).valid) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: this.input},

}))
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    })();
}
,

async button4_click (event) { 
await (async () => {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs.saveModalForm && this.$refs.saveModalForm.validate && this.$refs.saveModalForm.validate())
if ((validateResult || {}).valid) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.input
}))
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    })();
}
,

async link1_click (event,current) { 
await (async () => {

this.isUpdate = true
this.input = this.$utils['Clone'](((current || {}).item || {}).lCAPResource1)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPResource1 || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}

},
        async created () {
        await this.entityDrag_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" :loadingIconRotate="true"
    direction="horizontal" loadingText="">
    <u-router-view ref="router_view1"></u-router-view>
    <u-linear-layout ref="linear_layout1" direction="horizontal"></u-linear-layout>
    <u-linear-layout ref="linear_layout2" direction="vertical" loadingText="">
        <u-linear-layout ref="linear_layout3" justify="space-between">
            <u-form ref="form1" layout="inline" key="form1">
                <u-form-item ref="form_item1" layout="center">
                    <template #label ref="template1">
                        <u-text ref="text1" text="资源名称"></u-text>
                    </template>
                    <u-input ref="input1" placeholder="请输入资源名称" :value.sync="filter.name"></u-input>
                </u-form-item>
                <u-form-item ref="form_item2" layout="center">
                    <template #label ref="template2">
                        <u-text ref="text2" text="资源描述"></u-text>
                    </template>
                    <u-input ref="input2" placeholder="请输入资源描述" :value.sync="filter.description"></u-input>
                </u-form-item>
                <u-form-item ref="form_item3" layout="center">
                    <template #label ref="template3">
                        <u-text ref="text3" text="端标识"></u-text>
                    </template>
                    <u-input ref="input3" placeholder="请输入端标识" :value.sync="filter.clientType"></u-input>
                </u-form-item>
                <u-form-item ref="form_item4" layout="center" label-size="auto">
                    <u-button ref="button1" style="text-align:right;" color="primary" text="查 询" :disabled="false"></u-button>
                </u-form-item>
            </u-form>
            <u-linear-layout ref="linear_layout4">
                <u-button ref="button2" color="primary" text="创 建" @click="button2_click(\$event)"></u-button>
            </u-linear-layout>
        </u-linear-layout>
        <u-table-view ref="tableView" :data-source="load" data-schema="LoadEntityDragTableViewStructure" value-field="lCAPResource1.id" :pagination="true"
            :show-sizer="true" value="" :page-size-options="[10,20,50]" values="" default-column-width="" :sorting="{ field: 'lCAPResource1.id', order: 'asc' }"
            :page-size="40" designer-mode="loading" loading-text="正在加载中..." title="" :style="{}" key="tableView">
            <u-table-view-column ref="table_view_column1" type="index" width="60">
                <template #cell="current" ref="template4"></template>
                <template #title ref="template5">
                    <u-text ref="text4" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column2" field="lCAPResource1.name">
                <template #cell="current" ref="template6">
                    <u-linear-layout ref="linear_layout5" gap="small">
                        <u-text ref="text5" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).name, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template7">
                    <u-text ref="text6" text="资源名称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column3" field="lCAPResource1.description">
                <template #cell="current" ref="template8">
                    <u-linear-layout ref="linear_layout6" gap="small">
                        <u-text ref="text7" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).description, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template9">
                    <u-text ref="text8" text="资源描述"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column4" field="lCAPResource1.clientType">
                <template #cell="current" ref="template10">
                    <u-linear-layout ref="linear_layout7" gap="small">
                        <u-text ref="text9" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).clientType, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template11">
                    <u-text ref="text10" text="端标识"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column5" title="操作">
                <template #cell="current" ref="template12">
                    <u-linear-layout ref="linear_layout8" gap="small">
                        <u-link ref="link1" text="修改" @click="link1_click(\$event, current)"></u-link>
                        <u-link ref="link2" text="删除" @click="link2_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title ref="template13">
                    <u-text ref="text11" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-panel ref="panel1">
            <template #title ref="template20">
                <u-text ref="text17" text="任务总览"></u-text>
            </template>
            <u-text ref="text18" text="任务内容"></u-text>
        </u-panel>
        <u-modal ref="saveModal">
            <template #foot ref="template14">
                <u-linear-layout ref="linear_layout9">
                    <u-button ref="button3" color="primary" text="提交修改" @click="button3_click(\$event)" v-if="isUpdate"></u-button>
                    <u-button ref="button4" color="primary" text="立即创建" @click="button4_click(\$event)" v-if="!(isUpdate)"></u-button>
                </u-linear-layout>
            </template>
            <template #body ref="template15">
                <u-form ref="saveModalForm" key="saveModalForm">
                    <u-form-item ref="form_item5" required="" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]" layout="center">
                        <template #label ref="template16">
                            <u-text ref="text12" text="资源名称"></u-text>
                        </template>
                        <u-input ref="input4" placeholder="请输入资源名称" :value.sync="input.name"></u-input>
                    </u-form-item>
                    <u-form-item ref="form_item6" layout="center">
                        <template #label ref="template17">
                            <u-text ref="text13" text="资源描述"></u-text>
                        </template>
                        <u-input ref="input5" placeholder="请输入资源描述" :value.sync="input.description"></u-input>
                    </u-form-item>
                    <u-form-item ref="form_item7" layout="center">
                        <template #label ref="template18">
                            <u-text ref="text14" text="端标识"></u-text>
                        </template>
                        <u-input ref="input6" placeholder="请输入端标识" :value.sync="input.clientType"></u-input>
                    </u-form-item>
                </u-form>
            </template>
            <template #title ref="template19">
                <div ref="div1" v-if="isUpdate">
                    <u-text ref="text15" text="修改"></u-text>
                </div>
                <div ref="div2" v-if="!(isUpdate)">
                    <u-text ref="text16" text="创建"></u-text>
                </div>
            </template>
        </u-modal>
    </u-linear-layout>
    <u-select ref="select" clearable="" placeholder="请选择" :data-source="loadSelect" data-schema="LoadEntityDragSelectStructure" text-field="lCAPResource1.id"
        value-field="lCAPResource1.id" :pageable="true" :remote-paging="true" key="select"></u-select>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/gante',
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
    async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.loadGanteTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order
}
}))
return result;
    }
,

async gante_created (event) { 
await (async () => {

return;
    })();
}
,

async button1_mousedown (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}
,

async button1_mouseup (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPResource1 || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}

},
        async created () {
        await this.gante_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" mode="inline">
    <lcap-gantt ref="lcap_gantt1" :data-source="load"
        :ganttTableConfig="[{'nameField':'lCAPResource1.id','labelField':'列标题','showTooltip':true,'width':120},{'nameField':'lCAPResource1.name','labelField':'列标题','showTooltip':true,'width':120},{'labelField':'列标题','showTooltip':true,'width':120,'nameField':'lCAPResource1.description'}]"
        ganttStartDate="" ganttEndDate="" end-field=""></lcap-gantt>
    <u-linear-layout ref="linear_layout6" direction="horizontal"></u-linear-layout>
    <u-router-view ref="router_view1"></u-router-view>
    <u-table-view ref="tableView" :data-source="load" data-schema="LoadGanteTableViewStructure" value-field="lCAPResource1.id" :pagination="true"
        :show-sizer="true" key="tableView">
        <u-table-view-column ref="table_view_column2" field="lCAPResource1.name">
            <template #cell="current" ref="template3">
                <u-linear-layout ref="linear_layout1" gap="small">
                    <u-text ref="text2" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).name, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template4">
                <u-text ref="text3" text="资源名称"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column1" type="index" width="60">
            <template #cell="current" ref="template1"></template>
            <template #title ref="template2">
                <u-text ref="text1" text="序号"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column3" field="lCAPResource1.description">
            <template #cell="current" ref="template5">
                <u-linear-layout ref="linear_layout2" gap="small">
                    <u-text ref="text4" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).description, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template6">
                <u-text ref="text5" text="资源描述"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column4" field="lCAPResource1.clientType">
            <template #cell="current" ref="template7">
                <u-linear-layout ref="linear_layout3" gap="small">
                    <u-text ref="text6" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).clientType, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template8">
                <u-text ref="text7" text="端标识"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column5" title="操作">
            <template #cell="current" ref="template9">
                <u-linear-layout ref="linear_layout4" gap="small">
                    <u-link ref="link1" text="修改"></u-link>
                    <u-link ref="link2" text="删除" @click="link2_click(\$event, current)"></u-link>
                </u-linear-layout>
            </template>
            <template #title ref="template10">
                <u-text ref="text8" text="操作"></u-text>
            </template>
        </u-table-view-column>
    </u-table-view>
    <u-button ref="button1"
        style="border-color:#421cab;background-color:#384e97;background-position:center top;background-size:contain;background-repeat:no-repeat;"
        color="primary" text="确 定" @mousedown="button1_mousedown(\$event)" @mouseup="button1_mouseup(\$event)"></u-button>
    <u-linear-layout ref="linear_layout5" direction="horizontal"></u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/test',
component: (function(){
                var componentOptions = (function(){
return {

        data() {
            return {
                ['lCAPRole1']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['isUpdate']:undefined
            };
        },
meta: {
    title: "",
    crumb: null,
    first: undefined,
    auth: undefined,
},
methods: {
    async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.loadTestTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
}))
return result;
    }
,

async logic1 () {

return;
    }
,

async test_created (event) { 
await (async () => {

return;
    })();
await (async () => {

this.$utils['Clear'](this.filter)
return;
    })();
}
,

async test_destroyed (event) { 
await (async () => {

return;
    })();
}
,

async button5_dblclick (event) { 
await (async () => {

return;
    })();
}
,

async button5_contextmenu (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}
,

async button3_click (event) { 
await (async () => {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs.saveModalForm && this.$refs.saveModalForm.validate && this.$refs.saveModalForm.validate())
if ((validateResult || {}).valid) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: this.input},

}))
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    })();
}
,

async button4_click (event) { 
await (async () => {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs.saveModalForm && this.$refs.saveModalForm.validate && this.$refs.saveModalForm.validate())
if ((validateResult || {}).valid) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.input
}))
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    })();
}
,

async button2_click (event) { 
await (async () => {

this.isUpdate = false
this.input = this.$utils['Clone'](this.lCAPRole1)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async button2_contextmenu (event) { 
await (async () => {

return;
    })();
}
,

async button1_click (event) { 
await (async () => {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}
,

async link1_click (event,current) { 
await (async () => {

this.isUpdate = true
this.input = this.$utils['Clone'](((current || {}).item || {}).lCAPRole1)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPRole1 || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}

},
        async created () {
        await this.test_created();},

async destroyed () {
        await this.test_destroyed();}
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" mode="block" direction="vertical">
    <u-linear-layout ref="linear_layout14">
        <u-linear-layout ref="linear_layout17" direction="horizontal">
            <u-linear-layout ref="linear_layout18" direction="horizontal">
                <u-linear-layout ref="linear_layout19" direction="horizontal"></u-linear-layout>
            </u-linear-layout>
        </u-linear-layout>
        <u-linear-layout ref="linear_layout17" direction="horizontal">
            <u-linear-layout ref="linear_layout18" direction="horizontal">
                <u-linear-layout ref="linear_layout19" direction="horizontal"></u-linear-layout>
            </u-linear-layout>
        </u-linear-layout>
    </u-linear-layout>
    <u-linear-layout ref="linear_layout10" direction="vertical" justify="center">
        <i-ico ref="ico1" name="http://ceph.lcap.hatest.163yun.com/lcap-test-static/user/defaulttenant/1690790294150_%E8%BF%94%E5%9B%9E.svg">
            <u-text ref="text1" text="图标"></u-text>
            <u-linear-layout ref="linear_layout20" direction="horizontal"></u-linear-layout>
        </i-ico>
        <u-linear-layout ref="linear_layout15">
            <u-linear-layout ref="linear_layout16" direction="horizontal"></u-linear-layout>
        </u-linear-layout>
        <u-image ref="image1" src="//ceph.lcap.hatest.163yun.com/lcap-test-static/assets/cloud-ui/1.jpg" fit="contain"></u-image>
        <u-form ref="form2" key="form2">
            <u-form-item ref="form_item9" :required="true" layout="center">
                <template #label ref="template23">
                    <u-text ref="text34" text="名称"></u-text>
                </template>
                <u-input ref="input4" placeholder="由字母、数字和中划线组成"></u-input>
            </u-form-item>
            <u-form-item ref="form_item10" :required="true" layout="center">
                <template #label ref="template24">
                    <u-text ref="text35" text="类型"></u-text>
                </template>
                <u-radios ref="radios1">
                    <u-radio ref="radio1" label="A">
                        <template #item ref="template25">
                            <u-text ref="text36" text="类型 A"></u-text>
                        </template>
                    </u-radio>
                    <u-radio ref="radio2" label="B">
                        <template #item ref="template26">
                            <u-text ref="text37" text="类型 B"></u-text>
                        </template>
                    </u-radio>
                </u-radios>
            </u-form-item>
            <u-form-item ref="form_item11" layout="center">
                <u-button ref="button5" color="primary" text="立即创建" @dblclick="button5_dblclick(\$event)" @contextmenu="button5_contextmenu(\$event)"></u-button>
            </u-form-item>
        </u-form>
        <u-linear-layout ref="linear_layout12" mode="flex"></u-linear-layout>
    </u-linear-layout>
    <lcap-markdown-doc-render ref="lcap_markdown_doc_render1"></lcap-markdown-doc-render>
    <u-modal ref="saveModal">
        <template #foot ref="template16">
            <u-linear-layout ref="linear_layout9">
                <u-button ref="button3" color="primary" text="提交修改" @click="button3_click(\$event)" v-if="isUpdate"></u-button>
                <u-button ref="button4" color="primary" text="立即创建" @click="button4_click(\$event)" v-if="!(isUpdate)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template17">
            <u-form ref="saveModalForm" key="saveModalForm">
                <u-form-item ref="form_item5" required="" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]" layout="center">
                    <template #label ref="template18">
                        <u-text ref="text21" text="角色名称"></u-text>
                    </template>
                    <u-input ref="input2" placeholder="请输入角色名称" :value.sync="input.name"></u-input>
                </u-form-item>
                <u-form-item ref="form_item6" layout="center">
                    <template #label ref="template19">
                        <u-text ref="text22" text="角色描述"></u-text>
                    </template>
                    <u-input ref="input3" placeholder="请输入角色描述" :value.sync="input.description"></u-input>
                </u-form-item>
                <u-form-item ref="form_item7" layout="center">
                    <template #label ref="template20">
                        <u-text ref="text23" text="角色状态"></u-text>
                    </template>
                    <u-select ref="select3" clearable="" placeholder="请输入角色状态" :value.sync="input.roleStatus" key="select3">
                        <u-select-item ref="select_item5" :value="true" text="是">
                            <u-text ref="text24" text="是"></u-text>
                        </u-select-item>
                        <u-select-item ref="select_item6" :value="false" text="否">
                            <u-text ref="text25" text="否"></u-text>
                        </u-select-item>
                    </u-select>
                </u-form-item>
                <u-form-item ref="form_item8" layout="center">
                    <template #label ref="template21">
                        <u-text ref="text26" text="是否可编辑"></u-text>
                    </template>
                    <u-select ref="select4" clearable="" placeholder="请输入是否可编辑" :value.sync="input.editable" key="select4">
                        <u-select-item ref="select_item7" :value="true" text="是">
                            <u-text ref="text27" text="是"></u-text>
                        </u-select-item>
                        <u-select-item ref="select_item8" :value="false" text="否">
                            <u-text ref="text28" text="否"></u-text>
                        </u-select-item>
                    </u-select>
                </u-form-item>
            </u-form>
        </template>
        <template #title ref="template22">
            <div ref="div1" v-if="isUpdate">
                <u-text ref="text29" text="修改"></u-text>
            </div>
            <div ref="div2" v-if="!(isUpdate)">
                <u-text ref="text30" text="创建"></u-text>
            </div>
        </template>
    </u-modal>
    <lcap-gantt ref="lcap_gantt2"></lcap-gantt>
    <u-linear-layout ref="linear_layout1" direction="vertical">
        <u-linear-layout ref="linear_layout2" justify="space-between">
            <u-form ref="form1" layout="inline" key="form1">
                <u-form-item ref="form_item1" layout="center">
                    <template #label ref="template1">
                        <u-text ref="text2" text="角色名称"></u-text>
                    </template>
                    <u-input ref="input1" placeholder="请输入角色名称" :value.sync="filter.name"></u-input>
                </u-form-item>
                <u-form-item ref="form_item2" layout="center">
                    <template #label ref="template2">
                        <u-text ref="text3" text="角色状态"></u-text>
                    </template>
                    <u-select ref="select1" clearable="" placeholder="请输入角色状态" :value.sync="filter.roleStatus" key="select1">
                        <u-select-item ref="select_item1" :value="true" text="是">
                            <u-text ref="text4" text="是"></u-text>
                        </u-select-item>
                        <u-select-item ref="select_item2" :value="false" text="否">
                            <u-text ref="text5" text="否"></u-text>
                        </u-select-item>
                    </u-select>
                </u-form-item>
                <u-form-item ref="form_item3" layout="center">
                    <template #label ref="template3">
                        <u-text ref="text6" text="是否可编辑"></u-text>
                    </template>
                    <u-select ref="select2" clearable="" placeholder="请输入是否可编辑" :value.sync="filter.editable" key="select2">
                        <u-select-item ref="select_item3" :value="true" text="是">
                            <u-text ref="text7" text="是"></u-text>
                        </u-select-item>
                        <u-select-item ref="select_item4" :value="false" text="否">
                            <u-text ref="text8" text="否"></u-text>
                        </u-select-item>
                    </u-select>
                </u-form-item>
                <u-form-item ref="form_item4" layout="center" label-size="auto">
                    <u-button ref="button1" color="primary" text="查 询" @click="button1_click(\$event)"></u-button>
                </u-form-item>
            </u-form>
            <u-linear-layout ref="linear_layout16" direction="horizontal"></u-linear-layout>
            <u-linear-layout ref="linear_layout3">
                <u-button ref="button2" color="primary" text="创 建" @click="button2_click(\$event)" @contextmenu="button2_contextmenu(\$event)"></u-button>
            </u-linear-layout>
        </u-linear-layout>
        <u-table-view ref="tableView" :data-source="load" data-schema="LoadTestTableViewStructure" value-field="lCAPRole1.id" :pagination="true" :show-sizer="true"
            key="tableView">
            <u-table-view-column ref="table_view_column1" type="index" width="60">
                <template #cell="current" ref="template4"></template>
                <template #title ref="template5">
                    <u-text ref="text9" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column2" field="lCAPRole1.name">
                <template #cell="current" ref="template6">
                    <u-linear-layout ref="linear_layout4" gap="small">
                        <u-text ref="text10" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole1 || {}).name, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template7">
                    <u-text ref="text11" text="角色名称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column3" field="lCAPRole1.description">
                <template #cell="current" ref="template8">
                    <u-linear-layout ref="linear_layout5" gap="small">
                        <u-text ref="text12" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole1 || {}).description, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template9">
                    <u-text ref="text13" text="角色描述"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column4" field="lCAPRole1.roleStatus">
                <template #cell="current" ref="template10">
                    <u-linear-layout ref="linear_layout6" gap="small">
                        <u-text ref="text14" text="是" v-if="(((current || {}).item || {}).lCAPRole1 || {}).roleStatus"></u-text>
                        <u-text ref="text15" text="否" v-if="!((((current || {}).item || {}).lCAPRole1 || {}).roleStatus)"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template11">
                    <u-text ref="text16" text="角色状态"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column5" field="lCAPRole1.editable">
                <template #cell="current" ref="template12">
                    <u-linear-layout ref="linear_layout7" gap="small">
                        <u-text ref="text17" text="是" v-if="(((current || {}).item || {}).lCAPRole1 || {}).editable"></u-text>
                        <u-text ref="text18" text="否" v-if="!((((current || {}).item || {}).lCAPRole1 || {}).editable)"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template13">
                    <u-text ref="text19" text="是否可编辑"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column6" title="操作">
                <template #cell="current" ref="template14">
                    <u-linear-layout ref="linear_layout8" gap="small">
                        <u-link ref="link1" text="修改" @click="link1_click(\$event, current)"></u-link>
                        <u-link ref="link2" text="删除" @click="link2_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title ref="template15">
                    <u-text ref="text20" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <lcap-video ref="lcap_video1" poster="ss"
            src="http://ceph.lcap.hatest.163yun.com/lcap-test-static/user/defaulttenant/1690805238836_3f7636d198b77b69d56f69f3cc5ec150.mp4"></lcap-video>
    </u-linear-layout>
    <u-crumb ref="crumb1" :icon="false">
        <u-crumb-item ref="crumb_item1" icon="home">
            <u-text ref="text31" text="主页面"></u-text>
        </u-crumb-item>
        <u-crumb-item ref="crumb_item2" icon="user">
            <u-text ref="text32" text="一级子页面"></u-text>
        </u-crumb-item>
        <u-crumb-item ref="crumb_item3" icon="task">
            <u-text ref="text33" text="二级子页面"></u-text>
        </u-crumb-item>
    </u-crumb>
    <u-linear-layout ref="linear_layout11" direction="vertical" mode="flex" gap="normal">
        <u-linear-layout ref="linear_layout13"></u-linear-layout>
        <u-router-view ref="router_view1"></u-router-view>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/login',
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
                    template: `<u-linear-layout ref="uLinearLayout1" style="background: url('/assets/login-bg-1.jpg') no-repeat; background-size: cover; height: 100vh;" alignment="center"
    justify="center" type="flex">
    <u-linear-layout ref="uLinearLayout2" justify="center" direction="vertical">
        <h1 ref="h11">
            <u-text ref="uText1" text="登录"></u-text>
        </h1>
        <lcap-login ref="lcap_login2" src="http://nuims.vusion.top" :useRedirect="true"
            :mainLoginTypes="[{'name':'Normal','title':'普通登录','type':'boolean','default':true,'description':'是否开启普通登录，默认开启','hidden':false,'plugin':false,'extendProperties':{}},{'name':'QZ','title':'轻舟登录','type':'boolean','default':true,'description':'是否开启轻舟登录，默认关闭','hidden':false,'plugin':true,'extendProperties':{}}]"
            :subLoginTypes="[]"
            :redirectLoginTypes="[{'name':'Shufan','title':'数帆登录','type':'boolean','default':true,'description':'是否开启Shufan登录，默认关闭','hidden':false,'plugin':true,'extendProperties':{}},{'name':'Popo','title':'Popo登录','type':'boolean','default':true,'description':'是否开启Popo登录，默认关闭','hidden':false,'plugin':true,'extendProperties':{'userInfoUrl':null,'tokenUrl':null,'appKey':null,'appSecret':null,'aesKey':null,'token':null}}]"></lcap-login>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/index',
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
                    template: `<div ref="div1" style="min-width:1200px;height:100%;">
    <u-multi-layout ref="multi_layout1" direction="vertical">
        <u-multi-layout-item ref="multi_layout_item1" style="height:60px;">
            <u-navbar-multi ref="navbar_multi1">
                <template #right ref="template1"></template>
                <template #left ref="template2"></template>
                <u-multi-layout-item ref="multi_layout_item5" align-items="center">
                    <u-navbar-item-multi ref="navbar_item_multi1" href="/pc/">
                        <u-text ref="text1" text="轻舟低代码"></u-text>
                    </u-navbar-item-multi>
                    <u-navbar-item-multi ref="navbar_item_multi2" href="/pc/">
                        <u-text ref="text2" text="产品"></u-text>
                    </u-navbar-item-multi>
                    <u-navbar-item-multi ref="navbar_item_multi4" href="/pc/">
                        <u-text ref="text3" text="关于我们"></u-text>
                    </u-navbar-item-multi>
                </u-multi-layout-item>
                <u-navbar-item-multi ref="navbar_item_multi3" href="/pc/dashboard">
                    <u-text ref="text4" text="控制台"></u-text>
                </u-navbar-item-multi>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item ref="multi_layout_item2" style="height:420px;">
            <u-carousel ref="uCarousel1" style="width:100%;margin:0 auto;height:420px;text-align:center;">
                <u-carousel-item ref="uCarouselItem1">
                    <u-link ref="uLink1">
                        <u-image ref="uImage2" style="width:100%;height:100%" src="/assets/cloud-ui/1.jpg"></u-image>
                    </u-link>
                </u-carousel-item>
                <u-carousel-item ref="uCarouselItem2">
                    <u-link ref="uLink2">
                        <u-image ref="uImage3" style="width:100%;height:100%" src="/assets/cloud-ui/3.jpg"></u-image>
                    </u-link>
                </u-carousel-item>
            </u-carousel>
        </u-multi-layout-item>
        <u-multi-layout-item ref="multi_layout_item3" style="height:;">
            <u-linear-layout ref="uLinearLayout1" style="width: 1200px; margin: 0 auto;">
                <u-linear-layout ref="uLinearLayout2" style="position:relative;height:840px;margin:0 auto;">
                    <div ref="div4" style="position: absolute; top:80px;left:0;right:0; margin:0 auto;text-align:center;">
                        <div ref="div8" style="color:#333;font-size:32px;line-height:45px;margin-bottom:12px;font-weight:500">
                            <u-text ref="uText1" text="让软件驱动生产力"></u-text>
                        </div>
                        <div ref="div9" style="color:#687492;font-size:16px;line-height:22px;">
                            <u-text ref="uText2" text="
                    打造更敏捷、更高效的软件生产力平台
                "></u-text>
                        </div>
                    </div>
                    <div ref="div5" style="position: absolute;top:285px;left:75px;width:288px">
                        <div ref="div10" style="color:#333;font-size:24px;line-height:34px;margin-bottom:16px;font-weight:500">
                            <u-text ref="uText3" text="让软件驱动生产力"></u-text>
                        </div>
                        <div ref="div11" style="color:#687492;font-size:16px;line-height:32px;">
                            <span ref="span1" style="color:#333">
                                <u-text ref="uText10" text="服务化："></u-text>
                            </span>
                            <u-text ref="uText4" text="重塑企业面向数字化的服务能力
                    "></u-text>
                            <br ref="br1" />
                            <span ref="span2" style="color:#333">
                                <u-text ref="uText11" text="敏   捷："></u-text>
                            </span>
                            <u-text ref="uText5" text="敏捷迭代提升研发和运维效率
                    "></u-text>
                            <br ref="br2" />
                            <span ref="span3" style="color:#333">
                                <u-text ref="uText12" text="高   效："></u-text>
                            </span>
                            <u-text ref="uText6" text="软件生命周期自动化与协作水平
                    "></u-text>
                            <br ref="br3" />
                            <span ref="span4" style="color:#333">
                                <u-text ref="uText13" text="开   放："></u-text>
                            </span>
                            <u-text ref="uText7" text="打造开放的技术体系和软件架构
                "></u-text>
                        </div>
                        <u-link ref="uLink3" style="margin-top:16px;font-size:16px;line-height:32px;display: block;" text="查看详情 >"></u-link>
                        <u-button ref="uButton1" style="margin-top:40px;height:42px;line-height:42px" color="primary" href="/pc/" text="免费试用"></u-button>
                    </div>
                    <u-image ref="uImage1" style="position: absolute;top:240px;left:455px;width:672px;height: 400px" src="/assets/%E5%8F%B3%E5%9B%BE%402x.png"></u-image>
                </u-linear-layout>
            </u-linear-layout>
        </u-multi-layout-item>
        <u-multi-layout-item ref="multi_layout_item4">
            <div ref="div2" style="height:320px;background:#242A38;width:100%;">
                <div ref="div3" style="width: 1200px;margin: 0 auto;">
                    <div ref="div6" style="position: relative;height:174px;margin:0 auto ;left:30px;right:0">
                        <div ref="div12" style="position: absolute;top:30px;left:0">
                            <div ref="div20" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text ref="uText14" text="产品和服务"></u-text>
                            </div>
                            <a ref="a1" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText15" text="轻舟微服务"></u-text>
                            </a>
                            <a ref="a2" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText16" text="轻舟混合云"></u-text>
                            </a>
                            <a ref="a3" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText17" text="轻舟低代码"></u-text>
                            </a>
                            <a ref="a4" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText18" text="轻舟中间件"></u-text>
                            </a>
                        </div>
                        <div ref="div13" style="position: absolute;top:30px;left:217px;">
                            <div ref="div21" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text ref="uText19" text="关于我们"></u-text>
                            </div>
                            <a ref="a5" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText20" text="公司简介"></u-text>
                            </a>
                            <a ref="a6" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText21" text="媒体报道"></u-text>
                            </a>
                            <a ref="a7" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText22" text="荣誉与认证"></u-text>
                            </a>
                            <a ref="a8" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText23" text="友情链接"></u-text>
                            </a>
                        </div>
                        <div ref="div14" style="position: absolute;top:30px;left:424px;">
                            <div ref="div22" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text ref="uText24" text="资源与文档"></u-text>
                            </div>
                            <a ref="a9" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText25" text="新手帮助"></u-text>
                            </a>
                            <a ref="a10" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText26" text="产品文档"></u-text>
                            </a>
                            <a ref="a11" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText27" text="开发者资源"></u-text>
                            </a>
                            <a ref="a12" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText28" text="备案帮助"></u-text>
                            </a>
                        </div>
                        <div ref="div15" style="position: absolute;top:30px;left:641px;">
                            <div ref="div23" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text ref="uText29" text="诚邀合作"></u-text>
                            </div>
                            <a ref="a13" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText30" text="渠道合作"></u-text>
                            </a>
                            <a ref="a14" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText31" text="社区合作"></u-text>
                            </a>
                            <a ref="a15" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText32" text="教育合作"></u-text>
                            </a>
                        </div>
                        <div ref="div16" style="position: absolute;top:30px;left:842px;">
                            <div ref="div24" style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">
                                <u-text ref="uText33" text="管理与支持"></u-text>
                            </div>
                            <a ref="a16" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText34" text="控制台"></u-text>
                            </a>
                            <a ref="a17" style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">
                                <u-text ref="uText35" text="联系我们"></u-text>
                            </a>
                        </div>
                        <div ref="div17" style="position: absolute;left:1049px;top:30px">
                            <a ref="a18"
                                style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
background-size: 24px auto;
background-position: 0 -72px;
background-image: url(/assets/footer-icon-sns.png);"
                                :weixin="true">
                                <u-image ref="uImage4" style=" position: absolute;width: 120px;height: 120px;max-width: none;top: 30px;right: -30px;" fit="full" src="/assets/weixin%402x.png"></u-image>
                            </a>
                        </div>
                    </div>
                    <div ref="div7" style="margin-top: 70px;font-size: 14px;line-height: 20px;color:#999;text-align:center">
                        <div ref="div18">
                            <u-text ref="uText8" text="XX 公司版权所有 © 1997-2020 "></u-text>
                        </div>
                        <div ref="div19" style="margin-top:10px">
                            <u-text ref="uText9" text="备案号"></u-text>
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
            path: '/pc/dashboard',
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
                    template: `<l-root ref="lRoot1">
    <u-multi-layout ref="multi_layout1" direction="vertical">
        <u-multi-layout-item ref="multi_layout_item1" style="height: 60px;">
            <u-navbar-multi ref="navbar_multi1">
                <template #right ref="template1">
                    <u-multi-layout-item ref="multi_layout_item6" align-items="center" justify="end">
                        <u-dropdown ref="dropdown1" style="margin-right: 10px;">
                            <template #default ref="template3">
                                <u-dropdown-item ref="dropdown_item1" @click="dropdown_item1_click(\$event)">
                                    <u-text ref="text2" text="安全退出"></u-text>
                                </u-dropdown-item>
                            </template>
                            <template #title ref="template4">
                                <u-linear-layout ref="linear_layout1" gap="small" v-if="\$global.userInfo">
                                    <u-image ref="image2" style="width: 36px; height: 36px; vertical-align: middle;" src="/assets/avatar-default.svg" fit="cover"></u-image>
                                    <span ref="span1" style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                                        <u-text ref="text3" :text="\$utils['ToString']((\$global.userInfo || {}).UserName, 'undefined')"></u-text>
                                    </span>
                                </u-linear-layout>
                            </template>
                        </u-dropdown>
                    </u-multi-layout-item>
                </template>
                <template #left ref="template2">
                    <u-multi-layout-item ref="multi_layout_item7" style="width:200px;" align-items="center">
                        <u-image ref="image1" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;" fit="cover"
                            src="/assets/lcap-logo-light.svg"></u-image>
                        <u-text ref="text1" style="color: white; --custom-start: auto; vertical-align: middle;" size="large" text="应用名称"></u-text>
                    </u-multi-layout-item>
                </template>
                <u-multi-layout-item ref="multi_layout_item5" align-items="center">
                    <u-navbar-item-multi ref="navbar_item_multi1" target="_blank">
                        <u-text ref="text6" text="Item 1"></u-text>
                    </u-navbar-item-multi>
                    <u-navbar-item-multi ref="navbar_item_multi2" target="_blank">
                        <u-text ref="text7" text="Item 2"></u-text>
                    </u-navbar-item-multi>
                </u-multi-layout-item>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item ref="multi_layout_item2">
            <u-multi-layout ref="multi_layout2">
                <u-multi-layout-item ref="multi_layout_item3" style="width: 200px;left:0;" :fixed="true">
                    <u-sidebar ref="sidebar1" :router="true">
                        <u-sidebar-item ref="sidebar_item1" destination="/pc/overview" :value="null">
                            <u-text ref="text5" text="总览"></u-text>
                        </u-sidebar-item>
                        <u-sidebar-item ref="sidebar_item2" :value="null">
                            <u-text ref="text4" text="item2"></u-text>
                        </u-sidebar-item>
                    </u-sidebar>
                </u-multi-layout-item>
                <u-multi-layout-item ref="multi_layout_item4" style="margin-left:200px;padding:40px 40px 40px 40px;">
                    <u-crumb ref="crumb1" :auto="true"></u-crumb>
                    <u-router-view ref="router_view1"></u-router-view>
                    <u-button ref="button1" style="background-position:left top;background-color:#2b1760;" color="primary" text="确 定"></u-button>
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
            path: '/pc',
redirect: '/pc/dashboard',
},
{
            path: '/pc/permission_center',
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
                    template: `<l-root ref="lRoot1">
    <u-multi-layout ref="multi_layout1" direction="vertical">
        <u-multi-layout-item ref="multi_layout_item1" style="height: 60px;">
            <u-navbar-multi ref="navbar_multi1">
                <template #right ref="template1">
                    <u-multi-layout-item ref="multi_layout_item6" align-items="center" justify="end">
                        <u-dropdown ref="dropdown1" style="margin-right: 10px;">
                            <template #default ref="template3">
                                <u-dropdown-item ref="dropdown_item1" @click="dropdown_item1_click(\$event)">
                                    <u-text ref="text2" text="安全退出"></u-text>
                                </u-dropdown-item>
                            </template>
                            <template #title ref="template4">
                                <u-linear-layout ref="linear_layout1" gap="small" v-if="\$global.userInfo">
                                    <u-image ref="image2" style="width: 36px; height: 36px; vertical-align: middle;" src="/assets/avatar-default.svg" fit="cover"></u-image>
                                    <span ref="span1" style="display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px; color: white;">
                                        <u-text ref="text3" :text="\$utils['ToString']((\$global.userInfo || {}).UserName, 'undefined')"></u-text>
                                    </span>
                                </u-linear-layout>
                            </template>
                        </u-dropdown>
                    </u-multi-layout-item>
                </template>
                <template #left ref="template2">
                    <u-multi-layout-item ref="multi_layout_item7" style="width:200px;" align-items="center">
                        <u-image ref="image1" style="width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle;" fit="cover"
                            src="/assets/lcap-logo-light.svg"></u-image>
                        <u-text ref="text1" style="color: white; --custom-start: auto; vertical-align: middle;" text="权限中心" size="large"></u-text>
                    </u-multi-layout-item>
                </template>
            </u-navbar-multi>
        </u-multi-layout-item>
        <u-multi-layout-item ref="multi_layout_item2">
            <u-multi-layout ref="multi_layout2">
                <u-multi-layout-item ref="multi_layout_item3" style="width: 200px;left:0;" :fixed="true">
                    <u-sidebar ref="sidebar1" value="3" :router="true">
                        <u-sidebar-item ref="sidebar_item1" :destination="\`/pc/permission_center/userManagement\`" value="1">
                            <u-text ref="text4" text="用户管理"></u-text>
                        </u-sidebar-item>
                        <u-sidebar-item ref="sidebar_item2" :destination="\`/pc/permission_center/roleManagement\`" value="1">
                            <u-text ref="text5" text="角色管理"></u-text>
                        </u-sidebar-item>
                    </u-sidebar>
                </u-multi-layout-item>
                <u-multi-layout-item ref="multi_layout_item4" style="margin-left:200px;padding:40px 40px 40px 40px;">
                    <u-crumb ref="crumb1" :auto="true"></u-crumb>
                    <u-router-view ref="router_view1"></u-router-view>
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
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping1', undefined),
['alreadyBindRoleUserList']:this.$genInitFromSchema('nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}>', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping1', undefined),
['lCAPUserRoleMapping']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping1', undefined),
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

await (this.$toast.show(this.$utils['ToString'](this.roleid)))
return;
    }
,

async create () {

this.input = this.$utils['Clone'](this.lCAPUserRoleMapping)
return;
    }
,

async roleAddUserReduplicate (inputUserId, inputRoleId) {
        inputUserId = inputUserId !== undefined ? inputUserId : (this.$route.query.hasOwnProperty('inputUserId') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.inputUserId) : "");
        inputRoleId = inputRoleId !== undefined ? inputRoleId : (this.$route.query.hasOwnProperty('inputRoleId') ? this.$genInitFromSchema('nasl.core.Long', this.$route.query.inputRoleId) : "");
        let userIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.String>',undefined);
        let result =undefined;

this.alreadyBindRoleUserList = await (this.$logics['app.logics.LCAPGetRoleBindUserList']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
inputRoleId: inputRoleId
}
}))
if(Array.isArray(this.alreadyBindRoleUserList)) {
for (let i = 0; i < ((this.alreadyBindRoleUserList || {}).length); i++) {
const item = (this.alreadyBindRoleUserList)[i];
this.$utils['Add'](userIdList, ((item || {}).lCAPUserRoleMapping || {}).userId)
}
}

result = this.$utils['Contains'](userIdList, inputUserId)
return result;
    }
,

async submit () {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

validateResult = await (this.$refs && this.$refs.form1 && this.$refs.form1.validate && this.$refs.form1.validate())
if ((validateResult || {}).valid) {
if (this.$utils['Convert']((this.input || {}).id, {"concept":"TypeAnnotation","name":"","typeKind":"primitive","typeNamespace":"nasl.core","typeName":"Boolean","typeArguments":null,"returnType":null,"properties":null})) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: this.input},

}))
}             else {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.input
}))
}

await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    }
,

async modify (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}>',current !== undefined ? current : (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping1}>', this.$route.query.current) : ""));

this.input = this.$utils['Clone'](((current || {}).item || {}).lCAPUserRoleMapping)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    }
,

async getUsersListFromNumis () {
        let returnBody =undefined;
        let result =this.$genInitFromSchema('nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser1}>',undefined);

returnBody = await (this.$logics['app.logics.LCAPGetAllUsers']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
}
}))
result = (returnBody || {}).list
await (console.log(this.$utils['ToString'](result)))
this.$utils['ListDistinct'](this.userIdListBySelect)
return result;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

this.filter.roleId = this.roleid
result = await (this.$logics['app.logics.LCAPLoadUserRoleMappingTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
}))
return result;
    }
,

async addRoleUser_created (event) { 
await (async () => {

this.$utils['Clear'](this.filter)
return;
    })();
}
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let createUserAndRole =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUserRoleMapping1',undefined);
        let isDuplicateUserId =undefined;
        let UserName ="";
        let returnOfGetUser =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser1',undefined);

if(Array.isArray(this.userIdListBySelect)) {
for (let i = 0; i < ((this.userIdListBySelect || {}).length); i++) {
const item = (this.userIdListBySelect)[i];
isDuplicateUserId = await (this.roleAddUserReduplicate(item, this.roleid))
returnOfGetUser = await (this.$logics['app.logics.LCAPGetUserByUserId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
userId: item
}
}))
UserName = (returnOfGetUser || {}).userName
if ((isDuplicateUserId) == (true)) {
} else {
createUserAndRole.roleId = this.roleid
createUserAndRole.userName = UserName
createUserAndRole.userId = item
await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: createUserAndRole
}))
}

}
}

await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
this.userIdListBySelect = undefined
await (this.$toast.show(this.$utils['ToString'](`添加成功！`)))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
return;
    })();
}
,

async uLink1_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPUserRoleMapping1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPUserRoleMapping || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`移除成功！`)))
return;
    })();
}

},
        async created () {
        await this.addRoleUser_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root ref="lRoot1">
    <u-router-view ref="uRouterView1"></u-router-view>
    <u-form-item ref="uFormItem1" style="margin:0 0 0 0;" placement="right">
        <u-input ref="uInput1" style="border-color:#FEFEFE;" :readonly="true" placeholder="请输入用户名" :value="roleName"></u-input>
        <template #label ref="template10">
            <u-text ref="text5" text="角色名"></u-text>
        </template>
    </u-form-item>
    <u-linear-layout ref="uLinearLayout1" direction="vertical">
        <u-button ref="uButton1" style="text-align:left;margin:0 0 0 0;" text="添加成员" color="primary" @click="uButton1_click(\$event)"></u-button>
        <u-linear-layout ref="uLinearLayout2" style="margin:10px 0px 0px 0px;text-align:left;" justify="space-between"></u-linear-layout>
        <u-table-view ref="tableView" :data-source="load" value-field="lCAPUserRoleMapping.id" :show-total="true" pageable="" :remote-paging="true"
            key="tableView">
            <u-table-view-column ref="uTableViewColumn1" type="index" width="60">
                <template #title ref="template6">
                    <u-text ref="text1" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="uTableViewColumn2">
                <template #cell="current" ref="template4">
                    <u-linear-layout ref="uLinearLayout4" gap="small">
                        <u-text ref="uText2"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template7">
                    <u-text ref="text2" text="用户名"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="uTableViewColumn3">
                <template #cell="current" ref="template5">
                    <u-linear-layout ref="uLinearLayout5" gap="small">
                        <u-link ref="uLink1" text="移除 " @click="uLink1_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title ref="template8">
                    <u-text ref="text3" text="操作"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column1">
                <template #title ref="template11">
                    <u-text ref="text6" text="表格列"></u-text>
                </template>
                <template #cell="current" ref="template12">
                    <u-text ref="text7"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal ref="saveModal">
            <template #foot ref="template1">
                <u-linear-layout ref="uLinearLayout3">
                    <u-button ref="uButton2" text="添加" color="primary" @click="uButton2_click(\$event)" v-if="((input || {}).id) == (undefined)"></u-button>
                    <u-button ref="uButton3" style="border-color:#327EF8;color:#8D8787;background-color:#F8F8F8;" text="取消" color="primary" @click="uButton3_click(\$event)"
                        v-if="((input || {}).id) == (undefined)"></u-button>
                </u-linear-layout>
            </template>
            <template #body ref="template2">
                <u-form ref="form1" key="form1">
                    <u-form-item ref="uFormItem2">
                        <u-select ref="uSelect1" placeholder="请选择用户名，支持搜索" :data-source="getUsersListFromNumis" :filterable="true" :value.sync="userIdListBySelect"
                            :multiple="true" :remote-filtering="true" value-field="lCAPUser.userId" :pageable="true" text-field="lCAPUser.userName" :remote-paging="false"
                            :clearable="true" key="uSelect1"></u-select>
                        <template #label ref="template9">
                            <u-text ref="text4" text="用户名"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title ref="template3">
                <div ref="div1" v-if="(input || {}).id"></div>
                <div ref="div2" v-if="((input || {}).id) == (undefined)">
                    <u-text ref="uText1" text="请添加用户 "></u-text>
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
['variable']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource1', undefined),
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
await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.variable
}))
return;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.LCAPLoadResourceTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order
}
}))
return result;
    }
,

async loadResourceByRoleId () {
        let variable2 =undefined;
        let variable4 =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPResource1',undefined);
        let variable5 =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource1>',undefined);
        let result =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource1>',undefined);

variable2 = await (this.$logics['app.logics.LCAPGetScopeResourceByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
roleId: this.roleId
}
}))
if(Array.isArray((variable2 || {}).list)) {
for (let i = 0; i < (((variable2 || {}).list || {}).length); i++) {
const item = ((variable2 || {}).list)[i];
variable4 = (item || {}).lCAPResource
this.$utils['Add'](variable5, variable4)
}
}

result = variable5
return result;
    }
,

async remove (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource1}>',current !== undefined ? current : (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource1}>', this.$route.query.current) : ""));

await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPResource || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView1 && this.$refs.tableView1.reload && this.$refs.tableView1.reload())
return;
    }
,

async loadListView (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.LCAPLoadPermissionResourceListView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size
}
}))
return result;
    }
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs.selectResourcePopup && this.$refs.selectResourcePopup.open && this.$refs.selectResourcePopup.open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let permissionList =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission1>',undefined);
        let mappingIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>',undefined);

permissionList = await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
roleId: this.roleId
}
}))
if(Array.isArray(permissionList)) {
for (let i = 0; i < ((permissionList || {}).length); i++) {
const item = (permissionList)[i];
mappingIdList = await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
permissionId: (item || {}).id, 
resourceId: this.removeResourceId
}
}))
if(Array.isArray(mappingIdList)) {
for (let j = 0; j < ((mappingIdList || {}).length); j++) {
const item1 = (mappingIdList)[j];
await (this.$logics['app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: item1},
body: {}
}))
}
}

}
}

await (this.$refs && this.$refs.removeResourcePopup && this.$refs.removeResourcePopup.close && this.$refs.removeResourcePopup.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`移除成功！`)))
return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs.removeResourcePopup && this.$refs.removeResourcePopup.close && this.$refs.removeResourcePopup.close())
return;
    })();
}
,

async uButton4_click (event) { 
await (async () => {
        let permissionList =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission1>',undefined);
        let mapping =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPerResMapping1',undefined);
        let mappingIdList =this.$genInitFromSchema('nasl.collection.List<nasl.core.Long>',undefined);

permissionList = await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
roleId: this.roleId
}
}))
if(Array.isArray(permissionList)) {
for (let i = 0; i < ((permissionList || {}).length); i++) {
const item = (permissionList)[i];
if(Array.isArray(this.alreadySelectedResourceIdList)) {
for (let j = 0; j < ((this.alreadySelectedResourceIdList || {}).length); j++) {
const item1 = (this.alreadySelectedResourceIdList)[j];
mapping.permissionId = (item || {}).id
mapping.resourceId = item1
mappingIdList = await (this.$logics['app.logics.LCAPGetMappingByPermissionIdAndResourceId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
permissionId: (mapping || {}).permissionId, 
resourceId: (mapping || {}).resourceId
}
}))
if (((mappingIdList || {}).length) > (0)) {
} else {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPPerResMapping1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: mapping
}))
}

}
}

}
}

await (this.$refs && this.$refs.selectResourcePopup && this.$refs.selectResourcePopup.close && this.$refs.selectResourcePopup.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`资源添加成功！`)))
return;
    })();
}
,

async uButton5_click (event) { 
await (async () => {

await (this.$refs && this.$refs.selectResourcePopup && this.$refs.selectResourcePopup.close && this.$refs.selectResourcePopup.close())
return;
    })();
}
,

async uLink1_click (event,current) { 
await (async () => {

this.removeResourceName = ((current || {}).item || {}).name
this.removeResourceId = ((current || {}).item || {}).id
await (this.$refs && this.$refs.removeResourcePopup && this.$refs.removeResourcePopup.open && this.$refs.removeResourcePopup.open())
return;
    })();
}

},
        
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root ref="lRoot1">
    <u-router-view ref="uRouterView1"></u-router-view>
    <u-button ref="uButton1" style="margin:0 0 15px 0;" text="新增关联资源 " :disabled="(editable) == (false)" color="primary" @click="uButton1_click(\$event)"></u-button>
    <u-form ref="uForm1" gap="large" key="uForm1">
        <u-form-item ref="uFormItem1" style="margin:0 0 0 0;text-align:left;" :required="false">
            <u-input ref="uInput1" style="border-color:#fcfcfc;" :placeholder="roleId" :disabled="false" :value.sync="roleName" :readonly="true"></u-input>
            <template #label ref="template12">
                <u-text ref="text1" text="角色名"></u-text>
            </template>
        </u-form-item>
    </u-form>
    <u-table-view ref="tableView" :data-source="loadResourceByRoleId" :show-sizer="true" values="" value-field="lCAPResource.id" :remote-paging="false"
        :show-total="true" :pageable="true" key="tableView">
        <u-table-view-column ref="uTableViewColumn1" style="height:auto;width:40px;" :width="50" type="index">
            <template #title ref="template13">
                <u-text ref="text2" text="序号"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="uTableViewColumn2" type="normal">
            <template #cell="current" ref="template7">
                <u-linear-layout ref="uLinearLayout5" gap="small">
                    <u-text ref="uText4" :text="\$utils['ToString'](((current || {}).item || {}).name, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template14">
                <u-text ref="text3" text="资源路径"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="uTableViewColumn3">
            <template #cell="current" ref="template8">
                <u-linear-layout ref="uLinearLayout6" gap="small">
                    <u-text ref="uText5" :text="\$utils['ToString'](((current || {}).item || {}).description, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template15">
                <u-text ref="text4" text="资源描述"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="uTableViewColumn4">
            <template #cell="current" ref="template9">
                <u-linear-layout ref="uLinearLayout7" gap="small">
                    <u-link ref="uLink1" text="移除该资源 " :disabled="(editable) == (false)" @click="uLink1_click(\$event, current)"></u-link>
                </u-linear-layout>
            </template>
            <template #title ref="template16">
                <u-text ref="text5" text="操作"></u-text>
            </template>
        </u-table-view-column>
    </u-table-view>
    <u-modal ref="removeResourcePopup">
        <template #foot ref="template1">
            <u-linear-layout ref="uLinearLayout1">
                <u-button ref="uButton2" text="确定" color="primary" @click="uButton2_click(\$event)"></u-button>
                <u-button ref="uButton3" text="取消" @click="uButton3_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template2">
            <u-linear-layout ref="uLinearLayout2" direction="vertical">
                <u-text ref="uText3" :text="\$utils['ToString'](removeResourceName, 'undefined')"></u-text>
            </u-linear-layout>
        </template>
        <template #title ref="template3">
            <u-text ref="uText1" text="确定移除下面资源？"></u-text>
        </template>
    </u-modal>
    <u-modal ref="selectResourcePopup" size="huge">
        <template #foot ref="template4">
            <u-linear-layout ref="uLinearLayout3">
                <u-button ref="uButton4" color="primary" text="确定" @click="uButton4_click(\$event)"></u-button>
                <u-button ref="uButton5" text="取消" @click="uButton5_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template5">
            <u-linear-layout ref="uLinearLayout4" direction="vertical">
                <u-table-view ref="tableView1" :values="alreadySelectedResourceIdList" value-field="lCAPResource.id" :pageable="true" :show-sizer="true" :data-source="load"
                    :remote-paging="true" key="tableView1">
                    <u-table-view-column ref="uTableViewColumn5" type="checkbox" :width="100">
                        <template #title ref="template17">
                            <u-text ref="text6" text="序号"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column ref="uTableViewColumn6">
                        <template #cell="current" ref="template10">
                            <u-linear-layout ref="uLinearLayout8" gap="small">
                                <u-text ref="uText6" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource || {}).name, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title ref="template18">
                            <u-text ref="text7" text="资源路径"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column ref="uTableViewColumn7">
                        <template #cell="current" ref="template11">
                            <u-linear-layout ref="uLinearLayout9" gap="small">
                                <u-text ref="uText7" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource || {}).description, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title ref="template19">
                            <u-text ref="text8" text="资源描述"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </template>
        <template #title ref="template6">
            <u-text ref="uText2" text="请勾选需要控制的资源 "></u-text>
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
                ['rolePermissionBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPPermission1', undefined),
['updateRoleDes']:"",
['rolePermissionMappingBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRolePerMapping1', undefined),
['deleteRoleBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['rolePermissionList']:this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission1>', undefined),
['updateRoleName']:"",
['lCAPRole']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
['permissionDescription']:"",
['updateRoleId']:undefined,
['inputRoleBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1', undefined),
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
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: this.inputRoleBody},

}))
}             else {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.inputRoleBody
}))
}

await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
}         else {
}

return;
    }
,

async getRolePermission () {
        let result =this.$genInitFromSchema('nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission1>',undefined);

result = await (this.$logics['app.logics.LCAPGetPermissionByRoleId']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
roleId: (this.inputRoleBody || {}).id
}
}))
return result;
    }
,

async modify (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}>',current !== undefined ? current : (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}>', this.$route.query.current) : ""));
        let resultRoleId =undefined;

this.inputRoleBody = this.$utils['Clone'](((current || {}).item || {}).lCAPRole)
resultRoleId = (((current || {}).item || {}).lCAPRole || {}).id
return resultRoleId;
    }
,

async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.LCAPLoadRoleManagementTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
}))
return result;
    }
,

async isRoleNameRepeated (roleName) {
        roleName = roleName !== undefined ? roleName : (this.$route.query.hasOwnProperty('roleName') ? this.$genInitFromSchema('nasl.core.String', this.$route.query.roleName) : "");
        let result =undefined;

result = await (this.$logics['app.logics.LCAPIsRoleNameRepeated']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
roleName: roleName
}
}))
return result;
    }
,

async create () {

this.inputRoleBody = this.$utils['Clone'](this.lCAPRole)
return;
    }
,

async remove (current) {
        current = this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}>',current !== undefined ? current : (this.$route.query.hasOwnProperty('current') ? this.$genInitFromSchema('nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole1}>', this.$route.query.current) : ""));

await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPRole || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    }
,

async roleManagement_created (event) { 
await (async () => {

this.$utils['Clear'](this.filter)
return;
    })();
}
,

async uButton1_click (event) { 
await (async () => {

await (this.$refs && this.$refs.createRolePopup && this.$refs.createRolePopup.open && this.$refs.createRolePopup.open())
return;
    })();
}
,

async uButton2_click (event) { 
await (async () => {
        let updateRoleBody =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1',undefined);
        let variable1 =this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPRole1',undefined);

this.isNameRepeated = await (this.isRoleNameRepeated(this.updateRoleName))
variable1 = await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.get']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: this.updateRoleId},
body: {}
}))
if (((this.isNameRepeated) == (true)) && ((this.updateRoleName) != ((variable1 || {}).name))) {
await (this.$toast.show(this.$utils['ToString'](`重复的角色名！`)))
}         else {
updateRoleBody = variable1
updateRoleBody.id = this.updateRoleId
updateRoleBody.name = this.updateRoleName
updateRoleBody.description = this.updateRoleDes
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: updateRoleBody},

}))
await (this.$refs && this.$refs.updateRolePopup && this.$refs.updateRolePopup.close && this.$refs.updateRolePopup.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`修改成功！`)))
}

return;
    })();
}
,

async uButton3_click (event) { 
await (async () => {

await (this.$refs && this.$refs.updateRolePopup && this.$refs.updateRolePopup.close && this.$refs.updateRolePopup.close())
return;
    })();
}
,

async uButton4_click (event) { 
await (async () => {

await (this.$refs && this.$refs.rolePermissionPopup && this.$refs.rolePermissionPopup.close && this.$refs.rolePermissionPopup.close())
return;
    })();
}
,

async uButton5_click (event) { 
await (async () => {

await (this.$refs && this.$refs.rolePermissionPopup && this.$refs.rolePermissionPopup.close && this.$refs.rolePermissionPopup.close())
return;
    })();
}
,

async uButton6_click (event) { 
await (async () => {

this.isNameRepeated = await (this.isRoleNameRepeated((this.inputRoleBody || {}).name))
if ((this.isNameRepeated) == (true)) {
await (this.$toast.show(this.$utils['ToString'](`重复的角色名！`)))
}         else {
this.inputRoleBody = await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.inputRoleBody
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
this.rolePermissionBody.name = (this.inputRoleBody || {}).name
this.permissionDescription = this.$utils['Concat'](this.$utils['ToString'](`角色`, 'undefined'), this.$utils['ToString']((this.inputRoleBody || {}).name, 'undefined'))
this.permissionDescription = this.$utils['Concat'](this.$utils['ToString'](this.permissionDescription, 'undefined'), this.$utils['ToString'](`对应的权限`, 'undefined'))
this.rolePermissionBody.description = this.permissionDescription
this.rolePermissionBody = await (this.$logics['app.dataSources.defaultDS.entities.LCAPPermission1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.rolePermissionBody
}))
this.rolePermissionMappingBody.permissionId = (this.rolePermissionBody || {}).id
this.rolePermissionMappingBody.roleId = (this.inputRoleBody || {}).id
await (this.$logics['app.dataSources.defaultDS.entities.LCAPRolePerMapping1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.rolePermissionMappingBody
}))
this.$utils['Clear'](this.inputRoleBody)
this.$utils['Clear'](this.rolePermissionBody)
this.$utils['Clear'](this.rolePermissionMappingBody)
await (this.$refs && this.$refs.createRolePopup && this.$refs.createRolePopup.close && this.$refs.createRolePopup.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`创建成功！`)))
}

return;
    })();
}
,

async uButton7_click (event) { 
await (async () => {

await (this.$refs && this.$refs.createRolePopup && this.$refs.createRolePopup.close && this.$refs.createRolePopup.close())
return;
    })();
}
,

async uButton8_click (event) { 
await (async () => {

await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}
,

async uButton9_click (event) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPRole1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (this.deleteRoleBody || {}).id},
body: {}
}))
await (this.$refs && this.$refs.deleteRolePopup && this.$refs.deleteRolePopup.close && this.$refs.deleteRolePopup.close())
await (this.$toast.show(this.$utils['ToString'](`删除成功！`)))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}
,

async uButton10_click (event) { 
await (async () => {

await (this.$refs && this.$refs.deleteRolePopup && this.$refs.deleteRolePopup.close && this.$refs.deleteRolePopup.close())
return;
    })();
}
,

async uLink2_click (event,current) { 
await (async () => {
        let variable1 =undefined;
        let variable2 =this.$genInitFromSchema('nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission1, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping1}>',undefined);

this.inputRoleBody = this.$utils['Clone'](((current || {}).item || {}).lCAPRole)
variable1 = await (this.$logics['app.logics.LCAPGetRolePermissionList']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
inputRoleId: (((current || {}).item || {}).lCAPRole || {}).id
}
}))
variable2 = (variable1 || {}).list
this.$utils['Clear'](this.rolePermissionList)
if(Array.isArray(variable2)) {
for (let i = 0; i < ((variable2 || {}).length); i++) {
const item = (variable2)[i];
this.$utils['Add'](this.rolePermissionList, (item || {}).lCAPPermission)
}
}

await (this.$refs && this.$refs.rolePermissionPopup && this.$refs.rolePermissionPopup.open && this.$refs.rolePermissionPopup.open())
this.$utils['Clear'](this.inputRoleBody)
return;
    })();
}
,

async uLink4_click (event,current) { 
await (async () => {

this.updateRoleName = (((current || {}).item || {}).lCAPRole || {}).name
this.updateRoleId = (((current || {}).item || {}).lCAPRole || {}).id
this.updateRoleDes = (((current || {}).item || {}).lCAPRole || {}).description
await (this.$refs && this.$refs.updateRolePopup && this.$refs.updateRolePopup.open && this.$refs.updateRolePopup.open())
return;
    })();
}
,

async uLink5_click (event,current) { 
await (async () => {

this.deleteRoleBody = ((current || {}).item || {}).lCAPRole
await (this.$refs && this.$refs.deleteRolePopup && this.$refs.deleteRolePopup.open && this.$refs.deleteRolePopup.open())
return;
    })();
}

},
        async created () {
        await this.roleManagement_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root ref="lRoot1">
    <u-router-view ref="uRouterView1"></u-router-view>
    <u-linear-layout ref="uLinearLayout1" direction="vertical">
        <u-form ref="uForm1" layout="inline" label-size="auto" key="uForm1">
            <u-form-item ref="uFormItem1">
                <u-button ref="uButton1" style="margin:0 0 0 0;text-align:left;" color="primary" text="新建角色" :disabled="false" @click="uButton1_click(\$event)"></u-button>
                <u-form-item ref="uFormItem2" style="margin:0 0 0 700px;text-align:left;">
                    <u-input ref="uInput1" style="margin:0 00px 0 0;" placeholder="请输入角色名称" :value.sync="filter.name"></u-input>
                    <u-button ref="uButton8" style="margin:0 00px 0 0;" text="查询" color="primary" @click="uButton8_click(\$event)"></u-button>
                    <template #label ref="template21">
                        <u-text ref="text5" text="角色名称"></u-text>
                    </template>
                </u-form-item>
            </u-form-item>
        </u-form>
        <u-table-view ref="tableView" value-field="lCAPRole.id" :data-source="load" :show-total="true" :sorting="{ field: undefined, order: 'desc' }"
            pageable="" :remote-paging="true" key="tableView">
            <u-table-view-column ref="uTableViewColumn1" type="index" width="60">
                <template #title ref="template17">
                    <u-text ref="text1" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="uTableViewColumn2" :width="300">
                <template #cell="current" ref="template13">
                    <u-linear-layout ref="uLinearLayout12" gap="small">
                        <u-text ref="uText8" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole || {}).name, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template18">
                    <u-text ref="text2" text="角色名称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="uTableViewColumn3" :width="300">
                <template #cell="current" ref="template14">
                    <u-linear-layout ref="uLinearLayout13" gap="small" v-if="((((current || {}).item || {}).lCAPRole || {}).editable) == (true)">
                        <u-text ref="uText9" :text="\$utils['ToString']((((current || {}).item || {}).lCAPRole || {}).description, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template19">
                    <u-text ref="text3" text="角色描述"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="uTableViewColumn4">
                <template #cell="current" ref="template15">
                    <u-linear-layout ref="uLinearLayout14" gap="small">
                        <u-link ref="uLink1"
                            :destination="\`/pc/permission_center/addRoleUser?roleid=\${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=\${(((current || {}).item || {}).lCAPRole || {}).name}\`"
                            text="添加成员"></u-link>
                        <u-link ref="uLink2" linkType="href" text="关联权限" @click="uLink2_click(\$event, current)"></u-link>
                        <u-link ref="uLink3"
                            :destination="\`/pc/permission_center/resourceManagement?roleId=\${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=\${(((current || {}).item || {}).lCAPRole || {}).name}&editable=\${(((current || {}).item || {}).lCAPRole || {}).editable}\`"
                            text="关联资源" :disabled="false" linkType="href"></u-link>
                        <u-link ref="uLink4" :disabled="((((current || {}).item || {}).lCAPRole || {}).editable) != (true)" href="" text="编辑角色" linkType="href"
                            @click="uLink4_click(\$event, current)"></u-link>
                        <u-link ref="uLink5" text="删除角色" :disabled="((((current || {}).item || {}).lCAPRole || {}).editable) != (true)" linkType="href" href=""
                            @click="uLink5_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title ref="template20">
                    <u-text ref="text4" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal ref="deleteRolePopup" size="normal" :is-title-slot-empty=true>
            <template #foot ref="template10">
                <u-linear-layout ref="uLinearLayout8">
                    <u-button ref="uButton9" color="primary" text="确定" @click="uButton9_click(\$event)"></u-button>
                    <u-button ref="uButton10" text="取消" @click="uButton10_click(\$event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body ref="template11">
                <u-linear-layout ref="uLinearLayout9" direction="vertical">
                    <u-text ref="uText4" text="删除后，该角色对应的成员、权限、资源关联关系都会被删除！"></u-text>
                </u-linear-layout>
                <u-linear-layout ref="uLinearLayout10" direction="vertical">
                    <u-text ref="uText5" text="确定删除角色： "></u-text>
                    <u-text ref="uText6" :text="\$utils['ToString']((deleteRoleBody || {}).name, 'undefined')"></u-text>
                    <u-text ref="uText7" text="？"></u-text>
                </u-linear-layout>
                <u-linear-layout ref="uLinearLayout11" direction="vertical"></u-linear-layout>
            </template>
            <template #title ref="template12"></template>
        </u-modal>
    </u-linear-layout>
    <u-modal ref="updateRolePopup">
        <template #foot ref="template1">
            <u-linear-layout ref="uLinearLayout2">
                <u-button ref="uButton2" color="primary" text="提交修改 " @click="uButton2_click(\$event)"></u-button>
                <u-button ref="uButton3" text="取消" @click="uButton3_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template2">
            <u-linear-layout ref="uLinearLayout3" direction="vertical">
                <u-form ref="form2" key="form2">
                    <u-form-item ref="uFormItem3" :required="true" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]">
                        <u-input ref="uInput2" placeholder="请输入角色名称" :value.sync="updateRoleName"></u-input>
                        <template #label ref="template22">
                            <u-text ref="text6" text="角色名称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="uFormItem4">
                        <u-input ref="uInput3" :value.sync="updateRoleDes" placeholder="请输入角色描述"></u-input>
                        <template #label ref="template23">
                            <u-text ref="text7" text="角色描述"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </u-linear-layout>
        </template>
        <template #title ref="template3">
            <u-text ref="uText1" text="编辑角色"></u-text>
        </template>
    </u-modal>
    <u-modal ref="rolePermissionPopup">
        <template #foot ref="template4">
            <u-linear-layout ref="uLinearLayout4">
                <u-button ref="uButton4" color="primary" text="确定" @click="uButton4_click(\$event)"></u-button>
                <u-button ref="uButton5" text="取消" @click="uButton5_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template5">
            <u-linear-layout ref="uLinearLayout5" direction="vertical">
                <u-table-view ref="tableView1" value-field="lCAPPermission.id" :pageable="false" :data-source="rolePermissionList" :remote-paging="true" key="tableView1">
                    <u-table-view-column ref="uTableViewColumn5" width="60" type="index">
                        <template #title ref="template24">
                            <u-text ref="text8" text="序号"></u-text>
                        </template>
                    </u-table-view-column>
                    <u-table-view-column ref="uTableViewColumn6">
                        <template #cell="current" ref="template16">
                            <u-linear-layout ref="uLinearLayout15" gap="small">
                                <u-text ref="uText10" :text="\$utils['ToString'](((current || {}).item || {}).name, 'undefined')"></u-text>
                            </u-linear-layout>
                        </template>
                        <template #title ref="template25">
                            <u-text ref="text9" text="权限名称"></u-text>
                        </template>
                    </u-table-view-column>
                </u-table-view>
            </u-linear-layout>
        </template>
        <template #title ref="template6">
            <u-text ref="uText2" text="关联权限"></u-text>
        </template>
    </u-modal>
    <u-modal ref="createRolePopup">
        <template #foot ref="template7">
            <u-linear-layout ref="uLinearLayout6">
                <u-button ref="uButton6" text="立即创建" color="primary" @click="uButton6_click(\$event)"></u-button>
                <u-button ref="uButton7" text="取消" @click="uButton7_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template8">
            <u-linear-layout ref="uLinearLayout7" direction="vertical">
                <u-form ref="form1" key="form1">
                    <u-form-item ref="uFormItem5" :required="true" :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true}]">
                        <u-input ref="uInput4" placeholder="请输入角色名称" :value.sync="inputRoleBody.name"></u-input>
                        <template #label ref="template26">
                            <u-text ref="text10" text="角色名称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="uFormItem6">
                        <u-input ref="uInput5" :value.sync="inputRoleBody.description" placeholder="请输入角色描述"></u-input>
                        <template #label ref="template27">
                            <u-text ref="text11" text="角色描述"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </u-linear-layout>
        </template>
        <template #title ref="template9">
            <u-text ref="uText3" text="标题"></u-text>
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
                ['lCAPUser']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser1', undefined),
['input']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser1', undefined),
['filter']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser1', undefined),
['isUpdate']:undefined,
['deleteUserBody']:this.$genInitFromSchema('app.dataSources.defaultDS.entities.LCAPUser1', undefined),
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
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.LCAPGetUserTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order, 
filter: this.filter
}
}))
return result;
    }
,

async submit () {
        let validateResult =this.$genInitFromSchema('nasl.ui.ValidateEvent',undefined);

await (this.getUserNameList())
this.$utils['ListDistinct'](this.userList)
validateResult = await (this.$refs && this.$refs.saveModalForm && this.$refs.saveModalForm.validate && this.$refs.saveModalForm.validate())
if ((validateResult || {}).valid) {
if ((this.isUpdate) == (true)) {
await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser1.logics.update']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            body: {
entity: this.input},

}))
}             else {
this.input.password = await (this.$global.encryptByAES({string: (this.input || {}).password}))
this.input.userId = this.$utils['Concat'](this.$utils['ToString']((this.input || {}).userName, 'undefined'), this.$utils['ToString']((this.input || {}).source, 'undefined'))
await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser1.logics.create']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            
body: this.input
}))
}

await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.close && this.$refs.saveModal.close())
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$toast.show(this.$utils['ToString'](`操作成功！`)))
}         else {
}

return;
    }
,

async getUserNameList () {
        let result =undefined;

result = await (this.$logics['app.logics.LCAPGetAllUsers']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
}
}))
if(Array.isArray((result || {}).list)) {
for (let index = 0; index < (((result || {}).list || {}).length); index++) {
const item = ((result || {}).list)[index];
this.$utils['Add'](this.userList, ((item || {}).lCAPUser || {}).userName)
}
}

return result;
    }
,

async userManagement_created (event) { 
await (async () => {

this.$utils['Clear'](this.filter)
return;
    })();
}
,

async button2_click (event) { 
await (async () => {

this.isUpdate = false
this.input = this.$utils['Clone'](this.lCAPUser)
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async button5_click (event) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPUser1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (this.deleteUserBody || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
await (this.$refs && this.$refs.deleteModal && this.$refs.deleteModal.close && this.$refs.deleteModal.close())
await (this.$toast.show(this.$utils['ToString'](`删除成功！`)))
this.$utils['Clear'](this.deleteUserBody)
return;
    })();
}
,

async button6_click (event) { 
await (async () => {

await (this.$refs && this.$refs.deleteModal && this.$refs.deleteModal.close && this.$refs.deleteModal.close())
return;
    })();
}
,

async button1_click (event) { 
await (async () => {

await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
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
await (this.$refs && this.$refs.saveModal && this.$refs.saveModal.open && this.$refs.saveModal.open())
return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

this.deleteUserBody = ((current || {}).item || {}).lCAPUser
await (this.$refs && this.$refs.deleteModal && this.$refs.deleteModal.open && this.$refs.deleteModal.open())
return;
    })();
}

},
        async created () {
        await this.userManagement_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<l-root ref="lRoot1">
    <u-router-view ref="uRouterView1"></u-router-view>
    <u-linear-layout ref="linear_layout11" direction="horizontal">
        <u-alert ref="alert1" style="margin:0 0 10px 0;" type="info">
            <template #title ref="template30">
                <u-text ref="text29" text="开发者可根据需求情况，自行修改或新建用户管理、权限管理页面"></u-text>
            </template>
        </u-alert>
    </u-linear-layout>
    <u-linear-layout ref="linear_layout1" direction="vertical">
        <u-linear-layout ref="linear_layout2" justify="space-between">
            <u-button ref="button2" color="primary" text="创建普通用户" @click="button2_click(\$event)"></u-button>
            <u-form ref="form1" layout="inline" label-size="auto" key="form1">
                <u-form-item ref="form_item1" style="width:332px;text-align:left;">
                    <u-input ref="input1" placeholder="请输入用户名或昵称" :value.sync="filter.userName"></u-input>
                    <template #label ref="template14">
                        <u-text ref="text13" text="用户名"></u-text>
                    </template>
                </u-form-item>
                <u-form-item ref="form_item5">
                    <u-button ref="button1" color="primary" text="查询" @click="button1_click(\$event)"></u-button>
                </u-form-item>
            </u-form>
        </u-linear-layout>
        <u-table-view ref="tableView" :data-source="load" data-schema="LoadTest2TableViewStructure" value-field="lCAPUser.id" :pageable="true" :remote-paging="true"
            :show-sizer="true" key="tableView">
            <u-table-view-column ref="table_view_column1" type="index" width="60">
                <template #title ref="template15">
                    <u-text ref="text14" text="序号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column2" field="lCAPUser.userName">
                <template #cell="current" ref="template1">
                    <u-linear-layout ref="linear_layout3" gap="small">
                        <u-text ref="text1" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).userName, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template16">
                    <u-text ref="text15" text="用户名"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column3" field="lCAPUser.phone">
                <template #cell="current" ref="template2">
                    <u-linear-layout ref="linear_layout4" gap="small">
                        <u-text ref="text2" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).phone, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template17">
                    <u-text ref="text16" text="手机号"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column4" field="lCAPUser.email">
                <template #cell="current" ref="template3">
                    <u-linear-layout ref="linear_layout5" gap="small">
                        <u-text ref="text3" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).email, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template18">
                    <u-text ref="text17" text="邮箱"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column5" field="lCAPUser.displayName">
                <template #cell="current" ref="template4">
                    <u-linear-layout ref="linear_layout6" gap="small">
                        <u-text ref="text4" :text="\$utils['ToString']((((current || {}).item || {}).lCAPUser || {}).displayName, 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template19">
                    <u-text ref="text18" text="昵称"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column6" field="lCAPUser.status">
                <template #cell="current" ref="template5">
                    <u-linear-layout ref="linear_layout7" gap="small">
                        <u-text ref="text5"
                            :text="\$utils['ToString'](\$utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).status, {'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserStatusEnum','typeArguments':null,'returnType':null,'properties':null}), 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template20">
                    <u-text ref="text19" text="状态"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column8" field="lCAPUser.status">
                <template #cell="current" ref="template13">
                    <u-linear-layout ref="linear_layout12" gap="small">
                        <u-text ref="text12"
                            :text="\$utils['ToString'](\$utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).source, {'concept':'TypeAnnotation','name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserSourceEnum','typeArguments':null,'returnType':null,'properties':null}), 'undefined')"></u-text>
                    </u-linear-layout>
                </template>
                <template #title ref="template21">
                    <u-text ref="text20" text="登录方式"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column ref="table_view_column7">
                <template #cell="current" ref="template6">
                    <u-linear-layout ref="linear_layout8" gap="small">
                        <u-link ref="link1" text="修改" @click="link1_click(\$event, current)"></u-link>
                        <u-link ref="link2" text="删除" :disabled="((((current || {}).item || {}).lCAPUser || {}).userName) == ((\$global.userInfo || {}).UserName)"
                            @click="link2_click(\$event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title ref="template22">
                    <u-text ref="text21" text="操作"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal ref="saveModal">
            <template #foot ref="template7">
                <u-linear-layout ref="linear_layout9">
                    <u-button ref="button3" color="primary" text="提交修改" @click="button3_click(\$event)" v-if="isUpdate"></u-button>
                    <u-button ref="button4" color="primary" text="立即创建" @click="button4_click(\$event)" v-if="!(isUpdate)"></u-button>
                </u-linear-layout>
            </template>
            <template #body ref="template8">
                <u-form ref="saveModalForm" key="saveModalForm">
                    <u-form-item ref="form_item6" :required="true"
                        :rules="[{validate: 'filled',message: \`表单项不得为空\`,trigger: 'input+blur',required: true} , {validate: 'excluded',args: [userList] ,message: \`该表单项已经存在\`,trigger: 'input+blur'}]"
                        :ignore-validation="isUpdate">
                        <u-input ref="input4" placeholder="请输入用户名" :value.sync="input.userName" :disabled="isUpdate"></u-input>
                        <template #label ref="template23">
                            <u-text ref="text22" text="用户名"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item7" :required="true"
                        :rules="[{validate: 'required',message: \`表单项不得为空\`,trigger: 'input+blur',required: true} , {validate: 'rangeLength',args: [8, 12] ,message: \`请输入\${8}-\${12}个字符\`,trigger: 'input+blur'} , {validate: '^azAZ09-_\$',message: \`以字母、数字、'-'或'_'组成\`,trigger: 'input+blur'}]"
                        v-if="!(isUpdate)">
                        <u-input ref="input5" placeholder="请输入8-12位普通登录密码" :value.sync="input.password" :password="true"></u-input>
                        <template #label ref="template24">
                            <u-text ref="text23" text="登录密码"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item8" :rules="[{validate: 'mobile',args: [\`zh-CN\`, undefined] ,message: \`请输入合法的手机号码\`,trigger: 'input+blur'}]">
                        <u-input ref="input6" placeholder="请输入手机号" :value.sync="input.phone"></u-input>
                        <template #label ref="template25">
                            <u-text ref="text24" text="手机号"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item9" :rules="[{validate: 'email',message: \`请输入正确的邮箱\`,trigger: 'input+blur'}]">
                        <u-input ref="input7" placeholder="请输入邮箱" :value.sync="input.email"></u-input>
                        <template #label ref="template26">
                            <u-text ref="text25" text="邮箱"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item10">
                        <u-input ref="input8" placeholder="请输入昵称" :value.sync="input.displayName"></u-input>
                        <template #label ref="template27">
                            <u-text ref="text26" text="昵称"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item3" v-if="isUpdate">
                        <u-select ref="select1" placeholder="请选择" value-field="value"
                            :data-source="\$utils['EnumToList']({'concept':'TypeAnnotation','changedTime':1676988664861,'name':'','typeKind':'reference','typeNamespace':'app.enums','typeName':'UserStatusEnum','typeArguments':null,'returnType':null,'properties':null})"
                            :value.sync="input.status" key="select1"></u-select>
                        <template #label ref="template28">
                            <u-text ref="text27" text="状态"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item ref="form_item2" :required="true">
                        <u-input ref="input2" placeholder="普通登录" :disabled="true"></u-input>
                        <template #label ref="template29">
                            <u-text ref="text28" text="用户来源"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title ref="template9">
                <div ref="div1" v-if="isUpdate">
                    <u-text ref="text6" text="修改"></u-text>
                </div>
                <div ref="div2" v-if="!(isUpdate)">
                    <u-text ref="text7" text="创建"></u-text>
                </div>
            </template>
        </u-modal>
    </u-linear-layout>
    <u-modal ref="deleteModal">
        <template #foot ref="template10">
            <u-linear-layout ref="linear_layout10">
                <u-button ref="button5" color="primary" text="确定" @click="button5_click(\$event)"></u-button>
                <u-button ref="button6" text="取消" @click="button6_click(\$event)"></u-button>
            </u-linear-layout>
        </template>
        <template #body ref="template11">
            <u-text ref="text8" text="该用户相关的角色关联关系都会被删除！确认删除用户："></u-text>
            <u-text ref="text10" :text="\$utils['ToString']((deleteUserBody || {}).userName, 'undefined')"></u-text>
            <u-text ref="text11" text=" ？"></u-text>
        </template>
        <template #title ref="template12">
            <u-text ref="text9" text="删除用户 "></u-text>
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
            path: '/pc/noAuth',
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
                    template: `<u-linear-layout ref="uLinearLayout1" style="height: 100vh;" type="flex" justify="center" alignment="center">
    <u-linear-layout ref="uLinearLayout2" direction="vertical" justify="center">
        <img ref="img1" src="/assets/error-code.svg" width="240" />
        <h1 ref="h11"
            style="margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px;">
            <u-text ref="uText1" text="401"></u-text>
        </h1>
        <h2 ref="h21" style="color: var(--color-light);">
            <u-text ref="uText2" text="你没有访问该页面的权限"></u-text>
        </h2>
        <u-linear-layout ref="uLinearLayout3">
            <u-button ref="uButton1" text="重新登录" href="/pc/login" color="primary" shape="round"></u-button>
            <u-button ref="uButton2" href="/pc/" text="返回首页" shape="round"></u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/notFound',
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
                    template: `<u-linear-layout ref="uLinearLayout1" style="height: 100vh;" justify="center" type="flex" alignment="center">
    <u-linear-layout ref="uLinearLayout2" justify="center" direction="vertical">
        <img ref="img1" width="240" src="/assets/error-code.svg" />
        <h1 ref="h11"
            style="margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px;">
            <u-text ref="uText1" text="404"></u-text>
        </h1>
        <h2 ref="h21" style="color: var(--color-light);">
            <u-text ref="uText2" text="抱歉，你访问的页面不存在"></u-text>
        </h2>
        <u-button ref="uButton1" text="返回首页" color="primary" href="/pc/" shape="round"></u-button>
    </u-linear-layout>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/pc/gante1',
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
    async load (params) {
        params = this.$genInitFromSchema('nasl.ui.DataSourceParams',params !== undefined ? params : (this.$route.query.hasOwnProperty('params') ? this.$genInitFromSchema('nasl.ui.DataSourceParams', this.$route.query.params) : ""));
        let result =undefined;

result = await (this.$logics['app.logics.loadGanteTableView']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            path: {},
                body: {
page: (params || {}).page, 
size: (params || {}).size, 
sort: (params || {}).sort, 
order: (params || {}).order
}
}))
return result;
    }
,

async gante1_created (event) { 
await (async () => {

return;
    })();
}
,

async button1_mousedown (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}
,

async button1_mouseup (event) { 
await (async () => {

return;
    })();
await (async () => {

return;
    })();
}
,

async link2_click (event,current) { 
await (async () => {

await (this.$logics['app.dataSources.defaultDS.entities.LCAPResource1.logics.delete']({
                config: {
                    download: false,
                },
                query: {},
                headers: {},
            query: {
id: (((current || {}).item || {}).lCAPResource1 || {}).id},
body: {}
}))
await (this.$refs && this.$refs.tableView && this.$refs.tableView.reload && this.$refs.tableView.reload())
return;
    })();
}

},
        async created () {
        await this.gante1_created();}
};
})();
                Object.assign(componentOptions, {
                    template: `<u-linear-layout ref="uLinearLayout1" style="height:100%; --custom-start: auto; min-height: 200px;" type="root" gap="none" mode="block">
    <lcap-gantt ref="lcap_gantt1" :data-source="load"
        :ganttTableConfig="[{'nameField':'lCAPResource1.id','labelField':'列标题','showTooltip':true,'width':120},{'nameField':'lCAPResource1.name','labelField':'列标题','showTooltip':true,'width':120},{'labelField':'列标题','showTooltip':true,'width':120,'nameField':'lCAPResource1.description'}]"></lcap-gantt>
    <u-router-view ref="router_view1"></u-router-view>
    <u-table-view ref="tableView" :data-source="load" data-schema="LoadGanteTableViewStructure" value-field="lCAPResource1.id" :pagination="true"
        :show-sizer="true" key="tableView">
        <u-table-view-column ref="table_view_column2" field="lCAPResource1.name">
            <template #cell="current" ref="template3">
                <u-linear-layout ref="linear_layout1" gap="small">
                    <u-text ref="text2" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).name, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template4">
                <u-text ref="text3" text="资源名称"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column1" type="index" width="60">
            <template #cell="current" ref="template1"></template>
            <template #title ref="template2">
                <u-text ref="text1" text="序号"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column3" field="lCAPResource1.description">
            <template #cell="current" ref="template5">
                <u-linear-layout ref="linear_layout2" gap="small">
                    <u-text ref="text4" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).description, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template6">
                <u-text ref="text5" text="资源描述"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column4" field="lCAPResource1.clientType">
            <template #cell="current" ref="template7">
                <u-linear-layout ref="linear_layout3" gap="small">
                    <u-text ref="text6" :text="\$utils['ToString']((((current || {}).item || {}).lCAPResource1 || {}).clientType, 'undefined')"></u-text>
                </u-linear-layout>
            </template>
            <template #title ref="template8">
                <u-text ref="text7" text="端标识"></u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column ref="table_view_column5" title="操作">
            <template #cell="current" ref="template9">
                <u-linear-layout ref="linear_layout4" gap="small">
                    <u-link ref="link1" text="修改"></u-link>
                    <u-link ref="link2" text="删除" @click="link2_click(\$event, current)"></u-link>
                </u-linear-layout>
            </template>
            <template #title ref="template10">
                <u-text ref="text8" text="操作"></u-text>
            </template>
        </u-table-view-column>
    </u-table-view>
    <u-button ref="button1"
        style="border-color:#421cab;background-color:#384e97;background-position:center top;background-size:contain;background-repeat:no-repeat;"
        color="primary" text="确 定" @mousedown="button1_mousedown(\$event)" @mouseup="button1_mouseup(\$event)"></u-button>
</u-linear-layout>
`,
                });
                return componentOptions;
            })(),
},
{
            path: '/',
redirect: '/pc',
},
{
            path: '*',
            redirect: '/pc/notFound',
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
            window.createLcapApp();
        }, 2000)
    