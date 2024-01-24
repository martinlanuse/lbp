$(document).ready(function () {
  menu.init();
});



// main function to handle menu and super header elements
var menu = (function ($) {
  function setup() {

    $(document)
      .off("scroll")
      .on("scroll", async function () {
        if ($(document).scrollTop() > 10) {
          $("header")[0].style = "background-color:#28426F";
          $('.lb-scroll-top-btn').addClass('is-visible');
        } else {
          $("header")[0].style = "";
          $('.lb-scroll-top-btn').removeClass('is-visible');
        }
      });


  }
  return {
    init: function init() {

      if ($('#navbar-collapse-1 .nav.navbar-nav').length > 0) {
        setup();
      }
    }
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {
    var $navbarButton = $('.navbar-toggle'),
      $navbarContainer = $('.navbar'),
      $navbar = $('.navbar-nav'),
      $header = $('header'),
      $navbarCollapse = $('.navbar-collapse'),
      $searchbarButton = $('.lb-nav-search-btn');

    // Call the event handler on #text
    $navbar.hover(
      function () {
        //Event one mouse enter add class
        $header.addClass("megamenu-hoverstate");
      },
      // Event two mouse out remove class               
      function () {
        $header.removeClass("megamenu-hoverstate");
      }
    );

    function closeNavBar() {
      $(document.body).removeClass('overflow-hidden');
      $navbarButton.removeClass('dropdown-is-active');
      $navbarCollapse.removeClass('dropdown-is-active');
      $navbarContainer.find('.lb-sub-menu-expanded').removeClass('is-open');
      $navbarContainer.find('.has-children').removeClass('open');
      $navbar.removeClass('move-out');
    };

    function openNavBar() {
      $(document.body).addClass('overflow-hidden');
      $navbarButton.addClass('dropdown-is-active');
      $navbarCollapse.addClass('dropdown-is-active');
    };

    function isNavBarOpen() {
      return $navbarButton.hasClass('dropdown-is-active');
    }

    $navbarButton.on('click', function () {
      if (isNavBarOpen()) {
        closeNavBar();
      } else {
        if (window.innerWidth <= 768) {
          $searchbarButton.trigger('close-search');
        }
        openNavBar();
      }
    });

    $navbarButton.on('close-nav-menu', closeNavBar);
  });

  $(document).on('click', '.mega-dropdown', function (e) {
    e.stopPropagation();
  });

  jQuery(document).ready(function ($) {
    //on mobile - open submenu
    $('.has-children').children('a').on('click', function (event) {
      //prevent default clicking on direct children of .has-children 
      event.preventDefault();
      var selected = $(this);
      selected.next('ul').find('.lb-sub-menu-expanded').addClass('is-open').end().parent('.has-children').parent('ul').addClass('move-out');
    });

    //submenu items - go back link
    $('.go-back').on('click', function () {
      var selected = $(this),
        visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
      selected.parent('ul').parent().parent().parent().parent('.has-children').parent('ul').removeClass('move-out');
      selected.parent('ul').parent().parent().parent().parent('.has-children').removeClass('open');
      selected.parent('ul').removeClass('is-open');
    });
  });

  function appleWebKit603() {
    var safariVersion = navigator.userAgent.split(/^(?:(?!chrome|android).)*safari\/(\d+)/ig);
    var webkitVersion = navigator.userAgent.split(/.*applewebkit\/(\d+)/ig);

    return (safariVersion && safariVersion[1] > 601 && webkitVersion && webkitVersion[1] > 602);
  }

  if (appleWebKit603()) {
    $(".bg-glassmorphism").addClass("bg-safari-color");
  }

  $(".navbar .dropdown.mega-dropdown").on('hide.bs.dropdown', function (_, force) {
    if (!force && screen.width <= 991) {
      return false;
    }
  });

  $(".navbar-collapse .navbar-nav .dropdown-toggle.d-sm-none")
    .on("click", function () {
      window.location.href = $(this).attr("href");
    })
    .each(function () {
      $(this).on("keypress", function (event) {
        var $this = $(this);

        if (event.which === 32) {
          $this.trigger("mouseover");
          addRemoveFocusEvent($this);
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  function addRemoveFocusEvent($focused) {
    window.addEventListener("keypress", removeFocus);

    function removeFocus(event) {
      if (event.which === 32) {
        $focused.trigger("mouseout");
        event.preventDefault();
        window.removeEventListener("keypress", removeFocus);
      }
    }
  }
})(jQuery);

$(document).ready(function () {
  $("[data-lbp-clickable-area]").attr('tabindex', 0).each(function () {
    $(this).on("keypress", function (event) {
      if (event.which == 13) {
        $(this).trigger("click");
        event.preventDefault();
      }
    });
  });
});
