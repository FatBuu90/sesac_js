function change_bgColor() {
    let color = document.getElementById("bg_Box").style.backgroundColor;
    console.log(color);
    if(color == "red"){
        color = "blue";
    }else if(color == "blue"){
        color = "green";
    }else{
        color = "red";
    }
    document.getElementById("bg_Box").style.backgroundColor = color;
}