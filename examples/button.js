/*jshint esversion: 6, asi: true, laxbreak: true*/
// import pc from "../lib/playcanvas";

var Button = pc.createScript('button');
Button.attributes.add("title", {"type": "string"})
Button.attributes.add("body", {"type": "string"})

// initialize code called once per entity
Button.prototype.initialize = function() {
    const payload = {
            title: this.title, 
            body: this.body
        }
    
    this.entity.element.on(pc.EVENT_MOUSEDOWN, () => {
        store.dispatch({ type: 'SHOW_MODAL', payload});
    })
    
    this.entity.element.on(pc.EVENT_TOUCHSTART, () => {
    
        store.dispatch({ type: 'SHOW_MODAL',  payload });
    })
};

