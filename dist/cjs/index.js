"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBuilder = void 0;
class ModalBuilder {
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
exports.ModalBuilder = ModalBuilder;
// Re-export all builders for convenience
__exportStar(require("./builders"), exports);
