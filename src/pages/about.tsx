import React from "react";

import SEO from "../components/public/seo";
import Header from "../components/public/header";

const AboutContent = (): JSX.Element => {

    return (<>
        <p>Zeka 喜欢 kemomimi！</p>
        <p>Zeka 喜欢不务正业！</p>
    </>);
};

const About = (): JSX.Element => {
    return (<>
        <SEO title="关于" />
        <Header title="关于" />
        <AboutContent />
    </>);
};

export default About;
