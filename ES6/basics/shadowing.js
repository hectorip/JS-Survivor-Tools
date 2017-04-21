// Shadowing variables

((multiplicador) => 
    (factor) => 
        (multiplicador) =>
            multiplicador * factor)(2)(3)(4) // ¿Qué multiplicador se toma en cuenta? El primero o el segundo?

// 12 => La segunda variable multiplicador "eclipsa" la que está en el scope superior

const productorMultiplicadores = function(multiplicador){
    return(function(factor){
        return function(multiplicador){
            return multiplicador * factor
        }
    })
};