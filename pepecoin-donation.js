class PepecoinDonation extends HTMLElement {
    connectedCallback() {
      const address = this.getAttribute('address') || 'YOUR_DEFAULT_PEPE_ADDRESS';
      const title = this.getAttribute('title') || 'Donate Pepecoin';
      const color = this.getAttribute('color') || '#4CAF50';
  
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .donation-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            border: 2px solid ${color};
            border-radius: 12px;
            background: #f9f9f9;
            max-width: 200px;
            font-family: sans-serif;
          }
          .donation-title {
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: ${color};
          }
          .donation-address {
            font-size: 0.8rem;
            word-break: break-all;
            text-align: center;
            margin-bottom: 0.5rem;
            color: #333;
          }
          .donation-qr {
            width: 128px;
            height: 128px;
          }
        </style>
        <div class="donation-box">
          <div class="donation-title">${title}</div>
          <div class="donation-address">${address}</div>
          <img class="donation-qr" src="https://pepeblocks.com/qr/${address}" alt="Pepecoin QR code" />
        </div>
      `;
    }
  }
  customElements.define('pepecoin-donation', PepecoinDonation);
  