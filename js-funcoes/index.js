mostrarinformacoes('Daniel', 24, 'frances');
mostrarinformacoes('frank', 25, 'coreano');
mostrarinformacoes('hideki', 30, 'japones');

boasVindas('joel', 'm')


function boasVindas(nome, genero){
    document.write(`<h1>Seja bem-vind${genero == 'm' ? 'o' : 'a'} ${nome}</h1>`);
    }
function mostrarinformacoes(nome, idade, nacionalidade = 'Brasilheiro') {
    document.write(`
        <ul>
            <li> nome: ${nome}</li>
            <li> nome: ${idade}</li>
            <li> nome: ${nacionalidade}</li>
        </ul>
            
        `);
}

/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 */

const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

const somarAntigo = (numero1, numero2) => {
    document.write(`<h1>O resultado é: ${numero1 + numero2}</h1>`)
}

document.write(`<h1>O resultado é: ${somar(somar(2,2), somar (2,2))}</h1>`)
//let a = 4
//let b = 8
//somar(2,3);
//somar(a, b);