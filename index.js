
import { navbar } from "./components/navbar/index.mjs";
console.log("aqui")

const options = [
    {isDropwdown: false, href: '../home.html', header:"Home", active:true },
    {isDropwdown: false, href: '../login.html', header:"Login", active:false },
    {isDropwdown: false, href: '../signup.html', header:"Signup", active:false },
    {isDropwdown: true,header: 'Categorias', options: [
      {href: '../headset.html', header:"Headsets"},
      {href: '../Bags.html', header:"Bags"},
      {href: '../accessories.html', header:"Accessories"},
    ]}
  ]

document.querySelector("body").innerHTML = navbar(options)