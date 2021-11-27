---
template: BlogPost
path: /devops-paradigm
date: 2019-04-03T06:52:56.034Z
title: 'A DevOps Journey'
thumbnail: /assets/2019-04-03-devops-journey.jpg
metaDescription: DevOps state of the art, essay towards DevOps originally written to SupInfo Conference led in Paris 
---

# Culture, Automation, Lean, Measures, Solidarity, Models, Process...

DevOps is a term derived from the contraction of the English words "development" and "operations". The name was given by Patrick Debois during the organization of the first devopsdays in 2009 to describe an emerging movement to improve the quality of services provided by IT solutions. The people who call themselves part of this movement try to learn from the effectiveness of GAFAM in management, innovation, tools and good practices... in order to optimize the competitiveness of their organization.

> "Bridging the gap between projects and operations." _Patrick Debois_

After years of living in silos with objectives that are not aligned between operational and developers, the arrival of public cloud solutions is moving the lines: it is the fusion of support and integration in the features teams for both Developers and Operators. As mentioned by Amazon:

> "You build it, you run it !" _Werner Vogels_

It is a question of aligning with the business challenges by the introduction of profiles such as Infra Product Owner, who knows how to approach the Devs. In both directions, this is a development being necessary today, also driven by the evolution of tools.

> "Agile is the approach of working with complex systems anywhere. Lean is the approach of optimising the flow of work anywhere. DevOps is the application of Agile and Lean to the acceleration of value work through IT." _Rob England_

The DevOps movement came from people who were aware of the importance of the agility and alignment in the company. It offers a way to organize and manage the company as a whole. Methods such as the Lean Startup, SAFE... share common values (starting with the measurement culture) and are today increasingly recognized in companies of all sizes. These methodologies propose an organization and a culture adapted to nowadays challenges: end-user-centric, allowing rapid experimentation and rapid change of direction as needed. Faced with the constant changes of an extremely complex environment, it is the way to strengthen its organization and its production while preserving its resources.

> "It's time for change. Connect anything. Change everything." _MuleSoft_

One of DevOps' tasks is to ensure the sustainability of a production pipeline that meets the requirements of the CI-CD, enabling production to be carried out quickly and in a secure manner. Infrastructure supply must be able to build repeatable, controlled development and production environments. While these tools and methods should enable production without human intervention (the greatest sources of error), they should not make us forget the other major DevOps principles: collaboration, measures, lean, and continuous improvement. The C.A.L.M.S. model is an interesting alternative in this sense (compared to I.T.S.M. in the old world of I.T.I.L.).

Knowledge sharing is essential and fundamental to DevOps' approach, as it is the origin of its Culture. Making Ops and Devs work together is essential, for example by succeeding in getting some tasks done by each other, and/or by merging different skills on the same person (Facebook approach). In this case, there is no longer an operational team, but a team composed of multi-functional and multidisciplinary profiles that share the best tasks following their level of involvement and knowledge. It is by promoting the first method that we can develop the profiles of the second.

The DevOps team will follow a set of eight steps, in one or more times (one or more sprints):

* Plan
* Code
* Build
* Test
* Release
* Deploy
* Operate
* Monitor

## The importance of processes: Continuous Integration (CI)

Continuous integration aims to publish code regularly on the main branch, improving it as it goes by subjecting it to various tests, managed and coded by developers, first lines of defense against design errors and unexpected bugs. Synchronization of simultaneous works issued by several developers is enabled by a versioning tool publishing the code to an integration platform, shared by the entire team. Depending on the language, the compilation is added to the process allowing the passage to optimize the code for better execution, lighter and faster. The different forms of testing, carried out upstream and downstream of each stage, ensure the stability of production throughout the iterations. The code is then packaged, as a release, returned to the project owner, and then deployed in commercial or open-source format.

## The importance of tools: Continuous Delivery (CD)

The production environment is a key element of the software factory that gathers the (CI/CD). Continuous deployment aims at building and delivering steps full-automation, without human intervention using advanced compilation scripts. Features selection or rollback systems are used in production to manage unforeseen events, when the main branch of the project is sometimes directly linked to thousands of users. Measuring systems ensure the status of the services rendered, and trigger corrective actions if necessary.

<div class="custom-images" style="max-width: 300px; margin: 40px auto;">
	<img src="/assets/2019-04-03-devops-journey-tools-overview.png">
</div>