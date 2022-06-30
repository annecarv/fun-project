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

  const attributes = ['nome', 'sobrenome', ]
  attributes.forEach(item=>{
      const listLi = document.createElement('li')
      listLi.setAttribute('class', 'c-card-li')
      const attr = document.createTextNode(user[item])
      listLi.appendChild(attr)
      listUl.appendChild(listLi)
  })

  const btnReadUser = document.createElement('button')
  btnReadUser.setAttribute('class', 'c-cadastro-read c-cadastro-read-txt c-cadastro-button-read__position')
  btnReadUser.addEventListener('click', function () {document.location.href=`http://127.0.0.1:5500/view/userCard.html?id=${user._id}`})
  div.appendChild(btnReadUser)
  const txtReadUser = document.createTextNode('Visualizar')
  btnReadUser.appendChild(txtReadUser)

  const btnEdit = document.createElement('button')
  btnEdit.setAttribute('class', 'c-cadastro-edit c-cadastro-edit-txt c-cadastro-button-edit__position')
  div.appendChild(btnEdit)
  const txtEdit = document.createTextNode('Editar')
  btnEdit.appendChild(txtEdit)
  btnEdit.addEventListener('click', function () {document.location.href=`http://127.0.0.1:5500/view/index.html?id=${user._id}`})

  const btnDelete = document.createElement('button')
  btnDelete.setAttribute('class', 'c-cadastro-delete c-cadastro-delete-txt c-cadastro-button-delete__position')
  btnDelete.addEventListener('click', () => { DeleteUser(user); alert('Cuidado, ação irreversível'); document.location.reload()})
  div.appendChild(btnDelete)
  const txtDelete = document.createTextNode('Deletar')
  btnDelete.appendChild(txtDelete)

  const cardTitleDescription = document.createElement('p')
  cardTitleDescription.innerHTML = user.cidade

  const cardDescription = document.createElement('p')

  divCard.appendChild(cardTitleDescription)
  divCard.appendChild(cardDescription)

  const handler = document.getElementById('c-card-section')
  handler.appendChild(div)

}

function createCardUser(user) {

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

  const attributes = ['nome', 'sobrenome', 'email', 'cpf', 'endereco', 'numero', 'cep', 'cidade', 'uf', 'idade', 'telefone']
  attributes.forEach(item=>{
      const listLi = document.createElement('li')
      listLi.setAttribute('class', 'c-card-li')
      const attr = document.createTextNode(user[item])
      listLi.appendChild(attr)
      listUl.appendChild(listLi)
  })

  const btnReadUser = document.createElement('button')
  btnReadUser.setAttribute('class', 'c-cadastro-read c-cadastro-read-txt c-cadastro-button-read__position')
  btnReadUser.addEventListener('click', function () {document.location.href=`http://127.0.0.1:5500/view/users.html`})
  div.appendChild(btnReadUser)
  const txtReadUser = document.createTextNode('Voltar')
  btnReadUser.appendChild(txtReadUser)

  const btnEdit = document.createElement('button')
  btnEdit.setAttribute('class', 'c-cadastro-edit c-cadastro-edit-txt c-cadastro-button-edit__position')
  div.appendChild(btnEdit)
  const txtEdit = document.createTextNode('Editar')
  btnEdit.appendChild(txtEdit)
  btnEdit.addEventListener('click', function () {document.location.href=`http://127.0.0.1:5500/view/index.html?id=${user._id}`})

  const btnDelete = document.createElement('button')
  btnDelete.setAttribute('class', 'c-cadastro-delete c-cadastro-delete-txt c-cadastro-button-delete__position')
  btnDelete.addEventListener('click', () => { DeleteUser(user); alert('Cuidado, ação irreversível'); document.location.reload()})
  div.appendChild(btnDelete)
  const txtDelete = document.createTextNode('Deletar')
  btnDelete.appendChild(txtDelete)

  const handler = document.getElementById('c-card-section')
  handler.appendChild(div)


}

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

  const handler = document.getElementById('c-card-section')

  const title = document.createElement('h3')
  title.appendChild(document.createTextNode('Usuários Cadastrados'))
  title.setAttribute('class', 'c-card-user-title')
  handler.appendChild(title)
  handler.appendChild

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

async function updateUser(user, id) {

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: JSON.stringify(user),
  redirect: 'follow'
}

const request = fetch(`http://localhost:3000/userCard/${id}`, requestOptions)
return request
}

async function SubmeterDados(event) {
  event.preventDefault();

  const params = new URLSearchParams(window.location.search)
  let userId = null
    if (params.has('id')) {
        userId = params.get('id')
  }

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
  }

  if(userId) {
  await updateUser(dados, userId)
    .then(async (res) => {
      if (res.status !== 200) {
        const resultado = await res.json();
        console.log(resultado);
        return;
      }
      console.log("Sucesso");
      console.log(res);
      document.location.href='http://127.0.0.1:5500/view/index.html'
    })
    .catch((error) => {
      console.error(error);
    })
  } else {
  await CreateUser(dados)
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
    })
  }
}

async function getUser(id){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const getUsersReturn = await fetch(`http://localhost:3000/user/${id}`, requestOptions)
  return getUsersReturn
}

function carregarDados (user) {

  document.forms["form-users"]["firstname"].value = user.nome
  document.forms["form-users"]["lastname"].value = user.sobrenome
  document.forms["form-users"]["email"].value = user.email
  document.forms["form-users"]["cpf"].value = user.cpf
  document.forms["form-users"]["cep"].value = user.cep
  document.forms["form-users"]["address"].value = user.endereco
  document.forms["form-users"]["number"].value = user.numero
  document.forms["form-users"]["city"].value = user.cidade
  document.forms["form-users"]["uf"].value = user.uf
  document.forms["form-users"]["age"].value = user.idade
  document.forms["form-users"]["tel"].value = user.telefone
}

async function DeleteUser(user) {

  var requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };

  const request = await fetch(`http://localhost:3000/user/${user._id}`, requestOptions);
  return request;
}