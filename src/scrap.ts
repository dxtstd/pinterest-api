import cheerio from "cheerio";
import { GetWeb } from "./fetch";

const HTML2JSON = async function HTML2JSON(html: string) {
    const ResultJSON = {};
    const $ = cheerio.load(html);
};

const JSON2ARRAY = async function JSON2ARRAY(json: any) {
    const ResultArray: Array<object> = [];
    const ArrayDataJSON = json.resource_response.data.results;
    
    for (let i in ArrayDataJSON) {
        const DataJSON = ArrayDataJSON[i]
        const ResultJSON = {};
        
        if (DataJSON.id && DataJSON.rich_summary) {
            
            ResultJSON['title'] = DataJSON.rich_summary.display_name || DataJSON.grid_title || DataJSON.title;
            ResultJSON['description'] = DataJSON.rich_summary.display_description  || DataJSON.grid_description || DataJSON.description;
            
            ResultJSON['link'] = {};
            const ArrayDataJSONImages = DataJSON.images;
            ResultJSON['link']['image'] = ArrayDataJSONImages[(Object.keys(ArrayDataJSONImages).reverse())[0]].url;
            ResultJSON['link']['post'] = "https://pinterest.com/pin/" + DataJSON.id;
            
            ResultArray.push(ResultJSON);
        };
    };
    return ResultArray;
};

export {
    HTML2JSON,
    JSON2ARRAY
};