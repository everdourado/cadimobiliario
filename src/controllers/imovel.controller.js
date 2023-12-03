import { createService, findAllService, countImovel } from "../services/imovel.service.js"

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
    const total = await countImovel();
    const currentUrl = req.baseUrl;

    const next = offset + limit
    const nextUrl =
    next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (imovel.length === 0) {
        return res.status(400).send({ message: "Não existe imóveis registrados" })
    }
    //ENVIAR PARA O CLIENTE PARA MANIPULAÇÃO NO FRONTEND
    res.send({
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,

        results: imovel.map(item => ({
            id: item._id,
            cidade: item.cidade,
            bairro: item.bairro,
            rua: item.rua,
            numero: item.numero,
            tipoDeImovel: item.tipoDeImovel,
            tipoDeNegocio: item.tipoDeNegocio,
            atualDisponibilidade: item.atualDisponibilidade,
            telefoneContato: item.telefoneContato,
            name: item.user.name,
            username: item.user.username,
            userAvatar: item.user.avatar

        }))
    })
}

export { create, findAll };