module.exports = function main(i) {
	var m ;
	var j=parseInt(i);
	var n=0;
	for(var a=0,a<i.length,a++){
		m=parseInt(j%10);
		n=n+m;
		j=j-m;
		j=parseInt(j/10);
	}
	return n;
  // Write your cade here
};
