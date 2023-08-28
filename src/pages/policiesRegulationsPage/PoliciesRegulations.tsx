import React from "react";
import './PoliciesRegulations.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/policiesRegulationsData.json";
import JsonParagraphsDataFormatService from "../../services/JsonParagraphsHelper";

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
                                            JsonParagraphsDataFormatService.getListSymbol(subItem.paragraphListType, numberedListItemCounterObj) +
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

export default PoliciesRegulations;