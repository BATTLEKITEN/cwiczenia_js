var znak = 1;
var punktyX = 0;
var punktyO = 0;

document.getElementById('wynikX').innerHTML="Punkty gracza X: " + punktyX;
document.getElementById('wynikO').innerHTML="Punkty gracza O: " + punktyO;

function pole(x) {
        if(czy_puste(x) && czy_wygrana()!=true){
            if(znak%2==1){
                document.getElementById(x).innerHTML='X';
                //document.getElementById(x).style.backgroundImage="url('x.png')";
            }
            else{
                document.getElementById(x).innerHTML="O";
                //document.getElementById(x).style.backgroundImage="url('o.png')";
            }
            znak=znak+1
        if(czy_wygrana()){
            punkty();
        };

    }  
}

function punkty(){
    document.getElementById('wynikX').innerHTML="Punkty gracza X: "+punktyX;
    document.getElementById('wynikO').innerHTML="Punkty gracza O: "+punktyO;
}

function czy_wygrana() {
    var val_p1 = document.getElementById('k1').innerHTML;
    var val_p2 = document.getElementById('k2').innerHTML;
    var val_p3 = document.getElementById('k3').innerHTML;
    var val_p4 = document.getElementById('k4').innerHTML;
    var val_p5 = document.getElementById('k5').innerHTML;
    var val_p6 = document.getElementById('k6').innerHTML;
    var val_p7 = document.getElementById('k7').innerHTML;
    var val_p8 = document.getElementById('k8').innerHTML;
    var val_p9 = document.getElementById('k9').innerHTML;
    //xxx
    //---
    //---
    if(val_p1=='X' && val_p2=='X' && val_p3=='X')
    {
        console.log('wygranaX123');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k2').style.backgroundColor='red';
        document.getElementById('k3').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p1=='O' && val_p2=='O' && val_p3=='O')
    {
        console.log('wygranaO123');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k2').style.backgroundColor='red';
        document.getElementById('k3').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //---
    //xxx
    //---
    if(val_p4=='X' && val_p5=='X' && val_p6=='X')
    {
        console.log('wygranaX456');
        document.getElementById('k4').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k6').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p4=='O' && val_p5=='O' && val_p6=='O')
    {
        console.log('wygranaO456');
        document.getElementById('k4').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k6').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //---
    //---
    //xxx
    if(val_p7=='X' && val_p8=='X' && val_p9=='X')
    {
        console.log('wygranaX789');
        document.getElementById('k7').style.backgroundColor='red';
        document.getElementById('k8').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p7=='O' && val_p8=='O' && val_p9=='O')
    {
        console.log('wygranaO789');
        document.getElementById('k7').style.backgroundColor='red';
        document.getElementById('k8').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //x--
    //x--
    //x--
    if(val_p1=='X' && val_p4=='X' && val_p7=='X')
    {
        console.log('wygranaX147');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k4').style.backgroundColor='red';
        document.getElementById('k7').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p1=='O' && val_p4=='O' && val_p7=='O')
    {
        console.log('wygranaO147');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k4').style.backgroundColor='red';
        document.getElementById('k7').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //-x-
    //-x-
    //-x-
    if(val_p2=='X' && val_p5=='X' && val_p8=='X')
    {
        console.log('wygranaX258');
        document.getElementById('k2').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k8').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p2=='O' && val_p5=='O' && val_p8=='O')
    {
        console.log('wygranaO258');
        document.getElementById('k2').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k8').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //--x
    //--x
    //--x
    if(val_p3=='X' && val_p6=='X' && val_p9=='X')
    {
        console.log('wygranaX369');
        document.getElementById('k3').style.backgroundColor='red';
        document.getElementById('k6').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p3=='O' && val_p6=='O' && val_p9=='O')
    {
        console.log('wygranaO369');
        document.getElementById('k3').style.backgroundColor='red';
        document.getElementById('k6').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //x--
    //-x-
    //--x
    if(val_p1=='X' && val_p5=='X' && val_p9=='X')
    {
        console.log('wygranaX159');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p1=='O' && val_p5=='O' && val_p9=='O')
    {
        console.log('wygranaO159');
        document.getElementById('k1').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k9').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
    //--x
    //-x-
    //x--
    if(val_p3=='X' && val_p5=='X' && val_p7=='X')
    {
        console.log('wygranaX357');
        document.getElementById('k3').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k7').style.backgroundColor='red';
        punktyX +=1;
        return true;
    }
    if(val_p3=='O' && val_p5=='O' && val_p7=='O')
    {
        console.log('wygranaO357');
        document.getElementById('k3').style.backgroundColor='red';
        document.getElementById('k5').style.backgroundColor='red';
        document.getElementById('k7').style.backgroundColor='red';
        punktyO +=1;
        return true;
    }
}


function sprawdz() {
    var arr = new Array(new Array(3),new Array(3),new Array(3));
    var k=1;
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j]=document.getElementById('k'+ k).innerHTML;
            console.log('k'+k);
            console.log(document.getElementById('k' + k).innerHTML);
            k++;
            
        }
    }
   
    console.log(arr);

}

function czy_puste(x) {
    if(document.getElementById(x).innerHTML==""){
        return true;
    }
    else{
        return false;
    }
}

function czysc() {
    document.getElementById('k1').innerHTML="";
    document.getElementById('k2').innerHTML="";
    document.getElementById('k3').innerHTML="";
    document.getElementById('k4').innerHTML="";
    document.getElementById('k5').innerHTML="";
    document.getElementById('k6').innerHTML="";
    document.getElementById('k7').innerHTML="";
    document.getElementById('k8').innerHTML="";
    document.getElementById('k9').innerHTML="";
    document.getElementById('k1').style.backgroundColor="white";
    document.getElementById('k2').style.backgroundColor="white";
    document.getElementById('k3').style.backgroundColor="white";
    document.getElementById('k4').style.backgroundColor="white";
    document.getElementById('k5').style.backgroundColor="white";
    document.getElementById('k6').style.backgroundColor="white";
    document.getElementById('k7').style.backgroundColor="white";
    document.getElementById('k8').style.backgroundColor="white";
    document.getElementById('k9').style.backgroundColor="white";
}

function odnowa(){
    czysc()
    punktyX = 0;
    punktyO = 0;
    document.getElementById('wynikX').innerHTML="Punkty gracza X: " + punktyX;
    document.getElementById('wynikO').innerHTML="Punkty gracza O: " + punktyO;
}