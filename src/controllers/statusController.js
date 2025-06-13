
import { versionGet } from "../utils/version.js";

export const statusGet = (req, res) => {
  res.json({
    status: 'ok',
    version: versionGet()
  });
};