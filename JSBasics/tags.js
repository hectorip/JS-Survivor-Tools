// tag: función que transforma un template string



function html(literals, ...substitutions){
    console.log(literals);
    console.log(substitutions);

    console.log(literals.length == substitutions.length + 1); // función que emule las string literal puro
    // ["body class=\"", "\""]
    // ["no-overflow"];
    return "<" + literals[0] + substitutions[0] + literals[1] + substitutions[1] + literals[2] + ">";

}

let clase = "no-overflow";
let id = "el-cuerpo";


let mi_string = html`body class="${clase}" id="${id}"`; // <body class="no-overflow">
let mi_ps = html`p class="${clase}" id="${id}"`; // <body class="no-overflow">
console.log(mi_string);
console.log(mi_ps);

"un texto \
multilinea "

let mi_texto_multinlinea = [
    "linea 1",
    "linea 2",
    "linea 3"
].join("")

console.log(`
    esto es 
            un texto
            multilinea
    linea 4
`);

console.log(String.raw`texto\nmultilinea`);



function c(literals, ...substitutions){
    console.log(literals);
    console.log(substitutions);
    return 'holi';
}
let holi = c`${id}`;
// DSL - Domain specific Language

function emoji(literals){
    console.log(literals);
    result = "";
    let emojis = {
        "holi": "o/",
        "bye": "\\o/",
        "lol": ":D"
    }
    for (word of literals[0].split(" ")){
        result += emojis[word] + " ";
    }
    return result;
}


let my_emojis = emoji`holi bye lol`;
console.log(my_emojis);





