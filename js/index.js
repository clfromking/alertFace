var data = [
    {
        img : 'img/001.jpg',
        department : '英雄联盟',
        name : '伊泽瑞尔'
    }
]
var input = {
    img : '',
    department : '',
    name : ''
};
var res = {
    data : data
}
var html = template('tpl', res);
$('.wrap').html(html);

$('.input-btn').on('click', function() {
    if(data.length > 3){
        data.shift();
    }
    input.img = $('.input-img').val();
    input.department = $('.input-department').val();
    input.name = $('.input-name').val();
    data.push(input);
    var html = template('tpl', res);
    $('.wrap').html(html);
    console.log(data);
    $('.input-img').val('')
    $('.input-department').val('')
    $('.input-name').val('')
})
