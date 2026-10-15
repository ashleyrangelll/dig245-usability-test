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

    event.preventDefault();

    let q1 = Number(myForm.q1.value);
    let q2 = Number(myForm.q2.value);

    let answer = q1 + q2;

    console.log(answer);

    myForm.answer.value = answer;
});

document.querySelector(".test").addEventListener("click", function () {
	// populate fields
	for (let i = 1; i <= 2; i++) {
		myForm[`q${i}`].value = Math.ceil(Math.random() * 5);
	}
	// submit the form
	myForm.dispatchEvent(new Event("submit", { cancelable: true }));
});