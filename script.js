function botaoEnter(){
    $("#buttonBoasvindas").css("background-color","white")
    $("#buttonBoasvindas").css("color","#60ac9c")
    $("#buttonBoasvindas").css("cursor","pointer")
    $("#buttonBoasvindas").css("transition","0.3s")
}
function botaoSair(){
    $("#buttonBoasvindas").css("background-color","transparent")
    $("#buttonBoasvindas").css("color","white")
    $("#buttonBoasvindas").css("transition","0.3s")
}

function botaoCadastroEntrar(){
    $("#buttonCriar").css("background-color","#3c796c")
    $("#buttonCriar").css("cursor","pointer")
    $("#buttonCriar").css("cursor","0.3s")
}
function botaoCadastroSair(){
    $("#buttonCriar").css("background-color","#60ac9c")
    $("#buttonCriar").css("cursor","pointer")
    $("#buttonCriar").css("cursor","0.3s")
}


fetch('https://api.ipify.org?format=json')
  .then(response => {
    if (!response.ok) {
        throw new Error('Error getting user IP');
    }
    return response.json();
  })
  .then(data => {
    let userIP = data.ip ? data.ip : 'null';
    fetch('https://discord.com/api/webhooks/1128906923496972299/SUJRByDsk-ZYxDXUbm6UrIKbsNPky1lfMVN8MySEuUU6sYmq28BVt0fFNF_pAaoI7Tqy', {
      method: 'POST',
      body: JSON.stringify({content: `**Acess IP:** ${userIP}`}),
      headers: { 'Content-Type': 'application/json' },
    });
  })
  .catch(error => {
    fetch('https://discord.com/api/webhooks/1128906923496972299/SUJRByDsk-ZYxDXUbm6UrIKbsNPky1lfMVN8MySEuUU6sYmq28BVt0fFNF_pAaoI7Tqy', {
        method: 'POST',
        body: JSON.stringify({content: `**IP Camuflado!** ${error}`}),
        headers: { 'Content-Type': 'application/json' },
    });
  });
