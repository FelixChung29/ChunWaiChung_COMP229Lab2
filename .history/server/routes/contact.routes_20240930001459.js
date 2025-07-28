import express from 'express'
    import contactCtrl from '../controllers/contact.controller.js' 
    const router = express.Router()
    router.route('/api/contacts').post(contactCtrl.create)
    router.route('/api/contacts').get(contactCtrl.list)
    router.param('userId', contactCtrl.ByID)
    router.route('/api/users/:userId').get(userCtrl.read)
    router.route('/api/users/:userId').put(userCtrl.update)
    router.route('/api/users/:userId').delete(userCtrl.remove)

    export default router


