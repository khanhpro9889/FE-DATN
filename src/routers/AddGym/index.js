import { ADD_PATH as path } from '../../constants/Path';
import { loadable } from '../../utils/router';

export default {
    path,
    component: loadable(() => import('./AddGym'))
}