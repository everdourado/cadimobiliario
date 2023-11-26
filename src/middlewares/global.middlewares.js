const mongoose = require("mongoose");
const userService = require("../services/user.service");


//funções de interceptação, vai interceptar a chamada entre a rota e a função de callback

const validId = (req, res, next) => {
    const id = req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "Id inválido" })
    }

    next()
};

const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado "})
    }

    next()
};

module.exports = { validId, validUser }

