document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach((button) => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('img.keyboard'); // Alterado para img.keyboard
            const parent = button.parentElement;

            if (answer.classList.contains('show')) {
                // Se a resposta já estiver aberta, simplesmente a feche
                answer.classList.remove('show');
                button.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';  // Rotaçao para o estado fechado
                parent.classList.remove('highlight');
            } else {
                // Fechar todas as respostas e redefinir ícones e classes
                document.querySelectorAll('.faq-answer').forEach((item) => {
                    item.classList.remove('show');
                });

                document.querySelectorAll('.faq-question').forEach((btn) => {
                    btn.classList.remove('active');
                    const icon = btn.querySelector('img.keyboard'); // Alterado para img.keyboard
                    icon.style.transform = 'rotate(0deg)';  // Resetar para o estado fechado
                });

                document.querySelectorAll('.faq-item').forEach((item) => {
                    item.classList.remove('highlight');
                });

                // Mostrar a resposta clicada e girar o ícone
                answer.classList.add('show');
                button.classList.add('active');
                icon.style.transform = 'rotate(180deg)';  // Rotaçao para o estado aberto
                parent.classList.add('highlight');
            }
        });
    });
});
