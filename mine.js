$('.btn').click(function(event){
    event.preventDefault();

    $('.box').animate({
        'width':'500px',
        'transition':'all .5s ease'
    },1000,function(){
        $('.box').animate({
        'height':'500px',
        'transition':'all .5s ease'
    },1000);   

    });

});

$('.div2 label').click(function(e){
    e.preventDefault();
    $('.div2 input').toggleClass('active');
    $('.underline').toggleClass('active');
    
})


// $('p').eq(1).hide();
// $('h3').eq(1).hide();
// $('.btn2').click(function(e){
//     e.preventDefault();
//     $('p').eq(1).show();
//     $('h3').eq(1).show();
//     $('.btn2').hide();
//     $('.btn3').show();
// })

// $('.btn3').click(function(e){
//     $('p').eq(1).hide();
//     $('h3').eq(1).hide();
//     $('.btn2').show();
//     $('.btn3').hide();
// })

$('.btn2').click(function(e){
    $('.main').nextAll().hide(700);
    $('.btn3').show();

})
$('.btn3').click(function(e){
    $('.main').nextAll().show(700);
    $('.btn2').show();
    $('.btn3').hide();

})

let mouseItem = document.querySelector('.item')
window.onmousemove = function(e){
    mouseItem.style.position = 'fixed';
    mouseItem.style.left = e.clientX + -25 + 'px';
    mouseItem.style.top = e.clientY + -25 + 'px';
}

mouseItem.addEventListener('mousedown', function(){
    mouseItem.style.display = 'none'
});
mouseItem.addEventListener('mouseup', function(){
    mouseItem.style.display = 'block'
});
