export default {
  "development": {
    "mongo": {
        "uri": "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
        "options": {
          "user": "arth",
          "pass": "arth",
          "auth": {
            "authSource": "admin"
          }
        }
    },
    "postgres": {
      "username": "postgres",
      "password": "admin",
      "database": "test1",
      "host": "localhost",
      "port": 5432,
      "dialect": "postgres"  
    }
  },
  "test": {
    "mongo": {
      "uri": "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
      "options": {
        "user": "mongoadmin",
        "pass": "1234",
        "auth": {
          "authSource": "admin"
        }
      }
    },
    "postgres": {
      "username": "postgres",
      "password": "admin",
      "database": "test1",
      "host": "localhost",
      "port": 5432,
      "dialect": "postgres"  
    }
  },
  "production": {
    "mongo": {
      "uri": "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
      "options": {
        "user": "mongoadmin",
        "pass": "1234",
        "auth": {
          "authSource": "admin"
        }
      }
    },
    "postgres": {
      "username": "postgres",
      "password": "admin",
      "database": "test1",
      "host": "localhost",
      "port": 5432,
      "dialect": "postgres"  
    }
  }
}