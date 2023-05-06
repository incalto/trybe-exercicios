let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(object,key,value){
  object[key] = value;
}

addTurno(lesson2,'turno','noite');

//console.log(lesson2);

function getKeys(object){
  console.log(Object.keys(object));
}

//getKeys(lesson3);


function getSize(object){
  console.log((Object.keys(object).length));
}

//getSize(lesson1);

function getValues(object){
  console.log(Object.values(object));
}

//getValues(lesson1);
let allLessons = {}
allLessons.lesson1 = Object.assign({},lesson1);
allLessons.lesson2 = Object.assign({},lesson2);
allLessons.lesson3 = Object.assign({},lesson3);

//console.log(allLessons);

function getAllStudents(){
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}
//console.log(getAllStudents());

function getValueByNumber(object,key){
  
}