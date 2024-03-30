const drivers = [
    { name: 'John Smith' },
    { name: 'Jane Doe' },
    { name: 'Mike Johnson' }
  ];
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};
console.log(findMatching(drivers, "Lewis Hamilton"));
function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);
}