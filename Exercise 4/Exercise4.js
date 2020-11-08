document.addEventListener("DOMContentLoaded",() =>
{

  let red = document.querySelector("#red");
	let blue = document.querySelector("#blue");
  let green = document.querySelector("#green");
	let width = document.querySelector("#width");
  let maintext = document.getElementById("maintext");

 	document.querySelector("#submitbutton").addEventListener("click",(e) =>
  {
    console.log('click');
		console.log('red',red.value);
		console.log('blue',blue.value);
		console.log('green',green.value);
		console.log('width',width.value);
    console.log('text',maintext);

    let thergb = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
    let usewith = "" + width.value + "px"

    if (dropdown.value == 'Background')
    {
      maintext.style.backgroundColor = thergb;
      maintext.style.backgroundsize = usewith;
      console.log("background test");
    }
    else
    {
      maintext.style.borderColor = thergb;
      maintext.style.borderWidth = usewith;
      console.log("border test");
    }
  });
});
