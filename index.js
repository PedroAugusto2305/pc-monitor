const http = require("http");
const os = require("os");
const chalk = require("chalk");

// TODO: uso CPU (OK)

function cpuUsage() {
  const getCpu = os.cpus();
  let user = 0;
  let sys = 0;
  let idle = 0;
  let total = 0;

  for (let cpu of getCpu) {
    user += cpu.times.user;
    sys += cpu.times.sys;
    idle += cpu.times.idle;
  }

  total = user + sys + idle;
  user = ((user / total) * 100).toFixed(2);
  sys = ((sys / total) * 100).toFixed(2);
  idle = ((idle / total) * 100).toFixed(2);
  total = 100;

  return process.stdout.write(
    `User: ${user}%, System: ${sys}%, Idle: ${idle}%   \r`
  );
}

// TODO: uso Memoria (OK)

function checkMemory() {
  const freemem = os.freemem() / 1024 / 1024 / 1024;

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

// TODO: imprimir no console em tempo real

function consolePrint() {
  // essa função irá capturar o retorno dos dados monitorados e então mostrá-los de forma asyncrona no console

  // memoryUsage será a primeira função a rodar, e então cada função deverá esperar a anterior para então executar
}

setInterval(() => {
  const memoryUsage = checkMemory();
  const cpuCheck = cpuUsage();

  return {
    memo: process.stdout.write(memoryUsage),
    cpu: process.stdout.write(cpuCheck),
  };
}, 1000);
