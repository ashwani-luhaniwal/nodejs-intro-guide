/**
 * ----------
 * NodeJS OS
 * ----------
 * Node.js OS provides some basic operating-system related utility functions
 */

const os = require('os');

// This methods returns the amount of free system memory in bytes.
console.log('od.freemem(): \n', os.freemem());

// This method returns the home directory of the current user.
console.log('os.homedir(): \n', os.homedir());

// This method is used to returns the hostname of the operating system.
console.log('os.hostname(): \n', os.hostname());

// This method returns the endianness of the cpu. Its possible values are 'BE' for big endian 
// or 'LE' for little endian.
console.log('os.endianness(): \n', os.endianness());

// This method returns an array containing the 1, 5, and 15 minute load averages. The load average is a 
// time fraction taken by system activity, calculated by the operating system and expressed as a fractional 
// number.
console.log('os.loadavg(): \n', os.loadavg());

// This method returns the operating system platform of the running computer 
// i.e.'darwin', 'win32','freebsd', 'linux', 'sunos' etc.
console.log('os.platform(): \n', os.platform());

// This method returns the operating system release.
console.log('os.release(): \n', os.release());

// This method returns the operating system's default directory for temporary files.
console.log('os.tmpdir(): \n', os.tmpdir());

// This method returns the total amount of system memory in bytes.
console.log('os.totalmem(): \n', os.totalmem());

// This method returns the operating system name. For example 'linux' on linux, 'darwin' on os x 
// and 'windows_nt' on windows.
console.log('os.type(): \n', os.type());

// This method returns the system uptime in seconds.
console.log('os.uptime(): \n', os.uptime());

// This method is used to fetch an array of objects containing information about each cpu/core installed: 
// model, speed (in MHz), and times (an object containing the number of milliseconds the cpu/core spent in: 
// user, nice, sys, idle, and irq).
console.log('os.cpus(): \n', os.cpus());

// This method is used to fetch the operating system CPU architecture.
console.log('os.arch(): \n', os.arch());

// This method returns a list of network interfaces.
console.log('os.networkInterfaces(): \n', os.networkInterfaces());