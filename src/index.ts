import { getEvntComServerFromChildProcess } from "evntboard-communicate";
import robot from "robotjs";

const evntComServer = getEvntComServerFromChildProcess();

evntComServer.expose("newEvent", () => {});
evntComServer.expose("load", () => {});
evntComServer.expose("unload", () => {});
evntComServer.expose("reload", () => {});

// keyboard

evntComServer.expose("setKeyboardDelay", (ms: number) => robot.setKeyboardDelay(ms));

evntComServer.expose("keyTap", (key: string, modifier?: string | string[]) => robot.keyTap(key, modifier));

evntComServer.expose("keyToggle", (key: string, down:string, modifier?: string[]) => robot.keyToggle(key, down, modifier));

evntComServer.expose("typeString", (message: string) => robot.typeString(message));

evntComServer.expose("typeStringDelayed", (message:string, cpm:number) => robot.typeStringDelayed(message, cpm));

// mouse

evntComServer.expose("setMouseDelay", (ms:number) => robot.setMouseDelay(ms));

evntComServer.expose("moveMouse", (x: number,y: number) => robot.moveMouse(x, y));

evntComServer.expose("moveMouseSmooth", (x: number,y: number) => robot.moveMouseSmooth(x, y));

evntComServer.expose("mouseClick", (side: string, double: boolean) => robot.mouseClick(side, double));

evntComServer.expose("mouseToggle", (down: string, button: string) =>  robot.mouseToggle(down, button));

evntComServer.expose("dragMouse", (x: number,y: number) => robot.dragMouse(x, y));

evntComServer.expose("getMousePos", () => robot.getMousePos());

evntComServer.expose("scrollMouse", (x: number,y: number) => robot.scrollMouse(x, y));

// screen

evntComServer.expose("getPixelColor", (x: number,y: number) => robot.getPixelColor(x, y));

evntComServer.expose("getScreenSize", () =>  robot.getScreenSize());

evntComServer.expose("screenCapture", (x: number, y: number, width: number, height: number) => robot.screen.capture(x, y, width, height));
