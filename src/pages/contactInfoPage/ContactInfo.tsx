import React from "react";
import './ContactInfo.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/contactInfoData.json";
import { Avatar, Chip, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import GoToNavButton from "../../components/go-to-nav-button/GoToNavButton";

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
                    {t("contactInfoSubtitle")}
                </p>
            </div>
            <div className="card-box contact-info__body">
                <div className="card-box contact-info__body__item">
                    <img src="assets/icons/doctoricon256x256.png" />
                    <div className="item-text-content-wrapper">
                        <Chip title={contactInfoData.name} label={contactInfoData.name} />
                        <Chip title={contactInfoData.occupation} label={contactInfoData.occupation} />
                    </div>
                </div>
                <div className="card-box contact-info__body__item">
                    <img src="assets/icons/locationicon256x256.png" />
                    <Chip title={contactInfoData.address} label={contactInfoData.address} />
                    {/* this chip below might be used for the location later on */}
                    {/* <Chip label={contactInfoData.address} clickable component="a" target="_blank" href="https://www.google.com/maps/search/?api=1&query=40.7097633,-74.0078967" /> */}
                </div>
                <div className="card-box contact-info__body__item white-space--nowrap">
                    <img src="assets/icons/phoneicon256x256.png" />
                    <div className="item-text-content-wrapper">
                        <Chip title={contactInfoData.phone} className="phone-number-chip" avatar={<Avatar src="/assets/images/contactusphone.png" />} component="a" clickable href={"tel:" + contactInfoData.phone.toString()} />
                        <Chip title={contactInfoData.email} label={contactInfoData.email} clickable component="a" href={"mailto:" + contactInfoData.email.toString()} />
                    </div>
                </div>
            </div>
            <GoToNavButton/>
        </div>
    )
}

export default ContactInfo;