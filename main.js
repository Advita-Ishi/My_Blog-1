var mouse_event = "empty";
var last_x , last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
line_width = document.getElementById("line_width").value;
radius = document.getElementById("radius").value;
mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_x, current_y, radius ,0 ,2 * Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}
