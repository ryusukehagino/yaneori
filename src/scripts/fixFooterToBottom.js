/**
 * コンテンツが画面の高さより小さければフッターを下部に固定
 */
const fixFooterToBottom = () => {
    const main = document.querySelector('.js_main');
    const footer = document.querySelector('.js_footer');

    const doWhenLoaded = () => {
        const winH = window.innerHeight; //画面の高さ
        const contsH = main.clientHeight + footer.clientHeight; //コンテンツの高さ

        // classを付与するかどうか判定
		if (contsH < winH) {
			footer.classList.add('is_fixed');
            // console.log('add');
		} else {
            footer.classList.remove('is_fixed');
            // console.log('remove');
		}
    }

    window.addEventListener('load', doWhenLoaded);
    window.addEventListener('resize', doWhenLoaded);
}

export default fixFooterToBottom;