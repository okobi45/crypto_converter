document.getElementById('convertBtn').addEventListener('click', function () {
    var amount = document.getElementById('amount').value;
    var crypto = document.getElementById('crypto').value;
    var fiat = document.getElementById('fiat').value;
    var apikey = 'AIzaSyCAqMek3aNO1G-OkQbp8FKNYtruJ0OTWNQ'; //Gemini api key
    var apiUrl = 'https://api.gemini.com/v2/ticker/' + crypto.toLowerCase() + fiat.toLowerCase();


    // show loading spinner
    document.getElementById('loading').style.display = 'block';
    document.getElementById('conversionResult').style.display = 'none';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var convertedAmount = amount * parseFloat(data['ask']);
            document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
            document.getElementById('convertedResult').innerText = `1 ${crypto} = ${data['ask']} ${fiat}`;
            document.getElementById('conversionResult').style.display = 'block';

            //Hide loading spinner
            document.getElementById('loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            //Hide loading spinner
            document.getElementById('loading').style.display = 'none';
        })
})