var header = document.getElementById('header');
var navigation = document.getElementById('navigation')
var content = document.getElementById('content')
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar
    if(showSidebar){
        navigation.style.marginLeft = '-10vw'
    } else{
        navigation.style.marginLeft = '-100vw'
    }
}