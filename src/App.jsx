import React from "react";
import { Canvas } from "@react-three/fiber";
import Dog from "./components/model";
import "./App.css";
const App = () => {
  return (
    <>
      <main>
        <Canvas
        id="Canvas-elemm"
          style={{
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 3,
            // background: "url(/background-l.png)",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}
        >
          <Dog />
        </Canvas>

        <div id="navbar-contain">
          <nav id="nav">
            <a className="navButton" href="">
              HOME
            </a>
            <a className="navButton" href="#section-2">
              PROJECT
            </a>
            <a className="navButton" href="">
              ABOUT
            </a>
            <a className="navButton" href="">
              CONTANT
            </a>
          </nav>
          <div id="resume">RESUME</div>
        </div>

        <section id="section-1">
          <div
            id="hore-text-larest"
            style={{
              height: "80%",
              width: "50%",
              textAlign: "right",
              top: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <h1>
              JUST BUILDING <br />
              COOL STUFF,
              <br />
              YOU NEED <br />
              CODER FRIEND
            </h1>
          </div>
          <div
            id="hore-text-smallest"
            style={{
              height: "50%",
              width: "30%",
              textAlign: "left",
              top: "60%",
              marginLeft: "60vw",
              color: "white",
            }}
          >
            <h3>Dogstudio is a multidisciplinary</h3>
            <h3>creative studio at the intersection</h3>
            <h3
              style={{
                marginBottom: "20px",
              }}
            >
              of art, design and technology.
            </h3>
            <h6>Dogstudio is a multidisciplinary</h6>
            <h6>creative studio at the intersection</h6>
            <h6>of art, design and technology.</h6>
          </div>
        </section>

        <section id="section-2">
          <h3>PROJECT LIST</h3>
          <div className="project_lable-first" id="project_lable">
            <div img-title="tomorrowland" className="project-Info">
              <h1>Tomorrowland</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Assumenda magni corporis omnis consequuntur,
                <br /> iste optio quia in facilis facere ipsa.
              </p>
            </div>
          </div>
          <div id="project_lable">
            <div img-title="tomorrowland" className="project-Info">
              <h1>Navy Pier</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat eaque, sequi iste tenetur <br />
                dignissimos facere laboriosam et amet illo reprehenderit.
              </p>
            </div>
          </div>
          <div id="project_lable">
            <div img-title="tomorrowland" className="project-Info">
              <h1>MSI Chicago</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus at ipsum perferendis <br /> nihil quisquam quos
                reiciendis asperiores temporibus.
              </p>
            </div>
          </div>
          <div id="project_lable">
            <div img-title="tomorrowland" className="project-Info">
              <h1>LakshyaX</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                amet impedit dolore <br />
                assumenda atque, tempora non, ad quia consequuntur iste.
              </p>
            </div>
          </div>
        </section>

        <section id="section-3">
          <div
            id="hore-text-dog"
            style={{
              height: "80%",
              width: "50%",
              textAlign: "right",
              top: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <h1>
              JUST BUILDING <br />
              COOL STUFF,
              <br />
              YOU NEED <br />
              CODER FRIEND
            </h1>
          </div>
        </section>
        
        <section id="section-4">
          <div
            id="hore-text-smallest"
            style={{
              height: "50%",
              width: "30%",
              textAlign: "left",
              top: "60%",
              marginLeft: "60vw",
              color: "white",
              zIndex: 3,
              position: "relative",
            }}
          >
            <h3>Dogstudio is a multidisciplinary</h3>
            <h3>creative studio at the intersection</h3>
            <h3
              style={{
                marginBottom: "20px",
              }}
            >
              of art, design and technology.
            </h3>
            <h6>Dogstudio is a multidisciplinary</h6>
            <h6>creative studio at the intersection</h6>
            <h6>of art, design and technology.</h6>
          </div>
        </section>

        <footer>
          <h3>Develop by Tanmay Rahul Suradkar</h3>
        </footer>
      </main>
    </>
  );
};

export default App;
