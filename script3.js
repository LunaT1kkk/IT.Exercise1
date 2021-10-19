document.write("<h1>3. Функции. Объекты, как ассоциативные массивы</h1>");
//Задание 1
document.write("<h2>Задание 3.1:</h2>");

function comp(q, w){
    let flag = true;
    if(q.length == w.length){
        for(let i = 0; i < q.length;i++){
            if (q[i] != w[i]){
                flag = false;
                break;
            }
        }
    }
    return flag;
}

let mas1 = [0, 0, 0, 0, 0, 1];
let mas2 = [0, 0, 0, 0, 0, 1];
document.write("Массив 1: " + mas1 + "<br>Массив 2: " + mas2 + "<br>");

if(comp(mas1, mas2))
    document.write("Массивы равны<br>");
else
    document.write("Массивы не равны<br>");

//Задание 2
document.write("<h2>Задание 3.2:</h2>");
let arr = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

function range(input, output, step = 1){
    if(input < 0 || output > arr.length || step < 0 || step > arr.length)
        return "Error!!!";
    else{
        let mas = [];
        for(let i = input, k = 0; i <= output; i+=step, k++){
            mas[k] = arr[i];
        }
        return mas;
    }
}

let new_arr = range(2, 10, 3);
document.write("Исходный массив: " + arr + "<br>Новый массив: " + new_arr + "<br>");

//Задание 3
document.write("<h2>Задание 3.3:</h2>");

function show(stud){
    
    document.write("Вывод объекта на экран:<br>1. Имя: " + stud.name + "<br>2. Фамилия: " + stud.family +
                   "<br>3. Возраст: "+ stud.age + "<br>4. Интересы: " + stud.interesting);
}

let student = {
    name: "Даниил",
    family: "Савушкин",
    age: 22,
    interesting: ["Спорт", "Игры", "Фильмы", "Сериалы"]
}

show(student);

//Задание 4
document.write("<h2>Задание 3.4:</h2>-");