const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    freeMode: true,

    autoplay: true
});

$("#faq .accordion .item h3").click(function(e){
    e.preventDefault();
    const isActive = $(this).closest(".item").hasClass("active");
    $("#faq .accordion .item").removeClass("active");
    if(!isActive){
        $(this).closest(".item").addClass("active");
    }
});