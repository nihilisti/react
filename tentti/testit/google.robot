*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Google Haku
    Open Browser    http://www.google.com    chrome
    Input Text      name=q                   robot framework
    Click Button    name=btnK