using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace activities.Models.CustomValidations{
    public class UniqueUserAttribute : ValidationAttribute{
        protected override ValidationResult IsValid(object value, ValidationContext validationContext){
            var context = (ActivitiesContext) validationContext.GetService(typeof(ActivitiesContext));
            var allUsers = context.Users;
            foreach(var each in allUsers){
                if((string)value == (string)each.Email){ 
                    return new ValidationResult("You've already registered. Please, login."); 
                    } 
                }
            return ValidationResult.Success;
        }
    }
}