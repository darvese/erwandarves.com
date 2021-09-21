import { I18nEnum } from '@/contexts/i18n'
const resources = {
  en: {
    main: {
      'Work Experience': 'Welcome to React and react-i18next',
      greeting: "Hi! I'm",
      greetingText: (
        <>
          {"I'm a "}
          <strong>software engineer</strong> specialized in <strong>Frontend Web developement</strong>.
        </>
      ),
      greetingCurrentWork: 'I live in France, where I work as a Software architect for ',
      greetingTechnology: (
        <>
          {'My main technology is '}
          <strong>React.js</strong>
          {", and I've been working with it for 3 years now."}
        </>
      ),
      skillsTitle: 'Technologies',
      skillsText: 'Here are some of the technologies and tools I use in my projects:',
      workTitle: 'Work Experience',
      job1Title: 'Software Architect at Bouygues Telecom',
      job1Text1: "Challenged and improved the technical stack of the site's search engine .",
      job1Text2: 'Became the lead developer on the search engine.',
      job1Text3: "Deployed the company's first Micro-Frontend application in production.",
      job1Text4: 'Assisted in the implementation of the Micro-Frontend architecture on the site.',
      job2Title: 'Software Engineer at Bouygues Telecom',
      job2Text1:
        'Helped in the design and development of a software and technical architecture based on Kubernetes and Micro-Frontends.',
      job2Text2: 'Implemented a Server-Side Rendering solution in a Micro-Frontend context.',
      job2Text3: 'Developed a React Micro-Frontend application generator similar to Create React App.',
      job3Title: 'Frontend Web Developper at Bouygues Telecom',
      job3Text1:
        'Created and designed an Angular / Typescript internal Web application, for BPMN modeling, with authentification and roles.',
      job4Title: 'CMS Developper at Netrock',
      job4Text1: 'Designed and built an E-Commerce Website using Wordpress and Woo Commerce.',
      epitaTitle: 'EPITA (Master)',
      epitaText1:
        'Web Development, 1-year projects (FullStack entrepreneurial project, FullStack Web Application for a company)',
      epitaText2: 'Algorithms (Graph, Linked list, Binary tree)',
      epitaText3: 'C / C++ projects (Recreating standard C library, compiler, interpreter, HTTP server)',
      contactText1: 'You can contact me by',
      contactText2: 'You can also check out my social media presence following the links below.',
    },
    error: {},
    link: {
      newWindow: '(opens a new window)',
    },
  },
  fr: {
    main: {
      greeting: 'Hello ! Je suis',
      greetingText: (
        <>
          {'Je suis un '}
          <strong>ingénieur logiciel</strong> spécialisé dans le <strong>développement Web Frontend</strong>.
        </>
      ),
      greetingCurrentWork: "Je vis en France, où je travail en tant qu'architecte logiciel pour ",
      greetingTechnology: (
        <>
          {'Ma technologie de coeur est '}
          <strong>React.js</strong>
          {', je travail avec depuis près de 3 ans.'}
        </>
      ),
      skillsTitle: 'Technologies',
      skillsText: "Quelques technologies et outils avec lesquels j'apprécie réaliser des projets:",
      workTitle: 'Expériences professionnelles',
      job1Title: 'Architecte Logiciel à Bouygues Telecom',
      job1Text1: 'Remettre en question et améliorer la stack technique du moteur de recherche du site.',
      job1Text2: 'Devenir le référent technique principal sur le moteur de recherche.',
      job1Text3: "Déployer en production la première application Micro-Frontend de l'entreprise.",
      job1Text4: "Aider dans la mise en place de l'architecture Micro-Frontend sur le site.",
      job2Title: 'Ingénieur logiciel à Bouygues Telecom',
      job2Text1:
        "Participer à l'élaboration d'une architecture logicielle et technique se basant sur Kubernetes et les Micro-Frontend.",
      job2Text2: "Mise en place d'une solution de Server-Side Rendering dans un contexte Micro-Frontend.",
      job2Text3: "Développer un générateur d'application React Micro-Frontend à la manière de CRA.",
      job3Title: 'Développeur Web Frontend à Bouygues Telecom',
      job3Text1: "Conception et Développement d'une plateforme Web interne en Angular et Typescript.",
      job4Title: 'Développeur CMS à Netrock',
      job4Text1: "Conception et développement d'une plateforme E-Commerce en Wordpress.",
      epitaTitle: "EPITA - Diplôme d'ingénieur",
      epitaText1:
        'Développement Web, projets sur 1 an (projet entrepreunarial FullStack, Application Web pour une entreprise)',
      epitaText2: 'Algorithmes (Graph, Linked list, Arbres binaires)',
      epitaText3: 'Projets C / C++ (Refaire la librairie standard C, compileur, interpréteur, Serveur HTTP)',
      contactTitle: 'Contact',
      contactText1: 'Vous pouvez me contacter par email',
      contactText2: 'Vous pouvez aussi me retrouver sur différents réseaux sociaux en suivant les liens ci-dessous.',
    },
    'Work Experience': 'Bienvenue à React et react-i18next',
    link: {
      newWindow: '(ouvre un nouvel onglet)',
    },
  },
}

export default resources
