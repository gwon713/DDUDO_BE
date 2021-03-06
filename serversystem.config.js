module.exports = {
    apps: [{
        name: 'ddudo_BE',
        env: {
            "NODE_ENV": "dev"
        },
        script: './build/start.js',
        instances: 1,
        exec_mode: 'cluster',
        wait_ready: true,
        listen_timeout: 50000,
        kill_timeout: 5000
    }]
}