// setup of initial state
let initialState = {
  products: [
    { 
      catugary: 'Botany',
      name: 'Skirt',
      description: `A skirt`,
      price: '$50',
      inventoryCount: '25',
      image: 'https://ae01.alicdn.com/kf/H2ef43a91b29649379fab49535117bb94D/Stylish-Elegant-Skirt-Suits-Women-2021-Fashion-2-Buttons-Cropped-Blazer-Side-Split-Mini-Skirts-Suits.jpg_Q90.jpg_.webp'
    },
    { 
      catugary: 'Botany',
      name: 'Jeans',
      description: `Levi's`,
      price: '$80',
      inventoryCount: '30',
      image: 'https://photo.venus.com/im/20177449.jpg?preset=xl_70'
    },
    { 
      catugary: 'Botany',
      name: 'Sweater',
      description: `A sweater`,
      price: '$65',
      inventoryCount: '45',
      image: 'https://ae01.alicdn.com/kf/Hcee760e999de4c5f876f700a554c24c0w/Women-Solid-Beige-Hollow-Sweater-2021-Spring-Lady-Thin-Hole-Split-Knitwear-Cool-Hipster-Gothic-O.jpg_Q90.jpg_.webp'
    },
    { 
      catugary: 'Architecture',
      name: 'Dress shirt',
      description: `A dress shirt`,
      price: '$50',
      inventoryCount: '33',
      image: 'https://spy.com/wp-content/uploads/2021/03/dress-shirt-bonobos.jpg?w=683'
    },
    { 
      catugary: 'Architecture',
      name: 'Jeans',
      description: `Levi's`,
      price: '$68',
      inventoryCount: '12',
      image: 'https://i.pinimg.com/236x/fb/b1/41/fbb141cd71ca0bca0587659731b5125f.jpg'
    },
    { 
      catugary: 'Architecture',
      name: 'Belt',
      description: `A belt`,
      price: '$22',
      inventoryCount: '46',
      image: 'https://cdn.shopify.com/s/files/1/1994/2941/products/110-0007_color_tobacco_03_1280x.jpg?v=1619154322'
    },
    {
      name: "Spirited Away (chinese)",
      price: 50,
      image: "https://img.posterlounge.co.uk/images/l/1878415.jpg",
      description: "100 x 130 cm ",
      catugary: "Fantasy"
      },
      {
      name: "WOOD PRINT",
      price: 100,
      image: "https://img.posterlounge.co.uk/img/products/410000/405765/405765_wood_l.jpg",
      description: "70 x 100 cm Midsummer Eve by Edward Robert Hughes",
      catugary: "Fantasy"
      },
      {
      name: "GALLERY PRINT",
      price: 120,
      image: "https://img.posterlounge.co.uk/images/big/1271317.jpg",
      description: "70 x 90 cm Petal by Anna Dittmann",
      catugary: "Fantasy"
      },
      {
 
      name: "GALLERY PRINT",
      price: 120,
      image: "https://img.posterlounge.co.uk/images/big/322949.jpg",
      description: "70 x 90 cm Rainbow Unicorn Pegasus by Dolphins DreamDesign",
      catugary: "Fantasy"
      },
      {
    
      name: "WOOD PRINT",
      price: 95,
      image: "https://img.posterlounge.co.uk/img/products/550000/542035/542035_wood_l.jpg",
      description: "70 x 90 cm Skeleton with a burning cigarette by Vincent van Gogh",
      catugary: "Fantasy"
      },
  ],
}

//--------------REDUCER----------------\\
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE ACTIVE CATEGORY':
      let selectCategory = payload;
      return { ...state, activeCategory: selectCategory };
    
    default:
      return state;
  }
}

//------------ACTIONS--------------------\\
export const catChange = (category) => {
  return {
    type: 'CHANGE ACTIVE CATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}