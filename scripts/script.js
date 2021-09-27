/*let videos = document.getElementById('video'); 
 

    videos.addEventListener('mouseenter', function() {
        videos.play();
    });

    videos.addEventListener('mouseleave', function() {
        videos.pause();
    });*/

$(".card a").mPageScroll2id();


/////////////////////////////FORM////////////////////////////////////
let elem = 3;

let addBtn = document.querySelector('.add-btn');
let form = document.querySelector('.form');
let removeBtn = document.querySelectorAll('.removeBtn');
let list;
let counter = 0;

addBtn.addEventListener('click', () => {
    list = document.querySelectorAll('.item');
    let listItem = document.createElement('div');
    listItem.classList.add('item');
    listItem.innerHTML = '<select placeholder="Обрати продукт" class="in product"><option value="value1" selected>Мясо 1</option><option value="value2">Мясо 2</option><option value="value3">Мясо 3</option><option value="value4">Мясо 4</option></select><input type="number" value="1" min="1" max="20" class="in count"><div class="removeItem">&#128473;</div>';
    
    if(counter < elem){
        addBtn.before(listItem);
        counter++;
        list = document.querySelectorAll('.item');
        removeBtn = document.querySelectorAll('.removeItem');
        removeBtn[counter].addEventListener('click', () => {
            form.removeChild(list[counter]);
            counter--;
            if(counter < elem){
                list[counter].after(addBtn);
            }
        });
        if(counter >= elem) {form.removeChild(addBtn);} 
    }
});