let origin = window.origin;
var WEB_BASE_URL = "";
if (origin === "http://localhost:3001") {
    //"https://api.kanocds.org"
    //http://kanocds-home.web.app
    WEB_BASE_URL = origin + "/api";
}
else {
    WEB_BASE_URL = "https://api.kanocds.org";
}
module.exports = { WEB_BASE_URL };
