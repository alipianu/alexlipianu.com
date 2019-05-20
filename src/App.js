import './App.scss';
import React from 'react';
import {
  SplashContainer,
  AboutContainer,
  TimelineContainer,
  SkillsContainer,
  ExperienceContainer,
  ProjectsContainer,
  PensContainer
} from './containers/containers';

/**
 * App component
 */
class App extends React.Component {
  state = { data: null };

  /**
   * Loads app data
   */
  componentDidMount() {
    // Todo: build api to serve data
    const data = {
      splash: {
        name: 'Alexander Lipianu',
        title: 'Software Developer',
        src: 'img/bluesky.jpg'
      },
      about: {
        title: 'About',
        headshot: 'img/headshot.jpg',
        message: {
          text: 'Hi there, I\'m Alex!',
          width: 247
        },
        description: {
          text: 'My name is Alexander Lipianu and I am a Software Developer from Ontario, Canada.\nI am a second-year student pursuing a Bachelor of Computer Science at the {{0}}. Passionate about software, my learning doesn’t stop in the classroom. In my spare time I love to experiment with different languages, frameworks, and areas of software development – always eager to expand my horizons and push boundaries.\nCurrently, I am working at as a Web Developer Co-op at {{1}}.\nMy previous positions include Web Developer at {{1}}, Application Developer at {{2}}, Software Developer at {{3}}, and Simulation Sub Team Member on the {{4}} student design team.',
          links: [
            {
              label: 'University of Waterloo',
              href: 'https://cs.uwaterloo.ca/'
            },
            {
              label: 'Avibots Corp.',
              href: 'https://www.avidbots.com/'
            },
            {
              label: 'CareGo Tek Inc.',
              href: 'https://carego.com/'
            },
            {
              label: 'InFlight Corp.',
              href: 'https://www.inflightintegration.com/'
            },
            {
              label: 'WATonomous',
              href: 'https://watonomous.ca/'
            }
          ]
        }
      },
      timeline: {
        title: 'Timeline',
        description: 'Below you\'ll find a timeline of my projects, co-ops, internships, and design teams throughout my high school and undergrad education. Hover the timeline entries to view their descriptions.',
        data: [
          {
            year: 2016,
            color: 'darkcyan',
            entries: [
              {
                shape: 'circle',
                content: 'Software Developer at InFlight Corp. (Jul. – Sept.)'
              }
            ]
          },
          {
            year: 2017,
            color: 'darkorchid',
            entries: [
              {
                shape: 'circle',
                content: 'Software Developer in Test at InFlight Corp. (Jul. – Sept.)'
              },
              {
                shape: 'square',
                content: 'Start of BCS Degree at University of Waterloo (Sept.)'
              },
              {
                shape: 'circle',
                content: 'Simulation Sub Team Member at WATonomous (Sept. – Dec.)'
              }
            ]
          },
          {
            year: 2018,
            color: 'darkslateblue',
            entries: [
              {
                shape: 'circle',
                content: 'Application Developer at CareGo Tek Inc. (Apr. – Aug.)'
              }
            ]
          },
          {
            year: 2019,
            color: '#E91E63',
            entries: [
              {
                shape: 'circle',
                content: 'Full Stack Developer at Avidbots Corp. (Jan. – Apr.)'
              }
            ]
          }
        ]
      },
      skills: {
        title: 'Skills',
        description: 'With over one year of work experience and several completed projects, I\'ve managed to accumulate experience with a large variety of languages, frameworks, and technologies.',
        entriesPerRow: 4,
        groups: [
          {
            name: 'Languages',
            data: [
              {
                label: 'JavaScript',
                level: 'expert',
                details: ''
              },
              {
                label: 'C#',
                level: 'advanced',
                details: ''
              },
              {
                label: 'C++',
                level: 'advanced',
                details: ''
              },
              {
                label: 'C',
                level: 'intermediate',
                details: ''
              },
              {
                label: 'PHP',
                level: 'intermediate',
                details: ''
              },
              {
                label: 'Bash',
                level: 'intermediate',
                details: ''
              }
            ]
          },
          {
            name: 'Frameworks & Libraries',
            data: [
              {
                label: 'Bootstrap',
                level: 'expert',
                details: ''
              },
              {
                label: 'Angular',
                level: 'advanced',
                details: ''
              },
              {
                label: 'Angular.js',
                level: 'advanced',
                details: ''
              },
              {
                label: 'RxJS',
                level: 'advanced',
                details: ''
              },
              {
                label: 'ASP.NET MVC',
                level: 'advanced',
                details: ''
              },
              {
                label: 'jQuery',
                level: 'advanced',
                details: ''
              },
              {
                label: 'React',
                level: 'intermediate',
                details: ''
              }
            ]
          },
          {
            name: 'Databases',
            data: [
              {
                label: 'SQL',
                level: 'intermediate',
                details: ''
              },
              {
                label: 'MongoDB',
                level: 'novice',
                details: ''
              }
            ]
          },
          {
            name: 'Other',
            data: [
              {
                label: 'HTML/PUG',
                level: 'expert',
                details: ''
              },
              {
                label: 'CSS/SCSS',
                level: 'expert',
                details: ''
              },
              {
                label: 'Node.js',
                level: 'intermediate',
                details: ''
              },
              {
                label: 'LINQ',
                level: 'intermediate',
                details: ''
              },
              {
                label: 'Docker',
                level: 'novice',
                details: ''
              },
              {
                label: 'Kubernetes',
                level: 'novice',
                details: ''
              }
            ]
          }
        ]
      },
      experience: {
        title: 'Experience',
        description: 'Flexibility, adaptability and versatility are some of the most important traits that a software developer can possess. That is why I have taken it upon myself to learn as much as I can, both inside and outside the workplace, in several different areas of software development. Toggle the icons below to learn about my experiences in each area.',
        data: [
          {
            details: 'Looking for a developer with experience in testing or developing testing frameworks and applications? Having spent two summers at InFlight Corporation developing internal testing tools for enterprise systems, testing serves as my backbone and one of my earliest exposures to software development. At InFlight Corporation, I redesigned the UI of and added Google Chrome support to an internal demoing tool, as well as added new features to an internal Fiddler debugging extension. I also developed an automated client-side black-box web application testing framework, and conducted functional testing of HTTP requests, SSO, JSON objects, and web page elements.',
            icon: 'cogs',
            label: 'Testing'
          },
          {
            details: 'Need an experienced and enthusiastic web developer on your team? At the end of my freshman year of university, I worked at CareGo Tek Inc. doing full-stack web development and basic database administration for a web application. On the front-end, I added new pages, styled pages with both static and dynamic layouts, incorporated new interactive elements, created components for tables and forms, and improved mobile responsiveness. On the back-end, I optimized database queries, lowered the number of database calls, reduced web page load times, and improved the efficiency of frequently used data transformations and computations. In my spare time, when I’m not busy developing and maintaining this website, I like to practice my front-end web development skills and make contributions to the web development community through CodePen.',
            icon: 'globe',
            label: 'Web'
          },
          {
            details: 'Graphics and games have always been two of my greatest interests. In my junior year of high school, my interest in games led me to create a two-player street fighter videogame called Paint Street Fighter. The following year, my interest in low-level graphics drew me to DirectX 12 - reading and working through Frank D. Luna’s 3D Programming with DirectX 12. Throughout my freshman year of university, I worked on a student design team called WATonomous at the University of Waterloo, where I focused on vehicle camera simulation. During this period, I also developed a steganography program, Imgrypt, that encrypts and decrypts messages from image pixel data.',
            icon: 'gamepad',
            label: 'Games'
          }
        ]
      },
      projects: {
        title: 'Projects',
        description: 'The next coolest thing may just be right under your nose! Below you’ll find some of my personal projects with GitHub and download links, please feel free to try them out yourself!',
        entriesPerRow: 2,
        data: {
          tagMap: {
            languages: {
              color: '#03A9F4',
              accent: '#015a83'
            },
            frameworks: {
              color: '#4CAF50',
              accent: '#285c29'
            },
            libraries: {
              color: '#FF9800',
              accent: '#814e00'
            }
          },
          projects: [
            {
              title: 'Imgrypt',
              image: 'img/thumbnails/imgrypt.png',
              description: 'Steganography program that conceals and reveals messages in the pixel data of images, leaving no noticeable pixel noise. Encrypted pixel data is uncrackable and passwords have up to a 1 in 10^27 chance of being cracked.',
              tools: {
                languages: ['C#'],
                frameworks: ['.NET']
              },
              links: {
                github: 'https://github.com/alipianu/Imgrypt',
                download: 'https://github.com/alipianu/Imgrypt/archive/v1.0.0.zip'
              }
            },
            {
              title: 'Website',
              image: 'img/thumbnails/site.png',
              description: 'My personal website that provides additional personal information and showcases all my projects.',
              tools: {
                languages: ['JavaScript', 'HTML', 'SCSS'],
                frameworks: ['React'],
                libraries: ['Bootstrap']
              },
              links: {
                github: 'https://github.com/alipianu/alipianu.github.io'
              }
            },
            {
              title: 'Paint Street Fighter',
              image: 'img/thumbnails/psf.jpg',
              description: 'Two-player retro street fighter video game featuring animated characters and health bars, soundtracks, and four maps to play on.',
              tools: {
                languages: ['Turing']
              },
              links: {
                github: 'https://github.com/alipianu/PSF',
                download: 'https://github.com/alipianu/PSF/archive/v1.0.0.zip'
              }
            }
          ]
        }
      },
      pens: {
        title: 'Pens',
        description: 'Pens give me the freedom and opportunity to easily experiment with different front-end technologies and tools, all while having fun designing quirky little animations and art. Below you’ll find some of my pens along with their source code, feel free to checkout my CodePen for more!',
        entriesPerRow: 2,
        data: [
          {
            hash: 'pVazKa',
            title: 'Hamburger Loading Animation (CSS + HTML)'
          },
          {
            hash: 'GGoNOa',
            title: 'Paint Roller Loading Animation'
          },
          {
            hash: 'XYdpzP',
            title: 'Alarm Clock Loading Screen'
          },
          {
            hash: 'XqXONv',
            title: 'iPhone 8'
          },
          {
            hash: 'MzeJWZ',
            title: 'Color-Changing Polyhedrons'
          },
          {
            hash: 'XyKxNq',
            title: 'Coil Generator'
          }
        ]
      }
    };

    this.setState({ data });
  }

  /**
   * Renders app
   */
  render() {
    return this.state.data && (
      <>
        <SplashContainer {...this.state.data.splash} />
        <AboutContainer {...this.state.data.about} />
        <TimelineContainer {...this.state.data.timeline} />
        <SkillsContainer {...this.state.data.skills} />
        <ExperienceContainer {...this.state.data.experience} />
        <ProjectsContainer {...this.state.data.projects} />
        <PensContainer {...this.state.data.pens} />
      </>
    );
  }
}

export default App;
