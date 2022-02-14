import * as APP from "./modules/app.js";

// APP.state.debug = true;
APP.init().then(() => {
  APP.engine.log.debug("App loaded!");
});
