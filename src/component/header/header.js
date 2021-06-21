export default function Header(){
    return <div>2021 IBM Accelerate Software Track Lab Boiler Plate</div>
}


deleteTask(e) {
  if (this._inputElement.value !== "") {
      var taskToDelete = {
          taskDescription: this._inputElement.value,
          timeAdded: Date().toLocaleString()
      };
      

      //line to keep track of todo list index
      const index = this.items.indexOf(taskToDelete);
   
      this.setState((prevState) => {
          return { 
              items: prevState.items.splice(index,1); 
          };
      });
     
      this._inputElement.value = null;
  }
       
  e.preventDefault();

}



<form onSubmit={this.deleteTask}>
    <input ref={(input) => this._inputElement = input} placeholder="Please enter a new task!"></input>
    <button type="submit">Delete Task</button>
 </form>
