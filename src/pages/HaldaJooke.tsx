import { Fragment, useState } from "react"
import joogidFailist from "../joogid.json"
import { Link } from "react-router-dom";

function HaldaJooke() {
  const [joogid, uuendaJoogid] = useState(joogidFailist.slice());

  const kustuta = (index: number) => {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogidFailist.slice());
  }

  return (
    <Fragment>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <h1>Joogid</h1>
      {joogid.map((jook, index) => 
        <div key={jook} style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px", marginBottom: "8px"}}>
          <label>{jook}</label>
          <button onClick={() => kustuta(index)}>X</button>
        </div>
      )}
    </Fragment>
  )
}
export default HaldaJooke