# 🔧 Google Drive Auto-Backup - Guida Setup Rapida

## Setup Iniziale (Solo Prima Volta)

### 1. Ottieni CLIENT_ID da Google Cloud

1. Vai su [Google Cloud Console](https://console.cloud.google.com/)
2. Seleziona progetto "link-organizer" (o creane uno nuovo)
3. **Abilita Google Drive API**:
   - Menu: "API e servizi" → "Libreria"
   - Cerca: "Google Drive API"
   - Click: "Abilita"

4. **Crea credenziali OAuth 2.0**:
   - Menu: "API e servizi" → "Credenziali"
   - Click: "+ CREA CREDENZIALI" → "ID client OAuth"
   - Tipo: "Applicazione web"
   - Nome: "Link Organizer"
   - **Origini JavaScript autorizzate**:
     - `http://localhost`
     - `file://`
   - Click: "Crea"

5. **Copia il CLIENT_ID** (formato: `123456789-xxx.apps.googleusercontent.com`)

### 2. Connetti l'App

1. Apri `index.html`
2. Scrolla fino alla sezione "☁️ Google Drive Auto-Backup"
3. Incolla il CLIENT_ID nel campo
4. Click "🔗 Connetti Google Drive"
5. Autorizza nel popup Google

### 3. Fatto! ✅

Da questo momento:
- **Ogni volta che chiudi l'app** → backup automatico su Google Drive
- **Ultimi 10 backup** conservati automaticamente
- **Pulsante "Ripristina Backup"** per recuperare dati

## Comandi Rapidi

### Ripristinare backup originale (se qualcosa va storto)
```powershell
Copy-Item "index.html.backup-2025-12-09" "index.html"
```

## Note
- Token OAuth salvato in localStorage (sicuro, come Firebase)
- Backup salvati nel tuo Google Drive personale
- Quota gratuita più che sufficiente
- Nessuna configurazione richiesta dopo il primo setup
