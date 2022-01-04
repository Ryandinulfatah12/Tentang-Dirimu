$(document).ready(function () {
  $("#inputDate").flatpickr({
    dateFormat: "d-m-Y",
  });
});

// Search Data by Name & date function
function checkMyName() {
  $("#app").html("");
  $.ajax({
    url: "https://script.google.com/macros/exec",
    type: "GET",
    dataType: "json",
    data: {
      service: "AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w",
      nama: $("#inputName").val(),
      tanggal: $("#inputDate").val(),
    },
    success: (result) => {
      if (result.status == "success") {
        let query = result.data;
        $("#app").append(`
                    <h3>Hasil</h3>
                    <img src="assets/Saly-12.png">
                    <h2>${query.nama}</h2>
                    <p><strong>Lahir:</strong> ${query.lahir}</p>
                    <p><strong>Hari Ulang tahun:</strong> ${query.ultah} lagi</p>
                    <p><strong>Usiamu:</strong> ${query.usia}</p>
                    <p><strong>Zodiakmu:</strong> ${query.zodiak}</p>
                `);
        $("#yourDate").val("");
        $("#yourName").val("");
      } else {
        $("#app").html(`<h3>Upps..Ada yang salah, coba lagi :(</h3>`);
      }
    },
  });
}

// On button clicked
$("#btn").on("click", function () {
  checkMyName();
});
