// $('h3').hide();
// $('.heading1').hide();
// $('.heading2').hide();

// $('.para2').css('color', '#808080');

// $('.list li:first').css('color', 'red');
// $('.list li:last').css('color', 'blue');
// $('.list li:even').css('background-color', '#fff');
// $('.list li:odd').css('background-color', 'grey');
// $('.list li:nth-child(3n').css('background-color', 'green');

// Attribute
// $('[href]').css('color', 'green')

// Attribute value
// $(':text').css('background-color', 'pink')



// Events

// $('.btn1').click(() => {
//     alert(' btn 1 clicked')
// })

    // $('.btn1').on('click', () => {
    //     $('.para1').hide();
    // })

// $('.btn1').click(() => {
//     $('.para1').hide();
// })
// $('.btn2').click(() => {
//     $('.para1').show();
// })

// $('.btn1').dblclick(() => {
//     $('.para1').toggle();
// })

// $('.btn2').hover(() => {
//     $('.para1').toggle();
// })


// DOM Manipulation

// $('#h3').addClass('h3');
// $('#h3').removeClass('h3');

// $('#h3').html('<h1>this is h1 </h1>');
// $('#h3').text('h3 is me');
// $('li').attr('class', 'li')
// $('li').removeAttr('class', 'li')

// $('.list').append('<li>Seventh</li>');
// $('.list').prepend('<li>zero</li>');

// $('.list').before('<h2>heading</h2>');
// $('.list').after('<h3>heading</h3>');


// Effects

// $('.fadeOut').click(() => {
//     $('#box').fadeOut(1000, () => {
//         $('.fadeOut').text('Its Gone');
//     })
// });
// $('.fadeIn').click(() => {
//     $('#box').fadeIn(1000)
// });
// $('.fadeToggle').click(() => {
//     $('#box').fadeToggle(1000)
// });


// $('.fadeOut').click(() => {
//     $('#box').slideUp(1000, () => {
//         $('.fadeOut').text('Its Gone');
//     })
// });
// $('.fadeIn').click(() => {
//     $('#box').slideDown(1000)
// });
// $('.fadeToggle').click(() => {
//     $('#box').slideToggle(1000)
// });

$('.fadeOut').click(() => {
    $('#box').animate({
        
    })
});
$('.fadeIn').click(() => {
    $('#box').fadeIn(1000)
});
$('.fadeToggle').click(() => {
    $('#box').fadeToggle(1000)
});