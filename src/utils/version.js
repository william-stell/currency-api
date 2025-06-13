import fs from 'fs';
import path from 'path';

export function versionGet() {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageData = fs.readFileSync(packagePath, 'utf8');
    const packageJson = JSON.parse(packageData);
    return packageJson.version || 'unknown';
  } catch (error) {
    console.error('Error reading package.json:', error);
    return 'unknown';
  }
}