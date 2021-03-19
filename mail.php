<?php
    // SMTP
    $object = new stdClass();
    $object->mail = 'energywraith@gmail.com';
    $object->subject = $_POST['subject'];
    $object->content = $_POST['content'];
    $headers = 'From: energywraith@gmail.com' . "\r\n" .
    'Reply-To: energywraith@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    if (mail($object->mail, $object->subject, trim($object->content), $headers)) {
        echo "Email successfully sent to $object->mail...";
    } else {
        echo "Email sending failed...";
    }
?>

