<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "learning_php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$age = $_POST['age'];
$address = $_POST['address'];
$gender = $_POST['gender'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, age, address, gender) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $first_name, $last_name, $age, $address, $gender);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
