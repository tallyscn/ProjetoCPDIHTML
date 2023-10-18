const iconeChefe = document.getElementById('icone-chefe');
const iconeAtivoChefe = document.getElementById('icone-ativo-chefe');

iconeAtivoChefe.style.transition = 'transform 0.5s';

iconeChefe.addEventListener('mouseenter', () => {
    iconeAtivoChefe.style.transform = 'translateX(0)'; // Quando o mouse entra, move o icone-ativo-chefe para a posição 0
});

iconeChefe.addEventListener('mouseleave', () => {
    iconeAtivoChefe.style.transform = 'translateX(-100%)'; // Quando o mouse sai, move o icone-ativo-chefe de volta para a esquerda
});