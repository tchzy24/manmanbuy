// 获取菜单栏数据动态渲染
$(function(){
    navrender();
    function navrender(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getindexmenu",
            type: "get",
            datatype:'json',
            success: function( info) {
              console.log(info);
              var htmlStr = template( "navTpl", info );
              $('.nav ul').html( htmlStr);
              
            }
          })
          // 菜单栏更多切换显示隐藏
        $('.more').click(function() {
            $(this).next().stop().slideToggle();
        });
      
        };

        //商品渲染
        prorender();
        function prorender(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            type: "get",
            datatype:'json',
            success: function( result ) {
              console.log(result);
              var htmlStr = template( "proTpl", result );
              $('.main_ul').html( htmlStr);
              
            }
          })
        }
    




    })







