let inp=document.getElementById('inp');
let field=document.getElementById('duplicateField')
let btn=document.getElementById('btn')
let content;
inp.addEventListener('input', function(){
    field.textContent=inp.value
})
btn.addEventListener('click',function(event){
    event.preventDefault();
    console.log(field.textContent);
    field.textContent='';
    inp.value='';
})