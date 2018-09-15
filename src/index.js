module.exports = function getZerosCount(number, base) {
  let j = base;
	let p = 0;
	let noz;

	for(let i = 2; i <= base; i++){
		if(j % i == 0) {
			p = 0;
			while(j % i == 0) {
				p++;
				j = j / i;
			}
			c = 0;
			k = number;
			while(k/i > 0) {
				c+= Math.floor(k/i);
				k = Math.floor(k / i);
			}
				noz = min(noz, c/p);
		}
	}
	return Math.floor(noz);
}

function min(x, y) {
	if(x < y) return x;
	return y;
}