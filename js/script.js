var adware = document.getElementById('adware'),
    closeBtn = document.getElementById('closeBtn'),
    navbar = document.getElementById('navbar'),
    homeText = document.getElementById('homeText'),
    ghostButton1 = document.getElementById('ghostButton1'),
    ghostButton2 = document.getElementById('ghostButton2'),
    firstFigureImgArr = document.getElementsByClassName('firstFigureImg'),
    thirdFigureImg = document.getElementById('thirdFigureImg'),
    works = document.getElementById('works'),
    inputs = document.getElementsByTagName('input'),
    textarea = document.getElementById('textarea'),
    consult = document.getElementById('consult'),
    consultBtn = document.getElementsByClassName('consultBtn');
    

var timer1,
    timer2,
    consultInterval;

var home = document.getElementById('home');
home.style.minHeight = window.innerHeight + 'px';



window.onload = function() {

    window.onscroll = function() {
        myFunction();
        showPortfolioElements();
    };
    
    setTimeout(showNavbar, 1000);
    setTimeout(showHomeText, 2000);
    consultInterval = setInterval(showConsult, 8000);
        
    
    function showNavbar(){
        navbar.style.visibility = 'visible';
        navbar.style.top = '0px';
    }    
    
    function showHomeText() {
        homeText.style.opacity = '1';
    }
    
    function showPortfolioElements() {
        if (document.body.scrollTop > 920) {
            works.style.display = 'block';
        }
    }
    
    function showConsult(){
        consult.style.bottom = '0';
    }
    
    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.backgroundColor = "black";
            navbar.style.padding = "0 10%";
        } else {
            navbar.style.backgroundColor = "inherit";
            navbar.style.padding = "20px 10%";
        }
    }
    
    
    consultBtn[0].onclick = function() {
        consult.style.bottom = '-200px';
    }
    
    consultBtn[1].onclick = function() {
        clearInterval(consultInterval);
        consult.style.bottom = '-250px';
    }
    
    
    console.log(window.innerHeight)
    var scrollTimer;
    var counter = 0;
    function scrollTopButton(){
        counter += 10;
        document.body.scrollTop = counter;
        if(counter == window.innerHeight || counter > window.innerHeight){
            clearInterval(scrollTimer);
            counter = 0;
        }
    }
    
    ghostButton1.onclick = function() {
        scrollTimer = setInterval(scrollTopButton, 1);
    }
    
    ghostButton2.onclick = function() {
        showAdware();
    }
    
    closeBtn.onclick = function() {
        adware.style.display = 'none';
        closeBtn.style.display = 'none'
    }
    
    function showAdware() {
        clearInterval(timer1);
        clearInterval(timer2);
        adware.style.display = 'block';
        timer1 = setTimeout(autoclose, 10000);
        timer2 = setTimeout(showCloseBtn, 5000);
    }
    
    function autoclose() {
        adware.style.display = 'none';
        closeBtn.style.display = 'none'
    }
    function showCloseBtn (){
        closeBtn.style.display = 'block';
    }
    
    firstFigureImgArr[0].onmouseover = function(){
        firstFigureImgArr[0].style.backgroundColor = '#c0301c';
        firstFigureImgArr[0].style.color = 'white';
    }
    
     firstFigureImgArr[1].onmouseover = function(){
        firstFigureImgArr[1].style.backgroundColor = '#c0301c';
        firstFigureImgArr[1].style.color = 'white';
    }
    
     thirdFigureImg.onmouseover = function(){
         thirdFigureImg.style.backgroundImage = 'url(../project_brain2/img/EllipseSupport2.png)';
         thirdFigureImg.style.backgroundColor = '#c0301c';
     }

     
}

window.addEventListener("load", checkNullField , false);
window.addEventListener("load", init, false);
                        
                        
    function checkNullField() {
        document.forms[0].addEventListener("submit", function(e) {
            if (inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0 || inputs[3].value.length == 0 || textarea.value.length == 0) {
                e.preventDefault();
                alert("Заполните пожалуйста все строки!");
            }
        }, false);

    }


    function init() {

        for (var i = 0; i < inputs.length; i++) {
            var e = inputs[i];
            if (e.type != "text") continue; // пропускаем элементы input, которые не поля вводов
            if (e.dataset.charsAllowed == undefined) continue; // пропускаем элементы у которых нет атрибута data-chars-allowed

            // dataset - свойство, дающее возможность обратиться к атрибутам data-*
            // другой способ получения атрибута
            //if(e.getAttribute("data-chars-allowed") == undefined)

            e.addEventListener("keypress", keyFilter, false);
        }

        function keyFilter(e) {
            if (!e) e = window.event;

            // если нажата функциональная клавиша или введена управляющая последовательность (например, нажата клавиша Enter)
            if (e.charCode == 0 || e.charCode < 32) return true;

            var allowedText = e.target.dataset.charsAllowed;
            var element = e.target.dataset.messageId; // элемент, который необходимо отобразить в случае ошибки

            var symbol = String.fromCharCode(e.charCode).toLowerCase();

            if (allowedText.search(symbol) == -1) {
                if (element) {
                    element = document.getElementById(element);
                    element.style.visibility = "visible";
                }
                // отменяем ввод символа в поле ввода
                e.preventDefault();
                return false;
            }
            else {
                if (element) {
                    element = document.getElementById(element);
                    element.style.visibility = "hidden";
                }
                return true;
            }
        }
    }








