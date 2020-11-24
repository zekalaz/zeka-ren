import React from "react";

import { graphql, StaticQuery } from 'gatsby'
import {IAudioItem, IAudioQuery} from "../../types/query/audio";

const ReactAplayer = React.lazy(()=>
    import('react-aplayer')
);

const MyAplayer = ({ audio }: {audio: IAudioItem[]}): JSX.Element => {


    const onInit = () => {
        (document.querySelector('.aplayer-info') as HTMLElement).style.display = "inherit"
    }

    const props = {
        theme: '#F57F17',
        fixed: true,
        listFolded: true,
        mini: false,
        audio,
    };

    return (<ReactAplayer
            {...props}
            onInit={onInit}
        />);
};

const APlayer = (): JSX.Element => {

    const isSSR = typeof window === "undefined"

    // @ts-ignore
    return (<StaticQuery query={graphql`query AudioAll {
  audioJson {
    audio {
      artist
      cover
      name
      theme
      url
    }
  }
}`} render={(data: IAudioQuery)=>{
            return  !isSSR && (
                <React.Suspense fallback={<div />}>
                    <MyAplayer audio={data.audioJson.audio} />
                </React.Suspense>
            )
        }
        }>
        </StaticQuery>);
};

export default APlayer;
