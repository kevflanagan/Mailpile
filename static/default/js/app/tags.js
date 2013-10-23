/* Show Tag Add Form */
$(document).on('click', '#button-tag-add', function(e) {
	
	e.preventDefault();

	$('#tags-list').hide();
  $('#tag-add').show();
	
	$this_nav = $(this);
  console.log($this_nav);

  $('#sub-navigation ul li').removeClass('navigation-on');
  $(this).parent().addClass('navigation-on');

});


/* API - Tag Add */  
$(document).on('submit', '#form-tag-add', function(e) {

  e.preventDefault();
  var tag_data = $('#form-tag-add').serialize();
  console.log($(this));

	$.ajax({
		url			 : $(this).attr('action'),
		type		 : 'POST',
		data     : tag_data,
		dataType : 'json',
	  success  : function(response) {

      statusMessage(response.status, response.message);

      if (response.status == 'success') {
        console.log(response);
        //window.location.href = ''
      }
	  }
	});
  
});
