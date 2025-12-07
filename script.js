let number=1;
let table = document.getElementById("content");
console.log(table);

function CreateTable(num){
    for(num = number; num <= number+100; num++){
        if(num % 3 === 0 && num % 5 === 0){
            table.innerHTML += `<div class="FizzBuzz">FizzBuzz</div>`;
        } else if(num % 3 === 0){
            table.innerHTML += `<div class="Fizz">Fizz</div>`;
        } else if(num % 5 === 0){
            table.innerHTML += `<div class="Buzz">Buzz</div>`;
        } else {    
        table.innerHTML += `<div>${num}</div>`;
        }
    }
    number=num;
}

document.addEventListener("scroll", function(){    
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight - 5){
        CreateTable(number);
    }
});

CreateTable();