const cron = require("node-cron");

const firstTask = cron.schedule("* * * * * *", () => {
    console.log("Running cron job...");
    firstTask.stop();
});
