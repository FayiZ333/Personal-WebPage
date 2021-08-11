


$(document).ready(function (e) {

        $("#form").validate({
            rules:{
                name:{
                    
                    required:true,
                    minlength:4,
                    alpha: true,
                    noSpace: true,
                },
                email:{
                    required:true,
                    isEmail:true
                },
                comment:{
                    required:true,
                    minlength:10,
                },
                phone:{
                    minlength:10,
                    maxlength:10,
                    number: true,
                },
                address:{
                    required:true,
                    minlength:10,
                }
                
                
            },
            comment:{
                name:{
                    alpha:"Please enter letters only"
                },
                email:{
                    isEmail:"Email not valid"
                },
                phone:{
                    number:"Please enter a valued mobile",
                    minlength:"Please enter at least 10 digit",
                    maxlength:"mobile number maximum contain 10 digit",
                    
                },
                address:{
                    
                }
                

                
                
            }, 
     
        })
        
    })