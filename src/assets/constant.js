const HOST = "https://itrecruit001.herokuapp.com";
// const HOST = "localhost:4000";

const API_SEND_MAIL = `${HOST}/api/sendemail`;
const API_MAIL_SUBSCRIBE =  `${HOST}/api/mail/subscribe`
const icon_submited = require("../assets/images/Subscribe_succeess_icon.png");
const icon_submited_big = require("../assets/images/vector-smart-object.png");

export {
    API_MAIL_SUBSCRIBE,
    API_SEND_MAIL,
    icon_submited,
    icon_submited_big
}