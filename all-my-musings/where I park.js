const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (vehicle === "motorcycle" && (spots[y][x] === "M" || spots[y][x] === "S" || spots[y][x] === "R")) {
        return [y, x];
   }  
      if (vehicle === "small" && (spots[y][x] === "S" || spots[y][x] === "R")) {
        return [y, x];
   }  
      if (vehicle === "regular" && spots[y][x] === "R") {
        return [y, x];
   }  
  }
 }
 return false
};
