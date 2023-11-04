let display = document.getElementById('display')

function addToDisplay(value){
    if (typeof value === 'number'){
        display.value += value;
    } else {
        value = value.replace('Math.PI', 'π');
        display.value += value;

    }   
};

function displayClear(){
    display.value = '';
};

function result(){
    try{
        let expression = display.value.replace('^', '**').replace('π', 'Math.PI');
       display.value = eval(expression);
       
    } catch (error){
        display.value = 'Error';
    };
};

function remove(){
    display.value = display.value.slice(0, -1);
};

function addPoucentage(){
    const currentValue = parseFloat(display.value);
    if(!isNaN(currentValue)){
        display.value = (currentValue / 100).toString();
    };
};

function root(){
    const currentValue = parseFloat(display.value);

    if(!isNaN(currentValue)){
        display.value = Math.sqrt(currentValue).toString();
    }
}
// gestion clavier :

document.addEventListener('keydown', function (event){
    const key = event.key;

if (/[0-9+\-*/.()]/.test(key)) {
    addToDisplay(key);
}
if(key === 'Enter' || key === '='){
    event.preventDefault();
    result();
}
else if(key === 'c' || key === 'C'){
    displayClear();
} 
});