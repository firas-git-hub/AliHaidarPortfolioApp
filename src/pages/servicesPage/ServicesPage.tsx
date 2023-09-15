import React, { useEffect } from "react";
import './ServicesPage.scss';
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

const ServicesPage: React.FunctionComponent<IServicesProps> = (props) => {

    const { t } = useTranslation();
    const servicesOffered: IServicesData = data;
    let numberedListItemCounterObj = { index: 1 };

    return (
        <div className="services flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="services__header bold">
                    {t(servicesOffered.header ? servicesOffered.header : "")}
                </p>
                <p className="services__description color--blue">
                    {t(servicesOffered.subTitle ? servicesOffered.subTitle : "")}
                </p>
            </div>
            <div className="services__body flex--column">
                {
                    servicesOffered.textContent.map((item, index) => {
                        return <div key={index} className="card-box services-item flex--column">
                            <p className="description-header color--blue">{t(item.title)}</p>
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

export default ServicesPage;