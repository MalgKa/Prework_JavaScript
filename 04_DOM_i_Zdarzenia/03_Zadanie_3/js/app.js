const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");
const points1 = document.querySelector("#points1");
const points2 = document.querySelector("#points2");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const tableBody = document.querySelector("tbody");
  const node = tableBody.lastElementChild;
  const copyNode = node.cloneNode(true);

  if (team1.value !== team2.value && points1.value >= 0 && points2.value >= 0) {
    tableBody.appendChild(copyNode);

    copyNode.children[0].textContent = team1.value;
    copyNode.children[1].textContent = team2.value;
    copyNode.children[2].textContent = `${points1.value} -  ${points2.value}`;
  } else {
    console.log("incorrect data");
  }
});
