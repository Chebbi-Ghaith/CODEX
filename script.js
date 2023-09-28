function pop(){
    Swal.fire({
        title: 'Welcome!',
        color:'#0E2A3B',
        imageUrl: 'https://ci3.googleusercontent.com/mail-sig/AIorK4zUQ4GhEPbHhu0SDXzutqa6crueGI2p6dxnHhR29tPtvppjOBeB0wPnvzoGa8mMDv_XOYXCZWg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton:false,
      })
      setTimeout(function() {
        
    
        
        window.location.href = "empty.html";
      }, 1000);
      
      
}
function log(){
    
    Swal.fire({
        title: 'Do you want to logout?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'yes',
        denyButtonText: `no`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "login.html"
        } 
      })
}