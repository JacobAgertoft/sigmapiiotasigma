var active_stylesheet = "main";

document.getElementById("btn2").onclick = function() {SwapStyle()};

function SwapStyle() {
    if (active_stylesheet == "main") {
        document.getElementById("style").setAttribute("href", "alternative.css");  
        active_stylesheet = "alternative";
    } else {
        document.getElementById("style").setAttribute("href", "main.css"); 
        active_stylesheet = "main";
    }
}
