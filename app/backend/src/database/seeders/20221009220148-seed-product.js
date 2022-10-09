module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Iphone 12',
          price: 2500,
        },
        {
          name: 'Iphone 13',
          price: 3500,
        },
        {
          name: 'Iphone 13 Pro',
          price: 4500,
        },
        {
          name: 'Iphone 13 Pro Max',
          price: 5500,
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
