1. What is the purpose of using _sessions_?
  Sessions provide a way to persist data across request. In terms of authentication, it allows us to persist authentication info so there is no need to enter credentials on every new request made to the server.
1. What does bcrypt do to help us store passwords in a secure manner.
  Bcrypt stores password in hashed form so it is encrypted.

1. What does bcrypt do to slow down attackers?
  Bcrypt use key derivation function. This adds time to the security algorithm.
1. What are the three parts of the JSON Web Token?
  The three parts are header, payload, and secret. 
