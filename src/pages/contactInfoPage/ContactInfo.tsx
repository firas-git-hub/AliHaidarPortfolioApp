import React from "react";
import './ContactInfo.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/contactInfoData.json";
import { Avatar, Chip } from "@mui/material";

export interface IContactInfoProps {
    name: string;
    occupation: string;
    email: string;
    address: string;
    phone: string;
};

const ContactInfo: React.FunctionComponent<{}> = () => {

    const { t } = useTranslation();
    const contactInfoData: IContactInfoProps = data;

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
            <div className="card-box contact-info__body">
                <div className="card-box contact-info__body__item">
                    <img src="assets/icons/doctoricon256x256.png" />
                    <div className="item-text-content-wrapper">
                        <Chip label={contactInfoData.name} />
                        <Chip label={contactInfoData.occupation} />
                    </div>
                </div>
                <div className="card-box contact-info__body__item">
                    <img src="assets/icons/locationicon256x256.png" />
                    <Chip label={contactInfoData.address} />
                    {/* <Chip label={contactInfoData.address} clickable component="a" target="_blank" href="https://www.google.com/maps/search/?api=1&query=40.7097633,-74.0078967" /> */}
                </div>
                <div className="card-box contact-info__body__item white-space--nowrap">
                    <img src="assets/icons/phoneicon256x256.png" />
                    <div className="item-text-content-wrapper">
                        {/* <Chip label= clickable component="a" href= >

                        </Chip> */}

                        <Chip className="phone-number-chip" avatar={<Avatar src="/assets/images/contactusphone.png" />} clickable onClick={() => "tel:" + contactInfoData.phone.toString()} />
                        <Chip label={contactInfoData.email} clickable component="a" href={"mailto:" + contactInfoData.email.toString()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;