window.onload = function () {
document.querySelector("#ZADACHA_one").onclick = function (){
//Задача 1 
let number=prompt(); 

if(number==10){
    console.log("Верно");
    alert("Верно задача 1");
}
else{
    console.log("Не верно");
    alert("Не Верно задача 1");
}
}


//Задача 2 
document.querySelector("#ZADACHA_two").onclick = function (){
let vremi = prompt();
if(vremi<15){
    console.log("В первую четверть");
    alert("В первую четверть задача 2");

}else{
    if(vremi>15 && vremi<30){
        console.log("В Вторую четверть");
        alert("В Вторую четверть задача 2");
    }
    else{
        if(vremi>30 && vremi<45){
            console.log("В Третью четверть");
            alert("В Третью четверть задача 2");
        }else{
            if(vremi>45 && vremi<=59){
            console.log("В Четвертую четверть");
            alert("В Четвертую четверть задача 2");
        }else{
            console.log("Ошибка");
            alert("Ошибка");
        }
        }

        
    }
}
}



//Задача 3 
document.querySelector("#ZADACHA_tree").onclick = function (){
    alert("Нужна шпаргалка по типам переменных. Да или нет ")
    let otwet = prompt();
    if(otwet=="да" || otwet=="Да"){
        alert("Числа (Numbers) - Целые числа, числа с плавающей точкой");
        alert("Строки (Strings) - Любые данные в одинарных или двойных кавычках");
        alert("Булевые (boolean) - true или false значения");
        alert("Null - пустое значение или нет значения");
        alert("Undefined - объявленная переменная без значения");

}else{
    alert("Молодец,Тебе не нужны подсказки");
}
}
}

//Задача 4 Консольный перехват ошибки

document.querySelector("#ZADACHA_fo").onclick= function(){
    try{
        alert("введите число с плавающей точкой");
        let shislo = prompt();
        let pro = shislo + shislo;
        alert(pro);
        shislo = int(shislo);

    } catch(oshibka){
        alert("Число с плавающей точкой не может быть преобразовано в целочисленый тип данных");
        alert(oshibka);
    }

}


function prosto_calculeter(){
    alert("Привет пользователь это простой калькулятор");
    alert("Ты можешь делать 4 основных действия (Умножения,Деление, Сложение, Вычитание ");
    alert('Вненси число 1 и 2')
    let chislo_one = prompt();
    let chislo_two = prompt();
    alert();
    


}