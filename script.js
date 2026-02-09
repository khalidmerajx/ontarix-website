const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#site-nav');

toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});

document.getElementById('year').textContent=new Date().getFullYear();
