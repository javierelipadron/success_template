$(document).ready(function(){
   
    
     /* --------------------------------------------------------------------------
                  SCRIPT OF DROPDOWN MENU
    --------------------------------------------------------------------------*/
   
    if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
    
        $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');        
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).toggle("100");
                $(this).toggleClass('open');       
            }
        );
    }

   /* --------------------------------------------------------------------------
                 LOADER
    --------------------------------------------------------------------------*/

        $( '#loader' ).animate({ 'opacity': 0 }, 300 );
        setTimeout( function() {
        
            $( '#loader' ).remove();
        
        }, 600 );
        
   /* --------------------------------------------------------------------------
                 OWL CAROUSEL
    --------------------------------------------------------------------------*/

    if($('.stDataOwl, .st-data-owl').length){

    	$( '.stDataOwl, .st-data-owl' ).each(function( index ) {
    		var $this = $(this);
    		$this.owlCarousel(
    		{
    			items:$this.data('st_items'),
    			navigation:$this.data('st_navigation'),
    			singleItem:$this.data('st_singleitem'),
    			autoPlay:$this.data('st_autoplay'),
    			itemsScaleUp:$this.data('st_itemsscaleup'),
    			navigationText:['<i class="glyphicon glyphicon-chevron-left"></i>','<i class="glyphicon glyphicon-chevron-right"></i>'], 
    			pagination:$this.data('st_pagination'),
    			paginationNumbers:$this.data('st_paginationnumbers'),
    			autoHeight:$this.data('st_autoheight'),
    			mouseDrag:$this.data('st_mousedrag'),
    			transitionStyle:$this.data('st_transitionstyle'),
    			responsive:true,
    			lazyLoad : true,
    			addClassActive:true,
    			itemsDesktop :[1450,4],
    			afterInit: function(){

    				if( Modernizr.mq('only all and (min-width: 769px)') ){
    					$('.caption-wrapper').css('display', 'none');
    					$('.active .caption-wrapper').css('display', 'block');
    					$('.active .caption-content-position', $this).children().each(function(index, val) {
    						$(this).addClass('animated '+$(this).data('neko_animation'));
    					});
    				}else{
    					$('.caption-wrapper').css('display', 'block');
    				}



    			},
    			beforeMove:  function(){

    				if( Modernizr.mq('only all and (min-width: 769px)') ){

    					$('.caption-wrapper').css('display', 'none');
    					$('.active .caption-wrapper').css('display', 'block');
    					$('.caption-content-position').children().each(function(index, val) {
    						$(this).removeClass('animated '+$(this).data('neko_animation'));
    					});

    				}else{
    					$('.caption-wrapper').css('display', 'block');
    				}

    			},
    			afterMove:  function(){

    				if( Modernizr.mq('only all and (min-width: 769px)') ){
    					$('.caption-wrapper').css('display', 'none');
    					$('.active .caption-wrapper').css('display', 'block');
    					$('.active .caption-content-position', $this).children().each(function(index, val) {

    						$(this).addClass('animated '+$(this).data('neko_animation'));
    					});

    				}else{
    					$('.caption-wrapper').css('display', 'block');
    				}
    			}
    		});
});
}

  
	
});
     /* --------------------------------------------------------------------------
                 WOW INIT
    --------------------------------------------------------------------------*/

      new WOW().init();
