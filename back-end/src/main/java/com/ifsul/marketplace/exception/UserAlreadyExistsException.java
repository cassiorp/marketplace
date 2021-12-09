package com.ifsul.marketplace.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserAlreadyExistsException extends ResponseStatusException {
    public UserAlreadyExistsException(String reason) {
        super(HttpStatus.BAD_REQUEST, reason);
    }
}