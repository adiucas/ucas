$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'includes/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

$('.first-option').hide();


$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})