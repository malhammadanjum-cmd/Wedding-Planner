document.getElementById("userform").addEventListener("submit", function(event) {
        event.preventDefault();  

        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        


        if (password !== confirmPassword) {
            alert("Passwords do not match. Please make sure both passwords are the same.");
            return;  
        }

        alert("Welcome, " + name + "! Thank you for registering on WedAura.");

           localStorage.setItem("name",name);
           localStorage.setItem("password",password);
           localStorage.setItem("confirmPassword",confirmPassword);

        window.location.href = "index.html";  
    });