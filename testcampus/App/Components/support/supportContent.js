export class SupportContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/support/supportStyle.css";
          </style>
           <div class="first-message">
           <h2>Preguntas Mas Frecuentes</h2>

           </div>
            <div class="preguntas">
              <p>¿Que servicios Ofrece Campus?</p>
            </div> 
            <div class="preguntas">
              <p>¿Estos Servicios Y zonas Manejan Algun Tipo De Horario?,y bsi es asi ¿Como Se Distribuye?</p>
            </div>
            <div class="preguntas">
              <p>¿Puedo usar Estos Servicios En Cualquier Momento?</p>
            </div>
           </div>
        `;
      }
}     
customElements.define("support-content", SupportContent);