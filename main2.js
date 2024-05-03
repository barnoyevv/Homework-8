function check(e) {
	e.preventDefault();
	let input = file.files[0];
	let fileSizeKB = parseInt(input.size / 1024);
	alert(`Filening hajmi ${fileSizeKB} KB ga teng`);
}