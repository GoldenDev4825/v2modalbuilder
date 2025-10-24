import { TextInputBuilder } from "./TextInputBuilder";
import { StringSelectBuilder } from "./StringSelectBuilder";

export class LabelBuilder {
  public readonly type: number = 18;
  public id?: number;
  public label!: string;
  public description?: string;
  public component!: TextInputBuilder | StringSelectBuilder;

  public setId(id: number) {
    Reflect.set(this, "id", id);
    return this;
  }

  public setLabel(text: string) {
    Reflect.set(this, "label", text);
    return this;
  }

  public setDescription(desc: string) {
    Reflect.set(this, "description", desc);
    return this;
  }

  public setComponent(component: TextInputBuilder | StringSelectBuilder) {
    Reflect.set(this, "component", component);
    return this;
  }

  public toJSON() {
    return {
      type: this.type,
      id: this.id,
      label: this.label,
      description: this.description,
      component: this.component.toJSON(),
    };
  }
}