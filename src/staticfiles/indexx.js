$(document).ready(function () {
    // alert()
    $('a').click(function (e) {
        e.preventDefault();


        var id = $(this).attr('value');




        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "/photos",
            data: {
                'id': id
            },
            success: function (response, ) {
                console.log(response.data)

            }

        });




    });

    $('#btnsearch').click(function (e) { 
        e.preventDefault();
        var value=$('#idsearch').val()
        alert(value)
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "JSON",
            url: "/search",
            data: {
                'value':value
            },
            success: function (response) {
                alert('succes')
                
            }
        });
    
        
    });



});

$(document).ready(function () {
    // alert('okay')

   


});