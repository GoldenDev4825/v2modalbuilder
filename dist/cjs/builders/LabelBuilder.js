"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelBuilder = void 0;
class LabelBuilder {
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
exports.LabelBuilder = LabelBuilder;
