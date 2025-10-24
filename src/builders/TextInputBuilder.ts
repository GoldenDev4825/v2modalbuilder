import {
  ComponentType,
  APITextInputComponent,
  TextInputStyle,
} from "discord-api-types/v10";

export class TextInputBuilder {
  public readonly type: ComponentType.TextInput = ComponentType.TextInput;
  public custom_id!: string;
  public style: TextInputStyle = TextInputStyle.Short;
  public min_length?: number;
  public max_length?: number;
  public placeholder?: string;
  public required: boolean = true;
  public value?: string;

  public setCustomId(id: string) {
    Reflect.set(this, "custom_id", id);
    return this;
  }

  public setStyle(style: TextInputStyle) {
    Reflect.set(this, "style", style);
    return this;
  }

  public setMinLength(min: number) {
    Reflect.set(this, "min_length", min);
    return this;
  }

  public setMaxLength(max: number) {
    Reflect.set(this, "max_length", max);
    return this;
  }

  public setPlaceholder(text: string) {
    Reflect.set(this, "placeholder", text);
    return this;
  }

  public setRequired(required: boolean) {
    Reflect.set(this, "required", required);
    return this;
  }

  public setValue(value: string) {
    Reflect.set(this, "value", value);
    return this;
  }

  public toJSON(): Omit<APITextInputComponent, "label"> {
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