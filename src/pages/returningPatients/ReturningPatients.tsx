import React from "react";
import './ReturningPatients.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/returningPatientsData.json";

export interface IReturningPatientsProps {};

const ReturningPatients: React.FunctionComponent<IReturningPatientsProps> = (props) => {
    
    const { t } = useTranslation();
    const returningPatientsList = data;
    
    return (
        <div className="returning-patients flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="returning-patients__header bold">
                    {t("returningPatientsHeader")}
                </p>
                <p className="returning-patients__description color--blue">
                    {t("returningPatientsDescription")}
                </p>
            </div>
            <div className="card-box under-construction">
                <img src="/icons/underconstruction.png" />
            </div>
        </div>
    )
}

export default ReturningPatients;