const Mock = require('mockjs');

module.exports = function (app) {
    app.post('/api/LCAPLoadRoleManagementTableView', function (rep, res) {
        let json = {
            id: "@id()"
        };
        res.json(Mock.mock(json));
    });

    app.get('/rest/getUserResources', function (rep, res) {
        res.json([
            {
                "resourceValue": "/permission_center/addRoleUser",
                "resourceType": "ui"
            }
        ]);
    });

    app.get('/gateway/nuims/nuims', function (rep, res) {
        res.json({
            "RequestId": "5f8b879d7c3b48119f1a6d53e57c9461",
            "Code": "Success",
            "Message": "请求调用成功",
            "Data": {
                "UserId": "f4519f848aab479e8bb9dd7c8506e86a",
                "UserName": "DEVACC-lq1013",
                "LastLoginTime": 1665970625290,
                "LoginCount": 2,
                "Status": "normal",
                "CreateTime": 1665629607385,
                "UpdateTime": 1665970625290,
                "Source": "Normal",
                "Env": "dev",
                "ThirdUserId": ""
            }
        });
    });
};
