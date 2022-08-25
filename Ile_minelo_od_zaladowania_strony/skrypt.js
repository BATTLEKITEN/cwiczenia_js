var data = new Date();

function stop(){
    var data1 = new Date();

    console.log(data);
    console.log(data1);
    var sec = (data1 - data)/1000;
    console.log(sec);
    
    document.getElementById('sekundy').innerHTML = "Od załadowania strony minęło: " + sec + "sekund";
}