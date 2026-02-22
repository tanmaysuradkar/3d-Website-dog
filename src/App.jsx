import React from "react";
import { Canvas } from "@react-three/fiber";
import Dog from "./components/model";
import "./App.css";
const App = () => {
  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>

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
          <div id="resume">full resume</div>
        </div>
          <div id="hore-img-porfolio">
            <img src="./tanmay-suradkar.jpg" alt="" />
          </div>
        <section id="section-1">
          <div
            id="hore-text-larest"
            style={{
              height: "80%",
              width: "50%",
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
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <small>2025 - NEXT.JS</small>
              <h1>LakshyaX</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>2025 - MERN</small>
              <h1>Scatch</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>2020 - ONGOING</small>
              <h1>  MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>2020 - ONGOING</small>
              <h1>This Was Louise’s Phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>2020 - ONGOING</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>2020 - ONGOING</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>2020 - ONGOING</small>
              <h1>Royal Opera Of Wallonia</h1>
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
          <h3>Redevelop of Dogstudio website by Tanmay Rahul Suradkar</h3>
        </footer>
      </main>
    </>
  );
};

export default App;
