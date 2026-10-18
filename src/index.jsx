import {render} from "preact"

import {BoardConfigProvider} from "./Contexts/BoardContext";
import "./Colors.css"

import Qwixx from "./Qwixx"


render(
    <BoardConfigProvider>
        <Qwixx/>
    </BoardConfigProvider>,
    document.getElementById('root')
)
