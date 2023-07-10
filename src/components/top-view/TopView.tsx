import "./TopView.scss";

export default function TopView() {
    return <>
        <div className="topview-container">
            <div className="topview-container__info">
                <p className="topview-container__info__header bold">
                    Ali Haidar Md
                </p>
                <p className="topview-container__info__title">
                    About me
                </p>
                <p className="topview-container__info__description">
                    No in he real went find mr. Wandered or strictly raillery stanhill as. Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case.
                </p>
            </div>
            <div className="img-container">
                <img src="images/doctorPortrait.png" />
            </div>
        </div>
    </>
}