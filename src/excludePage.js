import fs from 'fs';
import { EXCLUDES } from '../astro.config.mjs';
import { BASE_DIR } from './consts.js';

const outDir = './dist' + BASE_DIR;

// 除外するディレクトリを取得して削除（除外ディレクトリはastro.config.mjsで設定）
if (EXCLUDES.length > 0) {
    EXCLUDES.forEach((exclude) => {
        const removeDir = outDir + exclude;
    
        // 対象ディレクトリが存在しない場合は処理を終了
        if (!fs.existsSync(removeDir)) {
            console.log(removeDir + 'は存在しません');
            return;
        }
    
        // removeDirを削除
        fs.rmSync(removeDir, { recursive: true, force: true });
        // console.log(removeDir + 'を削除しました');
    })
}