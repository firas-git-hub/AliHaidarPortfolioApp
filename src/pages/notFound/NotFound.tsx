import React from "react";
import './NotFound.scss';
import { useTranslation } from "react-i18next";

export interface INotFoundProps { };

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {

    const { t } = useTranslation();

    return (
        <div className="not-found">
            <h1>{t("notFound")}</h1>
            <h4>{t("notFoundMsg")}</h4>
        </div>
    )
}

export default NotFound;