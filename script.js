$(document).ready(function(){
    $( "#yourDate" ).datepicker({
        dateFormat: 'dd-mm-yy',
        showAnim: 'slideDown',
        changeMonth: true,
        changeYear: true
    });
});

// Search Data by Name & date function
function checkMyName() {
    $('#app').html('');
    $.ajax({
        url: 'https://script.google.com/macros/exec',
        type: 'GET',
        dataType: 'json',
        data: {
            'service': 'AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w',
            'nama': $('#yourName').val(),
            'tanggal': $('#yourDate').val()
        },
        success: (result) => {
            if(result.status == "success"){
                let query = result.data;
                $('#app').append(`
                    <img src="assets/undraw_my_documents_ym8x.png">
                    <h2>${query.nama}</h2>
                    <p><strong>Lahir:</strong> ${query.lahir}</p>
                    <p><strong>Hari Ulang tahun:</strong> ${query.ultah} lagi</p>
                    <p><strong>Usiamu:</strong> ${query.usia}</p>
                    <p><strong>Zodiakmu:</strong> ${query.zodiak}</p>
                `);
                $('#yourDate').val('');
                $('#yourName').val('');
            } else {
                $('#app').html(`<h3>Ada yang salah, coba lagi :(</h3>`);
            }
        }
    });
}

// On button clicked
$('#btn').on('click', function () {
    checkMyName();
});