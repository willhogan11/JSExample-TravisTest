var arr = [1,2,3,4,5,6,7,8,9,10];

function IsPresent(num, arr){
	for(var i = 0; i < arr.length; i++){
		if(num == arr[i]){
			return console.log("Number is Present in Array");
		}
		else{
			return console.log("Number is NOT Present in Array");
		}
	}
}

IsPresent(5, arr);