const Ui = pc.createScript("ui");

Ui.attributes.add("css", {
  type: "asset",
  assetType: "css",
  title: "CSS Asset"
});
Ui.attributes.add("html", {
  type: "asset",
  assetType: "html",
  title: "HTML Asset"
});

Ui.attributes.add("js", {
  type: "asset",
  title: "index.js"
});

Ui.prototype.initialize = function() {
  const body = document.getElementsByTagName("body")[0];
  const head = document.getElementsByTagName("head")[0];
  const style = `<style>${this.css.resource}</style>`;

  const script = document.createElement("script");
  script.type="text/javascript";
  script.src = this.js.getFileUrl()
 
  body.insertAdjacentHTML("afterbegin", this.html.resource);
  head.insertAdjacentHTML("afterbegin", style);
  body.appendChild(script)

  document.getElementById("application-canvas").style.position = "static"
};