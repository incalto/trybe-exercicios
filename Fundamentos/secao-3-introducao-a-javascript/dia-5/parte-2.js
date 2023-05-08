let ligado = false;
const onOff = bool => ligado = bool;
//console.log(onOff(true));



const circleArea = radius => radius ** 2 * Math.PI;
//console.log(circleArea(3));


const longestWord = string => {
    let splitted = string.split(" ");
    let longestW = splitted[0];
    for (let word of splitted){
        if (word.length >= longestW.length) longestW = word;
    }
    return longestW;
}
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));