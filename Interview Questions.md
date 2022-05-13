# Interview Questions



**Q: What is an N-Tier architecture**

**Answer**

An N-tier architecture divides an application into logical layers and physical tiers. Layers are a way to separate responsibilities and manage dependencies. Each layer has a specific responsibility. A higher layer can use services in a lower layer, but not the other way around.

Example: 
* Angular Single Page Application (Highest level)
* .Net Core or .Net API
* SQL Server Database (Lowest level)

You can put all layers in different computers and it will still operate efficiently. 

Pros:
* Separation of concerns: each tier will handle specific tasks
* Security: Enforce security differently on each layer. Lower level tiers can have the strongest security
* Scalability: Each tier can scale as needed. you can scale the Database with database clustering without touching the other tiers.
* Maintainance: Different people or teams can maintain different tiers. You might want to have a front end developer maintaining the presentation layer without touching the business logic or data.
* Enhancements are easy: You could easily replace each tier or add more tiers on each level. For example, you could change the UI or add different presentation layers (This is specially usefull for mobile apps). 

**Q: Explain all methods of dependency injection**

**Q:** What design patterns do you use

**Q:** What are the async await functions

What is the difference between static and instance variables





Cookie vs JWT authentication
When to use NoSQL rather than SQL

**Q:** REST vs SOAP

**Answer**

https://www.wallarm.com/what/differences-soap-vs-rest#:~:text=While%20REST%20is%20faster%20than,Web%20Services%20Security%20as%20well.

How to Scale a Web API
How to monitor the App service apart from the logs
Indexing
I what case index based query will degrade query performance
Creating an Angular application is a design pattern
Service Locator Pattern

**Q:** Inversion of control principle

**Answer**

## SOLID Principles

**Q:** State the SOLID principles

**Answer**

Principles of object oriented design

S: Single responsability principle. A class should ony have one reason to change. Ex. Area calculator class and area output class

O: Open-Closed principle. Every class should be extensible in order to change or expand the functionality

L: 

I: Inversion of dependencies

D: 

For more detail, visit the following link: 

https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design

# .NET

**Q: Difference between .Net Framework and .Net Core**

**Answer**

.Net Framework is a re-usable design platform for software systems, which provides support for code libraries and various scripting languages. It is a software development platform for building and running Windows applications. The .Net framework is used to build desktop and web applications. It is also used to build websites, web services, and games.

 .Net Core is the latest version of .Net Framework. It is a cross-platform framework that works with Windows, Mac OS X, and Linux. It is used to create a wide variety of apps, including mobile, desktop, online, cloud, IotT, machile learning, microservices, games, and more. .Net Core is written from scratch to make it a modular, lightweight, fast, and cross-platform framework.

**Q: What is a Delegate**

**Answer**

With delegates you can pass functions as parameters. Callbacks.

# Angular

**Q: Difference Between Observable and Promise**

**Answer**

**Q: What is difference between NGXS and NgRx?**

NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application's state. 

NgRx is also a state management tool. Is works with the actions, reducers, effects, selectos, and subscriptions to the observable of the state. State can be separated in feature modules in way that each feature module of the angular application can hava it's own state. 

Both Typescript libraries mutate the state dispatching actions and you can subscribe to the actions and the changes to the state but NGXS has less boilerplate taking advantage of modern Typescript functions such as decorators and classes.

**Q: Parent and child component in angular**

Easy

**Q: What is the sequence of Angular lifecycle hooks?**

Angular can use lifecycle hook methods to tap into key events during the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

Angular calls the lifecycle hook methods in the following sequence after creating a component by calling its constructor method:

* ``ngOnChanges()`` This responds when Angular sets or re-sets data-bound input properties. It is called before the ``ngOnInit()``, if the component have bound inputs, and whenever one or more data-bound input properties change.

* ``ngOnInit()`` Used to initialize the component after Angular first displays the data-bound properties and sets the component's input properties.

* ``ngDoCheck()`` Called during every change detection run, immediately after ngOnChanges() and after ``ngOnInit()`` to detect and act upon changes that Angular won't do on its own.

* ``ngAfterContentInit()`` Called once after the first ``ngDoCheck()`` to respond after Angular projects external content into the component's view.

* ``ngAfterContentChecked()`` Called after the ``ngAfterContentInit()`` and every subsequent ``ngDoCheck()`` to respond after Angular checks the projected content.

* ``ngAfterViewInit()`` Called once after the first ngAfterContentChecked() to respond after Angular validates the component and it's child views.

* ``ngAfterViewChecked()`` Called after the ngAfterViewInit() and after every subsequent ``ngAfterContentChecked()``.

* ``ngOnDestroy()``Called just before Angular destroys the component to avoid memory leaks by effective cleanup just before destroying the directives.

**Q: What Are Angular Directives?**

Angular Directive is a TypeScript class which is declared as a @directive decorator.

The directives allow you to attach behavior to DOM elements and the @directive decorator provide you an additional metadata that determines how directives should be processed, instantiated, and used at run-time.

What Are decorators?
The Decorators are functions that modify JavaScript classes and it also used for attaching metadata to classes.

Directive decorator and metadata Properties -
@Directive({
    selector?: string
    inputs?: string[]
    outputs?: string[]
    host?: {...}
    providers?: Provider[]
    exportAs?: string
    queries?: {...}
})

# Databases

**Q:** Difference of inner join and right join 

**Answer**

**Q:** Whats a View in database context

**Answer**

A view does not form part of the physical schema: as a result set, it is a virtual table computed or collated dynamically from data in the database when access to that view is requested.

What is a trigger in DB context Trigger

## Store Procedures

**Q:** What is a Store Procedure

**Answer**

**Q:** When or why use store procedures

**Answer**

* Security: If there is sensible query or procedure using the database data, then the program can just call the procedure without knowing what the process is. The code or any program will not have to have access to that sensible query or procedure.

* Networking: You can save time by just sending the instruction to the database server and the store procedure will work with the data without having to send data through the network. If one procedure or function needs data from more than one tale, then all data must be passed along through the network so the function that made the queries can work with the data and then compute whatever it needs to. With the store procedure the database server will have all the data it needs to work with it can just simply return the result of the procedure or computations needed.

* Scalability: If multiple programs interact with the database and the database structure changes, then each of the programs will have to adapt for that change in the structure. In contrast if we have an store procedure we will just have to modify the store procedure and the other programs can remain with no changes calling that same store procedure.

* Have the code in one place

# Practical

If an employe can have multiple addresses, what 
would be the right database design for this?

**Q:**

**Answer**
