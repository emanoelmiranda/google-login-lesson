;(function () {
    gapi.load('auth2', () => {
        const that = this,
            clientId = document.querySelector('.google-client-id'),
            scope = 'profile email',
            icon = document.querySelector('.account-image'),
            name = document.querySelector('.profile-name'),
            email = document.querySelector('.account-email'),
            accessToken = document.querySelector('.access-token'),
            form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (form.checkValidity()) {
                that.auth2 = gapi.auth2.init({
                    client_id: clientId.value,
                    scope: scope
                });

                that.auth2.signIn().then((response) => {
                    const profile = response.getBasicProfile(),
                        auth = response.getAuthResponse();

                    icon.src = profile.getImageUrl();
                    name.innerHTML = profile.getName();
                    email.innerHTML = profile.getEmail();
                    accessToken.innerHTML = auth.access_token;
                });
            } else {
                form.classList.add('was-validated');
            }
        });
    });
}());
