export const search_User_SQL = 'select * from "user" where user_email = $1 and user_token = $2 and user_social = $3 and user_deleted = false';