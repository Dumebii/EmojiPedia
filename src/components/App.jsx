import React from "react";
import emojipedia from "../emojipedia"
import Dictionary from "./Dictionary";
import Footer from "./Footer";


function emojipediaGenerator(emoji) {
  return(<div>
    <Dictionary 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning} />
  </div>
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(emojipediaGenerator)}
      </dl>
      <Footer />
     
    </div>
  );
}

export default App;
