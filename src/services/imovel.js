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


