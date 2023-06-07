const BOARD_ROWS = 32
const BOARD_COLS = 32

const app = document.getElementById("app") as HTMLCanvasElement
if (!app) throw new Error("No canvas found")
const ctx = app.getContext("2d")
if (!ctx) throw new Error("Context couldn't be initialized")

app.width = 800
app.height = 600

ctx.fillStyle = "#202020"
ctx?.fillRect(0, 0, app.width, app.height)

console.log(ctx)