
let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandía', 'kiwi', 'naranja'];
console.log('Arreglo original:', frutas);

frutas.sort();
console.log('Ordenado alfabéticamente:', frutas);

function SingularAPlural(palabra) {
    if (!palabra.endsWith('s')) {
        return palabra + 's';
    }
    return palabra;
}

let frutasPlural = [];
for (let fruta of frutas) {
    frutasPlural.push(SingularAPlural(fruta));
}
console.log('Frutas plural:', frutasPlural);

function existeFruta(fruta) {
    return frutas.includes(fruta);
}
console.log('¿Existe uva?', existeFruta('uva')); 
console.log('¿Existe mango?', existeFruta('mango')); 

let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log('Frutas cortas (<= 4 letras):', frutasCortas);


function eliminaFruta(fruta) {
    let index = frutas.indexOf(fruta);
    if (index !== -1) {
        frutas.splice(index, 1); 
        return frutas;
    } else {
        return false; 
    }
}
console.log('Eliminar kiwi:', eliminaFruta('kiwi'));
console.log('Eliminar mango:', eliminaFruta('mango'));

console.log('Arreglo final:', frutas);