const { getUsers, deleteUser } = require("../../controller/admin/user/userController")
const isAuthenticated = require("../../middleware/isAuthenticated")
const permitTo= require("../../middleware/permitTo")

const router = require("express").Router()

router.route("/users").get(isAuthenticated,permitTo('admin'), getUsers)
router.route("/users/:id").delete(isAuthenticated,permitTo('admin'), deleteUser)



module.exports = router 