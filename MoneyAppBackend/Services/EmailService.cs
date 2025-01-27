using System.Net.Mail;
using System.Net;
using System.Threading.Tasks;

public class EmailService
{
          private readonly string _smtpServer;
          private readonly int _smtpPort;
          private readonly string _smtpUsername;
          private readonly string _smtpPassword;

          public EmailService(string smtpServer, int smtpPort, string smtpUsername, string smtpPassword)
          {
                    _smtpServer = smtpServer;
                    _smtpPort = smtpPort;
                    _smtpUsername = smtpUsername;
                    _smtpPassword = smtpPassword;
          }

          public async Task SendEmailAsync(string toEmail, string subject, string body)
          {
                    var client = new SmtpClient(_smtpServer, _smtpPort)
                    {
                              Credentials = new NetworkCredential(_smtpUsername, _smtpPassword),
                              EnableSsl = true
                    };

                    var mailMessage = new MailMessage
                    {
                              From = new MailAddress(_smtpUsername),
                              Subject = subject,
                              Body = body,
                              IsBodyHtml = true
                    };

                    mailMessage.To.Add(toEmail);

                    await client.SendMailAsync(mailMessage);
          }
}