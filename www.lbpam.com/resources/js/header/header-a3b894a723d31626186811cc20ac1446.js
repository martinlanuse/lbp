(function(c){function k(){var a=window.__URL_USERPROFILE_LANGUAGE_MAP[b.globalUserProfile],e=c(Object.keys(a)).filter(function(){return this!=b.language}).map(function(){return'\x3cli\x3e\x3ca href\x3d"//'+a[this]+window.location.search+'"\x3e'+d[this][b.language]+"\x3c/a\x3e\x3c/li\x3e"}).toArray().join();e.length||(e='\x3cli class\x3d"bold-text font-size-12 text-center text-info"\x3e'+d.UNAVAILABLE_IN_OTHER_LANGUAGE[b.language]+"\x3c/li\x3e");f.closest(".btn-group").append('\x3cul class\x3d"border-none dropdown-menu font-size-12 mt-0 text-dark"\x3e'+
e+"\x3c/ul\x3e")}function l(){g.on("click",function(){var a=localStorage.getItem("PRODUCT_VISIBILITY");window.__ProductVisibilityLoader.openDisclaimer().then(function(b){a&&Object.entries(JSON.parse(a)).some(function(a){return b.productVisibility[a[0]]!==a[1]})?window.location.reload():h(b.productVisibility.userProfileName)})})}function h(a){g.html(d[a.toUpperCase()+"_USERPROFILE_LABEL"][b.language]+'\x3ci class\x3d"bold-text fa fa-long-arrow-down font-size-14 ml-3"\x3e\x3c/i\x3e')}var d={UNSELECTED_USERPROFILE_LABEL:{English:"Select profile",
French:"Choisissez un profil"},INSTIT_USERPROFILE_LABEL:{English:"Professional Investor",French:"Investisseur professionnel"},RETAIL_USERPROFILE_LABEL:{English:"Retail investor",French:"Investisseur particulier"},English:{English:"English",French:"Anglais"},French:{English:"French",French:"Français"},UNAVAILABLE_IN_OTHER_LANGUAGE:{English:"This page is only available in English.",French:"Cette page n'est disponible qu'en français."},SEARCH_WORD:{English:"Search",French:"Rechercher"}},f=c("#lbpam-language-header"),
g=c("#lbpam-userprofile-header"),b=function(){var a=localStorage.getItem("PRODUCT_VISIBILITY"),a=a?JSON.parse(a):{userProfileName:"UNSELECTED"};return{globalUserProfile:localStorage.getItem("userProfileName"),language:localStorage.getItem("languageName"),productUserProfile:a.userProfileName}}();c(function(){k();f.html(d[b.language][b.language]+'\x3ci class\x3d"bold-text fa fa-long-arrow-down font-size-14 ml-3"\x3e\x3c/i\x3e');l();h(b.productUserProfile);c(".lb-nav-search-btn:not(.lb-searchbar-sm-toggle)").html('\x3ci class\x3d"fa-search fal ml-3 pr-4 font-size-21"\x3e\x3c/i\x3e '+
d.SEARCH_WORD[b.language])})})(jQuery);