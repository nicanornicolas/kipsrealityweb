module.exports = {
  apps: [
    {
      name: 'rentflow-worker',
      script: './dist/apps/background-worker/main.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        // Note: PM2 will automatically load the .env file in the same directory
      },
      error_file: './logs/worker-error.log',
      out_file: './logs/worker-out.log',
      time: true,
    },
  ],
};
