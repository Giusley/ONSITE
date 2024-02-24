const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const menu = document.querySelector("#menu")
const menuLink = document.querySelectorAll("#menu a");
const fecharMenu = document.querySelector("#fecharMenu");


const divCarrocel = document.querySelector("#divCarrocel");
const bTag1 = document.querySelector("#bTag1");
const bTag2 = document.querySelector("#bTag2");

const icon = document.querySelector(".icon")




const cardsUl = document.querySelector(".cards-list");
const cardLi = document.querySelectorAll(".card");


const btnVerMais = document.querySelectorAll(".btnVerMais");

const popupImg = document.querySelector("#popupImg");


const ulFooterNav = document.querySelector(".ulFooterNav");
const liFooterNav = document.querySelectorAll(".ulFooterNav li");
const liPlus = document.querySelector("#liPlus")
const servUl = document.querySelector("#servUl")
var servLiShow = false;


const pageFooter = document.querySelector("#pageFooter")
pageFooter.appendChild(document.createElement('span').appendChild(document.createTextNode(`${' - '}${new Date().getFullYear()}`)));

let menuShow = false;
var isOnScroll = false;

Array.from(liFooterNav).forEach(elm => {
	elm.addEventListener('click',(e)=>{
		console.log(e.target)
	})
})


icon.addEventListener("click", () => {
    document.querySelector('html').style.overflow = 'hidden';
	if(menuShow == false){
		menu.style.animationName = 'reveal';
		
		menuShow = true
	} else {
		document.querySelector('html').style.overflow = 'overlay'
		menu.style.animationName = 'unreveal';
		menuShow = false
	}
	
})

liPlus.addEventListener("click", () => {
    if(servLiShow === false){
	servUl.style.display = 'block'
		servLiShow = true;
	} else{
		servLiShow = false;
		servUl.style.display = 'none'
	}
	liPlus.classList.toggle('clicked');
	
	window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
})

fecharMenu.addEventListener("click", () => {
document.querySelector('html').style.overflow = 'hidden';
		document.querySelector('body').style.overflow = 'hidden';   
   if(menuShow == false){
		menu.style.animationName = 'reveal';
		
		menuShow = true
	} else {
		menu.style.animationName = 'unreveal';
		document.querySelector('html').style.overflow = 'overlay'
		menuShow = false
	}
	
})

Array.from(sections).forEach(elm => elm.style.display = 'none')

Array.from(cardLi).forEach((card) => {
	card.addEventListener('click', function(event){
		
		event.preventDefault();
		Array.from(sections).forEach(elm => elm.style.display = 'none')
		menu.style.animationName = 'unreveal'
		document.querySelector('html').style.overflow = 'overlay'
		menuShow = false
		showSection(this.firstElementChild.href.split('#')[1]);
		
	})
	
})

Array.from(menuLink).forEach((elm, ind) => {
	
	elm.addEventListener('click', function(event){
		event.preventDefault();
		Array.from(sections).forEach(elm => elm.style.display = 'none')
		menu.style.animationName = 'unreveal'
		document.querySelector('html').style.overflow = 'overlay'
		menuShow = false
		showSection(this.href.split('#')[1]);
		document.querySelector('.sectSelected').classList.remove('sectSelected')
		elm.classList.toggle('sectSelected')
		
		history.pushState(null, null, elm.href);
	})
	//window.location.href = document.querySelector('#verProjetos');
	
	
	
})
bTag1.addEventListener('click', function(event){
	document.querySelector('.ulList').scrollIntoView({ behavior: 'smooth' , block: 'end' });
})

bTag2.addEventListener('click', function(event){
	document.querySelector('.ulList').scrollIntoView({ behavior: 'smooth' , block: 'end' });

})

Array.from(document.querySelectorAll('.ulList li')).forEach(ulLink =>{
	ulLink.firstElementChild.addEventListener('click', function(){
		
		Array.from(sections).forEach(elm => elm.style.display = 'none')
		showSection(ulLink.firstElementChild.href.split('#')[1])
	})
	
})


function hideSection(){
	Array.from(sections).forEach(elm => elm.style.display = 'none')
}

function showSection(hashValue){
	//console.log(hashValue);
	
	if(hashValue === 'arquivosSection'){
		document.getElementById(hashValue).style.display = 'grid'
	} else {
		document.getElementById(hashValue).style.display = 'block'
	}
	
	if(hashValue === 'consultSection' || hashValue === 'recoverySection' || hashValue === 'moistureSection' || 
	hashValue === 'constructionSection' || hashValue === 'adequacySection' || hashValue === 'concreteSection'){
		document.getElementById(hashValue).click();
		document.querySelector('.sectSelected').classList.remove('sectSelected');
		document.querySelector(`#menu a[href='#allServicesSection']`).classList.add('sectSelected')
		//document.getElementById("allServicesSection").style.display = 'block';
		setTimeout(()=>{
			
			try{
				document.getElementById(hashValue).scrollIntoView({behavior: 'smooth',block: 'start',inline: 'start'});
			}catch(e){
				window.location.href = new URL(window.location.href).origin + '/#' + hashValue
				//console.log(window.location.href)
				
				//cancelar o preventDefault()
			}
			// Rolar para cima duas vezes a altura da linha de texto
			window.scrollBy(0, -2 * parseInt(window.getComputedStyle(document.body).lineHeight));
			
			
		},250)
		setTimeout(()=>{document.getElementById("allServicesSection").style.display = 'block';},4750)
		
		/* document.getElementById(hashValue).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})  */
		
		
		document.querySelector('#mainFooter').style.display = "flex"
		return;
	}
	
	//event.preventDefault();
	upView()
	document.querySelector('#mainFooter').style.display = "flex"
}

/* ///////////////////////////////////////////////////////////// */
 document.addEventListener("DOMContentLoaded", function() {
	if(!window.location.hash){
		history.pushState(null, null, document.querySelector('.sectSelected').href);
		console.log('sem hash?')
		hideSection();
		showSection('homeSection')
		popupImg.style.display = 'none'
	}//showSection('homeSection')
	const imgOnError = document.querySelector('.icon').firstElementChild;
	imgOnError.onerror = function(e){
		const nsrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAANUlEQVRIie3TsQ0AIAwDwYj9t8pgoWIApJCGuwVeLhwBdKuqrPfy9Nb0vuEeX3MnaONOwK0NKrA4cwLOQUAAAAAASUVORK5CYII="
		document.querySelector('.icon').firstElementChild.src = nsrc;
	}
	sections[0].style.display = 'block'
	
	if (window.location.hash) {
		
		/*  if(window.location.hash === '#'){
			console.log('# ?')
			hideSection();
			showSection(sections[0].id)
		} */ if(window.location.hash === '#allServicesSection'){
			hideSection();
			showSection(sections[3].id)
			document.querySelector('#mainFooter').style.position = "relative"
		}if(window.location.hash === '#arquivosSection'){
			hideSection();
			showSection(sections[11].id)
		}if(window.location.hash === '#timelineSection'){
			hideSection();
			showSection(sections[2].id)
		}if(window.location.hash === '#contactSection'){
			hideSection();
			showSection(sections[12].id)
		}if(window.location.hash === '#onsiteSection'){
			hideSection();
			showSection(sections[1].id)
		
		}
		
	}
	
	window.addEventListener('popstate', function (event) {
		hideSection();
		showSection('homeSection');
		popupImg.style.display = 'none'
	});
	
	
	var carrIdx = 0;
	window.setInterval(()=>{
		
		carrIdx++;
		
		if(carrIdx > 20) carrIdx = 0;
		//console.log(carrIdx)
		divCarrocel.setAttribute('style', `background-image:url(/ONSITE/RecursosGraficos/carrocel/${carrIdx}.jpg);`)
		//divCarrocel.style.animationDuration = '5s'
		divCarrocel.style.animationName = 'resizeBg'
		
	},5000)
	
	divCarrocel.animationend = function(){
		console.log('ok')
		
		divCarrocel.style.animationDuration = '5.1s'
		divCarrocel.style.animationName = 'resizeBg'
		
	}
	
	//if()
		document.querySelector('.sectSelected').classList.remove('sectSelected');
		document.querySelector(`#menu a[href='#${window.location.href.split('#')[1]}']`).classList.add('sectSelected')
	//console.log(document.querySelector('.sectSelected'), window.location.href.split('#')[1],document.querySelector(`#menu a[href='#${window.location.href.split('#')[1]}']`))
});

function upView(){
	
	topFunction()
	window.document.body.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'start'
	})
	//console.log(window.document.body)
	//topFunction()
}

pageFooter.onclick = function(){
	var isOnScroll = false;
	topFunction()
}

window.onhashchange = function () {
  console.log("#changed", window.location.href.split('#')[1]);
  
  hideSection();
  showSection(window.location.href.split('#')[1])
  popupImg.style.display = 'none'
}
let animFrame;
// SCROLLTOP
function topFunction() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
		
		if (c > 0) {
			animFrame = window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
			if(isOnScroll == true){
				//window.cancelAnimationFrame(animFrame);
				return;
			}
        }
		
		
    };
	
    scrollToTop();
	
}


document.querySelector('#imgLogo').parentElement.addEventListener('click', function(e){
	e.preventDefault();
	//console.log(e)
	hideSection();
	showSection('homeSection');
	history.pushState(null, null, document.location.href);
})

window.addEventListener('touchend', function(event){
	Array.from(document.querySelectorAll('.ulList li')).forEach(UL => UL.blur());
	//console.log(event.target)
})
/* .addEventListener('touchend', function(event) {
    // Código a ser executado quando o dedo é solto
    console.log('Dedo solto na tela touch!');
}); */
/* 
window.addEventListener('click', function(event){
	console.log(event.target)
}) */

window.addEventListener("scroll", function() {
     isOnScroll = true;
	
    // Define um temporizador para redefinir a variável isOnScroll após um curto período de tempo
    setTimeout(function() {
        var isOnScroll = false;
    }, 60); // Ajuste o tempo conforme necessário
	
	
	// Obtenha a posição atual da janela de visualização
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var goTopButton = document.querySelector('#goTop');

    // Verifique se o scroll atingiu 25% da página
    if (scrollTop > (document.documentElement.scrollHeight * 0.25)) {
      // Se sim, mostre o botão goTop
      goTopButton.style.display = "block";
    } else {
      // Caso contrário, esconda o botão goTop
      goTopButton.style.display = "none";
    }
  });
  
document.querySelector('#mainFooter').addEventListener('mousemove', function(){gotodown()},{once:true})
function gotodown(){
	const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const maxScrollTop = scrollHeight - clientHeight;

    const scrollOptions = {
        top: maxScrollTop,
        behavior: 'smooth'
    };

    window.scrollTo(scrollOptions);
}
//document.querySelector('#mainFooter').addEventListener('mouseout', function(){gotodown()},{once:true})


 
  /* document.querySelector('#closeDialog').addEventListener('click', () => {
    popupImg.style.display = 'none';
	document.querySelector('html').style.overflowY = 'scroll'
  }); */

Array.from(document.querySelectorAll('#arquivosSection article img')).forEach((elm,ind) =>{
	elm.addEventListener('click', ()=>{
		popupImg.style.display = 'flex';
		document.querySelector('html').style.overflowY = 'hidden';
		document.getElementById('responseImg').src = elm.src;
	})
	
	//console.log(elm.src)
})
popupImg.addEventListener('click', (e)=>{
	if(e.target.id == 'closeDialog'){
			closePopup()
		return;
	}
	
	if(e.target.tagName == 'IMG'){
		return;
	}
	
	closePopup()
	
})

function closePopup(){
	popupImg.style.display = 'none';
	document.querySelector('html').style.overflowY = 'scroll'
}

Array.from(btnVerMais).forEach((elm,ind) =>{
	elm.addEventListener('click', (e)=>{
		let sibling = elm.nextElementSibling;
		while (sibling) {
			if (sibling.tagName === 'P') {
				sibling.style.display = 'block';
			}
			
			sibling = sibling.nextElementSibling;
			
		}
		e.target.nextElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
		e.target.style.display = 'none'
		
	})
	
})



//slideImages();
