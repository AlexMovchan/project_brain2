window.onload = function() {
    var home = document.getElementById('home');
    home.style.minHeight = window.innerHeight + 'px';
    
    var navbar = document.getElementById('navbar');
    var homeText = document.getElementById('homeText');
    var ghostButton1 = document.getElementById('ghostButton1');
    var ghostButton2 = document.getElementById('ghostButton2');
    
    setTimeout(showNavbar, 1000);
    setTimeout(showHomeText, 2000);
    
    
    function showNavbar(){
        navbar.style.visibility = 'visible';
        navbar.style.top = '0px';
    }    
    
    function showHomeText() {
        homeText.style.opacity = '1';
    }
        
window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.backgroundColor = "black";
            navbar.style.padding = "0 10%";
        } else {
            navbar.style.backgroundColor = "inherit";
            navbar.style.padding = "20px 10%";
        }
    }  
    
    ghostButton1.onclick = function() {
        ghostButton1.scrollTop = 1000;
    }
    




}

