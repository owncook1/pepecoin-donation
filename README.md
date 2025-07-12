# 🪙 Pepecoin Donation Widget

A modern, native Web Component to display your Pepecoin donation QR and address.  
✨ Works anywhere: React, Svelte, Vue, plain HTML, Wordpress, etc.


---

## 🚀 Features
✅ Fully native – no framework needed  
✅ Shadow DOM – style isolation  
✅ Customizable title & color via attributes  
✅ Lightweight, fast, free CDN hosting

---

## 🔧 Installation

Add this to your HTML (replace `v1.0.0` with your actual tag):

```html
<script src="https://cdn.jsdelivr.net/gh/owncook1/pepecoin-donation@v1.0.1/pepecoin-donation.js"></script>
````

---

## 🧩 Usage

Add the custom tag anywhere:

```html
<pepecoin-donation
  address="PEPE123abc..."
  title="Support My Project ❤️"
  color="#e91e63">
</pepecoin-donation>
```

### ✅ Attributes

| Attribute |        Default       | Description                     |
| :-------: | :------------------: | ------------------------------- |
|  address  | (none, must provide) | Your Pepecoin wallet address    |
|   title   |   "Donate Pepecoin"  | Title text above QR             |
|   color   |       "#4CAF50"      | Accent color for border & title |

If you don’t provide `title` or `color`, defaults are used.

---

## ⚡ Works in:

* ✅ React
* ✅ Svelte / SvelteKit
* ✅ Vue
* ✅ Astro
* ✅ Plain HTML / static sites
* ✅ Wordpress / Webflow / any HTML editor

---

## 🏗 Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Test Pepecoin Donate</title>
        <script src="https://cdn.jsdelivr.net/gh/owncook1/pepecoin-donation@v1.0.1/pepecoin-donation.js"></script>

    </head>
    <body>
        <pepecoin-donation
            address="PqyhjZSdhQam4Biedt1uahE2gSdos38yo5"
            title="Donate Pepecoin"
        >
        </pepecoin-donation>
    </body>
</html>


```

---

## 📦 How it works

* One JS file defines `<pepecoin-donation>`
* Uses Shadow DOM so your site styles won’t break it
* QR generated dynamically from your address

---

## 📜 License

MIT

---

## ✨ Created by [OwnCook](https://github.com/owncook1)

```

