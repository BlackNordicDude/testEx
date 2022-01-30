$(document).ready(function() {
    let isHistoryHide = false
    let isFav = false
    $(".hide_btn").click(function(){
        $(this).hide()
        $(this).siblings('ul').children('li:gt(1)').slideUp('fast')
        $(this).siblings('.show_btn').show()
    })
    $('.show_btn').click(function(){
        $(this).hide()
        $(this).siblings('ul').children('li:gt(1)').slideDown('fast')
        $(this).siblings('.hide_btn').show()      
    })
    $('.history_btn').click(function() {
        if (isHistoryHide) {
            $(this).css('border-bottom','1px solid #E7EEF6')
            isHistoryHide = false
            $(this).siblings('ul').slideToggle()
        } else {
            $(this).siblings('ul').slideToggle()
            $(this).css('border-bottom','none')
            isHistoryHide = true
        }
    })
    $('.favorite').hover(function() {
        $(this).children('img').attr('src', isFav ? '/src/img/png/checked-heart.png' : '/src/img/png/hover-heart.png')
    }, function() {  
        $(this).children('img').attr('src', isFav ? '/src/img/png/checked-heart.png' : '/src/img/png/fav.png')
    })
    $('.favorite').click(function() {
        if (isFav) {
            $(this).children('img').attr('src','/src/img/png/fav.png') 
            isFav = false
        } else {
            $(this).children('img').attr('src','/src/img/png/checked-heart.png')
            isFav = true
        }
    })
    $('.offer_btn').click(function(){
        $(this).children('ul').slideToggle('slow')
    })
    $('#note').children('img').click(function(){
        $('#note-modal').show()
    })
    $('#cancel').click(function(){
        $('#note-modal').hide()
    })
    $('#send').click(function(){
        $('#note-modal').hide()
        /* save note */
    })
})

