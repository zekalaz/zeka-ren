import React, {useEffect, useRef} from "react";

export interface IMyImage {
    className?: string
    alt?: string
    src: string,
    srcSet: string,
    thumbnail?: string
}


const MyImage = (prop: IMyImage): JSX.Element => {

    const imageEle = useRef<HTMLImageElement>(null);
    useEffect(()=>{
        const imageIo = new IntersectionObserver(entries=>{
            const [ imageEntry ] = entries;
            if (imageEntry.isIntersecting) {
                imageEle.current.srcset = prop.srcSet;
                imageIo.disconnect();
            }
        });

        imageIo.observe(imageEle.current);
        return ()=>{
            imageIo.disconnect();
        }
    })
     return (<img ref={imageEle} className={prop.className + ' my-lazy-image'} alt={(prop.alt !== null)?prop.alt: prop.src} src={prop.src} srcSet=""  />);
};

export default MyImage;
