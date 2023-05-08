const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    let splitted = frase.split(" ");
    for (let index = 0; index < splitted.length; index += 1){
        (splitted[index] == 'x') && (splitted[index] = nome);
    }
    return splitted.toString();
}
console.log(substituaX("Little Albert"));