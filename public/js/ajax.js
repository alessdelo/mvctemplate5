// 

function ajaxAlert(starter, url, dataType) {
                
                    $(target).click(function() {
		    

			
                        $.ajax({
					url: '/static/test/test.txt',
					type: 'get',
					dataType:'text',
					success: function(data) { alert('ok'); },
					error: function() {
					     alert(error);
					}
			}); 
			alert("ooooooooo");
			$("#theText").html("theData");
			
                    }); // end $target function
                } // end ajaxTest1  
