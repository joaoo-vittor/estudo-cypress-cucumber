Feature: Pesquisar http status 200 no site MDN

  Scenario Outline: Vizualizar a pagina MDN http status
    Given que eu acesso a pagina home mdn
    Then devo visualizar o input de busca da MDN
    And digito http <status> no input de buscar
    When clico no <status>
    Then visualizo a pagina do http status com o <statusTitle>

    Examples:
      | status |  statusTitle  |
      |  200   |     200 OK    |
      |  404   | 404 Not Found |
      