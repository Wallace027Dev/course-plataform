import vitor from "../../images/profs/vitor.jpg";
import { Carousels } from "./styled";

export default function Carousel() {
<<<<<<< HEAD
=======
  const [data, setData] = useState([]);
	const carousel = useRef(null)

  useEffect(() => {
    fetch("https://frontend-project.staart.com/resource/?resourceName=journeys")
      .then((response) => response.json())
      .then(setData)
      .catch((error) {
  	console.log('There has been a problem with your fetch operation: ' + error.message);
  }, []);

	const handleRight = (e) =>{
		e.preventDefault()
		carousel.current.scrollLeft += carousel.current.offsetWidth
		
	}

	const handleLeft = (e) =>{
		e.preventDefault()
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

  if (!data || !data.length) return null;

>>>>>>> 21f9287b0872bfa60eb083d6c1871c7b4bd3a747
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
