import { Router } from "express"

import { createImovel, listImoveis } from "../services/imovel"

const router = Router()

router.get('/', async (req, res) => {
    const imovelList = await listImoveis()
    res.send(imovelList)
})

router.post('/', async (req, res) => {
    try {
    const imovel = await createImovel(req.body)
    res.status(201).send(imovel)
    } catch (err) {
        res.status(400).send(err)
    }
    
})

router.delete('/', (req, res) => {
    res.send('DELETE IMOVEL')
})

export default router