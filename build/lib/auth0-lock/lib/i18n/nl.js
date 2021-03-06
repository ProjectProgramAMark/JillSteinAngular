"use strict";

exports.__esModule = true;
exports.default = {
  error: {
    forgotPassword: {
      "too_many_requests": "U heeft de limiet van wachtwoord aanpassings pogingen bereikt. Wacht even voor dat u het nog een keer probeert.",
      "lock.fallback": "Onze excuses, er is iets fout gegaan bij de de aanvraag voor een wachtwoord aanpassing."
    },
    login: {
      "blocked_user": "De gebruiker is geblokeerd.",
      "invalid_user_password": "Gebruiker of wachtwoord is niet correct.",
      "lock.fallback": "Onze excuses, er is iets mis gegaan bij het aanmelden.",
      "lock.invalid_code": "Verkeerde code.",
      "lock.invalid_email_password": "Verkeerde e-mailadres of wachtwoord.",
      "lock.invalid_username_password": "Verkeerde gebruikersnaam of wachtwoord.",
      "lock.network": "Server is niet bereikbaar. Controleer uw netwerk verbinding en probeer het nog eens.",
      "lock.popup_closed": "Popup venster gesloten. Probeer het nog een keer.",
      "lock.unauthorized": "Authorisatie geweigerd. Probeer het nog een keer.",
      "password_change_required": "U moet uw wachtwoord aanpassen omdat dit de eerste keer is dat u inlogt of omdat uw wachtwoord is verlopen.", // TODO: verify error code
      "password_leaked": "Deze login is geblokkeerd omdat uw wachtwoord is gelekt op een andere website. We hebben een e-mail verstuurd met instructies voor het deblokkeren.",
      "too_many_attempts": "Uw account is geblokkeerd als gevolg van herhaalde pogingen om in te loggen."
    },
    passwordless: {
      "bad.email": "Het e-mailadres is ongeldig",
      "bad.phone_number": "Het telefoonnummer is ongeldig",
      "lock.fallback": "Onze excuses, er is iets fout gegaan."
    },
    signUp: {
      "invalid_password": "Wachtwoord is ongeldig.",
      "lock.fallback": "Onze excuses, er is iets mis gegaan bij de poging om re registreren.",
      "password_dictionary_error": "Wachtwoord is een te bekend woord.",
      "password_no_user_info_error": "Wachtwoord is gebaseerd op gebruikers informatie.",
      "password_strength_error": "Wachtwoord is niet sterk genoeg.",
      "user_exists": "Gebruiker bestaat al.",
      "username_exists": "Gebruikersnaam bestaat al."
    }
  },
  success: { // success messages show above the form or in a confirmation pane
    logIn: "Dank u voor het inloggen.",
    forgotPassword: "Wij hebben een e-mail verstuurd voor het resetten van uw wachtwoord.",
    magicLink: "Wij hebben een link verstuurd, naar %s, om mee in te loggen.",
    signUp: "Bedankt voor uw aanmelding."
  },
  blankErrorHint: "Mag niet leeg zijn",
  codeInputPlaceholder: "uw code",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "of",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "of",
  emailInputPlaceholder: "iets@example.com",
  enterpriseLoginIntructions: "Login met uw bedrijfs inloggegevens.",
  enterpriseActiveLoginInstructions: "Voer uw bedrijfs inloggegevens in op %s.",
  failedLabel: "Gefaald!",
  forgotPasswordAction: "Wachtwoord vergeten??",
  forgotPasswordInstructions: "Geef uw e-mailadres op. Wij sturen een e-mail voor het resetten van uw wachtwoord.",
  forgotPasswordSubmitLabel: "Verstuur e-mail",
  invalidErrorHint: "Ongeldig",
  lastLoginInstructions: "U bent laatst aangemeld met",
  loginAtLabel: "Aanmelden op %s",
  loginLabel: "Aanmelden",
  loginSubmitLabel: "Aanmelden",
  loginWithLabel: "Aanmelden met %s",
  notYourAccountAction: "Niet uw gebruikersaccount?",
  passwordInputPlaceholder: "uw wachtwoord",
  passwordStrength: {
    containsAtLeast: "Bevat minsten %d van de volgende %d type karacters:",
    identicalChars: "Niet meer dan %d identieke karacters op een rij (e.g., \"%s\" is niet toegestaan)",
    nonEmpty: "Wachtwoord mag niet leeg zijn",
    numbers: "Nummers (i.e. 0-9)",
    lengthAtLeast: "Minstens %d karacters lang",
    lowerCase: "kleine letters (a-z)",
    shouldContain: "Moet bevatten:",
    specialCharacters: "Speciale karacters (e.g. !@#$%^&*)",
    upperCase: "Hoofdletters (A-Z)"
  },
  passwordlessEmailAlternativeInstructions: "Anders, voer uw e-mailadres in om in te loggen<br/>of creëer een nieuwe gebruikersaccount",
  passwordlessEmailCodeInstructions: "Er is een e-mail met de code verstuurt naar %s.",
  passwordlessEmailInstructions: "Voer uw e-mailadres in om aan te melden <br/>of maak een nieuwe account aan",
  passwordlessSMSAlternativeInstructions: "Anders, voer uw telefoonnummer in om in te loggen<br/>of creëer een nieuwe gebruikersaccount",
  passwordlessSMSCodeInstructions: "Er is een SMS met de code verstuurt <br/>naar %s.",
  passwordlessSMSInstructions: "Voer uw telefoonnummer in om in te loggen <br/>of creëer een nieuwe gebruikersaccount",
  phoneNumberInputPlaceholder: "uw telefoonnummer",
  resendCodeAction: "Code niet ontvangen?",
  resendLabel: "Opnieuw te verzenden",
  resendingLabel: "wordt verzonden...",
  retryLabel: "Opnieuw proberen",
  sentLabel: "Verzonden!",
  signUpLabel: "Aanmelden",
  signUpSubmitLabel: "Aanmelden",
  signUpTerms: "",
  signUpWithLabel: "Aanmelden met %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On geactiveerd",
  submitLabel: "Verzenden",
  unrecoverableError: "Er ging iets mis.<br />Neem a.u.b. contact op met de technische support.",
  usernameFormatErrorHint: "Gebruik 1-15 letters, nummers en \"_\"",
  usernameInputPlaceholder: "uw gebruikersnaam",
  usernameOrEmailInputPlaceholder: "gebruikersnaam/e-mailadres",
  title: "Auth0",
  welcome: "Welkom %s!",
  windowsAuthInstructions: "U bent verbonden vanaf uw bedrijfsnetwerk&hellip;",
  windowsAuthLabel: "Windows Authenticatie"
};
