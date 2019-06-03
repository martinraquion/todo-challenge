$(document).ready(function() {
    var list = [];
    // Adding Task
    $('button').attr('disabled',true)
    $('button').addClass('disabled')

   $('.text-content').keyup(function(){
    $('button').prop('disabled', false)
    $('button').css('background', '#D97777')
})

    $('.input-button').click(function() {
        var newTask = $('.text-content').val()
        list.push(newTask)
        var addTask = `
        <div class="list">
                <div class="list-content">
                    
                    <span class="fa fa-circle"></span>
                  
                    <div class="title">${newTask}</div>
                     <div class="icon-wrap">
                        <span class="progress new">New</span>
                        <span class="fas fa-trash"></span>
                    </div>
                </div>
            </div>
        ` 
        $('.list-container').prepend(addTask)

        $('.icon-wrap').on('click', '.progress', function(){
            $(this).toggleClass('new')
            $(this).toggleClass('in-progress')
            $(this).text($(this).text() == 'New' ? 'In Progress' : 'New');
       
        })  
    
        //Deleting Task
        $('.list-content').on('click', '.fa-trash', function(){
        $(this).parent().parent().parent().remove()

        for (let x=0;x<=list.length;x++ ){
            if(list[x]===$(this).parent().prev().text()){
                list.splice(x,1);
            }
            // console.log(list)
        }
        })  

        $('.fa-circle').on('click', function(){
         $(this).next().toggleClass('done-text')
         $(this).toggleClass('done-color')
        //  $(this).next().next().child().hasClass('progress').text('Done')
          $(this).next().next().children().first().toggleClass('hidden');
           console.log($(this).next().next().toggleClass('align-right'))
    })

        $('.text-content').val('')
        $('button').addClass('disabled')
    });

    //Filter
    $('.filter-all').on('click', function(){
        $('.filter-done').removeClass('selected');
        $('.filter-prog').removeClass('selected');
        $('.filter-all').addClass('selected')
        if($('.progress').hasClass('in-progress')){
            $('.new').parent().parent().parent().removeClass('hidden');
            // $('.progress').removeClass('new')
        }
        $('.title:not(".done-text")').parent().parent().removeClass('hidden')
    })

    $('.filter-prog').on('click', function(){
        $('.filter-all').removeClass('selected');
        $('.filter-done').removeClass('selected');
        $('.filter-prog').addClass('selected');
        if($('.progress').hasClass('in-progress')){
            $('.new').parent().parent().parent().addClass('hidden');
            // $('.progress').removeClass('new')
        }
    })

    $('.filter-done').on('click', function(){
        $('.filter-all').removeClass('selected');
        $('.filter-prog').removeClass('selected');
        $('.filter-done').addClass('selected')
        $('.title:not(".done-text")').parent().parent().addClass('hidden')
    })

});