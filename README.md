# V2 Discord Modal Builder

A **TypeScript-first builder library** for Discord's experimental **V2 Modals** and components.  
It provides strongly typed, chainable builders for creating full-screen modals with labels, text inputs, and select menus — with **zero raw JSON hassle**.

> 🔗 Reference: [Discord Developer Docs – Components](https://discord.com/developers/docs/components/reference)  
> 🔗 Support/Hangout Discord: [Golden Development](https://discord.goldendev.net)  
> 🔗 My YouTube Channel: [Golden Development](https://youtube.goldendev.net)  
> 🔗 My Discord Bot: [Golden Bot](https://goldenbot.net)

---

## ✨ Features

- Build **Discord V2 Modals** with type safety
- Chainable, ergonomic API
- `Label (type 18)` wrapper component support
- Works with **discord.js**, raw REST, or any API client
- Outputs valid **Discord API payloads**

---

## 🧱 Included Builders

| Component            | Builder Class          | Description |
|----------------------|------------------------|-------------|
| Modal                | `V2ModalBuilder`       | Define `custom_id`, `title`, and child components |
| Label Wrapper (18)   | `V2LabelBuilder`       | Pairs a label/description with an inner component |
| Text Input           | `V2TextInputBuilder`   | Modal text fields (short/paragraph) |
| String Select        | `V2StringSelectBuilder`| Dropdowns inside a label wrapper |

---

## 📦 Installation

```bash
npm install v2modalbuilder
```

```ts
import {
  V2ModalBuilder,
  V2LabelBuilder,
  V2TextInputBuilder,
  V2StringSelectBuilder,
} from "v2modalbuilder";
import { TextInputStyle } from "discord-api-types/v10";

const modal = new V2ModalBuilder()
  .setCustomId("bug_modal")
  .setTitle("Bug Report")
  .addComponents(
    new V2LabelBuilder()
      .setLabel("What's your favorite bug?")
      .setComponent(
        new V2StringSelectBuilder()
          .setCustomId("bug_string_select")
          .setPlaceholder("Choose...")
          .addOptions(
            { label: "Ant", value: "ant", description: "(best option)", emoji: { name: "🐜" } },
            { label: "Butterfly", value: "butterfly", emoji: { name: "🦋" } },
            { label: "Caterpillar", value: "caterpillar", emoji: { name: "🐛" } }
          )
      ),
    new V2LabelBuilder()
      .setLabel("Why is it your favorite?")
      .setDescription("Please provide as much detail as possible!")
      .setComponent(
        new V2TextInputBuilder()
          .setCustomId("bug_explanation")
          .setStyle(TextInputStyle.Paragraph)
          .setMinLength(1000)
          .setMaxLength(4000)
          .setPlaceholder("Write your explanation here...")
          .setRequired(true)
      )
  );

interaction.showModal(modal);
```