var toDoList = [];

function loadToDoList(){
	if(localStorage.todolist){
	toDoList = JSON.parse(localStorage.todolist);
	changeDisplay();
	}
}

function changeDisplay(){
	var list = document.getElementById("todolist");
	list.innerHTML = "";
	for(var i=0; i<toDoList.length; i++){
            list.innerHTML += '<li class="list-group-item">' + toDoList[i] +
            '<div class="btn-group-xs pull-right">' +
            '<button type="button" class="btn btn-warning delete" onclick="javascript:removeToDo(' + i +')">' +
            'Delete</button>' +
            '</div>' +
            '</li>';
	}
	localStorage.toDoList = JSON.stringify(toDoList);
}
	
function removeToDo(itemToRemove){
	var newList = [];
	for(var i=0; i<toDoList.length; i++){
	 if( i !== itemToRemove) {
		newList.push(toDoList[i]);
	  }
	}
	toDoList = newList;
	changeDisplay();	
}

function addtodolist(){
	
	var tmpItem;
	var newToDo = document.getElementById("todonew");
	
	tmpItem = newToDo.value;
	if(tmpItem=== ""){
		alert("you didn't put a valid entry");
		return;
	}
	
	toDoList.push(tmpItem);
	
	changeDisplay();
	
	newToDo.value = "";
	newToDo.select();
}