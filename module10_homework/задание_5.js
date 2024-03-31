let a = [1,2,3,4,5,6,7,8,9,0]
console.log('Длина массива: ' + a.length);
a.map(function(item, index, array) {
  console.log(item);
});
