var data = [];
var client = mqtt.connect('mqtt://127.0.0.1:9001')
client.subscribe('temp')
client.on('message', function (topic,message) {
    var decoded = new TextDecoder("utf-8").decode(message);
    decoded = decoded.trim().split(/\s+/);
    var list = {
        img : '',
        name : '',
        department : ''
    }
   for(var i = 0; i < decoded.length; i++) {
      if(i == 0){
          list.img = decoded[i]
      }else if(i == 1){
          list.name = decoded[i]
      }else if(i == 2){
          list.department = decoded[i]
      }else{
          console.log('err');
      }
   }
   data.push(list)
   if(data.length > 3){
        $('.wrap>.box:first').fadeOut(200, function() {
            $('.wrap>.box:first').remove();
            var content = $(`
            <div class="box">
                    <div class="top"></div>
                    <div class="info">
                        <img src="${data[data.length - 1].img}" alt="" class="info-img">
                        <div class="info-department">${data[data.length - 1].department}</div>
                        <div class="info-name">${data[data.length - 1].name}</div>
                    </div>
                    <div class="bottom"></div> 
                </div>
            `);
            var $content = $(content);
            $content.appendTo($('.wrap')).hide().fadeIn(600);
        });
        data.shift();
    }else{
        var content = $(`
            <div class="box">
                    <div class="top"></div>
                    <div class="info">
                        <img src="${data[data.length - 1].img}" alt="" class="info-img">
                        <div class="info-department">${data[data.length - 1].department}</div>
                        <div class="info-name">${data[data.length - 1].name}</div>
                    </div>
                    <div class="bottom"></div> 
                </div>
            `);
        var $content = $(content);
        $content.appendTo($('.wrap')).hide().fadeIn(600);
    }
   
})

// var data = []

// $('.input-btn').on('click', function() {
//     var input = {
//         img : '',
//         department : '',
//         name : ''
//     };
//     input.img = $('.input-img').val();
//     input.department = $('.input-department').val();
//     input.name = $('.input-name').val();
//     if(input.img === ''){
//         return;
//     }
//     data.push(input);
//     console.log(data);
//     if(data.length > 3){
//         $('.wrap>.box:first').fadeOut(200, function() {
//             $('.wrap>.box:first').remove();
//             var content = $(`
//             <div class="box">
//                     <div class="top"></div>
//                     <div class="info">
//                         <img src="${data[data.length - 1].img}" alt="" class="info-img">
//                         <div class="info-department">${data[data.length - 1].department}</div>
//                         <div class="info-name">${data[data.length - 1].name}</div>
//                     </div>
//                     <div class="bottom"></div> 
//                 </div>
//             `);
//             var $content = $(content);
//             $content.appendTo($('.wrap')).hide().fadeIn(600);
//         });
//         data.shift();
//     }else{
//         var content = $(`
//             <div class="box">
//                     <div class="top"></div>
//                     <div class="info">
//                         <img src="${data[data.length - 1].img}" alt="" class="info-img">
//                         <div class="info-department">${data[data.length - 1].department}</div>
//                         <div class="info-name">${data[data.length - 1].name}</div>
//                     </div>
//                     <div class="bottom"></div> 
//                 </div>
//             `);
//             var $content = $(content);
//             $content.appendTo($('.wrap')).hide().fadeIn(600);
//     }

//     $('.input-img').val("");
//     $('.input-department').val("");
//     $('.input-name').val("");
// })