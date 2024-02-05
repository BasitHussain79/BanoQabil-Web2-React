const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Contact = require('../models/contact');

/**
 * @route GET /api/v1/contacts
 * @desc Get all contacts
 * @access private
 */
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      created_at: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: 'Server error',
    });
  }
});

/**
 * @route POST /api/v1/contacts
 * @desc Create a new contacts
 * @access private
 */
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Please enter your name.').exists(),
      check('phone', 'Please enter your valid phone number.').exists(),
    ],
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({
        errors: result,
      });
    }

    const { name, email, phone, relation } = req.body;

    try {
      const contact = new Contact({
        name,
        email,
        phone,
        relation,
        user: req.user.id,
      });

      await contact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        msg: 'Server error',
      });
    }
  }
);

/**
 * @route PUT /api/v1/contacts/:id
 * @desc Update contact by id
 * @access private
 */
router.put('/:id', auth, async (req, res) => {
  const id = req.params.id;

  const { name, email, phone, relation } = req.body;

  try {
    const contactFields = {};

    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (relation) contactFields.relation = relation;

    let contact = await Contact.findById(id);

    if (!contact) {
      return res.status(400).json({
        msg: 'Contact not found',
      });
    }

    if (req.user.id.toString() !== contact.user.toString()) {
      res.status(401).json({
        msg: 'Invalid authorization',
      });
    }

    contact = await Contact.findByIdAndUpdate(
      id,
      { $set: contactFields },
      { new: true }
    );

    return res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: 'Server error',
    });
  }
});

/**
 * @route Delete /api/v1/contacts/:id
 * @desc Delete contact by id
 * @access private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete contact by ID');
});

module.exports = router;
