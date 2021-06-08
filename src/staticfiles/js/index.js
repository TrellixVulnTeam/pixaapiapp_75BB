// $(document).ready(function () {


//     $('#searchbtn').click(function (e) {
//         e.preventDefault();
//         vals = $('#search_bar').val();
//         // alert(vals)
//         var TableItem = ""
//         // alert("okys")
//         $.ajax({
//             type: "GET",
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             url: "/photo",
//             data: {
//                 'query': vals
//             },

//             success: function (response) {



//                 // alert(response)
//                 var data = (response.data);
//                 var lo = (data.photos);
//                 for (let a = 0; a < lo.length; a++) {
//                     TableItem += '<div class="row col-6"><h1>' + lo[a].id + '</h1><span>' + lo[a].photographer + '</span><img src="' + lo[a].src.large + '" alt=""></div>';
//                     // TableItem +=;?
//                     TableItem += lo[a].photographer_id;
//                     TableItem += '<div class="btn-group"><button type="button" class="btn btn-danger">More</button>\
//                     <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">\
//                       <span class="visually-hidden">Toggle Dropdown</span>\
//                       </button><ul class="dropdown-menu">\<li><a class="dropdown-item" href="#">Action</a></li>\
//                         <li><a class="dropdown-item" href="#"><button><img src="' + lo[a].src.large + '" alt=""></button>large</a></li>\
//                         <li><a class="dropdown-item" href="#"><img src="' + lo[a].src.large + '" alt=""></a></li>\
//                         <li><hr class="dropdown-divider"><img src="' + lo[a].src.large + '" alt=""></li>\
//                        </ul>\
//                     </div>\
//                     ';
//                     TableItem +=  '<li><a class="dropdown-item" href="' + lo[a].src.large + '"><button>large</button></a></li>';




//                 }
//                 $('#log').html(TableItem);
//                 // alert(TableItem)
//                 console.log(data);


//                 // $.each(lo, function (index, value) {
//                 //     // console.log(index);
//                 //     // alert(index)
//                 //     console.log(index,value);
//                 //     $('.output').append('<h1>'+index+'</h1><br><h1>'+value+'</h1>');
//                 // });




//             }
//         });
//     });
// });



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
  