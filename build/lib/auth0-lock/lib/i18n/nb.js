"use strict";

exports.__esModule = true;
exports.default = {
  error: {
    forgotPassword: {
      "too_many_requests": "Du er midlertidig blokkert på grunn av for mange passord-endringsforsøk. Vent litt før du prøver igjen.",
      "lock.fallback": "Beklager, noe gikk galt med forespørselen om passord endring."
    },
    login: {
      "blocked_user": "Brukeren er blokkert.",
      "invalid_user_password": "Feil legitimasjon.",
      "lock.fallback": "Beklager, noe gikk galt med innloggingsforsøket.",
      "lock.invalid_code": "Feil kode.",
      "lock.invalid_email_password": "Feil epost eller passord.",
      "lock.invalid_username_password": "Feil brukernavn eller passord.",
      "lock.network": "Kunne ikke kontakte serveren. Sjekk nettforbindelsen din og prøv igjen.",
      "lock.popup_closed": "Popup vinduet ble lukket. Prøv igjen.",
      "lock.unauthorized": "Fikk ikke adgang. Prøv igjen.",
      "password_change_required": "Du må endre passord fordi dette er første gang du logger inn eller fordi passordet har utløpt.", // TODO: verify error code
      "password_leaked": "Denne påloggingen er blokkert fordi passordet har blitt lekket på et annet nettsted. Vi har sendt deg en epost med instruksjoner for hvordan du opphever blokkeringen.",
      "too_many_attempts": "Din konto er blokkert på grunn av for mange påloggingsforsøk."
    },
    passwordless: {
      "bad.email": "Epost-adressen er ugyldig",
      "bad.phone_number": "Telefonnummeret er ugyldig",
      "lock.fallback": "Beklager, noe gikk galt"
    },
    signUp: {
      "invalid_password": "Passordet er ugyldig.",
      "lock.fallback": "Beklager, noe gikk galt under registreringen.",
      "password_dictionary_error": "Passordet er for vanlig.",
      "password_no_user_info_error": "Passordet er basert på bruker-informasjon.",
      "password_strength_error": "Passordet er for svakt.",
      "user_exists": "Brukeren finnes fra før.",
      "username_exists": "Brukernavnet finnes fra før."
    }
  },
  success: { // success messages show above the form or in a confirmation pane
    logIn: "Takk for at du logget inn.",
    forgotPassword: "Vi sendte nettop en epost for å nullstille passordet ditt.",
    magicLink: "Vi sendte en lenke for å logge inn<br>på %s.",
    signUp: "Takk for at du registrerte deg."
  },
  blankErrorHint: "Kan ikke være tom",
  codeInputPlaceholder: "din kode",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "eller",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "eller",
  emailInputPlaceholder: "din.epost@example.com",
  enterpriseLoginIntructions: "Logg inn med bedrifts-legitimasjon.",
  enterpriseActiveLoginInstructions: "Fyll inn bedrifts-legitimasjon ved %s.",
  failedLabel: "Mislyktes!",
  forgotPasswordAction: "Husker du ikke passordet?",
  forgotPasswordInstructions: "Skriv inn epost-adressen din. Vi sender deg en epost for å nullstille passordet.",
  forgotPasswordSubmitLabel: "Send epost",
  invalidErrorHint: "Ugyldig",
  lastLoginInstructions: "Forrige gang logget du inn med",
  loginAtLabel: "Logg inn påLog in at %s",
  loginLabel: "Logg inn",
  loginSubmitLabel: "Logg inn",
  loginWithLabel: "Logg inn med %s",
  notYourAccountAction: "Ikke din konto?",
  passwordInputPlaceholder: "ditt passord",
  passwordStrength: {
    containsAtLeast: "Inneholder minst %d av følgende %d type tegn:",
    identicalChars: "Ikke mer enn %d like tegn etterhverandre (dvs. \"%s\" er ikke tillatt)",
    nonEmpty: "Passordet kan ikke være tomt",
    numbers: "Tall (dvs. 0-9)",
    lengthAtLeast: "Minst %d tegn langt",
    lowerCase: "Små bokstaver (a-å)",
    shouldContain: "Bør inneholde:",
    specialCharacters: "Spesialtegn (dvs. !@#$%^&*)",
    upperCase: "Store bokstaver (A-Å)"
  },
  passwordlessEmailAlternativeInstructions: "Alternativt, skriv inn din epost-adresse for å logge inn<br>eller opprette en konto",
  passwordlessEmailCodeInstructions: "En epost med koden har blitt sendt til %s.",
  passwordlessEmailInstructions: "Skriv inn din epost-adresse for å logge inn<br>eller opprette en konto",
  passwordlessSMSAlternativeInstructions: "Alternativt, skriv inn ditt telefonnummer for å logge inn<br>eller opprette en konto",
  passwordlessSMSCodeInstructions: "En SMS med koden har blitt sendt til %s.",
  passwordlessSMSInstructions: "Skriv inn ditt telefonnummer for å logge inn<br>eller opprette en konto",
  phoneNumberInputPlaceholder: "ditt telefonnummer",
  resendCodeAction: "Fikk du ikke koden?",
  resendLabel: "Send på nytt",
  resendingLabel: "Sender på nytt...",
  retryLabel: "Prøv igjen",
  sentLabel: "Sendt!",
  signUpLabel: "Registrer deg",
  signUpSubmitLabel: "Registrer",
  signUpTerms: "",
  signUpWithLabel: "Registrer deg med %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On aktivert",
  submitLabel: "Send",
  unrecoverableError: "Noe gikk galt.<br />Ta kontakt med teknisk support.",
  usernameFormatErrorHint: "Bruk %d-%d bokstaver, tall og \"_\"",
  usernameInputPlaceholder: "ditt brukernavn",
  usernameOrEmailInputPlaceholder: "brukernavn/epost",
  title: "Auth0",
  welcome: "Velkommen %s!",
  windowsAuthInstructions: "Du er tilkoblet via ditt bedrifts-nettverk&hellip;",
  windowsAuthLabel: "Windows-autentisering"
};
