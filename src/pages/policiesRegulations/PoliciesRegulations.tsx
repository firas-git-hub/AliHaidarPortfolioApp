import React from "react";
import './PoliciesRegulations.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/policiesRegulationsData.json";

export interface IPoliciesRegulationsProps { };

export interface IPoliciesRegulationsItem {
    title: string;
    paragraphs: { content: string, paragraphListType: string }[];
}

const PoliciesRegulations: React.FunctionComponent<IPoliciesRegulationsProps> = (props) => {

    const { t } = useTranslation();
    const policiesRegulationsList: IPoliciesRegulationsItem[] = data;
    let numberedListItemCounterObj = {index: 1};

    return (
        <div className="policies-regulations flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="policies-regulations__header bold">
                    {t("policiesRegulationsHeader")}
                </p>
                <p className="policies-regulations__description color--blue">
                    {t("policiesRegulationsDescription")}
                </p>
            </div>
            <div className="card-box policies-regulations__body">
                {
                    policiesRegulationsList.map((item, index) => {
                        return <div key={index} className="policies-regulations-item flex--column">
                            <p className="policies-regulations-item__title color--blue">{t(item.title)}</p>
                            {
                                item.paragraphs.map((subItem, index) => {
                                    return <p key={index} className="policies-regulations-item__paragraph">
                                        {
                                            getListSymbol(subItem.paragraphListType, numberedListItemCounterObj) +
                                            " " +
                                            subItem.content
                                        }
                                    </p>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

//I passed the index as object so the argument taken by the unction would be taken by reference. this means that i can change the object through the function.
const getListSymbol = (paragraphListType: string, listSubitemIndexObj: {index: number}): string => {
    let returnVal = "";
    if (paragraphListType == "numbered") {
        returnVal = listSubitemIndexObj.index + ".";
        listSubitemIndexObj.index += 1;
    }
    else if (paragraphListType == "bulletPoint") {
        returnVal = "\u2022";
    }
    else if (paragraphListType == "bulletPoint") {
        returnVal = "\u2022";
    }
    
    else {
        listSubitemIndexObj.index = 1;
        returnVal = paragraphListType;
    }
    return returnVal;
}

export default PoliciesRegulations;