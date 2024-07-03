import './Something.css';
import image from "../assets/cat-2.jpg"
const Something = () => {
  return (
    <div className="main-container">
      <div className="left">
        <img src={image} alt="Person using laptop" />
      </div>
      <div className="right">
        <div className="item">
          <div>
            <h3>💡 Learn Anything Online</h3>
            <p className="description">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli.</p>
          </div>
        </div>
        <div className="item">
          <div>
            <h3>🏆 Communicate with People</h3>
            <p className="description">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli eu sollicitudin sem iaculis.</p>
          </div>
        </div>
        <div className="item">
          <div>
            <h3>🧩 Share Your Knowledge</h3>
            <p className="description">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Something;
