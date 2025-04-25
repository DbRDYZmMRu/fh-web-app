import * as pathRouter from './pathRouter.js';
import * as musicpool from './musicpool.js';
import * as albumMethods from '../components/layout/index.js';
import { store } from '../store/index.js';


export default {
...pathRouter,
...musicpool,
...albumMethods,
};




