const {TestaCPF} = require('../utils/utils')

module.exports = [(req, res, next) => {
const { body } = req;
console.log(body);
const erros = {};


if (!body.nome) {
    erros.nome = ["Nome é obrigatório!"];
} else {
    if (typeof body.nome !== "string" || body.nome.length < 2) {
    if (erros.nome) {
        erros.nome.push("Nome inválido!");
    } else {
        erros.nome = ["Nome inválido!"];
    }
    }
};

if (!body.sobrenome) {
    erros.sobrenome = ["Sobrenome é obrigatório!"];
} else {
    if (typeof body.sobrenome !== "string" || body.sobrenome.length < 2) {
    if (erros.sobrenome) {
        erros.sobrenome.push("Sobrenome inválido!");
    } else {
        erros.sobrenome = ["Sobrenome inválido!"];
    }
    }
};

if (!body.telefone) {
    body.telefone = undefined;
} else {
    if (typeof body.telefone !== "number" || body.telefone.length < 11) {
        erros.telefone = ["Telefone inválido!"];
    }
};

if (!body.cpf) {
    erros.cpf = ["CPF é obrigatório!"];
} else {
    if (typeof body.cpf !== "number" || body.cpf.length < 11 || !TestaCPF(String(body.cpf)) ) {
        erros.cpf = ["CPF inválido!"];
    }
};

if (!body.cep) {
    erros.cep = ["CEP é obrigatório!"];
} else {
    if (typeof body.cep !== "number" || body.cep.length < 8) {
        erros.cep = ["CEP inválido!"];
}
};

if (!body.endereco) {
    erros.endereco = ["Endereço é obrigatório!"];
} else {
    if (typeof body.endereco !== "string" || body.endereco.length > 255) {
        erros.endereco = ["Endereço inválido!"];
    }
};

if (!body.numero) {
    erros.numero = ["Número é obrigatório!"];
} else {
    if (typeof body.numero !== "string" || body.numero.length > 5) {
        erros.numero = ["Número inválido!"];
    }
};

if (!body.cidade) {
    erros.cidade = ["Cidade é obrigatório!"];
} else {
    if (typeof body.cidade !== "string" || body.cidade.length > 255) {
        erros.cidade = ["Cidade inválida!"];
    }
};

if (!body.uf) {
    erros.uf = ["UF é obrigatório!"];
} else {
    if (typeof body.uf !== "string" || body.uf.length > 5) {
        erros.uf = ["UF inválido!"];
    }
};

if (!body.idade) {
    erros.idade = ["Idade é obrigatório!"];
} else {
    if (typeof body.idade !== "number" || body.idade.length > 2) {
        erros.idade = ["Idade inválida!"];
    }
};

/*(!body.foto) {
    erros.foto = ["String foto"];
}*/

if (Object.keys(erros).length) {
    return res.status(400).json(erros);
}

next();
}
]