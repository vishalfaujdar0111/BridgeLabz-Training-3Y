// Q1: Dynamic Product List Manager using event delegation.
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

// Add a new product to the list.
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const name = document.createElement("span");
  name.className = "product-name";
  name.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  listItem.append(name, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
});

// Save an item currently in inline edit mode.
function saveEditedItem(item) {
  if (!item) return;
  const editor = item.querySelector(".editor");
  if (!editor) return;

  const updatedName = editor.value.trim();
  const name = document.createElement("span");
  name.className = "product-name";
  name.textContent = updatedName || editor.dataset.original;
  editor.replaceWith(name);
}

// Event delegation: one listener handles all Edit/Delete buttons.
productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || !productList.contains(button)) return;

  const item = button.closest("li");
  if (button.dataset.action === "delete") {
    item.remove();
    return;
  }

  if (button.dataset.action === "edit") {
    // Save any other item being edited before opening this one.
    const previousEditor = productList.querySelector(".editor");
    if (previousEditor) saveEditedItem(previousEditor.closest("li"));

    const name = item.querySelector(".product-name");
    if (!name) return;
    const editor = document.createElement("input");
    editor.className = "editor";
    editor.type = "text";
    editor.value = name.textContent;
    editor.dataset.original = name.textContent;
    name.replaceWith(editor);
    editor.focus();
    editor.select();
  }
});

// Clicking outside the edited list item automatically saves the edit.
document.addEventListener("click", (event) => {
  const editor = productList.querySelector(".editor");
  if (editor && !editor.closest("li").contains(event.target)) {
    saveEditedItem(editor.closest("li"));
  }
});

// Pressing Enter or leaving the input also saves the current edit.
productList.addEventListener("keydown", (event) => {
  if (event.target.classList.contains("editor") && event.key === "Enter") {
    saveEditedItem(event.target.closest("li"));
  }
});
