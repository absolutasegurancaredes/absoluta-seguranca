/* =========================================================
   ABSOLUTA SEGURANÇA
   JAVASCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector("#nav");


    if (menuToggle && nav) {


        menuToggle.addEventListener("click", function () {

            const menuAberto = nav.classList.toggle("ativo");


            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto ? "true" : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                menuAberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        });


        /* =================================================
           FECHAR MENU AO CLICAR EM UM LINK
        ================================================= */

        const linksMenu = nav.querySelectorAll("a");


        linksMenu.forEach(function (link) {


            link.addEventListener("click", function () {

                nav.classList.remove("ativo");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            });

        });


        /* =================================================
           FECHAR MENU AO CLICAR FORA
        ================================================= */

        document.addEventListener("click", function (event) {


            const clicouNoMenu =
                nav.contains(event.target);


            const clicouNoBotao =
                menuToggle.contains(event.target);


            if (
                !clicouNoMenu &&
                !clicouNoBotao &&
                nav.classList.contains("ativo")
            ) {


                nav.classList.remove("ativo");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }

        });

    }



    /* =====================================================
       RASTREAMENTO DE CLIQUES NO WHATSAPP
       GOOGLE ANALYTICS 4
    ===================================================== */

    const botoesWhatsApp =
        document.querySelectorAll(".js-whatsapp");


    botoesWhatsApp.forEach(function (botao) {


        botao.addEventListener("click", function () {


            if (typeof gtag === "function") {


                gtag(
                    "event",
                    "clique_whatsapp",
                    {

                        event_category:
                            "Contato",

                        event_label:
                            "WhatsApp",

                        transport_type:
                            "beacon"

                    }
                );


            }

        });

    });



    /* =====================================================
       RASTREAMENTO DE CLIQUES NOS SERVIÇOS
    ===================================================== */

    const linksServicos =
        document.querySelectorAll(
            "#servicos .card-link"
        );


    linksServicos.forEach(function (link) {


        link.addEventListener("click", function () {


            const card =
                link.closest(".card");


            const titulo =
                card
                    ? card.querySelector("h3")
                    : null;


            const nomeServico =
                titulo
                    ? titulo.textContent.trim()
                    : "Serviço";


            if (typeof gtag === "function") {


                gtag(
                    "event",
                    "solicitacao_orcamento",
                    {

                        event_category:
                            "Serviços",

                        event_label:
                            nomeServico,

                        servico:
                            nomeServico,

                        transport_type:
                            "beacon"

                    }
                );


            }

        });

    });



    /* =====================================================
       RASTREAMENTO DO BOTÃO PRINCIPAL DO HERO
    ===================================================== */

    const botaoHero =
        document.querySelector(
            ".hero .js-whatsapp"
        );


    if (botaoHero) {


        botaoHero.addEventListener(
            "click",
            function () {


                if (typeof gtag === "function") {


                    gtag(
                        "event",
                        "orcamento_hero",
                        {

                            event_category:
                                "Conversão",

                            event_label:
                                "Botão principal do site",

                            transport_type:
                                "beacon"

                        }
                    );


                }

            }
        );

    }



    /* =====================================================
       RASTREAMENTO DO BOTÃO DE CONTATO
    ===================================================== */

    const botaoContato =
        document.querySelector(
            ".contato .js-whatsapp"
        );


    if (botaoContato) {


        botaoContato.addEventListener(
            "click",
            function () {


                if (typeof gtag === "function") {


                    gtag(
                        "event",
                        "orcamento_contato",
                        {

                            event_category:
                                "Conversão",

                            event_label:
                                "Seção de contato",

                            transport_type:
                                "beacon"

                        }
                    );


                }

            }
        );

    }



    /* =====================================================
       RASTREAMENTO DA GALERIA
    ===================================================== */

    const imagensGaleria =
        document.querySelectorAll(
            ".galeria-grid img"
        );


    imagensGaleria.forEach(function (imagem) {


        imagem.addEventListener(
            "click",
            function () {


                if (typeof gtag === "function") {


                    gtag(
                        "event",
                        "visualizacao_galeria",
                        {

                            event_category:
                                "Galeria",

                            event_label:
                                imagem.alt || "Imagem da galeria"

                        }
                    );


                }

            }
        );

    });



    /* =====================================================
       RASTREAMENTO DO FAQ
    ===================================================== */

    const perguntasFAQ =
        document.querySelectorAll(
            ".faq details"
        );


    perguntasFAQ.forEach(function (pergunta) {


        pergunta.addEventListener(
            "toggle",
            function () {


                if (
                    pergunta.open &&
                    typeof gtag === "function"
                ) {


                    const titulo =
                        pergunta.querySelector(
                            "summary"
                        );


                    const perguntaTexto =
                        titulo
                            ? titulo.textContent.trim()
                            : "Pergunta frequente";


                    gtag(
                        "event",
                        "visualizacao_faq",
                        {

                            event_category:
                                "FAQ",

                            event_label:
                                perguntaTexto

                        }
                    );

                }

            }
        );

    });



    /* =====================================================
       ROLAGEM SUAVE PARA LINKS INTERNOS
    ===================================================== */

    const linksInternos =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    linksInternos.forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {


                const destino =
                    link.getAttribute("href");


                if (
                    !destino ||
                    destino === "#"
                ) {

                    return;

                }


                const elemento =
                    document.querySelector(
                        destino
                    );


                if (elemento) {


                    event.preventDefault();


                    elemento.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });



    /* =====================================================
       FEEDBACK DE CARREGAMENTO
    ===================================================== */

    document.body.classList.add(
        "pagina-carregada"
    );


});
