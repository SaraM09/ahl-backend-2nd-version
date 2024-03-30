\c dummy_ahl_db;

-- CREATE TABLE incomeDetails (
--     incomeID SERIAL PRIMARY KEY,
--     applicantID INT NOT NULL,
--     annualIncome DECIMAL(10, 2) NOT NULL,
--     sourceOfIncome VARCHAR(255) NOT NULL,
--     FOREIGN KEY (applicantID) REFERENCES personInfo(id)
-- );

ALTER TABLE incomeDetails DROP COLUMN applicantID;
