import React, { useState, useEffect } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

function scroll2Position(isTop=false){
    if (isTop){
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.body.scrollHeight)
    }
}

function getPercent() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop) / (docHeight - winHeight);

    return Math.round(scrollPercent * 100);
}

const Tools = (): JSX.Element => {

    const [ isActive, setIsActive ] = useState(false);
    const [ percent, setPercent ] = useState(0);

    useEffect(()=>{
        const scrollEvt = () => {
            setPercent(getPercent());
        };

        window.addEventListener("scroll", scrollEvt);
        return ()=>{
            window.removeEventListener('scroll', scrollEvt);
        }
    }, []);

    return (<div className="side-tool-wrap">
        <div className="side-tool-main" onClick={()=>{setIsActive(!isActive)}}>
            {percent}%
            <div className={`side-tool-items ${isActive?'active': null}`}>
                <span className="side-tool-item" onClick={()=>scroll2Position(true)}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="side-tool-item">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <span className="side-tool-item" onClick={()=>scroll2Position(false)}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>
        </div>
    </div>);
}

export default Tools;
