# Functionality:

## Initialization:
    * User will be asked to specify mastery level in finance 
    * This metric will better allow users to compare to others in the same categorization
    * Sign in with google => To aid google calendar integration (v2)

## Users:
    * Create acct (v2)
    * Change Password
    * Retrieve lost passwords
    * Change their passwords
    * Create new study plan for the upcoming exam

## Readings
    * All readings displayed (v1)
        * Readings will be displayed using progressive disclosure (v2)
        * Each "Book" dropdown tab will have(right-aligned):
            - The number of readings done/ tot. number of readings 
            - Progress Circle(shaded region indicating those that had been done)  
    * Book topic (v1)
    * Reading title (v1)
    * Estimate of amount of time per reading (v2)
    * Estimate of Difficulty rating out of 5 (v2)
    * Mastery Level (v2)
        * This increases as per the number of passes done on the reading
            * Proportionate increase as per the level that the user had set
    * Pass Number? (v2)
    * Read? (v1)    
    * Reviewed? (v1)
    * Extra Notes (v2)
    * Start (v2)
        * A checkbox to start the timer
    * End (v2)
        * A simple btn to stop the timer
## Each Reading Page
    * Upon completion, user will add tags to best describe reading (v3)
    * each reading will be accompanied by a thread for users to add comments or ask questions for other users to ask (v3)
    * 

## Each Reading Component(on schedule page)
    * Color of component based on the "intensity" level
        - Intensity Levels are as follows:
            - Easy: Yellow
            - Medium: Orange
            - Hard: Red
    * The "Tick" indicates the completion of the reading
        - Tick will be green when completed
        - Tick will be white when INcomplete
    * Ability to click and drag the components into other days
    
## Schedule
    * Calendar Layout (v1)
        - Layout:
            - Date
                - Click on date for more info about the day???
            - Day
            - Reading Planned for that day
                - Maximum readings per day == 1 by default
                    - Can set this in advanced settings
                - readings on each day can be grabbed and dragged to another day 
        - Try to integrate google calendar into the website (v2)
        - Toggle Some days to be "Chill days" so that no readings will be assigned that day (v2)
            - Can do this in the advanced settings page
                - For the weekly chill days => refer to the v1 paper draft for a visual display where Sat and Sun are shaded, indicating a chill day
            - Can also toggle other days to be chill days by simply not putting readings on that day 
        - Tasks assigned to each day will be based on the study plan that the user have opted to (v2)
    * re-Eval Feature
        - When readings are dragged to another day or day becomes a chill day
            - Reading that was supposed to be there will be "pushed" to the next available day
                - Readings will follow the "max readings per day" when it is assigned
                - Ideally the readings will be pushed to available days and attempt to maintain the goal date that had been set my user
                - However, if date cannot be met without increasing the max readings per day then:
                    - User is warned of this; User is then given the choice to either increase max readings per day OR toggle date to the reccomended date as per tabulation
        - Readings may be paired as follows:
            - Easy + Easy
            - Medium + Easy
            - Hard  
    * Option to integrate with google calendars (v2)
    * Hours Planned (v2)
    * Hours Studied (v2)
    * Extra Notes (v2)

## Dashboard <=> Statistics
    * Progress and Plan (v2)
        - Show current book and the percentage completed
        - Show overall percentage accomplished 
        - Show exam date
        - Show number of months to exam
        - Show number of weeks to exam
        - Show expected syllabus completion date
    * Performance (v2 or v3)
        - Model a predicted score as per the ** current ** mastery levels of each topic and mock exams completed 
    * Mocks Report Cards (v3)
        - *Your* Performance on mock exams 
    * Mocks Progress Summary (v3 Optional)
        - Show statistics submitted by other users
    * Readings Summary(as per books) (v1) {Refer to 300hours spreadsheet}
    * Study Hours Logged (v2)
        * Statistics on hours you have logged 
        * Compare logged hours against statistics of other logged hours
    * Weekly Study Readings {refer to 300hours spreadsheet} => Clicking this also takes you to the Calendar page
        - Give a weekly preview of the readings for that week
        - Assigning hours may not be an appropriate planning tool
        - Assign readings for that day instead
            - Assigned readings will already have estimated time taken in its description
    * Reading Statistics (v2)
        * Average time taken to study reading
    * 

---
##Legend:

* Version 1 - v1 {Barebones}
* Version 2 - v2 {Add Features}
* Version 3 - v3 {Layer Abstractions}
* Version 4 - v4 {Extra Features}