// 数组随机排序

function createRandomArr (min, max) {
  let arr = []
  for (let i = min; i <= max - min; i++) {
    arr.push(i)
  }
  return arr
}
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
var arr = [1, 2, 3, 4, 5];
arr.sort(randomsort);