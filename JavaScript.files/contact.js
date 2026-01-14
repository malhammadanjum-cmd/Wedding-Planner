        document.getElementById("userform").addEventListener("submit",function(e){
            e.preventDefault();
        

            let name = document.getElementById("name").value
            let email = document.getElementById("email").value
            let date= document.getElementById("date").value
            let service = document.getElementById("service").value
            let message = document.getElementById("message").value
            

           localStorage.setItem("name",name);
           localStorage.setItem("email",email);
           localStorage.setItem("date",date);
           localStorage.setItem("service",service);
           localStorage.setItem("message",message);

             document.getElementById("name").value = "";
             document.getElementById("email").value = "";
             document.getElementById("date").value = "";
             document.getElementById("service").value = "";
             document.getElementById("message").value = "";

         alert("Thank you for your inquiry. Our team will contact you shortly to discuss your plans.");

    })