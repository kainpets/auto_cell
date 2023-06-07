"use strict";
const BOARD_ROWS = 32;
const BOARD_COLS = 32;
const app = document.getElementById("app");
if (!app)
    throw new Error("No canvas found");
const ctx = app.getContext("2d");
if (!ctx)
    throw new Error("Context couldn't be initialized");
app.width = 800;
app.height = 800;
ctx.fillStyle = "#202020";
ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, app.width, app.height);
console.log(ctx);
const CELL_WIDTH = app.width / BOARD_COLS;
const CELL_HEIGHT = app.height / BOARD_ROWS;
ctx.fillStyle = "red";
for (let i = 0; i < BOARD_ROWS; ++i) {
    const x = i * CELL_WIDTH;
    const y = i * CELL_HEIGHT;
    ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
}
