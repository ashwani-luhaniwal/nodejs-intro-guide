/**
 * -----------------------
 * NodeJS - Child Process
 * -----------------------
 * The Node.js child process module provides the ability to spawn child processes in a similar manner 
 * to popen(3).
 * There are three major way to create child process:
 *      child_process.exec() method: This method runs a command in a console and buffers the output.
 *      child_process.spawn() method: This method launches a new process with a given command.
 *      child_process.fork() method: This method is a special case of spawn() method to create child 
 *                                   processes.
 * 
 * ----------------------------
 * child_process.exec() method
 * ----------------------------
 * The child_process.exec() method runs a command in a console and buffers the output.
 * 
 *      child_process.exec(command[, options], callback)
 * 
 * command: It specifies the command to run, with space-separated arguments.
 * options: It may contain one or more of the following options:
 *      cwd: It specifies the current working directory of the child process.
 *      env: It specifies environment key-value pairs.
 *      encoding: String (Default: 'utf8')
 *      shell: It specifies string Shell to execute the command with (Default: '/bin/sh' on UNIX, 
 *             'cmd.exe' on Windows, The shell should understand the -c switch on UNIX or /s /c on 
 *             Windows. On Windows, command line parsing should be compatible with cmd.exe.)
 *      timeout: Number (Default: 0)
 *      maxBuffer: Number (Default: 200*1024)
 *      killSignal: String (Default: 'SIGTERM')
 *      uid Number: Sets the user identity of the process.
 *      gid Number: Sets the group identity of the process.
 *      callback: The callback function specifies three arguments error, stdout and stderr which is 
 *                called with the following output when process terminates.
 */
// Print architecture, pid, platform and version of the process
const exec = require('child_process').exec;

// We have created a batch file named "my.bat"
exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
});
// It will execute two commands dir and mkdir child. The dir command will display list of current 
// directory and mkdir command will create a new directory. For linux, you can you ls command to display 
// the current directory list.

/**
 * -----------------------------
 * child_process.spawn() method
 * -----------------------------
 * The child_process.spawn() method launches a new process with a given command. This method returns 
 * streams (stdout & stderr) and it is generally used when the process returns large amount of data.
 * 
 *      child_process.spawn(command[, args][, options])
 * 
 * command: It specifies the command to run.
 * args: It specifies an array List of string arguments.
 * options: It may contain one or more of the following options:
 *      cwd: It specifies the current working directory of the child process.
 *      env: It specifies environment key-value pairs.
 *      stdio: Array|String Child's stdio configuration
 *      customFds: Array Deprecated File descriptors for the child to use for stdio
 *      detached Boolean : The child will be a process group leader
 *      uid Number: Sets the user identity of the process.
 *      gid Number: Sets the group identity of the process.
 * 
 * ----------------------------
 * child_process.fork() method
 * ----------------------------
 * The child_process.fork() method is a special case of the spawn() to create Node processes. 
 * This method returns object with a built-in communication channel in addition to having all the 
 * methods in a normal ChildProcess instance.
 * 
 *      child_process.fork(modulePath[, args][, options])
 * 
 * modulePath: This is a string specifies the module to run in the child.
 * args: It specifies an array List of string arguments.
 * options: It may contain one or more of the following options:
 *      cwd: It specifies the current working directory of the child process.
 *      env: It specifies environment key-value pairs.
 *      execPath: This is a string Executable used to create the child process.
 *      execArgv: It specifies Array List of string arguments passed to the executable 
 *                (Default: process.execArgv).
 *      silent: It specifies Boolean If true, stdin, stdout, and stderr of the child will be piped to 
 *              the parent, otherwise they will be inherited from the parent, see the "pipe" and 
 *              "inherit" options for spawn()'s stdio for more details (default is false).
 *      uid Number: Sets the user identity of the process.
 *      gid Number: Sets the group identity of the process.
 */

