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
            user: req.userId
        })
        res.send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const findAll = async (req, res) => {
    //PAGINAÇÃO
    let { limit, offset } = req.query;
    limit = Number(limit)
    offset = Number(offset)

    if(!limit) {
        limit = 5;
    };
    //offset: de onde começa, para não repetir posts já exibidos na tela
    if(!offset) {
        offset = 0;
    };

    const imovel = await findAllService(offset, limit)
    if (imovel.length === 0) {
        return res.status(400).send({ message: "Não existe imóveis registrados" })
    }
    res.send(imovel)
}

export { create, findAll };