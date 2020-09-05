import { RESET_PASSWORD_2ND_PATH as path } from '../../constants/Path';
import { loadable } from '../../utils/router';

export default {
    path,
    component: loadable(() => import('./ResetPassword2nd'))
}