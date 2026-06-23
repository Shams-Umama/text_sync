# Bidirectional Rich Text Sync Across Iframes

## Overview

This project demonstrates real-time bidirectional synchronization between two rich text editors running inside separate iframes using the `window.postMessage()` API.

Each editor supports:

* Bold formatting
* Italic formatting
* Strikethrough formatting
* Real-time text synchronization

The host page acts as a message broker and relays updates between both iframes.

---

## Features

### Core Features

* Two independent iframes
* Rich text editor using `contenteditable`
* Bold, Italic, and Strikethrough formatting
* Real-time bidirectional synchronization
* Cross-frame communication using `postMessage`
* Infinite loop prevention

### Nice to Have

* Origin validation for incoming messages
* Active toolbar state indication
* Sync status indicator

### Bonus Features

* Real-time text input synchronization
* Action log showing all synchronization events

---

## Architecture

Frame A → Host → Frame B

Frame B → Host → Frame A

The host page listens for messages from each iframe and forwards them to the opposite iframe.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* window.postMessage API

---

## Project Structure

iframe-richtext-sync/

├── host.html

├── host.js

├── frameA.html

├── frameA.js

├── frameB.html

├── frameB.js

└── style.css

---

## How to Run

1. Download or clone the repository.
2. Open `host.html` in a browser.
3. Start typing or applying formatting in either editor.
4. Observe real-time synchronization.

---

## Author

Shams Umama
