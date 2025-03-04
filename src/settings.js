export function toggleButtonCallbacks() {
  document
    .getElementById("tel-checkbox")
    .addEventListener("change", function () {
      if (this.checked) {
        document
          .getElementById("cube")
          .querySelectorAll(".edge-label")
          .forEach((item) => {
            item.setAttribute("display", "block");
          });
      } else {
        document
          .getElementById("cube")
          .querySelectorAll(".edge-label")
          .forEach((item) => {
            item.setAttribute("display", "none");
          });
      }
    });

  document
    .getElementById("tcl-checkbox")
    .addEventListener("change", function () {
      if (this.checked) {
        document
          .getElementById("cube")
          .querySelectorAll(".corner-label")
          .forEach((item) => {
            item.setAttribute("display", "block");
          });
      } else {
        document
          .getElementById("cube")
          .querySelectorAll(".corner-label")
          .forEach((item) => {
            item.setAttribute("display", "none");
          });
      }
    });

  document
    .getElementById("tol-checkbox")
    .addEventListener("change", function () {
      if (this.checked) {
        document
          .getElementById("cube")
          .querySelectorAll(".center-label")
          .forEach((item) => {
            item.setAttribute("display", "block");
          });
      } else {
        document
          .getElementById("cube")
          .querySelectorAll(".center-label")
          .forEach((item) => {
            item.setAttribute("display", "none");
          });
      }
    });
}

export function bindFaceColorPickers() {
  const bindFaceColorPicker = (face) => {
    document
      .getElementById(`${face}-color-picker`)
      .addEventListener("change", (event) => {
        resetCube();
        document
          .getElementById("cube")
          .querySelectorAll(`.${face}`)
          .forEach((item) => item.setAttribute("fill", event.target.value));
      });
  };

  bindFaceColorPicker("top");
  bindFaceColorPicker("front");
  bindFaceColorPicker("right");
  bindFaceColorPicker("back");
  bindFaceColorPicker("left");
  bindFaceColorPicker("bottom");
}

function resetCube() {
  const resetFace = (face) => {
    document.querySelectorAll(`.${face}`).forEach((item) => {
      item.setAttribute(
        "fill",
        document.getElementById(`${face}-color-picker`).value
      );
    });
  };
  resetFace("top");
  resetFace("front");
  resetFace("right");
  resetFace("back");
  resetFace("left");
  resetFace("bottom");
}
export function bindResetCube() {
  document.getElementById("reset-btn").addEventListener("click", resetCube);
}
