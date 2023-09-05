function copiarTexto() {
    const textoCopiado = document.getElementById('text').value;

    if (navigator.clipboard.writeText(textoCopiado)) {
        document.getElementById('btnCopiar').textContent = 'Copiado';
    }
    setInterval(function () {
        document.getElementById('btnCopiar').textContent = 'Copiar novamente';
    }, 3000
    );
    console.log("Texto copiado: " + textoCopiado);
}



// OPÇÃO ANTIGA
// function copiarTexto() {
//     const textoCopiado = document.getElementById('text');
//     textoCopiado.select();
//     textoCopiado.setSelectionRange(0, 99999); //para mobile não bugar. Seleciona caractere do 0 ao 99999
//     document.execCommand('copy');

//     document.getElementById('btnCopiar').onclick = function () {
//     this.textContent = 'Copiado';
//      }

//     console.log("Texto copiado: " + textoCopiado.value);
// }

