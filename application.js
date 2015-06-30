var toDoList = [];

function changeDisplay(){
	var list = document.getElementById("todolist");
	list.innerHTML = "";
	for(var i=0; i<toDoList.length; i++){
	list.innerHTML += '<div class="item">' + toDoList[i] +
	' (<a href="#" onclick="javascript:removeToDo(' + i +')">x</a>)' +
	'</div>';
	}
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
	
	toDoList.push(tmpItem);
	
	changeDisplay();
	
	newToDo.value = "";
	newToDo.select();
}