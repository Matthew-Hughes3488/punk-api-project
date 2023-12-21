import { Beer } from "../../types/types"
import { CardList } from "../CardList/CardList"
import "./Main.scss"

type mainProps = {
    beers: Beer[]
}

export const Main = ({beers} : mainProps) => {
  return (
    <main className="main-card-container">
      <CardList beers={beers}/>
    </main>
  )
}