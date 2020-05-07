const findAll = (array, n) => {


  let res = []
  array.filter((el,i)=> {
    if(el==n) return res.push(i)
  })
  return res

}
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))


