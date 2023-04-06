import { ref } from "vue";

export default function colorPickerComposable() {
    const colors = ['green', 'red', 'blue', 'purple'];
    const message = ref('Pick a color');

    const matchColor = (color) => {
        // Generate a random color from the colors array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Check if the color matches the random color
        if (color === randomColor) {
            message.value = `You win! [answer is: ${randomColor}]`;
        } else {
            message.value = `You loose! [answer is: ${randomColor}]`;
        }
    }

    return { colors, message, matchColor };
}