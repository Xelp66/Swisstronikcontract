const fs = require('fs').promises;
const path = require('path');

let database = {
  version: 1,
  token: "a969d8e5a9493cb903323b6055439166fdd6652f3dc27b69b9b198940d70432f",
  stats: {
    creditsEarned: 0,
    networkPerformance: 0,
    solvedTasks: 0,
    status: "active",
    totalEarnings: 0,
    totalUptime: 0
  },
  models: [],
  schedule: {
    days: new Set(["monday", "tuesday", "wednesday", "thursday", "friday"]),
    mode: "all",
    startTime: "10:00",
    stopTime: "16:00",
    usage: "maximum"
  },
  system: {
    gpuInfo: undefined
  }
};

const updateDatabase = async (updatedData) => {
  const updatedDatabase = Object.assign({}, database);

  if ('token' in updatedData) {
    updatedDatabase.token = updatedData.token;
  }
  if ('models' in updatedData) {
    updatedDatabase.models = updatedData.models;
  }
  if ('stats' in updatedData) {
    updatedDatabase.stats = {
      ...database.stats,
      ...updatedData.stats,
    };
  }
  if ('schedule' in updatedData) {
    updatedDatabase.schedule = {
      ...database.schedule,
      ...updatedData.schedule,
    };
  }
  if ('system' in updatedData) {
    updatedDatabase.system = {
      ...database.system,
      ...updatedData.system,
    };
  }

  await fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(updatedDatabase, null, 2));

  database = updatedDatabase;
};

const initDatabase = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'database.json'), 'utf8');
    database = JSON.parse(data);
  } catch (error) {
    await fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(database, null, 2));
  }
};

module.exports = {
  database,
  updateDatabase,
  initDatabase,
};