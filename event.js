function toggle_menu(){
    if(document.getElementById("header_menu").style.display=="block"){
        document.getElementById("header_menu").style.animation="slide_up 0.5s";
        document.getElementById("header_menu").style.display="none";
        document.getElementById("header_menu_btn").style.color="black";
        document.getElementById("header_logo").style.fill="black";
        document.getElementById("header_menu").style.animation="slide_up 1s";
    }else{
        document.getElementById("header_menu").style.animation="slide_down 0.5s";
        document.getElementById("header_menu").style.display="block";
        document.getElementById("header_menu_btn").style.color="white";
        document.getElementById("header_logo").style.fill="white";
    }
}
