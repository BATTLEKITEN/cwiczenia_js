function wypelnij() {
    var x = document.getElementById('in1').value;
    var y = document.getElementById('wypelnienie');
    document.getElementById('tekst').innerHTML="Zapełniono w "+x+"%";
    if(x>=0){
        y.style.width=x+'%';
        y.style.backgroundColor='red';
    }
    if(x>15){
        y.style.width=x+'%';
        y.style.backgroundColor='orange';
    }
    if(x>50){
        y.style.width=x+'%';
        y.style.backgroundColor='yellow';
    }
    if(x>75){
        y.style.width=x+'%';
        y.style.backgroundColor='green';
    }
    
}

function koloruj(){
    var r = document.getElementById('r').value;
    var g = document.getElementById('g').value;
    var b = document.getElementById('b').value;

    var kwadrat = document.getElementById('kw');

    kwadrat.style.backgroundColor="rgb("+r+","+g+","+b+")"
    
    var redpasek = document.getElementById('rw');
    var greenpasek = document.getElementById('gw');
    var bluepasek = document.getElementById('bw');

    redpasek.style.height=r+'vh';
    greenpasek.style.height=g+'vh';
    bluepasek.style.height=b+'vh';

    return "rgb("+r+","+g+","+b+")";
}

var kolor1
function koloruj1(){
    kolor1 = koloruj();
    document.getElementById('bkolor1').style.backgroundColor = kolor1;
}

var kolor2
function koloruj2() {
    kolor2 = koloruj();
    document.getElementById('bkolor2').style.backgroundColor = kolor2;
}

function gradient() {
    console.log(kolor1);
    console.log(kolor2);
    var deg = document.getElementById('deg').value;
    console.log(deg);

    document.getElementById('gradientwypelnienie').style.background = "linear-gradient("+deg+"deg,"+kolor1+","+kolor2+")";
    document.getElementById('wynik').innerHTML = "linear-gradient("+deg+"deg,"+kolor1+","+kolor2+")";
    document.getElementById('bodytest').style.background = "linear-gradient("+deg+"deg,"+kolor1+","+kolor2+")";
    return "linear-gradient("+deg+"deg,"+kolor1+","+kolor2+")";
}
