# Firebase Setup Instructions

Guida completa per configurare Firebase per Link Organizer.

## 1. Crea un progetto Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com/)
2. Clicca "Add project" (Aggiungi progetto)
3. Inserisci un nome per il progetto (es. "link-organizer")
4. (Opzionale) Disabilita Google Analytics se non necessario
5. Clicca "Create project"

## 2. Registra l'app Web

1. Nella dashboard del progetto, clicca sull'icona Web (</>) 
2. Registra l'app con un nickname (es. "Link Organizer Web")
3. **NON selezionare** "Also set up Firebase Hosting"
4. Clicca "Register app"
5. **Copia la configurazione Firebase** che appare - ti servirà dopo!

La configurazione apparirà così:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "tuoprogetto.firebaseapp.com",
  projectId: "tuoprogetto",
  storageBucket: "tuoprogetto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## 3. Abilita Firestore Database

1. Nel menu laterale, vai su **Build → Firestore Database**
2. Clicca "Create database"
3. Scegli una location (es. `europe-west`)
4. Seleziona **"Start in production mode"** (configureremo le regole dopo)
5. Clicca "Enable"

## 4. Abilita Authentication

1. Nel menu laterale, vai su **Build → Authentication**
2. Clicca "Get started"
3. Vai alla tab " Sign-in method"
4. Trova "Anonymous" nella lista
5. Clicca su "Anonymous" e **abilita** il toggle
6. Clicca "Save"

## 5. Configura Security Rules

1. Torna su **Firestore Database**
2. Vai alla tab "Rules"
3. Sostituisci il contenuto con queste regole:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permetti agli utenti autenticati di leggere/scrivere solo i propri link
    match /links/{linkId} {
      allow read, write: if request.auth != null && 
                            request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && 
                       request.auth.uid == request.resource.data.userId;
    }
  }
}
```

4. Clicca "Publish"

## 6. Configura l'app

1. Apri **Link Organizer** nel browser
2. Clicca il pulsante "🔥 Firebase"
3. Incolla la configurazione Firebase nel campo JSON
4. Clicca "🔌 Connetti"
5. Verifica che lo stato diventi "✅ Connesso"

## 7. Test e Verifica

### Test connessione
- Lo stato dovrebbe mostrare "✅ Connesso (User: xxx...)"
- Il badge nell'header dovrebbe mostrare "🔄 Sincronizzato"

### Test sync
1. Aggiungi un link nell'app
2. Vai su Firebase Console → Firestore Database
3. Dovresti vedere una collection "links" con il tuo link

### Test real-time
1. Apri l'app in due tab del browser
2. Aggiungi/modifica un link in un tab
3. Verifica che appaia automaticamente nell'altro tab

## Struttura Dati Firestore

Collection: `links`

Ogni documento contiene:
```javascript
{
  id: "uniqueId123",           // ID univoco del link
  url: "https://example.com",   // URL completo
  title: "Titolo del link",    // Titolo
  summary: "Descrizione...",   // Descrizione opzionale
  tags: ["tag1", "tag2"],      // Array di tag
  created: 1234567890,         // Timestamp creazione (millisecondi)
  updated: 1234567890,         // Timestamp ultimo aggiornamento
  userId: "firebaseAuthUID"    // ID utente Firebase (anonymous)
}
```

## Troubleshooting

### "Permission denied" error
- Verifica che le Security Rules siano configurate correttamente
- Controlla che Anonymous Auth sia abilitato
- Ricarica la pagina e riconnetti

### Link non si sincronizzano
- Controlla la console browser per errori
- Verifica che il badge mostri "Sincronizzato" e non "Solo locale"
- Prova a disconnettere e riconnettere

### "Firebase SDK not loaded"
- Ricarica la pagina
- Controlla che la connessione internet funzioni

## Note sulla Privacy

- **Autenticazione Anonima**: Ogni dispositivo ottiene un ID utente anonimo univoco
- **Isolamento Dati**: Ogni utente vede solo i propri link (grazie alle Security Rules)
- **Nessuna Email Richiesta**: Non serve registrazione, funziona subito
- **Dati Locali**: I dati rimangono anche in localStorage come backup

## Limiti Gratuiti Firebase

Piano **Spark** (gratuito):
- **Firestore**: 1 GB storage, 50k letture/giorno, 20k scritture/giorno
- **Auth**: Unlimited anonymous auth
- **Bandwidth**: 10 GB/mese

Per la maggior parte degli utenti, il piano gratuito è più che sufficiente!
