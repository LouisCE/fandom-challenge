# Fandom Challenge

## Project Overview

Fandom Challenge is an interactive quiz game designed to test players’ knowledge across various fandoms, including anime, movies, TV shows, and games (for now, just Avatar: The Last Airbender and Game of Thrones). The project is built with HTML, CSS, and JavaScript, focusing on creating a fun, responsive, and accessible user experience. Players can select a category, answer randomised questions under time pressure, and receive instant feedback on their performance. The project demonstrates key front-end development skills, including DOM manipulation, event handling, responsive design, and dynamic content rendering.

![Responsive design preview of Fandom Challenge website](assets/images/am-i-responsive.png)

## User Goals

- Enjoy a fun and engaging quiz experience.
- Test knowledge across different fandoms.
- Choose from multiple quiz categories.
- Understand the quiz rules before playing.
- Play on any device with a responsive layout.
- Receive instant feedback on answers.
- Track performance at the end of the quiz.

## User Stories

1. As a new user, I want to easily navigate the website so I can find the quiz quickly.
2. As a player, I want to select from different categories so I can focus on my favourite fandoms.
3. As a player, I want to view the rules before starting so I know how the game works.
4. As a player, I want the quiz to display one question at a time so I can focus on answering it.
5. As a player, I want the answer options to be clickable so I can easily submit my choice.
6. As a player, I want instant feedback after each question so I know if I was correct.
7. As a player, I want a timer so I feel challenged and can’t spend too long on one question.
8. As a player, I want to see my final score at the end so I can track my performance.
9. As a returning player, I want the option to replay the quiz so I can improve my score.

## Website Goals and Objectives

- Create an engaging and user-friendly quiz application that appeals to fans of popular franchises.
- Provide a clear and intuitive interface for selecting quiz categories and understanding game rules.
- Ensure the application is fully responsive and accessible on a range of devices and screen sizes.
- Implement interactive features that give immediate feedback to users, enhancing the quiz experience.
- Maintain clean, well-structured code to support future updates and scalability.
- Adhere to web content accessibility standards (WCAG) to make the quiz usable by all users.
- Deploy the application on a reliable cloud platform with version control for easy collaboration and maintenance.

## Wireframes

## Design Choices

### Colour Scheme

![Coolors Palette](assets/images/coolors.png)  
![Contrast Grid](assets/images/contrast-grid.png)

The **Fandom Challenge** quiz uses a passionate, bold colour palette based on Netflix’s iconic red (#E50914) and deep blacks to create an energetic and immersive atmosphere:

- **Primary Red (#E50914):** The core brand colour, representing excitement, intensity, and passion, perfect for a competitive quiz environment.  
- **Dark Reds (#660000, #8B0000):** Deeper shades used for shadows, hover states, and backgrounds to add depth and drama while maintaining visual consistency.  
- **Bright Reds (#FF3B3F, #FF6F61):** Accent colours for highlights, button hovers, and feedback, adding vibrancy and a lively feel.  
- **Black (#000000):** The main background colour to create strong contrast, making reds pop and providing a sleek, cinematic vibe.  
- **White (#FFFFFF):** Used for text and UI elements for maximum readability and clarity against the dark background.

These colours were chosen with accessibility in mind, ensuring sufficient contrast across all text and UI components. The palette reflects the intensity of fandom culture while providing a clean, modern look inspired by Netflix’s visual identity.

The contrast grid (above) helped in selecting harmonious shades and verifying accessibility standards for colour contrast ratios, ensuring that all users have a comfortable and visually engaging experience.

## Features

- Category selection with buttons to choose between different fandom quizzes.  
- Viewable rules section that explains how the quiz works.  
- Timed quiz with a 15-second countdown for each question.  
- Multiple-choice questions with four answer options per question.  
- Results are revealed at the end of the quiz, showing the total score.
- Score tracking displayed at the end of the quiz with custom messages based on performance.  
- Ability to restart the quiz and select categories again without refreshing the page.  
- Responsive design ensuring usability on various screen sizes.

### 404 Page

I added a fun and onbrand custom 404 error page to handle broken or mistyped URLs so that the user has a positive experience, even when visiting a nonexistent page.

- Displays a clear, themed error message.
- Provides a prominent “Back to Quiz” button for easy navigation.
- Styled consistently with the main site for a seamless feel.

![404 Page](assets/images/404.png)

### Future Enhancements

During the inception phase, I debated between creating a generic quiz covering topics like Literature, Mathematics, Sciences, History, and Geography, or a fandom quiz which is something that I have a greater personal interest in. With guidance from my mentor, I decided to stick with my hobbies and the things that I enjoy by building a fandom-themed quiz.

For this project submission, I chose to concentrate on three fandom quizzes: *Avatar: The Last Airbender*, *Game of Thrones*, and *One Punch Man*. This is to ensure quality over quantity within the limited timeframe.

Looking ahead, I plan to expand the quiz categories to include additional fandoms such as *Death Note*, *Code Geass*, *Attack on Titan*, *My Hero Academia*, and *RWBY*. I’m also interested in developing quizzes based on popular game franchises like *Pokémon*, *Jak and Daxter*, *Ratchet and Clank*, *God of War*, and *The Legend of Zelda*.

I plan on continuing this as a passion project, even after I graduate and it will continue to improve over time.

## Technologies Used

### Languages

- **HTML:** For structuring the web page and content semantically.  
- **CSS:** For styling the application and ensuring responsive design.  
- **JavaScript:** For implementing quiz logic, interactivity, and timing functions.

### Frameworks & Libraries

- **Bootstrap 5:** For responsive layout, styling, and UI components like buttons.  

### Tools & Platforms

- **Git & GitHub:** For version control and project collaboration.  
- **GitHub Pages:** For hosting the deployed application online.
- **Visual Studio Code:** For editing code.

## Testing

### Testing Approach

I tested the site using a combination of **automated tools** and **manual testing** to ensure high performance, accessibility, responsiveness, and functionality. I carried out automated testing with **Google Lighthouse**, **Google PageSpeed Insights** and **WAVE (Web Accessibility Evaluation Tool)**. Manual testing included using DevTools to check responsiveness across different sized devices, browser compatibility and verifying that all user stories and features function as intended.

### Automated Testing Results

#### Lighthouse (Mobile)

I tested the website using Google Lighthouse in Chrome’s Incognito Mode to eliminate extension interference.

The mobile Lighthouse audit shows excellent results across all metrics, with particularly strong performance and best practices scores. All categories recieved a score of 90 or above, which can be seen below. Accessibility scored 95 and SEO scored 90, indicating only minor improvements could be made.

| Metric                     | Score / Value |
|----------------------------|---------------|
| **Performance**            | 98            |
| **Accessibility**          | 95            |
| **Best Practices**          | 100           |
| **SEO**                    | 90            |
| First Contentful Paint      | 1.8 s         |
| Largest Contentful Paint    | 1.8 s         |
| Total Blocking Time         | 0 ms          |
| Cumulative Layout Shift     | 0             |
| Speed Index                 | 1.8 s         |

#### Lighthouse (Desktop)

The desktop results are exceptional as well, with perfect scores for performance and best practices. Accessibility remains high, and SEO meets strong industry standards.

| Metric                     | Score / Value |
|----------------------------|---------------|
| **Performance**            | 100           |
| **Accessibility**          | 95            |
| **Best Practices**          | 100           |
| **SEO**                    | 90            |
| First Contentful Paint      | 0.5 s         |
| Largest Contentful Paint    | 0.5 s         |
| Total Blocking Time         | 0 ms          |
| Cumulative Layout Shift     | 0             |
| Speed Index                 | 0.5 s         |

#### PageSpeed Insights (Mobile)

Mobile performance remains extremely high, with zero blocking time and stable layout shifts. The slightly longer Speed Index reflects the mobile network simulation.

| Metric                     | Score / Value |
|----------------------------|---------------|
| **Performance**            | 98            |
| **Accessibility**          | 95            |
| **Best Practices**          | 100           |
| **SEO**                    | 90            |
| First Contentful Paint      | 1.8 s         |
| Largest Contentful Paint    | 1.8 s         |
| Total Blocking Time         | 0 ms          |
| Cumulative Layout Shift     | 0             |
| Speed Index                 | 2.5 s         |

Desktop results confirm excellent optimisation, with lightning-fast load times and no layout shifts.

#### PageSpeed Insights (Desktop)
| Metric                     | Score / Value |
|----------------------------|---------------|
| **Performance**            | 100           |
| **Accessibility**          | 95            |
| **Best Practices**          | 100           |
| **SEO**                    | 90            |
| First Contentful Paint      | 0.5 s         |
| Largest Contentful Paint    | 0.5 s         |
| Total Blocking Time         | 0 ms          |
| Cumulative Layout Shift     | 0             |
| Speed Index                 | 0.5 s         |

## Deployment

The website is deployed using GitHub Pages and is accessible at:  
[Fandom Challenge](https://louisce.github.io/fandom-challenge/)

To deploy the project:  
1. Log in (or sign up) to GitHub.  
2. Go to the repository for this project: [LouisCE/fandom-challenge](https://github.com/LouisCE/fandom-challenge)
3. Click the **Settings** tab.  
4. In the left-hand sidebar, click on **Pages**.  
5. Under **Source**, select the **main** branch and click **Save**.  
6. GitHub Pages will build and deploy the site. You may need to wait a minute for the changes to go live.

To fork the project:  
1. Log in (or sign up) to GitHub.  
2. Go to the project repo: [LouisCE/fandom-challenge](https://github.com/LouisCE/fandom-challenge)
3. Click the **Fork** button in the top right.

To clone the project:  
1. Log in (or sign up) to GitHub.  
2. Open the project repository.  
3. Click the **Code** button and copy the link (HTTPS recommended).  
4. Open your terminal and navigate to where you'd like the repo to live.  
5. Type: `git clone <paste-url-here>` and hit Enter.

## Credits

I would like to thank the following people and resources for their support and guidance throughout this project:

- **Tim:** My mentor who provided valuable feedback and shared helpful learning resources, including this JavaScript tutorial series that greatly improved my understanding:  
  [JavaScript Tutorial Playlist](https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)

- **Simen:** For reviewing my progress, providing useful tools like Coolors and Balsamiq and helping me develop my approach to coding.

- **Code Institute LMS:** For teaching me HTML, CSS, JavaScript, and web design principles through detailed walkthroughs and exercises.

- **Markdown learning resources:**  
  - [Markdown Tutorial Video](https://www.youtube.com/watch?v=HUBNt18RFbo)  
  - [Markdown Live Preview](https://markdownlivepreview.com/)

Thank you all for your help and guidance.