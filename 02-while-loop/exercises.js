// Retry an operation up to three times, stopping when it succeeds.
let tries = 0;
let success = false;

while (tries < 3 && !success) {
  tries++;
  console.log(`Attempt ${tries}`);

  if (tries === 2) {
    success = true;
  }
}

console.log("Succeeded:", success);

// Process tasks until the queue is empty.
const tasks = [
  { id: 1, status: "pending" },
  { id: 2, status: "pending" },
  { id: 3, status: "pending" },
];

while (tasks.length > 0) {
  const task = tasks.shift();
  task.status = "completed";
  console.log(`Task ${task.id} is ${task.status}`);
}

console.log("Remaining tasks:", tasks.length);
