export const checkImageURL = (url) => {
    if(!url) return false 
    else{
        const pattern = new RegExp('ˆhttps?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
}