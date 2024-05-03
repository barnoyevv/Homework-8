function isHave(e) {
	e.preventDefault();
	let input = document.getElementById("word").value.split(' ')
	let text = document.getElementById("text").value.split(' ')
	let result = []
	for(let i = 0; i < input.length; i++) {
		if (text.includes(input[i])) {
			result.push(input[i])
		}
	}
	if (result.length == input.length) {
		alert ('Mavjud')
	}else {
		alert ('Mavjud emas')
	}
}