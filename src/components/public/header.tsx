import React from "react";

import { useEffect, useRef } from 'react'

export interface HeaderProp {
    title: string
}

const Header = (prop: HeaderProp): JSX.Element => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    useEffect(()=>{
        function yearPastPercent(){
            const year = new Date().getFullYear();
            const tDay = ( year%4==0 && year%100!=0 || year%400==0 )? 366 : 365;
            const n1 = Date.parse((new Date(year,1-1,1)).toDateString());
            const n2 = Date.parse((new Date()).toDateString());
            const pDay = (n2-n1)/(1000 * 60 * 60 * 24);
            return Math.ceil(pDay/tDay*10000)/100;
        }

        const percent = yearPastPercent();
        headerRef.current.style.setProperty('--time-percent', (percent / 100).toString());
        headerRef.current.attributes["time-str"].nodeValue = `今年已经虚度了 ${percent} %`;
    })

    return (<header className="my-header">
        <h1 ref={headerRef} className="my-header-title" time-str="今年已经虚度了 50%" style={{
            [ "--time-percent" as any]: 0.5,
        }}>Zeka 的记事本</h1>
        <span className="my-header-sub">{prop.title}</span>
    </header>);
};

export default Header;
