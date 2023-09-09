let nav =document.querySelector('.navbar');
let navBar=document.querySelector('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');

window.onscroll=()=>{
    if(document.documentElement.scrollTop>50){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}

navBar.forEach((e )=> {
    e.adEventListener('click',function(){
        navCollapse.classList.remove('show');
    });
});