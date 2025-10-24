export class ModalBuilder {
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
    setComponents(components) {
        if (components.length > 5) {
            throw new Error("Modals can only have up to 5 top-level components");
        }
        Reflect.set(this, "components", components);
        return this;
    }
    addComponents(...components) {
        if (this.components.length + components.length > 5) {
            throw new Error("Modals can only have up to 5 top-level components");
        }
        Reflect.set(this, "components", [...this.components, ...components]);
        return this;
    }
    toJSON() {
        return {
            custom_id: this.custom_id,
            title: this.title,
            components: this.components.map((c) => c.toJSON()),
        };
    }
}
// Re-export all builders for convenience
export * from "./builders";
