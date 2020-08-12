# Possible Actions
## User Signup:
    - How:
        - Option 1:
            - Go to **Sign Up Page** via sign up button on the landing page
            - Verify Sign up via a verfication email (v2)
        - Option 2:
            - Sign up via google or facebook (v3)
    - After Signup:
        - Receive confirmation email upon signing up with brief overview of product
        - Taken to the **Intialization Page**

## User Login:
    - How:
        - Go to **Login Page** via login button on the landing page 
    - After login:
        - Taken to the **Dashboard Page**

## User Settings:
    - How:
        - Accessed via the dropdown menu button on every page where user is logged in to 
    - Dropdown Menu Components:
        - Account Settings
            - Takes you to the **Profile Page**
        - Schedule Settings
            - Takes you to the **Schedule Settings Page**
        - Sign Out Button
        - 
## Intialization(Upon registration and first sign-in):
    - How:
        - Will get prompted to answer a few questions with regards to how schedule should be structured
    - Questions: 
        - Exam type: Part 1 or Part 2 ? 
        - Current Profeciency in Finance: V. Low --> V. High ?
        -  ...
    - After Filling out form:
        - Taken to the **Dashboard Page**

## Navigation:
    - How(Upon sign-in):
        - A menu-nav-box at the top right to navigate:
            - **Dashboard Page**
            - **Readings Page**
            - **Schedule Page**

## Mark Reading Complete:
    *N.B*
        A completed reading is a reading that has already been "read"
    *N.B*
    Where:
        - Schedule Page: reading component
        - Readings Page: via drop-down menu
        - Reading's Page: read and reviewed components
        - KPI Dashboard Page: Weekly Overview tab
    - How:
        - Via the appropriate checkboxes

## Move reading from one day to another:

    - Where: 
        - Schedule Page
    - How:
        - Drag(click, hold, navigate) reading component from current day to desired day

## Mark specific days as chill days:
    
    - Where:
        - Schedule Page
    - How:
        - Move all readings from that day to any other desired day 

## Mark days in week as chill days:

    - Why:
        - Prevent any readings from being assigned to that day 
        *N.B*
        Chill Days <=> Days where no readings are assigned to 
        *N.B*
    - Where:
        - Dropdown Menu Component:Schedule Settings:Schedule Settings Page:Chill Days
        - Schedule Page:Settings Symbol:Schedule Settings Page:Chill Days
    - How:
        - Toggle the desired days in a week via the chill day component

## Change Viewed Month on Schedule Page

    - Where:
        - Schedule Page
    - How:
        - Toggle the month with the arrows located at both sides of the month 

## Change Maximum Readings Scheduled per day:

    - Why:
        - To aid the reEval feauture in assigning readings per day 
    - Where:
        - Dropdown Menu Component:Schedule Settings:Schedule Settings Page:Maximum Readings per day component
        - Schedule Page:Settings Symbol:Schedule Settings Page:Maximum Readings per day component
    - How:
        - Toggle the Maximum Readings per day via the scroll button on its component 

## Toggle re-Eval Feauture on and off:  

    - Why:
        - re-Eval feauture  automates the reassigning of incomplete readings to other days in attempt to maintain the projected "end-syllabus-date"
        - Switching it off simply disables this feature
            - Essentially, this leaves incomplete readings in the "Day" component even if day had passed, potentially posing as a problem?  
    - Where:
        - Dropdown Menu Component:Schedule Settings:Schedule Settings Page:re-Eval Feature component
        - Schedule Page:Settings Symbol:Schedule Settings Page:re-Eval Feature component  
    - How:
        - Toggle re-Eval feature on and off via the slider 

## Configure "End Syllabus" Date

    - Why:
        - Configure to personal desired date rather than the projected date so as to personalize planning capabilities
    - Where:
        - Dropdown Menu Component:Schedule Settings:Schedule Settings Page:End Syllabus Date component
        - Schedule Page:Settings Symbol:Schedule Settings Page:End Syllabus Date component
    - How:
        - Configure date using the date menu options provided via the End Syllabus Date component

##  Configure Exam Date
    - Why:
        - In the event that the user postpones(defers) exam date 
    - Where:
        - Dropdown Menu Component:Schedule Settings:Schedule Settings Page:Exam Date component 
        - Schedule Page:Settings Symbol:Schedule Settings Page:Exam Date component 
    - How:
        - Configure date using the date menu options provided via the End Syllabus Date component

## Toggle Mastery Level

    - Why:
        - For user to keep track of his/her perceived "mastery" of a reading and hence "completion"
        - Mastery Level will be used to tabulate the "performance" factor of the user (v3)
    - Where:
        - On the reading's own page 
    - How:
        - Slide the slider along the meter to the desired mastery level rating 

## Toggle Intensity Level

    - Why:
        - To appropriately update the intensity level as experienced by user
    - Where:
        - On the reading's own page
    - How:
        - - Slide the slider along the meter to the desired intensity level rating
    


  
    
## 
    - Why:
    - Where:
    - How:
    

# Pages 
## Landing Page:
    - Very visual description of product
    - Login Button
    - SignUp Button

## Log In Page:
    - A simple form
        - username or email
        - password

## Sign Up Page:
    - A simple form
        - username
        - password
        - email 

## Intialization Page:
    - A simple form with all the key attributes to create a new user 
    - Prompt to sync with google calendar
        - Ensure that schedule can be displayed on google calendar as well 
    - Prompt for desired study plan 

## Dashboard Page:
    - KPI Containers:
        - Schedule
        - Study Progress
        - Next Reading
        - Weeekly Overview
        - Readings Summary
        - Mocks

## Profile Page:
    -  Display:
        - Username
        - Email
        - Avatar 
        *N.B* Refer to Quora to best approach this *N.B*    
        - Questions Answered
        - Comments Posted
        - Questions Asked

## Schedule Page:

## Schedule Settings Page:
    - Toggle Maximum readings per day
        - == 1 by default
    - Toggle Chill days
        - Choose days to reiterate every week
    - Sync google account
        - To sync google calendar to schedule 
    - Chosen Study Plan
    

## Readings Page:
    - Display:
        - All readings as per paper prototype (dropdown menu)
    - Click On reading:
        - Takes you to the clicked reading's page

## Each Reading Page:
    - Display(as per paper prototype)
        - Title of reading
        - Learning Objectives
        - Intensity Level
        - Mastery Level
        - Tags (By other users)
        - Note to self section
        - Forum
            - Toggle between Questions/Comments/Both
                - Defaulted at "Both"
            - "Add a comment" text box
            - All comments displayed with a reply textbox


# Comprehensive List of Pages:

    1. DashBoard Page
    2. Landing Page
    3. LogIn Page
    4. Sign Up Page
    5. Intialization Page
    6. Profile Page
    7. Schedule Page
    8. Schedule Settings Page
    9. Readings Page
    10. Each Reading Page

# Universal Components:

## Reading Component:
    - Structure:    
        - Reading Name
            - ie. ORM, Capital Planning, Basel
        - "Tick Success" Button 
            - Mark to indicate completion




