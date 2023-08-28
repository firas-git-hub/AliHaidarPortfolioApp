import { ParagraphsListTypeEnum } from "../interfaces/JsonParagraphsDataInterface";

export default class JsonParagraphsDataFormatService {

    //I passed the index as object so the argument taken by the function would be taken by reference. this means that i can change the object through the function.
    static getListSymbol = (paragraphListType: ParagraphsListTypeEnum | string, listSubitemIndexObj: { index: number }): string => {
        let returnVal = "";
        
        if (paragraphListType == ParagraphsListTypeEnum.numbered) {
            returnVal = listSubitemIndexObj.index + ".";
            listSubitemIndexObj.index += 1;
        }

        else if (paragraphListType == ParagraphsListTypeEnum.bulletPoint) {
            returnVal = "\u2022";
        }

        else if (paragraphListType == ParagraphsListTypeEnum.hyphen) {
            returnVal = "\u2013";
        }

        else {
            listSubitemIndexObj.index = 1;
            returnVal = paragraphListType.toString();
        }
        return returnVal;
    }
}