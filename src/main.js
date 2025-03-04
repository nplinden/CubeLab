import "./style.css";
import { bindMoves, applySequence, moveFromKeyDown } from "./moves";
import { stateCallbacks, loadState } from "./callbacks";
import {
  toggleButtonCallbacks,
  bindFaceColorPickers,
  bindResetCube,
} from "./settings";
import { findEdge } from "./solve";
bindMoves();
toggleButtonCallbacks();
stateCallbacks();
bindFaceColorPickers();
bindResetCube();

if (localStorage.getItem("scrambleState")) {
  loadState();
}

document.getElementById("sequence-btn").addEventListener("click", () => {
  const sequence = document.getElementById("sequence-input").value.split(" ");
  applySequence(sequence);
});

addEventListener("keydown", moveFromKeyDown);

console.log(findEdge("white", "red"));
