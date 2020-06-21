$(document).ready(function()
    {
    	var addForm = $("#addForm");
        addForm.submit(function(e){
            e.preventDefault(); 
            $.ajax({
                type: addForm.attr('method'),
                url:  addForm.attr('action'),
                data: addForm.serialize(), 
                success: function (data) {
                    console.log('Update successful!');
                    var timer = setTimeout(function() {
                        $(location).attr('href', '/')
                    }, 3000);
                },
                error: function (data) {
                    console.log('An error occurred.');
                    var timer = setTimeout(function() {
                        $(location).attr('href', '/')
                    }, 30000);
                },
            });
            $('#addModal').modal('hide');
    });

        $("#fieldSearchSelect").on('change',function() {
            var k = $(this).val();
            if (k == 1) {
                $("#tableFilter").attr("placeholder", "Filter Lottery Number One List ...");
            } 
            else if(k==2)
			{
                $("#tableFilter").attr("placeholder", "Filter Lottery Number Two List ...");
            }
			else if(k==3)
			{
				$("#tableFilter").attr("placeholder", "Filter Lottery Number Three List ...");
			}
			else if(k==4)
			{
				$("#tableFilter").attr("placeholder", "Filter Lottery Number Four List ...");
			}
			else if(k==5)
			{
				$("#tableFilter").attr("placeholder", "Filter Lottery Number Five List ...");
            }
            else
            {
      			$("#tableFilter").attr("placeholder", "Filter Lottery Number Six List ...");
            }
            $("#tableFilter").keyup();
        });

        $("#tableFilter").keyup(function(){
            var filter = $(this).val().toUpperCase(); 
            $("#lotteryList").find('tr').each(function(rows) {
                if (rows !==  0) {
                    var row = $(this);
                    var searching = "";
                    if ($("#fieldSearchSelect").val() == 1) {
                        searching = row.find("td:first").text().toUpperCase();
                    }  
                    else if($("#fieldSearchSelect").val() == 2)
					{
                        searching = row.find("td:first + td").text().toUpperCase();
                    }
					else if($("#fieldSearchSelect").val() == 3)
					{
						searching = row.find("td:first + td + td").text().toUpperCase();
					}
					else if($("#fieldSearchSelect").val() == 4)
					{
						searching = row.find("td:first + td + td + td").text().toUpperCase();
					}
					else if($("#fieldSearchSelect").val() == 5)
					{
						searching = row.find("td:first + td + td +td +td").text().toUpperCase();
					}
					else
					{
						searching = row.find("td:first + td + td +td +td + td").text().toUpperCase();
					}
                    if (searching.indexOf(filter) != -1) {               
                        row.show();
                    } else {
                        row.hide();
                    }
                }
            });
        });
		
        $("#databaseSearch").on('click',function() {
            var search = $("#databaseSearchFilter").val().replace(/[|&;$%@"<>()+,^  ]/g, "");
            if (search) {
                $(location).attr('href', '/'+$("#databaseSearchSelect").val()+'/'+search);
            } else {
                $(location).attr('href', '/');
            }
	        });
			
	        if ($(location).attr('pathname') !== '/') {
	           $('#databaseFilterNotice').text("("+$(location).attr('pathname')+")");
	        }
	    
	    });
		function Play()
		{
			var numar =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
			var freqnum =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var timer= setTimeout(function(){
				hide();
			},80000);
			unhide();
			$("#lotteryList").find('tr').each(function(rows) {
				if (rows !==  0) {
                    var row = $(this);
                    var num1 = row.find("td:first").text();
                    freqnum[num1-1]++;
                    var num2 = row.find("td:first + td").text();
                    freqnum[num2-1]++;
                    var num3 = row.find("td:first + td + td").text();
                    freqnum[num3-1]++;
                    var num4 = row.find("td:first + td + td + td").text();
                    freqnum[num4-1]++;
                    var num5 = row.find("td:first + td + td + td + td").text();
                    freqnum[num5-1]++;
                    var num6 = row.find("td:first + td + td + td + td + td").text();
                    freqnum[num6-1]++;
                }
			});
			var smallest1=10000;var value1=0;
			var smallest2=10000;var value2=0;			
			var smallest3=10000;var value3=0;			
			var smallest4=10000;var value4=0;			
			var smallest5=10000;var value5=0;			
			var smallest6=10000;var value6=0;			
			var size=numar.length;
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest1>freqnum[i])
					{
						smallest1=freqnum[i];
						value1=numar[i];
					}
				}
			}
			freqnum[value1-1]=0;
			var timer1 = setTimeout(function(){
				document.getElementById('lotto1').innerHTML=value1;
			},1000);
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest2>freqnum[i])
					{
						smallest2=freqnum[i];
						value2=numar[i];
					}
				}
			}
			freqnum[value2-1]=0;
			var timer2 = setTimeout(function(){
				document.getElementById('lotto2').innerHTML=value2;
			},2000);
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest3>freqnum[i])
					{
						smallest3=freqnum[i];
						value3=numar[i];
					}
				}
			}
			freqnum[value3-1]=0;
			var timer3 = setTimeout(function(){
				document.getElementById('lotto3').innerHTML=value3;
			},3000);
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest4>freqnum[i])
					{
						smallest4=freqnum[i];
						value4=numar[i];
					}
				}
			}
			freqnum[value4-1]=0;
			var timer4 = setTimeout(function(){
				document.getElementById('lotto4').innerHTML=value4;
			},4000);
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest5>freqnum[i])
					{
						smallest5=freqnum[i];
						value5=numar[i];
					}
				}
			}
			freqnum[value5-1]=0;
			var timer5 = setTimeout(function(){
				document.getElementById('lotto5').innerHTML=value5;
			},5000);
			for(var i=0;i<size;i++)
			{
				if(freqnum[i]!=0)
				{
					if(smallest6>freqnum[i])
					{
						smallest6=freqnum[i];
						value6=numar[i];
					}
				}
			}
			var timer6 = setTimeout(function(){
				document.getElementById('lotto6').innerHTML=value6;
			},6000);
			var timer6 = setTimeout(function(){
				calculate();
			},6000);
		}
		function unhide()
		{
			document.getElementById('Run').disabled=true;
			document.getElementById('Run').style.cursor="default";
			document.getElementById('p1').style.visibility= "hidden";
			document.getElementById('topPrize').style.visibility="visible";
			document.getElementById('secondPrize').style.visibility="visible";
			document.getElementById('thirdPrize').style.visibility="visible";
			document.getElementById('fourthPrize').style.visibility="visible";
			document.getElementById('fifthPrize').style.visibility="visible";
			document.getElementById('sixthPrize').style.visibility="visible";
			document.getElementById('cost').style.visibility="visible";
			document.getElementById('profit').style.visibility="visible";
		}
		function hide()
		{
			document.getElementById('Run').disabled=false;
			document.getElementById('Run').style.cursor="pointer";
			document.getElementById('p1').style.visibility= "visible";
			document.getElementById('topPrize').style.visibility="hidden";
			document.getElementById('secondPrize').style.visibility="hidden";
			document.getElementById('thirdPrize').style.visibility="hidden";
			document.getElementById('fourthPrize').style.visibility="hidden";
			document.getElementById('fifthPrize').style.visibility="hidden";
			document.getElementById('sixthPrize').style.visibility="hidden";
			document.getElementById('cost').style.visibility="hidden";
			document.getElementById('profit').style.visibility="hidden";
			document.getElementById('lotto1').innerHTML="";
			document.getElementById('lotto2').innerHTML="";
			document.getElementById('lotto3').innerHTML="";
			document.getElementById('lotto4').innerHTML="";
			document.getElementById('lotto5').innerHTML="";
			document.getElementById('lotto6').innerHTML="";
			document.getElementById('cost').innerHTML="";
			document.getElementById('topPrize').innerHTML="";
			document.getElementById('secondPrize').innerHTML="";
			document.getElementById('thirdPrize').innerHTML="";
			document.getElementById('fourthPrize').innerHTML="";
			document.getElementById('fifthPrize').innerHTML="";
			document.getElementById('sixthPrize').innerHTML="";
			document.getElementById('profit').innerHTML="";

		}
		function calculate()
		{
			var rowCount = 0;
			var cost1= 1;var cost2=3;
			var cost3=10;var cost4=100;
			var cost5=500;var cost6=2000;
			var total1=0;var total2=0;
			var total3=0;var total4=0;
			var total5=0;var total6=0;
			var pick1=document.getElementById('lotto1').innerHTML;var pick2=document.getElementById('lotto2').innerHTML;
			var pick3=document.getElementById('lotto3').innerHTML;var pick4=document.getElementById('lotto4').innerHTML;
			var pick5=document.getElementById('lotto5').innerHTML;var pick6=document.getElementById('lotto6').innerHTML;
			$("#lotteryList").find('tr').each(function(rows) {
				rowCount=rows;
				var total=0;
				if (rows !==  0) {
                    var row = $(this);
                    var num1 = row.find("td:first").text();
                    var num2 = row.find("td:first + td").text();
                    var num3 = row.find("td:first + td + td").text();
                    var num4 = row.find("td:first + td + td + td").text();
                    var num5 = row.find("td:first + td + td + td + td").text();
                    var num6 = row.find("td:first + td + td + td + td + td").text();
                    if(num1 == pick1)total++;
                    if(num2 == pick2)total++;
                    if(num3 == pick3)total++;
                    if(num4 == pick4)total++;
                    if(num5 == pick5)total++;
                    if(num6 == pick6)total++;
                }
                if(total==1)
                {
                	total1++;
                }
                else if(total==2)
                {
                	total2++;
                }
                else if(total==3)
                {
                	total3++;
                }
                else if(total==4)
                {
                	total4++;
                }
                else if(total==5)
                {
                	total5++;
                }
                else if(total==6)
                {
                	total6++;
                }
			});
			var totalcost = (total6 * cost6) + (total5 * cost5) + (total4 * cost4) + (total3 * cost3)  + (total2 * cost2)  + (total1 * cost1);
			var timer1 = setTimeout(function(){document.getElementById('cost').innerHTML="Cost of This Simulation's Lottery: " + totalcost;},1000);
			var timer2=setTimeout(function(){document.getElementById('topPrize').innerHTML= "Matched All 6 Numbers!________"+ total6 +  "_______prize: " + cost6;},2000);
			var timer3 =setTimeout(function(){document.getElementById('secondPrize').innerHTML= "Matched 5 Numbers!________"+ total5 +  "_______prize: " + cost5;},3000);
			var timer4=setTimeout(function(){document.getElementById('thirdPrize').innerHTML= "Matched 4 Numbers!__________"+ total4 +  "_______prize: " + cost4;},4000);
			var timer5 =setTimeout(function(){document.getElementById('fourthPrize').innerHTML= "Matched 3 Numbers!________"+ total3 +  "_______prize: " + cost3;},5000);
			var timer6= setTimeout(function(){document.getElementById('fifthPrize').innerHTML= "Matched 2 Numbers!_________"+ total2 +  "________prize: " + cost2;},6000);
			var timer7= setTimeout(function(){document.getElementById('sixthPrize').innerHTML= "Matched 1 Number!__________"+ total1 +  "_________prize: " + cost1;},7000);
			var timer8 = setTimeout(function(){document.getElementById('profit').innerHTML = "Profit From This Draw:  " + ((rowCount*5)-totalcost)  + " with " + rowCount + " players";},8000);
		}
		function calculateRow()
		{
			var count=0;
			$("#lotteryList").find('tr').each(function(rows) {
				count=rows;
			});
			document.getElementById('counting').innerHTML="Number of Players in the database is: " + count;
		}