---
template: BlogPost
path: /agile-lessons
date: 2014-09-18T12:05:12.024Z
title: 'Agile Lessons'
thumbnail: /assets/2014-09-18-agile-lessons.jpg
metaDescription: 
---

Agility is one of the most used buzz word in IT industry for years. Everyone seems to be the perfect agilist, even commercials throws the light on their agilist skills even if they don't practice on a regular basis. The question here is, what does agility requires and how to build an agile mindset?

## Agility at its best

Agile Development is a set of methods and practices where solutions evolve through collaboration between self-organizing, cross functional teams. Based on the Agile Manifesto originally written in 2001 by 17 independant-minded software practitioners. Consensus has been found around four core values:

- **Individual and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

Among 12 principles:

- Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
- Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.
- Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
- Business people and developers must work together daily throughout the project.
- Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
- The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
- Working software is the primary measure of progress.
- Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
- Continuous attention to technical excellence and good design enhances agility.
- Simplicity–the art of maximizing the amount of work not done–is essential.
- The best architectures, requirements, and designs emerge from self-organizing teams.
- At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

## Key agile concepts  

### Pair Programming

Pair programming consists of two programmers sharing a single workstation (one screen, keyboard and mouse among the pair). The programmer at the keyboard is usually called the “driver”, the other, also actively involved in the programming task but focusing more on overall direction is the “navigator”; it is expected that the programmers swap roles every few minutes or so.  

### TDD

“Test-driven development” refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring).  

It can be succinctly described by the following set of rules:  

- write a “single” unit test describing an aspect of the program
- run the test, which should fail because the program lacks that feature
- write “just enough” code, the simplest possible, to make the test pass
- “refactor” the code until it conforms to the simplicity criteria
- repeat, “accumulating” unit tests over time  

### Unit Testing

A unit test, as Agile teams understand the term, is a short program fragment written and maintained by the developers on the product team, which exercises some narrow part of the product’s source code and checks the results. The outcome of a unit test is binary: either “pass” if the program’s behavior is consistent with the recorded expectations, or “fail” otherwise. Developers will typically write a large number of unit tests (corresponding to a large number of program behaviors of interest), called a “test suite”. By common convention dating back at least to the JUnit family of tools, the color red (as in “getting a red bar”) represents the failure of one or more tests. The color green (“a green bar”) denotes successful execution of “all” unit tests associated with a program.  

### Given When Then

The Given-When-Then formula is a template intended to guide the writing of acceptance tests for a User Story:  

- (Given) some context
- (When) some action is carried out
- (Then) a particular set of observable consequences should obtain  

### Acceptance Testing  

An acceptance test is a formal description of the behavior of a software product, generally expressed as an example or a usage scenario. A number of different notations and approaches have been proposed for such examples or scenarios. In many cases the aim is that it should be possible to automate the execution of such tests by a software tool, either ad-hoc to the development team or off the shelf.  

Similar to a unit test, an acceptance test generally has a binary result, pass or fail. A failure suggests, though does not prove, the presence of a defect in the product.  

Teams mature in their practice of agile  use acceptance tests as the main form of functional specification and the only formal expression of business requirements. Other teams use acceptance tests as a complement to specification documents containing uses cases or more narrative text.  

### ATDD

Analogous to test-driven development, Acceptance Test Driven Development (ATDD) involves team members with different perspectives (customer, development, testing) collaborating to write acceptance tests in advance of implementing the corresponding functionality.  The collaborative discussions that occur to generate the acceptance test is often referred to as the three amigos, representing the three perspectives of customer (what problem are we trying to solve?), development (how might we solve this problem?), and testing (what about…).  

These acceptance tests represent the user’s point of view and act as a form of requirements to describe how the system will function, as well as serve as a way of verifying that the system functions as intended. In some cases the team automates the acceptance tests.  

### Backlog

A product backlog is a list of the new features, changes to existing features, bug fixes, infrastructure changes or other activities that a team may deliver in order to achieve a specific outcome.  

### Backlog Grooming

Backlog refinement (formerly known as backlog grooming) is when the product owner and some, or all, of the rest of the team review items on the backlog to ensure the backlog contains the appropriate items, that they are prioritized, and that the items at the top of the backlog are ready for delivery. This activity occurs on a regular basis and may be an officially scheduled meeting or an ongoing activity. Some of the activities that occur during this refinement of the backlog include:  

- removing user stories that no longer appear relevant
- creating new user stories in response to newly discovered needs
- re-assessing the relative priority of stories
- assigning estimates to stories which have yet to receive one
- correcting estimates in light of newly discovered information
- splitting user stories which are high priority but too coarse grained to fit in an upcoming iteration  

### BDD

Behaviour Driven Development (BDD) is a synthesis and refinement of practices stemming from Test Driven Development (TDD) and Acceptance Test Driven Development (ATDD). BDD augments TDD and ATDD with the following tactics:  

- Apply the “Five Why’s” principle to each proposed user story, so that its purpose is clearly related to business outcomes
- thinking “from the outside in”, in other words implement only those behaviors which contribute most directly to these business outcomes, so as to minimize waste
- describe behaviors in a single notation which is directly accessible to domain experts, testers and developers, so as to improve communication
- apply these techniques all the way down to the lowest levels of abstraction of the software, paying particular attention to the distribution of behavior, so that evolution remains cheap  

### Definition of Done

The team agrees on, and displays prominently somewhere in the team room, a list of criteria which must be met before a product increment “often a user story” is considered “done”. Failure to meet these criteria at the end of a sprint normally implies that the work should not be counted toward that sprint’s velocity.  

### Definition of Ready

By analogy with the “Definition of Done”, the team makes explicit and visible the criteria (generally based on the INVEST matrix) that a user story must meet prior to being accepted into the upcoming iteration.  

### Continuous Integration

Teams practicing continuous integration seek two objectives:  

- minimize the duration and effort required by each integration episode
- be able to deliver a product version suitable for release at any moment  

In practice, this dual objective requires an integration procedure which is reproducible at the very least, and largely automated. This is achieved through version control tools, team policies and conventions, and tools specifically designed to help achieve continuous integration.  

### Continuous Deployment

Continuous deployment can be thought of as an extension of continuous integration, aiming at minimizing lead time, the time elapsed between development writing one new line of code and this new code being used by live users, in production.  

To achieve continuous deployment, the team relies on infrastructure that automates and instruments the various steps leading up to deployment, so that after each integration successfully meeting these release criteria, the live application is updated with new code.  

Instrumentation is needed to ensure that any suggestion of lowered quality results in aborting the deployment process, or rolling back the new features, and triggers human intervention.  

### Exploratory Testing

Exploratory testing is, more than strictly speaking a “practice,” a style or approach to testing software which is often contrasted to “scripted testing,” and characterized by the following aspects among others:  

- it emphasizes the tester’s autonomy, skill and creativity, much as other Agile practices emphasize these qualities in developers;
- it recommends performing various test-related activities (such as test design, test execution, and interpretation of results) in an interleaved manner, throughout the project, rather than in a fixed sequence and at a particular “phase”;
- it emphasizes the mutually supportive nature of these techniques, and the need for a plurality of testing approaches rather than a formal “test plan”  

### Usability Testing

Usability testing is a long-established, empirical and exploratory technique to answer questions such as “how would an end user respond to our software under realistic conditions?”  

It consists of observing a representative end user interacting with the product, given a goal to reach but no specific instructions for using the product. (For instance, a goal for usability testing of a furniture retailer’s Web site might be “You’ve just moved and need to do something about your two boxes of books; use the site to find a solution.”)  

### Incremental Development

Nearly all Agile teams favor an incremental development strategy; in an Agile context, this means that each successive version of the product is usable, and each builds upon the previous version by adding user-visible functionality. These are called “vertical” increments (that is, difference between successive product versions), as opposed to the opposite strategy which successively delivers complete technical components: for instance, creating a database schema, then building business rules on top of that, and only then implementing a UI. (This article offers a typical illustration of the distinction. It echoes the “layered cake” metaphor of software architecture: one can either cut along the horizontal layers, or vertically across them.) It is difficult to imagine an incremental approach in the Agile sense which is not also iterative, at least to some extent, but the two concepts are not identical. (They also prove surprisingly difficult to pin down, and are often the subject of heated semantic debates.)  

### Iterative Development

Agile projects are iterative insofar as they intentionally allow for “repeating” software development activities, and for potentially “revisiting” the same work products (the phrase “planned rework” is sometimes used; refactoring is a good example).  

They are iterative in a third, less essential sense, in being most often structured around a series of iterations of fixed calendar length. However, some Agile approaches to scheduling, such as Kanban do away with iterations in this later sense, but retain the other aspects of multiple repetitions and planned rework.  

Nearly all Agile projects are incremental as well as iterative. However, it is possible to use iterative strategies which are not also incremental; for instance, a “build it twice” strategy in which one first creates a throwaway prototype to gather user feedback, then uses insights from that experience to build the “real thing”. Prototyping is necessarily an iterative strategy, and may have been a precursor to the development of iterative software development ideas.  

### Scrum

Scrum is a process framework used to manage product development and other knowledge work. Scrum is empirical in that it provides a means for teams to establish a hypothesis of how they think something works, try it out, reflect on the experience, and make the appropriate adjustments. That is, when the framework is used properly. Scrum is structured in a way that allows teams to incorporate practices from other frameworks where they make sense for the team’s context.  

### Story Mapping

Story mapping consists of ordering user stories along two independent dimensions. The “map” arranges user activities along the horizontal axis in rough order of priority (or “the order in which you would describe activities to explain the behaviour of the system”). Down the vertical axis, it represents increasing sophistication of the implementation.  

### User Stories

In consultation with the customer or product owner, the team divides up the work to be done into functional increments called “user stories.”  

Each user story is expected to yield, once implemented, a contribution to the value of the overall product, irrespective of the order of implementation; these and other assumptions as to the nature of user stories are captured by the INVEST formula.  

To make these assumptions tangible, user stories are reified into a physical form: an index card or sticky note, on which a brief descriptive sentence is written to serve as a reminder of its value. This emphasizes the “atomic” nature of user stories and encourages direct physical manipulation: for instance, decisions about scheduling are made by physically moving around these “story cards.”  

### Timebox

A timebox is a previously agreed period of time during which a person or a team works steadily towards completion of some goal. Rather than allow work to continue until the goal is reached, and evaluating the time taken, the timebox approach consists of stopping work when the time limit is reached and evaluating what was accomplished.  

### Kanban

The Kanban Method is a means to design, manage, and improve flow systems for knowledge work. The method also allows organizations to start with their existing workflow and drive evolutionary change. They can do this by visualizing their flow of work, limit work in progress (WIP) and stop starting and start finishing.  

The Kanban Method gets its name from the use of kanban – visual signaling mechanisms to control work in progress for intangible work products.  

### Kanban Board

In the context of Agile teams where the “Kanban method” of continuous improvement (or some of its concepts) has been followed, the following adaptations are often seen:

- such teams deemphasize the use of iterations, effort estimates and velocity as a primary measure of progress;
- they rely on measures of lead time or cycle time instead of velocity;
- and in the most visible alteration, they replace the task board with a “kanban board”:
- unlike a task board, the kanban board is not “reset” at the beginning of each iteration
- its columns represent the different processing states of a “unit of value”, which is generally (but not necessarily) equated with a user story
- in addition, each column may have associated with it a “WIP limit” (for “work in process” or “work in progress”): if a given state, for instance “in manual testing”, has a WIP limit of, say, 2, then the team “may not” start testing a third user story if two are already being worked on
- whenever such a situation arises, the priority is to clear current work-in-process, and team members will “swarm” to help those working on the activity that’s blocking flow

### Planning Poker

A playful approach to estimation, used by many Agile teams.  

The team meets in presence of the customer or Product Owner. Around the table, each team member holds a set of playing cards, bearing numerical values appropriate for points estimation of a user story.  

The Product Owner briefly states the intent and value of a story. Each member of the development team silently picks an estimate and readies the corresponding card, face down. When everyone has taken their pick, the cards are turned face up and the estimates are read aloud.  

The two (or more) team members who gave the high and low estimate justify their reasoning. After brief discussion, the team may seek convergence toward a consensus estimate by playing one or more further rounds.  

### Product Owner

The product owner is a role on a product development team responsible for managing the product backlog in order to achieve the desired outcome that a product development team seeks to accomplish.  Key activities to accomplish this include:

- Clearly identify and describe product backlog items in order to build a shared understanding of the problem and solution with the product development team
- Make decisions regarding the priority of product backlog items in order to deliver maximum outcome with minimum output
- Determine whether a product backlog item was satisfactorily delivered
- Ensure transparency into the upcoming work of the product development team.

### Scrum Master

The scrum master is the team role responsible for ensuring the team lives agile values and principles and follows the processes and practices that the team agreed they would use.  

The responsibilities of this role include:

- Clearing obstacles
- Establishing an environment where the team can be effective
- Addressing team dynamics
- Ensuring a good relationship between the team and product owner as well as others outside the team
- Protecting the team from outside interruptions and distractions.

### Ubiquitous Language

A design approach described in Eric Evans’ “Domain Driven Design” (2003), which consists notably of striving to use the vocabulary of a given business domain, not only in discussions about the requirements for a software product, but in discussions of design as well and all the way into “the product’s source code itself”.  

(Evans’ book details other complementary techniques, but the name “ubiquitous language” conveys the main intention.)  

### 3 C’s

“Card, Conversation, Confirmation”; this formula (from Ron Jeffries) captures the components of a User Story:

- a “Card” (or often a Post-It note), a physical token giving tangible and durable form to what would otherwise only be an abstraction:
- a “conversation” taking place at different time and places during a project between the various people concerned by a given feature of a software product: customers, users, developers, testers; this conversation is largely verbal but most often supplemented by documentation;
- the “confirmation”, finally, the more formal the better, that the objectives the conversation revolved around have been reached.

## Subway map

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2014-09-18-agile-lessons-subway-map.jpg">
</div>

# Sources  
[Agile Alliance Essentials](https://www.agilealliance.org/agile-essentials/)  
[Socraa Agile Blog](https://www.socraagile.ch/fr/blog/)  
[Software Economic System](https://www.youtube.com/watch?v=TQ9rng6YFeY)