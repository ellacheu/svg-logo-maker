// shape classes //
class Triangle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill='${this.color}' />`
    }
}

class Square {
    constructor () {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="50" y="50" width="100" height="100" fill='${this.color}' />`
    }
}

class Circle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="25" cy="75" r="20" fill='${this.color}'/>`;
    }
}

module.exports = { Triangle, Square, Circle }