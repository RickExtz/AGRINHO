document.addEventListener('DOMContentLoaded', () => {
    const descriptions = {
        1: {
            monitoramento: 'Drones são usados para monitoramento aéreo das lavouras, ajudando a identificar problemas de forma rápida e eficiente.',
            fertilizacao: 'Drones podem realizar a fertilização automática, aplicando fertilizantes de maneira precisa.',
            irrigacao: 'Drones não são diretamente usados para irrigação, mas podem ajudar a monitorar a necessidade de irrigação.'
        },
        2: {
            umidade: 'Sensores medem a umidade do solo, fornecendo dados cruciais para a otimização da irrigação.',
            temperatura: 'Sensores podem medir a temperatura do ar, ajudando a ajustar as práticas agrícolas conforme o clima.',
            nitrato: 'Sensores medem o nível de nitrato no solo, permitindo ajustes na fertilização.'
        },
        3: {
            trator: 'Automação inclui tratores autônomos que podem operar sem intervenção humana.',
            irrigacao: 'Sistemas de irrigação automatizados ajustam a quantidade de água conforme a necessidade das plantas.',
            colheita: 'Máquinas de colheita autônomas são projetadas para colher produtos agrícolas sem necessidade de operadores.'
        }
    };

    document.querySelectorAll('.question-select').forEach(select => {
        select.addEventListener('change', () => {
            const questionId = select.getAttribute('data-question');
            const selectedValue = select.value;
            const descriptionDiv = document.querySelector(`.description[data-description="${questionId}"]`);
            
            if (selectedValue) {
                descriptionDiv.textContent = descriptions[questionId][selectedValue] || 'Descrição não disponível.';
            } else {
                descriptionDiv.textContent = 'Selecione uma opção para saber mais.';
            }
        });
    });
});
