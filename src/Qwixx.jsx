import "./Qwixx.css"
import "./Colors.css"
import "./Sizes.css"

import ControlBar from "./Components/BoardMenu/BoardMenu"
import ScoreGroups from "./Components/ScoreGroups/ScoreGroups"
import MenuGroup from "./Components/Controls/Controls"

export default function Qwixx() {
    return (
      <div className={"app-container"}>
          <ControlBar/>
          <div className={"groups"}>
              <ScoreGroups/>
              <MenuGroup/>
          </div>
      </div>
    )
}
