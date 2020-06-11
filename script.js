const nav = document.querySelector("nav");
const navHeight = nav.offsetHeight;

// regular expression for keywords
const card = document.querySelector('.card');



window.addEventListener("scroll", handleScroll);

const min = -70;
const max = 0;

function handleScroll(){
    const scrolled = window.scrollY;
    if(scrolled > navHeight){
        const navScroll = (scrolled-navHeight)+min;
        document.body.classList.add("scrolled");
        nav.style.setProperty("top",`${navScroll>0?0:navScroll}px`);
        document.documentElement.style.setProperty("padding-top","130px");
    }else{
        document.body.classList.remove("scrolled");
        nav.style.removeProperty("top");
        document.documentElement.style.removeProperty("padding-top");
    }
}