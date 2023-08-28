import React from "react";
import './FeesPayments.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/feesPaymentsData.json";

export interface IFeesPaymentsProps {};

const FeesPayments: React.FunctionComponent<IFeesPaymentsProps> = (props) => {
    
    const { t } = useTranslation();
    const feesPaymentsList = data;
    
    return (
        <div className="fees-payments flex--column main-background-img">
            <div className="flex--column card-box">
                <p className="fees-payments__header bold">
                    {t("feesPaymentsHeader")}
                </p>
                <p className="fees-payments__description color--blue">
                    {t("feesPaymentsDescription")}
                </p>
            </div>
            <div className="card-box under-construction">
                <img src="/icons/underconstruction.png" />
            </div>
        </div>
    )
}

export default FeesPayments;