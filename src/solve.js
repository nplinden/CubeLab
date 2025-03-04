const edges = [
  // Bottom
  ["23", "19"],
  ["24", "7"],
  ["21", "11"],
  ["22", "15"],
  // Middle
  ["14", "20"],
  ["16", "10"],
  ["12", "6"],
  ["8", "18"],
  // Top
  ["1", "17"],
  ["2", "13"],
  ["3", "9"],
  ["4", "5"],
];

export function findEdge(first, second) {
  const svg = document.getElementById("cube");
  for (const edge of edges) {
    const stickers = [
      svg.getElementById(edge[0]).getAttribute("fill"),
      svg.getElementById(edge[1]).getAttribute("fill"),
    ];
    if (stickers[0] === first && stickers[1] === second) {
      return edge;
    } else if (stickers[1] === first && stickers[0] === second) {
      return [edge[1], edge[0]];
    }
  }
}
