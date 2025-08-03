/**
 * メディアクエリ判定
 */
import {MQ} from '../consts.js';

const getMq = () => {
    if (window.innerWidth < MQ.sm) {
        return 'xs';
    } else if (window.innerWidth < MQ.md) {
        return 'sm';
    } else if (window.innerWidth < MQ.lg) {
        return 'md';
    }  else if (window.innerWidth < MQ.xl) {
        return 'lg';
    } else {
        return 'xl';
    }
}

export default getMq