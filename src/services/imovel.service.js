import Imovel from '../models/Imovel.js';

const createService = (body) => Imovel.create(body);

//offset, limit: paginação no banco de dados
//.sort({id: -1}): exibe dos mais recentes aos antigos
//.skip(offset): para não mostrar intens já listados
const findAllService = (offset, limit) => 
Imovel.find().sort({ id: -1 }).skip(offset).limit(limit);

export {
    createService,
    findAllService
}