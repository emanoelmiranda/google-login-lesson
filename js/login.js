;(function () {
    gapi.load('auth2', function () {
        const that = this,
            clientId = '',
            scope = 'profile email',
            icon = document.querySelector('.account-image'),
            name = document.querySelector('.profile-name'),
            email = document.querySelector('.account-email'),
            buttonLogin = document.querySelector('.js-login');

        buttonLogin.addEventListener('click', function () {
            that.auth2 = gapi.auth2.init({
                client_id: clientId,
                scope: scope
            });

            that.auth2.signIn().then(function (response) {
                const profile = response.getBasicProfile();

                icon.src = profile.getImageUrl();
                name.innerHTML = profile.getName();
                email.innerHTML = profile.getEmail();
            });
        });
    });
}());
