document.querySelectorAll('.faq-question').forEach((button, index) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        const parent = button.parentElement;

        if (answer.classList.contains('show')) {
            // Se a resposta já estiver aberta, simplesmente a feche
            answer.classList.remove('show');
            button.classList.remove('active');
            icon.style.transform = 'rotate(180deg)';
            parent.classList.remove('highlight');
        } else {
            // Fechar todas as respostas e redefinir ícones e classes
            document.querySelectorAll('.faq-answer').forEach((item) => {
                item.classList.remove('show');
            });

            document.querySelectorAll('.faq-question').forEach((btn) => {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                icon.style.transform = 'rotate(180deg)';
            });

            document.querySelectorAll('.faq-item').forEach((item) => {
                item.classList.remove('highlight');
            });

            // Mostrar a resposta clicada e girar o ícone
            answer.classList.add('show');
            button.classList.add('active');
            icon.style.transform = 'rotate(0deg)';
            parent.classList.add('highlight');
        }
    });
});
