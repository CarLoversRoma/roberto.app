# 🚀 Google Drive Auto-Backup - Setup Rapido

## Setup in 2 Click ⚡

L'integrazione Google Drive è ora **semplicissima**!

### Modalità Setup Rapido (Consigliata)

1. Apri `index.html` nel browser
2. Vai alla sezione **"☁️ Google Drive Auto-Backup"**
3. Click su **"🚀 Connetti Google Drive (Setup Rapido)"**
4. Autorizza l'accesso nel popup di Google
5. ✅ **Fatto!**

### Cosa Succede Automaticamente

- ✓ **Backup automatico** ogni volta che chiudi l'app
- ✓ **Ultimi 10 backup conservati** su Google Drive
- ✓ **Ripristino facile** con il pulsante "📥 Ripristina Backup"
- ✓ **Backup manuale** disponibile quando vuoi

---

## Configurazione Avanzata (Opzionale)

Se preferisci usare il **tuo progetto Google Cloud** personale:

### 1. Crea il Progetto Google Cloud

1. Vai su [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Crea un nuovo progetto o selezionane uno esistente
3. **Abilita Google Drive API**:
   - Menu: "API e servizi" → "Libreria"
   - Cerca: "Google Drive API"
   - Click: "Abilita"

### 2. Crea Credenziali OAuth 2.0

1. Menu: "API e servizi" → "Credenziali"
2. Click: "+ CREA CREDENZIALI" → "ID client OAuth"
3. Tipo: **"Applicazione web"**
4. Nome: "Link Organizer"
5. **Origini JavaScript autorizzate**:
   ```
   http://localhost:8000
   http://127.0.0.1:8000
   ```
6. Click: "Crea"
7. **Copia il CLIENT_ID** (formato: `123456789012-xxxxx.apps.googleusercontent.com`)

### 3. Connetti con CLIENT_ID Personalizzato

1. Nell'app, click su **"⚙️ Configurazione Avanzata"**
2. Incolla il tuo CLIENT_ID
3. Click "🔗 Connetti Google Drive"
4. Autorizza nel popup Google

---

## Risoluzione Problemi

Se incontri errori durante la connessione, l'app mostrerà messaggi dettagliati con le azioni da intraprendere.

**Errori comuni:**
- **redirect_uri_mismatch**: Verifica gli URI autorizzati nella Google Cloud Console
- **invalid_client**: Controlla di aver copiato correttamente tutto il CLIENT_ID
- **Popup bloccato**: Consenti i popup per questo sito

---

## Note Tecniche

- Token OAuth salvato in localStorage (come Firebase, sicuro lato client)
- Backup salvati nel tuo Google Drive personale
- Quota gratuita Google Drive abbondante per backup JSON
- Nessuna configurazione richiesta dopo il primo setup
- Puoi passare dalla modalità semplice a quella avanzata in qualsiasi momento
