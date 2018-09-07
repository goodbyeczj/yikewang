
$(document).ready(function() {
	$('.iframe').fancybox({
		width : '30%',
		height : '30%',
		titlePosition: 'outside'
	});
}); // end ready
	$(function (){
$('#1').hover(function() {
	$('#main4').show();
	$('#main5').hide();
	$('#main6').hide();
	$('#main7').hide();
	$('#main8').hide();
	$('#main9').hide();
	$('#main10').hide();
});
$('#2').hover(function() {
	$('#main5').show(300);
	$('#main4').hide();
	$('#main6').hide();
	$('#main7').hide();
	$('#main8').hide();
	$('#main9').hide();
	$('#main10').hide();
});
$('#3').hover(function() {
	$('#main6').show(300);
	$('#main4').hide();
	$('#main5').hide();
	$('#main7').hide();
	$('#main8').hide();
	$('#main9').hide();
	$('#main10').hide();
});
$('#4').hover(function() {
	$('#main7').show(300);
	$('#main4').hide();
	$('#main5').hide();
	$('#main6').hide();
	$('#main8').hide();
	$('#main9').hide();
	$('#main10').hide();
});
$('#5').hover(function() {
	$('#main8').show(300);
	$('#main4').hide();
	$('#main5').hide();
	$('#main6').hide();
	$('#main7').hide();
	$('#main9').hide();
	$('#main10').hide();
});
$('#6').hover(function() {
	$('#main9').show(300);
	$('#main4').hide();
	$('#main5').hide();
	$('#main6').hide();
	$('#main7').hide();
	$('#main8').hide();
	$('#main10').hide();
});
$('#7').hover(function() {
	$('#main10').show(300);
	$('#main4').hide();
	$('#main5').hide();
	$('#main6').hide();
	$('#main7').hide();
	$('#main8').hide();
	$('#main9').hide();
});
// $('#main0').mouseout(function(){
// 		$('#main5').hide();
// 		$('#main4').hide();
// })
}); // end ready
$('.br input').click(function() {
	$(this).addClass('tu');
});
	$(function(){
		$('#main2').anythingSlider({
			buildArrows : false,
		    buildStartStop : false,
		    autoPlay : true
		});
	})
$(document).ready(function() {
  $('#dashboard').hover(
     function() {
		$(this).stop().animate(
		{
			right: '0',
			backgroundColor: 'rgb(255,255,255)'
		},
		500,
		'easeInSine'
		); // end animate
	 }, 
	 function() {
		 $(this).stop().animate(
		{
			right: '-92px',
			backgroundColor: 'rgb(110,138,195)'
		},
		1500,
		'easeOutBounce'
		); // end animate
	 }
  ); // end hover
}); // end ready
// <!-- <script>
// $(document).ready(function() {
//   $('.ry table tr td').hover(
//      function() {
// 		$(this).addClass('ddf');
// 	 }, 
// 	 function() {
// 		$(this).removeClass('ddf');
// 	 }
//   ); // end hover
// }); // end ready
// </script> -->
$(document).ready(function() {
  $('#menu2 li').hover(
     function() {
		$(this).addClass('ddf');
	 }, 
	 function() {
		$(this).removeClass('ddf');
	 }
  ); // end hover
}); // end ready
$(document).ready(function() {
  $('#menu15 li').hover(function() {
  	$(this).addClass('ddf');
  }, function() {
  	$(this).removeClass('ddf');
  });
}); // end ready

$(document).ready(function() {
  $('#menu16 li').hover(function() {
  	$(this).addClass('ddf');
  }, function() {
  	$(this).removeClass('ddf');
  });
}); // end ready

$(document).ready(function() {
  $('#menu17 li').hover(function() {
  	$(this).addClass('ddf');
  }, function() {
  	$(this).removeClass('ddf');
  });
}); // end ready
