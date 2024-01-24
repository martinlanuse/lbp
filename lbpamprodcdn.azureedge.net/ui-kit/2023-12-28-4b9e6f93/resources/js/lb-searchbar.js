jQuery(document).ready(function ($) {
    var $searchForm = $('.lb-global-search-bar'),
        $searchTrigger = $('.lb-nav-search-btn'),
        $coverLayer = $('.lb-search'),
        $navbarButton = $('.navbar-toggle');
        $headerContainerSelector = $('header');


    function closeSearchForm() {
        $searchTrigger.removeClass('search-form-visible');
        $searchForm.removeClass('is-visible');
        $coverLayer.removeClass('search-form-visible');
        $headerContainerSelector.removeClass('header-with-visible-search');
    }

    function openSearch() {
        $searchTrigger.addClass('search-form-visible');
        $coverLayer.addClass('search-form-visible');
        $headerContainerSelector.addClass('header-with-visible-search');
        if (window.innerWidth > 768) { $searchForm.find('input[type="search"]').focus(); }
    }

    function closeSearch() {
        closeSearchForm();
        $searchForm.find('.m-search-close').trigger('click');
    }

    function isSearchOpen() {
        return $searchTrigger.hasClass('search-form-visible');
    }

    $searchTrigger.on('click', function () {
       if (isSearchOpen()) {
        closeSearch();
       } else {
        if (window.innerWidth <= 768) {
            $navbarButton.trigger('close-nav-menu');
        }
        openSearch();
       } 
    });

    $searchTrigger.on('close-search', closeSearch);

    $(document).keyup(function (event) {
        if (event.which == '27') closeSearchForm();
    });
    
    const parentDiv = $('#search')
    $(document).on('click', function (e) {
        if (!$(e.target).is(parentDiv) && (parentDiv.hasClass('search-form-visible')) &&  parentDiv.has(e.target).length === 0)  {
            closeSearchForm()
        }
    });

});
