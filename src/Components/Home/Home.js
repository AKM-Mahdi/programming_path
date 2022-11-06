import React from "react";
import Image from "react-bootstrap/Image";
const Home = () => {
  return (
    <>
      <div className="border p-3 rounded">
        <h1>
          <b>HTML</b>
        </h1>
        <h6>The language for building web pages</h6>
        <br />
      </div>
      <div className="border p-3 rounded mt-3">
        <p>
          HTML is the standard markup language for Web pages. With HTML you can
          create your own Website. HTML is easy to learn - You will enjoy it!
        </p>
        <br />
        <h4>
          <b>About this course</b>
        </h4>
        <p className="pt-2">
          all websites use HTML — even this one. It’s a fundamental part of
          every web developer’s toolkit. HTML provides the content that gives
          web pages structure, by using elements and tags, you can add text,
          images, videos, forms, and more. Learning HTML basics is an important
          first step in your web development journey and an essential skill for
          front- and back-end developers.
        </p>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6OlT89roW_fEs5G1Lx2D8PHZ6iVavOtROw&usqp=CAU"></Image>
        <h6>Use This HTML Boilerplate as a Starter for Any Web Dev Project</h6>
        <pre>
          <code class=" language-html">
            <span class="token doctype">&lt;!DOCTYPE html&gt;</span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>html
              </span>
              <br />
              <span class="token attr-name">lang</span>

              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>en
                <span class="token punctuation">"</span>
              </span>

              <span class="token punctuation">&gt;</span>
            </span>
            <span class="token tag">
              <br />
              <span class="token tag">
                <span class="token punctuation">&lt;</span>head
              </span>

              <span class="token punctuation">&gt;</span>
              <br />
            </span>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>meta
              </span>{" "}
              <span class="token attr-name">charset</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>UTF-8
                <span class="token punctuation">"</span>
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>meta
              </span>{" "}
              <span class="token attr-name">name</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>viewport
                <span class="token punctuation">"</span>
              </span>{" "}
              <span class="token attr-name">content</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>width=device-width,
                initial-scale=1.0<span class="token punctuation">"</span>
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <span class="token tag">
              <br />
              <span class="token tag">
                <span class="token punctuation">&lt;</span>meta
              </span>{" "}
              <span class="token attr-name">http-equiv</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>X-UA-Compatible
                <span class="token punctuation">"</span>
              </span>{" "}
              <span class="token attr-name">content</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>ie=edge
                <span class="token punctuation">"</span>
              </span>
              <br />
              <span class="token punctuation">&gt;</span>
            </span>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>title
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            HTML 5 Boilerplate
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;/</span>title
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>link
              </span>{" "}
              <span class="token attr-name">rel</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>stylesheet
                <span class="token punctuation">"</span>
              </span>{" "}
              <span class="token attr-name">href</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>style.css
                <span class="token punctuation">"</span>
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;/</span>head
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>body
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>script
              </span>{" "}
              <span class="token attr-name">src</span>
              <span class="token attr-value">
                <span class="token punctuation">=</span>
                <span class="token punctuation">"</span>index.js
                <span class="token punctuation">"</span>
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token script"></span>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;/</span>script
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;/</span>body
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
            <br />
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;/</span>html
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
      </div>
    </>
  );
};

export default Home;
