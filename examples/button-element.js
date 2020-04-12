/*jshint esversion: 6, asi: true, laxbreak: true*/

import pc from "../lib/playcanvas";

class Button extends pc.ScriptType {
  initialize() {
    const payload = {
      title: "Hello World",
      body: "Body",
    };

    this.entity.element.on(pc.EVENT_MOUSEDOWN, () => {
      store.dispatch({ type: "SHOW_MODAL", payload });
    });

    this.entity.element.on(pc.EVENT_TOUCHSTART, () => {
      store.dispatch({ type: "SHOW_MODAL", payload });
    });
  }

  update(dt) {}
}

pc.registerScript(Button);
Button.attributes.add("title", {type: "string"})
Button.attributes.add("body", {type: "string"})
