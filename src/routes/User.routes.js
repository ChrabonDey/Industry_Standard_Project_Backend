import {Router} from 'express'
import { registerUser } from '../models/User/User.controller.js';

const router=Router()

router.route('/register').post(registerUser)

export default router;