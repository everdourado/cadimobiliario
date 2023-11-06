import databaseConnection from "../utils/database"
import Imovel from "../models/imovel"

export const listImoveis = async () => {
    await databaseConnection()
    const imoveis = await Imovel.find()
    return imoveis
}

export const createImovel = async (imovel) => {
    await databaseConnection()
    const createdImovel = await Imovel.create(imovel)
    return createdImovel
}

export const deleteImovel = async (id) => {
    await databaseConnection()
    await Imovel.findByIdAndDelete(id)
}

export const updateImovel = async (id, newBody) => {
    await databaseConnection()
    await Imovel.findByIdAndUpdate(id, newBody)
}

