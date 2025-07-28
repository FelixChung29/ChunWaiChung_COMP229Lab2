import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// ✅ Create contact
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(201).json({
      message: 'Contact successfully created!',
      contact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// ✅ List all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find().select('firstname lastname email message created');
    return res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// ✅ Middleware: Load contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }
    req.contact = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: 'Could not retrieve contact'
    });
  }
};

// ✅ Read a specific contact (via req.contact)
const read = (req, res) => {
  return res.json(req.contact);
};

// ✅ Update contact
const update = async (req, res) => {
  try {
    let contact = req.contact;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    return res.json({
      message: 'Contact updated successfully',
      contact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// ✅ Delete contact
const remove = async (req, res) => {
  try {
    const deletedContact = await req.contact.deleteOne();
    return res.json({
      message: 'Contact deleted successfully',
      contact: deletedContact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// ✅ Export all controller methods
export default {
  create,
  list,
  contactByID,
  read,
  update,
  remove
};
