# Storybook MCP Server

⚠️ This tool was created for testing purposes and is not recommended for use in production environments.

<a href="https://glama.ai/mcp/servers/@m-yoshiro/storybook-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@m-yoshiro/storybook-mcp/badge" alt="Storybook Server MCP server" />
</a>

<!-- This project provides a custom [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/servers) server that integrates with Storybook to support UI implementation from Figma designs.

It enables AI tools (like Cursor, Claude, or Roo) to query available UI components, retrieve usage examples, and help non-developers (especially designers) collaborate more directly in frontend development workflows. -->

<!-- ---

## 🎯 Purpose

This MCP server is designed to:

- Help AI models suggest usable UI components based on design context
- Enable designers to access component usage without writing code
- Accelerate the process of implementing Figma designs using existing Storybook components
- Bridge design and development using natural language -->

---

## Getting Started

Before you begin, you need to prepare your Storybook static files.
https://storybook.js.org/docs/sharing/publish-storybook


### 1. Clone the repository

```bash
git clone https://github.com/m-yoshiro/storybook-mcp.git
cd storybook-mcp
```

### 2. Install dependencies

We recommend using [Bun](https://bun.sh)

```bash
bun install
# or
npm install
```

### 3. Build

```bash
bun run build
# or
npm run build
```

### 4. Set up

```json
{
  "mcpServers": {
    "storybook-mcp": {
      "command": "node",
      "args": [
        "/< your path>/index.js",
        // Optional: path to your Storybook static json file
        "/< your path>/index.json"
      ]
    }
  }
}
```

The server will load your Storybook data and expose MCP tools to external agents.

---

## 🔧 Available Tools

| Tool Name                     | Description                                                                 | Parameters |
|------------------------------|-----------------------------------------------------------------------------|------------|
| `list-components`            | Lists all available components from Storybook                               | `path` (optional): Path to the index.json or stories.json file (optional if default path is provided) |
| `find-components-by-name`     | Finds components based on a keyword (partial match supported)               | `name`: Component name or keyword to search for<br>`path` (optional): Path to the index.json or stories.json file (optional if default path is provided) |
<!-- | `get-component-details`      | Shows metadata including props, default values, types, and descriptions     | -->
<!-- | `get-component-usage-examples` | Shows how components are used in stories (JSX examples)                    |
| `get-component-variants`     | Returns variants defined in stories (e.g. primary, secondary, disabled)     |
| `get-component-screenshot`   | (Optional) Returns screenshot or preview image                              |
| `suggest-components-for-description` | Suggests components based on Figma-like description               | -->

---

<!-- ## 💡 Example Use Cases

### 🔍 Find a matching component for a Figma element

Ask the AI:
> "What Storybook component matches this 'CTA Button' in my Figma design?"

➡️ MCP server runs:
- `find-component-by-name("cta button")`
- `get-component-details("PrimaryButton")`
- `get-component-usage-examples("PrimaryButton")`

### ✨ Auto-generate UI code from a Figma section

Ask the AI:
> "Generate a contact form using our design system"

➡️ MCP server:
- Suggests `TextField`, `Textarea`, `PrimaryButton`
- Provides JSX using those components

---

## 🧠 Why MCP?

MCP (Model Context Protocol) provides a standard interface for large language models to safely and efficiently access contextual information like UI components, documentation, and code.

By integrating your Storybook via MCP:

- AI agents can suggest components intelligently
- Designers and developers get a shared source of truth
- Natural language is enough to drive UI generation

---

## 📁 Project Structure

```
storybook-mcp/
├── tools/
│   ├── list-components.ts
│   ├── get-component-details.ts
│   ├── get-component-usage-examples.ts
│   └── ...
├── config.ts
├── index.ts
└── README.md
```

---

## 🤝 Contributing

If you have ideas to improve or want to contribute new tools, feel free to open a PR or issue!

---

## 📜 License

MIT -->