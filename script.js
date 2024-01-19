// Contents of script.js
const text = "software engineer."
const typingSpeed = 110; // milliseconds
let index = 0;
const typingElement = document.getElementById('typing-effect');

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = () => {
    typingElement.classList.add('typing');
    type();
};
