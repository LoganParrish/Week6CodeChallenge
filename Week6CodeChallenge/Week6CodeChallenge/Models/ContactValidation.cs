using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Week6CodeChallenge.Models
{
    [MetadataType(typeof(ContactValidation))]
    public partial class Contact
    {
    }
    public class ContactValidation
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required, EmailAddress]
        public string email { get; set; }
        public string companyName { get; set; }
        public string projectDescription { get; set; }
        public string phoneNum { get; set; }
        [Required]
        public string comment { get; set; }
    }
}