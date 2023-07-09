
const countVal=document.querySelector('#counter');
//We can also use getElementbyId

function increment(){
    //Get the text value from the id of the counter and change it to integer from string value in order to increment it 
    let value=parseInt(countVal.innerText);
    //Increment the value
    value=value+1;
    //Reflect the change inside the counter [Update the Value]
    countVal.innerText=value;
};


function decrement(){
    //Get the text value from the id of the counter and change it to integer from string value in order to increment it 
    let value=parseInt(countVal.innerText);
    //decrement the value
    value= value - 1;
    //Reflect the change inside the counter [Update the Value]
    countVal.innerText=value;
};








