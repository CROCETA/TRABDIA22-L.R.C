import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     (
    <div className="container">
      <div className="retangulo">
        <div className="moeda">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWmkBvTXbrs5sRfGXK7xAPyzMutG9rBICwA&s" alt="" />
        </div>
      </div>

      <div className="foto">
        <img src="https://img-cdn.pixlr.com/image-generator/history/67dc4e154beeeebee9907b2f/e2fe8771-f28f-444d-a532-82f4c904976c/preview.webp" alt="" />
      </div>

      <div>
        <div>
          <div></div>
          <div className="quadradofundo">
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
              <img className="vendido" src="https://w7.pngwing.com/pngs/179/190/png-transparent-youtube-youtube-text-logo-film.png" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
              <img className="vendido" src="https://w7.pngwing.com/pngs/179/190/png-transparent-youtube-youtube-text-logo-film.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="quadradofundo">
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
              <img className="vendido" src="https://w7.pngwing.com/pngs/179/190/png-transparent-youtube-youtube-text-logo-film.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="quadradofundo">
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
              <img className="vendido" src="./vendido.png" alt="" />
            </div>
            <div className="foto2">
              <img src="https://img-cdn.pixlr.com/image-generator/history/67dc1f9ff6a2a96a02284e11/9b4472a1-71e5-4e97-b568-5ca055069348/preview.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="quadradobaixo">
        <div style={{ display: 'flex' }}>
          <div className="youtube">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHghIxhkuWlPFufUSo0IEcxUMiFmbffm6pQ&s" alt="" />
          </div>
          <div className="instagram">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HjE7MhnpfBvhiA215jaew7DHWwkBghlRoA&s" alt="" />
          </div>
        </div>

        <div className="texto">
          <p></p>
        </div>
      </div>
    </div>
  );



    </>
  );
}

export default App;
