let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})



const mainImage = document.querySelector('.card img');
const thumbnails = Array.from(document.querySelectorAll('.thumbnails img'));

thumbnails.forEach((thumbnail) => {
  if(thumbnail.src === mainImage.src){
    thumbnail.classList.add('active');
  }
  thumbnail.addEventListener('click' , () => {
    setTimeout(()=>{
      mainImage.classList.remove('animate');
    },500);
    mainImage.src = thumbnail.src;
    thumbnail.classList.add('active');
    mainImage.classList.add('animate');
    const filteredImages = thumbnails.filter((image) => image.src !== mainImage.src);
    filteredImages.forEach((image) => {
      image.classList.remove('active');
    })
  })
})

var IconWhatsapp = document.querySelector('#icon-whatsapp');
		var formulariowtsp = document.getElementById('formulariowtsp');
		var closemodal = document.querySelector('.closemodal');
		var sendbttn = document.querySelector('#sendbttn');

		
		IconWhatsapp.addEventListener('click' , function(){
			formulariowtsp.classList.toggle('entrarysalir')
		})

		closemodal.addEventListener('click' , function(){
			formulariowtsp.classList.remove('entrarysalir')
		})

		sendbttn.addEventListener('click' , EnviarMensaje)

		function EnviarMensaje(){


			let name = document.querySelector('#inputname').value;
			let mensaje = document.querySelector('#inputmensaje').value;
		
			let url = "https://api.whatsapp.com/send?phone=542216418358&text=Nombre: %0A" + name + "%0A%0AMensaje: %0A" + mensaje + "%0A";
			window.open(url);

		}