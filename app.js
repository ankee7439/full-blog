const navItems=document.querySelector('.nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');

const openav=()=>{
    navItems.style.display = 'flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}

const closenav=()=>{
    navItems.style.display = 'none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}
openNavBtn.addEventListener('click',openav);
closeNavBtn.addEventListener('click',closenav);