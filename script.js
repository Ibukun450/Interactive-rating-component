document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitBtn');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const rateMessage = document.getElementById('rate');

    // Add an event listener to the SUBMIT button
    submitButton.addEventListener('click', function () {
      // Hide the main content
      document.querySelector('.main').style.display = 'none';
      
      // Show the thank you message
      thankYouMessage.style.display = 'block';
    });

    const one = document.getElementById('1');

    one.addEventListener('click', function () {
        one.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rateMessage.innerHTML = 1;
    });

    const two = document.getElementById('2');

    two.addEventListener('click', function () {
        two.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rateMessage.innerHTML = 2;
    });

    const three = document.getElementById('3');

    three.addEventListener('click', function () {
        three.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rateMessage.innerHTML = 3;
    });

    const four = document.getElementById('4');

    four.addEventListener('click', function () {
        four.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rateMessage.innerHTML = 4;
    });

    const five = document.getElementById('5');

    five.addEventListener('click', function () {
        five.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rateMessage.innerHTML = 5;
    })
});