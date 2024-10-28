const form = document.getElementById('formulario');
const UserNum = document.getElementById('UserNum');
const resultado = document.getElementById('resultado');
const limpar = document.getElementById('limp');




/*

const mostrarPontuacao = document.getElementById('pontuacao');
const ptd = document.getElementById('imprimirPontuacao');





function aparecer()
{

}

*/

function limpeza()
{
    resultado.innerHTML = 'Resultado limpo com sucesso!';
}

limpar.addEventListener('click', limpeza);



form.addEventListener('submit', function (game) {
    game.preventDefault(); 
    const cpuNumber = parseInt(Math.random() * 3); 
    const UserNumero = parseInt(UserNum.value);  
    let retorno = jogo(cpuNumber, UserNumero);
    resultado.innerHTML =  `${retorno}`;
})





function jogo(cpu, user)
{

    const sorteioNum = parseInt(Math.random() * 3); 
    if(cpu === sorteioNum && user != sorteioNum)
    {
        
        return `O computador ganhou!<br><br>Número sorteado: ${sorteioNum}<br>Número do usuario: ${user}<br>Número do computador ${cpu}`;
        
    }

    else if(cpu != sorteioNum && user === sorteioNum)
    { 
        return `O usuario ganhou!<br><br> Número sorteado: ${sorteioNum}<br>Número do usuario: ${user}<br>Número do computador ${cpu}`;
    }
    
    else if(cpu != sorteioNum && user != sorteioNum)
    {

        return `Ambos erraram!<br><br>Número sorteado: ${sorteioNum}<br>Número do usuario: ${user}<br>Número do computador ${cpu}`;
    }

    else
    {
        return `Empate!<br><br>Número sorteado: ${sorteioNum}<br>Número do usuario: ${user}<br>Número do computador ${cpu}`;
    }
}


///mostrarPontuacao.addEventListener('click', aparecer);


