function getRandomNumber(size) {

    let num = Math.floor(Math.random() * size);
    return num;
}
// Розраховує відстань від кліку (event) до скарбу (target)
function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    const dist = Math.sqrt((diffX * diffX) + (diffY * diffY))
    return dist;
}

function getDistanceHind(distance) {
    if (distance < 10) {
        return "Пече!";
    } else if (distance < 20) {
        return "Дуже гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Можно замерзнути!";
    }
}

const width = 400;
const height = 400;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

const mapElement = document.getElementById("map");
mapElement.addEventListener("click", (event) => {
    click++;
    // console.log(click);

    const distance = getDistance(event, target);
    const distanceHind = getDistanceHind(distance);

    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHind;

    if (distance < 8) {
        alert("You are win!")
    }
});