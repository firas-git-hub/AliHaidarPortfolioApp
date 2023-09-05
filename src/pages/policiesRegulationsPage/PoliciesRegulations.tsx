import React from "react";
import './PoliciesRegulations.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/policiesRegulationsData.json";
import JsonParagraphsDataFormatService from "../../services/JsonParagraphsHelper";
import { JsonParagraphsDataInterface } from "../../interfaces/JsonParagraphsDataInterface";

export interface IPoliciesRegulationsProps { };

export interface IPoliciesRegulationsData {
    header?: string;
    subTitle?: string;
    textContent: JsonParagraphsDataInterface[];
}

const PoliciesRegulations: React.FunctionComponent<IPoliciesRegulationsProps> = (props) => {

    const { t } = useTranslation();
    const policiesRegulationsData: IPoliciesRegulationsData = data;
    let numberedListItemCounterObj = { index: 1 };

    return (
        <div className="policies-regulations flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="policies-regulations__header bold">
                    {t(policiesRegulationsData.header ? policiesRegulationsData.header : "")}
                </p>
                <p className="policies-regulations__description color--blue">
                    {t(policiesRegulationsData.subTitle ? policiesRegulationsData.subTitle : "")}
                </p>
            </div>
            <div className="card-box policies-regulations__body">
                {
                    policiesRegulationsData.textContent.map((item, index) => {
                        return <div key={index} className="policies-regulations-item flex--column">
                            <p className="policies-regulations-item__title color--blue">{t(item.title)}</p>
                            {
                                item.paragraphs.map((subItem, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, subItem, numberedListItemCounterObj, "policies-regulations-item__paragraph"))
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PoliciesRegulations;