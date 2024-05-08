const generateAlt = (img) => {
    const arr = img.split('/');
    return arr[arr.length - 1].split('.')[0];
}

export default generateAlt;