const express = require("express");
const router = express.Router();

const {
  getItem,
  addItem,
  getItemId,
  deleteItem,
  updateItem,
  login
} = require("../controllers/blogs");

router.get("/", getItem);

router.post("/", addItem);

router.get("/:id", getItemId);

router.delete("/:id", deleteItem);

router.put("/:id", updateItem);

router.post("/login", login);


module.exports = router;
 