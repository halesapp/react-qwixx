import Modal from "../Modal/Modal"

export default function HelpMenu({visible, setVisible}) {

    return (
      <Modal visible={visible} setVisible={setVisible} title={"About"}>
          <>
              <div><a href={"https://hales.app"}>&copy; Riley Hales</a></div>
              <div>Updated: {new Date(__BUILD_DATE__).toLocaleString()}</div>
              <div>Version: {__APP_VERSION__}</div>
              <hr/>
              <div className={"modal-body-divider"}>Quixx Trixx Power Ups</div>
              <ul style={{textAlign: "left"}}>
                  <li>Time Travel: Score a number you previously skipped</li>
                  <li>Re-roll: Re-roll any number of die, but only 1 time</li>
                  <li>Color Blind: Score with any two die on any color group</li>
                  <li>Sneak: Score in a column that has been locked</li>
                  <li>Skip: Skip your turn</li>
              </ul>
          </>
      </Modal>
    )
}