document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU MOBILE
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".header nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            const ativo = nav.classList.toggle("ativo");

            menuToggle.setAttribute(
                "aria-expanded",
                ativo ? "true" : "false"
            );

        });


        const linksMenu = nav.querySelectorAll("a");

        linksMenu.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("ativo");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       CARROSSEL CRIANÇA E PET
    ========================== */

    const carousel = document.querySelector(".familia-carousel");

    if (carousel) {

        const slides = carousel.querySelectorAll(".familia-slide");

        const anterior = carousel.querySelector(".carousel-prev");

        const proximo = carousel.querySelector(".carousel-next");

        const indicadores = carousel.querySelectorAll(".carousel-dot");

        let slideAtual = 0;


        function mostrarSlide(index) {

            if (slides.length === 0) {
                return;
            }


            if (index >= slides.length) {
                slideAtual = 0;
            }

            else if (index < 0) {
                slideAtual = slides.length - 1;
            }

            else {
                slideAtual = index;
            }


            slides.forEach(function (slide, i) {

                slide.classList.toggle(
                    "ativo",
                    i === slideAtual
                );

            });


            indicadores.forEach(function (dot, i) {

                dot.classList.toggle(
                    "ativo",
                    i === slideAtual
                );

            });

        }


        if (proximo) {

            proximo.addEventListener("click", function () {

                mostrarSlide(slideAtual + 1);

            });

        }


        if (anterior) {

            anterior.addEventListener("click", function () {

                mostrarSlide(slideAtual - 1);

            });

        }


        indicadores.forEach(function (dot, i) {

            dot.addEventListener("click", function () {

                mostrarSlide(i);

            });

        });


        /* =========================
           PASSAR PARA O LADO COM MOUSE
        ========================== */

        let inicioX = 0;

        let fimX = 0;


        carousel.addEventListener(
            "mousedown",
            function (event) {

                inicioX = event.clientX;

            }
        );


        carousel.addEventListener(
            "mouseup",
            function (event) {

                fimX = event.clientX;

                const distancia = fimX - inicioX;


                if (Math.abs(distancia) > 50) {

                    if (distancia < 0) {

                        mostrarSlide(slideAtual + 1);

                    }

                    else {

                        mostrarSlide(slideAtual - 1);

                    }

                }

            }
        );


        /* =========================
           TOUCH NO CELULAR
        ========================== */

        carousel.addEventListener(
            "touchstart",
            function (event) {

                inicioX = event.touches[0].clientX;

            },
            { passive: true }
        );


        carousel.addEventListener(
            "touchend",
            function (event) {

                fimX = event.changedTouches[0].clientX;

                const distancia = fimX - inicioX;


                if (Math.abs(distancia) > 50) {

                    if (distancia < 0) {

                        mostrarSlide(slideAtual + 1);

                    }

                    else {

                        mostrarSlide(slideAtual - 1);

                    }

                }

            },
            { passive: true }
        );


        /* =========================
           INICIA NO PRIMEIRO SLIDE
        ========================== */

        mostrarSlide(0);

    }


    /* =========================
       WHATSAPP
    ========================== */

    const whatsappLinks = document.querySelectorAll(".js-whatsapp");

    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (typeof gtag === "function") {

                gtag(
                    "event",
                    "clique_whatsapp",
                    {
                        event_category: "Contato",
                        event_label: "WhatsApp"
                    }
                );

            }

        });

    });

});
