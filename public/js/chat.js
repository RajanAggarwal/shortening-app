var timer;
var GlobalSenderId;
jQuery(document).ready(function() {
	window.clearInterval(timer);
	var baseUrl=$('#baseurl').val();
	var memberIds=[];
	var addnewmemberIds=[];
 /* right side users */
/*  setInterval(function(){

   },2000);
  setInterval(function(){

   },2000); */
    /* floating chat-box end here */
   
		/* setInterval(function(){
		var receiverId=$("#receiverId").val();
		if(receiverId!='' && typeof receiverId!='undefined')
		{
			chatload(receiverId);
		}
	   },2000); */
   
   
   /* floating groupchat-box end here */
  
		/* setInterval(function(){
		var groupId=$("#groupId").val();
		if(groupId!='' && typeof groupId!='undefined'){
			groupchatload(groupId);
		}
	   },2000); */
   
   
   /* show all unread message count */
		setInterval(function(){
			var receiverId=$("#receiverId").val();
			if(receiverId!='' && typeof receiverId!='undefined')
			{
				chatload(receiverId);
			}
			var groupId=$("#groupId").val();
			if(groupId!='' && typeof groupId!='undefined'){
				groupchatload(groupId);
			}
			loadOnlineUser();
			getMessageCount();
			showCountAllUnreadMessage();
			showSinlgeAllMessages();
			showPerPersonCountMessages(GlobalSenderId);
			
	   },2000);
	   
	   
	   
   
   
});
/* load friendlist */

function loadOnlineUser()
{
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/getWombList/1',
			type:'get',
			datatype:'json',
			success: function( msg ) {
				var msg=$.parseJSON(msg);
				//console.log("chatbox-->"+msg.chatbox);
				$("#floating-room").html(msg.chatbox);
				$("#wombmatespanel").html(msg.sidebar);
				
			}
	});
	$.ajax({
			url: baseUrl+'/getGroupList',
			type:'get',
			success: function( msgnew ) {
				var msgnew=$.parseJSON(msgnew);
				$("#floating-room-groups").html(msgnew.chatbox);
				$("#groupListpanel").html(msgnew.sidebar);
			}
	});
}

/* load friendlist */

function getMessageCount()
{
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/getMessageCount',
			type:'get',
			datatype:'json',
			success: function( msg ) {
				var msg=$.parseJSON(msg);
				//console.log(msg.unreadCount);
				
				if(msg.unreadCount != 0){
					$(".msg-count").removeAttr("style");
					$(".msg-count").html(msg.unreadCount);			
				}
				else
				{
					$(".msg-count").css("display", "none");
					$(".msg-count").html(msg.unreadCount);
				}		
			}
	});
}


/*open chat room for particular user*/
$(document).on('click','.chatstart',function(e) {
	$("#single_chat_img").removeAttr("src");
	$(".chatbox").show();
	//var chatUsername=$(this).text();
	var chatHtml=$(this).html();
	//console.log(chatHtml);
	//chatHtml.(".unread-chat-alert").remove();
	//console.log("now->"+chatHtml);
	var receiverId = $(this).attr('rel');
	var imgSrc = $(this).parent(".wombname").find(".profile-img-chat").attr('src');
	$("#chat_username").html(chatHtml);
	$("#chat_username").find(".unread-chat-alert").remove();
	var chatUsername=$("#chat_username").text();
	$("#chat_username").text(chatUsername);
	//$("#chat_username").find(".last_login").remove();
	$("#single_chat_img").attr("src",imgSrc);
	$("#receiverId").val(receiverId);
	var baseUrl=$('#baseurl').val();
	$(".showmessages").empty();
	//load chat for user
	$.ajax({
		url: baseUrl+'/getChat/'+receiverId,
		type:'get',
		data:{'unread':1},
		success: function( msg ) {
			$(".showmessages").html(msg);
		}
	});
});

$(document).on('click','.close-chatbox',function(e) {
	$("#single_chat_room").hide();

});

/* open group chat room */
$(document).on('click','.groupchatstart',function(e) {
	var GroupName=$(this).text();
	$(".displayGroupName").text(GroupName);
	$(".groupchatroom").show();
	var groupId = $(this).attr('rel');
	
	/*$("#chat_username").text(chatUsername);
	$("#single_chat_img").attr("src",imgSrc);*/
	
	$("#groupId").val(groupId);

	var baseUrl=$('#baseurl').val();
	
	   $.ajax({
			url: baseUrl+'/getGroupFriends/'+groupId,
			type:'get',
			success: function( list ) {
				$(".groupfriends").html(list);
			}
	});

	
	
	   $.ajax({
			url: baseUrl+'/getGroupChat/'+groupId,
			type:'get',
			success: function( msg ) {
				$(".groupmessagesshow").html(msg);
			}
	});

	

});
/* open group chat room ends here */

/* Delete group chat room */
$(document).on('click','.groupDel',function(e) {
	var groupId = $(this).attr('rel');
	var baseUrl=$('#baseurl').val();
	var token=$("input[name=_token]").val();
	if(confirm('You want to delete this Group?')){
		   $.ajax({
				url: baseUrl+'/delGroup/'+groupId,
				data : { "_token": token },
				type:'post',
				success:function(response){
					if(response.status=='success'){
						toastr.success(response.msg);
					}else{
						toastr.error(response.msg);
					}
				}
			});
	}

});
/* Delete Group Ends here */

/*show messages onclick */
$(document).on('click','.show_message',function(e) {
	var senderId = $(this).attr('rel');
	$("#replyto").val(senderId);
	$("#womblist_message li").removeClass("active");
	$(this).parent("li").addClass('active');
	$(this).parent("li").removeClass('unread');
	$(this).find("span.unread-message-alert").remove();
	var baseUrl=$('#baseurl').val();
	   jQuery('.loading-info').show();		// show loader
	   $.ajax({
			url: baseUrl+'/showMessages/'+senderId,
			type:'get',
			success: function( list ) {
				timer = 1;
				GlobalSenderId=senderId;
				//timer = setTimeout(function(){refreshProgress(senderId);}, 2000);
				
				$("#countmessages").hide();
				//$(".showmessages").html(list);
				jQuery('.loading-info').hide(); // hide loader
				$("#show_messageblock").show();
				equalheight('.equal-height');
			}
	});
	
	
});

setInterval(function(){
		if(timer == 1){
			messageSendCheck(GlobalSenderId);
		}
},2000);




function messageSendCheck(senderId) {
	var baseUrl=$('#baseurl').val();
	   //jQuery('.loading-info').show();		// show loader
	   $.ajax({
			url: baseUrl+'/showMessages/'+senderId,
			type:'get',
			success: function( list ) {
				$("#countmessages").hide();
				$(".showmessages").html(list);
				//jQuery('.loading-info').hide(); // hide loader
				$("#show_messageblock").show();
				equalheight('.equal-height');
				
			}
	});

	} 
/*show messages onclick ends here*/


/* messagereply code starts here **/

$("#messagereply-form" ).submit(function( event ) {
	 //if(event.which == 13) {
	event.preventDefault();	
	//var message=$("#form-messagereply").val();
	var message=$("#messagereply-form").find(".emojionearea-editor").html();
	var replyId=$("#replyto").val();
	var token=$("input[name=_token]").val();
	var baseUrl=$('#baseurl').val();
	$('.emojiPicker').hide();
	$.ajax({
			url: baseUrl+'/messagereply',
			data : { "_token": token,"message": encodeURIComponent(message),"replyId":replyId },
			success: function( msg ) {
				messageSendCheck(replyId);
				$("#form-messagereply").val('');
				var existsLi=$('#show_messageblock div.message-col').size();
				setTimeout(function(){
					$("#message-wrapper").mCustomScrollbar("scrollTo","bottom");
				},1000);
					
				$(".emojionearea-editor").text("");
			}
		});
    return false;  
 // }
});
/* messagereply code ends  here **/

/* group chat send */
$( "#chat_groupsend" ).submit(function( event ) {

	
	var message	=$("#chat_groupsend").find(".emojionearea-editor").html();
	var groupId=$("#groupId").val();
	var token=$("input[name=_token]").val();
	var baseUrl=$('#baseurl').val();
	$('.emojiPicker').hide();
	$.ajax({
			url: baseUrl+'/groupChat',
			type:'POST',
			data : { "_token": token,"message": message,"groupId":groupId },
			success: function( msg ) {
				$("#chatgroupmessage").val('');
				groupchatload(groupId);
				var existsLi=$('.groupmessagesshow ul li').size();
				if(existsLi > 0)
				{
					$(".groupmessagesshow").animate({ scrollTop:$(".groupmessagesshow ul li:last").offset().top },'slow');
					
				}
				$("#chat_groupsend").find(".emojionearea-editor").text("");
			}
		});
    return false;  
});

/* group chat send ends here */
/* open floating chat-box */
$(document).on('click','#maximize-open',function(e) {
	$("#floating-room").show();
	$("#floating-room-groups").show();
	$("#maximize-close").show();
	$("#maximize-open").hide();
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/getWombList/1',
			type:'get',
			success: function( msg ) {
				var msg=$.parseJSON(msg);
				$("#floating-room").html(msg.chatbox);
			}
	});
	
	   $.ajax({
			url: baseUrl+'/getGroupList',
			type:'get',
			datatype:'json',
			success: function( msg ) {
				var msg=$.parseJSON(msg);
				$("#floating-room-groups").html(msg.chatbox);
				$("#groupListpanel").html(msg.sidebar);
			}
	});
});

/* Open popup for Create Group Room */
$(document).on('click','#creategrouproom',function(e) {
	memberIds=[];
	$("#groupmemberIds").val('');
	$("#groupname").val('');
	$(".groupchatroom").hide();
	
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/getWombList/1',
			type:'get',
			datatype:'json',
			success: function( msg ) {
				var msg=$.parseJSON(msg);
				html="<ul class='womblist'>"+msg.chatbox+"</ul>";
				$("#groupmemeberselect").html(html);
				$("#groupmemeberselect").find(".chatstart").attr('class','addmember');
				$("#groupmemeberselect").find("ul li a.removetwins").hide();
				
			}
		});
});
/* Open popup for Create Group Room ends here */


/* group member selected */

$(document).on('click','.addmember',function(e) {
		if($(this).parents("li").hasClass("selected"))
		{
			 var index = memberIds.indexOf($(this).attr("rel"));
				if (index > -1) {
					memberIds.splice(index,1);
				}
			$("#groupmemberIds").val(memberIds);
			$(this).next().remove(); //can be change afterwards
			$(this).parents("li").removeClass("selected");
	    }
	    else
	    {
			memberIds.push($(this).attr("rel"));
			$("#groupmemberIds").val(memberIds);
			$(this).after('<i class="fa fa-check"></i>');
			$(this).parents("li").addClass("selected");
		}
});
/* group member selected ends here */


/* Open popup for add memeber to existing group starts here */
$(document).on('click','#AddMembersToGroup',function(e) {
	addnewmemberIds=[];
	var group_id = $('#chat_groupsend #groupId').val();
	var group_name = $('.groupchatroom .chatroom-in .displayGroupName').html();
	$("#groupMembersToAddIds").val('');
	$("#addMembersToGroupId").val(group_id);
	$(".addMemebersToGroupName").html(group_name);
	
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/getWombListToAddGroup/'+group_id,
			type:'get',
			datatype:'json',
			success: function( msg ) {
				// console.log(msg);
				// return false;
				var msg=$.parseJSON(msg);
				html="<ul class='womblist'>"+msg.chatbox+"</ul>";
				$("#selectMembersToAddGroup").html(html);
				$("#selectMembersToAddGroup").find(".chatstart").attr('class','addmembertogroup');
				$("#selectMembersToAddGroup").find("ul li a.removetwins").hide();
				
			}
		});
});
/* Open popup for add memeber to existing group ends here */


/* select member to current group */

$(document).on('click','.addmembertogroup',function(e) {
		if($(this).parents("li").hasClass("selected"))
		{
			 var index = addnewmemberIds.indexOf($(this).attr("rel"));
				if (index > -1) {
					addnewmemberIds.splice(index,1);
				}
			$("#groupMembersToAddIds").val(addnewmemberIds);
			$(this).next().remove(); //can be change afterwards
			$(this).parents("li").removeClass("selected");
	    }
	    else
	    {
			addnewmemberIds.push($(this).attr("rel"));
			$("#groupMembersToAddIds").val(addnewmemberIds);
			$(this).after('<i class="fa fa-check"></i>');
			$(this).parents("li").addClass("selected");
		}
});
/* End select memeber to current group */


/* Create Group */
$( "#create_group" ).submit(function( event ) {
	event.preventDefault();
	var groupIds=$("#groupmemberIds").val();
	var groupname=$("#groupname").val();
	var baseUrl=$('#baseurl').val();
	var token=$("input[name=_token]").val();
	if(groupname=='')
	{
		alert("Please enter group name");
		 return false;
	}
	if(groupIds=='')
	{
		alert("Please select atleast one group member");
		 return false;
	}
	$.ajax({
			url: baseUrl+'/creategroup',
			type:'POST',
			data : {"_token": token,"groupIds": groupIds,"groupname":groupname},
			success: function( msg ) {
				toastr.success( msg.msg );
				$("#close-groupcreate").click();
				$("#maximize-open").click();
			
			}
		});
    return false;
	
});
/* Create Group ends here */

/* Add members to group submit function */
$( "#addMembersToGroupForm" ).submit(function( event ) {
	event.preventDefault();
	var addMembersToGroupId=$("#addMembersToGroupId").val();
	var groupMembersToAddIds=$("#groupMembersToAddIds").val();
	var baseUrl=$('#baseurl').val();
	var token=$("input[name=_token]").val();

	if(groupMembersToAddIds=='')
	{
		alert("Please select atleast one member");
		 return false;
	}
	$.ajax({
			url: baseUrl+'/addMemebersToGroup',
			type:'POST',
			data : {"_token": token,"addMembersToGroupId": addMembersToGroupId,"groupMembersToAddIds":groupMembersToAddIds},
			success: function( msg ) {
				toastr.success( msg.msg );
				$("#close-addMemebersToGroup").click();
				$("#maximize-open").click();

				var groupId = $("#groupId").val();
				var baseUrl=$('#baseurl').val();
				
				$.ajax({
					url: baseUrl+'/getGroupFriends/'+groupId,
					type:'get',
					success: function( list ) {
						$(".groupfriends").html(list);
					}
				});			
			}
		});
    return false;
	
});
/* Add members to group submit function ends here */



/* close floating chat-box */

$(document).on('click','#maximize-close',function(e) {
	$("#floating-room").hide();
	$("#floating-room-groups").hide();
	$("#maximize-open").show();
	$("#maximize-close").hide();

});

$(document).on('click','.group-chat-box-close',function(e) {
	$(".chatroom-box").hide();
});


$(document).on('click','.create-chatroom',function(e) {
	$(".chatroom-box").show();
	$("#maximize-open").click();
});


$( "#chat_send" ).submit(function( event ) {
	var message=$("#chat_send").find(".emojionearea-editor").html();
	var receiverId=$("#receiverId").val();
	var token=$("input[name=_token]").val();
	var baseUrl=$('#baseurl').val();
	$.ajax({
			url: baseUrl+'/chat',
			type:'POST',
			data : { "_token": token,"message": message,"receiverId":receiverId },
			success: function( msg ) {
				$("#chatmessage").val('');
				chatload(receiverId);
				var existsLi=$('.showmessages ul li').size();
				if(existsLi > 0)
				{
					$(".showmessages").animate({ scrollTop:$(".showmessages ul li:last").offset().top },'slow');
					
				}
				$("#chat_send").find(".emojionearea-editor").text("");
			}
		});
    return false;  
});

function chatload(receiverId)
{
	 if($('#single_chat_room').css('display')!='none')
    {
		var baseUrl=$('#baseurl').val();
		   $.ajax({
				url: baseUrl+'/getChat/'+receiverId,
				type:'get',
				success: function( msg ) {
					$("#single_chat_room").find(".showmessages").html(msg);
				}
		});
	}
}

function groupchatload(groupId)
{
	 if($('.groupchatroom').css('display')!='none')
    {
		var baseUrl=$('#baseurl').val();
		   $.ajax({
				url: baseUrl+'/getGroupChat/'+groupId,
				type:'get',
				success: function( msg ) {
					$(".groupmessagesshow").html(msg);
				}
		});
	}
}

function showCountAllUnreadMessage()
{
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/showCountAllUnreadMessage',
			type:'get',
			success: function( msg ) {
				$(".badge").html(msg);
			}
	});
	
}

/* showSinlgeAllMessages */
function showSinlgeAllMessages()
{
	var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/UnreadSingleMessages',
			type:'get',
			success: function( msg ) {
				if(msg!=0)
				{
					$("#singlemessages").html('<span class="unread-message-alert">'+msg+'</span>');
					$("#newsinglemessage").html(msg);
				}
				else
				{
					$("#singlemessages").html('');
					
				}
			}
	});
	
}

 function showPerPersonCountMessages(SelectedUserId)
 {
	 if(SelectedUserId===undefined)
	 SelectedUserId=0;
	 
	 var baseUrl=$('#baseurl').val();
	   $.ajax({
			url: baseUrl+'/message',
			type:'get',
			data : { "updatedCount":1,"SelectedUserId": SelectedUserId},
			success: function( msg ) {
					$("#womblist_message").html(msg);
			}
	});
	 
 }

/* showSinlgeAllMessages ends here*/

$(document).on('click','.deletegroupmember',function(e) {
	var th=$(this);
	var totalFriends=$('.groupfriends ul li').size();
	var deleteMemberId=$(this).attr("rel");
	var groupId=$(this).attr("data-value");
	var baseUrl=$('#baseurl').val();
	if(totalFriends==1)
	{
		if(confirm('By deleting last member group will not exist more.')){
		//delete group
			$.ajax({
				url: baseUrl+'/deleteGroup',
				type:'get',
				data : {"groupId": groupId},
				success: function( msg ) {
					toastr.success( msg.msg );
					$(".groupchatroom").hide();
					$("#maximize-open").click();
				}
			});
		}
	}
	else
	{
		//delete group members
		if(confirm('You want to delete this member from group?')){
		    $.ajax({
				url: baseUrl+'/deleteGroupMember',
				type:'get',
				data : {"groupId": groupId,"deleteMemberId":deleteMemberId },
				success: function( msg ) {
					toastr.success( msg.msg );
					$(th).parents("li").remove();
				}
			});
		}
	}
	
	return false;
	
	
});

$("#form-blog-text,#sameday-comment, #popblogcomment,#form-messagereply,#messageInfo").emojioneArea({
	pickerPosition:'bottom'
});
$("#chatmessage").emojioneArea({
	pickerPosition:'top',
	 events: {
			keyup: function(editor, event) {
				 if (event.which == 13) 
				 {
					$( "#chat_send" ).submit();
					
	
				}
			}
       }
});
$("#chatgroupmessage").emojioneArea({
	pickerPosition:'top',
	 events: {
			keyup: function(editor, event) {
				 if (event.which == 13) 
				 {
					$( "#chat_groupsend" ).submit();
					
	
				}
			}
       }
});

 var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
