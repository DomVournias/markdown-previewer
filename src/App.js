import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { marked } from "marked";
import example from "../src/example.md";

function App() {
  // const [initialState, setInitialState] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(example)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
        setHtml(marked(text));
      });
  }, []);

  console.log(markdown);

  const handlePreview = (e) => {
    setMarkdown(e.target.value);
    setHtml(marked(e.target.value));
  };

  console.log(markdown);

  return (
    <>
      <Header />
      <main>
        <aside id="left">
          <div id="inner">
            <label htmlFor="editor" id="label">
              Markdown
            </label>
            <textarea
              id="editor"
              name="editor"
              value={markdown}
              onChange={handlePreview}
            />
          </div>
        </aside>
        <aside id="right">
          <div id="inner">
            <label htmlFor="editor" id="label">
              Preview
            </label>
            <div
              id="preview"
              name="preview"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default App;
