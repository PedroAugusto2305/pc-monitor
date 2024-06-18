const http = require("http");
const os = require("os");
const chalk = require("chalk");

// console.log("Plataform: ", os.platform());
// console.log("Architecture: ", os.arch());
// console.log("OS Type: ", os.type());
// console.log("Machine: ", os.machine());
// console.log("CPUs", os.cpus());
// console.log("Memoria: ", os.freemem());
// console.log("Memoria total: ", os.totalmem());
// console.log(os.hostname());

// TODO: uso CPU

function cpuCheck() {
  let cpuUsage = os.cpus();
}

// TODO: uso Memoria (OK)

function checkMemory() {
  let freemem = os.freemem() / 1024 / 1024 / 1024;

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
setInterval(() => {
  const memoryUsage = checkMemory();
  return memoryUsage;
}, 1000);

// TODO: uso Disco

// TODO: uso de threads

// TODO: temperatura

// TODO: arquitetura
