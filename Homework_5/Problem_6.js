function readBooks(arr){
  let newArr = [];
  for(let el of arr){
    if(el.readStatus !== false){
      newArr.push(el);
    }
  }
  newArr.sort(function(a, b){return b.percent - a.percent})

  return newArr;
}

console.log(readBooks([
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 },
{ book: "After Dark", readStatus: true, percent: 70 }
]));