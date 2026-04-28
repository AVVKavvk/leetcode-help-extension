# LeetCode-Help: Company Tags for Coding Problems

**The ultimate browser extension to see which companies ask specific LeetCode problems for FREE.**

**LeetCode-Help** is a lightweight Chrome and Brave extension designed for software engineers and students preparing for technical interviews. It bypasses the need for premium subscriptions by utilizing a community-maintained database of company-wise interview questions.

## 🚀 Key Features

- **🔍 Live Search**: Toggle a floating menu to search for specific companies (Google, Amazon, Meta, etc.).

- **📂 Huge Database**: Access data for 3,000+ problems, sorted numerically by Problem ID.

- **⚡ Lightweight & Fast**: Zero-latency UI injected directly into the LeetCode problem page.

- **🛡️ Privacy Focused**: Runs locally in your browser with no external tracking.

## 🛠️ Installation Guide

Since this is a community project, you can install it manually on **Chrome, Brave**, or any Chromium-based browser in under 60 seconds:

### Step 1: Download the Extension

1. Click the green **Code** button at the top of this repository.

2. Select **Download ZIP** and extract it to a folder on your computer.

### Step 2: Enable Developer Mode

1. Open your browser and navigate to `chrome://extensions/` (or `brave://extensions/`).

2. In the top right corner, toggle the **Developer mode** switch to **ON**.

### Step 3:Load the Extension

1. Click the **Load unpacked** button that appears.

2. Select the folder where you extracted the files (the folder containing `manifest.json`).

3. **Done!** Go to any LeetCode problem page, and you'll see the white **LeetCode Help** icon in the bottom right.

## 📂 Project Structure

```txt
.
├── resources/        # Extension icons and assets
├── data.json         # The master database (Sorted by ID)
├── manifest.json     # Extension configuration
├── content.js        # Logic for UI injection and search
└── styles.css        # Custom styling for the floating menu
```

## 📊 How the Data is Generated

The `data.json` is generated using a custom Python ETL pipeline that scrapes and merges community-maintained CSVs. To update the data:

## 🤝 Contributing

Want to add more companies or update the problem list?

1. Fork the repo.

2. Update the data.json or suggest a new data source.

3. Submit a Pull Request!

## 📄 License

This project is licensed under the MIT License - feel free to use and modify it.
