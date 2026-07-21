/* =========================================================
   ABSOLUTA SEGURANÇA
   JAVASCRIPT
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('#nav');


if (menuToggle && nav) {


    menuToggle.addEventListener(

        'click',

        function() {

            nav.classList.toggle('ativo');

        }

    );


}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================================= */

const linksMenu = document.querySelectorAll(

    '#nav a'

);


linksMenu.forEach(

    function(link) {


        link.addEventListener(

            'click',

            function() {

                nav.classList.remove('ativo');

            }

        );


    }

);


/* =========================================================
   RASTREAMENTO ÚNICO DO WHATSAPP
========================================================= */

const botoesWhatsApp = document.querySelectorAll(

    '.js-whatsapp'

);


botoesWhatsApp.forEach(

    function(botao) {


        botao.addEventListener(

            'click',

            function() {


                if (

                    typeof gtag === 'function'

                ) {


                    gtag(

                        'event',

                        'clique_whatsapp',

                        {

                            'event_category': 'Contato',

                            'event_label': 'WhatsApp',

                            'value': 1

                        }

                    );


                }


            }

        );


    }

);
