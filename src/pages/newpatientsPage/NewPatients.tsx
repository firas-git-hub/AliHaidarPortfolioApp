import React from "react";
import './NewPatients.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/newPatientsData.json";

export interface INewPatientsProps {};

const NewPatients: React.FunctionComponent<INewPatientsProps> = (props) => {
    
    const { t } = useTranslation();
    const newPatientsList = data;
    
    return (
        <div className="new-patients flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="new-patients__header bold">
                    {t("newPatientsHeader")}
                </p>
                <p className="new-patients__description color--blue">
                    {t("newPatientsDescription")}
                </p>
            </div>
            <div className="card-box under-construction">
                <img src="/icons/underconstruction.png" />
            </div>
        </div>
    )
}

export default NewPatients;