import React from "react";
import { graphql } from 'gatsby';

import SEO from "../components/public/seo";
import Header from "../components/public/header";

interface IAboutProps {
    markdownRemark: {
        html: string
    }
}

const AboutContent = ({ content }:{
    content: string
}): JSX.Element => {

    return (<div dangerouslySetInnerHTML={{
        __html: content,
    }}>
    </div>);
};

const About = ({ data }:{
    data: IAboutProps
}): JSX.Element => {
    return (<>
        <SEO title="关于" />
        <Header title="关于" />
        <AboutContent content={data.markdownRemark.html}/>
    </>);
};

export default About;

export const AboutQuery = graphql`query About {
  markdownRemark(frontmatter: {title: {eq: "about.md"}}) {
    html
  }
}
`;
