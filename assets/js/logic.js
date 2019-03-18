// COMPLETED

function validateForm() {
  var isValid = true;

  $('.custom-select').each(function() {
    if (isNaN($(this).val())) {
      isValid = false;
    }
  });

  $('.form-control').each(function() {
    if ($(this).val() === "") {
      isValid = false;
    }
  });

  return isValid;
};

$('#submitBTN').on('click', function (event) {
  event.preventDefault();

  if(validateForm()) {
    // Gather all data
    var newFriendData = {
      name: $('#name').val(),
      photo: $('#photo').val(),
      scores: [
        $('#input-q1').val(),
        $('#input-q2').val(),
        $('#input-q3').val(),
        $('#input-q4').val(),
        $('#input-q5').val(),
        $('#input-q6').val(),
        $('#input-q7').val(),
        $('#input-q8').val(),
        $('#input-q9').val(),
        $('#input-q10').val(),
      ]
    }

    // api link /addfriend
    $.post('/friend', data, function (res) {
      // grab result and send it to modal
      console.log(res);

      $('#matchName').text(res.name);
      $('matchImg').attr('src', res.photo);

      $('resultModal').modal('toggle');
    });

  }
  else {
    alert('Please complete form');
  }
});

