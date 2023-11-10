const { registerUser, authUser } = require("../controllers/userControllers");

const router = require("express").Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
