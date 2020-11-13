$.ajax({
    dataType: "json",
    type: "GET",
    url: "https://masak-apa.tomorisakura.vercel.app/api/recipes",
    success: function(result){
    console.log(result)
      const resep = result.results;
      $.each(resep, (i, data)=>{
        console.log(data);
        $('.content').append(`
        <div class="row">
            
                <div class="card">
                    <div class="card-image">
                        <img src="`+ data.thumb +`">
                            <span class="card-title">`+ data.title +`</span>
        </div>
                <div class="card-content">
                    <p>Waktu Memasak : `+ data.times +`</p><br>
                    <p>Untuk : `+ data.portion +`</p>
                </div>
                    <div class="card-action">
        </div>
      </div>
    </div>
  </div>
        `);
      });
    }
  });

  $.ajax({
    dataType: "json",
    type: "GET",
    url: "https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes",
    success: function(result){
    console.log(result)
      const resep = result.results;
      $.each(resep, (i, data)=>{
        console.log(data);
        $('.table_kategori').append(`
        <tbody>
        <tr style = "display: flex; align-items: center;">
               <td style="width: 200px;" >`+ data.category +`</td>
               <td style="">`+ data.url +`</td>
        </tr>
        </tbody>
        `);
      });
    }
  });