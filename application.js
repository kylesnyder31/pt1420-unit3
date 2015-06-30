function addtodolist(){
	var toDoList = [];
	var list;
	list = document.getElementById("todolist");
	
	toDoList[0] = "take out the dog."
	
	list.innerHTML += '<div class="item">' + toDoList[0] + '</div>';
}