import { useParams } from "react-router-dom"
import joogidFailist from "../joogid.json"


function Jook() {
  const { number } = useParams();
  const jook = number ? joogidFailist[Number(number)] : undefined;

  return (
    <div>
      {jook}
      {jook === undefined && <div>Jooki ei leitud</div>}
    </div>
  )
}
export default Jook