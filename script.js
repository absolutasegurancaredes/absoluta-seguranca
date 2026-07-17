// Rolagem suave do menu

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

      const destino = document.querySelector(
          this.getAttribute('href')
      );

      if (destino) {

          e.preventDefault();

          destino.scrollIntoView({
              behavior: 'smooth'
          });

      }

  });

});



// Rastreamento de cliques no WhatsApp para GA4 e Google Ads

document.querySelectorAll('a[href*="wa.me"]').forEach(botao => {

  botao.addEventListener('click', function() {

      if (typeof gtag === "function") {

          gtag('event', 'CliqueWhatsApp', {

              event_category: 'Contato',

              event_label: 'WhatsApp Absoluta Segurança'

          });

      }

  });

});



// Animação simples ao aparecer na tela

const elementos = document.querySelectorAll('.card');


const observador = new IntersectionObserver((entradas) => {


  entradas.forEach(entrada => {


      if (entrada.isIntersecting) {


          entrada.target.style.opacity = "1";

          entrada.target.style.transform = "translateY(0)";


      }


  });


});



elementos.forEach(card => {


  card.style.opacity = "0";

  card.style.transform = "translateY(30px)";

  card.style.transition = "0.6s";


  observador.observe(card);


});