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