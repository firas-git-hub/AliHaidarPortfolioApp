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
                    data.map((item, index) => {
                        return <div key={index}>
                            <p>{item.title}</p>
                            {
                                item.paragraphs.map((item, index) => {
                                    return <p key={index}>
                                        {item.paragraphListType + " " + item.content}
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