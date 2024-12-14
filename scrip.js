
alert('Sizda hozir random sonlar chiqishni boshledi😉');

let number = Math.random() *100;
number =Math.ceil(number);
alert(`Radom orqale chiqqan son: ${number}`);

let two = confirm('biz radom sonni 2ga kopaytirmochi va bolmoqchimiz!');
alert(two);

let num2 = 2;
let num3 = 3;
let result = Number(number) * Number(num2); 
let result2 = Number(number) / Number(num2);
let result3 = Number(number) % Number(num3);
alert(`Radom orqale chiqqan son: ${number} edi
    biz uni 2ga kopaytirib ${result} sonini chiqardik 
    va shu sonni 2ga bolib: ${result2} sonini chiqardik
    va shu sonni 3ga bolgandagi qoldik: ${result3} sonini chiqardik
     `);