# Penny Smart - *Revolutionising Finance for 2023*

**Table of Contents:**
---
---

* [Project Description](#project-description)
    * [Concept](#concept)
    * [Intention](#intention)
    * [Audience](#audience)
* [Wireframes](#wireframes)
    * [Initial Wireframes](#initial-wireframes)
* [Features](#features)
    * [Header](#header)
    * [Footer](#footer)
    * [Unified colour scheme](#unified-colour-scheme)
    * [Navigation](#navigation)
    * [Progress Bar](#progress-bar)
    * [Radio Buttons](#radio-buttons)
    * [Personality Questions](#personality-questions)
    * [Currency Converter](#currency-converter) 
* [Accessbility](#accessibility)
* [Design Choices](#design-choices)
    * [Font](#font)
    * [Images](#images)
    * [Widgets](#widgets)
    * [Unified Colour Schemes](#unified-colour-scheme)
* [Technology, Frameworks and Programs](#technology-frameworks-and-programs)
    * [Languages](#languages)
    * [Frameworks and Programs](#frameworks-and-programs)
* [Bugs](#bugs)
* [Deployment](#deployment)
    * [User Interaction](#user-interaction)
* [Testing](#testing)
* [Credits](#credits)
    * [Resources](#resources-used)
    * [Acknowledgments](#acknowledgements)

---

## Project Description 
---

Collectively as a group we pitched different ideas to each other, in response to the theme revolutionsing finance for 2023. A key challenge was being able to identify the ideas that would best marry up, with our time schedule. After realising some ideas would be overly ambitious, we concluded that there could be ingenuity in simplicity. 

Hitting upon our idea, we delved further into how we could ensure that we solved a **problem**, and we responded to this, with the implementation of our tech skills. We discussed how our potential target audience could be handling budgeting, at a time where our living standards are suffering, because of the cost of living and energy crisis. Everyone has had to be a bit more thrifty and cut back where they can. What we wish to achieve is a budgeting app, that uses visual representations, to enable the indiviudal to make better choices on how they spend and save their money, over a peroid of time. 

Initially the plan was to have a user sign up page linked to a nav bar, however we ran into complications trying to achieve this using materialize, and decided that it could be marketed as an application tool instead. The role of the user will be to take a personality test, which will identify key areas of expenditure, allowing our built in function utilising JavaScript, to randomly generate user specific visuals linked to lifestyle spending. This will highlight how the individual can save money over a chosen time peroid. For instance over a week how often does the user buy a cup of coffee, in turn this will generate the weekly cost in either sterling, dollars or euros. The results page will then clearly represent areas where the user could save money by reducing their consumption of i.e buying coffee from a cafe every day, we could suggest from them to buy a coffee every other day and they will save x anount of money over y amount of time. In order to have real time exchange values we will have to use an api, to interact with our application. 

### Concept 
---

Coding being logic based creativity allowed us to explore and critique our methods as we progressed through the project, we were able to utilise the huddle feature, on slack, to keep regular contact with the team, which allowed us to pursue our vision and concept in a uniformed way. We needed to keep asking who, what, why and how questions in order to achieve what we set out to do. 

Main conceptual points are as follows:

* Interact with our audience in a fun and engaging way, **times are hard** dont be too serious e.g. this could be represented by using a playful colour pallete and widgets.
* Ask questions to guage the individuals personality, we have decided to start with **10 questions** but if we had more development time we would certainly add more.
* Use a **progress bar** to give a visual representation to the user on the number of questions that need to be answered.
* By specifiying how much money the user wants to save the app will generate a response using visual representations of **life style spending habbits**. 
* Alerting the user to the fact that by **reducing** their **consumption** of for example coffee they will be able to save their desired amount of money over a **peroid of time**.

### Intention
---

Penny Smart aims to be marketed towards userbases, who use modern banking applications like **Monzo**, **Revolut** and **Starling**. These banks, allow for their users, to interact, with their budgetting needs. The application we aim to create, could be pitched to likes of these modern banks as a new way for their user bases's to interact with their app in an engaging way. 

### Audience
---

Our target audience would be those predominantly feeling the pinch, as a result of the cost of living crisis. Communicating in a fun and engaging way is key to how we will respond to our potential user basis's concerns and needs. Taking a less serious approach would act as ice breaker, making the world of finance feel a bit more digestable to the **every day joe**. Age range would vary between 18-30 year olds on average.


## Wireframes

---

### Initial Wireframes

---

##### Wireframe 1 description: The first frame test the intension of the user to save and how much he will like to save a particular period. It includes a progress bar and a nav bar to enable the user identify how far he is to getting 
##### the suggestions on improving his savings. The user is able to choose his desired currency. After showing intrest, the user is able to use the next button to start the process.


 ![question-1](Wireframes/question-1.png)

##### Wireframe 2 description: The second frame shows an increasing progress bar with question to how much the user desires to save and it presents a toggle button to switch between months and days.

![question-2](Wireframes/question-2.png)

##### Wireframe 3 description: The third frame is displayong a question that relates to lifestyle habit to guage their consumption, the user is able then able to proceed to the next question.

![question-3](Wireframes/question-3.png)

##### Wireframe 4 description: The fourth frame guages further lifestyle habit to also guage consumption, the user is then able to proceed to the next question.

![question-4](Wireframes/question-4.png)

##### Wireframe 5 description: The fifth frame ask about the consumption of coffee by the user as an input to the randomization figures using radio buttons to indicate true or false and also to indicate the amount of times, 
##### the user is able then able to proceed.

![question-5](Wireframes/question-5.png)

##### Wireframe 6 description: The sixth frame seeks about the users spending on luxuries, here the progress bar shows almost complete and the user is able to proceed to the last question.


![question-6](Wireframes/question-6.png)

##### Wireframe 7 description: The seventh frame ask about the users personal choices, options are selected with radio button providing input to the randomization.

![question-7](Wireframes/question-7.png)

##### Wireframe 8 description: The final frame shows the result of the randomization done and presented in the form of suggestions to the user on how they can spend money more wisely and save their desired total.

![final-output](Wireframes/final-output.png)

<br>

---

## Features
---
* #### Header
    * 

* #### Footer
    * 

* #### Unified Colour Scheme
 [Original colour pallete test using coolors.co](https://coolors.co/palette/05668d-427aa1-ebf2fa-679436-a5be00)
    
    * Discussing the colour palletes allowed us to think about the our audience and who it would appeal to, this was a first deom and we decided that muted coolours would be better suited as the greens came across quite aggressively and didnt communicate our concept as well as it could of done.
 [Final colour pallete test using coolors.co](https://coolors.co/palette/49c6e5-54defd-fffbfa-00bd9d-8bd7d2)
   
    * We believed that this colour pallete situated itself better in conjunction with our concept and theme. The color meaning behind blue green refers to harmony and prosperity. The blue tint evokes trustworthiness and wisdom.
* #### Navigation
    * 

* #### Progress Bar
    * 

* #### Radio Buttons
    * We chose to use radio buttons because it is a simple way to let out our questions and answers to allow the user to interact with the application with ease. 

* #### Peronality Questions
    * 

* #### Currency Converter
    * 

## Accessibility
---

## Design Choices
---

* Our design choices were dictated by our ability to implement materializes framwork to the front end design, the presented challenges, but it also allowed us to achieve a clean design the would communicate our theme and concept to the user.

### Font
---

### Images
---

### Widgets 
---

## Technology, Frameworks and Programs
---

### Languages

* HTML

* JavaScript

* CSS

* API

### Frameworks and Programs

* Materialize
    * Initially the team mates who were tasked with Materialize found using CSS more comfortable, but they welcomes the challenge. They believed that the colours were quite restricted, however, during a team talk we worked out that this can be overided with a custom colour. We learnt that it acts as a template that uses industry standard assets and allowed us to save a large amount of time to achieve the visual features that we wanted present. 
* Github and IDEs included Gitpod and VSCode
    * Storing repositories and manipluating code cross party
* Slack
    * Video calls and messaging, allowing the team to keep communication bfree flowing
* Balsamiq
    * creating wireframes to plan our project

## Bugs
---

* Radio buttons
    * During a huddle team talk we realised that our radio buttons were not appearing, once rendered. We discovered that the label element was missing from the syntax and because we were using materialise it required an input as a child element.
* Materialize
    * Being guided by our experienced group members, we all learnt that Materialize works on a grid basis. This caused us problems with trying to centre our text on the nav bar, where originally we were going to have a sign up link. However, because the bugs 
      would have needed specific media queries to iron it outt and they would have been better achieved at the start of the project, we took the creative choice to drop the sign up option and present our application as more of a tool.

## Deployment
---
The project will be deployed on github pages, we believed this to be the least complex method allowing us to showcase our project.

### User Interaction
---
## Testing
---
## Credits
---

* **TEAM - BROKE BUSTERS!**

* Front end designers 
    
    * Rashidat Adekoya
    * Andrés Felipe García Cano

* Back end designers

    * Adam Boley
    * Cara McAvinchey

* Readme and logo design curation 

    * Rhys Few
    * Oluwaseun Omisakin

### Resources

* [https://coolors.co/](https://coolors.co/)
* [https://balsamiq.com](https://balsamiq.com/wireframes/?gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNG3MDPZckauwhwQnD_zYLS6G7lBdpDlTvyny6heY507HgosJldUoOEaAvMVEALw_wcB)
* [https://materializecss.com/](https://materializecss.com/)
* [https://github.com/](https://github.com/)
* [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)
* [https://github.com/AdamBoley/The-Space-Marine-Legions](https://github.com/AdamBoley/The-Space-Marine-Legions)
* [https://andresfgc.github.io/ROE-Checker/](https://andresfgc.github.io/ROE-Checker/)
* [https://www.rightmove.co.uk/mortgages/mortgage-calculator](https://www.rightmove.co.uk/mortgages/mortgage-calculator)
* [https://www.revolut.com/](https://www.revolut.com/)
* [https://monzo.com/](https://monzo.com/)

### Acknowledgments

* Organisers: A very big thank you for putting together the Jan-hackathon. 

* Team Members: for creating time out of the time to  create and run the project.

* W3Schools and MDN sites provided guidiance on how to put together the input tag.

* Materialize for providing access to some of the materials used in the project.

* The lighthouse testing function provided suggestions which was used to improve the performance of the project.
