// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWXPIHpvFG_ftEXEY1oJTTihGBVaFufSw",
  authDomain: "starvolteng.firebaseapp.com",
  databaseURL: "https://starvolteng-default-rtdb.firebaseio.com",
  projectId: "starvolteng",
  storageBucket: "starvolteng.appspot.com",
  messagingSenderId: "1015132804776",
  appId: "1:1015132804776:web:6226b977720d1bb10f149d",
  measurementId: "G-EN82M60QSR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Adafruit IO
const feedKey = 'SEU_FEED_KEY';
const aioUsername = 'SEU_NOME_DE_USUÁRIO';
const aioKey = 'SUA_CHAVE_DA_API';

const data = { value: 42 }; // Substitua pelo seu valor

fetch(`https://io.adafruit.com/api/v2/${aioUsername}/feeds/${feedKey}/data`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': aioKey,
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Dados enviados com sucesso:', data);
})
.catch(error => {
    console.error('Erro ao enviar dados:', error);
});