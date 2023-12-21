import { Beer } from "../../types/types"
import { CardList } from "../CardList/CardList"
import "./Main.scss"

type mainProps = {
    beers: Beer[]
}

export const main = ({beers} : mainProps) => {
  return (
    <main>
      <CardList beers={beers}/>
    </main>
  )
}