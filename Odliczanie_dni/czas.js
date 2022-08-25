function zegar(){
    var data = new Date();
    var rok = data.getFullYear();
    var miesiac = data.getMonth()+1;
    var dzien = data.getDate();

    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();

    document.getElementById('data').innerHTML=rok + "." + miesiac + "." + dzien + " | " + godzina + ":" + minuta + ":" + sekunda;
    setInterval('zegar()', 1000);
}

function odlicz(){
    var data = new Date();
    var pobranadata = document.getElementById('pdata').value;
    var dataa = new Date(pobranadata);
    console.log(dataa);
    
    if(data.getDay()==3){
        console.log("środa");
    }
    milisec = dataa - data;
    console.log(milisec);
    var dni = Math.floor(milisec/86400000)+1
    document.getElementById('iledni').innerHTML = "Do " + pobranadata + " pozostało " + dni + " dni.";


    var dni1 = data.getDate();
    var dni2 = dataa.getDate();

    var iledni = dni2 - dni1;
    console.log(iledni);

}


function oblicz() {
    var data = new Date();
    var pobranadata = document.getElementById('pdata').value;
    var data1 = new Date(pobranadata);

    mili = data1-data;

    var dni = Math.floor(mili/86400000)+1;
    console.log(dni);

    var urodziny = new Date(2002,2,14);
    console.log(urodziny);
    
}