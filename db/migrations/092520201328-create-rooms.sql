CREATE TABLE IF NOT EXISTS rooms (
    rooms_instance_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    chatroom_name VARCHAR NOT NULL,
); 