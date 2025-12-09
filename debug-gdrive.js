// DEBUG SCRIPT - Copia e incolla nella console del browser (F12)

console.log("=== DEBUG GOOGLE DRIVE SETUP ===");
console.log("1. Setup completato:", localStorage.getItem('gdrive_setup_complete'));
console.log("2. Usa preset:", localStorage.getItem('gdrive_use_preset'));
console.log("3. CLIENT_ID salvato:", localStorage.getItem('gdrive_client_id'));
console.log("4. Campo CLIENT_ID (DOM):", document.querySelector('#gdriveClientId')?.value);
console.log("================================");

// Test regex
const testClientId = "740620399836-44a2opi95tvm1hof8sqs00i2nmd0i13c.apps.googleusercontent.com";
const pattern = /^\d{12,}-[a-zA-Z0-9_-]{10,}\.apps\.googleusercontent\.com$/;
console.log("Test regex con tuo CLIENT_ID:", pattern.test(testClientId));

// Nota: se "Usa preset" è "true", l'app userà il CLIENT_ID predefinito
// invece del tuo CLIENT_ID personalizzato!
