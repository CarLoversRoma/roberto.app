# 🐛 Bug Fix: Validazione CLIENT_ID

## Problema Risolto

**Sintomo**: L'indicatore mostrava "✓ Valido" ma cliccando "Connetti Google Drive" appariva l'errore "CLIENT_ID non valido".

## Causa del Bug

Quando passavi dalla modalità **Setup Rapido** a **Usa CLIENT_ID Personalizzato**:

1. ✅ L'UI cambiava correttamente (mostrando il campo CLIENT_ID)
2. ✅ La validazione in tempo reale funzionava (mostrando "✓ Valido")
3. ❌ **MA** il flag interno `GDRIVE_USE_PRESET_KEY` rimaneva su `"true"`

Quindi quando cliccavi "Connetti":
- La funzione `getClientId()` vedeva `usePreset = true`
- Ignorava il tuo CLIENT_ID personalizzato
- Usava il CLIENT_ID predefinito
- La validazione falliva perché validava il CLIENT_ID predefinito invece del tuo

## Soluzione Implementata

Ora quando clicchi:
- **"Usa CLIENT_ID Personalizzato"** → imposta `GDRIVE_USE_PRESET_KEY = "false"`
- **"Torna al Setup Rapido"** → imposta `GDRIVE_USE_PRESET_KEY = "true"`

### Codice Modificato

```javascript
// Prima (BUG):
showAdvancedBtn.addEventListener("click", () => {
  $("#gdriveSimpleMode").style.display = "none";
  $("#gdriveAdvancedMode").style.display = "block";
  // ❌ Mancava: localStorage.setItem(GDRIVE_USE_PRESET_KEY, "false");
});

// Dopo (RISOLTO):
showAdvancedBtn.addEventListener("click", () => {
  localStorage.setItem(GDRIVE_USE_PRESET_KEY, "false"); // ✅ Aggiunto!
  $("#gdriveSimpleMode").style.display = "none";
  $("#gdriveAdvancedMode").style.display = "block";
});
```

## Come Testare il Fix

### Test 1: Modalità Avanzata

1. **Ricarica la pagina** (`Ctrl+F5` per forzare)
2. Se vedi il wizard, scegli "Setup Rapido"
3. Click su **"⚙️ Usa CLIENT_ID Personalizzato"**
4. Incolla il tuo CLIENT_ID
5. Aspetta il checkmark verde "✓ Valido"
6. Click **"🔗 Connetti Google Drive"**
7. **✅ Dovrebbe aprirsi il popup OAuth di Google** (non più errore!)

### Test 2: Verifica Flag

Puoi verificare il flag nella console del browser:

```javascript
// Console browser (F12)
localStorage.getItem('gdrive_use_preset')
// Dovrebbe essere "false" quando sei in modalità avanzata
// Dovrebbe essere "true" quando sei in modalità semplice
```

### Test 3: Switch tra Modalità

1. Modalità avanzata → inserisci CLIENT_ID
2. Click "← Torna al Setup Rapido"
3. Verifica che il flag sia `"true"`: `localStorage.getItem('gdrive_use_preset')`
4. Click "Usa CLIENT_ID Personalizzato"
5. Verifica che il flag sia `"false"`

## Per Cancellare e Ricominciare

Se vuoi resettare tutto e rivedere il wizard:

```javascript
// In console browser (F12)
localStorage.removeItem('gdrive_setup_complete');
localStorage.removeItem('gdrive_use_preset');
localStorage.removeItem('gdrive_client_id');
location.reload();
```

## Stato Attuale

✅ **Bug risolto!** Ora puoi:
- Usare sia Setup Rapido che CLIENT_ID Personalizzato
- Passare liberamente tra le due modalità
- Il CLIENT_ID viene validato e usato correttamente

---

## Nota: Se Hai Ancora Problemi

Se dopo aver inserito il tuo CLIENT_ID ricevi comunque errori OAuth (come `redirect_uri_mismatch`), potrebbe essere perché:

1. **URI non configurati**: Nella Google Cloud Console, devi aggiungere:
   - `http://localhost:8000`
   - `http://127.0.0.1:8000`
   
2. **Tipo sbagliato**: Devi usare "ID client OAuth 2.0" per "Applicazione web" (NON API Key)

3. **Timeout configurazione**: Dopo aver salvato nella Google Cloud Console, aspetta 2-3 minuti prima di testare

In questi casi, vedrai errori DIVERSI da "CLIENT_ID non valido", con messaggi specifici che ti guidano alla soluzione.
