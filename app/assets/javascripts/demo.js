$(document).ready(function() {
  console.log('document ready');

  $("#download").click(function() {
    console.log('Click to download');

    // ajax for sign up
    // $.ajax({
    //   url: '/users',
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    //   },
    //   data: {
    //     user: {
    //         email: 'ntahau1989@gmail.com',
    //         password: 'anhhau124',
    //         password_confirmation: 'anhhau124'
    //     }
    //   },
    //   success: function(response) {
    //     console.log(response);
    //   }
    // });

    // ajax for login

    var json = '{"user": {"email": "ntahau1989@gmail.com", "password": "anhhau124"}}'
      $.ajax({
        url: '/users/sign_in',
        type: 'POST',
        dataType: "json",

        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        },
        data: json,
        success: function(response) {
          console.log(response);
        },
        error: function(response) {
          console.log(response);
        }
      });

    // ajax for log out
    // $.ajax({
    //   url: '/users/sign_out',
    //   type: 'DELETE',
    //   // beforeSend: function(xhr) {
    //   //   xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    //   // },
    //   data: {},
    //   success: function(response) {
    //     console.log(response);
    //   },
    //   error: function(response) {
    //     // console.log(response);
    //   }
    // });

    // open new tab for download
    // var win = window.open('/download', '_blank');
    // win.focus();
  });

})
