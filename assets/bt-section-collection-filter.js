/* Do not edit this file to avoid losing your changes when upgrade the theme */
var BTCollectionFilter={selectors:{wrap:".cfs",item:".cfs__item",itemTitle:".cfs__item__title",link:".cfs__link",sectionContent:".section__content",dropdown:".cfs__dropdown",dropdownTrigger:".cfs__dropdown__trigger",dropdownTriggerTitle:".cfs__dropdown__title",dropdownTriggerValue:".cfs__dropdown__value",dropdownTriggerTitleTopClass:"cfs__dropdown__title--top",dropdownContent:".cfs__dropdown__content",btn:".cfs__btn"},data:{isAuto:!0},getAjaxUrl:function(t,e){if(this.data.isAuto)return theme.collectionAllUrl;var s=[],n=this;return t.find(this.selectors.link+".selected").each(function(){parseInt($(this).parents(n.selectors.item).first().attr("data-index"))<=e&&s.push($(this).attr("data-value"))}),theme.collectionAllUrl+"/"+s.join("+")},getAutoParams:function(t,e,s){var n=[],o={},i=this;return s||n.push("btindex="+e),t.find(this.selectors.item).each(function(){var t;+$(this).attr("data-index")<=e&&(t=$(this).attr("data-option-name"),n.push(t+"="+$(this).find(i.selectors.link+".selected").attr("data-value")))}),0<n.length&&(o.f=n.join(",")),o},getCompleteUrl:function(t,e){if(this.data.isAuto){var s=this.getAutoParams(t,e,!0),n=new URLSearchParams(s);return this.getAjaxUrl()+"?"+n.toString()}return this.getAjaxUrl(t,e)},detectLastItem:function(t){t.find(this.selectors.item).last().addClass("last")},renderData:function(s,t,n){s.addClass("rendering");var e=this.getAjaxUrl(s,t);BT.showLoadingFull();var o={view:"filter"};this.data.isAuto&&((o=this.getAutoParams(s,t)).view="filter"),BT.callAjax(e,"get",o,null,function(t){var e=$(this.selectors.sectionContent,t);this.data.isAuto=null!=e.attr("data-auto"),s.find(this.selectors.sectionContent).html(e.html()),s.removeClass("rendering"),this.detectLastItem(s),BT.hideLoadingFull(),n&&n()}.bind(this))},init:function(){var i=this,r="selected",l="active";$(document).on("click",this.selectors.link,function(t){t.preventDefault();var e,s,n,o=$(this).parents(i.selectors.wrap).first();o.hasClass("rendering")||(e=$(this).parents(i.selectors.item).first(),$(this).hasClass(r)?(e.find(i.selectors.dropdown).removeClass(l),e.hasClass("last")||(n=parseInt(e.attr("data-index")),0<(s=o.find(i.selectors.item+'[data-index="'+(n+1)+'"]')).length&&s.find(i.selectors.dropdown).addClass(l))):(e.find("."+r).removeClass(r),$(this).addClass(r),e.hasClass("last")?(e.find(i.selectors.dropdown).removeClass(l),e.find(i.selectors.dropdownTriggerValue).text($(this).text()),e.find(i.selectors.dropdownTriggerTitle).addClass(i.selectors.dropdownTriggerTitleTopClass)):(n=parseInt(e.attr("data-index")),i.renderData(o,n,function(){var t=o.find(i.selectors.item+'[data-index="'+(n+1)+'"]');0<t.length&&t.find(i.selectors.dropdown).addClass(l)}))))}),$(document).on("click",this.selectors.dropdownTrigger,function(t){var e=$(this).parent(i.selectors.dropdown);e.hasClass(l)||e.addClass(l)}),$(document).on("click","body",function(t){0!=$(t.target).parents(i.selectors.dropdown).length||$(t.target).hasClass(i.selectors.btn.replace(".",""))||0<$(i.selectors.dropdown+"."+l).length&&$(i.selectors.dropdown+"."+l).removeClass(l)}),$(document).on("click",this.selectors.btn,function(t){t.preventDefault();var e=$(this).parents(i.selectors.wrap),s=e.first().find(i.selectors.item),n=!0;s.each(function(){if(0==$(this).find(i.selectors.link+"."+r).length&&n)return $(this).find(i.selectors.dropdown).addClass(l),void(n=!1)}),n&&(window.location.href=i.getCompleteUrl(e,s.length))})}};BTCollectionFilter.init(),theme.collectionFilter={},theme.CollectionFilterSection=function(t){var e;this.wrap=$(t),e=this.wrap,BTCollectionFilter.renderData(e,0)},theme.CollectionFilterSection.prototype=_.assignIn({},theme.CollectionFilterSection.prototype,{onSelect:function(){},onUnload:function(){delete this.wrap,delete this.content}}),theme.sections.constructors["collection-filter"]=theme.CollectionFilterSection;