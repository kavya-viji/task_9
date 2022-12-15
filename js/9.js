var m = parseInt(prompt("Enter the month"));
var y = parseInt(prompt("Enter the year"));
var mName = {1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"may",6:"june",7:"July",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"};

if (m==1 || m==3 || m==5 || m==7 || m==9 || m==11)
{
	console.log(mName[m]+ " has 31 days in the year"+" "+y);
}
else if (m==4 || m==6 || m==8 || m==10 || m==12)
{
	console.log(mName[m]+ " has 30 days in the year"+" "+y);
}
else
{
	if (y%4==0)
	{
		console.log(mName[m]+ " has 29 days and its a leap year, in the year"+" "+y);
	}
	else
	{
		console.log(mName[m]+ " has 28 days and its not a leap year, in the year"+" "+y);
	}	
}
	
