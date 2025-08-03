/**
 * スクロール関数 
 * @var {Number} endPos 遷移先の数値
 * @var {Number} duration 遷移にかかる時間（ミリ秒）
*/
const scrollTo = (endPos = 0, duration = 800) => {
    const startPos = window.scrollY;
    const distance = endPos - startPos;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const next = easeInOutQuad(timeElapsed, startPos, distance, duration);

        window.scrollTo(0, next);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    const easeInOutQuad = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

export default scrollTo;

