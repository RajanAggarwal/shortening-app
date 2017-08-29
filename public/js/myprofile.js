jQuery(document).ready(function() {
	
	//myprofile name click event
	jQuery('#editFirstLastName').click(function(){
		jQuery('#profileEditNameModal').modal('show');
	});
	
	//edit about me click event
	jQuery('#editAboutMe').click(function(){
		jQuery('#profileEditAboutModal').modal('show');
	});
	
	//update profile name button
	jQuery('#updateProfileName').click(function(){
		if(jQuery('#profile-name-edit').valid()){
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/ajaxProfileUpdate',
				datatype:'text/html',
				data:jQuery('#profile-name-edit').serialize(),
				success:function(response){
					if(response=='profileUpdated'){
						location.reload();
					}
				}
			});
		}
		
	});
	
	//update profile about button
	jQuery('#updateProfileAbout').click(function(){
		if(jQuery('#profile-about-edit').valid()){
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/ajaxProfileUpdate',
				datatype:'text/html',
				data:jQuery('#profile-about-edit').serialize(),
				success:function(response){
					if(response=='profileUpdated'){
						location.reload();
					}
				}
			});
		}
		
	});
	
	//updateProfile Occupation Interest button
	jQuery('#updateProfileOccupationInterest').click(function(){
		if(jQuery('#occupation_interest-edit').valid()){
			jQuery.ajax({
				type:'post',
				url:BASEURL+'/ajaxProfileUpdate',
				datatype:'text/html',
				data:jQuery('#occupation_interest-edit').serialize(),
				success:function(response){
					if(response=='profileUpdated'){
						location.reload();
					}
				}
			});
		}
		
	});
	
	//unfriend button wombmates pop up click
	jQuery('.sameday-wombmates').click(function(){
		var friendCount=$('#myProfileFriendCount').text();
		
		var th=jQuery(this);
		jQuery.ajax({
			type:'post',
			url:BASEURL+'/deleteTwins/'+th.data('id'),
			data:{"_token":th.data('token')},
			success:function(response){
				if(response.status=='success'){
					toastr.success(response.msg);
					th.parents('li').remove();
					$('.user-list').find('li#myprofile-friend-'+ th.data('id')).remove();
					friendCount=friendCount-1;
					if(friendCount==0){ $('#myProfileFriendCountUpdate').parent().find('.my-profile-pop').hide(); }
					$('#myProfileFriendCountUpdate').text(friendCount);
					
				}else{
					toastr.error(response.msg);
				}
				setTimeout(function(){
					jQuery('#edit-friendlist-pop').modal('hide');
				},1000);
				
			}
		}); 
	});
	
	
	
	//combodate myprofile
	jQuery('#date1').combodate({
        firstItem: 'name'
    });
	
	//colorbox
	jQuery(".sameday-colorbox-image").colorbox({
		maxWidth:500, 
		maxHeight:500
	});
	//validation
	
	/*
	jQuery('#occupation_interest-edit').validate({
		rules:{
			current_occupation:{
				required:true
			},
			past_work:{
				required:true
			},
			interests:{
				required:true
			},
			education:{
				required:true
			}
		},
		messages:{
			current_occupation:{
				required:"<span class='error'>Please enter current occupation</span>"
			},
			past_work:{
				required:"<span class='error'>Please enter past work</span>"
			},
			interests:{
				required:"<span class='error'>Please enter interests</span>"
			},
			education:{
				required:"<span class='error'>Please enter education</span>"
			}
		}
	});*/
	
	jQuery('#profile-name-edit').validate({
		rules:{
			fname:{
				required:true
			},
			lname:{
				required:true
			},
			day:{
				required:true
			},
			month :{
				required:true
			},
			year:{
				required:true
			}
		},
		messages:{
			fname:{
				required:"<span class='error'>Please enter first name</span>"
			},
			lname:{
				required:"<span class='error'>Please enter last name</span>"
			},
			day:{
				required:"<span class='error'>Please select day</span>"
			},
			month :{
				required:"<span class='error'>Please select month</span>"
			},
			year:{
				required:"<span class='error'>Please select year</span>"
			}
		}
	});
	jQuery('#profile-about-edit').validate({
		rules:{
			aboutme:{
				required:true,
				maxlength:100
			}
		},
		messages:{
			aboutme:{
				required:"<span class='error'>Please enter about info</span>"
			},
			maxlength:"<span class='error'>Character limit exceeds</span>"
		}
	});
	
	//image cropit code
	var imageUrl=$('#dppic').val();
    jQuery('.profileimage-editor').cropit({
         imageState: {
           src: imageUrl,
        },
    });
	
	
	
});
//commmon section to open all three pop of profile page
	jQuery('.my-profile-pop').click(function(){
		jQuery('.edit-my-profile-pop').hide();
		var id=jQuery(this).data('target');
		jQuery('#'+id).show();
		jQuery('#exampleModal').modal('show');
		if(id=='edit-location-pop'){
			$("#exampleModal").on("shown.bs.modal", function () {
				google.maps.event.trigger(map, "resize");
			});
		}
	});
	
//search location with gmap
var LAT=0;
var LONG=0;
var FORMATTEDADDR=0;
function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
		
		if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
				if (!place.geometry) {
				  console.log("Returned place contains no geometry");
				  return;
				}
			var icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map: map,
				icon: icon,
				title: place.name,
				position: place.geometry.location
			}));
			FORMATTEDADDR=place.formatted_address;
			LAT=place.geometry.location.lat();
			LONG=place.geometry.location.lng();
			updateProfileAddress(LAT,LONG,FORMATTEDADDR);
			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
        });
        map.fitBounds(bounds);
    });
}





//update profile address with ajax:-
function updateProfileAddress(lat,lng,addr){
	if(lat!='' && lng!=''){
		jQuery.ajax({
			type:'post',
			url:BASEURL+'/ajaxProfileUpdate',
			datatype:'text/html',
			data:{"_token":CSRFTOKEN,"lat":lat,"lng":lng,"profile_address":addr,"userId":CURRENTUSERID,updateProfileKey:"profileAddress"},
			success:function(response){
				if(response=='profileUpdated'){
					toastr.success('Profile address updated successfully');
					$('#myProfileGmapTitle').text(addr);
					$('#myProfileGmap').html('<iframe class="map" width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.it/maps?q='+addr+'&output=embed"></iframe>');
				}else{
					toastr.error('Some problem in address updation');
				}
				setTimeout(function(){
					jQuery('#exampleModal').modal('hide');
				},1000);
				
			}
		});
	}
}
	
	
	  
