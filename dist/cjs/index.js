"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2ModalBuilder = exports.V2LabelBuilder = exports.V2StringSelectBuilder = exports.V2TextInputBuilder = void 0;
const v10_1 = require("discord-api-types/v10");
// ---------------- TEXT INPUT ----------------
class V2TextInputBuilder {
    constructor() {
        this.type = v10_1.ComponentType.TextInput;
        this.style = v10_1.TextInputStyle.Short;
        this.required = true;
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setStyle(style) {
        Reflect.set(this, "style", style);
        return this;
    }
    setMinLength(min) {
        Reflect.set(this, "min_length", min);
        return this;
    }
    setMaxLength(max) {
        Reflect.set(this, "max_length", max);
        return this;
    }
    setPlaceholder(text) {
        Reflect.set(this, "placeholder", text);
        return this;
    }
    setRequired(required) {
        Reflect.set(this, "required", required);
        return this;
    }
    setValue(value) {
        Reflect.set(this, "value", value);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            custom_id: this.custom_id,
            style: this.style,
            min_length: this.min_length,
            max_length: this.max_length,
            placeholder: this.placeholder,
            required: this.required,
            value: this.value,
        };
    }
}
exports.V2TextInputBuilder = V2TextInputBuilder;
class V2StringSelectBuilder {
    constructor() {
        this.type = v10_1.ComponentType.StringSelect;
        this.options = [];
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setPlaceholder(text) {
        Reflect.set(this, "placeholder", text);
        return this;
    }
    addOptions(...options) {
        Reflect.set(this, "options", [...this.options, ...options]);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            custom_id: this.custom_id,
            placeholder: this.placeholder,
            options: this.options,
        };
    }
}
exports.V2StringSelectBuilder = V2StringSelectBuilder;
// ---------------- LABEL ----------------
class V2LabelBuilder {
    constructor() {
        this.type = 18;
    }
    setId(id) {
        Reflect.set(this, "id", id);
        return this;
    }
    setLabel(text) {
        Reflect.set(this, "label", text);
        return this;
    }
    setDescription(desc) {
        Reflect.set(this, "description", desc);
        return this;
    }
    setComponent(component) {
        Reflect.set(this, "component", component);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            id: this.id,
            label: this.label,
            description: this.description,
            component: this.component.toJSON(),
        };
    }
}
exports.V2LabelBuilder = V2LabelBuilder;
// ---------------- MODAL ----------------
class V2ModalBuilder {
    constructor() {
        this.components = [];
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setTitle(title) {
        Reflect.set(this, "title", title);
        return this;
    }
    addComponents(...labels) {
        Reflect.set(this, "components", [...this.components, ...labels]);
        return this;
    }
    toJSON() {
        return {
            custom_id: this.custom_id,
            title: this.title,
            components: this.components.map(c => c.toJSON()),
        };
    }
}
exports.V2ModalBuilder = V2ModalBuilder;
