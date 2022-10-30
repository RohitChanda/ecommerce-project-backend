import { Router} from 'express';
import Login from "../../controllers/auth/login";
import { loginBodyValidators } from "../../validators/auth/login-validators";
import { createValidator } from "express-joi-validation";

const router: Router = Router();
const validator = createValidator();

router.post(
    '/auth/login', 
    validator.body(loginBodyValidators),
    Login.doLogin
);

export default router;