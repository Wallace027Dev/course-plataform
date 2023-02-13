import vitor from "../../images/profs/vitor.jpg";
import { Carousels } from "./styled";

export default function Carousel() {
  return (
    <Carousels>
      <div className="item" /*  key={coursesID} */>
        <div className="image">
          <img src={vitor} alt="foto" />
        </div>
        <div className="info">
          <span className="name">title</span>
          <span className="price">group</span>
        </div>
      </div>
      <div className="item" /*  key={coursesID} */>
        <div className="image">
          <img src={vitor} alt="foto" />
        </div>
        <div className="info">
          <span className="name">title</span>
          <span className="price">group</span>
        </div>
      </div>
      <div className="item" /*  key={coursesID} */>
        <div className="image">
          <img src={vitor} alt="foto" />
        </div>
        <div className="info">
          <span className="name">title</span>
          <span className="price">group</span>
        </div>
      </div>
      <div className="item" /*  key={coursesID} */>
        <div className="image">
          <img src={vitor} alt="foto" />
        </div>
        <div className="info">
          <span className="name">title</span>
          <span className="price">group</span>
        </div>
      </div>
    </Carousels>
  );
}
