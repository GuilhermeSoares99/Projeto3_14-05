// ==========================================================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================================================
const btnClique = document.getElementById("btnClique");
const btnReset = document.getElementById("btnReset");
const mensagemStatus = document.getElementById("mensagemStatus");
const blocoConceito = document.getElementById("conceito");

const imagemInterativa = document.getElementById("imagemInterativa");

const campoTexto = document.getElementById("campoTexto");
const ecoTeclado = document.getElementById("ecoTeclado");

// ==========================================================================
// 2. IMPLEMENTAÇÃO DOS EVENTOS EXIGIDOS
// ==========================================================================

// --- [EVENTO 1: CLIQUE] ---
// Altera o conteúdo de texto e o estilo do primeiro bloco simultaneamente
btnClique.addEventListener("click", () => {
    blocoConceito.classList.add("modo-destaque");
    mensagemStatus.textContent = "Status: Modo Destaque Ativado via Clique!";
    mensagemStatus.style.color = "#f1c40f";
});

// Reseta todas as alterações da página de volta ao estado inicial
btnReset.addEventListener("click", () => {
    // Reset do bloco de conceitos
    blocoConceito.classList.remove("modo-destaque");
    mensagemStatus.textContent = "Aguardando interação...";
    mensagemStatus.style.color = "";

    // Reset da imagem
    imagemInterativa.classList.remove("imagem-efeito");

    // Reset do campo de texto e feedback
    campoTexto.value = "";
    ecoTeclado.textContent = "";
});


// --- [EVENTO 2: MOUSE (Mouseover e Mouseout)] ---
// Altera o estilo da imagem dinamicamente quando o mouse entra e sai dela
imagemInterativa.addEventListener("mouseover", () => {
    imagemInterativa.classList.add("imagem-efeito");
});

imagemInterativa.addEventListener("mouseout", () => {
    imagemInterativa.classList.remove("imagem-efeito");
});


// --- [EVENTO 3: TECLADO (Keyup)] ---
// Captura em tempo real o que o usuário digita e fornece um eco de feedback dinâmico
campoTexto.addEventListener("keyup", () => {
    const totalCaracteres = campoTexto.value.length;
    
    if (totalCaracteres === 0) {
        ecoTeclado.textContent = "";
    } else {
        ecoTeclado.textContent = `Análise em tempo real: "${campoTexto.value}" (${totalCaracteres} caracteres)`;
    }
});
