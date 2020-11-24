import React from "react";

const Background = (): JSX.Element => {

    return <div
        className="my-background"
        style={{
            backgroundImage: 'url("/static/images/bg.jpeg")'
        }}/>;
};

export default Background;
