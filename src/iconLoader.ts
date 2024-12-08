'use server';

import fs from 'fs/promises';
import path from 'path';

export async function getIcons() {
  const iconDir = path.resolve('src/assets/icons');
  const files = await fs.readdir(iconDir);

  return files.map((file) =>
    path.basename(file, path.extname(file))
  );
}
