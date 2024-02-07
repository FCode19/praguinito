document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Desplázate suavemente hacia arriba al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Cerrar el menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
        });
    });

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatHeader = document.getElementById('chatHeader');
    const chatMessages = document.getElementById('chatMessages');
    const optionsContainer = document.getElementById('optionsContainer');

    startChatbot();

    function startChatbot() {
        chatMessages.innerHTML += "<p><strong>Praguinito:</strong> Hola! Te saluda Praguinito</p>";
        chatMessages.innerHTML += "<p><strong>Praguinito:</strong> ¿En qué te puedo ayudar?</p>";

        showOptions();
    }

    function showOptions() {
        optionsContainer.style.display = 'block';

        const options = [
            "Matricula 2024",
            "Aulas",
            "Servicios complementarios",
            "Alimentación",
            "Contáctanos"
        ];

        optionsContainer.innerHTML = "<p><strong>Praguinito:</strong> Elige una opción:</p>";
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => handleOptionSelection(option));
            optionsContainer.appendChild(document.createElement('p').appendChild(button));
        });
    }

    function handleOptionSelection(option) {
        chatMessages.innerHTML = "";
        optionsContainer.innerHTML = "";

        switch (option) {
            case "Matricula 2024":
                chatMessages.innerHTML += `<p><strong>Praguinito:</strong> La matrícula está vigente del 15/01 al 14/02 de 2024 en nuestra plataforma <a href="https://cunanavalpraga.sieweb.com.pe/" target="_blank" style="text-decoration: none;">SIEWEB</a></p>`;
                break;
            case "Aulas":
                chatMessages.innerHTML += "<p><strong>Praguinito:</strong> Contamos con las siguientes aulas:<br>- LACTANTES (3 - 12 meses)<br>- Andantes (1 año)<br>- Infantes (2 años)<br>- Jardín (3 años)</p>";
                break;
            case "Servicios complementarios":
                chatMessages.innerHTML += "<p><strong>Praguinito:</strong> Contamos con los siguientes Servicios Complementarios:<br>- SALUD<br>- NUTRICIÓN<br>- PSICOLOGÍA<br>- PSICOMOTRICIDAD<br>- LENGUAJE</p>";
                break;
            case "Alimentación":
                chatMessages.innerHTML += "<p><strong>Praguinito:</strong> Contamos con el siguiente plan de alimentación:<br>- Desayuno (De 7:30 am a 8:00 am.)<br>- Refrigerio (De 10:00 a 10:20 am.)<br>- Almuerzo (De 12:00 a 12:30 pm.)<br>- Lonche (De 3:00 a 3:20 pm.)</p>";
                break;
            case "Contáctanos":
                chatMessages.innerHTML += "<p><strong>Praguinito:</strong> Contamos con los siguientes canales de comunicación directa:<br>Email: cunanjpraga@gmail.com</p>";
                break;
        }

        showOptions();
    }

    chatHeader.addEventListener('click', function () {
        if (chatMessages.style.display === 'none') {
            chatMessages.style.display = 'block';
            optionsContainer.style.display = 'block';
        } else {
            chatMessages.style.display = 'none';
            optionsContainer.style.display = 'none';
        }
    });

});