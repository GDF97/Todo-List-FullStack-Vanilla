const infoDisplay = document.getElementById("informacoes");

const fetchData = async () => {
  const configAPI = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const url = "http://localhost/TodoList/back-end/php/api/SelectAPI.php";

  try {
    const response = await fetch(url, configAPI);
    const data = await response.json();
    console.log("Data from API: ", data);
    infoDisplay.innerHTML = "";
    data.forEach((element) => {
      infoDisplay.innerHTML +=
        element.nm_tarefa +
        `<button onclick='deleteData(${element.id_tarefa})'>Deleter</button> <button onclick='alertando(${element.id_tarefa})'> Editar </button> <br>`;
    });
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const insertData = async (tarefa) => {
  console.log("iniciando o insert");
  const configAPI = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tarefa }),
  };
  const url = "http://localhost/TodoList/back-end/php/api/InsertAPI.php";

  try {
    const response = await fetch(url, configAPI);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  fetchData();
};

const updateData = async (id, tarefa) => {
  console.log("iniciando o insert");
  const configAPI = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, tarefa }),
  };
  const url = "http://localhost/TodoList/back-end/php/api/UpdateAPI.php";

  try {
    const response = await fetch(url, configAPI);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  fetchData();
};

const alertando = (id) => {
  let novatarefa = prompt("Atualize o nome da nova tarefa");
  if (!novatarefa) return;
  updateData(id, novatarefa);
};

async function deleteData(id) {
  console.log("iniciando o insert");
  const configAPI = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  };
  const url = "http://localhost/TodoList/back-end/php/api/DeleteAPI.php";

  try {
    const response = await fetch(url, configAPI);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  fetchData();
}

const btnAdd = document.getElementById("enviarTarefa");

btnAdd.addEventListener("click", () => {
  const value = document.getElementById("input").value;

  insertData(value);
});

const btnUPDATE = document.getElementById("atualizarTarefa");

btnUPDATE.addEventListener("click", () => {
  const inputId = document.getElementById("inputID").value;
  const value = document.getElementById("inputTarefa").value;

  updateData(inputId, value);
});

const btnDelete = document.getElementById("deletarTarefa");

btnDelete.addEventListener("click", () => {
  const inputId = document.getElementById("inputIDDelete").value;

  deleteData(inputId);
});
