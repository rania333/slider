/***** global console, *****/
/******* slider *********/
//collect data
var img = Array.from(document.querySelectorAll('.sliderContainer img')),
    imgLength = img.length,
    currentImg = 1,
    imgNum = document.getElementById('slideNum'),
    prevButton = document.getElementById('prev'),
    nextButton = document.getElementById('next');

//create ul
var paginateUl = document.createElement('ul');
paginateUl.setAttribute('id','paginateID');
for (var i = 1 ; i <= imgLength ; i++) {
    var paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index',i);
    //paginationLi.appendChild(document.createTextNode(i)); or
    paginationLi.textContent = i;
    paginateUl.appendChild(paginationLi);
}
document.getElementById('num').appendChild(paginateUl);
var createdUl = document.getElementById('paginateID');
var bullets = Array.from(document.querySelectorAll('#paginateID li'));
// loop through bullets 
for (var i = 0 ; i < bullets.length ; i++) {
    bullets[i].onclick = function () {
        currentImg = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

//action
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

//functions
checker();

function prevSlide () {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentImg --;
        checker();
    }
}
function nextSlide () {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentImg ++;
        checker();
    }
}
function checker () {
    imgNum.textContent = 'slide #' + currentImg + ' of ' + imgLength;
    removeAllActiveClasses();
    img[currentImg - 1].classList.add('active');
    createdUl.children[currentImg - 1 ].classList.add('active'); 
    //prev and next buttons
    if (currentImg == 1 ) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    
    if (currentImg == imgLength ) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}
function removeAllActiveClasses () {
    //loop through images
    img.forEach(function (x) {
        x.classList.remove('active');
    });  
    
    //loop through bullets item
    bullets.forEach (function (y) {
        y.classList.remove('active');
    }); 
}
