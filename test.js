function flatten (arr) {
  if (Array.isArray(arr)) {
    newArr = [];
    innerArr = ""
    for (var i = 0;i < arr.length;i++){
      if (Array.isArray(arr[i])){
        innerArr= arr[i];
        for(var x = 0;x < innerArr.length;x++){
          newArr.push(innerArr[x]);
        }
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr;
  } else {
    throw new Error("Arrays only")
  }
}

