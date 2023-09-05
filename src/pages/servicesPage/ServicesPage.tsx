import './ServicesPage.scss';
import React from "react";
import { useTranslation } from "react-i18next";
import data from "../../data/servicesOfferedListData.json";
import { JsonParagraphsDataInterface } from '../../interfaces/JsonParagraphsDataInterface';
import JsonParagraphsDataFormatService from '../../services/JsonParagraphsHelper';

export interface IServicesProps { };

export interface IServicesData {
    header?: string;
    subTitle?: string;
    textContent: JsonParagraphsDataInterface[];
};

const Services: React.FunctionComponent<IServicesProps> = (props) => {

    const { t } = useTranslation();
    const servicesOffered: IServicesData = JSON.parse(JSON.stringify(data));
    let numberedListItemCounterObj = { index: 1 };

    return (
        <div className="flex--column services main-background-img">
            <div className="flex--column card-box">
                <p className="services__header bold">
                    {t("servicesHeader")}
                </p>
                <p className="services__description color--blue">
                    {t("servicesDescription")}
                </p>
            </div>
            <div className="services__body flex--column">
                {
                    servicesOffered.textContent.map((item, index) => {
                        return <div key={index} className="card-box services-item flex--column">
                            <p className="header color--blue">
                                {t(item.title)}
                            </p>
                            {
                                item.paragraphs.map((subItem, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, subItem, numberedListItemCounterObj, "description"))
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Services;