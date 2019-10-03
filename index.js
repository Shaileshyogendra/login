const myform=document.querySelector('#myform');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const ul=document.querySelector('.list');

myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameinput.value==='' || emailinput.value===''){
        msg.classList.add('msg');
        msg.textContent='Please enter all fields';
        setTimeout(()=> msg.remove(),3000);
    }else{
        ul.style.display='block';
        ul.firstElementChild.textContent=nameinput.value;
        ul.children[1].textContent=emailinput.value;
        ul.lastElementChild.textContent='successfully submitted';
        nameinput.value='';
        emailinput.value='';
        setTimeout(()=>ul.remove(),3000);
    }
})