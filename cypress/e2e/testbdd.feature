Feature: test bdd

    Scenario: se connecter en utilisant cucumber
    Given Je suis sur le site saucedemo
    When Je complete le formulaire d'authentification en tant que "<username>" et "<password>"
    Then Je suis connecté avec succès
    
    Examples:
      | username | password  |
      | standard_user   | secret_sauce | 
      | ortonikc | pass1234  |