db.createUser(
  {
    user: "shiv",
    pwd: "root",
    roles: [
      {
        role: "readWrite",
        db: "shiv"
      }
    ]
  }
)
