function ImageRandomizer(){
    var listOfImages =[];
    listOfImages = importAll(require.context('../Assets/', false, /\.(png|jpe?g|svg)$/));
    console.log(listOfImages);
    return listOfImages;
}

 function importAll(r) {
    return r.keys().map(r);
}


export default ImageRandomizer;