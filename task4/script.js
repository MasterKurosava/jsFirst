let link=document.getElementById('link');
let message;
let custom = document.createElement('span');
let er=document.getElementById('error')
custom.innerHTML='  <--- Это твое сообщение. Попробуй еще раз';
console.log(custom)
link.addEventListener('click',function(event){
    event.preventDefault();
    message = prompt('Введите свое сообщение');
    console.log(message);
    if ((message=='') || (message==null)){
        custom.textContent='Вы ничего не ввели! Попробуйте еще раз';
        er.textContent=custom.textContent;
    }
    else{
        link.textContent=message
        link.parentElement.insertAdjacentElement('beforeend', custom)
    }
})