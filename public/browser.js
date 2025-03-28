// const { response } = require("../app");

console.log("FrontEnd JS ishga tushdi");

function itemTemplete(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li> `;
}

let createField = document.getElementById("create-field");
console.log(createField);
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); // STOP: traditional API

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplete(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qayata harakat qiling!");
    });
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete!")) {
      axios
        .post("/delete-item", { id: event.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qilib ko`ring");
        });
    } else {
      alert("Ok You did not delete item!");
    }
  }

  if (event.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      event.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: event.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          event.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {});
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
