import metaData from './metaData.json';
import appConfig from './app.config';
import platformConfig from './platform.config.json';
import routes from './router/routes.js';
import './library';

import { init } from './init';

init(appConfig, platformConfig, routes, metaData);
