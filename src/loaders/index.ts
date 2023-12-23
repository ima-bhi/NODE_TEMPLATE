import expressLoader from "./express";
import dependencyInjectorLoader from "../loaders/dependencyInjector";
import mongooseLoader from "../loaders/mongoose";
import jobsLoader from "./jobs";
import Logger from "../loaders/logger";
import config from "../config";
//We have to import at least all the events once so they can be triggered
import "./events";
export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader(config.scy.databaseURL);
  Logger.info("Mongo loaded & connected!");

  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [],
  });
  Logger.info("Dependency Injector loaded");

  await jobsLoader({ agenda });
  Logger.info("Jobs loaded");

  await expressLoader({ app: expressApp });
  Logger.info("Express loaded");
};
