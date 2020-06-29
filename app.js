function get_todos() {

    // grab data from localStorage
    var todos = new Array();

    var todosString = localStorage.getItem('todos');

    //convert to JSON

    if(null != todosString) {
        todos = JSON.parse(todosString);
    }
    return todos;

}

function add() {

    var todos = get_todos();
    
    let textBoxContent = document.getElementById("itemToAdd").value;
    
    todos.push(textBoxContent);
    
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById("itemToAdd").value = "";
   show();

}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    var newDelID = null;
    var delID = 'del';
    for (var i = 0; i< todos.length; i++) {
        newDelID = delID + i;
        html +=  '<li>' + todos[i] + '<button onclick=\"outtaHere(id)\" id=\"' + newDelID + '\">Delete</button> </li>';
    }
    html += '</ul>';
    
    document.getElementById("todos").innerHTML = html;
}

function outtaHere(id) {
    let iNum = id.substring(3);
    var todos = get_todos();
    console.log(todos);
       for (var i =0; i< todos.length; i++) {
            if (i == iNum) {
                todos.splice(i, 1);
            break;
        }
    }
    console.log(todos);
    
    var html = '<ul>';
    var newDelID = null;
    var delID = 'del';
    for (var i = 0; i< todos.length; i++) {
        newDelID = delID + i;
        html +=  '<li>' + todos[i] + '<button onclick=\"outtaHere(id)\" id=\"' + newDelID + '\">Delete</button> </li>';
    }
    html += '</ul>';
    
    document.getElementById("todos").innerHTML = html;
}

show();
document.getElementById("addTodo").addEventListener('click', add);


/* 
1.unique id for each item
2. need delete Button that can be accessed individually in js
3. use ID for each item to give its button a unique id
4. you can grab the ID for the todo that is to be deleted using JS
5. remember to creatu html using string include IDs
6. to remove an element from an array, use the function slice()
7. buttons will need event listeners.  Those are to be created at the time of
dynamically create the buttons.  doesn't happen until you add innerhtml
*/