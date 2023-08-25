//getting 'div' that we had created in index.html -------->
let container = document.getElementById("customroot");

// Making an element and setting properties ---->
let ReactElement = {
  type: "a",
  properties: {
    href: "https://instagram.com",
    target: "_blank",
    class: "yaahoo"
  },
  title: "click here to visit on instagram",
};

// Adding thinhs to our new Element -------->
function customRender(ReactElement, container) {
//   let domelement = document.createElement(ReactElement.type);
//   domelement.setAttribute("href", ReactElement.properties.href);
//   domelement.setAttribute("target", ReactElement.properties.target);
//   domelement.innerHTML = ReactElement.title;
//   container.appendChild(domelement);

  let domelem = document.createElement(ReactElement.type);
  domelem.innerHTML = ReactElement.title
  for (const prop in ReactElement.properties) {
    domelem.setAttribute(prop, ReactElement.properties[prop])
    }
    container.appendChild(domelem)
  }


customRender(ReactElement, container);
