// Practice of InnerAdjacentHtml/Text/Element
let first = document.getElementById("first");
first.insertAdjacentHTML('beforebegin', '<div class= "test">BeforeBegin</div>');
first.insertAdjacentHTML('beforeend', '<div class= "test">Beforeend</div>');
first.insertAdjacentHTML('afterbegin', '<div class= "test">AfterBegin</div>');
first.insertAdjacentHTML('afterend', '<div class= "test">afterend</div>');

// Remove function
//  first.remove();