import { createService, findAllService } from "../services/imovel.service.js"

const create = async (req, res) => {

    try {
        const { authorization } = req.headers;

        if(!authorization) {
            return res.send(401);
        }

        const parts = authorization.split(" ")

        if (parts.length !== 2) {
            return res.send(401);
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.send(401);
        }

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
                return res.status(400).send({
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

        res.send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
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