//Encontrar el numero mayor
const numeros = [2, 5, 7, 12, 3, 45, 28, 33, 109, 14, 6]
const aNumeroMayor = (mayor, numero) =>  numero > mayor ? numero : mayor
numeros.reduce(aNumeroMayor)

//Encontrar la persona con mas dinero
const personas = [
    {
        nombre: 'Juan',
        dinero: 550
    },
    {
        nombre: 'Maria',
        dinero: 1200
    },
    {
        nombre: 'Carlos',
        dinero: 889
    }
]
const aPersonaConMasDinero = (personaConMasDinero, persona) => persona.dinero > personaConMasDinero.dinero ? persona : personaConMasDinero 

persona.reduce(aPersonaConMasDinero)


//crear un unico array de lenguajes, donde no se repitan
const aLenguajes = empleade => empleade.lenguajes
const aArray = (arrayParcial, lenguajes) =>  [...arrayParcial, ...lenguajes]
const aLenguajesUnicos = (lenguajes, lenguaje) => lenguajes.includes(lenguaje) ? lenguajes : [...lenguajes, lenguaje]


empleados.map(aLenguajes)
.reduce(aArray)
.reduce(aLenguajesUnicos, [])


//Find
//Hace lo mismo que filter pero devuelve el primer elemento que pasa el filtro. 
const sabePython = empleade => empleade.lenguajes.includes('Python')

empleades.find(sabePython)


//Every devuelve true si TODOS los elementos pasan la condicion del callback. Devuelve un booleano, por lo tanto no se pueden concatenar. Es como &&

const mayorA20 = empleade => empleade.edad>=20
empleades.every(mayorA20)



//Some devuelve true si al menos uno de los elementos pasa la condicion del callback. Devuelve un booleano, por lo tanto no se pueden concatenar. Es como ||
const mayorA20 = empleade => empleade.edad>20
empleades.some(mayorA20)



//Sort permite ordenar los elementos de un array segun una condicion o comparacion. SORT MODIFICA EL ARRAY

const numeros = [4, 5, 123, 433, 23, 77, 88]
const frutas = [ 'uvas', 'manzana', 'banana', 'pera', 'naranja']

frutas.sort() //ordena alfabeticamente. A los numeros tambien los ordena alfabeticamente


//Callback del sort toma dos parametros que son dos elementos a comparar. Devuelve 3 posibles valores:
// -1 (si es negativo)->  a va a estar antes que b
// 0 -> quedan como estan
// 1 (si es positivo) -> b va a estar antes que a
const deMayorAMenor = (a,b) =>{
    return b - a

    // if (a>b){
    //     return -1
    // } else if (a<b){
    //     return 1
    // } else{
    //     return 0
    // }

}
numeros.sort(deMayorAMenor)

const deMenorAMayor = (a,b) =>{
    return a - b
    // if (a>b){
    //     return 1
    // } else if (a<b){
    //     return -1
    // } else{
    //     return 0
    // }

}

numeros.sort(deMenorAMayor)

//Ordenar los empleados por sueldo de menor a mayor

const sueldoMenor = (a, b)=>{
    return a.sueldo - b.sueldo
}

empleades.sort(sueldoMenor)

console.table(empleades)