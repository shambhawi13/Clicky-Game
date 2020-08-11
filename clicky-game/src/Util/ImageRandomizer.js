class ImageUtil{
    listOfImages = [];
    imageClickedTracker = [];
    getImage() {
        this.listOfImages = this.importAll(require.context('../Assets/', false, /\.(png|jpe?g|svg)$/));
        //console.log(this.imageClickedTracker);
        return this.listOfImages;
    }
    getImagesNames = () => {
        const r = require.context('../Assets/', false, /\.(png|jpe?g|svg)$/);      
        // return an array list of filenames (with extension)
        const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);
        console.log(importAll(r));
        for(let i of importAll(r)){
            let imageTrack = {};
            imageTrack[i] = false;
            this.imageClickedTracker.push(imageTrack);
        }
        console.log(this.imageClickedTracker);
        return importAll(r);
      };
    ImageRandomizer() {
        let randomChoice = Math.floor(Math.random() * this.listOfImages.length);
        return randomChoice;
    }
    importAll(r) {
        return r.keys().map(file => file.match(/[^\/]+$/)[0]);
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
imageUtil.getImagesNames();
export default imageUtil;