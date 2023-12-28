
const { mongoConnection } = require('../../core');

const { Schema } = require('mongoose');

const customerSchema = new Schema(
    {
      username: { type: String, unique: true, index: true },
      password: { type: String },
     
    },
    {
      timestamps: {
        createdAt: 'create_datetime',
        updatedAt: 'update_datetime',
      },
    },
  );

const CustomersModel = mongoConnection.model('customers', customerSchema);
CustomersModel.createIndexes([
    {
      "username": 1
    },
  ],
  {
    unique: true,
  })


module.exports = CustomersModel;