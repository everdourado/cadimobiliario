import { createService, findAllService } from "../services/imovel.service.js"

const create = async (req, res) => {

    try {
        const {
            cidade,
            bairro,
            rua,
            Numero,
            tipoDeImovel,
            tipoDeNegocio,
            atualDisponibilidade,
            telefoneContato
        } = req.body;

        if (!cidade ||
            !bairro ||
            !rua ||
            !Numero ||
            !tipoDeImovel ||
            !tipoDeNegocio ||
            !atualDisponibilidade ||
            !telefoneContato) {
            res.status(400).send({
                message: "Por favor, preencha todos os campos para concluir!",
            })
        }

        await createService({
            cidade,
            bairro,
            rua,
            Numero,
            tipoDeImovel,
            tipoDeNegocio,
            atualDisponibilidade,
            telefoneContato,
            id: "objectidfake"
        })

        res.send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const findAll = (req, res) => {
    const imovel = []
    res.send(imovel)
}

export { create, findAll };