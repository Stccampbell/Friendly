CREATE TABLE IF NOT EXISTS rooms (
    message_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    chatroom_name VARCHAR NOT NULL,
);