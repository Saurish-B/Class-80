var names_of_people = [];
    
function Submit()
{
    var GuestName = document.getElementById("n1").value;
	names_of_people.push(GuestName);

	console.log(GuestName);
        
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	
   }

function sort()
{
	names_of_people.sort();
	var i= names_of_people.join("<br>");
    console.log(names_of_people);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

function search()
{
	var s= document.getElementById("s").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}