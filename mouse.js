document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.getElementById("rectangle");
    
    rectangle.addEventListener("mouseover", function () {
        rectangle.style.backgroundColor = "red";
    });
    
    rectangle.addEventListener("mousedown", function () {
        rectangle.style.backgroundColor = "blue";
    });
    
    rectangle.addEventListener("mouseup", function () {
        rectangle.style.backgroundColor = "green";
    });
});
