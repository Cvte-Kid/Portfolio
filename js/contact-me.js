document.addEventListener("DOMContentLoaded",() => {
  const form = document.getElementById("contact-form");
  form.addEventListener('submit',(e) => {
  	e.preventDefault();
  	const subject = document.getElementById("subject").value;
  	const message = document.getElementById("message").value;
  	window.open(`mailto:ebenezerbuabeng60@gmail.com?subject=${subject}&body=${message}`);
  });
});
