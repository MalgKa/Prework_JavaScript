const childElements = document.querySelector("article").children;

function getTags(elements) {
  const arrayWithTags = [];
  for (i = 0; i < elements.length; i++) {
    arrayWithTags.push(elements[i].tagName);
  }
  return arrayWithTags;
}

console.log(getTags(childElements));
