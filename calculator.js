const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expr = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.dataset.val ?? btn.textContent.trim();

    if (val === "=") {
      try {
        expr = String(eval(expr)); // ensure it's a string after eval
        input.value = expr;
      } catch {
        expr = "";
        input.value = "Error";
      }
      return;
    }

    if (val === "AC") {
      expr = "";
      input.value = "";
      return;
    }

    if (val === "C") {
      expr = expr.slice(0, -1);
      input.value = expr;
      return;
    }

    // Optional: block double operators like ++, **, etc.
    const ops = ["+", "-", "*", "/"];
    const last = expr.slice(-1);
    if (ops.includes(last) && ops.includes(val)) return;

    expr += val;
    input.value = expr;
  });
});
