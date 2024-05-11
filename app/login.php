
    <?php
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root";
$password = "new_password";
$dbname = "BicepsFuel";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Retrieve user data from database
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Start session
        session_start();
        // Store username in session variable
        $_SESSION['username'] = $username;
        // Redirect to index.html (main page)
        header("Location: index.html");
        exit;
    } else {
        echo "Invalid username or password";
    }
} else {
    echo "Invalid username or password";
}

$conn->close();
