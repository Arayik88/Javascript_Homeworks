function invert_key_value(obj) {
    const result = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
		
		if(!result.hasOwnProperty(obj[keys[i]])){
			result[obj[keys[i]]] = keys[i];
		}
		else{
			result[obj[keys[i]]] = [].concat(result[obj[keys[i]]]).concat(keys[i]);
		}
    }
    return result;
  }

console.log(invert_key_value({ a: '1', b: '2', c: '2', d: '2'  }));