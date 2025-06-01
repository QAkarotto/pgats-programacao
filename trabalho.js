import dados from './dados.js';

function geradorDeTagsDeIdentificacao(nomePetTag) {
    return nomePetTag.toUpperCase()
}

function verificarSePodeSerAdotado(idadePet, portePet) {
    return !!(idadePet === dados.idadePermitida && portePet === dados.portePermitido)
}

function calcularConsumoDeRacao(nomePet, idadePet, pesoPet) {
    return idadePet * pesoPet * 300
}

function decidirTipoDeAtividadePorPorte(portePet) {
    switch (portePet) {
        case "pequeno":
            return dados.atividadePortePequeno
        case "medio":
            return dados.atividadePorteMedio
        case "grande":
            return dados.atividadePorteGrande
        default:
            return ('Porte não reconhecido.')
    }
}

async function buscarDadoAsync() {
    try {
        return dados.nomePet
    } catch (erro) {
        console.error('Erro ao buscar dado:', erro)
        throw erro
    }
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}