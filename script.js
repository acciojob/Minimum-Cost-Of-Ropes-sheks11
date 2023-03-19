function calculateMinCost() {
  //your code here
  var input=document.querySelector("#rope-lengths").value;
  var ropes=input.split(",");
  ropes.sort(function (a,b) {
	  return a-b	
  });
	for(let i=0;i<ropes.length;i++){
		ropes[i]=Number(ropes[i]);
	}
  var totalCost=0;
	var cost=0;
	while(ropes.length>1){
		cost=ropes[0]+ropes[1];
		totalCost+=cost;
		ropes.splice(0,2);
		ropes.push(cost);
		ropes.sort(function (a,b) {
	  return a-b	
  });
	}
 document.querySelector("#result").textContent=totalCost;
 
}  
