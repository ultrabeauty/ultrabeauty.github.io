jQuery(document).ready(function($){
	var mainTabs = $('.mainTabsLocation');
	mainTabs.each(function(){
		var tab = $(this),
			tabChoices = tab.find('ul.mainTabs'),
			tabPage = tab.find('ul.mainPageInfo'),
			tabNavBar = tab.find('nav');

		tabChoices.on('click', 'a', function(event){
			event.preventDefault();
			var selectedMainTabItem = $(this);
			if( !selectedMainTabItem.hasClass('selectedMainTab') ) {
				var selectedMainTabTab = selectedMainTabItem.data('content');
				var	selectedMainTabContent = tabPage.find('li[data-content="'+selectedMainTabTab+'"]');
				
				tabChoices.find('a.selectedMainTab').removeClass('selectedMainTab');
				selectedMainTabItem.addClass('selectedMainTab');
				selectedMainTabContent.addClass('selectedMainTab').siblings('li').removeClass('selectedMainTab');
			}
		});
	});
});

function addToCart() {
  alert("Item was added to cart!");
  window.location.reload();
}

var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();