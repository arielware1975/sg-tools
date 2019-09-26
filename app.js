// Calcular cambio de tasas
// Autor: Ariel Garcia
// Fecha: 25/09/2019

const unitTime = 360;

let getEffectiveRateFromNominalRate = (nominalRate, daysRateExpressed, capitalizationPeriod) => {

    let potencia = daysRateExpressed / capitalizationPeriod;
    let base = 1 + (nominalRate * capitalizationPeriod / unitTime);

    effectiveRate = (Math.pow(base, potencia) - 1) * 100;

    return effectiveRate;
}

let getNominalRateChangeRateDaysExpressed = (nominalRate, daysRateExpressed, capitalizationPeriod) => {

    let potencia = daysRateExpressed / capitalizationPeriod;
    let base = 1 + (nominalRate * capitalizationPeriod / unitTime);

    // Nominal rate with diferent rate days expressed
    rate = (Math.pow(base, potencia) - 1) * (unitTime / daysRateExpressed) * 100;

    return rate;
}

console.log((getEffectiveRateFromNominalRate(0.12, 360, 60)).toFixed(2));

console.log((getNominalRateChangeRateDaysExpressed(0.12, 360, 360)).toFixed(2));