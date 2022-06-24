function createCard(user) {
  const div = document.createElement('div')
  div.setAttribute('class', 'c-card')

  const divCard = document.createElement('div')
  div.appendChild(divCard)
  div.setAttribute('class', 'c-card-user')

  const divIcone = document.createElement('div')
  divCard.appendChild(divIcone)
  div.setAttribute('class', 'c-card-user-icon')

  const divLine = document.createElement('div')
  divIcone.appendChild(divLine)

  const elementImg = document.createElement('img')
  divIcone.appendChild(elementImg)

  const infoUser = document.createElement('div')
  divCard.appendChild(infoUser)

  const listUl = document.createElement('ul')
  infoUser.appendChild(listUl)

  const attributes = ['cidade', 'idade']
  attributes.forEach(item=>{
      const listLi = document.createElement('li')
      listLi.setAttribute('class', 'c-card-li')
      const attr = document.createTextNode(user[item])
      listLi.appendChild(attr)
      listUl.appendChild(listLi)
  })

  const btn = document.createElement('button')
  document.createTextNode('Editar')
  btn.setAttribute('class', 'c-cadastro-editar c-cadastro-button__margin')
  div.appendChild(btn)

  const cardTitleDescription = document.createElement('p')
  cardTitleDescription.innerHTML = user.nome

  const cardDescription = document.createElement('p')

  divCard.appendChild(cardTitleDescription)
  divCard.appendChild(cardDescription)

  const handler = document.getElementById('teste')
  handler.appendChild(div)


}

/*function editUser(){
  const btn = document.createElement('button')
  btn.createTextNode('Editar')
  btn.onclick.console.log('Botão editar')
  document.body.appendChild(btn)
  btn.setAttribute('class', 'c-cadastro-editar')
}*/

async function listUsers() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("http://localhost:3000/user", requestOptions)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        console.log(response);
      }
    })
    .catch((error) => console.log("error", error));
}

async function createList() {
  const users = await listUsers();
  for (const user of users) {
    createCard(user)
  }
}

async function CreateUser(dados) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dados),
    redirect: "follow",
  };

  const request = await fetch("http://localhost:3000/user", requestOptions);
  return request;
}

function SubmeterDados(event) {
  event.preventDefault();
  //const dados = {nome: document.forms['nome-do-form']['nome'].value}
  const dados = {
    nome: document.forms["form-users"]["firstname"].value,
    sobrenome: document.forms["form-users"]["lastname"].value,
    email: document.forms["form-users"]["email"].value,
    cpf: Number(document.forms["form-users"]["cpf"].value),
    cep: Number(document.forms["form-users"]["cep"].value),
    endereco: document.forms["form-users"]["address"].value,
    numero: document.forms["form-users"]["number"].value,
    cidade: document.forms["form-users"]["city"].value,
    uf: document.forms["form-users"]["uf"].value,
    idade: Number(document.forms["form-users"]["age"].value),
    telefone: Number(document.forms["form-users"]["tel"].value),
  };

  CreateUser(dados)
    .then(async (res) => {
      if (res.status !== 201) {
        const resultado = await res.json();
        console.log(resultado);
        return;
      }
      console.log("Sucesso");
      console.log(res);
      document.location.reload(true);
    })
    .catch((error) => {
      console.error(error);
    });
}
