

$(document).ready(function () {


    $('.cv-preview').on('click', function() {

        Swal.fire({
            title: 'CV Preview',
            html: 
            `<div style="overflow-y: scroll; height:400px;" >
                <img src="./assets/cv-pages/CV_JamesRobiony-Rogers_Page1.pdf" alt="">
                <img src="./assets/cv-pages/CV_JamesRobiony-Rogers_Page2.pdf" alt="">
                <img src="./assets/cv-pages/CV_JamesRobiony-Rogers_Page3.pdf" alt="">
            </div>`,

            showConfirmButton: false,
            showCloseButton: true,
        })
    })


    var typewriter = new Typewriter($('.typing'), {
        strings: [ 'Strings', 'To', 'Type' ]
    });

    


});

