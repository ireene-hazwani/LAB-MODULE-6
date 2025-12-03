function validateForm(){
	let fname = document.forms["myForm"]["fname"].value;
	if(fname === ""){
		alert("first Name must be filled out.");
		return false;
	}
}