
exports.min = function min (array) {
  if(Array.isArray(array) && array.length != 0){
    return Math.min.apply(Math,array);
  }   
    return 0; 
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length != 0) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        } 
    }
    
    return max;
  } return 0;
}


exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length != 0) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    var avg = total / array.length;
    
    return avg;
} return 0;
}
