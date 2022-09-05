// function countBasketPrice (arr) {
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++) {
        
//         sum += arr[i].price * arr[i].count;
//     }
//     return sum;
    
    
// }

// let productID_0 = {productName:'тапочки', type:1, price:1250,  count:2};
// let productID_1 = {productName:'носки', type:2, price:2250, count:1};
// let productID_2 = {productName:'шапка', type:6, price:1750, count:3};

// let basket = [];

// basket.push(productID_0);
// basket.push(productID_1);
// basket.push(productID_2);

// alert('Сумма товаров в корзине: ' + countBasketPrice(basket));



// let number;
// let object = {};
// function splitNumber() {
// number = prompt('Введите любое число от 0 до 999 в трехзначном формате', '000');
// while (number == '' || isNaN(number)) {
// number = prompt('Введите любое число от 0 до 999 в трехзначном формате', '000');
// }
//  if (number > 999) {
// alert('Число не может превышать значения 999!');
// console.log(object);
// } else {
// object = number.split();
// object.hundreds = number[0];
// object.dozens = number[1];
// object.units = number[2];
// alert (`Число   ${object}   включает в себя:
// - сотни:   ${object.hundreds} 
// - десятки:   ${object.dozens}  
// - единицы:   ${object.units} `);
// }
// }
// splitNumber();