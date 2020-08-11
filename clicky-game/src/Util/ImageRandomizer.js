class ImageUtil{
    listOfImages = [];
    imageClickedTracker = [];
    getImage() {
        this.listOfImages = this.importAll(require.context('../Assets/', false, /\.(png|jpe?g|svg)$/));
        for(let i of this.listOfImages){
            let imageTrack = {};
            imageTrack[i] = false;
            //console.log(i);
            this.imageClickedTracker.push(imageTrack[i]);
        }
        //console.log(this.imageClickedTracker);
        return this.listOfImages;
    }
    ImageRandomizer() {
        let randomChoice = Math.floor(Math.random() * this.listOfImages.length);
        return randomChoice;
    }
    importAll(r) {
        console.log(r);
        return r.keys().map(r);
    }
    shuffleImages() {
        let i = this.listOfImages.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = this.listOfImages[i];
          this.listOfImages[i] = this.listOfImages[j];
          this.listOfImages[j] = temp;
        }
        return this.listOfImages;
      }
    

}

let imageUtil = new ImageUtil()
export default imageUtil;