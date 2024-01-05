//lib call
import { getHash } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL() {
    let hashlink = getHash();
    switch (hashlink) {
        case "home":
            return url.template.content + "home.html";
        case "profile/passwords":
            return url.template.content + "profile/passwords.html";
        case "profile/mail":
            return url.template.content + "profile/mail.html";
        case "profile/accounts":
            return url.template.content + "profile/accounts.html";
        case "messages":
            return url.template.content + "messages.html";
        case "notifications/geointersect":
            return url.template.content + "notifications/geointersect.html";
        case "notifications/geowithin":
            return url.template.content + "notifications/geowithin.html";
        case "notifications/geonear":
            return url.template.content + "notifications/geonear.html";
        case "notifications/geonearsphere":
            return url.template.content + "notifications/geonearsphere.html";
        case "notifications/geomaxdistence":
            return url.template.content + "notifications/geomaxdistence.html";
        case "notifications/geomindistance":
            return url.template.content + "notifications/geomindistance.html";
        case "notifications/geometry":
            return url.template.content + "notifications/geometry.html";
        case "explore":
            return url.template.content + "explore.html";
        case "saved":
            return url.template.content + "saved.html";
        case "logout":
            return url.template.content + "logout.html";
        case "crud/get":
            return url.template.content + "geojson/table.html";
        default:
            return url.template.content + "home.html";
    }

}



export function getURLContentJS() {
    let hashlink = getHash();
    switch (hashlink) {
        case "home":
            return url.view.content + "home.js";
        case "profile/passwords":
            return url.view.content + "profile/passwords.js";
        case "profile/mail":
            return url.view.content + "profile/mail.js";
        case "profile/accounts":
            return url.view.content + "profile/accounts.js";
        case "messages":
            return url.view.content + "messages.js";
        case "notifications/geointersect":
            return url.view.content + "notifications/geointersect.js";
        case "notifications/geowithin":
            return url.view.content + "notifications/geowithin.js";
        case "notifications/geonear":
            return url.view.content + "notifications/geonear.js";
        case "notifications/geonearsphere":
            return url.view.content + "notifications/geonearsphere.js";
        case "notifications/geomaxdistance":
            return url.view.content + "notifications/geomaxdistance.js";
        case "notifications/geomindistance":
            return url.view.content + "notifications/geomindistance.js";
        case "notifications/geometry":
            return url.view.content + "notifications/geometry.js";
        case "explore":
            return url.view.content + "explore.js";
        case "saved":
            return url.view.content + "saved.js";
        case "logout":
            return url.view.content + "logout.js";
        case "crud/get":
            return url.template.content + "geojson/table.html";
        case "map/ch1":
            return url.template.content + "geojson/ch1.html";
        case "map/ch2":
            return url.template.content + "geojson/ch2.html";
        case "map/ch3":
            return url.template.content + "geojson/ch3.html";
        case "map/ch4":
            return url.template.content + "geojson/ch4.html";
        default:
            return url.view.content + "home.js";
    }

}