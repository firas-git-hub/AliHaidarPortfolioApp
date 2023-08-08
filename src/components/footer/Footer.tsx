import './Footer.scss';
import React from 'react';

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {

    return <>
        <div className="footer">
            <div className="footer-start">
                
            </div>
            <div className="footer-center">
                <img src="" title="twitter" />
                <img src="" title="linkedin" />
                <img src="" title="facebook" />
            </div>
            <div className="footer-end">
                
            </div>
        </div>
    </>
}

export default Footer;