!function(e){OUContentSlider=function(t){this.id=t.id,this.compClass="."+t.id,this.elements="",this.slidesPerView=t.slidesPerView,this.slidesPerColumn=t.slidesPerColumn,this.slidesToScroll=t.slidesToScroll,this.settings=t,this.swipers={},"undefined"==typeof Swiper?e(window).on("load",e.proxy(function(){"undefined"!=typeof Swiper&&this._init()},this)):this._init()},OUContentSlider.prototype={id:"",compClass:"",elements:"",slidesPerView:{},slidesToScroll:{},settings:{},swipers:{},_init:function(){if(this.elements={mainSwiper:this.compClass},this.elements.swiperSlide=e(this.elements.mainSwiper).find(".swiper-slide"),!(1>=this._getSlidesCount())){var t=this._getSwiperOptions();this.swipers.main=new Swiper(this.elements.mainSwiper,t.main);var s=this;e(this.compClass).on("mouseenter",function(e){s.settings.pause_on_hover&&s.swipers.main.autoplay.stop()}),e(this.compClass).on("mouseleave",function(e){s.settings.pause_on_hover&&s.swipers.main.autoplay.start()})}},_getEffect:function(){return this.settings.effect},_getSlidesCount:function(){return this.elements.swiperSlide.length},_getInitialSlide:function(){return this.settings.initialSlide},_getSpaceBetween:function(){var e=this.settings.spaceBetween.desktop;e=parseInt(e);return isNaN(e)&&(e=10),e},_getSpaceBetweenTablet:function(){var e=this.settings.spaceBetween.tablet;e=parseInt(e);return isNaN(e)&&(e=this._getSpaceBetween()),e},_getSpaceBetweenLandscape:function(){var e=this.settings.spaceBetween.landscape;e=parseInt(e);return isNaN(e)&&(e=this._getSpaceBetweenTablet()),e},_getSpaceBetweenPortrait:function(){var e=this.settings.spaceBetween.portrait;e=parseInt(e);return isNaN(e)&&(e=this._getSpaceBetweenLandscape()),e},_getSlidesPerView:function(){var e=this.slidesPerView.desktop;return Math.min(this._getSlidesCount(),+e)},_getSlidesPerViewTablet:function(){var e=this.slidesPerView.tablet;return""!==e&&0!==e||(e=this.slidesPerView.desktop),e||"coverflow"!==this.settings.type?Math.min(this._getSlidesCount(),+e):Math.min(this._getSlidesCount(),3)},_getSlidesPerViewLandscape:function(){var e=this.slidesPerView.landscape;return""!==e&&0!==e||(e=this._getSlidesPerViewTablet()),e||"coverflow"!==this.settings.type?Math.min(this._getSlidesCount(),+e):Math.min(this._getSlidesCount(),3)},_getSlidesPerViewPortrait:function(){var e=this.slidesPerView.portrait;return""!==e&&0!==e||(e=this._getSlidesPerViewLandscape()),e||"coverflow"!==this.settings.type?Math.min(this._getSlidesCount(),+e):Math.min(this._getSlidesCount(),3)},_getSlidesPerColumn:function(){return this.slidesPerColumn.desktop},_getSlidesPerColumnTablet:function(){var e=this.slidesPerColumn.tablet;return""!==e&&0!==e||(e=this.slidesPerColumn.desktop),e||"coverflow"!==this.settings.type?e:Math.min(this._getSlidesCount(),1)},_getSlidesPerColumnLandscape:function(){var e=this.slidesPerColumn.landscape;return""!==e&&0!==e||(e=this._getSlidesPerColumnTablet()),e||"coverflow"!==this.settings.type?e:Math.min(this._getSlidesCount(),1)},_getSlidesPerColumnPortrait:function(){var e=this.slidesPerColumn.portrait;return""!==e&&0!==e||(e=this._getSlidesPerColumnLandscape()),e||"coverflow"!==this.settings.type?e:Math.min(this._getSlidesCount(),1)},_getSlidesToScroll:function(e){if("slide"===this._getEffect()){var t=this.slidesToScroll[e];return Math.min(this._getSlidesCount(),+t||1)}return 1},_getSlidesToScrollDesktop:function(){return this._getSlidesToScroll("desktop")},_getSlidesToScrollTablet:function(){return this._getSlidesToScroll("tablet")},_getSlidesToScrollLandscape:function(){return this._getSlidesToScroll("landscape")},_getSlidesToScrollPortrait:function(){return this._getSlidesToScroll("portrait")},_getSwiperOptions:function(){var t=this.settings.breakpoint.desktop,s=this.settings.breakpoint.tablet,i=this.settings.breakpoint.landscape;portrait_breakpoint=this.settings.breakpoint.portrait,compClass=this.compClass;var n={navigation:{prevEl:e(compClass).closest(".oxy-ou-content-slider").find(".ou-swiper-button-prev")[0],nextEl:e(compClass).closest(".oxy-ou-content-slider").find(".ou-swiper-button-next")[0]},pagination:{el:compClass+" .swiper-pagination",type:this.settings.pagination,dynamicBullets:this.settings.dynamicBullets,clickable:!0},grabCursor:!1,effect:this._getEffect(),initialSlide:this._getInitialSlide(),slidesPerView:this._getSlidesPerView(),slidesPerColumn:this._getSlidesPerColumn(),slidesPerColumnFill:"row",slidesPerGroup:this._getSlidesToScrollDesktop(),spaceBetween:this._getSpaceBetween(),centeredSlides:this.settings.centered,loop:this.settings.loop,speed:this.settings.speed,autoHeight:this.settings.autoHeight,breakpoints:{}};return this.settings.isBuilderActive&&"edit"==this.settings.builderPreview&&(n.simulateTouch=!1,n.shortSwipes=!1,n.longSwipes=!1,n.preventClicks=!1,n.preventClicksPropagation=!1,n.preventInteractionOnTransition=!0,n.touchStartPreventDefault=!1),this.settings.isBuilderActive||!1===this.settings.autoplay_speed||(n.autoplay={delay:this.settings.autoplay_speed,disableOnInteraction:!!this.settings.pause_on_interaction}),"cube"!==this._getEffect()&&"fade"!==this._getEffect()&&(n.breakpoints[t]={slidesPerView:this._getSlidesPerView(),slidesPerColumn:this._getSlidesPerColumn(),slidesPerGroup:this._getSlidesToScrollDesktop(),spaceBetween:this._getSpaceBetween()},n.breakpoints[s]={slidesPerView:this._getSlidesPerViewTablet(),slidesPerColumn:this._getSlidesPerColumnTablet(),slidesPerGroup:this._getSlidesToScrollTablet(),spaceBetween:this._getSpaceBetweenTablet()},n.breakpoints[i]={slidesPerView:this._getSlidesPerViewLandscape(),slidesPerColumn:this._getSlidesPerColumnLandscape(),slidesPerGroup:this._getSlidesToScrollLandscape(),spaceBetween:this._getSpaceBetweenLandscape()},n.breakpoints[portrait_breakpoint]={slidesPerView:this._getSlidesPerViewPortrait(),slidesPerColumn:this._getSlidesPerColumnPortrait(),slidesPerGroup:this._getSlidesToScrollPortrait(),spaceBetween:this._getSpaceBetweenPortrait()}),"cube"==this._getEffect()&&(n.cubeEffect={shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}),"coverflow"===this.settings.type&&(n.effect="coverflow"),{main:n}},_onElementChange:function(e){0===e.indexOf("width")&&this.swipers.main.onResize(),0===e.indexOf("spaceBetween")&&this._updateSpaceBetween(this.swipers.main,e)},_updateSpaceBetween:function(e,t){var s=this._getSpaceBetween(),i=t.match("space_between_(.*)");if(i){var n={tablet:this.settings.breakpoint.tablet,landscape:this.settings.breakpoint.landscape,portrait:this.settings.breakpoint.portrait};e.params.breakpoints[n[i[1]]].spaceBetween=s}else e.originalParams.spaceBetween=s;e.params.spaceBetween=s,e.onResize()}}}(jQuery);