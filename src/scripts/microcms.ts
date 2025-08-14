/*************************************************************
 * microCMSから記事情報を取得
**************************************************************/
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

type Blog = {
    title: string;
    content: string;
} & MicroCMSListContent;

const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

/**
 * 記事一覧を取得
 * @var {string} endpoint API名
 * @var {string} queries クエリ
 * @return {Object}
 * - contents: {Array}
 * - totalCount: {number}
 * - offset: {number}
 * - limit: {number}
*/
export const fetchBlogs = async (
    endpoint: string,
    queries?: MicroCMSQueries
) => {
    return await client.getList<Blog>({ endpoint, queries });
}

/**
 * 記事詳細を取得
 * @var {string} endpoint API名
 * @var {string} contentId ページID(URLとして使用する文字列)
 * @var {string} queries クエリ
 * @return {Object}
 * - contents: {Array}
 * - totalCount: {number}
 * - offset: {number}
 * - limit: {number}
*/
export const fetchBlogDetail = async (
    endpoint: string,
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Blog>({ endpoint, contentId, queries});
};

export default fetchBlogs