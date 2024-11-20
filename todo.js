function addTask()
{
   var taskInput = document.getElementById("newtask")

   var taskList = document.getElementById("taskList");

   if(taskInput.value===""){
    alert("Please enter the task")
    return 
   }

   var listItem = document.createElement('li')
   listItem.innerText = taskInput.value

   var buttonContainer = document.createElement('div')
   buttonContainer.className='taskButton'

   var deleteButton = document.createElement('button')
   deleteButton.innerText = 'Delete'
   deleteButton.onclick = function() {
    taskList.removeChild(listItem)
   }

   var completeButton = document.createElement('button')
   completeButton.innerText = 'Complete'
   completeButton.onclick = function(){
    listItem.classList.toggle('completed')
   }

   buttonContainer.appendChild(deleteButton)
   buttonContainer.appendChild(completeButton)
   listItem.appendChild(buttonContainer)
   taskList.appendChild(listItem)

   taskInput.value=""
}