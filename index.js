// const http = require("http");
const os = require("os");
const chalk = require("chalk");
const readline = require("readline");

// TODO: uso CPU (OK)

let previousCpuTimes = os.cpus();

function cpuUsage() {
  const currentCpuTimes = os.cpus();
  let user = 0;
  let sys = 0;
  let idle = 0;
  let total = 0;

  for (let i = 0; i < currentCpuTimes.length; i++) {
    const prevCpu = previousCpuTimes[i].times;
    const currCpu = currentCpuTimes[i].times;

    user += currCpu.user - prevCpu.user;
    sys += currCpu.sys - prevCpu.sys;
    idle += currCpu.idle - prevCpu.idle;
  }

  total = user + sys + idle;
  user = ((user / total) * 100).toFixed(2);
  sys = ((sys / total) * 100).toFixed(2);
  idle = ((idle / total) * 100).toFixed(2);
  previousCpuTimes = currentCpuTimes;

  clearLine();

  return process.stdout.write(
    `User: ${user}%, System: ${sys}%, Idle: ${idle}%   \r`
  );
}

// TODO: uso Memoria (OK)

function checkMemory() {
  const freemem = os.freemem() / 1024 / 1024 / 1024;

  clearLine();

  if (freemem > 1.1) {
    process.stdout.write(
      chalk.bgGreen(`Status da Memoria: ${freemem.toFixed(2)} GB   \r`)
    );
  } else {
    process.stdout.write(
      chalk.bgRed(`Status da Memoria: ${freemem.toFixed(2)} GB   \r`)
    );
  }
}

// TODO: uso Disco

// TODO: uso de threads

// TODO: temperatura

// TODO: arquitetura

// TODO: imprimir no console em tempo real (OK)

function clearLine() {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
}

function consolePrint() {
  readline.cursorTo(process.stdout, 0, 0);
  cpuUsage();
  readline.cursorTo(process.stdout, 0, 1);
  checkMemory();
}

setInterval(() => {
  consolePrint();
}, 1000);
