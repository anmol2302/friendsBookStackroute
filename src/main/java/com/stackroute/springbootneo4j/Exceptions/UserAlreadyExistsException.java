package com.stackroute.springbootneo4j.Exceptions;

import com.stackroute.springbootneo4j.model.User;
public class UserAlreadyExistsException extends Throwable {
    String userAlreadyExistsErrorMessage="";
    public UserAlreadyExistsException(String userAlreadyExistsErrorMessage){
        this.userAlreadyExistsErrorMessage=userAlreadyExistsErrorMessage;

    }
    public String getMessage(){
        return userAlreadyExistsErrorMessage;
    }

}
