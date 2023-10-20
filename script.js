const iconeChefe = document.getElementById('icone-chefe');
const iconeAtivoChefe = document.getElementById('icone-ativo-chefe');
const iconeProjeto = document.getElementById('icone-projeto');
const iconeAtivoProjeto = document.getElementById('icone-ativo-projeto');
const iconeQuem = document.getElementById('icone-quem');
const iconeAtivoQuem = document.getElementById('icone-ativo-quem');
const iconeDownload = document.getElementById('icone-download');
const iconeAtivoDownload = document.getElementById('icone-ativo-download');

iconeAtivoChefe.style.transition = 'transform 0.5s';
iconeAtivoProjeto.style.transition = 'transform 0.5s';
iconeAtivoQuem.style.transition = 'transform 0.5s';
iconeAtivoDownload.style.transition = 'transform 0.5s';

iconeChefe.addEventListener('mouseenter', () => {
    iconeAtivoChefe.style.transform = 'translateX(0)'; // Quando o mouse entra, move o icone-ativo-chefe para a posição 0
});

iconeChefe.addEventListener('mouseleave', () => {
    iconeAtivoChefe.style.transform = 'translateX(-100%)'; // Quando o mouse sai, move o icone-ativo-chefe de volta para a esquerda
});

iconeProjeto.addEventListener('mouseenter', () => {
    iconeAtivoProjeto.style.transform = 'translateX(0)'; // Quando o mouse entra, move o icone-ativo-Projeto para a posição 0
});

iconeProjeto.addEventListener('mouseleave', () => {
    iconeAtivoProjeto.style.transform = 'translateX(-100%)'; // Quando o mouse sai, move o icone-ativo-Projeto de volta para a esquerda
});

iconeQuem.addEventListener('mouseenter', () => {
    iconeAtivoQuem.style.transform = 'translateX(0)'; // Quando o mouse entra, move o icone-ativo-Quem para a posição 0
});

iconeQuem.addEventListener('mouseleave', () => {
    iconeAtivoQuem.style.transform = 'translateX(-100%)'; // Quando o mouse sai, move o icone-ativo-Quem de volta para a esquerda
});

iconeDownload.addEventListener('mouseenter', () => {
    iconeAtivoDownload.style.transform = 'translateX(0)'; // Quando o mouse entra, move o icone-ativo-Download para a posição 0
});

iconeDownload.addEventListener('mouseleave', () => {
    iconeAtivoDownload.style.transform = 'translateX(-100%)'; // Quando o mouse sai, move o icone-ativo-Download de volta para a esquerda
});