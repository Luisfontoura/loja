document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionar = document.querySelectorAll('.adicionar-ao-carrinho');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const notification = document.getElementById('notification');

    // Função para adicionar um item ao carrinho
    function adicionarAoCarrinho(nomeProduto) {
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = nomeProduto;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('remover-do-carrinho');
        itemCarrinho.appendChild(botaoRemover);

        listaCarrinho.appendChild(itemCarrinho);

        showNotification(`${nomeProduto} adicionado ao carrinho.`);
    }

    // Adiciona evento de clique aos botões "Adicionar ao carrinho"
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            const nomeProduto = botao.parentNode.querySelector('h2').textContent;
            adicionarAoCarrinho(nomeProduto);
        });
    });

    // Adiciona evento de clique aos botões "Remover do carrinho"
    listaCarrinho.addEventListener('click', function(event) {
        if (event.target.classList.contains('remover-do-carrinho')) {
            const nomeProduto = event.target.parentNode.firstChild.textContent;
            const itemCarrinho = event.target.parentNode;
            itemCarrinho.remove();
            showNotification(`${nomeProduto} removido do carrinho.`);
        }
    });

    // Função para limpar o carrinho
    function limparCarrinho() {
    listaCarrinho.innerHTML = '';
    showNotification('Carrinho limpo.');
}

    // Adiciona evento de clique ao botão "Limpar carrinho"
    const botaoLimparCarrinho = document.getElementById('limpar-carrinho');
    botaoLimparCarrinho.addEventListener('click', limparCarrinho);

    // Função para exibir notificações
    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000); // Exibe a notificação por 3 segundos
    }
});
