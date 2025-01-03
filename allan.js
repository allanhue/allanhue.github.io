
document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contactForm');
   
   form.addEventListener('submit', function(event) {
       event.preventDefault();
       
       const user = document.getElementById('name').value;
       const email = document.getElementById('email').value;
        const text=document.getElementById('message').value;

       
       
       
       
       if (user.trim() !== '' && email.trim() !== '' && text.trim() !== '') 
        {
           alert('Form submitted successfully');
              form.reset();
       } else {
           error ('Please input all fields');
       }
   });
});



