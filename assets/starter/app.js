const STORAGE_KEY = "workbook-app-mvp-v1";

const defaultState = {
  exampleInput: 0,
};

function loadState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState(nextState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

// Replace with named, workbook-derived domain calculations and parity tests.
function calculateExample(value) {
  return Number.isFinite(value) ? value : 0;
}

let state = loadState();

const form = document.querySelector("#starter-form");
const input = document.querySelector("#example-input");
const result = document.querySelector("#example-result");
const saveStatus = document.querySelector("#save-status");

function render() {
  input.value = String(state.exampleInput ?? 0);
  result.textContent = new Intl.NumberFormat().format(calculateExample(Number(state.exampleInput)));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state = { ...state, exampleInput: Number(input.value) };
  saveState(state);
  render();
  saveStatus.textContent = "Saved in this browser";
});

render();
