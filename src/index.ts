import { MessageFlags } from "discord-api-types/v10";
import { LabelBuilder } from "./builders/LabelBuilder";
import { StringSelectBuilder } from "./builders/StringSelectBuilder";
import { TextInputBuilder } from "./builders/TextInputBuilder";

type ModalComponent = LabelBuilder | StringSelectBuilder | TextInputBuilder;

export class ModalBuilder {
  public custom_id!: string;
  public title!: string;
  public components: ModalComponent[] = [];

  public setCustomId(id: string) {
    Reflect.set(this, "custom_id", id);
    return this;
  }

  public setTitle(title: string) {
    Reflect.set(this, "title", title);
    return this;
  }

  public setComponents(components: ModalComponent[]) {
    if (components.length > 5) {
      throw new Error("Modals can only have up to 5 top-level components");
    }
    Reflect.set(this, "components", components);
    return this;
  }

  public addComponents(...components: ModalComponent[]) {
    if (this.components.length + components.length > 5) {
      throw new Error("Modals can only have up to 5 top-level components");
    }
    Reflect.set(this, "components", [...this.components, ...components]);
    return this;
  }

  public toJSON() {
    return {
      custom_id: this.custom_id,
      title: this.title,
      components: this.components.map((c) => c.toJSON()),
    };
  }
}

// Re-export all builders for convenience
export * from "./builders";