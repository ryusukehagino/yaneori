import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * aos.js初期化
 */
const initAOS = () => {
    AOS.init({
        offset: (window.innerHeight / 3), //画面の高さの3/1
        once: true,
        delay: 0,
        duration: 1000,
    });
}

export default initAOS