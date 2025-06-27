<style>
    .question {
        margin-bottom: 16px;
        font-size: 15px;
        color: orange;
        //font-weight: bold;
    }
</style>

<div class="question"></div>

# Interview Questions

<div class="question">What is an N-Tier architecture</div>

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

<div class="question">Explain all methods of dependency injection</div>

<div class="question">What design patterns do you use</div>

<div class="question">What are the async await functions</div>

<div class="question">What is the difference between static and instance variables</div>

<div class="question">Cookie vs JWT authentication</div>

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>How it works</th>
            <th>Pros</th>
            <th>Cons</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cookie-Based Authentication</td>
            <td>After login, the server creates a session and stores it in memory or a database. A session ID is sent to the client as a cookie.</td>
            <td>
                <ul>
                    <li>Built-in browser support (cookies are sent automatically with each request).</li>
                    <li>Easier to implement CSRF protection using SameSite, HttpOnly, and Secure flags.</li>
                    <li>Server-side session control (you can revoke sessions anytime).</li>
                </ul>
            </td>
            <td>
                <li>Doesn’t scale well for distributed systems unless you use sticky sessions or external session stores.</li>
                <li>Mostly browser-centric; less ideal for mobile or third-party API clients.</li>
            </td>
        </tr>
        <tr>
            <td>JWT-Based Authentication</td>
            <td>After login, the server issues a signed token (JWT) containing user info. The client stores it (usually in localStorage) and sends it with each request (typically in the Authorization header).
            </td>
            <td>
                <li>Stateless and scalable—no need to store sessions on the server.</li>
                <li>Works well across platforms (web, mobile, APIs).</li>
                <li>Easy to implement role-based access control using token claims.</li>
            </td>
            <td>
                <li>Harder to revoke tokens before they expire unless you implement a blacklist.</li>
                <li>Vulnerable to XSS if stored insecurely.</li>
                <li>Larger payloads can increase request size.</li>
            </td>
        </tr>
    </tbody>
</table>

<div class="question">When to use NoSQL rather than SQL</div>


<div class="question">REST vs SOAP</div>

https://www.wallarm.com/what/differences-soap-vs-rest#:~:text=While%20REST%20is%20faster%20than,Web%20Services%20Security%20as%20well.

<div class="question">How to Scale a Web API</div>

<div class="question">How to monitor the App service apart from the logs</div>

<div class="question">Indexing</div>

<div class="question">In what case index based query will degrade query performance</div>

<div class="question">Is creating an Angular application is a design pattern?</div>

<div class="question">Service Locator Pattern</div>

<div class="question">Inversion of control principle</div>

Let the program control the details I dont really care for

## SOLID Principles

<div class="question">State the SOLID principles</div>

The SOLID principles are a design pattern that enlist five key guidelines in object-oriented programming that help create flexible, maintainable, and scalable software

<table>
    <thead>
        <tr>
            <th>Principle</th>
            <th>Definition</th>
            <th>Purpose</th>
            <th>Pitfalls</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Single Responsibility Principle (SRP)</td>
            <td>A class should ony have one reason to change.</td>
            <td>Makes changes isolated, easy to test and reason about.</td>
            <td>Hyper-decomposition. You probably don't need a full class to set a page/screen title.</td>
        </tr>
        <tr>
            <td>Open/Closed Principle (OCP)</td>
            <td>Classes should be closed for modification but open for extension.</td>
            <td>Help prevent new features from breaking old ones.</td>
            <td>"Closing" a module you own, maintain, and can safely extend can lead to unnecessary complexity, inheritance chains, LOC, and added binary/bundle size.</td>
        </tr>
        <tr>
            <td>Liskov Substitution Priciple (LSP)</td>
            <td>Child classes must be able to substitute parent classes without altering the correctness of the program.</td>
            <td>Helps prevent code that looks correct from being incorrect.	</td>
            <td>Over-reliance on LSP as a signal for correctness.</td>
        </tr>
        <tr>
            <td>Interface Segregation Principle (ISP)</td>
            <td>Clients should not be forced to depend on interfaces they do not use, promoting smaller, more specific interfaces.</td>
            <td>Allows variable/function to accept to more types; Reduces boilerplate for using functions.</td>
            <td>Requiring the smallest possible interface may conflict with intent of LSP.</td>
        </tr>
        <tr>
            <td>Dependency Inversion Principl (DIP)</td>
            <td>High-level modules should not depend on low-level modules; both should depend on an abstractions (interfaces) instead of actual implementations.</td>
            <td>Makes more of the system reusable, swappable, and testable.</td>
            <td>Over-inversion. Creating and "inverting" abstractions with no gain, adding complexity, making code harder to read and reason about.</td>
        </tr>
    </tbody>
</table>

For more detail, visit the following links: 

* https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
* https://softwareengineering.stackexchange.com/questions/447532/when-to-not-use-solid-principles


# .NET

<div class="question">Difference between .Net Framework and .Net Core</div>


.Net Framework is a re-usable design platform for software systems, which provides support for code libraries and various scripting languages. It is a software development platform for building and running Windows applications. The .Net framework is used to build desktop and web applications. It is also used to build websites, web services, and games.

.Net Core is the latest version of .Net Framework. It is a cross-platform framework that works with Windows, Mac OS X, and Linux. It is used to create a wide variety of apps, including mobile, desktop, online, cloud, IotT, machile learning, microservices, games, and more. .Net Core is written from scratch to make it a modular, lightweight, fast, and cross-platform framework.

<div class="question">What is a Delegate?</div>

With delegates you can pass functions as parameters. Callbacks.

# Angular

<div class="question">Difference Between Observable and Promise</div>


| Observable  | Promise |
| ----------- | ----------- |
|1. It emits multiple values over a period of time| 1. Emit only single value at a time |
| 2. Observables are streams of events over time | 2. A Promise can only handle one event |
| 3. Lazy. Observable is not called until we subscribe to the Observable | 3. Not Lazy. It call the service without .then and .catch |
| 4. Can be cancelled by using the ubsubscribe() method | 4. Not possible to be cancelled |
| 5. Observable provides the map, tap, forEach, filter, reduce, retry, retryWhen operators | 5. It not provides any operators |

<div class="question">What is difference between NGXS and NgRx?</div>


NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application's state. 

NgRx is also a state management tool. Is works with the actions, reducers, effects, selectos, and subscriptions to the observable of the state. State can be separated in feature modules in way that each feature module of the angular application can have it's own state. 

Both Typescript libraries mutate the state dispatching actions and you can subscribe to the actions and the changes to the state but NGXS has less boilerplate taking advantage of modern Typescript functions such as decorators and classes.

<div class="question">Parent and child component in Angular</div>

Easy

<div class="question">What is the sequence of Angular lifecycle hooks?</div>


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

<div class="question">What Are Angular Directives?</div>

Angular Directive is a TypeScript class which is declared as a @directive decorator.

The directives allow you to attach behavior to DOM elements and the @directive decorator provide you an additional metadata that determines how directives should be processed, instantiated, and used at run-time.

TODO: add video url for directives

<div class="question">What Are decorators?</div>

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

<div class="question">Difference of inner join and right join</div>

https://www.youtube.com/watch?v=G3lJAxg1cy8

<div class="question">Whats a View in database context</div>

A view does not form part of the physical schema: as a result set, it is a virtual table computed or collated dynamically from data in the database when access to that view is requested.

<div class="question">What is a trigger in DB context Trigger?</div>

A trigger in a database is a special type of stored procedure that automatically executes in response to specific events on a table or view. Triggers help enforce business rules, maintain data integrity, and automate tasks.

Examples of triggers: BEFORE INSERT, AFTER INSERT, BEFORE UPDATE, AFTER UPDATE, AFTER UPDATE, BEFORE DELETE, AFTER DELETE.

## Store Procedures

<div class="question">What is a Store Procedure?</div>

A stored procedure in SQL is a set of precompiled SQL statements that are stored in the database and can be executed as a single unit. Stored procedures help automate tasks, improve efficiency, and reduce redundancy in database operations.

<div class="question">When or why use store procedures</div>

* Security: If there is sensible query or procedure using the database data, then the program can just call the procedure without knowing what the process is. The code or any program will not have to have access to that sensible query or procedure. Users can execute procedures withou direct access to underlying tables.

* Networking: You can save time by just sending the instruction to the database server and the store procedure will work with the data without having to send data through the network. If one procedure or function needs data from more than one table, then all data must be passed along through the network so the function that made the queries can work with the data and then compute whatever it needs to. With the store procedure the database server will have all the data it needs to work with it can just simply return the result of the procedure or computations needed.

* Scalability: If multiple programs interact with the database and the database structure changes, then each of the programs will have to adapt for that change in the structure. In contrast if we have an store procedure we will just have to modify the store procedure and the other programs can remain with no changes calling that same store procedure.

* Have the code in one place

# Practical

<div class="question">If an employe can have multiple addresses, what would be the right database design for this?</div>

**Employees**

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Data Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>EmployeeID</td>
            <td>INT (PK)</td>
            <td>Unique Identifier for each employee</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>VARCHAR</td>
            <td>Employee's full name</td>
        </tr>
        <tr>
            <td>OtherDetails</td>
            <td>TEXT</td>
            <td>Any additional employee details</td>
        </tr>
    </tbody>
</table>

**Addresses**

<table>
    <thead>
        <th>Column</th>
        <th>Data Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>AddressID</td>
            <td>INT (PK)</td>
            <td>Unique identifier for each address</td>
        </tr>
        <tr>
            <td>EmployeeID</td>
            <td>INT (FK)</td>
            <td>Links to EMployeeID in Employees table</td>
        </tr>
        <tr>
            <td>Street</td>
            <td>VARCHAR</td>
            <td>Street name and number</td>
        </tr>
        <tr>
            <td>City</td>
            <td>VARCHAR</td>
            <td>City name</td>
        </tr>
        <tr>
            <td>State</td>
            <td>VARCHAR</td>
            <td>State or region</td>
        </tr>
        <tr>
            <td>ZipCode</td>
            <td>VARCHAR</td>
            <td>Postal code</td>
        </tr>
    </tbody>
</table>