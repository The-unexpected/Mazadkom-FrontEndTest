
let initialState = {
  products: [
  ]
}


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE ACTIVE catugary':
      let selectCategory = payload;
      return { ...state, activeCategory: selectCategory };
    
    default:
      return state;
  }
}

export const catChange = (catugary) => {
  return {
    type: 'CHANGE ACTIVE catugary',
    payload: catugary
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}