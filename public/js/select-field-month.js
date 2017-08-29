/** Profile page after 2nd step page of registration **/

/** changing the month select field to chinese language if chinese language is selected **/

jQuery(document).ready(function() {
	var selected_language = '';
	
	selected_language = jQuery('.language-select.LanguageConverter li.dropdown a span').html();

	if(selected_language == 'Chinese'){
		 if ( jQuery( "select.month" ).length > 0) {
		 	
			var newOptions = '<option value="">月</option><option value="0">一月</option><option value="1">二月</option><option value="2">三月</option><option value="3">四月</option><option value="4">五月</option><option value="5">六月</option><option value="6">七月</option><option value="7">八月</option><option value="8">九月</option><option value="9">十月</option><option value="10">十一月</option><option value="11">十二月</option>';

			jQuery('select.month').html(newOptions);
		}
	}

});