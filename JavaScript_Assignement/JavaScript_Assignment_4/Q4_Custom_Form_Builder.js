// Q4: Custom Form Builder (Forms + Classes)
// Run in a browser. FormBuilder generates the form dynamically.
"use strict";

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "dynamicForm";

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label + ": ";

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = true;

            label.appendChild(input);
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
            form.appendChild(document.createElement("br"));
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        form.appendChild(submitButton);

        const output = document.createElement("pre");
        output.id = "formOutput";

        form.addEventListener("submit", event => {
            event.preventDefault();
            output.textContent = JSON.stringify(this.getFormData(), null, 2);
        });

        this.container.appendChild(form);
        this.container.appendChild(output);
    }

    getFormData() {
        const form = this.container.querySelector("#dynamicForm");
        const formData = {};

        this.fields.forEach(field => {
            formData[field.name] = form.elements[field.name].value;
        });

        return formData;
    }
}

document.body.innerHTML = "<h2>Dynamic Form Builder</h2><div id='formContainer'></div>";

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" }
];

const formBuilder = new FormBuilder(fields, document.getElementById("formContainer"));
formBuilder.createForm();
