const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    let splitted = frase.split(" ");
    for (let index = 0; index < splitted.length; index += 1){
        (splitted[index] == 'x') && (splitted[index] = nome);
    }
    return splitted.toString();
}
//console.log(substituaX("Little Albert"));


const minhasSkills = funcao => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let frase = `${funcao} \n Minhas três principais habilidades são:\n ${skills[0]} \n ${skills[1]} \n ${skills[2]}`;
    return frase;
}
console.log(minhasSkills(substituaX('Little B')));