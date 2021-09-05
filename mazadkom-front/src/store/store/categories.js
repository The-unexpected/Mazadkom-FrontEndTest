
let initialState = {
  categories: [
    {
      name: 'Botany',
      displayName: 'Botany',

    },
    {
      name: 'Architecture',
      displayName: 'Architecture',

    },
    {
      name: 'Fantasy',
      displayName: 'Fantasy',

    }
  ],
  activeCategory: ''
}


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE catugary':
      let activeCategory = payload;
      return { ...state, activeCategory };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const changeCategory = (name) => {
  return {
    type: 'CHANGE catugary',
    payload: name
  }
}


export const reset = () => {
  return {
    type: 'RESET'
  }
}