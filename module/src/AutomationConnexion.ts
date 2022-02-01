import { EvntCom } from "@evntboard/evntcom-node";
import robot from "robotjs";

export class AutomationConnexion {
  private name: string;
  private evntCom: EvntCom;

  constructor(evntBoardHost: string, evntBoardPort: number, name: string) {
    this.name = name;
    this.evntCom = new EvntCom({
      name,
      port: evntBoardPort,
      host: evntBoardHost,
    });

    this.evntCom.on('open', async () => {
      await this.evntCom.notify("newEvent", [
        "automation-load",
        null,
        { emitter: this.name },
      ]);
    });

    this.evntCom.expose("setKeyboardDelay", async (ms: number) =>
      robot.setKeyboardDelay(ms)
    );

    this.evntCom.expose(
      "keyTap",
      async (key: string, modifier?: string | string[]) =>
        robot.keyTap(key, modifier)
    );

    this.evntCom.expose(
      "keyToggle",
      async (key: string, down: string, modifier?: string[]) =>
        robot.keyToggle(key, down, modifier)
    );

    this.evntCom.expose("typeString", async (message: string) =>
      robot.typeString(message)
    );

    this.evntCom.expose(
      "typeStringDelayed",
      async (message: string, cpm: number) =>
        robot.typeStringDelayed(message, cpm)
    );

    // mouse

    this.evntCom.expose("setMouseDelay", async (ms: number) =>
      robot.setMouseDelay(ms)
    );

    this.evntCom.expose("moveMouse", async (x: number, y: number) =>
      robot.moveMouse(x, y)
    );

    this.evntCom.expose("moveMouseSmooth", async (x: number, y: number) =>
      robot.moveMouseSmooth(x, y)
    );

    this.evntCom.expose("mouseClick", async (side: string, double: boolean) =>
      robot.mouseClick(side, double)
    );

    this.evntCom.expose("mouseToggle", async (down: string, button: string) =>
      robot.mouseToggle(down, button)
    );

    this.evntCom.expose("dragMouse", async (x: number, y: number) =>
      robot.dragMouse(x, y)
    );

    this.evntCom.expose("getMousePos", async () => robot.getMousePos());

    this.evntCom.expose("scrollMouse", async (x: number, y: number) =>
      robot.scrollMouse(x, y)
    );

    // screen

    this.evntCom.expose("getPixelColor", async (x: number, y: number) =>
      robot.getPixelColor(x, y)
    );

    this.evntCom.expose("getScreenSize", async () => robot.getScreenSize());

    this.evntCom.expose(
      "screenCapture",
      async (x: number, y: number, width: number, height: number) =>
        robot.screen.capture(x, y, width, height)
    );

    this.evntCom.connect();
  }
}
