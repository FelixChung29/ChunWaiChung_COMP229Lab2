import Contact from '../models/contact.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
const contact = new Contact(req.body) 
try {
await contact.save()
return res.status(200).json({ 
message: "Successfully created!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const list = async (req, res) => { 
try {
let contacts = await Contact.find().select('firstname lastname email') 
res.json(contacts)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const contactByID = async (req, res, next, id) => { 
try {
let contact = await Contact.findById(id) 
if (!contact)
return res.status('400').json({ 
error: "Contact not found"
})
req.contact = contact 
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve contact"
}) 
}
}
const read = (req, res) => {
req.contact = undefined 
//req.profile.salt = undefined
return res.json(req.contact) 
}
const update = async (req, res) => { 
try {
let contact = req.
user = extend(user, req.body) 
user.updated = Date.now() 
await user.save()
user.hashed_password = undefined 
user.salt = undefined
res.json(user) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const remove = async (req, res) => { 
try {
let user = req.profile
let deletedUser = await user.deleteOne() 
deletedUser.hashed_password = undefined 
deletedUser.salt = undefined
res.json(deletedUser) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
export default { create, userByID, read, list, remove, update }


