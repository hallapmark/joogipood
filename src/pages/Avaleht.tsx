import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import joogidFailist from "../joogid.json"

function Avaleht() {
  return (
    <Fragment>
      <Link to="/halda"><button>Halda</button></Link> 
      <Link to="/lisa"><button>Lisa</button></Link>
      <h1>Joogid</h1>
      {joogidFailist.map((jook, index) =>
      <div key={jook}> 
        <Link to={"/jook/" + index}>
          <div>{jook}</div>
        </Link>
      </div>
      )}
    </Fragment>
  )
}
export default Avaleht