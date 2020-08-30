const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route GET api/contacts
// @desc get all user's contacts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    return res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc    add new contact
// @access Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT api/contacts:id
// @desc    update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route DELETE api/contacts:id
// @desc    delete contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;