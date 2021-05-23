let Consol=document.getElementById('consoleLog')
let Alert=document.getElementById('alert')
let Prompt=document.getElementById('prompt')

Consol.nextElementSibling.textContent='Пример использования команды console.log'
Consol.addEventListener('click',function(){
    alert('Выводит сообщение в веб консоль')
})

Alert.addEventListener('click',function(){
    alert('Выводит блок с сообщением поверх страницы')
})

Prompt.addEventListener('click',function(){
    alert('Выводит блок с сообщением и текстовое поле поверх страницы')
})