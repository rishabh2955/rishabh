$('contact-form').submit(function(e){
	var name = document.getElementById('inputName'),
		email = document.getElementById('inputEmail'),
		message = document.getElementById('inputMessage');

		if(!name.value || !email.value || !message.value)
		{
			alertify.error("Please your entries");
		} else{
			e.preventDefault()
			$.ajax({
					    url: "https://formspree.io/rkapoor414@gmail.com",
					    method: "POST",
					    data: $(this).serialize(),
					    dataType: "json"
					});
			$(this).get(0).reset()
			alertify.success('Message sent')
		}
});