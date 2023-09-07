import React from "react";
import './NewPatients.scss';
import { useTranslation } from "react-i18next";
import data from "../../data/newPatientsData.json";
import JsonParagraphsDataFormatService from "../../services/JsonParagraphsHelper";
import { JsonParagraphsDataInterface } from "../../interfaces/JsonParagraphsDataInterface";

export interface INewPatientsProps { };

export interface INewPatientsData {
    header?: string;
    subTitle?: string;
    luminelloFormParagraph: string;
    luminelloFormLink: string;
    textContent: JsonParagraphsDataInterface[];
};

const NewPatients: React.FunctionComponent<INewPatientsProps> = (props) => {

    const { t } = useTranslation();
    const newPatientsData: INewPatientsData = data;
    let numberedListItemCounterObj = { index: 1 };

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
            <div className="card-box new-patients__body">
                <div className="luminello-img-container">
                    <img src="assets/icons/luminello.png" />
                </div>
                <span>
                    {newPatientsData.luminelloFormParagraph}
                    <a href={newPatientsData.luminelloFormLink}>{newPatientsData.luminelloFormLink}</a>
                </span>
                {
                    newPatientsData.textContent.map((item, index) => {
                        return <div className="text-item" key={index}>
                            {
                                item.paragraphs.map((subItem, index) => JsonParagraphsDataFormatService.formatJsonDataText(index, subItem, numberedListItemCounterObj, "text-item__paragraph"))
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default NewPatients;