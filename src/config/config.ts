export default {
  development: {
    mongo: {
      uri: "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
      options: {
        user: "arth",
        pass: "arth",
        auth: {
          authSource: "admin"
        }
      }
    }
  },
  test: {
    mongo: {
      uri: "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
      options: {
        user: "arth",
        pass: "arth",
        auth: {
          authSource: "admin"
        }
      }
    }
  },
  production: {
    mongo: {
      uri: "mongodb+srv://arth:arth@cluster0-xu6iz.mongodb.net/arth?retryWrites=true",
      options: {
        user: "arth",
        pass: "arth",
        auth: {
          authSource: "admin"
        }
      }
    }
  }
}
