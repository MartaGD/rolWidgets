let hufflePoints, gryfPoints, slythPoints, ravenPoints;

window.addEventListener('storage', function(e) {  
    console.log("Key: " + e.key);
    console.log("Old value: " + e.oldValue);
    console.log("New value: " + e.newValue);
    console.log("Url: " + e.url);
    console.log("Storage area: " + JSON.stringify(e.storageArea));
});

function addPoints(operation,house){
    console.log("add to:"+house);
    switch(house){
        case "Hufflepuff":
            hufflePoints = localStorage.getItem(house.toString());
            operation=="+"? hufflePoints++ : hufflePoints--;
            document.getElementById("hufflepuffPoints").innerHTML = hufflePoints;
            console.log("Hufflepuff:" + hufflePoints);
            // Ontener el valor de una clave
            
            // Crear una clave-valor
            localStorage.setItem(house.toString(), hufflePoints);
            break;
        case "Ravenclaw":
            ravenPoints = localStorage.getItem(house.toString());
            ravenPoints++;
            document.getElementById("ravenclawPoints").innerHTML = ravenPoints;
            console.log("Ravenclaw:" + ravenPoints);
            localStorage.setItem(house.toString(), ravenPoints);
            break;
        case "Gryffindor":
            gryfPoints = localStorage.getItem(house.toString());
            gryfPoints++;
            document.getElementById("gryffindorPoints").innerHTML = gryfPoints;
            console.log("Gryffindor:" + gryfPoints);
            localStorage.setItem(house.toString(), gryfPoints);
            break;
        case "Slytherin":
            slythPoints = localStorage.getItem(house.toString());
            slythPoints++;
            document.getElementById("slytherinPoints").innerHTML = slythPoints;
            console.log("Slytherin:" + slythPoints);
            localStorage.setItem(house.toString(), slythPoints);
            break;
        default:
            break;
    }
}



function onChangePoints(){
console.log("works");
}

function onLoadPage(){
    slythPoints = localStorage.getItem('Slytherin');
    gryfPoints = localStorage.getItem('Gryffindor');
    ravenPoints = localStorage.getItem('Ravenclaw');
    hufflePoints = localStorage.getItem('Hufflepuff');


}



