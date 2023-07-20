/* eslint-disable no-console */
import del from 'del';
import fs from 'fs-extra';
import path from 'path';
import { simpleGit as git } from 'simple-git';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/eslint-plugin-hpe-design-system.git`;
const localFolder = path.resolve('.tmp/eslint-plugin-hpe-design-system');
const localDist = path.resolve('dist');

if (process.env.CI) {
  del(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('stable'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, localFolder))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit('stable updated'))
      .then(() => git(localFolder).push('origin', 'stable'))
      .catch(err => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. Release:stable task should be executed by CI only.',
  );
}
