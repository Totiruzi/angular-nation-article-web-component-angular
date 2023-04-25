class ReadingListElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML=`<hi>Hello Rob! I am the reading list custom element</hi>`
    console.log('Reading list element connected');  
  };
}
customElements.define('reading-list-element', ReadingListElement);