---
template: BlogPost
path: /devops-paradigm
date: 2019-04-03T06:52:56.034Z
title: 'A DevOps journey'
thumbnail: /assets/2019-04-03-devops-journey.jpg
metaDescription: Starting point
---

# Culture, Automatisation, Lean, Mesures, Solidarité, Modèles, Process...

DevOps est un terme issu de la contraction des mots anglais "development" (développement) et "operations" (exploitation). Le nom a été donné par Patrick Debois lors de l'organisation des premiers devopsdays en 2009 pour qualifier un mouvement émergent visant à améliorer la qualité des services fournis par les solutions informatiques. Les personnes se réclamant de ce mouvement tentent de tirer les leçons de l'efficacité des GAFAM en matière de management, innovation, outils et bonnes pratiques... afin d'optimiser la compétitivité de leur organisation.

> "Bridging the gap between projects and operations" - Patrick Debois

Après des années à vivre en silo avec des objectifs non alignés entre opérationnels et développeurs, l'arrivée de solutions de cloud public fait bouger les lignes : c'est la fusion du support et de l'intégration dans les features teams pour les Développeurs. Comme mentionné par Amazon : 

> "You build it, you run it !". 

Du côté des Opérationnels, il s'agit de s'aligner sur les enjeux métiers par l'introduction d'un Product Owner Infra qui saura se rapprocher des Devs. Dans un sens comme dans l'autre, c'est une évolution qui peut sembler nécessaire aujourd'hui aussi portée par l'évolution des outils.

> "Agile is the approach of working with complex systems anywhere. Lean is the approach of optimising the flow of work anywhere. DevOps is the application of Agile and Lean to the acceleration of value work through IT." - Rob England

Le mouvement DevOps est issue de personnes qui avaient conscience de l'importance de l'agilité et de l'alignement de l'entreprise. Il propose une façon d'organiser et de manager l'entreprise dans son ensemble. Des méthodes comme le Lean Startup, SAFE... partagent des valeurs communes (à commencer par la culture de la mesure) et sont aujourd'hui de plus en plus reconnues dans les entreprises de toutes tailles. Ces méthodologies proposent une organisation et une culture adaptées aux enjeux de l'entreprise d'aujourd'hui : centrées sur les utilisateurs finaux, permettant d'expérimenter rapidement et de changer de cap rapidement si besoin. Face aux évolutions incessantes d'un environnement extrêmement complexe, c'est le moyen de robustifier son organisation et sa production en préservant ses ressources.

> "It's time for change. Connect anything. Change everything." - MuleSoft 

L'une des missions du DevOps est de s'assurer de la pérennité d'un pipeline de production répondant aux exigences du CI/CD, permettant de mettre en production rapidement et de manière sécurisée. L'approvisionnement des infrastructures doit permettre de bâtir des environnements de développement et de production reproductibles, et maîtrisés. Si ces outils et ces méthodes doivent permettre des mises en production sans interventions humaines (plus grandes sources d'erreurs), ils ne doivent pas faire oublier les autres grands principes DevOps : collaboration, mesures, lean, et amélioration continue. Le modèle C.A.L.M.S. se veut une alternative intéressante dans ce sens (comparé à I.T.S.M. dans le vieux monde de l'I.T.I.L.).

Le partage de connaissances est essentiel et fondamental dans la démarche du DevOps, car il est à l'origine de sa Culture. Faire travailler les Ops et les Devs ensemble est primordial, en réussissant par exemple à faire faire certaines tâches des uns par les autres, et/ou en fusionnant des compétences différentes sur une même personnne (approche Facebook). Il n'y a plus dans ce cas d'équipe opérationnelle, mais une équipe composée de profils polyvalents et pluridisciplinaires se partageant au mieux les tâches suivants leur niveau d'implication et de connaissances. C'est d'ailleurs en favorisant la 1ère méthode que l'on peut développer en interne les profiles de la 2nde.

L'Equipe DevOps suivra un ensemble de 8 étapes, en une ou plusieurs fois (un ou plusieurs sprints) :

* Plan
* Code
* Build
* Test
* Release
* Deploy
* Operate
* Monitor

## L'importance des process : Intégration continue (CI)

L'intégration continue vise la publication de code de façon régulière sur la branche principale, en l'améliorant au fur et à mesure en la soumettant à divers tests, gérés et codés par les développeurs, premières lignes de défense face aux fautes de conception et aux bugs imprévus. La synchronisation de travaux simultanés émis par plusieurs développeurs est permise par un outil de versionning publiant le code vers une plateforme d'intégration, partagée par l'ensemble de l'Equipe. Suivant les langages, la compilation se rajoute au processus permettant au passage d'optimiser le code pour une meilleur exécution, plus légère et plus rapide. Les différentes formes de tests, menés en amont et en aval de chacune des étapes, permettent de garantir la stabilité de la production tout au long des itérations. Le code est ensuite packagé, sous forme de release, rendue au propriétaire du projet, puis diffusé sous forme commerciale ou open-source.

## L'importance des outils : Livraison continue (CD)

L'environnement de production est un élement clé de la forge logicielle qui regroupe le (CI/CD). Le déploiement continu vise une automatisation à 100% des étapes de construction et de livraison d'un logiciel, sans intervention humaine en utilisant des scripts de compilation avancés par exemple. Des systèmes de sélection de features ou de rollback sont utilisés en production pour gérer les imprévus, lorsque la branche principale du projet est parfois en lien direct avec des milliers d'utilisateurs. Les systèmes de mesure permettent de garantir l'état des services rendus, et de déclencher des actions correctives si nécessaires.
