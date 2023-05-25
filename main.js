const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emojion Celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emojion Decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado" > Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado" > Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima"));

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinhas();
    atualizaTavela();
    atualizaMediaFinal();
})

function adicionarLinhas(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

if (atividades.includes(inputNomeAtividade.value)){ 
    alert(`A atividade ${inputNomeAtividade.value} já foi adicionada `);
}else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}<td>`;
    linha += `<td> ${inputNotaAtividade.value}<td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}<td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTavela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
   const mediaFinal = calculandoMediaFinal();
   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculandoMediaFinal (){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return media = somaDasNotas / notas.length;
}