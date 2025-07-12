class PepecoinDonation extends HTMLElement {
    connectedCallback() {
      const address = this.getAttribute('address') || 'YOUR_DEFAULT_PEPE_ADDRESS';
      const title = this.getAttribute('title') || 'Donate Pepecoin';
      const color = this.getAttribute('color') || '#181816';
  
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');

          .donation-box {
            font-family: 'Nunito', sans-serif;
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
            font-family: 'Nunito', sans-serif;
            font-size: 0.8rem;
            word-break: break-all;
            text-align: center;
            color: ${color};
            font-weight: bold;
          }
          .donation-qr {
            width: 128px;
            height: 128px;
            margin-bottom: 0.8rem;
          }
        </style>
        <div class="donation-box">
          <div class="donation-title">${title}</div>
          <img class="donation-qr" src="https://api.qrserver.com/v1/create-qr-code/?data=pepecoin:${address}&size=128x128" alt="QR Code">
          <div class="donation-address">${address}</div>
        </div>
      `;
    }
  }
  customElements.define('pepecoin-donation', PepecoinDonation);
  