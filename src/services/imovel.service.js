import Imovel from '../models/Imovel.js';

export const createService = (body) => Imovel.create(body);

//offset, limit: paginação no banco de dados
//.sort({id: -1}): exibe dos mais recentes aos antigos
//.skip(offset): para não mostrar intens já listados
//.populate("user"): traz infos do user no item
export const findAllService = (offset, limit) => 
Imovel.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countImovel = () => Imovel.countDocuments()

export const findByIdService = (id) => Imovel.findById(id).populate("user")