export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike One',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero assumenda officiis harum, quas sit.',
        img: require('../assets/img/1.png'),
        gallery: [
          { name: 'Nike boots first',  img: require('../assets/img/1.webp') },
          { name: 'Nike boots second',  img: require('../assets/img/2.webp') },
          { name: 'Nike boots third',  img: require('../assets/img/3.webp') }
        ]
      },
      {
        id: 2,
        title: 'Nike Two',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero assumenda officiis harum, quas sit.',
        img: require('../assets/img/4.png'),
        gallery: [
          { name: 'Nike boots first',  img: require('../assets/img/4.webp') },
          { name: 'Nike boots second',  img: require('../assets/img/5.webp') },
          { name: 'Nike boots third',  img: require('../assets/img/6.webp') }
        ]
      },
      {
        id: 3,
        title: 'Nike Three',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero assumenda officiis harum, quas sit.',
        img: require('../assets/img/7.png'),
        gallery: [
          { name: 'Nike boots first',  img: require('../assets/img/7.webp') },
          { name: 'Nike boots second',  img: require('../assets/img/8.webp') },
          { name: 'Nike boots third',  img: require('../assets/img/9.webp') }
        ]
      },
      {
        id: 4,
        title: 'Nike Four',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero assumenda officiis harum, quas sit.',
        img: require('../assets/img/10.png'),
        gallery: [
          { name: 'Nike boots first',  img: require('../assets/img/10.webp') },
          { name: 'Nike boots second',  img: require('../assets/img/11.webp') },
          { name: 'Nike boots third',  img: require('../assets/img/12.webp') }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    },
    getProduct: (state) =>(id) => {
      return state.shopList.find(product => product.id == id)
    }
  }
}