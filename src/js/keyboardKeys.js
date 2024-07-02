import { closeModal } from "./modals";

export default function keyPressed(e) {
    const pressedKey = e.key;

    if (pressedKey === "Escape") {
        closeModal();
    }
}
