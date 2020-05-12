
var decimalsbtn= document.getElementById('calc-decimal');
var clearbtn= document.getElementById('calc-clear');
var displayvalelement= document.getElementById('calc-display-val');
var displayvalelement1= document.getElementById('calc-display-val1');
var backspacebtn= document.getElementById('calc-backspace');
var calcNumbtn= document.getElementsByClassName('calc-btn-num');
var calcOperatorsbtn= document.getElementsByClassName('calc-btn-operator');


var displayval ='0';
var pendingval;
var evalSringarray = [];


var updateDisplayval= (clickobj) =>{
    var btntext=clickobj.target.innerText;
 
    if(displayval=='0') displayval='';

displayval += btntext;
displayvalelement1.innerText =displayval;

}
for( i =0 ; i<calcNumbtn.length;i++)
{
    calcNumbtn[i].addEventListener('click', updateDisplayval,false);

}
clearbtn.onclick = () =>{
    displayval = '0';
    pendingval= undefined;
    evalSringarray =[];
    displayvalelement1.innerHTML=displayval;
    displayvalelement.innerHTML=displayval;
}

backspacebtn.onclick = () =>{
    let lengthofdisplayval = displayval.length;
    displayval = displayval.slice(0,lengthofdisplayval -1);

    if(displayval == '') displayval= '0';
    displayvalelement1.innerText =displayval;
}
decimalsbtn.onclick = () =>{
    if(!displayval.includes('.')) displayval +='.'
}


var performOperation = (clickobj) =>{

    var operator = clickobj.target.innerText;

    switch (operator) {
        case '+':
            pendingval=displayval;
            displayval ='0';
            
            evalSringarray.push(pendingval);
            evalSringarray.push('+');
            displayvalelement1.innerText = evalSringarray.join('');
            break;
        case '-':
            pendingval=displayval;
            displayval='0';
            evalSringarray.push(pendingval);
            evalSringarray.push('-');
            displayvalelement1.innerText = evalSringarray.join('');
            break;
        case '*':
            pendingval=displayval;
            displayval='0';
            
            evalSringarray.push(pendingval);
            evalSringarray.push('*');
            displayvalelement1.innerText = evalSringarray.join('') ;
            break;
        case '/':
                pendingval=displayval;
                displayval='0';
                
                evalSringarray.push(pendingval);
                evalSringarray.push('/');
                displayvalelement1.innerText = evalSringarray.join('') ;

                break;
        case '=':
                    
                evalSringarray.push(displayval);
                displayvalelement1.innerText = evalSringarray.join('');
                var evaluation = eval(evalSringarray.join(''))
               displayval = evaluation + '' ;
               evalSringarray =[];
               displayvalelement.innerText =displayval;
              
            break;

        default:
            break;
    }
}
for(i=0; i<calcOperatorsbtn.length;i++)
{
   calcOperatorsbtn[i].addEventListener('click', performOperation,false);
}