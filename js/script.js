class CommonInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="common-info">
            <a href="tel:+9 999 555 5555">+9 999 555 5555</a><br>
            <a href="mailto:info@sobaka.ge">info@sobaka.ge</a><br>
            <a>наб. Принсенграхт 263- 265, Амстердам</a>
            </div>
        `;
    }
}
customElements.define('common-info', CommonInfo);