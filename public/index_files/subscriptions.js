var $form = $('form#subscriptions-form'),
  url = 'https://script.google.com/a/sjsu.edu/macros/s/AKfycby0CPll_YVK7nbq79ElTnV-n-6Q2MaBhgbkf6_Rhij5_2dTZNI/exec'

$('#subscriptions-form').on('submit', function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function(){
      confirm("Subscribed!");
      location.reload();
    },
    error: function(){
      confirm("Something went wrong!");
      location.reload();
    }
  });
  $("#chart").show();

})