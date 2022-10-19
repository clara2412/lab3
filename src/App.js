import * as React from "react";
 import * as ReactDOM from "react-dom";
import MyComponent from "./Component/MyComponent";


import MyList from "./Component/MyList";
import MyInput from "./Component/MyInput";
import MyButton from "./Component/My Button";

/* import MySection from "./Component/MySection";
import MyButton from "./Component/My Button";


const array = ["First", "Second", "Third"];

const object = {
  first: 1,
  second: 2,
  third: 3,
}


export default function (){
const root = ReactDOM.createRoot(document.getElementById("root"));

----EXERCISE 0.0 ---------
root.render(
    <p>
        Hello, <strong>JSX</strong>
    </p>
);


----EXERCISE 0.1 ---------
root.render(
    <div>
        <button />
        <code />
        <input />
        <label />
        <p />
        <pre />
        <select />
        <table />
        <ul />
    </div>
);




----EXERCISE 0.2 ---------
root.render(
  <section>
    <header>
       <h1> A header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content.....</p>
    </main>
    <footer>
      <small>&copy; 2021</small>
    </footer>
  </section>
)


----EXERCISE 0.3 ---------
root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
)

----EXERCISE 0.4 ---------
root.render(
  <section>
    <h1>Array</h1>
    <ul> 
      {array.map((i) => (
        <li key={i} >{i}</li>
      ))}
    </ul>

    <h1>Object</h1>
    <ul>
      {Object.keys(object).map((i) => (
        <li key={i}>
          <strong>{i}: </strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>
)


----EXERCISE 1.0 ---------
root.render(<MyComponent />)
}


----EXERCISE 1.2 ---------
const appState ={
    text: "My Button",
    disable: true,
    items:["First", "Second", "Third"],
};


 function render(props){
    root.render(
        <main>
            <MyButton text={props.text} disable={props.disable}/>
            <MyList items={props.items} />
        </main>
    );
 }
 render(appState);
 setTimeout(()=>
 {
    appState.disable = false;
    appState.items.push("Fourth");

    render(appState);
 }, 1000)



----EXERCISE 1.3 ---------
function render({ second }){
    root.render(
        <main>
            <MyButton />
            <MyButton text={second.text} disabled={second.disabled} />
        </main>
    );
}
render({
    second:{
        text:"Second Button",
        disabled: true,
    },
})



/* ----EXERCISE 2.1 ---------
const [name] =React.useState("Adam");
    const [age] = React.useState(35);

    return (
      <>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
      </>
    );


    
----EXERCISE 2.3---------
function App(){
    const [name, setName] =React.useState("Adam");
    const [age, setAge] = React.useState(35);
    return(
        <>
        <section>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name}</p>
        </section>
        <section>
            <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            <p>My age is {age}</p>
        </section>
        </>
    );
}

export default App;

--Exercise 3.0---

import React, { useState } from "react";
import { ReactDOM } from "react";

const element =(
    <div> Green is the prime color of the word </div>
); 

ReactDOM.render(element, document, getElementById('root'));



// --Exercise 3.0---

const App = () => {
    return (
        <div>
            <MyInput></MyInput> 
        </div>
    );
};

-------EXer4----
const App = () => {
    return (
      <div>
        <div
          className="element"
          style={{
            margin: "0 auto",
            fontSize: "15px",
            backgroundColor: " #d0f0c0",
            border: "1px green solid",
            alignItems: "center",
          }}
        >
          Green is the prime color of the world{" "}
        </div>
      </div>
    );
  };
  export default App;
  

---exer4.3---
const App = () => {
  const smartPeople = [
    { name: "meowmeow", age: 82, IQ: 199 },
    { name: "gau gau", age: 82, IQ: 199 },
    { name: "beeee", age: 82, IQ: 199 },
    { name: "nhăm nhăm", age: 82, IQ: 199 },
    { name: "mech", age: 82, IQ: 199 },
  ];
  return (
    <ul>
      {smartPeople.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};
export default App;



--------Exer 4.2-----

const App = () => {
  return (
    <div>
      <button
        className="element"
        style={{
          margin: "0 auto",
          fontSize: "15px",
          backgroundColor: " #d0f0c0",
          border: "1px green solid",
          alignItems: "center",
        }}
        onClick={() => {
          alert("Alert!!!!");
        }}
      >
        Green is the prime color of the world{" "}
      </button>
    </div>
  );
};

export default App;

 ----Exer 4.4-----
import { logDOM } from "@testing-library/react";
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Ex44 = () => {
  const card = {
    title: "Elon musk",
    description:
      "một con mèo béo ụ, xinh xinh .................hihi",
    avatar: "https://haycafe.vn/wp-content/uploads/2022/02/anh-meo-cute-hinh-cute-meo.jpg",
    cover:
      "https://sieupet.com/sites/default/files/anh_meo_hai_huoc1.jpg",
  };
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Meta
        avatar={<Avatar src={card.avatar}/>}
        title={card.title}
        description={card.description}
        cover={<img alt="example" src={card.cover} />}
      />
    </Card>
  );
};

export default Ex44;

*/ 
// Exercise 4.5
const Ex45 = () => {
    const user= {
        firstName:"An",
        lastName:"CLR",
        age: 18
    }

    const element =(
        <div>
            <h1> first name </h1>
            <h1> last name </h1>
            <h1>age: 18</h1>
        </div>
    );
}
 
export default Ex45;