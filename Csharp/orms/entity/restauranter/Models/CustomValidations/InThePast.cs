using System.ComponentModel.DataAnnotations;
using System;

namespace restauranter.Models.CustomValidations{
    public class InThePastAttribute : ValidationAttribute{
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((DateTime)value > DateTime.Now){
                return new ValidationResult("Date Of Visit must be in the past.");
            }
            return ValidationResult.Success;
        }
    }
}