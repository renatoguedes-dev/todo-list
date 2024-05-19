export function createDivElement(...classNames) {
    const div = document.createElement("div")
    classNames.forEach((className) => div.classList.add(className))
    return div
}

export function createLabelElement(forAttribute, textContent, className) {
    const label = document.createElement("label")
    if (className) {
        label.classList.add(className)
    }
    label.htmlFor = forAttribute
    label.textContent = textContent
    return label
}

export function createInputElement(type, name, id) {
    const input = document.createElement("input")
    input.type = type
    input.name = name
    input.id = id
    return input
}

export function createParagraphElement(textContent, ...classNames) {
    const p = document.createElement("p")
    classNames.forEach((className) => p.classList.add(className))
    p.textContent = textContent
    return p
}

export function createButtonElement(textContent, ...classNames) {
    const button = document.createElement("button")
    classNames.forEach((className) => button.classList.add(className))
    button.textContent = textContent
    return button
}

export function appendChildren(parent, ...children) {
    children.forEach((child) => parent.appendChild(child))
}
