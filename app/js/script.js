// --- FUNCIÓN PARA APLICAR EL TEMA GUARDADO AL INICIO ---
// Se ejecuta inmediatamente para evitar el parpadeo de la página (FOUC).
(function loadInitialTheme() {
    const body = document.querySelector('body');
    const savedTheme = localStorage.getItem('theme');
    
    if (body && savedTheme) {
        // Aplica el tema guardado, sobrescribiendo el valor inicial del HTML.
        body.classList.remove('light', 'dark');
        body.classList.add(savedTheme);
    } 
    // Si no hay tema guardado, la página usará la clase inicial en el body (que debe ser 'dark').
})();


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const themeRadios = document.querySelectorAll('input[name="theme"]');

    // --- 1. CONFIGURAR EL ESTADO DEL RADIO BUTTON ---
    function setRadioState() {
        // Determina el tema actual basándose en la clase que tiene el body
        const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
        
        // Marca el radio button que coincida con la clase actual
        const radioToSelect = document.getElementById(currentTheme);
        if (radioToSelect) {
            radioToSelect.checked = true;
        }
    }

    // --- 2. FUNCIÓN PARA CAMBIAR Y GUARDAR EL TEMA ---
    function toggleAndSaveTheme(event) {
        // Obtenemos el valor ('dark' o 'light') del radio button seleccionado
        const selectedTheme = event.target.value; 
        
        // Aplicar la clase al body
        body.classList.remove('light', 'dark');
        body.classList.add(selectedTheme);
        
        // Guardar la preferencia en localStorage
        localStorage.setItem('theme', selectedTheme);
    }

    // --- 3. INICIALIZACIÓN ---
    
    // Configurar el estado inicial de los radios
    setRadioState();
    
    // Asociar la función de cambio a todos los botones del grupo
    themeRadios.forEach(radio => {
        radio.addEventListener('change', toggleAndSaveTheme);
    });
});

