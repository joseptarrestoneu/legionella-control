window.addEventListener("load", () => {

    // Validar Login
    document.addEventListener('click', (event) => {
        if (event.target.textContent === "Sign In") {
            let user = document.querySelector('.email').value
            let password = document.querySelector('.password').value
            getUser().then( users => {
                users.forEach(element => {
                    if (element.userUser === user && element.userPassword === password) {
                        window.location.href='app.html';
                        console.log("Hola");
                        
                    }
                })
            })
        }
    })
    
    // Service User
    const getUser = () => {
        // return fetch('http://localhost:3001/api/users')
        return fetch('https://legionella-control-backend.onrender.com/api/users')
            .then(response => response.json())
            .then((json) => json );
    }

});
