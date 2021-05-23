let link=document.getElementById('link');
let message;
let er=document.getElementById('error');
link.addEventListener('click',function(event){
    er.textContent='';
    event.preventDefault();
    message = prompt('Введите свое сообщение');
    if ((message=='') || (message==null)){
        er.textContent='Вы ничего не ввели! Попробуйте еще раз';
    }
    else if(message!=''){
        link.textContent=message;
        er.textContent='Это твое сообщение. Попробуй еще раз'
    }
})
