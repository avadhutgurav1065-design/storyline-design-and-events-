package com.storyline.events.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${storyline.admin.email}")
    private String adminEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendInquiryNotification(String clientName, String clientEmail, String enquiryType, String message) {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(adminEmail);
            mail.setSubject("New Inquiry — " + enquiryType + " — " + clientName);
            mail.setText(
                "New inquiry received on Storyline Design & Events website.\n\n" +
                "Client: " + clientName + "\n" +
                "Email: " + clientEmail + "\n" +
                "Type: " + enquiryType + "\n" +
                "Message: " + (message != null ? message : "No message provided") + "\n\n" +
                "— Storyline Notification System"
            );
            mail.setFrom(adminEmail);
            mailSender.send(mail);
        } catch (Exception e) {
            // Log but don't fail the inquiry submission if email fails
            System.err.println("Failed to send inquiry notification email: " + e.getMessage());
        }
    }

    public void sendInquiryConfirmation(String clientEmail, String clientName, String enquiryType) {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(clientEmail);
            mail.setSubject("Thank you for your inquiry — Storyline Design & Events");
            mail.setText(
                "Dear " + clientName + ",\n\n" +
                "Thank you for reaching out to Storyline Design & Events.\n\n" +
                "We have received your " + enquiryType.toLowerCase() + " inquiry and our team will " +
                "get back to you within 24 hours.\n\n" +
                "In the meantime, feel free to explore our portfolio at www.storylinedesignevents.in\n\n" +
                "Warm regards,\n" +
                "Team Storyline\n" +
                "Premium Event Styling & Production | Pune"
            );
            mail.setFrom(adminEmail);
            mailSender.send(mail);
        } catch (Exception e) {
            System.err.println("Failed to send confirmation email: " + e.getMessage());
        }
    }
}
