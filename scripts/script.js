/*let videos = document.getElementById('video'); 
 

    videos.addEventListener('mouseenter', function() {
        videos.play();
    });

    videos.addEventListener('mouseleave', function() {
        videos.pause();
    });*/

$(".card a").mPageScroll2id();


/////////////////////////////FORM////////////////////////////////////
let counter = 0;
let list;
let elem = 3;
let addBtn = document.querySelector('.add-btn');
let form = document.querySelector('.form');
let removeBtn = document.querySelectorAll('.removeItem');
let navHeight = document.querySelector('.nav-container').clientHeight;

addBtn.addEventListener('click', () => {
    if(counter < elem){
        list = document.querySelectorAll('.item');
        counter++;
        list[counter].classList.remove('disabled');
        removeBtn[counter].addEventListener('click', () => {
        if(counter > 0){
            list[counter].classList.add('disabled');
            counter--;
            if(counter < elem){
                addBtn.classList.remove('disabled');
            }
        }
        });
        if(counter == elem) {
            addBtn.classList.add('disabled');
        }
    }
});

let formSection = document.querySelector('.main-form');
let scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

$(window).resize(function(){
    if(!formSection.classList.contains('disabled')){
        navHeight = document.querySelector('.nav-container').clientHeight
        scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        formSection.style.top = (scrollHeight+navHeight) + 'px';
    }
});

let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', () => {
    scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    makeForm();
});
btn2.addEventListener('click', () => {
    scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    makeForm();
});
                      
function makeForm(){
    document.body.style.overflow = "hidden";
    formSection.style.top = (scrollHeight+navHeight) + 'px';
    formSection.classList.remove('disabled');
    $(formSection).css({left:-100+"%"})
             .animate({"left":"0px"}, "slow");
}

let closeBtn = document.querySelector('.close-form');
closeBtn.addEventListener('click', ()=>{
    document.body.style.overflow = "";
    $(formSection).css({left:0+"px"})
             .animate({"left":"-100%"}, "fast");
    formSection.classList.remove('disabled');
});


