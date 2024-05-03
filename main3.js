function count(e) {
	e.preventDefault();
	let input = document.getElementById("item").value.split('')
	let closed = 0
	let opened = 0
	for(let i = 0; i < input.length; i++) {
		if (input[i] == '(') {
			opened++
		}else if(input[i] == ')') {
			closed++
		}
	}
	alert(`Ochiq qavslar soni: ${opened} va Yopiq qavslar soni: ${closed} teng`);
}