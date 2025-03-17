function fouthWallAlert(message) {
    const re = new RegExp(".*\. (\S*) .* (!\S*) .* (\d*) .*briittybear\.com\/products\/(.*)", "gm");
    const str = "NEW GIVEAWAY - !ENTER TO WIN. Jimmy_Hustler gifted a Bear Clan Bucket Hat to the chat. Type !ENTER in the next 120 seconds for a chance to win. briittybear.com/products/bear-clan-bucket-hat";
    const myArray = re.exec(str);

    return myArray;
}