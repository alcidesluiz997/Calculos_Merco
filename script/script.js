function mostrarSecao(id) {
    // Esconde todas
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });

    // Mostra a selecionada
    document.getElementById(id).classList.add('ativa');
}