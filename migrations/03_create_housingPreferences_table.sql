\c dummy_ahl_db

-- CREATE TABLE housingPreferences (
--     preferenceID SERIAL PRIMARY KEY,
--     applicantID INT NOT NULL,
--     preferredLocation VARCHAR(255) NOT NULL,
--     numberOfBedrooms INT NOT NULL,
--     FOREIGN KEY (applicantID) REFERENCES personInfo(id)
-- );
ALTER TABLE housingPreferences DROP COLUMN applicantID;