let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem);

info['recorrente'] = 'Sim';
console.log("-----");
for (let key in info){
  console.log(key);
}

console.log("-----");
for (let key in info){
  console.log(info[key]);
}

console.log("-----");
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
for (key in info){
  console.log(info[key] + ' e ' + info2[key]);
}