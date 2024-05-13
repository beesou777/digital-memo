const mongoose = require("mongoose");
const User = require("../model/userModel");
const adminSeeder = require("../adminSeeder");

exports.connectDatabase = async (URL) => {
  await mongoose.connect(URL);
  console.log("Database connected successfully");

  // admin seeding function
  adminSeeder();
};
