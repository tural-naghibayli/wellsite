console.log("Connected to main.js");


class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
    '<div>'+
    '<a class="btn btn-info btn-lg" style="margin:0.1em" href="https://tural-naghibayli.github.io/wellsite/" role="button">Report</a>'+
    '<a class="btn btn-success btn-lg" style="margin:0.1em" href="Formulas.html" role="button">Formulas</a>'+
    '<a class="btn btn-warning btn-lg" style="margin:0.1em" href="Communication_tips.html" role="button">Communication tips</a>'+
    '<a class="btn btn-danger btn-lg" style="margin:0.1em" href="WellControl.html" role="button">Well Control</a>'+
    '<a class="btn btn-secondary btn-lg" style="margin:0.1em" href="Rig_Work_Instruction_templates.html" role="button">Rig Work Instruction templates</a>'+
    '</div>';
  }
}

customElements.define('my-navbar', MyNavbar)
