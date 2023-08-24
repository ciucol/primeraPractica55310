const Users = require('../models/user.model')

class UsersMongoDao {
  async findAll() {
    return await Users.find()
  }

  async insertOne(newUserInfo) {
    const newUser = await Users.create(newUserInfo)
    return newUser._id
  }
}

module.exports = UsersMongoDao
