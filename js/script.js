 $(document).ready(function(){
            $("#mycarousel").carousel({
                interval:2000
            });
             $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

             $("#login").click(function(){
                $("#loginModal").modal('show');
             });
             $("#reserve").click(function(){
                $("#reservemodal").modal('show');
             });
             $("#close-login-modal1").click(function(){
                $("#loginModal").modal('hide');
             });

             $("#close-table-modal1").click(function(){
                $("#reservemodal").modal('hide');
             });
             $("#close-login-modal2").click(function(){
                $("#loginModal").modal('hide');
             });

             $("#close-table-modal2").click(function(){
                $("#reservemodal").modal('hide');
             });
        });


            