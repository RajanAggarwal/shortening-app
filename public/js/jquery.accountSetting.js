jQuery(document).ready(function() {

//Change Password update form validate
	jQuery('#changePassword').validate({
		rules:{
			password:{
				required:true,
				minlength: 6,
			},
			password_confirmation:{
				required:true,
				minlength: 6,
				equalTo: "#form-password"
			},
		},
	});
	
});
