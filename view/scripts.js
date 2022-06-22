async function routeConfig() {

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/user", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
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

   const request = await fetch("http://localhost:3000/user", requestOptions)
    return request
    
    //.then((response) => response.json())
    //.then((result) => result)
    //.catch((error) => error)
}

function SubmeterDados(event) {

  event.preventDefault()
  //const dados = {nome: document.forms['nome-do-form']['nome'].value}
  const dados = {
    nome: document.forms['form-users']['firstname'].value,
    sobrenome:document.forms['form-users']['lastname'].value,
    email:document.forms['form-users']['email'].value,
    cpf:Number(document.forms['form-users']['cpf'].value),
    cep:Number(document.forms['form-users']['cep'].value),
    endereco: document.forms['form-users']['address'].value,
    numero: document.forms['form-users']['number'].value,
    cidade: document.forms['form-users']['city'].value,
    uf: document.forms['form-users']['uf'].value,
    idade:Number(document.forms['form-users']['age'].value),
    telefone:Number(document.forms['form-users']['tel'].value)
  }

  CreateUser(dados).then(async res => {
    if (res.status !== 201 ) {
      const resultado = await res.json()
      console.log(resultado)
      return
    }
    console.log('Sucesso')
    console.log(res)
    document.location.reload(true)
  }).catch ( error => {
    console.error(error);
  })
}

document.addEventListener('DOMContentLoaded', function eventos () {
  const buttonSubmit = document.getElementsByClassName('c-cadastro-input-cadastrar')[0]
  buttonSubmit.addEventListener('click', SubmeterDados)

})

routeConfig();
