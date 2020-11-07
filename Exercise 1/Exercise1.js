document.addEventListener("DOMContentLoaded",() =>
{

  let input1 = document.querySelector("#input1");
	let input2 = document.querySelector("#input2");

 	document.querySelector("#clickem").addEventListener("click",(e) =>
  {
		console.log('click');
		console.log('input1',input1.value);
		console.log('input2',input2.value);

    if (input1.value.length < 8 && input2.value.length < 8)
    {
      document.querySelector("#result").innerText =
      "" + "input not at least 8 characters long";
    }
    else if (input1.value != input2.value)
    {
      document.querySelector("#result").innerText =
      "" + "the passwords entered don't match";
    }
    else
    {
      document.querySelector("#result").innerText =
      "" + "the passwords match";
    }
  });
});
