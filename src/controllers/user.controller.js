const userService = require('../services/user.service.js')


//série de verificações feitas pela função create
const create =  async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration"})
    }
    //chama o service onde cria efetivamente o nosso usuário
    const user = await userService.create(req.body);

    if(!user) {
        return res.status(400).send({message: "Error creating User"})
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        },
    });
};

//findAll do controller ≠ findAll de useService
const findAll = async (req, res) => {
    const users = await userService.findAllService()

    if(users.length === 0) {
        return res.status(400).send({message: "Não existe usuários registrados"})
    }

    res.send(users)

}


module.exports = { create, findAll };