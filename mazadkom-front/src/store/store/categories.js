//------SET UP OF INITIAL STATE-----\\
let initialState = {
  categories: [
    { 
      name: 'Botany',
      displayName: 'Botany',
      description: `A collection of women's fashion`
    },
    { 
      name: 'Architecture',
      displayName: 'Architecture',
      description: `A collection of men's fashion`
    },
    {
      name: 'Fantasy',
      displayName: 'Fantasy',
      description: `A collection of fashion Fantasy`
    }
  ],
  activeCategory: ''
}

//-------------REDUCER--------------\\
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE catugary':
      let activeCategory = payload;
      return {...state, activeCategory};

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