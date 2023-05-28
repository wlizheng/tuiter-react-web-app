import Nav from "../../nav";
import {Link} from "react-router-dom";

function HelloWorld() {
  return (
      <div>
        {/*<Link to="/labs/a3">A3</Link> |*/}
        {/*<Link to="/hello">Hello</Link> |*/}
        {/*<Link to="/tuiter">Tuiter</Link>*/}
        <Nav/>
        <h1>Hello World!</h1>
      </div>
  );
}

export default HelloWorld;