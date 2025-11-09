import { useRef } from "react";
import joogidFailist from "../joogid.json"
import { Link } from "react-router-dom";

function LisaJook() {
  const jookRef = useRef<HTMLInputElement | null>(null);

  const lisaUusJook = () => {
    const nimi = jookRef.current?.value;
    if (!nimi) {
      return;
    }
    joogidFailist.push(nimi)
    if (jookRef.current) {
      jookRef.current.value = "";
    }
  }

  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <label>Joogi nimi</label>
      <input ref={jookRef} />
      <button onClick={lisaUusJook}>Lisa</button>
    </div>
  )
}
export default LisaJook