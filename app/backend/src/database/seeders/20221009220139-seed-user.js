module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Saulo Alves',
          email: 'saulo@hotmail.com',
          password: 'e10adc3949ba59abbe56e057f20f883e',
        },
        {
          name: 'Iran Ferreira',
          email: 'iran@hotmail.com',
          password: 'e10adc3949ba59abbe56e057f20f883e',
        },
        {
          name: 'Silvio Santos',
          email: 'silvio@hotmail.com',
          password: 'e10adc3949ba59abbe56e057f20f883e',
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
