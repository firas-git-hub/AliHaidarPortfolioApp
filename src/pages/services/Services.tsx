import './Services.scss';
import React from "react";
import { useTranslation } from "react-i18next";
import data from "../../data/servicesOfferedList.json";

export interface IServicesProps { };
export interface IServicesItem {
    itemTitle: string;
    itemDescriptionParagraphs: string[];
}

const Services: React.FunctionComponent<IServicesProps> = (props) => {

    const { t } = useTranslation();
    const servicesOffered: IServicesItem[] = data;

    return (
        <div className="flex--column services main-background-img">
            <div className="card-box flex--row">
                <div className="flex--column">
                    <p className="services__header bold">
                        {t("servicesHeader")}
                    </p>
                    <p className="services__description color--blue">
                        {t("servicesDescription")}
                    </p>
                </div>
            </div>
            <div className="services__body flex--column">
                {
                    servicesOffered.map((item, index) => {
                        return <div key={index} className="card-box services-item flex--column">
                            <p className="header color--blue">
                                {t(item.itemTitle)}
                            </p>
                            {item.itemDescriptionParagraphs.map((desc, index) =>
                                <p key={index} className="description">
                                    {desc}
                                </p>
                            )}

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Services;