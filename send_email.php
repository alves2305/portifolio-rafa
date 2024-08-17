<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST['email'];
    $message = $_POST['message'];

    // Validação simples
    if (filter_var($userEmail, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        
        // Seu e-mail para receber a mensagem
        $to = "raffa.alves.souza@gmail.com";
        $subject = "Nova mensagem do portfólio";
        $body = "E-mail: " . $userEmail . "\n\nMensagem: " . $message;

        // Cabeçalhos do e-mail
        $headers = "From: " . $userEmail . "\r\n";
        $headers .= "Reply-To: " . $userEmail . "\r\n";

        // Enviar e-mail
        if (mail($to, $subject, $body, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Erro ao enviar a mensagem. Tente novamente.";
        }
    } else {
        echo "E-mail ou mensagem inválidos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>