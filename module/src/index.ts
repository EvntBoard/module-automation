import { ConfigLoader } from "./ConfigLoader";
import { AutomationConnexion } from "./AutomationConnexion";

const main = async () => {
  const configLoader = new ConfigLoader();
  await configLoader.load();

  const conf = configLoader.getConfig();

  new AutomationConnexion(conf.host, conf.port, conf.name || "automation");
};

main();
