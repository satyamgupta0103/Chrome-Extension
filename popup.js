const currOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");
const convert = document.getElementById("conversion");
const swap = document.getElementById("swap");
var url;

currencyConverter();

function currencyConverter(){
    
    url = "https://free.currconv.com/api/v7/convert?q="+currOne.value+"_"+currTwo.value +"&compact=ultra&apiKey=ebd62323b86cd4739953"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let t = currOne.value+"_"+currTwo.value;
        let rateE = data[t];
        let ans = amountOne.value * rateE;
        var div = document.getElementById('amount-two');
        div.innerHTML = ans;

        
    }).catch(error=>{
        console.log(error);
    })
    
}

swap.addEventListener("click", ()=>{
    const temp = currOne.value;
    currOne.value = currTwo.value;
    currTwo.value = temp;
})

convert.addEventListener("click", currencyConverter);































