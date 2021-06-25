menu_list_array = ["Veg Margherita Pizza", "Chicken Deluxe Pizza", "Veg Deluxe Pizza", "Paneer Tikka Pizza", "Pepperoni Pizza", "Desi Veg Pizza (Gorgonzola and mushroom)" 
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class= 'menulist ' >
    menu_list_array. sort ();
    for(var i-0;i<menu_list_array. length; i++){
    htmldata=htmldata+'<li>'+ menu_list_array [i] + '</li> "
    htmldata=htmldata+"</ol> "
    document.getElement By Id ("display_menu"). innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}