import { Router } from 'express';
import Auth from "../../middleware/Auth";
const router: Router = Router();
router.use(Auth.authMiddleWare);

router.get('/test/test', (req,res)=>{  
    return res.json({
        data:"test api"
    })
});

export default router;