//添加log4js日志
const log4js = require('log4js')
const logger = log4js.getLogger("app")
const connect = require('koa-connect')

logger.level = 'info';

log4js.configure({
  "appenders": {
    "console": {
      "type": 'console',
    },
    "access": {
      "type": "dateFile",
      "filename": "log/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http",
      layout: {
        type: 'pattern',
        pattern: '[%d] [%m]'
      }
    },
    "app": {
      "type": "file",
      "filename": "log/app.log",
      "maxLogSize": 10485760,
      "numBackups": 3
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": {
      "appenders": ["app", "errors"],
      "level": "info"
    },
    "http": {
      //"appenders": ["console", "access"],
      "appenders": ["access"],
      "level": "info"
    }
  }
})

module.exports = connect(log4js.connectLogger(log4js.getLogger("http"), {
  level: 'auto'
}))