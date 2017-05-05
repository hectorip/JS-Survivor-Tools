

// Expresiones Regulares
// soportan surrogate pairs

let my_emoji = "😡";
let reg_exp = /^.$/u ; // y => sticky regular expresssion, u => unicode regular expressions
console.log(reg_exp.test(my_emoji));
console.log(reg_exp.test("a"));

// a => a
// ab => ab
// a+ => a, aa, aaaa, aaaaaaa, aaaaa....
// .+ => aslkdnalksdj, aslkdnaslkdn, aoksdnlasndjabsdkjas, asjdbkasjbdkjas, jaksdjas, jksan
// \(.+\) => (asndkjasn), (sd,nalsdnks) aslkdlask)
// ^ => inicio de cadena
// $ => final de cadena

// ^a+$ => aa, aaaa, aaaa, aa, "aaaaaa nbbbb"

let mi_cadena = "hombres necios que acusais a la mujer, sin razón";
console.log(mi_cadena.includes("q"));
console.log(mi_cadena.startsWith("n", 8));
console.log(mi_cadena.endsWith("s", 7));
console.log(mi_cadena.lastIndexOf("s"));