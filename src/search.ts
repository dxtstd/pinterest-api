import { GetWeb } from './fetch';
import { JSON2ARRAY } from './scrap';

const keyword = async function (keyword: string, opts: object={}) {
    const OptionSearch = {
        options: {
            page_size: 40,
            query: keyword,
            scope: 'pins',
            bookmarks: [],
            field_set_key: 'unauth_react',
            no_fetch_context_on_resource: false
        },
        context: {}
    };
    
    const LinkSearch = `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?q=${encodeURIComponent(keyword)}&rs=typed&term_meta[]=${encodeURIComponent(keyword)}%7Ctyped&data=${encodeURIComponent(JSON.stringify(OptionSearch))}`;
    const JSONSearch = await GetWeb(LinkSearch);
    const ResultSearchKeyword = await JSON2ARRAY(JSONSearch);
    return ResultSearchKeyword;
};

export { 
    keyword
};