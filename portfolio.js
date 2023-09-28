//form validation

function formValidation() {
    var name = document.myform.name.value;   //now name variable store the value of input from name form.ITS A FORM ATTRIBUTE NAME=NAME
    var namer = document.getElementById("errorname");
    var email=document.myform.email.value;      //now email variable store the value of input from email form.ITS A FORM ATTRIBUTE NAME=EMAIL
    var Emailerror=document.getElementById("erroremail");
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var number =document.myform.number.value;
    var numberError = document.getElementById("errorphone");
    var message = document.myform.message.value;
    var messageError = document.getElementById("errormessage");
    var errorCount = 0; // if error detects The count will increae
    
    if (name.length < 3 )
     {
        namer.innerHTML = "Please Fill The Name";
        // return false; // prevent submission
        errorCount++;
        
     } else {
        namer.innerHTML = " ";
        }
        
    if (!email.match(mailformat) )
    { 
        Emailerror.innerHTML = "Please Type Valid Email Format";
        errorCount++;
        // return false; // 					
    }
    else{
        Emailerror.innerHTML = " ";
    }

  if(number.length != 10)
    {
        numberError.innerHTML = "Please Type Valid Phone Number";
        // return false;
        errorCount++;
    }
    else{
        numberError.innerHTML = " ";
    }
  if (message.length < 5)
    {
        messageError.innerHTML = "Minimum 5 Characters Required";
        // return false;
        errorCount++;
    }
    else{
        messageError.innerHTML = " ";
        }

        if(errorCount > 0)
        {
            return false;
        }
    return true;
}



// <!-- form submission  -->
    
    $("#submit-form").submit((e) => {
        e.preventDefault();

        if (formValidation()) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzcSampf74E1vq4pRdTkuiJxche3sgDwAg4PM9wWthFEO6t8KoW_kNbghz5prfFEAUA/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully");
                    window.location.reload();
                },
                error: function (err) {
                    alert("Something Error");
                }
            });
        }
    });