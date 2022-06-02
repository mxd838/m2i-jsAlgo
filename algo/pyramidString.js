const read = require('readline-sync');


const hauteurPyramide = read.questionInt('Hauteur de la pyramide: ')

let display = ''

let espace = ' '
for(let i = 0; i <= hauteurPyramide ; i++){
    espace += ' '
}

let etoiles = '*'
for(let i = 0; i < hauteurPyramide; i++){
    display = espace + etoiles
    console.log(display)
    etoiles += '**'
    espace = espace.substring(0, espace.length - 1)
}