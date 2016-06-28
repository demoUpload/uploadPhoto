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

  $("#fileuploader").click(function() {
    console.log('Uploading...')
  })
})
