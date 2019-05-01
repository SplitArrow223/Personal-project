insert into users (
  username,
  users_email,
  users_hash
) 
values (
  $1,
  $2,
  $3
);
select * from users
where username = $1 and users_email = $2;
