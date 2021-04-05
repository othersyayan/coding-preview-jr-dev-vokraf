const users = [
  {
    "id":1,
    "email":"george.bluth@reqres.in",
    "first_name":"George",
    "last_name":"Bluth",
    "tag":"new_user"
  },
  {
    "id":2,
    "email":"janet.weaver@reqres.in",
    "first_name":"Janet",
    "last_name":"Weaver",
    "tag":"old_user"
  },
  {
    "id":3,
    "email":"emma.wong@reqres.in",
    "first_name":"Emma",
    "last_name":"Wong",
    "tag":"new_user"
  },
  {
    "id":4,
    "email":"eve.holt@reqres.in",
    "first_name":"Eve",
    "last_name":"Holt",
    "tag":"old_user"
  },
  {
    "id":5,
    "email":"charles.morris@reqres.in",
    "first_name":"Charles",
    "last_name":"Morris",
    "tag":"new_user"
  }
]

// ISSUES 3.A (Array of all user with tag “new_user”)
let newUsers = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].tag == "new_user") {
    newUsers.push(users[i])
  }
}

console.log(`
==========  ALL NEW USERS  ==========

`);
newUsers.map(member => console.log(`ID Member : ${member.id},
Name : ${member.first_name} ${member.last_name},
Email : ${member.email}`));


// ISSUES 3.B (Array of all Email in Users)
let emailUsers = [];

console.log(`

==========  ALL EMAIL IN USERS  ==========

`);
users.map(user => console.log(user.email));


// ISSUES 3.C (Array of all email in user with tag “old_user”)
let emailOldUsers = []

for (let i = 0; i < users.length; i++) {
  if (users[i].tag == "old_user") {
    emailOldUsers.push(users[i])
  }
}

console.log(`

==========  ALL EMAIL IN OLD USERS  ==========

`);
emailOldUsers.map(emailOld => console.log(emailOld.email));