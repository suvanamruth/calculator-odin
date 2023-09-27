function add(a,b)
{
    return (a+b);
}

function subtract(a,b)
{
    return (a-b);
}
function multiply(a,b)
{
    return (a*b);
}
function divide(a,b)
{
    return (a/b);
}

function operate(num1, num2, operator)
{
    if(operator === "+")
    {
        return add(num1,num2);
    }
    else if(operator === "-")
    {
        return subtract(num1, num2);
    }
    else if(operator === "*")
    {
        return multiply(num1, num2);
    }
    else if(operator === "/")
    {
        return divide(num1, num2);
    }
}

window.onload = doStuff;
var tempOperator;
var dsply;
var num1;
var num2;
function doStuff() {
    dsply = document.getElementById("displayBox");
}




let displayValue = 0;
function addToDisplay(value)
{

    if(displayValue == 0)
    {
        displayValue = value;
    }
    else
    {
        displayValue = (displayValue * 10) + value;
    }
    console.log(displayValue);
    dsply.textContent = displayValue;
}


function setOperator(optr)
{
    tempOperator = optr;
    num1 = displayValue;
    displayValue = 0;
    dsply.textContent = "";
}

function doOperation()
{
    num2 = displayValue;
    console.log("num1 " + num1);
    console.log("num2 " + num2)
    console.log("operator" + tempOperator);
    newValue = operate(num1, num2, tempOperator);
    console.log("newValue" + newValue);
    displayValue = newValue;
    dsply.textContent = newValue;
}

function clearBox()
{
    dsply.textContent = "";
    displayValue = 0;
}