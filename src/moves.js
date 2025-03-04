import { cycleThrough } from "./utils.js";

const edges = {
  bottom: [
    ["23", "19"],
    ["24", "7"],
    ["21", "11"],
    ["22", "15"],
  ],
  middle: [
    ["14", "20"],
    ["16", "10"],
    ["12", "6"],
    ["8", "18"],
  ],
  top: [
    ["1", "17"],
    ["2", "13"],
    ["3", "9"],
    ["4", "5"],
  ],
};

/**
 *
 * @param {String} id
 * @returns
 */
const getColor = (svg, id) => {
  return svg.getElementById(id).getAttribute("fill");
};

function saveState(svg) {
  let snapshot = {};
  svg.querySelectorAll("rect").forEach((item) => {
    snapshot[item.id] = item.getAttribute("fill");
  });
  localStorage.setItem("scrambleState", JSON.stringify(snapshot));
}

function cycleStickers(svg, cycle, incr) {
  const oldColors = cycle.map((id) => getColor(svg, id));
  const colors = cycleThrough(oldColors, incr);
  for (let i = 0; i < cycle.length; i++) {
    svg.getElementById(cycle[i]).setAttribute("fill", colors[i]);
  }
}

function UMove(svg) {
  cycleStickers(svg, ["I", "E", "Q", "M"], -1);
  cycleStickers(svg, ["J", "F", "R", "N"], -1);
  cycleStickers(svg, ["A", "B", "C", "D"], -1);
  cycleStickers(svg, ["9", "5", "17", "13"], -1);
  cycleStickers(svg, ["1", "2", "3", "4"], -1);
  saveState(svg);
}

function UpMove(svg) {
  cycleStickers(svg, ["I", "E", "Q", "M"], 1);
  cycleStickers(svg, ["J", "F", "R", "N"], 1);
  cycleStickers(svg, ["A", "B", "C", "D"], 1);
  cycleStickers(svg, ["9", "5", "17", "13"], 1);
  cycleStickers(svg, ["1", "2", "3", "4"], 1);
  saveState(svg);
}

function DMove(svg) {
  cycleStickers(svg, ["L", "P", "T", "H"], -1);
  cycleStickers(svg, ["K", "O", "S", "G"], -1);
  cycleStickers(svg, ["V", "W", "X", "U"], -1);
  cycleStickers(svg, ["11", "15", "19", "7"], -1);
  cycleStickers(svg, ["21", "22", "23", "24"], -1);
  saveState(svg);
}
function DpMove(svg) {
  cycleStickers(svg, ["L", "P", "T", "H"], 1);
  cycleStickers(svg, ["K", "O", "S", "G"], 1);
  cycleStickers(svg, ["V", "W", "X", "U"], 1);
  cycleStickers(svg, ["11", "15", "19", "7"], 1);
  cycleStickers(svg, ["21", "22", "23", "24"], 1);
  saveState(svg);
}
function RMove(svg) {
  cycleStickers(svg, ["J", "B", "T", "V"], -1);
  cycleStickers(svg, ["K", "C", "Q", "W"], -1);
  cycleStickers(svg, ["M", "N", "O", "P"], -1);
  cycleStickers(svg, ["10", "2", "20", "22"], -1);
  cycleStickers(svg, ["13", "14", "15", "16"], -1);
  saveState(svg);
}
function RpMove(svg) {
  cycleStickers(svg, ["J", "B", "T", "V"], 1);
  cycleStickers(svg, ["K", "C", "Q", "W"], 1);
  cycleStickers(svg, ["M", "N", "O", "P"], 1);
  cycleStickers(svg, ["10", "2", "20", "22"], 1);
  cycleStickers(svg, ["13", "14", "15", "16"], 1);
  saveState(svg);
}
function LMove(svg) {
  cycleStickers(svg, ["A", "I", "U", "S"], -1);
  cycleStickers(svg, ["D", "L", "X", "R"], -1);
  cycleStickers(svg, ["E", "F", "G", "H"], -1);
  cycleStickers(svg, ["4", "12", "24", "18"], -1);
  cycleStickers(svg, ["5", "6", "7", "8"], -1);
  saveState(svg);
}
function LpMove(svg) {
  cycleStickers(svg, ["A", "I", "U", "S"], 1);
  cycleStickers(svg, ["D", "L", "X", "R"], 1);
  cycleStickers(svg, ["E", "F", "G", "H"], 1);
  cycleStickers(svg, ["4", "12", "24", "18"], 1);
  cycleStickers(svg, ["5", "6", "7", "8"], 1);
  saveState(svg);
}
function FMove(svg) {
  cycleStickers(svg, ["I", "J", "K", "L"], -1);
  cycleStickers(svg, ["D", "M", "V", "G"], -1);
  cycleStickers(svg, ["C", "P", "U", "F"], -1);
  cycleStickers(svg, ["9", "10", "11", "12"], -1);
  cycleStickers(svg, ["3", "16", "21", "6"], -1);
  saveState(svg);
}
function FpMove(svg) {
  cycleStickers(svg, ["I", "J", "K", "L"], 1);
  cycleStickers(svg, ["D", "M", "V", "G"], 1);
  cycleStickers(svg, ["C", "P", "U", "F"], 1);
  cycleStickers(svg, ["9", "10", "11", "12"], 1);
  cycleStickers(svg, ["3", "16", "21", "6"], 1);
  saveState(svg);
}
function BMove(svg) {
  cycleStickers(svg, ["A", "H", "W", "N"], -1);
  cycleStickers(svg, ["B", "E", "X", "O"], -1);
  cycleStickers(svg, ["Q", "R", "S", "T"], -1);
  cycleStickers(svg, ["1", "8", "23", "14"], -1);
  cycleStickers(svg, ["17", "18", "19", "20"], -1);
  saveState(svg);
}
function BpMove(svg) {
  cycleStickers(svg, ["A", "H", "W", "N"], 1);
  cycleStickers(svg, ["B", "E", "X", "O"], 1);
  cycleStickers(svg, ["Q", "R", "S", "T"], 1);
  cycleStickers(svg, ["1", "8", "23", "14"], 1);
  cycleStickers(svg, ["17", "18", "19", "20"], 1);
  saveState(svg);
}
function MMove(svg) {
  cycleStickers(svg, ["1", "9", "21", "19"], -1);
  cycleStickers(svg, ["3", "11", "23", "17"], -1);
  cycleStickers(svg, ["alpha", "gamma", "zeta", "epsilon"], -1);
  saveState(svg);
}
function MpMove(svg) {
  cycleStickers(svg, ["1", "9", "21", "19"], 1);
  cycleStickers(svg, ["3", "11", "23", "17"], 1);
  cycleStickers(svg, ["alpha", "gamma", "zeta", "epsilon"], 1);
  saveState(svg);
}

function EMove(svg) {
  cycleStickers(svg, ["12", "16", "20", "8"], -1);
  cycleStickers(svg, ["10", "14", "18", "6"], -1);
  cycleStickers(svg, ["gamma", "delta", "epsilon", "beta"], -1);
  saveState(svg);
}

function EpMove(svg) {
  cycleStickers(svg, ["12", "16", "20", "8"], 1);
  cycleStickers(svg, ["10", "14", "18", "6"], 1);
  cycleStickers(svg, ["gamma", "delta", "epsilon", "beta"], 1);
  saveState(svg);
}

function SMove(svg) {
  cycleStickers(svg, ["4", "13", "22", "7"], -1);
  cycleStickers(svg, ["2", "15", "24", "5"], -1);
  cycleStickers(svg, ["alpha", "delta", "zeta", "beta"], -1);
  saveState(svg);
}

function SpMove(svg) {
  cycleStickers(svg, ["4", "13", "22", "7"], 1);
  cycleStickers(svg, ["2", "15", "24", "5"], 1);
  cycleStickers(svg, ["alpha", "delta", "zeta", "beta"], 1);
  saveState(svg);
}

function xMove(svg) {
  RMove(svg);
  LpMove(svg);
  MpMove(svg);
  saveState(svg);
}

function yMove(svg) {
  UMove(svg);
  EpMove(svg);
  DpMove(svg);
  saveState(svg);
}

function zMove(svg) {
  FMove(svg);
  BpMove(svg);
  SMove(svg);
  saveState(svg);
}
export const moves = {
  U: UMove,
  "U'": UpMove,
  U2: (svg) => {
    UMove(svg);
    UMove(svg);
  },
  D: DMove,
  "D'": DpMove,
  D2: (svg) => {
    DMove(svg);
    DMove(svg);
  },
  R: RMove,
  "R'": RpMove,
  R2: (svg) => {
    RMove(svg);
    RMove(svg);
  },
  L: LMove,
  "L'": LpMove,
  L2: (svg) => {
    LMove(svg);
    LMove(svg);
  },
  F: FMove,
  "F'": FpMove,
  F2: (svg) => {
    FMove(svg);
    FMove(svg);
  },
  B: BMove,
  "B'": BpMove,
  B2: (svg) => {
    BMove(svg);
    BMove(svg);
  },
  M: MMove,
  "M'": MpMove,
  M2: (svg) => {
    MMove(svg);
    MMove(svg);
  },
  E: EMove,
  "E'": EpMove,
  E2: (svg) => {
    EMove(svg);
    EMove(svg);
  },
  S: SMove,
  "S'": SpMove,
  S2: (svg) => {
    SMove(svg);
    SMove(svg);
  },
};

function bindMove(id, move) {
  document.querySelector(id).addEventListener("click", () => {
    const svg = document.querySelector("#cube");
    move(svg);
  });
}

export function bindMoves() {
  bindMove("#U-btn", UMove);
  bindMove("#Up-btn", UpMove);
  bindMove("#D-btn", DMove);
  bindMove("#Dp-btn", DpMove);
  bindMove("#R-btn", RMove);
  bindMove("#Rp-btn", RpMove);
  bindMove("#L-btn", LMove);
  bindMove("#Lp-btn", LpMove);
  bindMove("#F-btn", FMove);
  bindMove("#Fp-btn", FpMove);
  bindMove("#B-btn", BMove);
  bindMove("#Bp-btn", BpMove);
  bindMove("#M-btn", MMove);
  bindMove("#Mp-btn", MpMove);
  bindMove("#E-btn", EMove);
  bindMove("#Ep-btn", EpMove);
  bindMove("#S-btn", SMove);
  bindMove("#Sp-btn", SpMove);
  bindMove("#x-btn", xMove);
  bindMove("#y-btn", yMove);
  bindMove("#z-btn", zMove);
}

/**
 *
 * @param {Array} array
 */
export function applySequence(array) {
  const svg = document.getElementById("cube");
  array.forEach((v) => {
    moves[v](svg);
  });
}

export function moveFromKeyDown(keyDownEvent) {
  const svg = document.getElementById("cube");
  const key = keyDownEvent.key;
  console.log(key);
  if (key === "r") {
    RMove(svg);
  } else if (key == "R") {
    RpMove(svg);
  } else if (key == "u") {
    UMove(svg);
  } else if (key == "U") {
    UpMove(svg);
  } else if (key == "d") {
    DMove(svg);
  } else if (key == "D") {
    DpMove(svg);
  } else if (key == "l") {
    LMove(svg);
  } else if (key == "L") {
    LpMove(svg);
  } else if (key == "f") {
    FMove(svg);
  } else if (key == "F") {
    FpMove(svg);
  } else if (key == "b") {
    BMove(svg);
  } else if (key == "B") {
    BpMove(svg);
  } else if (key == "s") {
    SMove(svg);
  } else if (key == "S") {
    SpMove(svg);
  } else if (key == "e") {
    EMove(svg);
  } else if (key == "E") {
    EpMove(svg);
  }
}
