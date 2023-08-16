import React from "react";
import './ContactInfo.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/contactInfoData.json";

export interface IContactInfoProps {};

const ContactInfo: React.FunctionComponent<IContactInfoProps> = (props) => {

    const { t } = useTranslation();
    const contactInfoList = data;
    
    return (
        <div className="contact-info flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="contact-info__header bold">
                    {t("contactInfoHeader")}
                </p>
                <p className="contact-info__description color--blue">
                    {t("contactInfoDescription")}
                </p>
            </div>
            <div className="card-box under-construction">
                <img src="/icons/underconstruction.png" />
            </div>
        </div>
    )
}

export default ContactInfo;