# Visor PDF Base64

Este proyecto es una aplicación sencilla hecha con **Node.js + Express + JavaScript puro** que permite visualizar documentos **PDF en base64** desde un navegador.  
Incluye un pequeño frontend con un campo de texto para pegar el código base64 y un visor de PDF integrado en un `<iframe>`.

---

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [npm](https://www.npmjs.com/) (se instala junto con Node)

---

## 📦 Instalación

1. Clonar o descargar este repositorio:
   ```bash
   git clone https://github.com/usuario/visor-pdf-b64.git
   cd visor-pdf-b64
   
2. Instalar dependencias:
   ```bash
   npm install

## ▶️ Ejecución
1. Iniciar el servidor:
   ```bash
   node server.js
   
2. Abrir en el navegador:
   http://localhost:3000

## 🖥️ Uso

- Pega el código base64 de un PDF en el área de texto de la izquierda.
- Haz clic en Visualizar.
- El PDF se mostrará en el panel derecho.
- Puedes pegar y visualizar diferentes PDFs sin recargar la página.


## 📂 Estructura del proyecto
   ```bash
     visor-pdf-b64/
     ├─ public/
     │   └─ index.html     # Frontend (formulario + visor PDF)
     ├─ server.js          # Servidor Express
     ├─ package.json       # Configuración del proyecto
     └─ README.md