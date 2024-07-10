$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        // Simulating login process
        const username = $('#username').val();
        const password = $('#password').val();

        // Assuming successful login, generate bearer token
        const bearerToken = 'generated_bearer_token';

        // Display data section
        $('#login-form').hide();
        $('#data-section').show();

        // Simulating real-time data synchronization
        setInterval(function() {
            $.ajax({
                url: 'backend-api-url',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + bearerToken
                },
                data: {
                    data: 'sample_data'
                },
                success: function(response) {
                    $('#data').append('<p>' + response.message + '</p>');
                },
                error: function(err) {
                    console.log('Error:', err);
                }
            });
        }, 3000); // Every 3 seconds
    });
});
