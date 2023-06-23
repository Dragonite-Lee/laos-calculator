const yellow_dollar = document.querySelector(".yellow-dollar");
const yellow_kip = document.querySelector(".yellow-kip")
const blue_won = document.querySelector(".blue-won")
const blue_kip = document.querySelector(".blue-kip")
const taxi_km = document.querySelector(".taxi-km")
const taxi_kip = document.querySelector(".taxi-kip")

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

yellow_dollar.addEventListener("change", () => {
    yellow_kip.value = yellow_dollar.value * 18000;
})

yellow_kip.addEventListener("change", () => {
    yellow_dollar.value = roundToTwo(yellow_kip.value / 18000)
})

blue_won.addEventListener("change", () => {
    blue_kip.value = roundToTwo(blue_won.value * (100/7) )
})

blue_kip.addEventListener("change", () => {
    blue_won.value = roundToTwo(blue_kip.value / 10000 * 700 )
})

taxi_km.addEventListener("change", () => {
    if (taxi_km.value < 1) {
        alert("1km이하는 걸으세용!")
    } else {
        taxi_kip.value = 20000 + roundToTwo(((taxi_km.value - 1) * 1000) / 300 * 2000)
    }
})