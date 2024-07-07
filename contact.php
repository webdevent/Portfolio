<?php
  // Configuration
  $to = 'danieldaneennis24@gmail.com';
  $subject = 'Contact Form Submission';

  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

// Create the email message
  $message_body = "Name: $name\n";
  $message_body.= "Email: $email\n";
  $message_body.= "Message: $message";

// Send the email
  mail($to, $subject, $message_body, "From: $email");

// Redirect to a thank-you page or display a success message
header('Location: homepage.html');
exit;
?>