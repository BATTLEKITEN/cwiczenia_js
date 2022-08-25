function zad1(){
    var napis = document.getElementById('napis').value;
    var dlugosc = napis.length;
    document.getElementById('wynik').innerHTML = "Długość napisu '" + napis + "' wynosi: " + dlugosc;
}

function zad2(){
    var napis = document.getElementById('napis').value;
    var pierwsza = napis.substr(0,1);
    var ostatnia = napis.substr(-1,1);
    document.getElementById('wynik').innerHTML = "Pierwsza litera napisu '" + napis + "' to '" + pierwsza + "' a ostatnia litera to '" + ostatnia +"'";

}

function zad3(){
    var napis = document.getElementById('napis').value;
    var kodpierwszy = napis.charCodeAt(0);
    document.getElementById('wynik').innerHTML = "Kod pierwszego znaku napisu '" + napis + "' to '" + kodpierwszy + "'";
}

function zad4(){
    var napis = document.getElementById('napis').value;
    var wielkie = napis.toUpperCase();
    document.getElementById('wynik').innerHTML = wielkie;
}

function zad5(){
    var napis = document.getElementById('napis').value;
    if(napis.indexOf("tak") == -1){
        document.getElementById('wynik').innerHTML = "Napis '" + napis + "' nie ma w sobie słowa 'tak'";
    }
    else{
        document.getElementById('wynik').innerHTML = "W napisie '"+napis+"' słowo 'tak' rozpoczyna się od " + (napis.indexOf("tak")+1) + ' miejsca';
    }
}

function zad6(){
    var napis = document.getElementById('napis').value;
    var wielkie = napis.toUpperCase();
    document.getElementById('wynik').innerHTML = wielkie;
}

function zad7(){
    var napis = document.getElementById('napis').value;
    if(napis.indexOf("tak") == -1){
        document.getElementById('wynik').innerHTML = "Napis '" + napis + "' nie ma w sobie słowa 'tak'";
    }
    else{
        document.getElementById('wynik').innerHTML = napis.replace("tak", "nie");
    }
}

function zad8(){
    var napis = document.getElementById('napis').value;
    var dlugosc = napis.length;
    var dlugoscduze = false;
    var cyfra = false;
    for (let i = 0; i <= dlugosc; i++) {
        if(napis.length >= 7 && napis.charCodeAt(i) >= 64 && napis.charCodeAt(i) <= 90){
            var dlugoscduze = true;
        }
    }
    if(dlugoscduze == true){
        for (let i = 0; i <= dlugosc; i++) {
            if(napis.charCodeAt(i) >= 48 && napis.charCodeAt(i) <= 57){
                var cyfra = true;
            }
        }
    }

    if(cyfra == true){
        for (let i = 0; i <= dlugosc; i++) {
            if(napis.charCodeAt(i) >= 97 && napis.charCodeAt(i) <= 122){
                document.getElementById('wynik').innerHTML = "Hasło jest silne";
            }
        }
    }
}