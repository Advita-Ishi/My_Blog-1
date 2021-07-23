var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

var player_img = "";
var block_img = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;

        player_img.scaleToWidth(150);
        player_img.scaleToHeight(150);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}

function newImg_update(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_img = Img;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == "77"){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if(keypressed == '67'){
        newImg_update("cloud.jpg");
    }
    if(keypressed == '68'){
        newImg_update("dark_green.png");
    }
    if(keypressed == '71'){
        newImg_update("ground.png");
    }
    if(keypressed == '76'){
        newImg_update("light_green.png");
    }
    if(keypressed == '82'){
        newImg_update("roof.jpg");
    }
    if(keypressed == '84'){
        newImg_update("trunk.jpg");
    }
    if(keypressed == '85'){
        newImg_update("unique.png");
    }
    if(keypressed == '87'){
        newImg_update("wall.jpg");
    }
    if(keypressed == '89'){
        newImg_update("yellow_wall.png");
    }
    if(keypressed == '38'){
        up();
     }
     if(keypressed == '40'){
        down();
     }
     if(keypressed == '37'){
        left();
     }
     if(keypressed == '39'){
        right();
     }
    
    
}
function up() {
    if(player_y >=0) {
        player_y = player_y - block_height;
        console.log("block height ="+ player_y);
        canvas.remove(player_img);
        player_update();
    }
}

function down() {
    if(player_y <=600) {
        player_y = player_y + block_height;
        canvas.remove(player_img);
        player_update();
    }
}

function left() {
    if(player_x >=0) {
        player_x = player_x - block_width;
        canvas.remove(player_img);
        player_update();
    }
}

function right() {
    if(player_x <= 900) {
        player_x = player_x + block_width;
        canvas.remove(player_img);
        player_update();
    }
}



