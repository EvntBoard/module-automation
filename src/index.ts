require("dotenv").config();
import { EvntComNode } from "evntcom-js/dist/node";
import robot from "robotjs";

const NAME: string = process.env.EVNTBOARD_NAME || "automation";
const HOST: string = process.env.EVNTBOARD_HOST || "localhost";
const PORT: number = process.env.EVNTBOARD_PORT
  ? parseInt(process.env.EVNTBOARD_PORT)
  : 5001;

const evntCom = new EvntComNode({
  name: NAME,
  port: PORT,
  host: HOST,
});

// keyboard

evntCom.expose("setKeyboardDelay", async (ms: number) =>
  robot.setKeyboardDelay(ms)
);

evntCom.expose("keyTap", async (key: string, modifier?: string | string[]) =>
  robot.keyTap(key, modifier)
);

evntCom.expose(
  "keyToggle",
  async (key: string, down: string, modifier?: string[]) =>
    robot.keyToggle(key, down, modifier)
);

evntCom.expose("typeString", async (message: string) =>
  robot.typeString(message)
);

evntCom.expose("typeStringDelayed", async (message: string, cpm: number) =>
  robot.typeStringDelayed(message, cpm)
);

// mouse

evntCom.expose("setMouseDelay", async (ms: number) => robot.setMouseDelay(ms));

evntCom.expose("moveMouse", async (x: number, y: number) =>
  robot.moveMouse(x, y)
);

evntCom.expose("moveMouseSmooth", async (x: number, y: number) =>
  robot.moveMouseSmooth(x, y)
);

evntCom.expose("mouseClick", async (side: string, double: boolean) =>
  robot.mouseClick(side, double)
);

evntCom.expose("mouseToggle", async (down: string, button: string) =>
  robot.mouseToggle(down, button)
);

evntCom.expose("dragMouse", async (x: number, y: number) =>
  robot.dragMouse(x, y)
);

evntCom.expose("getMousePos", async () => robot.getMousePos());

evntCom.expose("scrollMouse", async (x: number, y: number) =>
  robot.scrollMouse(x, y)
);

// screen

evntCom.expose("getPixelColor", async (x: number, y: number) =>
  robot.getPixelColor(x, y)
);

evntCom.expose("getScreenSize", async () => robot.getScreenSize());

evntCom.expose(
  "screenCapture",
  async (x: number, y: number, width: number, height: number) =>
    robot.screen.capture(x, y, width, height)
);
