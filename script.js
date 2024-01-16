const menuBtn = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
	document.getElementById("sidenav").style.width = "15rem";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
	document.getElementById("sidenav").style.width = "0";
  }
}); 

document.getElementById("upArrow").addEventListener("click", scrollUp);
function scrollUp(){ 
  var currentScroll = document.documentElement.scrollTop; 
  if (currentScroll > 0) {  
      window.requestAnimationFrame(scrollUp);
      window.scrollTo (0, currentScroll - (currentScroll / 8)); 
      buttonUp.style.transform = "scale(0)"; 
  }
} 

buttonUp = document.getElementById("upArrow"); 
window.onscroll = function () { 
  var scroll = document.documentElement.scrollTop; 
  if (scroll > 100){ 
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 100){ 
    buttonUp.style.transform = "scale(0)";
  }
}

const $form = document.getElementById("form") 

	$form.addEventListener("submit", handleSubmit) 

	async function handleSubmit(event) { 
		event.preventDefault() 
		const form = new FormData (this)  
		const response = await fetch(this.action, { 
			method: this.method,
			body: form,
			headers: { 
				'Accept': 'application/json'
			}
		})  
		if (response.ok) { 
			$form.reset()
			alert('Bienvenido a Nihil, via email te enviaremos las ultimas novedades sobre nuevos lanzamientos y eventos ;)')
		}
	}
	 
  function validarEmail(email) { 
    var expReg =   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(email); 
    if (esValido==false){ 
      alert('El correo ingresado no es valido');
    }
  }