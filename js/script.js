// Использование jquery

let overlay = $(".overlay");
let body = $("body");
let navButton = $(".navbar_mobile_open");
let navbar = $(".section-header-container");

// ГЛАВНЫЙ ЭКРАН
let sectionPromo = $(".section-promo");
let sectionPromoHeader = $(".section-promo-top-header");
let sectionPromoSubheader = $(".section-promo-top-subheader");
let sectionPromoItems = $(".section-promo-bottom-item");

let sectionInfo = $(".section-promo");
let sectionInfoItem = $(".section-info-item");
let sectionInfoItemContent = $(".section-info-item > p, .section-info-item > h4");
let sectionInfoScroll = false;

let sectionMaterials = $(".section-materials");
let itemElemRound = $(".section-materials-round-content-item");
let itemElemContent = $(".section-materials-container-header, .section-materials-container-text");
let materialsBackgroundWidth = 902;
let sectionMaterialsScroll = false;

let sectionScheme = $(".section-scheme");
let sectionSchemeHeader = $(".section-scheme-header");
let sectionSchemeIcon = $(".section-scheme-cards-card-icon");
let sectionSchemeContent = $(".section-scheme-cards-card-text");
let sectionSchemeBottom = $(".section-scheme-bottom > h2");
let sectionSchemeScroll = false;

let sectionPhotos = $(".section-photos");
let sectionPhotosHeader = $(".section-photos-header");
let sectionPhotosScroll = false;

let sectionRecall = $(".section-recall");
let sectionRecallHeader = $(".section-recall-header");
let sectionRecallArrowMin = $(".section-recall-borders-right-min svg, .section-recall-borders-left-min svg");
let sectionRecallArrowMax = $(".section-recall-borders-right-max svg, .section-recall-borders-left-max svg");
let sectionRecallScroll = false;

let sectionFooter = $(".section-footer");
let sectionFooterDescription = $(".section-footer-top-content-description");
let sectionFooterContacts = $(".section-footer-top-content-contacts");
let sectionFooterIcons = $(".section-footer-top-content-icons");
let sectionFooterSublogo = $(".section-footer-top-content-sublogo");
let sectionFooterScroll = false;


let previewText = $(".section-preview-card-content-container-text");
let previewHeader = $(".section-preview-card-content-container h4");

$(document).ready(function() {

    // блок для контактной формы

    $("#form_number").mask("+7(999)999-99-99");
    document.querySelector(".section-recall-form").addEventListener("submit", function(e) {
        e.preventDefault();

        let infoBlock = document.querySelector(".section-recall-form-message");
        let infoBlockName = document.querySelector("#form_name");
        let infoBlockNumber = document.querySelector("#form_number");
        let infoBlockMessage = document.querySelector("#form_message");

        infoBlock.classList.add("show");

        if (!infoBlockMessage.value || !infoBlockName.value || !infoBlockNumber.value) {
            infoBlock.classList.add("error");
            infoBlock.innerHTML = "Заполните все поля!";
        }
        else {
            infoBlock.classList.add("success");
            infoBlock.innerHTML = "Заявка успешно отправлена!";
        }
        
        setTimeout(function() {
            infoBlock.classList.remove("show");
            infoBlock.classList.remove("success");
            infoBlock.classList.remove("error");
        }, 3000);

        
    });

    // --------

    sectionPromoHeader.addClass("fadeInBottom animDelay-0_5");
    sectionPromoSubheader.addClass("fadeInTop animDelay-1_5");
    sectionPromoItems.addClass("fadeInRight");

    sectionPromoItems.each(function(index) {
        $(this).addClass("fadeInRight animDelay-" + (4 - index) + "_5");
    });

    setTimeout(function() {
        sectionPromoItems.css("transition", "0.3s ease-in-out");
    }, 2000);

    // блок для карточки preview

    previewText.css("transform", "translateY(-" + (previewText.height() / 2) + "px)");
    previewHeader.css("transform", "translateY(" + (previewText.height() / 2) + "px)");

    $(navButton).click(function () {
        if (!navbar.is(':visible')) {
            navbar.slideDown('normal');
            body.css("overflow-y", "hidden");
            overlay.css("visibility", "visible");
            overlay.css("opacity", "0.8");
        } 
        else {
            navbar.slideUp('normal');
            body.css("overflow-y", "");
            overlay.css("visibility", "");
            overlay.css("opacity", "");
        }
    });

    $('.section-photos-container').lightSlider({
        item:2,
        loop:false,
        slideMove:2,
        slideMargin:40,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        prevHtml:'<svg><use xlink:href="dist/img/main.svg#arrow"></use></svg>',
        nextHtml:'<svg><use xlink:href="dist/img/main.svg#arrow"></use></svg>',
        responsive : [
            {
                breakpoint:1280,
                settings: {
                    item:2,
                    slideMargin:30
                  }
            },
            {
                breakpoint:992,
                settings: {
                    item:2,
                    slideMargin:20
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    }); 

    $(window).scroll(function() {
        let pageHeight = $(window).scrollTop() + $(window).height();


        if (pageHeight > sectionMaterials.offset().top && !sectionMaterialsScroll) {
            sectionMaterialsScroll = true;
            itemElemRound.addClass("itemRotate");
            itemElemContent.each(function(index) {
                $(this).addClass("fadeInLeft animDelay-" + index + "_5")
            });

            // добавление карты в подвал

            $(".section-footer-top-map").html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abf67250cd8d46829c0a39451e1a04494b61fa61379dd81a8dbed95184be21aa2&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>');
        }

        if (pageHeight > sectionScheme.offset().top && !sectionSchemeScroll) {
            sectionSchemeScroll = true;

            if ($(window).width() <= 768) {
                sectionSchemeHeader.addClass("fadeInTop animDelay-0_5");
                sectionSchemeIcon.each(function(index) {
                    $(this).addClass("fadeInRight animDelay-" + (index+1) + "_5");
                });
                sectionSchemeContent.each(function(index) {
                    $(this).children().addClass("fadeInRight animDelay-" + (index+1) + "_5");
                });
                sectionSchemeBottom.addClass("fadeInTop animDelay-4_5");
            }
            else {
                sectionSchemeHeader.addClass("fadeInTop animDelay-0_5");
                sectionSchemeIcon.each(function(index) {
                    switch(index) {
                        case 0: 
                        {
                            $(this).addClass("fadeInRight animDelay-3_5");
                            break;
                        }
                        case 1: 
                        {
                            $(this).addClass("rotateInUpLeft animDelay-2_5");
                            break;
                        }
                        case 2: 
                        {
                            $(this).addClass("fadeInLeft animDelay-1_5");
                            break;
                        }
                    }
                });
                sectionSchemeContent.each(function(index) {
                    $(this).children().addClass("fadeInTop animDelay-" + (index+4) + "_5");
                });
                sectionSchemeBottom.addClass("fadeInTop animDelay-7_5");
            }
        }

        if (pageHeight > sectionInfo.offset().top && !sectionInfoScroll) {
            sectionInfoScroll = true;

            if ($(window).width() <= 768) {
                sectionInfoItem.each(function(index) {
                    switch(index) {
                        case 0: 
                        {
                            console.log("text");
                            $(this).children().addClass("fadeInRight animDelay-0_5");
                            break;
                        }
                        case 1: 
                        {
                            $(this).children().addClass("fadeInLeft animDelay-1");
                            break;
                        }
                        case 2: 
                        {
                            $(this).children().addClass("fadeInRight animDelay-1_5");
                            break;
                        }
                        case 3: 
                        {
                            $(this).children().addClass("fadeInLeft animDelay-2");
                            break;
                        }
                    }
                });
            }
            else {
                sectionInfoItem.each(function(index) {
                    switch(index) {
                        case 0: 
                        {
                            console.log("text");
                            $(this).children().addClass("fadeInTop animDelay-0_5");
                            break;
                        }
                        case 1: 
                        {
                            $(this).children().addClass("fadeInBottom animDelay-1");
                            break;
                        }
                        case 2: 
                        {
                            $(this).children().addClass("fadeInTop animDelay-1_5");
                            break;
                        }
                        case 3: 
                        {
                            $(this).children().addClass("fadeInBottom animDelay-2");
                            break;
                        }
                    }
                });
            }
        }

        if (pageHeight > sectionRecall.offset().top && !sectionRecallScroll) {
            sectionRecallScroll = true;
            sectionRecallHeader.addClass("fadeInTop animDelay-0_5");
            sectionRecallArrowMax.addClass("fadeInLeft animDelay-1_5");
            sectionRecallArrowMin.addClass("fadeInLeft animDelay-2_5");
        }

        if (pageHeight > sectionPhotos.offset().top && !sectionPhotosScroll) {
            sectionPhotosScroll = true;
            sectionPhotosHeader.addClass("fadeInTop animDelay-0_5");
        }

        if (pageHeight > sectionFooter.offset().top && !sectionFooterScroll) {
            sectionFooterScroll = true;
            sectionFooterDescription.addClass("fadeInLeft animDelay-0_5");
            sectionFooterContacts.addClass("fadeInLeft animDelay-1_5");
            sectionFooterIcons.addClass("fadeInLeft animDelay-2_5");
            sectionFooterSublogo.addClass("fadeIn animDelay-3_5");
        }

    });




    /* 
    
    $("#open_modal").click(function() {
        overlay.css("visibility", "visible");
        overlay.css("opacity", "0.8");
        body.css("overflow-y", "hidden");

        if ($(window).width() <= '576') { // высота открытия модали на мобиле
            $(".modal-form").css("top", "50px");
        }
        if ($(window).width() > '576') { // высота открытия на экране больше 576
            $(".modal-form").css("top", "120px");
        }
    });

    $(".overlay").click(function() {

        $(".modal-form").css("top", "");
        body.css("overflow-y", "");
        overlay.css("visibility", "");
        overlay.css("opacity", "");
    });

    */

});