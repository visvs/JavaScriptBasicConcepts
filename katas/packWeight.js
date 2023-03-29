const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {

    const packWeight = packOfGifts.reduce((weight, currentGift)=>{
      return weight += currentGift.length;
    }, 0)

    const supportWeight = reindeers.reduce((weight, currentItem)=>{
        return weight += currentItem.length * 2;
      }, 0)

    return parseInt(supportWeight / packWeight)
}



console.log(distributeGifts(packOfGifts, reindeers))