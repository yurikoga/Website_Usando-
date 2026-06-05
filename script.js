// Interatividade básica para o botão
document.addEventListener('DOMContentLoaded', () => {
    const hireBtn = document.getElementById('hireBtn');

    hireBtn.addEventListener('click', () => {
        alert('Obrigado pelo interesse! Redirecionando para o contato...');
    });

    // Efeito de scroll na navbar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.background = 'transparent';
        }
    });
});
