let counter = 0;
class Component {
  // this is the base class
  constructor() {}

  createComponent(tag, className = [], style = {}) {
    const element = document.createElement(tag);
    element.classList.add(...className);
    Object.entries(style).forEach(([property, value]) => {
      element.style[property] = value;
    });
    return element;
  }

  createInput(type, placeholder, value, className, container) {
    const input = this.createComponent("input", className);
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("value", value);
    return input;
  }

  createSelect(options, className = []) {
    const select = this.createComponent("select", className);
    options.forEach((option) => {
      const optionElement = this.createComponent("option", []);
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });
    return select;
  }

  createLabel(text, className = []) {
    const label = this.createComponent("label", className);
    label.textContent = text;
    return label;
  }

  createSmall(text, className = []) {
    const small = this.createComponent("small", className);
    small.textContent = text;
    return small;
  }

  createCard(className = []) {
    const card = this.createComponent("div", ["card"]);
    card.classList.add(...className);
    return card;
  }

  createCardBody() {
    const cardBody = this.createComponent("div", ["card-body"]);
    return cardBody;
  }

  createContainer(className = [], style = {}) {
    const container = this.createComponent("div", className, style);
    container.setAttribute("id", counter++);
    return container;
  }
  createProgrammableBlock() {
    const container = this.createContainer(
      [
        "card",
        "card-body",
        "programmable-area",
        "child-programmable-area",
        "w-auto",
      ],
      {} // empty object passed in as the second argument for style
    );
    return container;
  }
}

class FunctionCall extends Component {
  // this is the child class
  constructor() {
    super();
    this.functionCall = null;
  }

  createFunctionCall() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "function-call"],
      {
        fontSize: "0.8em",
        width: "18vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    this.functionCall = this.createInput("text", "", "", ["d-inline", "w-50"]);
    const text = this.createSmall("call function ", [
      "d-inline",
      "text-muted",
      "m-1",
    ]);

    const text1 = this.createSmall("()", ["d-inline", "text-muted", "m-1"]);
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.functionCall);
    cardBody.appendChild(text1);
    return container;
  }
  generatePHPCode() {
    return `${this.functionCall.value}();`;
  }
}

class Print extends Component {
  // this is the child class
  constructor() {
    super();
    this.print = null;
  }

  createPrintStatement() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "print"],
      {
        fontSize: "0.8em",
        width: "28vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    this.print = this.createInput("text", "", "", ["d-inline", "w-75"]);
    const text = this.createSmall("print", ["d-inline", "text-muted", "m-1"]);
    const selection = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(selection);
    cardBody.appendChild(this.print);
    return container;
  }
}

class Variable extends Component {
  // this is the child class
  constructor() {
    super();
    this.variable = null;
    this.type = null;
    this.value = null;
  }

  createVariable() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "variable"],
      {
        fontSize: "0.8em",
        width: "32vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    this.variable = this.createInput("text", "", "", ["d-inline", "w-25"]);
    const text = this.createSmall("equals", ["d-inline", "text-muted", "m-1"]);
    this.type = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.value = this.createInput("text", "", "", ["d-inline", "m-1", "w-50"]);
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(this.variable);
    cardBody.appendChild(text);
    cardBody.appendChild(this.type);
    cardBody.appendChild(this.value);
    return container;
  }
}

class Arithmetic extends Component {
  constructor() {
    super();
    this.variable = null;
    this.type = null;
    this.type2;
    this.value = null;
    this.operator = null;
    this.value2 = null;
  }

  createArithmetic() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "arithmetic"],
      {
        fontSize: "0.8em",
        width: "40vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    this.variable = this.createInput("text", "var name", "", [
      "d-inline",
      "w-25",
    ]);
    const text = this.createSmall("equals", ["d-inline", "text-muted", "m-1"]);
    this.type = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.operator = this.createSelect(
      ["+", "-", "*", "/"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.value = this.createInput("text", "value", "", ["d-inline", "w-25"]);
    this.value2 = this.createInput("text", "value", "", ["d-inline", "w-25"]);
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(this.variable);
    cardBody.appendChild(text);
    cardBody.appendChild(this.type);
    cardBody.appendChild(this.value);
    cardBody.appendChild(this.operator);
    cardBody.appendChild(this.value2);
    return container;
  }
}
class ReadWriteComponent extends Component {
  // this is the child class
  constructor(read_write) {
    super();
    this.read_write = read_write;
    this.path = null;
    this.varName = null;
    this.type = null;
  }
  readFile() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "read-file"],
      {
        fontSize: "0.8em",
        width: "24vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    const text = this.createSmall("read from ", [
      "d-inline",
      "text-muted",
      "m-1",
    ]);
    this.varName = this.createInput("text", "Path to file", "", [
      "d-inline",
      "m-1",
      "w-50",
    ]);
    this.path = this.createInput("text", "Var name", "", [
      "d-inline",
      "m-1",
      "w-25",
    ]);
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(this.varName);
    cardBody.appendChild(text);
    cardBody.appendChild(this.path);
    return container;
  }
  writeFile() {
    const container = this.createContainer(
      ["container-fluid", "m-2", "write-file"],
      {
        fontSize: "0.8em",
        width: "40vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    const text = this.createSmall("write to ", [
      "d-inline",
      "text-muted",
      "m-1",
    ]);
    this.path = this.createInput("text", "Path", "", [
      "d-inline",
      "m-1",
      "w-50",
    ]);
    this.type = this.createSelect(
      ["Var", "Str"],
      ["d-inline", "text-muted", "m-1"]
    );

    const text1 = this.createSmall("this", ["d-inline", "text-muted", "m-1"]);
    this.varName = this.createInput("text", "", "", ["d-inline", "w-25"]);
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.path);
    cardBody.appendChild(text1);
    cardBody.appendChild(this.type);
    cardBody.appendChild(this.varName);
    return container;
  }
}
class ProgrammableAreaComponents extends Component {
  // this is the child class
  constructor() {
    super();
    this.componentName = undefined;
    this.variableAssign = undefined;
    this.variableAssignValue = undefined;
    this.type = undefined;
    this.value = undefined;
    this.operator = undefined;
    this.type2 = undefined;
    this.value2 = undefined;
    this.increment = undefined;
    this.programmableArea = undefined;
  }

  createForComponent() {
    this.componentName = "for";
    const container = this.createContainer(["container-fluid", "m-2", "for"], {
      fontSize: "0.8em",
      width: "60vw",
      position: "relative",
    });
    const card = this.createCard(["parent-card"]);
    const cardBody = this.createCardBody();
    const text = this.createSmall("for", ["d-inline", "text-muted", "m-1"]);
    this.variableAssign = this.createInput("text", "value", "", ["d-inline"]);
    const text1 = this.createSmall("=", ["d-inline", "text-muted", "m-1"]);
    this.variableAssignValue = this.createInput("text", "value", "", [
      "d-inline",
    ]);
    const text2 = this.createSmall("to", ["d-inline", "text-muted", "m-1"]);
    this.type = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.operator = this.createSelect(
      ["==", "<=", ">=", "<", ">", "!=", "&&", "||"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.type2 = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.value = this.createInput("text", "value", "", ["d-inline"]);
    this.value2 = this.createInput("text", "value", "", ["d-inline"]);
    const text3 = this.createSmall("step", ["d-inline", "text-muted", "m-1"]);
    this.increment = this.createInput("number", "value", "", ["d-inline", ,]);
    this.programmableArea = this.createProgrammableBlock();
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.variableAssign);
    cardBody.appendChild(text1);
    cardBody.appendChild(this.variableAssignValue);
    cardBody.appendChild(text2);
    cardBody.appendChild(this.type);
    cardBody.appendChild(this.value);
    cardBody.appendChild(this.operator);
    cardBody.appendChild(this.type2);
    cardBody.appendChild(this.value2);
    cardBody.appendChild(text3);
    cardBody.appendChild(this.increment);
    cardBody.appendChild(this.programmableArea);
    return container;
  }

  createConditionalComponents_Loop(componentName) {
    this.componentName = componentName;
    const container = this.createContainer(
      ["container-fluid", "m-2", `${this.componentName}`],
      {
        fontSize: "0.8em",
        width: "50vw",
        position: "relative",
      }
    );
    const card = this.createCard(["parent-card"]);
    const cardBody = this.createCardBody();
    const text = this.createSmall(`${componentName}`, [
      "d-inline",
      "text-muted",
      "m-1",
    ]);
    this.type = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.operator = this.createSelect(
      ["==", "<=", ">=", "<", ">", "!=", "&&", "||"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.type2 = this.createSelect(
      ["Func", "Var", "Str", "Int"],
      ["d-inline", "text-muted", "m-1"]
    );
    this.value = this.createInput("text", "value", "", ["d-inline", "w-25"]);
    this.value2 = this.createInput("text", "value", "", ["d-inline", "w-25"]);
    this.programmableArea = this.createProgrammableBlock();
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.type);
    cardBody.appendChild(this.value);
    cardBody.appendChild(this.operator);
    cardBody.appendChild(this.type2);
    cardBody.appendChild(this.value2);
    cardBody.appendChild(this.programmableArea);
    return container;
  }
  createElseComponent() {
    this.componentName = "else";
    const container = this.createContainer(["container-fluid", "m-2", "else"], {
      fontSize: "0.8em",
      width: "50vw",
      position: "relative",
    });
    const card = this.createCard(["parent-card"]);
    const cardBody = this.createCardBody();
    const text = this.createSmall("else", ["d-inline", "text-muted", "m-1"]);
    this.programmableArea = this.createProgrammableBlock();
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.programmableArea);
    return container;
  }
  createFunctionComponent() {
    this.componentName = "function";
    const container = this.createContainer(
      ["container-fluid", "m-2", "function"],
      {
        fontSize: "0.8em",
        width: "50vw",
        position: "relative",
      }
    );
    const card = this.createCard();
    const cardBody = this.createCardBody();
    const text = this.createSmall("function", [
      "d-inline",
      "text-muted",
      "m-1",
    ]);
    this.value = this.createInput("text", "value", "", ["d-inline"]);
    const text1 = this.createSmall("(", ["d-inline", "text-muted", "m-1"]);
    this.value2 = this.createInput("text", "comma seperated params", "", [
      "d-inline",
      "w-25",
    ]);
    const text2 = this.createSmall(")", ["d-inline", "text-muted", "m-1"]);
    this.programmableArea = this.createProgrammableBlock();
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(text);
    cardBody.appendChild(this.value);
    cardBody.appendChild(text1);
    cardBody.appendChild(this.value2);
    cardBody.appendChild(text2);
    cardBody.appendChild(this.programmableArea);
    return container;
  }
  generatePHPCode() {
    switch (this.componentName) {
      case "if":
        let code = "";
        code += "if (";
        switch (this.type.value) {
          case "Func":
            code += `${this.value.value}();`;
            break;
          case "Var":
            code += `$${this.value.value}`;
            break;
          case "Str":
            code += `"${this.value.value}"`;
            break;
          case "Int":
            code += `${this.value.value}`;
            break;
        }
        code += ` ${this.operator.value} `;
        switch (this.type2.value) {
          case "Func":
            code += `${this.value2.value}();`;

            break;
          case "Var":
            code += `$${this.value2.value}`;
            break;
          case "Str":
            code += `"${this.value2.value}"`;
            break;
          case "Int":
            code += `${this.value2.value}`;
            break;
        }
        code += ") {";
        if (this.programmableArea.length > 0) {
          this.programmableArea.forEach((item) => {
            code += item.getPHPCode();
          });
        }
        code += "}";
        return code;
      case "else":
        code = "";
        if (this.programmableArea.length > 0) {
          this.programmableArea.forEach((item) => {
            code += item.getPHPCode();
          });
        }
        return `else {
          ${code}
        }`;

      case "function":
        code = "";
        if (this.programmableArea.length > 0) {
          this.programmableArea.forEach((item) => {
            code += item.getPHPCode();
          });
        }
        let temp = this.value2.value.split(",");
        let params = "";
        temp.forEach((item) => {
          params += `$${item},`;
        });
        params = params.slice(0, -1);
        return `function ${this.value.value}(${params}}) {
          ${code}
        }`;
      case "for":
        code = "";
        code += "for (";
        code += `$${this.variableAssign.value} = ${this.variableAssignValue.value};`;
        switch (this.type.value) {
          case "Var":
            code += `$${this.value.value}`;
            break;
          case "Str":
            code += `"${this.value.value}"`;
            break;
          case "Int":
            code += `${this.value.value}`;
            break;
          case "Func":
            code += `${this.value.value}();`;
            break;
        }
        code += ` ${this.operator.value} `;
        switch (this.type2.value) {
          case "Var":
            code += `$${this.value2.value}`;
            break;
          case "Str":
            code += `"${this.value2.value}"`;
            break;
          case "Int":
            code += `${this.value2.value}`;
            break;
          case "Func":
            code += `${this.value2.value}();`;
            break;
        }
        code += `;`;
        code += `$${this.variableAssign.value} = $${this.variableAssign.value} + ${this.increment.value}`;
        code += ") {";

        if (this.programmableArea.length > 0) {
          this.programmableArea.forEach((item) => {
            code += item.getPHPCode();
          });
        }
        code += "}";
        return code;
    }
  }
}

function newButton(name) {
  const component = document.createElement("div");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const button = document.createElement("h3");
  component.classList.add("col-2");
  component.classList.add("p-1");
  component.classList.add("d-inline");
  card.classList.add("card");
  card.classList.add("card-body");
  button.classList.add("card-title", "text-center");
  button.innerText = name;
  card.appendChild(cardBody);
  cardBody.appendChild(button);
  component.appendChild(card);
  component.draggable = true;
  component.id = name;
  component.dataset.type = name;
  component.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
  return component;
}

const mappingBtn = {
  Variable: () => {
    const variable = new Variable();
    return variable.createVariable();
  },
  Print: () => {
    const print = new Print();
    return print.createPrintStatement();
  },
  Arithmetic: () => {
    const arithmetic = new Arithmetic();
    return arithmetic.createArithmetic();
  },
  If: () => {
    const ifStatement = new ProgrammableAreaComponents();
    return ifStatement.createConditionalComponents_Loop("if");
  },
  "Function Call": () => {
    const functionCall = new FunctionCall();
    return functionCall.createFunctionCall();
  },
  For: () => {
    const forStatement = new ProgrammableAreaComponents();
    return forStatement.createForComponent();
  },
  While: () => {
    const whileStatement = new ProgrammableAreaComponents();
    return whileStatement.createConditionalComponents_Loop("while");
  },
  Function: () => {
    const functionStatement = new ProgrammableAreaComponents();
    return functionStatement.createFunctionComponent();
  },
  "Else If": () => {
    const elseIfStatement = new ProgrammableAreaComponents();
    return elseIfStatement.createConditionalComponents_Loop("else-if");
  },
  Else: () => {
    const elseStatement = new ProgrammableAreaComponents();
    return elseStatement.createElseComponent();
  },
  "Read File": () => {
    const readFile = new ReadWriteComponent("read");
    return readFile.readFile();
  },
  "Write File": () => {
    const writeFile = new ReadWriteComponent("write");
    return writeFile.writeFile();
  },
};
document.addEventListener("DOMContentLoaded", () => {
  let Buttons = [
    "Variable",
    "Print",
    "Arithmetic",
    "If",
    "Else If",
    "Else",
    "While",
    "For",
    "Function",
    "Function Call",
    "Read File",
    "Write File",
  ];
  Buttons.map((button) => {
    const component = newButton(button);
    document.getElementById("buttons").appendChild(component);
  });
  const dropRegion = document.querySelectorAll(".programmable-area");
  dropRegion.forEach((region) => {
    region.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    region.addEventListener("drop", (event) => {
      event.preventDefault();
      const componentId = event.dataTransfer.getData("text/plain");
      const component = document.getElementById(componentId);
      const type = component.dataset.type;
      if (mappingBtn[type]) {
        const newComponent = mappingBtn[type]();
        const dropTarget = event.target.closest(".programmable-area");
        if (dropTarget) {
          dropTarget.appendChild(newComponent);
        }
      }
    });
  });
  document.getElementById("reset").addEventListener("click", () => {
    idResolver();
  });
});
let idFields = {};
function idResolver() {
  for (let i = 0; i < counter; i++) {
    const element = document.getElementById(i);
    let idRecord = [];
    if (!element.classList.contains("child-programmable-area")) {
      idRecord.push(i);
      idFields[i] = [
        element,
        element.classList.contains("function-call")
          ? "function-call"
          : element.classList.contains("print")
          ? "print"
          : element.classList.contains("variable")
          ? "variable"
          : element.classList.contains("arithmetic")
          ? "arithmetic"
          : element.classList.contains("read-file")
          ? "read-file"
          : element.classList.contains("write-file")
          ? "write-file"
          : element.classList.contains("for")
          ? "for"
          : element.classList.contains("while")
          ? "while"
          : element.classList.contains("if")
          ? "if"
          : element.classList.contains("else-if")
          ? "else-if"
          : element.classList.contains("else")
          ? "else"
          : element.classList.contains("function")
          ? "function"
          : "unknown",
        element.children[0].children[0].children,
        element.children[0].children[0].lastElementChild.classList.contains(
          "child-programmable-area"
        )
          ? element.children[0].children[0].lastElementChild
          : null,
      ];
    }
  }
  generatePHPCodeBlock(idFields);
}

function functionphp(element) {
  let code = "";
  code += "function " + element[1].value + "(";
  code += element[3].value + ") { \n";
  code += "}";
  return code;
}
function forphp(element) {
  let code = "";
  code += "for (" + element[1].value + "=" + element[3].value + ";";
  switch (element[5].value) {
    case "Func":
      code += `${element[6].value}()`;
      break;
    case "Var":
      code += `$${element[6].value}`;
      break;
    case "Int":
      code += `${element[6].value}`;
      break;
    case "Str":
      code += `"${element[6].value}"`;
      break;
  }
  code += element[7].value;
  switch (element[8].value) {
    case "Func":
      code += `${element[9].value}()`;
      break;
    case "Var":
      code += `$${element[9].value}`;
      break;
    case "Int":
      code += `${element[9].value}`;
      break;
    case "Str":
      code += `"${element[9].value}"`;
      break;
  }
  code += ";";
  code += element[1].value + "=" + element[11].value + "){ \n";
  code += "}";
  return code;
}
function whilephp(element) {
  let code = "";
  code += "while (";
  switch (element[1].value) {
    case "Func":
      code += `${element[2].value}()`;
      break;
    case "Var":
      code += `$${element[2].value}`;
      break;
    case "Int":
      code += `${element[2].value}`;
      break;
    case "Str":
      code += `"${element[2].value}"`;
      break;
  }
  code += element[3].value;
  switch (element[4].value) {
    case "Func":
      code += `${element[5].value}()`;
      break;
    case "Var":
      code += `$${element[5].value}`;
      break;
    case "Int":
      code += `${element[5].value}`;
      break;
    case "Str":
      code += `"${element[5].value}"`;
      break;
  }
  code += ") { \n";
  code += "}";
  return code;
}
function ifphp(element) {
  let code = "";
  code += "if (";
  switch (element[1].value) {
    case "Func":
      code += `${element[2].value}()`;
      break;
    case "Var":
      code += `$${element[2].value}`;
      break;
    case "Int":
      code += `${element[2].value}`;
      break;
    case "Str":
      code += `"${element[2].value}"`;
      break;
  }
  code += element[3].value;
  switch (element[4].value) {
    case "Func":
      code += `${element[5].value}()`;
      break;
    case "Var":
      code += `$${element[5].value}`;
      break;
    case "Int":
      code += `${element[5].value}`;
      break;
    case "Str":
      code += `"${element[5].value}"`;
      break;
  }
  code += ") { \n";
  code += "}";
  return code;
}
function elseifphp(element) {
  let code = "";
  code += "else if (";
  switch (element[1].value) {
    case "Func":
      code += `${element[2].value}()`;
      break;
    case "Var":
      code += `$${element[2].value}`;
      break;
    case "Int":
      code += `${element[2].value}`;
      break;
    case "Str":
      code += `"${element[2].value}"`;
      break;
  }
  code += element[3].value;
  switch (element[4].value) {
    case "Func":
      code += `${element[5].value}()`;
      break;
    case "Var":
      code += `$${element[5].value}`;
      break;
    case "Int":
      code += `${element[5].value}`;
      break;
    case "Str":
      code += `"${element[5].value}"`;
      break;
  }
  code += ") { \n";
  code += "}";
  return code;
}
function elsephp(element) {
  let code = "";
  code += "else  { \n";
  code += "}";
  return code;
}

function generatePHPCodeBlock(idFields) {
  let code = "<?php \n";
  for (let elements in idFields) {
    let element = idFields[elements];
    switch (element[1]) {
      case "variable":
        code += variablephp(element[2]) + "\n";
        break;
      case "arithmetic":
        code += arithmeticphp(element[2]) + "\n";
        break;
      case "print":
        code += printphp(element[2]) + "\n";
        break;
      case "read-file":
        code += readphp(element[2]) + "\n";
        break;
      case "write-file":
        code += writephp(element[2]) + "\n";
        break;
      case "function-call":
        code += functioncallphp(element[2]) + "\n";
        break;
      case "for":
        code += forphp(element[2]) + "\n";
        break;
      case "while":
        code += whilephp(element[2]) + "\n";
        break;
      case "if":
        code += ifphp(element[2]) + "\n";
        break;
      case "else-if":
        code += elseifphp(element[2]) + "\n";
        break;
      case "else":
        code += elsephp(element[2]) + "\n";
        break;
      case "function":
        code += functionphp(element[2]) + "\n";
        break;
    }
  }
  code += "?>";
  document.querySelector("#code-gen").innerText = code;
}

function variablephp(element) {
  let code = "";
  switch (element[2].value) {
    case "Func":
      code = `$${element[0].value} = ${element[3].value}();`;
      break;
    case "Var":
      code = `$${element[0].value} = $${element[3].value};`;
      break;
    case "Str":
      code = `$${element[0].value} = "'${element[3].value}"';`;
      break;
    case "Int":
      code = `$${element[0].value} = ${element[3].value};`;
  }
  return code;
}

function arithmeticphp(element) {
  let code = "";
  code = `$${element[0].value} = `;
  switch (element[2].value) {
    case "Func":
      code += `${element[3].value}()`;
      break;
    case "Var":
      code += `$${element[3].value}`;
      break;
    case "Str":
      code += `'${element[3].value}'`;
      break;
    case "Int":
      code += `${element[3].value}`;
      break;
  }

  switch (element[4].value) {
    case "+":
      code += ` + ${element[5].value};`;
      break;
    case "-":
      code += ` - ${element[5].value};`;
      break;
    case "*":
      code += ` * ${element[5].value};`;
      break;
    case "/":
      code += ` / ${element[5].value};`;
      break;
    case "%":
      code += ` % ${element[5].value};`;
      break;
  }
  return code;
}
function printphp(element) {
  let code = "";
  code += `echo `;
  switch (element[1].value) {
    case "Func":
      code += `${element[2].value}();`;
      break;
    case "Var":
      code += `$${element[2].value};`;
      break;
    case "Str":
      code += `'${element[2].value}';`;
      break;
    case "Int":
      code += `${element[2].value};`;
      break;
  }
  return code;
}
function readphp(element) {
  let code = "";
  code += `$${element[0].value} = file_get_contents("${element[2].value}");`;
  return code;
}
function writephp(element) {
  let code = "";
  code += `file_put_contents("${element[1].value}", `;
  switch (element[3].value) {
    case "Var":
      code += `$${element[4].value}`;
      break;
    case "Str":
      code += `'${element[4].value}'`;
  }
  code += `);`;
  return code;
}
function functioncallphp(element) {
  let code = "";
  code += `${element[1].value}();`;
  return code;
}

document.getElementById("run").addEventListener("click", () => {
  const code = document
    .querySelector("#code-gen")
    .innerText.replace(/\n/g, "")
    .slice(5, -2);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "coderun.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("code-exec").innerText = xhr.responseText;
    }
  };
  xhr.send("phpCode=" + encodeURIComponent(code));
});
document.getElementById("trashcan").addEventListener("click", () => {
  document.querySelector("#code-gen").innerText = "";
  document.querySelector("#code-gen").value = "";
  document.querySelector("#code-gen").innerHTML = "";
  document.querySelector("#code-gen").textContent = "";
  document.querySelector("#parent-programmable-area").innerHTML = "";
  document.querySelector("#parent-programmable-area").innerText = "";
  document.querySelector("#parent-programmable-area").textContent = "";
  document.querySelector("#parent-programmable-area").value = "";
});
document.getElementById("info").addEventListener("click", () => {
  window.location.replace("https://www.github.com/tahamukhtar20");
});
