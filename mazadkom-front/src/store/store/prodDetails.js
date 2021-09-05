let initialState = {
  selectedProd: []
}


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SELECT':
      console.log({payload});
      return {...state, selectedProd: payload};

    default:
      return state;
  }
}


export const selectProduct = (product) => {
  return {
    type: 'SELECT',
    payload: product
  }
}