# Epass
  <div class="logo">
            <img id="imagem" src="images/2-removebg-preview.png" alt="" width="150">
        </div>
        <div class="navegation">

        </div>
    </header>
    <!-- <div class="container">
        <div class="Aulas">Aulas</div>
        <div class="Frequencia">Frequência</div>
        <div class="Aulas">Notas</div>
        <div class="Aulas">Grade</div>
    </div> -->
    <div class="container">
        <!-- Faixa Esquerda: Lista de Itens -->
        <div class="list-container">
            <div class="list-item" onclick="showDetails('item1')">
                Frequência
            </div>
            <div class="list-item" onclick="showDetails('item2')">
                Calendário
            </div>
            <div class="list-item" onclick="showDetails('item3')">
                Notas
            </div>
        </div>

        <!-- Faixa Direita: Detalhes -->
        <div class="details" id="item1">
            <h2>Detalhes do Item 1</h2>
            <p>Informações detalhadas sobre o aluno. Nota: 8.0, Frequência: 90%. Comentários: Bom desempenho geral.</p>
        </div>

        <div class="details" id="item2">
            <h2>Detalhes do Item 2</h2>
            <p>Informações detalhadas sobre o aluno. Nota: 7.5, Frequência: 85%. Comentários: Precisa melhorar a participação nas aulas.</p>
        </div>

        <div class="details" id="item3">
            <h2>Detalhes do Item 3</h2>
            <p>Informações detalhadas sobre o aluno. Nota: 9.0, Frequência: 95%. Comentários: Excelente desempenho e participação.</p>
        </div>
    </div>

    <script>
        // Função para mostrar os detalhes
        function showDetails(itemId) {
            // Esconde todos os detalhes
            const details = document.querySelectorAll('.details');
            details.forEach(detail => {
                detail.classList.remove('active');
            });

            // Mostra o detalhe do item clicado
            const activeDetail = document.getElementById(itemId);
            if (activeDetail) {
                activeDetail.classList.add('active');
            }
        }
    </script>
##CSS
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.logo{
    background-color: #0097b8;
    height: 90px;
}
#imagem{
    height: 63.5px;
    width: 250px;
    position: absolute;
    top: 10px;
}
.container{
    display: grid; /* Ativa o modelo grid */
    grid-template-columns: repeat(1fr, 2fr); /* Cria 2 colunas esquerda mais estreita e outra mais larga */
    gap: 20px; /* Espaçamento entre os itens */
    padding: 20px;


/* Estilo da lista na faixa esquerda */
.list-container {
    border-right: 2px solid #ccc;
}

.list-item {
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    transition: background-color 0.3s;
}

.list-item:hover {
    background-color: #f0f0f0;
}

/* Estilo da área de detalhes na faixa direita */
.details {
    padding: 20px;
    border: 1px solid #ccc;
    display: none; /* Inicialmente oculto */
}

.details.active {
    display: block; /* Exibe o conteúdo ao clicar */
} 