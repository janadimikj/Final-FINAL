//var div = document.getElementById('main');
//var display = 0;

//function hideShow()
//{
//	if(display == 1)
//	{
//		div.style.display = 'block';
//		display = 0;
//	}
//	else
//	{
//		div.style.display = 'none';
//		display = 1;
//	}
//}

//const wordBtn = () => {
	//document.getElementById('wrdBtn').classList.remove('btnStyle').classList.add('main');
//}

const toggleButton = document.getElementById('meow');
const displayText = document.getElementById('displayText');

toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the text box
    if (displayText.style.display === 'none') {
        displayText.style.display = 'block';
    } else {
        displayText.style.display = 'none';
    }
});

