$(document).ready(function() {
  console.log('document ready');

  $(".loginButton").click(function() {
    console.log('Click to Login');

    var userEmail = $(this).parent().prev().children().html();

    var json = '{"user": {"email": "' + userEmail + '", "password": "11111111"}}'
      $.ajax({
        url: '/users/sign_in',
        type: 'POST',
        dataType: "json",

        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
          xhr.setRequestHeader("Content-Type","application/json");
          xhr.setRequestHeader("Accept","application/json");
        },
        data: json,
        success: function(response) {
          location.reload();
        },
        error: function(response) {
          console.log(response);
        }
      });
  });

  $("#logout").click(function () {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      data: {},
      success: function(response) {
        location.reload();
      },
      error: function(response) {
      }
    });
  })

  function signUp() {
    // ajax for sign up
    var json = '{"user": {"email": "tungphan@gmail.com", "password": "anhhau124"}}'
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        xhr.setRequestHeader("Content-Type","application/json");
          xhr.setRequestHeader("Accept","application/json");
      },
      data: json,
      success: function(response) {
        location.reload();
      },
      error: function(response) {
        console.log(response);
      }
    });
  }

  $(':file').change(function(){
    var file = this.files[0];
    var name = file.name;
    var size = file.size;
    var type = file.type;
  });

  function setBeforeSendHandler(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.setRequestHeader("Accept","application/json");
  }

  $(':button').click(function(){
    var formData = new FormData($('form')[0]);
    $.ajax({
        url: '/upload',  //Server script to process data
        type: 'POST',
        xhr: function() {  // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if(myXhr.upload){ // Check if upload property exists
                myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
            }
            return myXhr;
        },
        //Ajax events
        beforeSend: function(xhr) {
          setBeforeSendHandler(xhr)
        },
        success: completeHandler,
        error: errorHandler,
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false
    });
  });

  function completeHandler(data) {
    console.log('completeHandler:', data)
  }

  function errorHandler(err) {
    console.log('Error:', err)
  }

  function progressHandlingFunction(e){
    if(e.lengthComputable){
        $('progress').attr({value:e.loaded,max:e.total});
    }
}

})
