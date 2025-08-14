window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.highlight');
    const triggerPoint = window.innerHeight * 0.8;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            el.classList.add('in-view');
        } else if (rect.top > window.innerHeight) {
            el.classList.remove('in-view');
        }
    });
});

class Accordion {
    /**
     *
     * @param {HTMLElement | string} element
     */
    constructor(element) {
        if (typeof element === 'string') {
            this.element = document.querySelector(element);
        } else {
            this.element = element;
        }

        if (!this.element) {
            throw new Error('Accordion element not found');
        }

        this.title = this.element.querySelector('.accordion-title');
        this.content = this.element.querySelector('.accordion-content');

        console.log(this.title, this.content);
        this.init();
    }

    init() {
        this.title.addEventListener('click', () => {
            this.toggle();
        });
    }

    toggle() {
        if (this.content.style.maxHeight) {
            this.content.style.maxHeight = null;
            this.title.classList.remove('active');
        } else {
            this.content.style.maxHeight = this.content.scrollHeight + 'px';
            this.title.classList.add('active');
        }
    }

    static initAll(selector) {
        const accordions = document.querySelectorAll(selector);
        console.log(accordions);
        accordions.forEach(accordion => new Accordion(accordion));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Accordion.initAll(".accordion");
});

window.Accordion = Accordion;