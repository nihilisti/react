*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
TenttiButton Click
    Open Browser    localhost:3000    Firefox
    Sleep           2
    Click Button    TenttiButton

Page Title
    Title Should Be    React App

Question Element and Text
    Page Should Contain Element    class:questions
    Element Should Contain         css:div.questions    Mikä on Vespula vulgaris???    message=None

Page Text
    Page Should Not Contain    Nisäkkäät    loglevel=INFO

# Close Browser
#    Sleep            5
#    Close Browser