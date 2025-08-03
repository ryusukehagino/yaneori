/**
 * ポップアップ等出現時にbodyを固定
 * @var {string} type - 開く時は'open'、閉じる時は'close'
*/
const fixBody = (type = 'open') => {
    const body = document.body;
    const duration = 200; //グロナビ出現にかかる時間
    
    // 固定
    if (type === 'open') {
        const scroll = window.scrollY;
        setTimeout(() => {
            body.classList.add('is_fixed');
            body.style.top = `${-scroll}px`;
            body.classList.add('is_scrolled');
        }, duration);

    // 固定を解除
    } else if (type === 'close') {
        const scroll = body.style.top ? -parseFloat(body.style.top) : 0;
        if (!body.classList.contains('is_fixed')) return;
        body.classList.remove('is_fixed');
        body.style.top = '';
        window.scrollTo(0, scroll);
    }
}

export default fixBody;