import "./TopView.scss";
import React from "react";
import data from "../../data/topViewCardsData.json";
import { useTranslation } from "react-i18next";

export interface ITopViewProps {
    header?: string;
    subTitle?: string;
    descriptionList?: { cardHeader: string, cardDescription: string }[];
}

const TopView: React.FunctionComponent<{}> = () => {

    const { t } = useTranslation();

    let cardBoxesData: ITopViewProps = data;
    return <>
        <div className="topview-container main-background-img">
            <div className="topview-container__info">
                <div className="card-box">
                    <p className="topview-container__info__header bold">
                        {t("topviewHeader")}
                    </p>
                    <p className="topview-container__info__title color--blue">
                        {t("topviewTitle")}
                    </p>
                </div>
                <div className="differently-sized-boxes">
                    {
                        cardBoxesData.descriptionList!.map((element, index) => {
                            return (
                                <p key={index} className={"topview-container__info__description card-box " + "box" + (index + 1).toString()}>
                                    <span className="header color--blue">{element.cardHeader}</span>
                                    <span className="description">{element.cardDescription}</span>
                                </p>
                            );
                        })
                    }
                </div>
            </div>
            <div className="img-container">
                <div className="portrait-img-container">
                    <img className="portrait" src="images/AliHaidarPortrait2.png" />
                </div>
                <img className="background-1" src="images/headshotBackgroundTriangles2.png" />
                <img className="background-2" src="images/headshotBackgroundTriangles2.png" />
            </div>
        </div>
    </>
}

export default TopView;