package com.bruno.cursomc.services;

import org.springframework.mail.SimpleMailMessage;

import com.bruno.cursomc.domain.Pedido;

public interface EmailService {

	void sendOrderConfirmationEmail(Pedido obj);

	void sendEmail(SimpleMailMessage msg);
}
