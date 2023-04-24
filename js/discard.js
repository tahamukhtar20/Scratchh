// class FunctionCall {
//   createFunctionCall() {
//     const container = document.createElement("div");
//     const card = document.createElement("div");
//     const cardBody = document.createElement("div");
//     const input1 = document.createElement("input");
//     const text = document.createElement("small");
//     const text1 = document.createElement("small");
//     // Handle the input and PHP generation first make the small components so it doesnt get messy
//     container.classList.add("container-fluid", "m-2");
//     container.style.fontSize = "0.8em";
//     container.style.width = "25vw";
//     container.style.position = "relative";
//     cardBody.classList.add("card-body");
//     card.classList.add("card");
//     input1.classList.add("d-inline", "w-75");
//     text.classList.add("d-inline", "text-muted", "m-1");
//     text1.classList.add("d-inline", "text-muted", "m-1");
//     container.appendChild(card);
//     text.textContent = "call function ";
//     text1.textContent = "()";
//     card.appendChild(cardBody);
//     cardBody.appendChild(text);
//     cardBody.appendChild(input1);
//     // cardBody.appendChild(text1);
//     return container;
//   }
// }

// class Print {
//   createPrintStatement() {
//     const container = document.createElement("div");
//     const card = document.createElement("div");
//     const cardBody = document.createElement("div");
//     const input2 = document.createElement("input");
//     const text = document.createElement("small");
//     const selection = document.createElement("select");
//     const funcOption = document.createElement("option");
//     funcOption.textContent = "Func";
//     selection.appendChild(funcOption);
//     const VarOption = document.createElement("option");
//     VarOption.textContent = "Var";
//     selection.appendChild(VarOption);
//     const StrOption = document.createElement("option");
//     StrOption.textContent = "Str";
//     selection.appendChild(StrOption);
//     const IntOption = document.createElement("option");
//     IntOption.textContent = "Int";
//     selection.appendChild(IntOption);
//     container.classList.add("container-fluid", "m-2");
//     container.style.fontSize = "0.8em";
//     container.style.width = "28vw";
//     container.style.position = "relative";
//     cardBody.classList.add("card-body");
//     card.classList.add("card");
//     text.classList.add("d-inline", "text-muted", "m-1");
//     container.appendChild(card);
//     input2.classList.add("d-inline", "w-75");
//     text.textContent = "print";
//     card.appendChild(cardBody);
//     cardBody.appendChild(text);
//     cardBody.appendChild(selection);
//     cardBody.appendChild(input2);
//     return container;
//   }
// }
// class Variable {
//   constructor(name, value) {
//     // this.name = name;
//     // this.value = value;
//   }
//   createVariable() {
//     const container = document.createElement("div");
//     const card = document.createElement("div");
//     const cardBody = document.createElement("div");
//     const input1 = document.createElement("input");
//     const input2 = document.createElement("input");
//     const text = document.createElement("small");
//     // Handle the input and PHP generation first make the small components so it doesnt get messy
//     container.classList.add("container-fluid", "m-2");
//     container.style.fontSize = "0.8em";
//     container.style.width = "18vw";
//     container.style.position = "relative";
//     cardBody.classList.add("card-body");
//     card.classList.add("card");
//     input1.classList.add("d-inline", "w-temp");
//     text.classList.add("d-inline", "text-muted", "m-1");
//     container.appendChild(card);
//     input2.classList.add("d-inline", "w-50");
//     text.textContent = "equals";
//     card.appendChild(cardBody);
//     cardBody.appendChild(input1);
//     cardBody.appendChild(text);
//     cardBody.appendChild(input2);
//     return container;
//   }
//   phpCodeGen(component) {
//     // return component.children[0].children[0].children[1].value;
//   }
// }
// //test variable

// class Arithmetic {
//   constructor(name, value) {
//     // this.name = name;
//     // this.value = value;
//   }
//   createArithmetic() {
//     const containerDiv = document.createElement("div");
//     containerDiv.classList.add("container-fluid", "m-2");
//     containerDiv.style.width = "55vw"; // reduce the width of the container
//     containerDiv.style.position = "relative";
//     containerDiv.style.fontSize = "0.8em"; // reduce the font size of the container and its contents

//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");

//     const cardBodyDiv = document.createElement("div");
//     cardBodyDiv.classList.add("card-body");

//     const leftInput = document.createElement("input");
//     leftInput.classList.add("d-inline", "w-25");

//     const equalsText = document.createElement("small");
//     equalsText.classList.add("d-inline", "text-muted", "m-1");
//     equalsText.textContent = "equals";

//     const variableSelect = document.createElement("select");
//     const varOption = document.createElement("option");
//     varOption.textContent = "Var";
//     variableSelect.appendChild(varOption);
//     const numOption = document.createElement("option");
//     numOption.textContent = "Num";
//     variableSelect.appendChild(numOption);
//     const strOption = document.createElement("option");
//     strOption.textContent = "Str";
//     variableSelect.appendChild(strOption);

//     const rightInput = document.createElement("input");
//     rightInput.classList.add("d-inline", "w-25");

//     const operatorSelect = document.createElement("select");
//     const plusOption = document.createElement("option");
//     plusOption.textContent = "+";
//     operatorSelect.appendChild(plusOption);
//     const minusOption = document.createElement("option");
//     minusOption.textContent = "-";
//     operatorSelect.appendChild(minusOption);
//     const timesOption = document.createElement("option");
//     timesOption.textContent = "*";
//     operatorSelect.appendChild(timesOption);
//     const divideOption = document.createElement("option");
//     divideOption.textContent = "/";
//     operatorSelect.appendChild(divideOption);

//     cardBodyDiv.appendChild(leftInput);
//     cardBodyDiv.appendChild(equalsText);
//     cardBodyDiv.appendChild(variableSelect);
//     cardBodyDiv.appendChild(rightInput);
//     cardBodyDiv.appendChild(operatorSelect);
//     cardBodyDiv.appendChild(variableSelect.cloneNode(true));
//     cardBodyDiv.appendChild(rightInput.cloneNode(true));
//     cardDiv.appendChild(cardBodyDiv);
//     containerDiv.appendChild(cardDiv);

//     // document.body.appendChild(containerDiv);

//     // append the container div to the document
//     return containerDiv;
//   }
//   phpCodeGen(component) {
//     // return component.children[0].children[0].children[1].value;
//   }
// }
// class ForLoop {
//   constructor() {}
//   createForLoop() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container", "if");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "if";

//     // create input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(input);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// class WhileLoop {
//   createWhileLoop() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container", "if");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "if";

//     // create input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(input);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// class IfStatement {
//   constructor() {}
//   createIfStatement() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container", "if");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "if";

//     // create input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(input);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// class ElseStatement {
//   createElseStatement() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "else";

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// class ElseIfStatement {
//   createElseIfStatement() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container", "if");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "else if";

//     // create input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(input);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// class Function {
//   createFunction() {
//     // create container element
//     const container = document.createElement("div");
//     container.classList.add("container", "if");

//     // create card element
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // create card-body element
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // create small element for text-muted class
//     const small = document.createElement("small");
//     small.classList.add("text-muted");
//     small.textContent = "if";

//     // create input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");

//     // create prot-programmable-area card element
//     const protProgrammableArea = document.createElement("div");
//     protProgrammableArea.classList.add(
//       "card",
//       "card-body",
//       "programmable-area",
//       "child-programmable-area",
//       "w-auto"
//     );

//     // append all child elements to their parent elements
//     cardBody.appendChild(small);
//     cardBody.appendChild(input);
//     cardBody.appendChild(protProgrammableArea);
//     card.appendChild(cardBody);
//     container.appendChild(card);

//     // append container to the DOM
//     document.body.appendChild(container);

//     return container;
//   }
// }
// function newButton(name) {
//   const component = document.createElement("div");
//   const card = document.createElement("div");
//   const cardBody = document.createElement("div");
//   const button = document.createElement("h3");
//   component.classList.add("col-2");
//   component.classList.add("p-1");
//   component.classList.add("d-inline");
//   card.classList.add("card");
//   card.classList.add("card-body");
//   button.classList.add("card-title", "text-center");
//   button.innerText = name;
//   card.appendChild(cardBody);
//   cardBody.appendChild(button);
//   component.appendChild(card);
//   component.draggable = true;
//   component.id = name;
//   component.dataset.type = name;
//   component.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("text/plain", event.target.id);
//   });
//   return component;
// }

// const mappingBtn = {
//   Variable: () => {
//     const variable = new Variable();
//     return variable.createVariable();
//   },
//   Print: () => {
//     const print = new Print();
//     return print.createPrintStatement();
//   },
//   Arithmetic: () => {
//     const arithmetic = new Arithmetic();
//     return arithmetic.createArithmetic();
//   },
//   If: () => {
//     const ifStatement = new IfStatement();
//     return ifStatement.createIfStatement();
//   },
//   "Function-Call": () => {
//     const functionCall = new FunctionCall();
//     return functionCall.createFunctionCall();
//   },
//   For: () => {
//     const forStatement = new ForLoop();
//     return forStatement.createForLoop();
//   },
//   While: () => {
//     const whileStatement = new WhileLoop();
//     return whileStatement.createWhileLoop();
//   },
//   Function: () => {
//     const functionStatement = new Function();
//     return functionStatement.createFunction();
//   },
//   "Else-If": () => {
//     const elseIfStatement = new ElseIfStatement();
//     return elseIfStatement.createElseIfStatement();
//   },
//   Else: () => {
//     const elseStatement = new ElseStatement();
//     return elseStatement.createElseStatement();
//   },
// };
// document.addEventListener("DOMContentLoaded", () => {
//   let Buttons = [
//     "Variable",
//     "Print",
//     "Arithmetic",
//     "If",
//     "Else-If",
//     "Else",
//     "While",
//     "For",
//     "Function",
//     "Function-Call",
//     "Read-File",
//     "Write-File",
//   ];
//   Buttons.map((button) => {
//     const component = newButton(button);
//     document.getElementById("buttons").appendChild(component);
//   });
//   const dropRegion = document.querySelectorAll(".programmable-area");
//   dropRegion.forEach((region) => {
//     region.addEventListener("dragover", (event) => {
//       event.preventDefault();
//     });
//     region.addEventListener("drop", (event) => {
//       event.preventDefault();
//       const componentId = event.dataTransfer.getData("text/plain");
//       const component = document.getElementById(componentId);
//       const type = component.dataset.type;
//       if (mappingBtn[type]) {
//         const newComponent = mappingBtn[type]();
//         const dropTarget = event.target.closest(".programmable-area");
//         if (dropTarget) {
//           dropTarget.appendChild(newComponent);
//         }
//       }
//     });
//   });
// });
