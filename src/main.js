import metaData from './metaData.json';
import platformConfig from './platform.config.json';
import routes from './router/routes.js';
import './library';
import { init } from './init';

init(platformConfig?.appConfig, platformConfig, routes, metaData);
