// function that displays the value








function dis(val){
    document.getElementById('result').value += val
    
}

function myFunction(event){
    if(event.key == '0' || event.key=='1'|| event.key=='2' ||
    event.key == '3' || event.key=='4'|| event.key=='5' ||
    event.key == '6' || event.key=='7'|| event.key==='8' ||
    event.key == '9' || event.key=='+'|| event.key=='-' ||
    event.key == '*' || event.key=='/'|| event.key=='2')
   console.log(document.getElementById('result').value+= event.key )
}
Event
 let cal = document.getElementById('calcu');
cal.onkeyup = function(event){
    if(event.keyCode === 13){
        console.log("Enter");
        let x = document.getElementById('result').value;
        console.log(x);
        solve()

    }
}

// function that evaluates the digit and return result

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById('result').value = y
}

// function that clear the display
function clr(){
    document.getElementById('result').value = ''
}