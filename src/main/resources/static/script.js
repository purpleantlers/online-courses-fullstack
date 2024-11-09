// Selector de la barra de búsqueda y cada uno de los cursos
const userInput = document.getElementById('userInput')
let course = document.querySelectorAll('.course')

// Función que al escribir en la barra de búsqueda filtra según el valor
userInput.addEventListener('input', () => {
    /* 
        Almacenamos el valor que introduce el usuario
        y lo pasamos a minúsculas para poder compararlo después 
    */
    let input = userInput.value
    input = input.toLowerCase();

    /*
        Por cada curso que hay, si el valor introducido no coincide con
        nada de la descripción del curso, el curso se oculta. Por el contrario,
        el curso se visualiza
        
        Si la altura de la sección donde están todos los cursos es menor 
        a 300 píxeles, signigica que no hay ningún curso listado y, 
        por tanto, el mensaje de error aparece en pantalla. Por el contrario, 
        el mensaje de error se oculta
    */
    for (let i = 0; i < course.length; i++) {
        if (!course[i].innerHTML.toLowerCase().includes(input)) {
            course[i].style.display = "none"
        }
        else {
            course[i].style.display = "flex"
        }

        if (document.querySelector('.wrapper').offsetHeight < 300) {
            document.querySelector('.empty').style.display = 'block'
        } else {
            document.querySelector('.empty').style.display = 'none'
        }
    }
})
