const cadastroImovel = {
    responsaveis: [
        {

            nome: '',
            cpf: '',
        }

    ],

    imoveis: [
        {
            proprietario: '',
            rua: '',
            numero: '',
            bairro: '',
            tipoDeImovel: '',
            tipoDeNegocio: '',
            valor: '',
            contatoCelular: '',
            email: '',
            situacao: '',

        }
    ],

};

function cadastrarImovel(dados) {
    cadastroImovel.imoveis.push({
        id: cadastroImovel.imoveis.length + 1,
        proprietario: dados.proprietario,
        rua: dados.rua,
        numero: dados.numero,
        bairro: dados.bairro,
        tipoDeImovel: dados.tipoDeImovel,
        tipoDeNegocio: dados.tipoDeNegocio,
        valor: dados.valor,
        contatoCelular: dados.contatoCelular,
        email: dados.email,
        situacao: dados.situacao,
    });

}

function verImoveis() {
    return cadastroImovel.imoveis;
}

function atualizarImoveis(id, novaSituacao) {
    const imovelParaAtualizar = verImoveis().find((imovel) => {
        return imovel.id === id;
    });

    function apagarImovel(id) {
        const listaImoveisAtualizada = verImoveis().filter((imoveisAtuais) => {
            return imoveisAtuais.id == id;
        })

        cadastroImovel.imoveis = listaImoveisAtualizada;

    }

}




