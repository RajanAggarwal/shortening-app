/* when the DOM is ready */
jQuery(document).ready(function() {
	/* grab important elements */
	var sortInput = jQuery('#sort_order');
	var submit = jQuery('#autoSubmit');
	var messageBox = jQuery('#message-box');
	var list = jQuery('#sortable-list');
	/* create requesting function to avoid duplicate code */
	var request = function() {
	//	jQuery('#dd-form').submit();
		/*jQuery.ajax({
			beforeSend: function() {
				messageBox.text('Updating the sort order in the database.');
			},
			complete: function() {
				messageBox.text('Database has been updated.');
			},
			data: 'sort_order=' + sortInput[0].value + '&ajax=' + submit[0].checked + '&do_submit=1&byajax=1', //need [0]?
			type: 'post',
			url: '<?php echo $_SERVER["REQUEST_URI"]; ?>'
		});*/
	};
	/* worker function */
	var fnSubmit = function(save) {
		var sortOrder = [];
		list.children('div.clonedInput').each(function(){
			sortOrder.push(jQuery(this).attr('rel'));
		});
		sortInput.val(sortOrder.join(','));
		if(save) {
			return true;
		}
	};
	/* store values */
	list.children('div.clonedInput').each(function() {
		var li = jQuery(this);
		li.data('rel',li.attr('title')).attr('title','');
	});
	/* sortables */
	list.sortable({
		opacity: 0.7,
		update: function() {
			fnSubmit();
		}
	});
	//list.disableSelection();
	/* ajax form submission */
	jQuery('#dd-form').bind('submit',function(e) {
		//if(e) e.preventDefault();
		fnSubmit(true);
	});
});

