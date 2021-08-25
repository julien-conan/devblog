---
template: BlogPost
path: /extreme-programming
date: 2012-09-12T01:10:24.198Z
title: 'Extreme Programming'
thumbnail: /assets/2012-09-12-extreme-programming-alternative-version.jpg
metaDescription: XP, Extreme, Programming, Development, Methodology, Benefits, Drawbacks, Team, Organization, Process, Theory
---

During my first years, I used to work in an ergonomics research laboratory based in south of France. Team was composed by PHDs, engineers and students. With the benefit of youth, we managed to work on several prototyping projects, mainly with military and aeronautic customers. Driven by senior researchers and courage, because we didn't have any previous experiences except from our internship, we tried to do our best in order to build crossplatform softwares.  

I spent three years of my life doing this. Learning mostly from search engine and with a few veterans found in the building, always working in other departments, never really involved in our activities. Indeed, I think our confusion relies between XP and Waterfall, like we didn't have any time for management, and code was the only way around obstacles.  

The time having passed, I think it is the moment to have a deeper understanding on the Extreme Programming (XP) framework we thought we knew about.  

XP was first introduced on the Chrysler Comprehensive Compensation program which was initiated in the mid 90's and switched to XP when Kent Beck was brought on to the project to improve the performance of the system. Ron Jeffries, among others, joined the team and changed the way the development was approached spreading knowledge and adaptation among individuals. Nowadays, XP is the baseline for each programming team wishing to build software on agile basis.  

## Use Case

Defined by Don Wells on his [website](http://www.extremeprogramming.org/donwells.html), Extreme Programming was created in response to problem domains whose requirements change. Also, using new technology with fixed time project is known to be risky, as you must handle acquiring knowledge and production at the same time. XP is well suited for small, co-located extended teams, even more if they are able to use automated unit and functional tests.

> "Where there's a will, there's a way."  

XP was appropriate to our needs, even if we didn't have a clue about tests. In fact, we didn't have a clue about XP either. Like a lot of developers, we took the concept from its title. 'Extreme' was appropriate to our point of view which seemed to be enough to satisfy us. We were able to act if we had known something new, which brought courage to our minds to work harder. We were galvanized by the idea that XP projects, reports greater programmer productivity, even if we didn't check the framework in details neither do we really applied parts of its values, principles, and practices.

<div class="custom-images" style="max-width: 500px; margin: 0px auto;">
	<img src="/assets/2012-09-12-extreme-programming-pillars-b.png">
</div>

## Values

Extreme Programming relies on five values which are: communication, simplicity, feedback, courage, and respect.

<div class="custom-images" style="max-width: 200px; margin: -15px auto 5px auto;">
	<img src="/assets/2012-09-12-extreme-programming-values-b.png">
</div>

Like always in software development, **communication** is the key. A team that relies on communication to transfer knowledge, will reach its goal faster than a team which is focused to blame people or to be afraid of other person's success. XP stresses the importance of the appropriate kind of communication, with face to face discussion helped by whiteboard or any other way to save notes from the current discussion.

**Simplicity** aims at obtaining the simplest thing that will work, in order to avoid waste and do absolutely necessary things such as keep the design as simple as possible (same with the [Minimum Viable Product (MVP)](https://www.agilealliance.org/glossary/mvp/) or with the [Lean Management values](https://kanbanize.com/lean-management/what-is-lean-management)). It also means to address only the requirements with enough information, without trying to predict the future.

Constant **feedback** about team efforts allows to identify improvement areas and to revise practices. It also supports simplicity, through continuous adjustment towards product elaboration.

**Courage** is an "effective action in the face of fear" ([Extreme Programming Explained - Kent Beck](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)). Whether it be to raise organizational issues that reduce team's effectiveness, to stop doing something that doesn't work, or to accept and act on difficult feedback hard to accept, you need courage to do your everyday task privileging actions based on other principles so the results would not be harmful to the team.

When working together, **respect** is compulsory to efficient communication. Provide and accept feedback that honors relationship, makes working easier to identity simple designs and solutions.

## Principles

The most obvious way to start extreme programming (XP) is with a new project. Start out collecting user stories and conducting spike solutions for things that seem risky. Spend only a few weeks doing this. Then schedule a release planning meeting. Invite customers, developers, and managers to create a schedule that everyone agrees on. Begin your iterative development with an iteration planning meeting.

### Golden Rules

XP relies on five main rules which are: planning, managing, designing, coding and testing. More information can be found on this topic at: [The Rules of Extreme Programming](http://www.extremeprogramming.org/rules.html).

XP rules in a nutshell, focus on delivering high quality development with high collaboration methodology where everyone is responsible for the production quality as a whole. Customers and developers work hand in hand, privileging discussion and collaboration over other (financial) topics.

### Spike Solutions

A spike solution is a very simple program to explore potential solutions. Build it to only adress the problem under examination and ignore all other concerns. Most spikes are not good enough to keep, so expect to throw it away. The goal is reducing the risk of a technical problem or increase reliability of a user story's estimate. If a technical difficulty threatens to hold up the development, put a pair of developers on the problem for a week or two and reduce the potential risk.

### User Stories

A user story is considered as a work item, representing a task to be done. It can be exhaustive, or vague, depending on the level of knowledge regarding the task to be done when the story is written. It replaces large requirements document, letting the development team acquire the lacking information during the process of the user story. They are similar to usage scenario, except that they are not limited to describing a user interface. They are written in the format of about three sentences of text by the customer, in the customers terminology without techno-syntax. Even if they drive the creation of acceptance tests which can be more or less automated, they must only provide an enough level of detail to make a reasonably low risk estimate of how long the story will take to implement. When the time comes to implement the story developers will go to the customer and receive a detailed description of the requirements face to face.

### User Story's Estimate

Developers estimate how long the stories might take to implement. Each story will get a 1, 2 or 3 week estimate in "ideal development time". This ideal development time is how long it would take to implement the story in code if there were no distractions, no other assignments, and you knew exactly what to do. Longer than 3 weeks means you need to break the story down further. Less than 1 week and you are at too detailed a level, combine some stories. About 80 user stories, plus or minus 20 is a perfect number to create a release plan during release planning.

### Iterative Planning

XP defines an iterative planning with one to three week appointment. Each iteration starts with a planning meeting to produce the iteration's plan of programming tasks. User stories are chosen for this iteration by the customer from the release plan (a.k.a. 'Backlog') in order of the most valuable to the customer first.

### Acceptance Tests

> "Acceptance tests give a feeling of stability."

On the long run, acceptance tests can represent the customer path wanted by the customer for its project. It is also a human moment, where developers and customers can meet face to face, and discuss about the improvement on the project with tangible support and live demonstrations. Stressful at first for the developers, it can quickly become a good exercise, preparing test environment and stuff, like a functional dry-run for each demonstration.

The customer specifies test scenarios and parameters when a user story has been correctly implemented. A story can have one or many acceptance tests, aiming to verify the functionality works as expected. Indeed, it is the customer's responsibility to verify the correctness of the acceptance tests and to review test scores to decide which failed tests are of highest priority. Acceptance tests are also used as regression tests prior to a production release.

<div class="custom-images" style="max-width: 500px; margin: 40px auto;">
	<img src="/assets/2012-09-12-extreme-programming-tests-pyramid-b.png">
</div>

They should be automated as well, so they can be run more often. Quality assurance is an essential part of the XP process.

### Unit Tests

It is the kind of feel good to me, having a piece of code doing what it is supposed to do with guarantee that the code it is testing also does what is is supposed to. 

When it comes to unit tests, we must remember that they are the very base of our test pyramid construction above.

Usually, unit test starts with a code pattern which is called : "AAA" (Arrange, Act, Assert). It is one of the most standard across the industry. First, you divide your test method into three sections, then you complete the code in them.

```javascript
// arrange
var repository = Substitute.For<IClientRepository>();
var client = new Client(repository);

// act
client.Save();

// assert
mock.Received.SomeMethod();
```  
<br>  
Noticing each comment that precedes a section, you may ask why people should write them as they do not respect DRY, YAGNI, SRP and KISS principles. Code should be self-explanatory. Indeed, you can write them at first, in order to learn the technique and make it an automatism. Then, simply remove them, but still always have and stick to the pattern in mind.

Unit test frameworks provide tools, such as code coverage and mocks to build your tests. Mocks represent one or several parts of the code, and act as if the code was executed. Instead, the mock returns predictable values without using the method behind the operation being requested.

The two main frameworks in C# are: NUnit and XUnit. Quite similar, chose one and stick to it on your project. Unit tests represents a long time investment effort, but it is worth it.

## Code Ownership

As defined by Martin Fowler, this could be defined with three broad categories:

**Strong** code ownership supposes that the code base has been broken into modules, each one assigned to one developer. Module owner is the only one who can change it. If you need to modify a module, you have to talk to the owner or to write a patch and send it the owner.  
  
**Weak** code ownership states that modules are assigned to owners who can change through time. They are supposed to take the responsibility of their modules, so it is more convenient to talk to them before making changes on their modules.  
  
**Collective** code ownership deals about abandoning individual ownership notions. The entire team can modify the code and make changes anywhere. The practice is also called "Shared Code".

The good practice seems pretty obvious, of course. You always want to make some changes where and when you want to. The word "practice" takes all of its importance here, as it shows the importance to go towards collective code ownership, or weak code ownership. Both of them could work or fail, and their application depends on the kind of team you are working in.  

### Roles

#### Customer

Customer is responsible to know what has to be programmed. He has to write required stories with sufficient details and functional tests, influence a project without being able to control it (almost with developing an attitude that inspires success of the project), take decisions about functionalities and priorities, will to embrace evolutions as the product evolves. He should always speak as a single voice to the team, even if the customer is composed by a community or multiple stakeholders. 

#### Developer

A developer is not only responsible for code production. He also has to assume roles likes architect, interface, database, operations and network designer. He has daily contributed to perform unit testing, refactoring, continuous integration and pair programming. Communication skills are required to be very developed, as he participates in stories estimation, pair programming, tasks definition and estimation. Through all those tasks, developers must maintain a focus high level, coding only what is required and maintaining simplicity. 

> "If someone changes the code that you wrote, in whatever part of the system, you have to trust the changes and learn. In case the changes are wrong-headed, you are responsible for making things better, but be careful not to blame anyone."

Sometimes, one of the developers could help the customer to choose and write functional tests. He can also be in charge to run the tests regularly, report test results and ensure testing tools run well.

#### Manager

In Extreme Programming, the manager is responsible to define the rules of planning game. He must go with the team to familiarize itself and the customer to those rules, monitor the game and fix deviations if any. Schedule, release planning, and conduct is the main part of its job, always having in mind the current iteration and those coming in the next weeks. The manager is involved in estimation, in order to provide feedback on how the team is performing, what is going well and what can be improved. Time tracking is a manager main charge also. It allows him to understand the actual time spent by each team member. He must have the ability to get all required information without disturbing the team's work.

#### Coach

Coach has got to understand, identify and apply Extreme Programming practices to the project. In any case, he must find a solution to solve process problems. Calm, and determined, he is the person the team can rely on when everyone else is panicking. Always ready to help, he sees to that the team still self-reliant. 

### Lifecycle

### Planning 

Planning is the first step in Extreme Programming. You want to handle planning uncertainty with the development team to create consistent stories. Iterations provide structures and required operations. Developers start working on them when schemes, time estimation and resources are defined and engaged on the Kanban board.

### Designing

The design process starts at the iteration beginning. In this step, remembering simplicity as a design rule among others is a key value which must not be forgotten.

> "Simple as possible."

### Coding

Coding is the most precious added value in the XP Lifecycle, it has priority over other tasks (except for ceremony, meeting and pair programming). Developer need to search for system implementation that is as simple as possible, still completing customer(s) and developer(s) requirements.

### Testing

Test first is already covered by Extreme Programming and it is one of the reasons why you must include testing in your coding tasks because, it has been in the records for forty years now. Testing aims at removing bugs before delivery. The approval test run could be added at the iteration end in order to identify and list approval results.

### Listening

Comprehension between customer and developer is a mandatory. Listening allows to understand feedback given by both actors : how they understand the requirements or how technical aspects can or will be treated also guarantee that the customer still be in phase with its project. He can keep track of project progress and foresee what will be coming next.

<div class="custom-images" style="max-width: 500px; margin: 40px auto;">
	<img src="/assets/2012-09-12-extreme-programming-planning-and-feedback-loops-b.png">
</div>

## Practices

XP tries to enforce practices empowrement with a lot of different techniques. The original twelve practices listed below has changed since XP was initially introduced. However, each of them tends to lower risks and to embrace change during the development process.

### The Planning Game (a.k.a. 'Poker Planning')

Poker planning or Planning game is one of the most exciting parts of the XP ceremony. In fact, it is a moment where you can evaluate yourself and other collaborators on the knowledge level each one have about various topics. 

1. Creation or selection of the story
2. Story estimation
3. Story priorization

<div class="custom-images" style="max-width: 200px; margin: 40px auto;">
	<img src="/assets/2012-09-12-extreme-programming-planning-poker-cards-b.png">
</div>

[Planning Poker Cards](https://www.amazon.fr/Planning-Poker®-Outil-dEstimation-Agile/dp/B00JUU8YC2/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&dchild=1&keywords=planning+poker+cards&qid=1611328274&s=toys&sr=1-2) 12.80€  
[Post-it Super Sticky](https://www.amazon.fr/Post-Super-Sticky-Blocs-repositionnables/dp/B00QNBLILK/ref=pd_bxgy_img_2/257-3319388-5054235?_encoding=UTF8&pd_rd_i=B00QNBLILK&pd_rd_r=9ebe3ef6-a8f0-40d8-85aa-30e4fa197853&pd_rd_w=c62uK&pd_rd_wg=vK5GR&pf_rd_p=a23bc06b-c1d8-47e8-84ee-a2dc78a694f2&pf_rd_r=SYA11BZVEQG8TM5FMGH6&psc=1&refRID=SYA11BZVEQG8TM5FMGH6) 11.90€  
[Planning Poker Online](https://planningpokeronline.com/) FREE  
[Team O'clock](https://appsource.microsoft.com/en-us/product/office/wa200000127?tab=overview) FREE  

### Frequent Small Releases

With release planning meeting, team focus on scheduling small units of work that make sense for business and add direct value during an iteration. This way, feedback about the code being produced can be given quickly and impact can be measured. 

> "The longer you wait to introduce an important feature to the system's users the less time you will have to fix it."

<div class="custom-images" style="max-width: 500px; margin: 40px auto;">
	<img src="/assets/2012-09-12-extreme-programming-small-releases-b.png">
</div>

### System Metaphor

A system metaphor consists in representing the team project with simple concepts, which allows to explain the project to newcomers without the need to dump them huge documents. 

Names given to objects are very important because they give an understanding of the overall design, and make the code reusable as well. A design should have a structure that helps new people, begin contributing quickly.

> "Choose a system of names for your objects that everyone can relate to without specific, hard to earn knowledge about the system."

### Simple Design

Simple Design has been defined by Kent Beck with four rules while he was developing Extreme Programming in the late 1990's: 

<div class="custom-images" style="max-width: 500px; margin: 40px auto;">
	<img src="/assets/2012-09-12-extreme-programming-simple-design-b.png">
</div>

- Runs all the tests
- Has no duplicated logic. Be wary of hidden duplication like parallel class hierarchies
- States every intention important to the programmer
- Has the fewest possible classes and methods

Prioritization is done in order with those rules. The most important one is about passing the tests. XP changed the coding environment emphasizing the tests importance among other things. 

Reveals intention means the code must be easy to understand for anyone, programs are there to be read by people. 

No duplication is also a very important design principle. Duplication basically means creating a technical debt, and even if you have the good will to come back later, you never will. Don't duplicate anything, ever. Don't call your method "v1", "v2", "something_b", "something_c" either. Instead, take the appropriate time to refactor the block you are working on and always commit free from duplication.

Last rule says that anything which doesn't fit with the three previous rules must be removed. Extra complexity doesn't serve anyone, render the system harder to modify and less flexible during practices.

### Refactoring

> "First things first."

A good start is to remove dead code. It will increase liability and doesn't break anything living. If one of your colleagues had got the habit to store work in progress in comment, go talk to him or her and learn together how to use stash or private branch.

Using automatic replacing, and automatic replacing only, you can safely rename anything you want in order to improve code readability and ramp up intention being read by everyone on the project.

There is a lot to discuss about refactoring. Short term branches surely help to test your modifications, so does automatic tests, to have a look at all the impact your modifications can do on the project. 

However, keep in mind that it is a hard exercise. Don't engage in too much trouble or you won't be able to handle it. 

### Pair Programming

I just read one of the most important article of my professional life, you had guessed, it is one about Pair Programming written by Birgitta Böckeler and Nina Siessegger : [On Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)

It is indeed a collection of many people's experiences, which made the article really rich with everyday life example and practice tips. For almost forty years, pair programming has been tackled in coding industry, but just a few team practices it on a regular basis.

Benefits are however numerous: knowledge sharing, reflection, focus, code review "on-the-go", two modes of thinking, collective code ownership, keep the "WIP" low.

### Continuous Integration

Continuous integration is the process and automatic tools which regulates code production. A developer basically commits its participation, which is sent to the software factory where it passes through static code analysis.

### 40-hour Week

The idea of the 40-hour week is that team members should work the hours that they can sustain quality. Sustainable workload could be 40 hours or thereabouts. Each country or culture has difering acceptance of reasonable working hours. The important thing is to recognize what a reasonable work week should be, and then come to an agreement with the team on that number. Tremendous power comes from committing to this up-front and then having the integrity to follow through during crunch time.

### On-site Customer

This is an important topic discussed here, about customer availability. You will often encounter customers who don't want to invest too much time following the project progresses, or giving feedback and assistance to the development team. Most of them have a full agenda, where another micro-management system seems to no fit. In those cases, it is crucial to have a deeper exchange with those clients to make them understand their feedbacks critical value to the project success. You should remember them that their time is spared at first with not requiring detailed specifications and saved later by not delivering an uncooperative system.

> "The Customer is Always Available"

All phases of an XP project require communication with the customer, preferably face to face, on site. You also need to have an expert interlocutor in front of you, who can answer complex and advanced questions about business logic, without passing the question to another interlocutor who may take days or weeks to answer the question.

### Coding Standard

Formatting the code to agreed on coding standards keeps it consistent and easier to read and refactor. It is a step must be harvested at the beginning of a project, then expanded and shared through each iteration to improve on the long run.

## [Conclusion]

> "Extreme Programming is self-control software development based on principles of courage, feedback, communication and the most important one, simplicity. Software progress is a continuously evolving discipline. XP is popular because of its discipline between all other agile software development methodologies. Lightness can be felt with XP and constantly using the feedbacks. As programmers write and rewrite the code in XP projects, the client sees growth in the system and because the details of the requirements matter a lot and also because with XP developers can capture details more often, consequently the only object will remain is the coding. There is not any best methodology when it comes to software development methodology."

Thank you Martin, Uncle Bob and others pioneers have led the way to experience sharing and knowledge rising. Spread the word in your community!

Sources  
[ExtremeProgramming.org](http://www.extremeprogramming.org)  
[Whats is Extreme Programming](https://www.agilealliance.org/glossary/xp/#q=~(infinite~false~filters~(postType~(~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'xp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))  
[Planning Poker or How to avoid analysis paralysis while release planning](http://renaissancesoftware.net/files/articles/PlanningPoker-v1.1.pdf)  
[Unit Testing and the Arrange, Act and Assert (AAA) Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)  
[CodeOwnership](https://martinfowler.com/bliki/CodeOwnership.html)  
[Extreme Programming - Roles](https://www.tutorialspoint.com/extreme_programming/extreme_programming_roles.htm)
[Extreme Programming (XP)](https://medium.com/@azimidev/extreme-programming-xp-35223784976e)  
[Agile Vs Scrum: Difference Between Agile Methodology & Scrum](https://www.guru99.com/agile-vs-scrum.html)  
[Extreme Programming Practices in Action](https://www.informit.com/articles/article.aspx?p=30187&seqNum=11)  
[Putting An Age-Old Battle To Rest](https://blog.thecodewhisperer.com/permalink/putting-an-age-old-battle-to-rest)