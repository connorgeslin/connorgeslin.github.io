function multiplyOp(x,y){
    return x*y;
}
function divideOp(x,y){
    return x/y;
}
function modOp(x,y){
    return x%y;
}
function addOp(x,y){
    return Number(x)+Number(y);
}
function subtractOp(x,y){
    return x-y;
}

let ops = ['+', '-', '*', '/', '%'];
let arrayX = []
let arrayY = []
let arrayOp = []
let answers = []
let continueComputing = true;
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
while(continueComputing)
{   
    let answer;
    var xN = prompt("Value of x") 
    
    if (xN == null){
        console.log("im supposed to break here")
        continueComputing = false;
        break;
    }

    let operator = prompt("operator")
    if (operator == null){
        continueComputing = false;
        break;
    }
    
    var yN = prompt("Value of y")
    if (yN == null){
        continueComputing = false;
        break;
    }
    
    if (!ops.includes(operator)){
        answer = "Not a valid operator";
        console.log("bad input");
    }
    else if ( isNaN(xN) || isNaN(yN)){
        answer = "One of the inputs was invalid "
    }
    else{
        if(operator == '*'){
            answer = multiplyOp(xN,yN)
        }
        else if(operator == '/'){
            answer = divideOp(xN,yN)
        }     
        else if(operator == '-'){
            answer = subtractOp(xN,yN)
        } 
        else if(operator == '+'){
            answer = addOp(xN,yN)
        } 
        else if(operator == '%'){
            answer = modOp(xN,yN)
        }   
    }
    arrayX.push(xN)
    arrayY.push(yN)
    arrayOp.push(operator)
    answers.push(answer)
    console.log(answer)
    document.write("<tr>");
    document.write(`<td>${xN}</td><td>${operator}</td><td>${yN}</td>`);
    document.write(`<td>${answer}</td>`);
    document.write("</tr>");
    
    if (!confirm('Continue?')) {
        continueComputing = true;
        break;
    }
}
document.write("</table><br>");
    
