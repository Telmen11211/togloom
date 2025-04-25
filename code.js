let onoo = 0
function change(){
    let randomTal1 = Math.ceil(Math.random() * 4)
    let randomTal2 = Math.ceil(Math.random() * 4)
    let randomTal3 = Math.ceil(Math.random() * 4)
    let randomTal4= Math.ceil(Math.random() * 4)

    let shagainuud = document.getElementByTagName('img');
    shagainuud[0].src = randomTal1 + ".png";
    shagainuud[0].src = randomTal2 + ".png";
    shagainuud[0].src = randomTal3 + ".png";
    shagainuud[0].src = randomTal4 + ".png";
}