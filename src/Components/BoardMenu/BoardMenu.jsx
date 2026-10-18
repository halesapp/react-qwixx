import {useState} from "preact/hooks"

import "./BoardMenu.css"
import {useBoardConfigContext} from "../../Contexts/BoardContext";

import BoardSwitcher from "../Modals/BoardSwitcher"

const navBtnCls = "nav-btn"

export default function BoardMenu() {
    const Board = useBoardConfigContext()

    const [modalVisibleBoard, setModalVisibleBoard] = useState(false)

    return (
      <>
          <div className={"board-menu-wrap"}>
              <div className={"board-menu"}>
                  <div className={"title"}>Quixx</div>
                  <button className={navBtnCls} onClick={() => Board.undo()} disabled={!Boolean(Board.state.undoState)}>
                      <img alt="Undo Button" src={import.meta.env.BASE_URL + "icons/skip-start-fill.svg"}/>
                  </button>
                  <button className={navBtnCls} onClick={() => Board.clear()}>
                      <img alt="Restart Button" src={import.meta.env.BASE_URL + "icons/arrow-clockwise.svg"}/>
                  </button>
                  <button className={navBtnCls} onClick={() => Board.redo()} disabled={!Boolean(Board.state.redoState)}>
                      <img alt="Redo Button" src={import.meta.env.BASE_URL + "icons/skip-end-fill.svg"}/>
                  </button>
                  <button className={navBtnCls} onClick={() => setModalVisibleBoard(true)}>
                      <img alt="Toggle Board" src={import.meta.env.BASE_URL + "icons/grid-3x3-gap.svg"}/>
                  </button>
              </div>
          </div>
          <BoardSwitcher visible={modalVisibleBoard} setVisible={setModalVisibleBoard}/>
      </>
    )
}