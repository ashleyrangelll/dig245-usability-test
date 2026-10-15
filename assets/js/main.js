document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	
    // prevent default behavior of form
	event.preventDefault();

    // create variables for all items and convert type to numbers
	let q1 = Number(this.q1.value);
	let q2 = Number(this.q2.value);

	// Add all converted responses
	let answer = q1 + q2;

	// log
	console.log(answer);

	// store in a new input
	this.answer.value = answer;
});

// FOR TESTING VALUES
document.querySelector(".test").addEventListener("click", function () {
	// populate fields
	for (let i = 1; i <= 2; i++) {
		myForm[`q${i}`].value = Math.ceil(Math.random() * 5);
	}
	// submit the form
	myForm.dispatchEvent(new Event("submit", { cancelable: true }));
});
