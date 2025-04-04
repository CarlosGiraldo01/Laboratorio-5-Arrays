let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]
console.log(frutas);

frutas.sort();
console.log(frutas);

function singularAPlural(palabra) {
   palabra = palabra + "s"
    return palabra
}

let FrutasMayus = []
for (const fruta of frutas) {

    FrutasMayus.push(singularAPlural(fruta))
    Frutas.endsWith('s')
}
console.log(FrutasMayus);