var arrFunc=(test)=>{
	return test;
}


var arrFunc2=(at)=>at+2;
console.log(arrFunc("RGB"))
console.log(arrFunc2(3))

//Callbacks
const fetchData=callback=>{
	setTimeout(()=>{
		callback('Done processing')
	},1500)
}

setTimeout(()=>{
	console.log("Timer is done");

	fetchData(text=>{
		console.log(text);
	},1500);
},1500);

console.log('Hi');
console.log('Hello');




//Promise

/*function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);*/



function firstDuplicate(a) {
    return a.slice()
}
