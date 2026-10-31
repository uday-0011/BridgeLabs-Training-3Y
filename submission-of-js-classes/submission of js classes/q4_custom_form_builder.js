// Q4 – Custom Form Builder (Forms + Classes)
"use strict";

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
        this.render();
    }

    render() {
        const form = document.createElement("form");
        form.id = "generatedForm";

        this.fields.forEach((field, index) => {
            const label = document.createElement("label");
            label.htmlFor = `field-${index}`;
            label.textContent = field.label;

            const input = document.createElement("input");
            input.id = `field-${index}`;
            input.name = field.name;
            input.type = field.type || "text";
            input.required = Boolean(field.required);

            form.appendChild(label);
            form.appendChild(input);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        form.appendChild(submitButton);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = this.getFormData();
            document.getElementById("formOutput").textContent = JSON.stringify(data, null, 2);
        });

        this.container.replaceChildren(form);
    }

    getFormData() {
        const form = this.container.querySelector("form");
        const data = {};
        this.fields.forEach((field) => {
            const input = form.elements[field.name];
            data[field.name] = input.type === "checkbox" ? input.checked : input.value;
        });
        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username", required: true },
    { type: "email", label: "Email", name: "email", required: true },
    { type: "checkbox", label: "Subscribe to updates", name: "subscribe" }
];

new FormBuilder(fields, document.getElementById("formRoot"));