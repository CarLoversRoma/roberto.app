# 🔍 CHECKLIST COMPLETA - Risoluzione Errore 401

## ⚠️ L'errore persiste? Segui TUTTI questi passaggi:

### ✅ Passo 1: Verifica il CLIENT_ID

**Il CLIENT_ID deve avere questo formato:**
```
123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com
```

❌ **NON funzionano:**
- API Key (inizia con `AIza...`)
- Service Account Email (termina con `.iam.gserviceaccount.com`)
- Altri tipi di credenziali

### ✅ Passo 2: Google Cloud Console - CONFIGURAZIONE CORRETTA

1. **Apri:** https://console.cloud.google.com/apis/credentials

2. **Trova la sezione "ID client OAuth 2.0"**
   - Se NON vedi nessun Client OAuth → devi crearne uno (vai a Passo 3)
   - Se ne hai uno esistente → click sul nome per modificarlo

3. **Crea nuovo Client OAuth 2.0** (se necessario):
   - Click "+ CREA CREDENZIALI"
   - Seleziona "ID client OAuth"
   - Tipo di applicazione: **"Applicazione web"** ⚠️ IMPORTANTE!
   - Nome: "Link Organizer"

4. **Configura le Origini JavaScript autorizzate:**
   
   Click su "+ AGGIUNGI URI" e inserisci **UNO ALLA VOLTA**:
   ```
   http://localhost:8000
   ```
   Click di nuovo su "+ AGGIUNGI URI":
   ```
   http://127.0.0.1:8000
   ```

   ⚠️ **ATTENZIONE:**
   - NO `https://` (usa `http://`)
   - NO trailing slash (`/` alla fine)
   - Porta esatta: `8000`

5. **URI di reindirizzamento autorizzati:**
   - Lascia VUOTO (non serve per questa app)

6. **SALVA**

7. **COPIA il CLIENT_ID** che appare (formato: `xxxxx.apps.googleusercontent.com`)

8. **ASPETTA 2-3 MINUTI** ⏰ (Google impiega tempo ad aggiornare)

---

### ✅ Passo 3: Verifica API Abilitate

1. Vai su: https://console.cloud.google.com/apis/library
2. Cerca: **"Google Drive API"**
3. Verifica che sia **ABILITATA** (deve dire "Gestisci" non "Abilita")
4. Se dice "Abilita" → cliccaci sopra!

---

### ✅ Passo 4: Nell'App

1. **Verifica server locale attivo:**
   - URL deve essere: `http://localhost:8000`
   - NON deve essere: `file:///...`

2. **Incolla il CLIENT_ID** nel campo (TUTTO, incluso `.apps.googleusercontent.com`)

3. **Click "Connetti Google Drive"**

4. **Popup Google:**
   - Se NON si apre → controlla popup blocker
   - Se vedi errore 401 → verifica di aver aspettato 2-3 minuti dopo il salvataggio

---

## 🔧 Risoluzione Problemi Comuni

### Problema: "redirect_uri_mismatch"
**Soluzione:** Aggiungi gli URI di reindirizzamento:
```
http://localhost:8000
http://127.0.0.1:8000
```

### Problema: "invalid_client" persiste
**Cause possibili:**
1. CLIENT_ID copiato male (spazi, caratteri mancanti)
2. Usato il tipo sbagliato di credenziali (non OAuth Client Web)
3. Non aspettato abbastanza dopo il salvataggio (aspetta 5 minuti)
4. Progetto sbagliato su Google Cloud Console

**Soluzione:**
- Crea un NUOVO Client OAuth 2.0 da zero
- Copia attentamente il CLIENT_ID
- Aspetta 5 minuti prima di testare

### Problema: Server locale non parte
**Soluzione:**
```powershell
# Prova porta diversa
python -m http.server 8080

# Poi usa http://localhost:8080
# E aggiungi http://localhost:8080 nelle origini autorizzate!
```

---

## 📝 Test Completo

1. ✅ Server locale su http://localhost:8000
2. ✅ CLIENT_ID formato corretto (`.apps.googleusercontent.com`)
3. ✅ Origini JavaScript: `http://localhost:8000` e `http://127.0.0.1:8000`
4. ✅ Google Drive API abilitata
5. ✅ Aspettato 2-3 minuti dopo salvataggio
6. ✅ CLIENT_ID incollato correttamente nell'app

Se TUTTI questi passaggi sono OK e l'errore persiste:
→ **Crea un NUOVO Client OAuth 2.0 completamente da zero**
