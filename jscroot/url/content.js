//lib call
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.template.content+"home.html";
        case "profile/passwords":
            return url.template.content+"profile/passwords.html";
        case "profile/mail":
            return url.template.content+"profile/mail.html";
        case "profile/accounts":
            return url.template.content+"profile/accounts.html";
        case "messages":
            return url.template.content+"messages.html";
        case "notifications/blocked":
            return url.template.content+"notifications/blocked.html";
        case "notifications/silenced":
            return url.template.content+"notifications/silenced.html";
        case "notifications/publish":
            return url.template.content+"notifications/publish.html";
        case "notifications/program":
            return url.template.content+"notifications/program.html";
        case "explore":
            return url.template.content+"explore.html";
        case "saved":
            return url.template.content+"saved.html";
        case "logout":
            return url.template.content+"logout.html";
        case "crud/get":
            return url.template.content+"geojson/table.html";
        case "map/ch1":
            return url.template.content+"geojson/ch1.html";
        case "map/ch2":
            return url.template.content+"geojson/ch2.html";
        case "map/ch3":
            return url.template.content+"geojson/ch3.html";
        case "map/ch4":
            return url.template.content+"geojson/ch4.html";
        case "notifications/geointersect":
            return url.template.content + "notifications/geointersect.html";
        case "notifications/geowithin":
            return url.template.content + "notifications/geowithin.html";
        case "notifications/geonear":
            return url.template.content + "notifications/geonear.html";
        case "notifications/geonearsphere":
            return url.template.content + "notifications/geonearsphere.html";
        case "notifications/geomaxdistance":
            return url.template.content + "notifications/geomaxdistance.html";
        case "notifications/geomindistance":
            return url.template.content + "notifications/geomindistance.html";
        case "notifications/geometry":
            return url.template.content + "notifications/geometry.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "profile/passwords":
            return url.view.content+"jsgeo/ch4/js/register.js";
        case "profile/mail":
            return url.view.content+"jsgeo/ch4/js/login.js";
        case "profile/accounts":
            return url.view.content+"profile/accounts.js";
        case "messages":
            return url.view.content+"messages.js";
        case "notifications/blocked":
            return url.view.content+"notifications/blocked.js";
        case "notifications/silenced":
            return url.view.content+"notifications/silenced.js";
        case "notifications/publish":
            return url.view.content+"notifications/publish.js";
        case "notifications/program":
            return url.view.content+"notifications/program.js";
        case "explore":
            return url.view.content+"explore.js";
        case "saved":
            return url.view.content+"saved.js";
        case "logout":
            return url.view.content+"logout.js";
        case "crud/get":
            return url.view.content+"jsgeo/table.js";
        case "map/ch1":
            return url.view.content+"jsgeo/ch1/ch1.js";
        case "map/ch2":
            return url.view.content+"jsgeo/ch2/js/croot.js";
        case "map/ch3":
            return url.view.content+"jsgeo/ch3/js/main.js";
        case "map/ch4":
            return url.view.content+"jsgeo/ch4/js/main.js";
        case "notifications/geointersect":
            return url.template.content + "notifications/geointersect.js";
        case "notifications/geowithin":
            return url.template.content + "notifications/geowithin.js";
        case "notifications/geonear":
            return url.template.content + "notifications/geonear.js";
        case "notifications/geonearsphere":
            return url.template.content + "notifications/geonearsphere.js";
        case "notifications/geomaxdistance":
            return url.template.content + "notifications/geomaxdistance.js";
        case "notifications/geomindistance":
            return url.template.content + "notifications/geomindistance.js";
        case "notifications/geometry":
            return url.template.content + "notifications/geometry.js";
        default:
            return url.view.content+"home.js";
    }

}