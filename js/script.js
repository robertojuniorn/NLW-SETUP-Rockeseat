const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleString("pt-pt").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  alert(dayExists)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  alert("Dia adicionado com sucesso")
  nlwSetup.addDay(today)
}

// Função para salvar os dados adicionados

function save() {
  localStorage.setItem("NLWSetupt@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetupt@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

// const data = {
//   run: ["01-01", "02-01", "03-01"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }
