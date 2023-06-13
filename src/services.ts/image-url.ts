import noImg from "../assets/vadim-bogulov-5vHwwSndck8-unsplash.jpg"


const croppedImage = (url:string) =>{

    if(!url) return noImg;
    const targetString ='media/';
    const index=url.indexOf(targetString)+targetString.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);

}


export default croppedImage