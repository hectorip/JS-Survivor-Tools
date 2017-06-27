// Shadowing(sobreposición) de  variables

((multiplicador) => 
    (factor) => 
        (multiplicador) =>
            multiplicador * factor)(2)(3)(4) // ¿Qué multiplicador se toma en cuenta? ¿El primero o el segundo?

// 12 => La segunda variable multiplicador "eclipsa" la que está en el scope superior

// functiones equivalentes, se nota la diferencia gracias a la sintaxis simplificada de las
// arrow functions
const productorMultiplicadores = function(multiplicador){
    return(function(factor){
        return function(multiplicador){
            return multiplicador * factor
        }
    })
};

productorMultiplicadores(5)(6)(7)