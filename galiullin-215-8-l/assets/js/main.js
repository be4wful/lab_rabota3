// задание 5
// elem = document.getElementById('ol');
// li = document.createElement('li'); //создание li
// li.innerHTML = 'пункт';
// elem.appendChild(li);


// задание 8
// i = 1;
// function go() {
//     btn = document.getElementById('btn');
//     btn.value = i;
//     i += 1;
//     console.log(i)
// }


// задание 6
// function go(pop) {
//     pop.innerHTML = pop.innerHTML + '(' + pop.href + ')'
// }

// function hide(ev) {
//     ev.innerHTML = ev.innerHTML + '(' + pop.href + ')'
// }


// задание 9
// function go() {
//     elem = document.getElementById('list');
//     li = document.createElement('li');
//     li.innerHTML = 'пункт'
//     elem.appendChild(li)
// }
// list.addEventListener('click', function (event){
//     event.target.innerHTML += '!'
// })


// задание 7
// list.addEventListener('click', function (event){
//     event.target.innerHTML = event.target.innerHTML * event.target.innerHTML
// })


// задание 3
// count = 0;
// function go() {
//     form = document.getElementById('form');
//     elements = document.getElementsByClassName('input');
//     for (let i = 0; i < elements.length; i++) {
//         count = Number(count) +  Number(elements[i].value)
//     }
//     alert(count) //вывод ответа
// }


// задание 2
// elem = document.getElementById('lorem');
// console.log(window.innerHeight);
// console.log(elem.clientHeight);
// if (window.innerHeight > elem.scrollHeight) {
//     alert('нету')
// }
// else {
//     alert('есть')
// }


// задание 4
// function go() {
//     countries = document.getElementById('list') //получение элемента
//     console.log(countries[countries.selectedIndex].innerHTML)
//     if (countries[countries.selectedIndex].innerHTML == 'россия') { // если выбрана страна россия
//         russia = document.createElement('select')
//         document.body.appendChild(russia) // создает и добавляет селект выбора городов

//         russiaCity1 = document.createElement('option') //1 город
//         russiaCity1.innerHTML = 'москва'
//         russia.appendChild(russiaCity1)

//         russiaCity2 = document.createElement('option') //2 город
//         russiaCity2.innerHTML = 'спб'
//         russia.appendChild(russiaCity2)

//         russiaCity3 = document.createElement('option') //3 город
//         russiaCity3.innerHTML = 'уфа'
//         russia.appendChild(russiaCity3)

//     }
//     if (countries[countries.selectedIndex].innerHTML == 'сша') { //если выбрана страна сша
//         usa = document.createElement('select')  // создает и добавляет селект выбора городов
//         document.body.appendChild(usa)

//         usaCity1 = document.createElement('option') //1 город
//         usaCity1.innerHTML = 'нью-йорк'
//         usa.appendChild(usaCity1)

//         usaCity2 = document.createElement('option') //2 город
//         usaCity2.innerHTML = 'вашингтон'
//         usa.appendChild(usaCity2)

//         usaCity3 = document.createElement('option') //3 город
//         usaCity3.innerHTML = 'сан-франциско'
//         usa.appendChild(usaCity3)

//     }
//     if (countries[countries.selectedIndex].innerHTML == 'китай') { //если выбрана страна китай
//         china = document.createElement('select')  // создает и добавляет селект выбора городов
//         document.body.appendChild(china)

//         chinaCity1 = document.createElement('option') //1 город
//         chinaCity1.innerHTML = 'шанхай'
//         china.appendChild(chinaCity1)

//         chinaCity2 = document.createElement('option') //2 город
//         chinaCity2.innerHTML = 'гонконг'
//         china.appendChild(chinaCity2)

//         chinaCity3 = document.createElement('option') // 3 город
//         chinaCity3.innerHTML = 'пекин'
//         china.appendChild(chinaCity3)

//     }
// }


//задание 10
// function go() {
//     var elem = document.getElementsByClassName('myTable')[0];
//     var name1 = document.getElementsByClassName('name1');
//     var surname1 = document.getElementsByClassName('name2');
//     for (let i = 0; i < 1; i++) { //добавление 
//         // a = stro.cloneNode(true);
//         // elem.appendChild(a);
//         z = elem.insertRow(-1);
//         z.innerHTML = '<tr class="stro"><td id="one" onclick="prom(this)">name</td><td id="two" onclick="prom(this)">surname</td></tr>'
//         console.log(z.outerHTML)
//         z.firstChild.innerHTML = name1[0].value
//         z.lastChild.innerHTML = surname1[0].value
//     }
// }
// function prom(event) {
//     var stro = document.getElementsByClassName('stro')[0];
//     a = prompt('внесите изменение')
//     event.innerHTML = a
// }


// задание 1
// function func() {
//     setTimeout(func1, 3000) //таймаут 3 секунды, после чего идет вызов следующей функции
// }
// function func1() { //скролл
//     window.scroll(0, 500)
// }




