jQuery(document).ready(function($) {
    $('.lb-getting-started-carousel').owlCarousel({
        stagePadding: 0,
        loop:false,
        margin: 5,
        nav:true,
        navText:['<i class="fal fa-long-arrow-left"></i><span>Précédent</span>','<i class="fal fa-long-arrow-right"></i><span>Suivant</span>'],
        responsive:{
            0:{
                items:1,
                nav:true,
                margin:0
            },
            576:{
                items:1,
                nav:true,
                margin:0
            },
            768:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            } 
        }               
    })
});
