const positionList = document.querySelectorAll('.item');
console.log('Number of categories:', positionList.length);


positionList.forEach(element => {
  const title = element.firstElementChild;
  console.log('Category:',title.innerHTML)

  const list = element.lastElementChild.children;
  console.log('Elements:',list.length)
})





