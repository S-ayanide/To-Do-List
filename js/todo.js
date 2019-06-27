var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);


var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItem);


function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    var textnode = document.createTextNode(item);

    if(item === ''){
        //return false;
        var par = document.createElement('p'); 
        par.textContent = "ToDo can't be empty";
        document.querySelector(".controls").appendChild(par);
        setTimeout(() => {
            par.className = "paragraphVisual";
            par.remove();
        }, 1500);
        
    }else{
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('id','check');
        var label = document.createElement('label');
        label.setAttribute('for','item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);
        
        input.value = '';

        setTimeout(() => {
            li.className = "visual";
        }, 4);
    }
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}

function removeAllItem(){
    li = ul.children
    ul.remove(li)
}