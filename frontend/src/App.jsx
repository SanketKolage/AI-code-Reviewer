import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-jsx"
import prism from "prismjs";
import "./App.css";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import Header from "./components/Header";

function App() {
  const [code, setCode] = useState(`
    function sum(){
return 1+1
}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Header></Header>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: "Fira code",
                fontSize: 17,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            ></Editor>
          </div>
          <div>
            <button className="review" onClick={reviewCode}>
              Review
            </button>
          </div>
        </div>
        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
