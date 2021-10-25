function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }
  console.log(getURLParameter("id"))
  
var messagem = {
    title: 'Informe o seu melhor email',
    inputLabel: "Você receberá seu produto por ele",
    input: 'email',
    inputPlaceholder: 'Seu email aqui',
  }
 

    if (!getURLParameter("id")) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O link que você clicou está quebrado',
            confirmButtonText:"<spam onclick='window.history.back()'>Voltar</spam>"
            
          }).then(()=>{window.history.back()})
      } else {
        if(localStorage.getItem("email") == undefined){
           getemail(messagem)
           
          
     
         }else{
            document.getElementById("coment").value = `${getURLParameter("id")} ${localStorage.getItem("email")}`;

         }
      }
      function getemail(messagem){
        Swal.fire(messagem).then(email => {
            if(!email.value) getemail(messagem);
            document.getElementById("coment").value = `${getURLParameter("id")} ${email.value}`;
            localStorage.setItem("email", email.value);
            if(email.value) Swal.fire(
                'Atenção',
                'Não esqueça de incluir o Comentário de identificação no seu pagamento',
                'warning'
              )
        })
      }
      function copy(id) {
        /* Get the text field */
        var copyText = document.getElementById(id);
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        Swal.fire({
            icon:"success",
            title: 'Copiado!',
            timer:1000,
            showConfirmButton:false
        })
      
        
      }

  