// Q1: Product manager using event delegation on the parent <ul>.

const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

let currentlyEditingItem = null;
let currentlyEditingInput = null;

function saveCurrentEdit() {
    if (currentlyEditingItem === null) return;

    const productName = currentlyEditingInput.value.trim();
    if (productName !== "") {
        currentlyEditingItem.querySelector(".product-name").textContent = productName;
    }

    currentlyEditingItem.classList.remove("editing");
    currentlyEditingItem = null;
    currentlyEditingInput = null;
}

function startEditing(productItem) {
    if (currentlyEditingItem === productItem) return;
    saveCurrentEdit();

    const nameElement = productItem.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = nameElement.textContent;

    nameElement.replaceWith(editInput);
    productItem.classList.add("editing");
    currentlyEditingItem = productItem;
    currentlyEditingInput = editInput;
    editInput.focus();
    editInput.select();
}

function finishEditing(productItem) {
    if (currentlyEditingItem !== productItem) return;

    const editInput = productItem.querySelector(".edit-input");
    const nameElement = document.createElement("span");
    nameElement.className = "product-name";
    nameElement.textContent = editInput.value.trim() || "Untitled product";
    editInput.replaceWith(nameElement);

    productItem.classList.remove("editing");
    currentlyEditingItem = null;
    currentlyEditingInput = null;
}

function addProduct(productName) {
    const productItem = document.createElement("li");
    const nameElement = document.createElement("span");
    nameElement.className = "product-name";
    nameElement.textContent = productName;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    productItem.append(nameElement, editButton, deleteButton);
    productList.appendChild(productItem);
}

productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const productName = productInput.value.trim();
    if (productName === "") return;

    saveCurrentEdit();
    addProduct(productName);
    productInput.value = "";
});

// One listener handles clicks on all current and future Edit/Delete buttons.
productList.addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button[data-action]");
    if (!clickedButton || !productList.contains(clickedButton)) return;

    const productItem = clickedButton.closest("li");
    if (clickedButton.dataset.action === "edit") {
        startEditing(productItem);
    } else if (clickedButton.dataset.action === "delete") {
        if (currentlyEditingItem === productItem) {
            currentlyEditingItem = null;
            currentlyEditingInput = null;
        }
        productItem.remove();
    }
});

// Clicking outside the item being edited saves the edit.
document.addEventListener("click", function (event) {
    if (currentlyEditingItem && !currentlyEditingItem.contains(event.target)) {
        finishEditing(currentlyEditingItem);
    }
});

productList.addEventListener("keydown", function (event) {
    if (event.target.classList.contains("edit-input") && event.key === "Enter") {
        finishEditing(event.target.closest("li"));
    }
});

addProduct("Keyboard");
addProduct("Mouse");
