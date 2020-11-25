import React, {useEffect, useRef} from "react";

const BLANK_IMG = '/static/images/blank.jpg';

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
                imageEle.current.classList.add('my-lazy-image__active')
                imageIo.disconnect();
            }
        });

        imageIo.observe(imageEle.current);
        return ()=>{
            imageIo.disconnect();
        }
    })
     return (<img ref={imageEle} className={prop.className + ' my-lazy-image'} alt={(prop.alt !== null)?prop.alt: prop.src} src={prop.src} srcSet={BLANK_IMG}  />);
};

export default MyImage;
