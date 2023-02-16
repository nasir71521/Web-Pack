import generateQRcode from "./generateQr";
import './styles/main.scss';
import 'bootstrap';

const generate = document.getElementById('generate');
generate.addEventListener('click', generateQRcode);

generateQRcode();
// generateJoke();