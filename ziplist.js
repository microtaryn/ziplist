const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
function zipList(li1, li2) {
  const combList = [];
  for (let i = 0; i < li1.length; i++) {
    combList.push(li1[i], li2[i]);
  }
  return combList;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(li1, li2) {
  return _.flatten(_.zip(li1, li2));
}
console.log(zipListTheSimpleWay(list1, list2));
