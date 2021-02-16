//attributes
var links = document.getElementsByTagName('a');
console.log(links);
links[0].setAttribute('target','blank');
links[0].setAttribute('class','bordered');

//create html elements
var h1=document.createElement('h1');
console.log(h1);
var text = document.createTextNode("Hello world");
h1.appendChild(text);
console.log(h1);

var main=document.getElementById("main");
main.appendChild(h1);

//hide an element
//main.style.display="none";

//remove the element
//main.remove();

//challenge ***
//create an ul with three li
//append it to the main

//mortal level solution
var ul = document.createElement('ul');
var li1 = document.createElement('li');
var text1 = document.createTextNode('Item 1');
var li2 = document.createElement('li');
var text2 = document.createTextNode('Item 2');



ul.appendChild(li1);
li1.appendChild(text1);
ul.appendChild(li2);
li2.appendChild(text2);
var li2 = document.createElement('li');
var text2 = document.createTextNode('Item 3');
ul.appendChild(li2);
li2.appendChild(text2);



console.log(ul);
main.appendChild(ul);

//inmortal level solution

var ol=document.createElement("ol");
for(var i=1;i<4;i++){
    var list_item=document.createElement('li');
    var list_itemText=document.createTextNode('Element '+i);
    ol.appendChild(list_item);
    list_item.appendChild(list_itemText);
}
main.appendChild(ol);

var u_list=document.createElement("ul");
for(var i=1;i<4;i++){
    var list_item=document.createElement('li');
    var list_itemText=document.createTextNode('Element '+i);
    u_list.appendChild(list_item);
    list_item.appendChild(list_itemText);
}
main.appendChild(u_list);