$(document).ready(function() {
    $('.delete-recipe').on('click', function(e){
        //Get the attribute of the element -- data-id
        const id = $(e.target).attr('data-id')
        $.ajax({
            type: "DELETE",
            // the URL of the data that to delete
            url: "/recipe/single/"+id,
            success: function(res){
                alert("deleting");
                //$( ".delete" ).append( "Deleted!!!" );
                window.location.href="/";
                //window.location.replace("/");
            },error: function(err){
                $( ".delete" ).append( "Cannot redirect..." );
            }
        })
    })
})

