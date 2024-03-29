module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Iphone 12',
          price: 2500,
          img: 'http://localhost:3001/images/arquivo_1665431374708.png',
        },
        {
          name: 'Iphone 13',
          price: 3500,
          img: 'http://localhost:3001/images/arquivo_1665431380967.png',
        },
        {
          name: 'Iphone 13 Pro',
          price: 4500,
          img: 'http://localhost:3001/images/arquivo_1665431389248.png',
        },
        {
          name: 'Iphone 13 Pro Max',
          price: 5500,
          img: 'http://localhost:3001/images/arquivo_1665431393295.png',
        },
        {
          name: 'Motorola Edge 30',
          price: 1500,
          img: 'http://localhost:3001/images/motorola-edge-30.jpg',
        },
        {
          name: 'Samsung Galaxy S22',
          price: 3500,
          img: 'http://localhost:3001/images/galaxys22.png',
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
