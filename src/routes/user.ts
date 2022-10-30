import { Router } from 'express';
import Auth from "../middleware/Auth";

const router: Router = Router();
router.use(Auth.authMiddleWare);

router.post('/user', (req,res)=>{  
    console.log(req.body); 
});

export default router;