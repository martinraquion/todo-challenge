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
                  
                    <div class="title">${newTask}&nbsp;</div>
                     <div class="icon-wrap">
                        
                        <span class="progress new" >To Do</span>
                        <span class="fas fa-undo"></span>
                        <span class="fas fa-trash"></span>
                       
                    </div>
                </div>
            </div>
        ` 
        $('.list-container').prepend(addTask)

        $('.progress').on('click', function(){
          
            if(!$(this).hasClass('in-progress')){
            $(this).removeClass('new')
            $(this).addClass('in-progress')
            $(this).text('In Progress')
            }
        }) 
    
        
    
        //Deleting Task
        $('.list-content').on('click', '.fa-trash', function(){
        $(this).parent().parent().parent().remove()

        for (let x=0;x<=list.length;x++ ){
            if(list[x]===$(this).parent().prev().text()){
                list.splice(x,1);
            }
            console.log(list)
        }
        })  

        $('.fa-circle').on('click', function(){
         $(this).next().addClass('done-text')
         $(this).addClass('done-color')
        //  $(this).next().next().child().hasClass('progress').text('Done')
          $(this).next().next().children().first().addClass('hidden');
          $(this).next().next().children().first().next().next().addClass('hidden');
           console.log($(this).next().next().addClass('align-right'))
            })

        $('.title').on('click', function(){
            $(this).attr('contenteditable', 'true');
            $(this).addClass('edittxt');
            $(this).focus();
        })

        $('.title').on('focusout', function(){
            $(this).removeAttr('contenteditable');
            $(this).removeClass('edittxt');
        })

        $('.text-content').val('')
        $('button').addClass('disabled')
        
        
        $('.fa-undo').on('click', function(){
           $(this).prev().removeClass('in-progress')
           $(this).prev().text('To Do')
           $(this).prev().addClass('new')
        })



    });
    $('.progress').on('click', function(){
          
        if(!$(this).hasClass('in-progress')){
        $(this).removeClass('new')
        $(this).addClass('in-progress')
        $(this).text('In Progress')
        }else{
        $(this).addClass('new')
        $(this).removeClass('in-progress')
        $(this).text('To Do')
        };
        
    
    })  
    
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