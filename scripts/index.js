

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
            
            showCloseButton: true,
            confirmButtonColor: '#D92B2B',
            confirmButtonText: 'Close'
        })
    })

    


});

