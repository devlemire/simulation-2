CREATE TABLE Users ( UserId SERIAL PRIMARY KEY, Username TEXT, Password TEXT );
INSERT INTO Users ( Username, Password ) VALUES ( 'test', 'test' );