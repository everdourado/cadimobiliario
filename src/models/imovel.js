import mongoose from 'mongoose'

const ImovelSchema = new mongoose.Schema({
    proprietario: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telefone: {type: Number, required: true},

    cidade: {type: String, required: true},
    bairro: {type: String, required: true},
    rua: {type: String, required: true},
    numero: {type: Number, required: true},

    tipoDeImovel: {type: String, required: true},
    tipoDeNegocio: {type: String, required: true},
    atualDisponibilidade: {type: String, required: true}

})

export default mongoose.models.Imovel || mongoose.model('Imovel', ImovelSchema)

/**
 * Para fins de teste no thunder client
 * {
    "proprietario": "",
    "email": "",
    "telefone": "",
    
    "cidade": "",
    "bairro": "",
    "rua": "",
    "numero": "",

    "tipoDeImovel": "",
    "tipoDeNegocio": "",
    "atualDisponibilidade": ""
    
    }
 */