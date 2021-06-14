const { spawnSync } = require('child_process');

function runCoverage() {
  const args = process.argv.slice(2);
  const htmlOption = '-html';
  const openHtml = args.includes(htmlOption);
  const filter = args[0] !== htmlOption ? args[0] : '';

  const command = 'jest';
  let options = ['--coverage'];

  if (filter) {
    options = [filter, ...options, `--collectCoverageFrom='src/**/${filter}?(.*).ts`];
  }

  console.log(`Running command: \n${command} ${options.join(' ')}`);

  const result = spawnSync(command, options, { stdio: 'inherit' });

  if (openHtml) {
    spawnSync('open-cli', ['coverage/lcov-report/index.html']);
  }

  return result.status;
}

const code = runCoverage();

process.exit(code);
