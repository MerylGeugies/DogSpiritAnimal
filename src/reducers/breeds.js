export default function reducer(state = [], action) {
  switch(action.type){
    case 'BREEDS_LOADED': {
    return action.payload
    }
  default: return state
  }
  
} 