$(document).ready(function () {
  // alert()
  $("a").click(function (e) {
    e.preventDefault();

    var id = $(this).attr("value");
    // alert(id);

    // var $externalLinks = $("a[href^='http://']");
    element = "";

    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: "/photos/",
      data: {
        id: id,
      },
      success: function (response) {
        console.log("succes");
        da = response.data;
        console.log(da);
        if ((response.status = "200")) {
          $(".tests").hide();
          var html = "";
          html += '<div class="modal-dialog">';
          html += "<h2>" + da.id + "</h2><h2>" + da.avg_color + "</h2>";
          html += "<h2>" + da.photographer_url + "</h2>";
          html += " <img src=" + da.src.large + "></img>";
          html += "<button>Download</button>";

          //   html += "<h2>" + da.id + "</h2><h2>" +da.id  + "</h2>";

          //   html  += '<h2>'+value+'</h2>' ;
          html += "</div>";

          $("#aa").html(html);

          //   for(x in da){
          //       var c=da[x]
          //       console.log(c['id'])
          //   }
          //   for (let i = 0; i < da.length; i++) {
          //       console.log(da[i]);

          //   }
        }
      },
    });
  });

  $("#btnsearch").click(function (e) {
    e.preventDefault();
    var search = $("#idsearch").val();
    // alert(search)
    $.ajax({
      type: "GET",
      url: "/search",
      data: {
        search: search,
      },
      dataType: "json",
      success: function (response, status) {
        vaa = response.data.photos;
        $(".tests").empty();
        if ((response.status = "200")) {
          // console.log(response.data.photos)
          var html = "";
          for (let a = 0; a < vaa.length; a++) {
            const element = vaa[a];
            // console.log(element);

            html += [

              <div class="col-auto">
                <div class="row">
                  <h6>" + vaa[a].id + "</h6>
                  <h6>" + vaa[a].photographer + "</h6>
                  <img src=" + vaa[a].src.large + "></img>
                  <h6>" + vaa[a].photographer_url + "</h6>
                </div>
              </div>,
            ];

            //   html += "< html += "</div>";h2>" + da.id + "</><h2>" +da.id  + "</h2>";

            //   html  += '<h2>'+value+'</h2>' ;

            $("#aa").html(html);
          }

          // for (const key in vaa) {
          //   if (html.hasOwnProperty.call(html, key)) {
          //     const element = html[key];
          //     console.log(element);

          //   }
          // }

          //   for(x in da){
          //       var c=da[x]
          //       console.log(c['id'])
          //   }
          //   for (let i = 0; i < da.length; i++) {
          //       console.log(da[i]);

          //   }
        }
      },
    });
  });
});

$(document).ready(function () {
  // alert('okay')
});
