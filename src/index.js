import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import "./app.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Menu></Menu>
        <Footer></Footer>
        {/* <Hole></Hole> */}
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1
          style={{ color: `red`, fontSize: `44px`, textTransform: "uppercase" }}
        >
          Fast React pizza{" "}
        </h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const nunPizaa = pizzas.length;
  console.log(pizzas);
  return (
    <>
      <div className="menu">
        <h2>our menu</h2>

        {nunPizaa > 0 ? (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              cumque minima sunt minus maiores! Eos, amet. Minus doloribus odio
              tenetur.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza key={pizza.name} nameObj={pizza} />
              ))}
            </ul>
          </>
        ) : (
          <p>we are courrntly not online please come back later</p>
        )}
      </div>
    </>
  );
}

function Pizza({ nameObj }) {
  // if (nameObj.soldOut) return null;
   
  return (
    <>
      <li className={`pizza ${nameObj.soldOut ? "sold-out" : ""}`}>
        <img src={nameObj.photoName} alt={nameObj.name} />
        <div>
          <h3>{nameObj.name}</h3>
          <p>{nameObj.ingredients}</p>
          <span>{nameObj.soldOut ? `SOLD OUT` : nameObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHoure = 12;
  const closeHoure = 22;
  const isOpen = hour >= openHoure && hour <= closeHoure;
  console.log(isOpen);
  // if (hour >= openHoure && hour <= closeHoure) {
  //   alert(`we correnty open`);
  // } else {
  //   alert(`sorry we are close`);
  // }
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHoure={closeHoure}></Order>
        ) : (
          <h2>right now we cant take order come back we open at 13 </h2>
        )}
      </footer>
    </>
  );
}

function Order({ closeHoure }) {
  return (
    <div className="order">
      <p>we are open until {closeHoure}:00</p>
      <p>{new Date().toLocaleTimeString()} we corrntly open</p>
      <button className="btn" type="submit">
        oreder
      </button>
    </div>
  );
}
// caderddddd

// function Hole() {
//   return (
//     <>
//       <div className="card">
//         <Avatar />
//         <div className="data">
//           <Intro />
//           <SkillList name="html + css" emj="😁" background="red" />
//           <SkillList name="react" emj="😎" background="red" />
//           <SkillList name="javascript + css" emj="😘" background="red" />
//           <SkillList name="tailwind" emj="🤦‍♂️" background="red" />
//           <SkillList name="bootstrap" emj="❤️" background="red" />
//         </div>
//       </div>
//     </>
//   );
// }

// function Avatar() {
//   return (
//     <img
//       src="https://avatars.githubusercontent.com/u/18718850?v=4"
//       alt="githubusercontent"
//     />
//   );
// }

// function Intro() {
//   return (
//     <div>
//       <h1>my name is mehdi</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
//         laboriosam repudiandae autem quis doloremque molestias sapiente iste
//         harum distinctio voluptas quisquam corporis eius iusto nihil ducimus
//         impedit inventore cumque consequatur.
//       </p>
//     </div>
//   );
// }

// function SkillList(props) {
//   const style = props.background;

//   return (
//     <div
//       style={{
//         backgroundColor: style,
//         margin: "5px",
//         marginBottom: "",
//         padding: "3px",
//         display: "inline-block",
//       }}
//     >
//       <span>{props.name}</span>
//       <span>{props.emj}</span>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
