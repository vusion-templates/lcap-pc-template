pwd
# 注释掉对 cloud-ui.vusion 依赖的代码，现在不知道怎么处理
sed -i -e "s/import { UToast } from 'cloud-ui.vusion'/\/\/ import { UToast } from 'cloud-ui.vusion'/" './src/plugins/dataTypes/tools.js'
sed -i -e "s/UToast?.error(err);/\/\/ UToast?.error(err);/" './src/plugins/dataTypes/tools.js'


npm test
# 运行完测试，去掉注释
sed -i -e "s/\/\/ import { UToast } from 'cloud-ui.vusion'/import { UToast } from 'cloud-ui.vusion'/" './src/plugins/dataTypes/tools.js'
sed -i -e "s/\/\/ UToast?.error(err);/UToast?.error(err);/" './src/plugins/dataTypes/tools.js'
