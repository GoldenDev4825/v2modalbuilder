import {
  ComponentType,
  APISelectMenuComponent,
  APIMessageComponentEmoji,
} from "discord-api-types/v10";

export interface StringSelectOption {
  label: string;
  value: string;
  description?: string;
  emoji?: APIMessageComponentEmoji;
  default?: boolean;
}

export class StringSelectBuilder {
  public readonly type: ComponentType.StringSelect = ComponentType.StringSelect;
  public custom_id!: string;
  public placeholder?: string;
  public options: StringSelectOption[] = [];

  public setCustomId(id: string) {
    Reflect.set(this, "custom_id", id);
    return this;
  }

  public setPlaceholder(text: string) {
    Reflect.set(this, "placeholder", text);
    return this;
  }

  public addOptions(...options: StringSelectOption[]) {
    Reflect.set(this, "options", [...this.options, ...options]);
    return this;
  }

  public toJSON(): APISelectMenuComponent {
    return {
      type: this.type,
      custom_id: this.custom_id,
      placeholder: this.placeholder,
      options: this.options,
    };
  }
}