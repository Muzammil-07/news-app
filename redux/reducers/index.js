const initialState = [
]
const changeData = (state =initialState,action)=>{
  switch(action.type){
    case "Add": return action.payload
    default :return state
  }
}

export default changeData