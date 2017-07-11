var textFieldRef, defaultText, setText, result, tempNum, operator, counter,num1, num2;
textFieldRef = document.getElementById('textField');
showTextRef = document.getElementById('show');
showTextRef.value = '';
function setValue(button) {
    if (counter === 1) {
        counter = 0;
        textFieldRef.value = '';
        showTextRef.value = '';
    }
    if(button.value === 'c'){
        defaualtText = '';
        result = '';
        operator = '';
        num2=0;
        
    }
    else{
    textFieldRef.value += button.value.toString();
    console.log("defaultText value :" + textFieldRef.value);
    tempNum = button.value;
   }
}
function setOperator(optr) {
    
    showTextRef.value += textFieldRef.value + optr.value ;
    defaultText = textFieldRef.value;
    textFieldRef.value = '';
    operator = optr.value;

}
function equalPress() {
    counter = 1;
     showTextRef.value += textFieldRef.value;
     num2 = textFieldRef.value;
    var optr = operator, result;
    function calculate(optr) {
        switch (optr) {
            case '+':
                result = Number(defaultText) + Number(num2);
                break;
            case '-':
                result = Number(defaultText) - Number(num2);
                break;
            case '*':
                result = Number(defaultText) * Number(num2);
                break;
            case '/':
                result = Number(defaultText) / Number(num2);
                break;

        }
        textFieldRef.value = '';
       
        textFieldRef.value = result.toFixed(2);
    }
    calculate(operator);
}