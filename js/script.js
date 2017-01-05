var home = document.getElementById('home');
home.style.minHeight = window.innerHeight + 'px';

window.onload = function() {

    window.onscroll = function() {
        myFunction();
        showPortfolioElements();
    };
    
    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.backgroundColor = "black";
            navbar.style.padding = "0 10%";
        } else {
            navbar.style.backgroundColor = "inherit";
            navbar.style.padding = "20px 10%";
        }
    }
    
    
    function showPortfolioElements() {
        if (document.body.scrollTop > 920) {
            works.style.display = 'block';
        }
    }
    
    var adware = document.getElementById('adware');
    var closeBtn = document.getElementById('closeBtn');
    var navbar = document.getElementById('navbar');
    var homeText = document.getElementById('homeText');
    var ghostButton1 = document.getElementById('ghostButton1');
    var ghostButton2 = document.getElementById('ghostButton2');
    var firstFigureImgArr = document.getElementsByClassName('firstFigureImg');
    var thirdFigureImg = document.getElementById('thirdFigureImg');
    var works = document.getElementById('works');
    
    var timer1,
        timer2;
    
    setTimeout(showNavbar, 1000);
    setTimeout(showHomeText, 2000);
    
    
    function showNavbar(){
        navbar.style.visibility = 'visible';
        navbar.style.top = '0px';
    }    
    
    function showHomeText() {
        homeText.style.opacity = '1';
    }
    var scrollTimer;
    var counter = 0;
    function scrollTopButton(){
        counter += 10;
        document.body.scrollTop = counter;
        if(counter == 900){
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

