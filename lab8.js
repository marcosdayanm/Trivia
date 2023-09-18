document.addEventListener('DOMContentLoaded', function() {

    // Código del opción múltiple
    document.getElementById('buttons').addEventListener('click', function(event){
        if (event.target.tagName == 'BUTTON')
        {
            // Obtener todos los botones dentro del contenedor
            const allButtons = document.querySelectorAll('#buttons button');

            // Restablecer todos los botones a su estado original
            allButtons.forEach(function(btn) {
                btn.classList.remove('greenBorder', 'redBorder');
            });

            let button = event.target.id;
            // Verificar si el botón clickeado es la respuesta correcta
            if (button == 'b3')
            {
                document.getElementById('verify1').textContent = "Correct!";
                document.getElementById(button).classList.add('greenBorder');
            }
            else
            {
                document.getElementById('verify1').textContent = "Incorrect";
                document.getElementById(button).classList.add('redBorder');
            }
        }
    });

    // Código del botón
    document.querySelector('form').addEventListener('submit', function(){
        let ans = document.querySelector('#q2').value;
        if (ans == 206)
        {
            document.getElementById('verify2').textContent = "Correct!";
            document.getElementById('q2').classList.add('greenBorder');
            document.getElementById('q2').classList.remove('redBorder');
        }
        else
        {
            document.getElementById('verify2').textContent = "Incorrect";
            document.getElementById('q2').classList.add('redBorder');
            document.getElementById('q2').classList.remove('greenBorder');
        }
        event.preventDefault();
    })
});