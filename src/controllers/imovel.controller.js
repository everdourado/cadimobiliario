import { createService, findAllService } from "../services/imovel.service.js"

const create = async (req, res) => {

    try {
        const {
            cidade,
            bairro,
            rua,
            numero,
            tipoDeImovel,
            tipoDeNegocio,
            atualDisponibilidade,
            telefoneContato
        } = req.body;

        if (!cidade ||
            !bairro ||
            !rua ||
            !numero ||
            !tipoDeImovel ||
            !tipoDeNegocio ||
            !atualDisponibilidade ||
            !telefoneContato) {
                res.sendStatus(400).send({
                message: "Por favor, preencha todos os campos para concluir!",
            })
        }

        await createService({
            cidade,
            bairro,
            rua,
            numero,
            tipoDeImovel,
            tipoDeNegocio,
            atualDisponibilidade,
            telefoneContato,
            user: { _id: "6562599c533032983940b1ce"}
        })

        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500).send({ message: err.message })
    }

}

const findAll = async (req, res) => {
    const imovel = await findAllService()
    if (imovel.length === 0) {
        return res.status(400).send({ message: "Não existe imóveis registrados" })
    }
    res.send(imovel)
}

export { create, findAll };