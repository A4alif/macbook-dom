// select all button 
const memoryFirstBtn = document.getElementById('memoryFirstBtn');
const memorySecondBtn = document.getElementById('memorySecondBtn');
const storageFirstBtn = document.getElementById('storageFirstBtn');
const storageSecondBtn = document.getElementById('storageSecondBtn');
const storageThirdBtn = document.getElementById('storageThirdBtn');
const freeShipping = document.getElementById('free-shipping');
const expressShipping = document.getElementById('express-shipping');

// select all field
const bestPrice = document.getElementById('best-price');
const memoryCostExtra = document.getElementById('memory-cost');
const storageCostExtra = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const total = document.getElementById('total-cost');
// bottom total 
const discountTotal = document.getElementById('discount-total');
//submit button
const submitBtn = document.getElementById('submit-btn');

function updateTotal(){
    let bestPriceValue = Number(bestPrice.innerText);
    let memoryCostValue = Number(memoryCostExtra.innerText);
    let storageCostValue = Number(storageCostExtra.innerText);
    let deliveryValue = Number(deliveryCost.innerText);
    let totalValue = bestPriceValue +  memoryCostValue + storageCostValue + deliveryValue;
    total.innerText = totalValue;
    discountTotal.innerText = total.innerText;
}
memoryFirstBtn.addEventListener('click', function(){
    memoryCostExtra.innerText = '0';
    updateTotal();
})
memorySecondBtn.addEventListener('click', function(){
    memoryCostExtra.innerText = '180';
    updateTotal();
})
storageFirstBtn.addEventListener('click', function(){
    storageCostExtra.innerText = '0';
    updateTotal();
})
storageSecondBtn.addEventListener('click', function(){
    storageCostExtra.innerText = '100';
    updateTotal();
})
storageThirdBtn.addEventListener('click', function(){
    storageCostExtra.innerText = '180';
    updateTotal();
})
freeShipping.addEventListener('click', function(){
    deliveryCost.innerText = '0';
    updateTotal();
})
expressShipping.addEventListener('click', function(){
    deliveryCost.innerText = '20';
    updateTotal();
})
submitBtn.addEventListener('click', function(){
    let totalValue = Number(total.innerText);
    const inputField = document.getElementById('promo-code');
    if(inputField.value == "stevekaku"){
        let newTotalValue = (totalValue * 20)/100;
        let newtotal = totalValue - newTotalValue;
        discountTotal.innerText = newtotal;
        inputField.value = " ";
    }
})