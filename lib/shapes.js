// shape classes //

class Triangle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points='0, 260 150, 0 300, 260' fill='${this.color}' />`
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
        return `<rect x='25' y='25' width='250' height='250' fill='${this.color}'/>`
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
        return `<circle cx='150' cy='100' r='100' fill='${this.color}'/>`;
    }
}

module.exports = { Triangle, Square, Circle }