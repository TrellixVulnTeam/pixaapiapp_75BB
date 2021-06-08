$(document).ready(function () {
  // alert('s')
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
          var ht = "";
          (html +=
            "<div class='row col-2 '><select class='selectpicker-form-control id='phid'><option value=" +
            da.src.original +
            ">original</option><option value=" +
            da.src.large2x +
            ">large2x</option><option value=" +
            da.src.large +
            ">large</option><option value=" +
            da.src.medium +
            ">medium</option><option value=" +
            da.src.small +
            ">small</option><option value=" +
            da.src.portrait +
            ">portrait</option><option value=" +
            da.src.landscape +
            ">landscape</option><option value=" +
            da.src.tiny +
            ">tiny</option>Download</select>" +
            "<h2>" +
            da.id +
            "</h2><h2>" +
            da.avg_color +
            "</h2><h2>" +
            da.photographer_url +
            "</h2><button  class='btn btn-primary' value=" +
            da.src.large +
            " >Download</button><img src=" +
            da.src.large +
            "></img></div>"),
            (ht +=
              "<a href='/photo'>" + da.id + "</a><h2>" + da.id + "</h2>"
              
              
              );

          // html += (
          //   <div class="row">
          //     <div class="col-">
          //       <div class="form-group">
          //         <select
          //           class="selectpicker form-control"
          //           id="phid"
          //           name="photoid"
          //         >
          //           <option value="{{a.src.original}}">original</option>
          //           <option value="{{a.src.large2x}}">large2x</option>
          //           <option value="{{a.src.large}}">large</option>
          //           <option value="{{a.src.medium}}">medium</option>
          //           <option value="{{a.src.small}}">small</option>
          //           <option value="{{a.src.portrait}}">portrait</option>
          //           <option value="{{a.src.landscape}}">landscape</option>
          //           <option value="{{a.src.tiny}}">tiny</option>
          //         </select>
          //       </div>
          //     </div>
          //   </div>
          // );
          $("#lab").html(ht);

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
});

$(document).ready(function () {
  // alert("okay");
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
          // console.log(response.data.photos);
          var html = "<div class='align-content-start'></div>";
          for (let a = 0; a < vaa.length; a++) {
            const element = vaa[a];
            // console.log(element);
            // html += [
            //   "<div class='accordion-body row'><div class='col-3'> <h6>" +
            //    element.id +
            //     "</h6><h6>" +
            //     element.photographer +
            //     "</h6><img src=" +
            //     element.src.small +
            //     " ></img>  <h6>" +
            //     element.photographer_url +
            //     "</h6><button type='button' class='btn btn-primary' value=" +
            //     element.src.large +
            //     ">Primary</button></div></div>",
            // ];

            //   html += "< html += "</div>";h2>" + da.id + "</><h2>" +da.id  + "</h2>";

            html +=
              "<h6>" +
              element.id +
              "</h6><a <button type='submit'>" +
              element.photographer_url +
              "</button>";

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
  $("select.selectpicker").change(function (e) {
    e.preventDefault();
    var ph = $(this).children("option:selected").val();
    alert(ph);
    $.ajax({
      type: "GET",
      url: "/download/",
      data: {
        phid: phid,
      },
      dataType: "json",
      success: function (response) {
        console.log(status);
      },
    });
  });
});

$(document).ready(function () {
  $( "div" ).on({
    mouseenter: function() {
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
        console.log( "mouse left a div" );
    },
    click: function() {
        console.log( "clicked on a div" );
    }
});
});