import packageJson from '../../package.json';

export const statusGet = (req, res) => {
  res.json({
    status: 'ok',
    version: packageJson.version
  });
};