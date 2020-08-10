class ImageUtil{
    listOfImages = [];
    getImage() {
        this.listOfImages = this.importAll(require.context('../Assets/', false, /\.(png|jpe?g|svg)$/));
        return this.listOfImages;
    }
    ImageRandomizer() {
        let randomChoice = Math.floor(Math.random() * this.listOfImages.length);
        return randomChoice;
    }
    importAll(r) {
        return r.keys().map(r);
    }
    

}

let imageUtil = new ImageUtil()
export default imageUtil;