$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$('input').on('keypress', function(e) {
	let newItem;
	if (e.which === 13) {
		newItem = $(this).val();
		$(this).val('');
		$('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + newItem + '</li>');
	}
});

$('.fa-plus').on('click', function() {
	$("input[type='text']").fadeToggle(300);
});
