function addPoints(operation,house){
    console.log("add to:"+house);
    switch(house){
        case "Hufflepuff":
            
            hufflePoints = localStorage.getItem(house.toString());
            operation=="+"? hufflePoints++ : hufflePoints--;
            hufflePoints <= 0 ? hufflePoints = 0 : hufflePoints;
            animarTexto("hufflepuffPoints",hufflePoints);
            console.log("Hufflepuff:" + hufflePoints);
            // Crear una clave-valor
            localStorage.setItem(house.toString(), hufflePoints);
            break;
        case "Ravenclaw":
            ravenPoints = localStorage.getItem(house.toString());
            operation=="+"? ravenPoints++ : ravenPoints--;
            ravenPoints <= 0 ? ravenPoints = 0 : ravenPoints;
            animarTexto("ravenclawPoints",ravenPoints);
            console.log("Ravenclaw:" + ravenPoints);
            localStorage.setItem(house.toString(), ravenPoints);
            break;
        case "Gryffindor":
            gryfPoints = localStorage.getItem(house.toString());
            operation=="+"? gryfPoints++ : gryfPoints--;
            gryfPoints <= 0 ? gryfPoints = 0 : gryfPoints;
            animarTexto("gryffindorPoints",gryfPoints);
            console.log("Gryffindor:" + gryfPoints);
            localStorage.setItem(house.toString(), gryfPoints);
            break;
        case "Slytherin":
            slythPoints = localStorage.getItem(house.toString());
            operation=="+"? slythPoints++ : slythPoints--;
            slythPoints <= 0 ? slythPoints = 0 : slythPoints;
            animarTexto("slytherinPoints",slythPoints);
            console.log("Slytherin:" + slythPoints);
            localStorage.setItem(house.toString(), slythPoints);
            break;
        default:
            break;
    }
}

function clearPoints(){
    localStorage.clear();
    console.log("Local Storage Cleared");
    let hufflePoints=0, gryfPoints=0, slythPoints=0, ravenPoints=0;
    document.getElementById("slytherinPoints").innerHTML = slythPoints;
    document.getElementById("gryffindorPoints").innerHTML = gryfPoints;
    document.getElementById("ravenclawPoints").innerHTML = ravenPoints;
    document.getElementById("hufflepuffPoints").innerHTML = hufflePoints;


}
function onLoadPage(){
    console.log("on load");
    let hufflePoints=0, gryfPoints=0, slythPoints=0, ravenPoints=0;
    localStorage.getItem('Slytherin') > 0 ? slythPoints = localStorage.getItem('Slytherin') : slythPoints = 0;
    document.getElementById("slytherinPoints").innerHTML = slythPoints;
    localStorage.getItem('Gryffindor') > 0 ? gryfPoints = localStorage.getItem('Gryffindor') : gryfPoints = 0;
    document.getElementById("gryffindorPoints").innerHTML = gryfPoints;
    localStorage.getItem('Ravenclaw') > 0 ? ravenPoints = localStorage.getItem('Ravenclaw') : ravenPoints = 0;
    document.getElementById("ravenclawPoints").innerHTML = ravenPoints;
    localStorage.getItem('Hufflepuff') > 0 ? hufflePoints = localStorage.getItem('Hufflepuff') : hufflePoints = 0;
    document.getElementById("hufflepuffPoints").innerHTML = hufflePoints;
    
}

function animarTexto(id, valor) {
    document.getElementById(id).innerHTML = valor;
    const texto = document.getElementById(id);
    texto.classList.add('animado');
    setTimeout(() => {
      texto.classList.remove('animado');
    }, 600)
}
/*
// Eliminar una clave
localStorage.removeItem('key');

// Eliminar todas las claves
localStorage.clear();
 */




