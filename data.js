const bcrypt = require("bcrypt");

const data = {
  products: [
    { id: 1, name: "Smartwatch", price: 150 },
    { id: 2, name: "Bluetooth Speaker", price: 80 },
    { id: 3, name: "Gaming Keyboard", price: 120 },
    { id: 4, name: "4K Webcam", price: 90 },
    { id: 5, name: "External Hard Drive", price: 110 },
  ],
  users: [
    {
      id: 1,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      password: bcrypt.hashSync("pass123", 10),
      age: 27,
      city: "Seattle",
      isActive: true,
    },
    {
      id: 2,
      name: "Frank Thompson",
      email: "frank.thompson@example.com",
      password: bcrypt.hashSync("qwerty", 10),
      age: 32,
      city: "Boston",
      isActive: false,
    },
    {
      id: 3,
      name: "Grace Lee",
      email: "grace.lee@example.com",
      password: bcrypt.hashSync("letmein", 10),
      age: 29,
      city: "Austin",
      isActive: true,
    },
    {
      id: 4,
      name: "Henry Martin",
      email: "henry.martin@example.com",
      password: bcrypt.hashSync("secure456", 10),
      age: 40,
      city: "Denver",
      isActive: true,
    },
  ],
};
module.exports = data;
