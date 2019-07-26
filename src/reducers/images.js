export default function reducer(state = [], action) {
  switch(action.type){
    case 'IMAGES_LOADED': {
    return action.payload
  }

    default: return state
  }
  
} 