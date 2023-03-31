import { CronJob } from "cron";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { OlpPassword } from "../models";

dayjs.extend(utc);
const oldPasswordsRemover = async (): Promise<void> => {
  const previousYear = dayjs().utc().subtract(1, "year");
  await OlpPassword.deleteMany({ createdAt: { $lte: previousYear } });
};

export const removeOldPasswords = new CronJob("0 0 * * *", oldPasswordsRemover);
