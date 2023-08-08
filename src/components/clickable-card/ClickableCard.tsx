import './ClickableCard.scss';
import React, { useEffect } from 'react';

export interface ClickableCardProps {
    cardImagePath?: string;
    cardHeader: string;
    cardDescription: string;
    routerPath?: string;
    navigateOnClick?: Function;
}

const ClickableCard: React.FunctionComponent<ClickableCardProps> = (props) => {

    const cardClicked = () => {
        props.navigateOnClick ? props.navigateOnClick() : null;
    }

    return <>
        <div className="card-container card-box" onClick={() => cardClicked()}>
            <div className="card-image">
                <img src={props.cardImagePath} />
            </div>
            <div className="card-content">
                <p className="card-content__header color--blue">{props.cardHeader}</p>
                <p className="card-content__description">{props.cardDescription}</p>
            </div>
        </div>
    </>
}

export default ClickableCard;