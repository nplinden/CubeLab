import { choose } from "./utils";
import { moves } from "./moves";

export function stateCallbacks() {
  document.getElementById("scramble-btn").addEventListener("click", () => {
    const svg = document.getElementById("cube");
    const length = Math.floor(Math.random() * 30) + 15;
    let sequence = [];
    for (let i = 0; i < length; i++) {
      sequence.push(choose(Object.keys(moves)));
    }
    sequence.forEach((v) => {
      moves[v](svg);
    });
    console.log(sequence);
  });
}

export function loadState() {
  const snapshotInStorage = localStorage.getItem("scrambleState");
  const snapshot = JSON.parse(snapshotInStorage);
  const svg = document.getElementById("cube");
  if (svg) {
    for (const [key, value] of Object.entries(snapshot)) {
      svg.getElementById(key).setAttribute("fill", value);
    }
  } else {
    setTimeout(loadState, 100);
  }
}
