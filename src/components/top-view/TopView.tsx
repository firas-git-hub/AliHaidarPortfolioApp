import "./TopView.scss";
import React, { ReactNode } from "react";
import homeData from "../../data/topViewCardsData.json";
import aboutMeData from "../../data/aboutMeData.json";
import { useTranslation } from "react-i18next";
import { JsonParagraphsDataInterface } from "../../interfaces/JsonParagraphsDataInterface";
import JsonParagraphsDataFormatService from "../../services/JsonParagraphsHelper";

export interface ITopViewProps {
    componentDataToRender: "home" | "aboutme";
}

export interface ITopViewDataProps {
    header?: string;
    subTitle?: string;
    textContent: JsonParagraphsDataInterface[];
}

const TopView: React.FunctionComponent<ITopViewProps> = (props: ITopViewProps) => {

    const { t } = useTranslation();
    let cardBoxesData = props.componentDataToRender == "aboutme" ? aboutMeData : homeData;
    let numberedListItemCounterObj = { index: 0 };

    return <>
        <div className="topview-container main-background-img">
            <div className="topview-container__info">
                <div className="card-box">
                    <p className="topview-container__info__header bold">
                        {t(cardBoxesData.header)}
                    </p>
                    <p className="topview-container__info__title color--blue">
                        {t(cardBoxesData.subTitle)}
                    </p>
                </div>
                <div className={"differently-sized-boxes" + (props.componentDataToRender == "home" ? " home" : "")}>
                    {
                        cardBoxesData.textContent
                            ? cardBoxesData.textContent.map((element, index) => {
                                return <div key={index} className={"topview-container__info__description card-box " + "box" + (index + 1).toString()}>
                                    <p className={"color--blue" + (element.title ? "" : " display--none")}>{element.title ? t(element.title) : ""}</p>
                                    {
                                        element.paragraphs!.map((subItem, index) => {
                                            return JsonParagraphsDataFormatService.formatJsonDataText(index, subItem, numberedListItemCounterObj, "description");
                                        })
                                    }
                                </div>
                            })
                            : null
                    }
                </div>
            </div>
            <div className="img-container">
                <div className="portrait-img-container">
                    <img className="portrait" src={props.componentDataToRender == "home" ? "images/AliHaidarPortrait2.png" : "images/AliHaidarPortrait.png"} />
                </div>
                <img className="background-1" src="images/headshotBackgroundTriangles2.png" />
                <img className="background-2" src="images/headshotBackgroundTriangles2.png" />
            </div>
        </div>
    </>
}

export default TopView;