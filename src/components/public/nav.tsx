import React from "react";

import { Link } from "gatsby";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faLink, faArchive, faCat } from '@fortawesome/free-solid-svg-icons'

const Nav = (): JSX.Element => {

    return (<nav className="my-nav">
            <input id="menu" name="menu" type="checkbox" className="my-nav-toggle" />
            <label  id="sb-eslint" className="my-nav-avatar" htmlFor="menu"></label>
            <label id="sb-eslint2" className="my-nav-mask" htmlFor="menu"></label>
            <ul className="my-nav-menu">
                <li><Link to="/"><span className="icon"><FontAwesomeIcon icon={faHome} /></span>首页</Link></li>
                <li><Link to="/about"><span className="icon"><FontAwesomeIcon icon={faLink} /></span>关于</Link></li>
                <li><Link to="/friends"><span className="icon"><FontAwesomeIcon icon={faCat} /></span>友链</Link></li>
                <li><Link to="/archive"><span className="icon"><FontAwesomeIcon icon={faArchive} /></span>归档</Link></li>
            </ul>
        </nav>);
};

export default Nav;
