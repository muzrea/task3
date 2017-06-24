module.exports = function main(i) {
	var m ;
	var j=parseInt(i);
	var n = 0;
	for(var a=0,a<3,a++){
		m=parseInt(j%10);
		n=n+m;
		j=parseInt(j/10);
	}
	return n;
  // Write your cade here
};
