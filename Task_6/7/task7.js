function find(arr, val){
	for(var i = 0; i < arr.length; i++)
		if(arr[i] == val)return i;
	return -1;
}
function mergeObjects(set) {
	var set2 = set;
	var bdoc = ["a", "b", "c", "d", "e", "f", "g", "h"];
	var tdoc = ["1", "2", "3", "4", "5", "6", "7", "8"];
	var number = 0;
	set.forEach((s, sAgain, set) =>{
		if(s[1] != "8"){
			if(s[0] == "a"){
				var a = bdoc[find(bdoc, s[0]) + 1] + tdoc[find(tdoc, s[1]) + 1] ;
				if(set2.has(a)){
					number++;
					set2.delete(a);
				}
			}
			else if(s[0] == "h"){
				var b = bdoc[find(bdoc, s[0]) - 1] + tdoc[find(tdoc, s[1]) + 1] ;
				if(set2.has(b)){
					number++;
					set2.delete(b);
				}
			}
			else{
				var a = bdoc[find(bdoc, s[0]) + 1] + tdoc[find(tdoc, s[1]) + 1] ;
				var b = bdoc[find(bdoc, s[0]) - 1] + tdoc[find(tdoc, s[1]) + 1] ;
				if(set2.has(a)){
					number++;
					set2.delete(a);
				}
				if(set2.has(b)){
					number++;
					set2.delete(b);
				}
			}
		}
	});
	return number;
}

var set = new Set(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]);
console.log(mergeObjects(set));
var set = new Set(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]);
console.log(mergeObjects(set));
var set = new Set(["b2", "h8"]);
console.log(mergeObjects(set));
