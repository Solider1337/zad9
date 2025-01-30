let indexZdjecia = 1;
function poprzednie() {
    obecne = document.getElementById("aktywne");
    indexZdjecia -= 1;
    if(indexZdjecia<1){
        indexZdjecia=7;
    }
    obecne.innerHTML = `
    <img src="` + indexZdjecia + `.jpg" alt="Aktywne zdjęcie" >
    `;
}

function nastepne() {
    obecne = document.getElementById("aktywne");
    indexZdjecia += 1;
    if(indexZdjecia>7){
        indexZdjecia=1;
    }
    obecne.innerHTML = `
    <img src="` + indexZdjecia + `.jpg" alt="Aktywne zdjęcie" >
    `;
}