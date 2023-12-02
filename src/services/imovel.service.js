import Imovel from '../models/Imovel.js';

const createService = (body) => Imovel.create(body);

const findAllService = () => Imovel.find();

export {
    createService,
    findAllService
}