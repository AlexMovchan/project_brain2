window.onload = function() {
    var home = document.getElementById('home');
    home.style.minHeight = window.innerHeight + 'px';
    
    
    var navbar = document.getElementById('navbar');
    function showNavbar(){
        navbar.style.visibility = 'visible';
        navbar.style.top = '0px';
    }    
    setTimeout(showNavbar, 1000);
    
    
    var homeText = document.getElementById('homeText');
    function showHomeText() {
        homeText.style.opacity = '1';
    }
    setTimeout(showHomeText, 2000);
    
    var ghostButton1 = document.getElementById('ghostButton1');
    var ghostButton2 = document.getElementById('ghostButton2');
    
    ghostButton1.onclick = function(){
        window.scrollTo(0, 1000)
    }
    
}