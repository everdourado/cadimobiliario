import bcrypt from 'bcryptjs';
import { loginService } from '../services/auth.service.js';

const login = async (req, res) => {
    const  { email, password } = req.body;

    try {
        const user = await loginService(email);
        
        if (!user){
            return res.status(404).send({message: "Usuário não encontrado ou senha inválida"})
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        
        if (!passwordIsValid){
            return res.status(404).send({message: "Usuário não encontrado ou senha inválida"})
        }

        res.send("Login ok");
    } catch (err) {
        res.status(500).send(err.message)
    }
    

   
    
    
}

export { login }