jQuery(document).ready(function() {
	var questionsId=[];	
	var questionsIds=[];	
	var globalcounterQuestion=0;
	$('#userlistingpage').DataTable();
	
	if(locale_get_default=="English")
	$("#sortable-list").sortable("disable");
	
	
	
	
	/* to change the day month year dropdown */
	if(locale_get_default=="Spanish")
	{
	//	combodate
		$('select[name=day] > option:first-child')
			.text('Dia');
		$('select[name=month] > option:first-child')
			.text('Mes');
		$('select[name=year] > option:first-child')
			.text('Año');
	}
	
	if(locale_get_default=="Chinese")
	{
	//	combodate
		$('select[name=day] > option:first-child')
			.text('日');
		$('select[name=month] > option:first-child')
			.text('月');
		$('select[name=year] > option:first-child')
			.text('年');
	}
	
	var increment= $(".clonedInput").length-1;
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
 /* file uploading cropping and ajusting code starts here */

  
   $("#fileuploadprofile").find(':file').change(function(){
	 var imageUrl=$('#imageurl').val();
	  var filename = $('#image_file_name').val();
	  if(filename){
	  	$("#afteredit").hide();
		$(".rangebar").hide();
		$("#profilepic-change").show();
		equalheight('.equal-height');
	  }
	  $(".rangebar").show();
	 
	  var fileExtension = ['jpeg', 'jpg', 'png'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
			
            alert("Only formats are allowed : "+fileExtension.join(', '));           
        };
    
});



 $("#fileuploadpic").find(':file').change(function(){
	 var imageUrl=$('#imageurl').val();
	 var filename = $('#image_file').val();
        $('.selectedfile').html(filename);
	  var fileExtension = ['jpeg', 'jpg', 'png'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
			
            alert("Only formats are allowed : "+fileExtension.join(', '));           
        };
	/* var baseUrl=$('#baseurl').val();
	 var token =$("input[name=_token]").val();
	 var data = new FormData();
		data.append("_token",token);
		data.append("file",$("input[type=file]")[0].files[0]);
	  $.ajax({
			url: baseUrl+'/profilePictureUpload/',
			type:"POST",
			data : data,
			cache: false,
			 processData: false, // Don't process the files
        contentType: false,
			success: function( url ) {
				$("#profilepicuploaded").attr("src",url);
			}
		});*/
});


$("#profiledp").click(function(e){
	
	$("#image_file_name").click();
	
});

$("#saveprofileimage").click(function(e){
	e.preventDefault();

	var imageData = $('.profileimage-editor').cropit('export');
	if($("#hiddenprofilepic").hasClass('myprofile-crop')){
		$("#hiddenRedirectProfile").val('profilePage');
	}
	$("#hiddenprofilepic").val(imageData);
	$("#edit-myprofile").submit();
	
});
$("#profileregsubmit").click(function(e){
	
	e.preventDefault();
	var imageData = $('.image-editor').cropit('export');
	
	$("#hiddenprofilepic").val(imageData);
	$("#regi-profile").submit();
	
});
$("#cancelprofile").click(function(e){
	$("#afteredit").show();
	$("#profilepic-change").hide();
	    location.reload();
});
        $(function() {
			var imageUrl=$('#imageurl').val();
       $('.image-editor').cropit({
          imageState: {
            src: imageUrl+'/300.png',
          },
        });

      });
   /* file uploading cropping and ajusting code ends here */  
     $('#search-date').on('submit', function(e) {
		 var dateValue=$("#date").val();
		 if(dateValue == "")
		 {
			 alert("Please Select Day, Month and Year");
			return false;
		 }
		 else
		 {
			 return true;
		 }
		 
	});
$(document).on("click","#addnewoption",function(){
		var cloneIndex =  $(".clonedInput").length;	
		cloneIndex=cloneIndex+globalcounterQuestion;
		//to show numbring only
		var numberIndex=cloneIndex+1;
		//to show numbring only ends here
			//console.log("clone"+cloneIndex);
		//cloneIndex++;
	increment++;
    $(".clonedInput:first").clone()
        .appendTo(".newbody")
        .attr("id", "clonedInput" +  cloneIndex)
		.append("<div class='btn-col'><button type='button' class='remove btn btn-danger btn-xs'><i class='fa fa-remove'></i></button></div>");
		$("#clonedInput" +  cloneIndex).find(".numbring").text(numberIndex);
		$("#clonedInput" +  cloneIndex).find("input").each(function(){
			var myName=$(this).attr("name");
			$(this).removeAttr("id");
			$(this).val("");
			$(this).attr("name",myName.replace("[0]","["+(increment)+"]"));
		});
	
});

$(document).on("click","button.remove",function(){
	questionsId.push($(this).attr('rel'));
	$("#deletequestionIdsvalue").val(questionsId.toString());
	$(this).parents(".clonedInput").remove();
	globalcounterQuestion++ ;
});

$('.deletequestionnaire').on('click', function(e) {
	var confirmed=confirm("Are You sure you want delete this Questionnaire?");
	if(confirmed == true)
	{
		var dataId = $(this).attr('rel');
		var th = $(this);

		$.ajax({
			url: 'questionnaireDestroy/'+ dataId,
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					var lencheck=$("#questionnnaire tbody tr").length;
					$(th).parents("tr").remove();
					if(lencheck==1){
							$("#questionnnaire").append("<tr> <td colspan=4 style='text-align:center;'>NO RECORD FOUND !!</td> </tr>");
					}
					toastr.success( msg.msg );
				}
			}
		});
	}

    return false;
});

/* delete users from list */
$(document).on('click','.deleteuserslist', function(e) {
	e.preventDefault();
	var confirmed=confirm("Are You sure you want delete this User?");
	if(confirmed == true)
	{
		var dataId = $(this).attr('rel');
		var th = $(this);

		$.ajax({
			url: 'userDestroy/'+ dataId,
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					var lencheck=$("#userlistingpage tbody tr").length;
					$(th).parents("tr").remove();
					if(lencheck==1){
							$("#userlistingpage").append("<tr> <td colspan=4 style='text-align:center;'>NO RECORD FOUND !!</td> </tr>");
					}
					toastr.success( msg.msg );
				}
			}
		});
	}

    return false;
});
/* delete users from list ends here */



$(".alert.alert-dismissible").fadeTo(2000, 500).slideUp(500, function(){
        $(".alert").slideUp(500);
 }); 
 $('#compareTwins,#compareUsers').on('click', function(e) {
 var atLeastOneIsChecked = $('input[name="questions[]"]:checked').length;
 if(atLeastOneIsChecked > 0)
  return true;
  else
  alert("Please Select atleast one of the interest");
  return false;
 
});

$( "#regi-profile" ).validate({
	 ignore: ".ignore",
  rules: {
    fname: {
      required: true
    },
     image: {
      required: true,
      extension: "png|jpg|jpeg",
    },

  }
 
});
$( "#edit-myprofile" ).validate({
 ignore: ".ignore",
 rules: {
	  image: {
		  required: true,
		  extension: "png|jpg|jpeg",
		},
	}	
});

$( "#create_group" ).validate({
  rules: {
    groupname: {
      required: true
    }
  }
});

$("#blog-form" ).validate({
  rules: {
    comments: {
    required: true,
    wordCount: ['100']
    }
  }
});
$("#myprofile-form" ).validate({
  rules: {
    public_info: {
    wordCount: ['100']
    }
  }
});
  
 function getWordCount(wordString) {
  var words = wordString.split(" ");
  words = words.filter(function(words) { 
    return words.length > 0
  }).length;
  return words;
}

//add the custom validation method
jQuery.validator.addMethod("wordCount",
   function(value, element, params) {
      var count = getWordCount(value);
      if(count <= params[0]) {
		  //console.log("ed"+params[0])
         return true;
      }
   },
   jQuery.validator.format("You can write {0} words or less here.")
);

/*  
$(".cmt").click(function() {
		$(this).parent().parent().parent().parent().find(".post-comment").addClass('visible');
});
*/    
  
 
         
  
//document ready ends here  
  
});

/* Add to Twin List code */
$(document).on('click','.addtotwins',function(e) {
		var baseUrl=$('#baseurl').val();
		var twinUserId = $(this).attr('rel');
		var token = $(this).attr('data-obj');
		var CurrentUserId = $(this).attr('data-value');
		var th = $(this);
		$.ajax({
			url: baseUrl+'/viewprofile/addtwins/'+twinUserId,
			type:'POST',
			data : { "_token": token,"current_user_id": CurrentUserId },
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					setTimeout(function(){
					 location.reload();
					}, 500);
					toastr.success( msg.msg );
					
					/*th.removeClass();
					th.addClass("removetwins");
					th.text("Remove from Twins");
					toastr.success( msg.msg );*/
				}
			}
		});
    return false;
    
});

/* Delete Twin List code */
$(document).on('click','.removetwins',function(e) {
		var baseUrl=$('#baseurl').val();
		var twinUserId = $(this).attr('rel');
		var token = $(this).attr('data-obj');
		var CurrentUserId = $(this).attr('data-value');
		var th = $(this);
		$.ajax({
			url: baseUrl+'/deleteTwins/'+twinUserId,
			type:'POST',
			data : { "_token": token,"current_user_id": CurrentUserId },
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					setTimeout(function(){
					 location.reload();
					}, 500);
					toastr.success( msg.msg );
					
					/*th.removeClass();
					th.addClass("addtotwins");
					th.text("Add to Twins");
					toastr.success( msg.msg );*/
				}
			}
		});
    return false;   
    

}); 

/* Send Message */
$(document).on('click','#createmessage',function(e) {
	var baseUrl=$('#baseurl').val();
		var messageInfo = $("#SendMessageModal").find(".emojionearea-editor").html();

		$("#messagereceiverId").val($("#send_message").attr("rel"));
		var receiverId =$("#messagereceiverId").val();
		$.ajax({
			url:  baseUrl+'/sendMessage/',
			type:'GET',
			data : {"messageInfo": encodeURIComponent(messageInfo),"receiverId":receiverId},
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					toastr.success( msg.msg );
					$("#close-messagecreate").click();
					$("#messageInfo").val('');
					/*th.removeClass();
					th.addClass("addtotwins");
					th.text("Add to Twins");
					toastr.success( msg.msg );*/
					$("#SendMessageModal").find(".emojionearea-editor").text("");
				}
			}
		});
    return false;   
    

}); 

/* Send Message ends here */


$('.photoclick').on('click', function(e) {
	$("#manage_photos").show();
	$(".album-area").hide();
});
$('#editprofile').on('click', function(e) {
	 
	$("#publicinfo").show();
	$("#otherinfo").show();
	$(".savemyprofile").show();
	$("#mceu_13").show();
	$(".public-info").hide();
	$(".other-info").hide();
	$(".profile-info").hide();
	$("#editprofile").hide();
	equalheight('.equal-height');
	
});
 $(document).on('click','#enable_sort', function(e) {
	$(this).text('Disable Sorting');
	$(this).attr('id','disable_sort');
	$(".displaycross").hide();
	$("#addnewoption").hide();
	$("div.clonedInput").addClass("draginput");
	$("div.clonedInput").removeClass("draginput-disable");
	$("#sortable-list").sortable("enable");
});
$(document).on("click","#disable_sort", function(e) {
	$(this).text('Enable Sorting');
	$(this).attr('id','enable_sort');
	$(".displaycross").show();
	$("#addnewoption").show();
	$("div.clonedInput").removeClass("draginput");
	$("div.clonedInput").addClass("draginput-disable");
	$("#sortable-list").sortable("disable");
});
(function($){
	$(window).on("load",function(){
		
		$("#message-wrapper").mCustomScrollbar({
			setHeight:400
		});
		
		$(".user-list").mCustomScrollbar({
			setHeight:250
		});
		
		$(".job-info").mCustomScrollbar({
			setHeight:250
		}); 
		
		$(".recent-feeds").mCustomScrollbar({
			setHeight:600
		});
        
        $(".carouselGallery-modal-text .comment-area .listing").mCustomScrollbar({
			setHeight:250
		});

		$(".user-listings ul#userListing").mCustomScrollbar({
			setHeight:250
		});

		$(".user-listings ul#recentActivitiesList").mCustomScrollbar({
			setHeight:250
		});

		$(".online-users #wombmates-outer").mCustomScrollbar({
			setHeight:250
		});

		// Add Custom Scroll Bar to Blog Pop up Post
		$("#popup-post-cont #PostedBlogComment #popup-comment-area ul#popup-listing").mCustomScrollbar({
		            setHeight:250
		});
	});
})(jQuery);
$(function() {
       $(".rf").mouseover(function() {
		    var popupid = $(this).attr('id');
		    
			$(".recent-feeds").addClass('visible');
		});
		 $(".rf").mouseleave(function() {
			//$(".recent-feeds").removeClass('visible');
		});
    });  


// This section is for cover photo upload from myprofile page
$(document).delegate("#coverdp", "click", function(e){
	$("#cover_file_name").hide();
	$('.filename').text('');
	$("#cover_file_name").click();
});

jQuery(document).delegate("#cover_file_name", "change", function(){
	var imageData = $('#cover_file_name').val();
	var fileUpload = $("#cover_file_name")[0];
	var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$");
    if (regex.test(fileUpload.value.toLowerCase())) {
		var reader = new FileReader();
		//Read the contents of Image File.
		reader.readAsDataURL(fileUpload.files[0]);
		reader.onload = function (e) {
				//Initiate the JavaScript Image object.
				var image = new Image();
				//Set the Base64 string return from FileReader as source.
				image.src = e.target.result;
				image.onload = function () {
					//Determine the Height and Width.
					var height = this.height;
					var width = this.width;
					if (height >= 560 && width >= 1920) {
						$('.filename').text(imageData);
						$("#coverpic-change").show();
					}
					else{
						toastr.error("Uploaded image has Not valid Height and Width. Height should be 560px and width should be 1920px or more.");
						$('.filename').text('');
					}
				};
		  }
	}  else{
		toastr.error("Uploaded image format should be .jpg, .jpeg or .png");
		$('.filename').text('');
	}
});

$("#savecoverimage").click(function(e){
	
	e.preventDefault();
	var imageData = $('#cover_file_name').val();
	var fileUpload = $("#cover_file_name")[0];
	var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$");
    if (regex.test(fileUpload.value.toLowerCase())) {
		var reader = new FileReader();
		//Read the contents of Image File.
		reader.readAsDataURL(fileUpload.files[0]);
		reader.onload = function (e) {
				//Initiate the JavaScript Image object.
				var image = new Image();
				//Set the Base64 string return from FileReader as source.
				image.src = e.target.result;
				image.onload = function () {
					//Determine the Height and Width.
					var height = this.height;
					var width = this.width;
					if (height >= 560 && width >= 1920) {
						//$("#hiddencoverpic").val(imageData);
						$("#edit-myprofile-cover").submit();
					}
					else{
						toastr.error("Uploaded image has Not valid Height and Width. Height should be 560px and width should be 1920px or more.");
					}
				};
		  }
	}  else{
		toastr.error("Uploaded image format should be .jpg, .jpeg or .png ");
	}
	
	
		
	
});

$("#cancelcover").click(function(e){
	$('.filename').text('');
	$("#coverpic-change").hide();
	   // location.reload();
});


$( "#edit-myprofile-cover" ).validate({
 ignore: ".ignore",
 rules: {
	  cover: {
		  required: true,
		  extension: "png|jpg|jpeg",
		 
		},
	}	
});

// Cover pic Section ends here
// Email Validation


// Function that validates email address through a regular expression.
function emailValid() {
	jQuery(document).delegate("#contactform", "submit", function(){
		var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (!filter.test($('#cemail').val())) {
			$('#cemail').addClass('error');
			$('#cemail-error-custom').show().text('Please enter Valid Email');
			return false;
		} else {
				jQuery("#contactform").submit();
		}
	});
}

emailValid();
// Auto Close Alert in Contact form

$("#success-alert-contact").fadeTo(2000, 500).slideUp(500, function(){
    $("#success-alert-contact").slideUp(500);
});
// This is Contact form send Email section
 /*
 $("#sendMail").click(function(e){
	
	e.preventDefault();
	var cname = $("#cname").val();
	var ccomment = $("#ccomment").val();
	var cemail = $("#cemail").val();
	//alert(cname + " " + cemail);
   
	$.ajax({
			url:  BASEURL+'/sendMail/',
			type:'POST',
			data : {"_token": CSRFTOKEN,"cname":cname,"cemail":cemail,"ccomment":ccomment},
			success: function( msg ) {
				if ( msg.status === 'success' ) {
					toastr.success( msg.success );
				}else{
					toastr.error("Error in Sending E-Mail");
				}
			}
		});
	
		
	
});*/

$(document).ready(function(){
	$('#mytwins-paginate').paginate({itemsPerPage: 10});
	/*if ($.cookie('modal_shown') == 'null') {
		alert($.cookie('modal_shown'));
		$('#promotion-popup').show();
		//$.cookie('modal_shown', 'yes', { expires: 7, path: '/' });
	}

	$('#promotion-popup-close').click(function(){
		$.cookie('modal_shown', 'yes', { expires: 7, path: '/' });
		$('#promotion-popup').hide();
	});*/
});

/*window.onbeforeunload = function (event) {
    var message = 'Important: Please click on \'Save\' button to leave this page.';
    if (typeof event == 'undefined') {
        event = window.event;
    }
    if (event) {
    	console.log(typeof event);
    	//$.cookie('modal_shown',null);
		//event.returnValue = message;
    }
    return false;
};*/

