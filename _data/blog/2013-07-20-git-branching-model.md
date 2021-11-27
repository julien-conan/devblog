---
template: BlogPost
path: /git-flows-branching-models
date: 2013-07-21T08:35:30.125Z
title: 'Go with Version Control'
thumbnail: /assets/2013-07-21-git-flow-b.jpg
metaDescription:
---

# Branching Models

## Trunk Based Development

Trunk-based development is a branching model that is also referred to as “mainline development.” All branches extend from one trunk/main branch, usually called the master branch. This persistent branch is where all developers commit. The master branch follows the evolution of a software project.

| Benefits | Challenges |
| -------- | ---------- |
| Eliminate unnecessary divergence | - Contention collision |
| Good for small teams | - Builds break |
| Minimize merge conflicts | - Separate mature and immature code |
| Move fast | - Only experienced developers on your team |  

<br/>

Good (but heavy) practice: use feature toggles to avoid developpers tripping over each other constantly.

## Git, GitHub, GitLab

A workflow is a published Git workflow design popularized by [Vincent Driessen](http://nvie.com/posts/a-successful-git-branching-model/) ([nvie](http://nvie.com/posts/a-successful-git-branching-model/)). The Gitflow workflow defines a strict branch creation model built around project delivery. This provides a solid framework for managing larger projects, in a constantly changing environment where code is integrated more and more quickly, without always knowing where it comes from.

- Main
- Develop
- Feature
- Release
- Hotfix

The two primary branches are *main* and *develop*. They support different intented purposes: *feature*, *release*, and *hotfix*.

Git flow provides command-line access to the power of Git, following the branch model described above. These shortcuts save developers valuable time while securing actions on the production pipeline(s). Among the basic techniques to be rapidly deployed, the protection of the master branch as well as the implementation of systematic pull-requests will make it possible to reduce the scope of possible technical debts, improve communication and develop the skills of developers by sharing their experiences.

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-general-scheme.png"></img>
</div>

A pull-request example could be find below, detailing the necessary little operations to perform great teamwork fast as lightning:

`video: /assets/2013-07-21-git-flow-pull-request.mp4`

Deployments will be able to be quickly rolled back, made possible by the practice of exhaustive traceability between the time tasks are assigned, up to how they are processed, through one or two refactoring. To initialise a Git Flow in an empty or existing repository just type the command: 

```cmd
git flow init
```
<br/>

| Benefits | Challenges |
| -------- | ---------- |
| - Various branches types | - Overcomplicate |
| - Intuitive organisation | - Slow development process |
| - Multiple production code versions | - Long development lifecycle |

<br/>

In GitHub Flow, the main branch contains your production-ready code.

Working with this strategy, there are six considerations to keep in mind:

1. Any code in the main branch sould be deployable
2. Create new descriptively-named branches off the main branch for new work
3. Commit new work to your local branches and regularly push work to the remote
4. To request feedback or help, or when the work is ready open a pull-request
5. After your work has been reviewed and approved, it can be merged into the main branch
6. Once your work has been merged into the main branch, it should be deployed immediately

<div class="custom-images" style="width: 200px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-github.svg"></img>
</div>

<br/>

The GitHub Flow guide is available here: [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

<br/>

| Benefits | Challenges |
| -------- | ---------- |
| - Simple | - No multiple production code versions |
| - Easy CI-CD | - Lack of dedicated development branches |
| - Great for small teams and web apps | - More susceptible to bugs in production |

<br/>

## GitLab

With GitLab emerges additional principles such as:

<div class="custom-images" style="width: 200px; margin: 20px auto;">
	<img src="/assets/2013-07-21-git-flow-gitlab.svg"></img>
</div>

- Each release has an associated branch baised on the main branch
- Bug fixes should be merged into the main branch first
- Bug fixes should be cherry-picked then into the release branch
- Deployment ready code merged into the production branch

| Benefits | Challenges |
| -------- | ---------- |
| More simple | - No the simpliest |
| More organized and structured | - Not the most structured |
| Versioned Releases | - Messy collaboration |

<br/>

## VNext

Among the industry models that may be of interest to a small to medium-sized enterprise project or structure, the V-Next industry model may be appropriate in the first place. The important thing behind Git’s practice is to always have a working version on a branch of its tree, if possible on master. Hotfix management is live, allowing major patches to be delivered quickly to production without users noticing. Different deployment models are possible depending on the context of the project.

## Team-Based Development Model

Another way you can break up branches is by specific teams. And there are benefits. You can:

- Develop faster by distributing work to specific sub teams.
- Leverage expertise in specific areas of your project.
- Build closer teams.

This type of development works great for component-based development (CBD). But it is important to examine the challenges.

Team-based development requires a high level of communication to ensure that teams are not duplicating effort. And often teams have dependencies on development being done by another team. You need to set up a system that provides visibility across teams so that their work does not become increasingly siloed.

Also every team might set different standards. The more teams you have, the more critical it becomes to set coding and testing standards across your organization. This will help you sort out any future conflicts.

## Stage-Based Development Model

Stage-based development aligns branches with the level of code maturity to help isolate immature code from mature code. For example, you could have branches corresponding to:

- Development
- Integration (CI)
- Nightly builds
- QA
- Pre-production
- Production

Although stages may vary depending on the organization, some teams may choose to set up their teams to align with how the software evolves. For example, you might have developers set up to work on the initial designs and development. Others would be responsible for testing, integrations, and maintaining releases.

The benefit in the example is while developers continue to submit code to development and integration branches, QA is working against a stable QA branch. This can be thoroughly tested.

# Branching Strategies

Based on version control systems, branching strategies are used to orchestrate parallel development allowing developers to work on tasks simultaneously as part of a team. Parallel builds and testing ensure quick feedbacks.

In order to manage complex and parallel activites, the **merge early and often** must be the team basic strategy to prevent massive merge conflicts and release delays.

A good branching strategy should aim to:

- Optimize productivity
- Enable parallel development
- Allow for a set of planned, structured releases
- Provide a clear promotion path for software changes through production
- Evolve to accommodate changes that are delivered, perhaps daily
- Support multiple versions of released software and patches

## Production Branch

> Everything starts and ends here.

- Any new feature branch is branched out from production
- Once the feature is developed it is merged into QA or equivalent branch for testing.
- Once testing is approved, the feature branch is merged with production.
- Make production branch as the default branch in repository settings. This way, all merge request will be automatically made against this branch, unless we specify a different one
- Make production branch protected, so that no direct commit can be done by anyone against this branch. Only allow merge request or pull request

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-production-strategy.png"></img>
</div>

## Feature Branching

Using a feature branching strategy allows developers to create a branch for a specific feature or task. These are often referred to as user stories. This branch-per-issue workflow allows developers to work separately.

- Feature branch has just production + this feature related commits
- If some other feature got released while this feature is still in development, developer need to rebase with production. Else he won’t be able to merge it to production.
- Developer is forced to handle how his feature behaves with other newly released features. This is handled at feature branch level itself rather than environment branch

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-feature-strategy.png"></img>
</div>

## Feature Flag/Toggles

To help support this type of development, some teams implement feature toggles or flags, instead of maintaining a separate feature branch.The advantage is that all work can be done right from in the mainline. This means less branches and minimal merging.

## Release Branching

A release branching strategy involves creating a branch for a potential release that includes all applicable stories. When a team starts working on a new release, the branch is created.

## Feature Driven Development

Feature driven development (also called feature-based development) breaks up branches based on the features in a product. Teams plan, design, and build by features. This method is closely aligned with the Agile methodology and is a popular pattern in GitFlow.

| Benefits | Challenges |
| -------- | ---------- |
| Easily manage large scale projects | - Difficult to manage thousands of branches |
| Work in parallel | - Conflict management |
| Reduce mainline contention and broken builds | - Lot of coordination |

<br/>

If you are just starting up a project, feature drive development may not be a good place to start. That is because you might not even know all the features you want to include.

In the beginning, you need teams to move fast and iterate quickly. Using feature branches can slow you down and not allow you to adapt as quickly. Lots of branches and merge requests take time (and people) to manage.

But if you have a big team with a variety of skill levels, feature based development is a strong choice. You can easily plan out resources you need for specific features. And because you can test code more easily, you can make sure that immature code does not destabilize your codebase.

<div class="custom-images" style="width: 700px; margin: auto;">
	<img src="/assets/2013-07-21-git-flow-feature-driven-development.png"></img>
</div>

- Merge the feature branch to qa
- Complete the testing
- Don’t merge qa branch to production. Merge the feature branch to prod
- Forget the concept of qa being a sacred branch. In this case, qa branch is our convenience branch for testing. What we expect to test goes here. Over a period of time, if it contains code which are out of sync with production, force rebase it from production branch

```cmd
git checkout production
git pull --rebase
git push origin production:qa --force
```

<br/>

## Best practices

- Know and Communicate Your Branching Strategy for a Project
- Minimize How Long Code Is Checked Out
- Figure Out Your Dependencies
- Review Your Merge/Integration Process
- Pick the Right Version Control System

Do you have any questions? Are you blocked by a Git-related operation? Don't hesitate to get in touch with me I will be glad to support you on those tasks.

#### Sources

[What is the best Git branch strategy?](https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy)  
[The Best Branching Strategies For High-Velocity Development](https://www.perforce.com/blog/vcs/best-branching-strategies-high-velocity-development)  
[Trunk based development or feature driven development](https://www.perforce.com/blog/vcs/trunk-based-development-or-feature-driven-development)
[Git branching strategy to achieve continuous delivery](https://sairamkrish.medium.com/git-branching-strategy-for-true-continuous-delivery-eade4435b57e)  
