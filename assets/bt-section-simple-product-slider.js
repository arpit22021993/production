/* Do not edit this file to avoid losing your changes when upgrade the theme */
theme.simpleProductSlider={},theme.SimpleProductSliderSection=function(e){var o=$(e),r=(this.wrap=o).attr("data-section-id");this.sectionId=r;var t=o.hasClass("load-ajax")?-470:170;BT.initScrollingWindowTriggerOnce(o,"simple-product-slider_"+r,t,function(){var t,i;o.hasClass("load-ajax")?(t="#sps-products-"+r,i=$(t),BT.loadDynamicProductsAjax(i.attr("data-ajax-params"),1,function(e){i.html($(".products",e).html()),BT.initDealCountdown(i),BT.initSlider(o,!1),BT.applyCustomColorSwatches(i),BT.reLoadReview(i),BT.popularAddedWishlistItems(i),BT.convertCurrencySilence(t+" span.money")})):(BT.initDealCountdown(o),BT.initSlider(o,!0),BT.applyCustomColorSwatches(o))})},theme.SimpleProductSliderSection.prototype=_.assignIn({},theme.SimpleProductSliderSection.prototype,{onSelect:function(e){e.detail.load&&(BT.reLoadReview(this.wrap),BT.convertCurrencySilence(this.wrap.find("span.money")))},onBlockSelect:function(e){var t;BT.isInViewport(this.wrap,e.currentTarget.defaultView)||(t=this.wrap.offset().top-100,$("html, body").animate({scrollTop:t},400))},onUnload:function(){BT.destroyScrollingWindowTriggerOnce("simple-product-slider_"+this.sectionId),delete this.sectionId,delete this.wrap}}),theme.sections.constructors["simple-product-slider"]=theme.SimpleProductSliderSection;