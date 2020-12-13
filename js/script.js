$(document).ready(function(){

	$(".light").click(function(){
		$(".c1").css({
        'display':'inline-block'
        })
	 })

	$(".dark").click(function(){
       $(".c2").css({
        'display':'inline-block'
         })
	 })

    $(".c1").click(function(){
        $(".c1").css({
        'display':'none'
        })
     })

    $(".c2").click(function(){
        $(".c2").css({
        'display':'none'
        })
     })


})

        

