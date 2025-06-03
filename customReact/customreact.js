function customRender(reactElement, container){
  /* const domElement = document.createElement(reactElement.type)

   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target)
   
   container.appendChild(domElement)
   */

   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
     if(prop === children) continue;
      domElement.setAttribute(prop, reactElement.props[prop])
   }
   
   container.appendChild(domElement)
    
}

//in react whatever element u return for a function in jsx file it gets converted into the followimg object
const reactElement = {
    type:'a', //basically the type of element ,if it is anchor or para 
    props :{
        href: 'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)