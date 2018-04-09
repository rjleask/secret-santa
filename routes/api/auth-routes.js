const router = require("express").Router();
let obj = {
    greeting:"hello"
}
router.get("/login", (req,res) => {
    res.json({bingo:"bango"});
})