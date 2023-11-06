import { Router } from "express"

import { createImovel, listImoveis } from "../services/imovel"

const router = Router()

router.get('/', async (req, res) => {
    const imovelList = await listImoveis()
    res.send(imovelList)
})

router.post('/', async (req, res) => {
    const imovel = await createImovel(req.body)
    res.status(201).send(imovel)
})

router.delete('/', (req, res) => {
    res.send('DELETE IMOVEL')
})

export default router