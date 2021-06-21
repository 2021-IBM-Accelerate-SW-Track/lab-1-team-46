function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

//set equal to the function that adds new tasks
var arr = [ 2, 4, 6, 5, 4 ];
 
if (hasDuplicates(arr)) {
      // The function below will start the confirmation dialog
      return (
        function duplicate() {
            let duplicate = confirm("This event already exists");
            if (confirmAction) {
                alert("Action successfully executed");
                //delete or do not add event to array
            }
        }
        )
   // console.log("Event already exists");
} else {
    //add event to array
}