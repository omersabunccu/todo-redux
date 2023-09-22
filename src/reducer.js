function reducer(state = [], actions) {
  console.log(actions.id);
  if (actions.type === "addNewTask") {
    for (let i of state) {
      if (i.todo === actions.newTodo) {
        alert("already exists such task")
        return state;
      }
    }
    return [
      { todo: actions.newTodo, id: state.length + 1, completed: false },
      ...state,
    ];
  }
  if (actions.type === "removeTodo") {
    const filtered = state.filter((todo) => todo.id !== actions.id);
    return filtered;
  }

  if(actions.type==='markAsComplete'){
    const newData=[]
    for(let i of state){
        if(i.id===actions.id){
            i.completed=true
            newData.push(i)
        }else{
        newData.push(i)
        }
    }  
    return newData
  }
  return state;
}

export default reducer;
