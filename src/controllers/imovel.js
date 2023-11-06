import { Router } from "express"

import { createImovel, listImoveis, deleteImovel, updateImovel } from "../services/imovel"

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

router.delete('/:imovelId', async (req, res) => {
    await deleteImovel(req.params.imovelId)
    res.send()
})

router.put('/:imovelId', async (req, res) => {
    await updateImovel(req.params.imovelId, req.body)
    res.send()
})

export default router