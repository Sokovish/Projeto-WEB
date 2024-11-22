var header = document.getElementById('header');
var navigation = document.getElementById('navigation')
var content = document.getElementById('content')
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar
    if(showSidebar){
        navigation.style.marginLeft = '-10vw'
        navigation.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else{
        navigation.style.marginLeft = '-100vw'
        content.style.filter = '';
       
    }
}
function closeSidebar() {
    if(showSidebar){

        toggleSidebar();

    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 1334 && showSidebar){
        toggleSidebar();
    }
});