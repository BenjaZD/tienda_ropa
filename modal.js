// Agrega la funcionalidad al botón "Ir al carrito"
$('.btn-add-carrito').click(function() {
    // Redirige al usuario a la página del carrito
    window.location.href = 'carrito.html';
  });
  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
// Muestra el modelo
$('#miModal').modal('show');