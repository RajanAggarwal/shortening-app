jQuery(document).ready(function() {
	$('#my-feeds-section').hide();
	

	
	//  Show only my feeds
	jQuery('#myFeed').click(function(){
		jQuery('.sameday-blog-').hide();
		$('#all-feeds-section').hide();
		$('#my-feeds-section').show();
		
	});
	
	//show all feed
	jQuery('#allFeeds').click(function(){
		jQuery('.sameday-blog-').show();
		$('#my-feeds-section').hide();
		$('#all-feeds-section').show();
		
		
	});
	
	//blog update form validate
	jQuery('#blogUpdateForm').validate({
		rules:{
			comment:{
				required:true
			}
		},
		messages:{
			comment:{
				required:"<span class='error'>Please enter comment</span>"
			}
		}
	});
	
	//blog update pop button
	$('#blogUpdateButton').click(function(){
		var comment=$('#blogUpdateForm .emojionearea-editor').html();
		jQuery('#commentsHiddenUpdate').val(comment);
		if(jQuery('#blogUpdateForm').valid()){
			jQuery('#blogUpdateForm').submit();
		}
		
	});
	
	//sameday-share link click
	jQuery('.sameday-share').click(function(){
		var th=jQuery(this);
		var blog_id=th.parents('article.status-post').attr('id');
		if(confirm('you want to share this post?')){
				jQuery.ajax({
				type:'post',
				url:BASEURL+'/shareBlog/'+blog_id,
				data:{"_token":th.data('token')},
				success:function(response){
					if(response.status=='success'){
						th.parent().html('<i class="fa fa-share"></i><span>Share</span>');
						toastr.success(response.msg);
					}else{
						toastr.error(response.msg);
					}
					
				}
			});
		}
		
	});

	jQuery('#blog-form').submit(function(e){
		var comment=$("#blog-form").find(".emojionearea-editor").html();
		$('#commentsHidden').val(encodeURIComponent(comment));
	});
	

	// To show the Model Blog-Post




});  // end Ready function
	

// To show comment section
$(document).delegate('.cmt', 'click',function(){
	//console.log('here');
		$(this).parent().parent().parent().parent().find(".post-comment").toggleClass('visible');

		$("#sameday-comment, #popup-sameday-comment").emojioneArea({
			pickerPosition:'bottom'
		});
		/*var comment = $(this).parents().find(".post-comment");
		$(this).parents().find(".post-comment").addClass('visible');
		//console.log('here');
		$(comment).toggleClass("visible");*/
		
});



//  Like added to the database
	jQuery(document).delegate('.sameday-like', 'click',function(){
		var id =jQuery(this);
	
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/likeBlog/'+id.data('id'),
				data:{"_token":id.data('token')},
				success:function(response){
					if(response.status=='like'){	
						id.prev().css({"color":"#624ea4"});
						id.prevAll('.sameday_like_count').text(response.count); 
						
					}else{
						// unlike
						id.prev().css({"color":"#b3b3d7"});
						
						if(response.count > 0){
							id.prevAll('.sameday_like_count').text(response.count) ; 
						} else{
							id.prevAll('.sameday_like_count').text('');
						}
						
						
						//alert(response.count);
						//id.parents('i').removeClass("fa fa-thumbs-up" ).addClass("fa fa-thumbs-o-up");
						
					}
				
				}
			});
		
		
	});

	// delete the post
	jQuery(document).delegate('.delBlog', 'click',function(){
		var id =jQuery(this);
		if(confirm('you want to delete this post?')){
			jQuery.ajax({
				url:BASEURL+'/delBlog/'+id.data('id'),
				data:{"_token":id.data('token')},
				success:function(response){
					if(response.status=='success'){
						toastr.success(response.msg);
						id.parents('.sameday-blog-'+CURRENTUSERID).remove();
					}else{
						toastr.error(response.msg);
					}
				
				}
			});
		}
		
	});
	
	
	//  Comment added to the database
	jQuery(document).delegate('.submit-comment', 'click',function(){
		
		var th=jQuery(this);
		var cmt = th.parents('.post-comment.visible').find('textarea#sameday-comment').val(); // value of comment (textarea)
		var blog_id=th.parents('article.status-post').attr('id');
		var user_pic=jQuery('#sameday-userprofile-image').attr('src');
		var username=jQuery('#sameday-userprofile-name').text();
		var cmt_count = th.parents('.post-comment').parents('.post-cont').nextAll('.bottom').find('.sameday_cmt_count');

		console.log(cmt);
		console.log(cmt_count);
		console.log(th.parents('.post-comment').prevAll('.comment-area').find('ul.listing').attr('class'));
		
		if(cmt!='' && blog_id!='' && CURRENTUSERID!=''){
			$('.emojiPicker').hide();
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/commentBlog/'+th.data('id'),
				data:{"_token":th.data('token'),"comment":cmt,'blog_id':blog_id,'user_id':CURRENTUSERID},
				success:function(response){
					if(response.status=='success'){	
						th.parents('.post-comment').removeClass('visible');
						var html='<li><img src="'+user_pic+'" class="profile-photo img-circle" alt="avatar"><p><a class="profile-link" href="'+BASEURL+'/viewprofile/96">'+username+'</a> '+cmt+'</p></li>';
						//th.parents('.comment-area').find('ul.listing').append(html);
						th.parents('.post-comment').prevAll('.comment-area').find('ul.listing').append(html);
						if(response.count > 0){
							cmt_count.text(response.count);
							
						}else{
							cmt_count.text('');
						}
					}else{

						alert('error');
					}
				}
				
				
			});
		}else{
			alert('Please enter required field');
		}
	});

	//  Comment added to the database For Pop Up blog
	jQuery(document).delegate('.popup-submit-comment', 'click',function(){
		console.log('ajax-popup');
		var th=jQuery(this);
		var cmt = th.parents('.post-comment.visible').find('textarea#sameday-comment').val(); // value of comment (textarea)
		var blog_id=th.parents('article.status-post').attr('id');
		var user_pic=jQuery('#sameday-userprofile-image').attr('src');
		var username=jQuery('#sameday-userprofile-name').text();
		//var cmt_count = th.parents('.post-comment').parents('.post-cont').nextAll('.bottom').find('.sameday_cmt_count');
		var cmt_count = th.parents('.post-comment').next('.bottom').find('.sameday_cmt_count');

		if(cmt!='' && blog_id!='' && CURRENTUSERID!=''){
			$('.emojiPicker').hide();
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/commentBlog/'+th.data('id'),
				data:{"_token":th.data('token'),"comment":cmt,'blog_id':blog_id,'user_id':CURRENTUSERID},
				success:function(response){
					if(response.status=='success'){	
						th.parents('.post-comment').removeClass('visible');
						var html='<li><img src="'+user_pic+'" class="profile-photo img-circle" alt="avatar"><p><a class="profile-link" href="'+BASEURL+'/viewprofile/96">'+username+'</a> '+cmt+'</p></li>';
						th.parents('.post-comment').prev('.post-cont').children('.comment-area').find('ul.listing').append(html);
						if(response.count > 0){
							cmt_count.text(response.count);
							
						}else{
							cmt_count.text('');
						}
					}else{

						alert('error');
					}
				}
				
				
			});
		}else{
			alert('Please enter required field');
		}
		
	});

	
	//open edit blog modal
	jQuery(document).delegate('.sameday-blog-edit', 'click',function(){
		var blogContent=jQuery(this).parents('.right-cont').find('span#PostedBlogComment').html();
		var blogId=jQuery(this).data('id');
		jQuery('#blogUpdateForm input[name="blog_id"]').val(blogId);
		jQuery('#blogUpdateForm .emojionearea-editor').html(blogContent);
		//jQuery('#popblogcomment').val(jQuery.trim(blogContent));
		jQuery('#blogEditModal').modal('show');
	});

	
	// Code for Load more Posts in jquery

var track_page = 1; //track user scroll as page number, right now page number is 1
var loading  = false; //prevents multiple loads

jQuery(window).scroll(function() { 
    if(jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height()) { //if user scrolled to bottom of the page
      track_page++; //page number increment
      load_contents(track_page); //load content  
    }
});  

//Ajax load function
function load_contents(track_page){
    if(loading == false){
       loading = true;  //set loading flag on
        jQuery('.loading-info').show(); //show loading animation
        jQuery.get(BASEURL + '/keep-it-100', {'page': track_page , '_token' : TOKEN}, function(success){
            loading = false; //set loading flag off once the content is loaded
			var json = JSON.parse(success);
			var article = json.data;
			if(article ==  ''){
                //notify user if nothing to load
                jQuery('.loading-info').hide();
                jQuery('.nomoreposts').show();    
            }
           
				
				jQuery('.loading-info').hide(); //hide loading animation once data is received
				// Append Data Here. . . .	
			   
			   jQuery("#results").append(article); //append data into #results element
			   var ismydata = 0;
			   if(jQuery("#all-feeds-section").is(':visible')){
				 		jQuery('.sameday-blog-').show();
						jQuery('#my-feeds-section').hide();
						jQuery('#all-feeds-section').show();
				   }
				   else{
					jQuery('.sameday-blog-').hide();
					jQuery('#all-feeds-section').hide();
					jQuery('#my-feeds-section').show();
					   }
			   
			
        }).fail(function(xhr, ajaxOptions, thrownError) { //any errors?
            alert(thrownError); //alert with HTTP error
        })
	}
}


