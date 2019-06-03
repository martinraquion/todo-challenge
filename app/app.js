$(document).ready(function() {
    var list = [];
    // Adding Task
    $('.input-button').click(function() {
        var newTask = $('.text-content').val()
        list.push(newTask)
        var addTask = `
        <div class="list">
                <div class="list-content">
                    
                    <span class="fa fa-circle"></span>
                  
                    <div class="title">${newTask}</div>
                     <div class="icon-wrap">
                        <span class="progress">New</span>
                        <span class="fas fa-trash"></span>
                    </div>
                </div>
            </div>
        ` 
        $('.list-container').prepend(addTask)

        $('.icon-wrap').on('click', '.progress',function(){
            $(this).toggleClass('in-progress')
            $(this).text($(this).text() == 'New' ? 'In Progress' : 'New');
        })  
    
        //Deleting Task
        $('.list-content').on('click', '.fa-trash', function(){
        $(this).parent().parent().parent().remove()
         })  

        $('.fa-circle').on('click', function(){
         $(this).next().toggleClass('done-text')
         $(this).toggleClass('done-color')
        //  $(this).next().next().child().hasClass('progress').text('Done')
        })
      
    });


        $('.icon-wrap').on('click', '.progress',function(){
        $(this).toggleClass('in-progress')
        $(this).text($(this).text() == 'New' ? 'In Progress' : 'New');
         })  
    
        //Deleting Task
        $('.list-content').on('click', '.fa-trash', function(){
        $(this).parent().parent().parent().remove()
         })  

        $('.fa-circle').on('click', function(){
         $(this).next().toggleClass('done-text')
         $(this).toggleClass('done-color')
        })

    
    //Filter
    $('.filter-all').on('click', function(){
        $('.filter-done').removeClass('selected');
        $('.filter-prog').removeClass('selected');
        $('.filter-all').addClass('selected')
    })

    $('.filter-prog').on('click', function(){
        $('.filter-all').removeClass('selected');
        $('.filter-done').removeClass('selected');
        $('.filter-prog').addClass('selected')
    })

    $('.filter-done').on('click', function(){
        $('.filter-all').removeClass('selected');
        $('.filter-prog').removeClass('selected');
        $('.filter-done').addClass('selected')
    })

});