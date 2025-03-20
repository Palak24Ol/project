const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {
        summary: {
          type: "string",
          description: "A summary of the course material."
        },
        chapters: {
          type: "array",
          description: "An array of chapters in the course.",
          items: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "The title of the chapter."
              },
              summary: {
                type: "string",
                description: "A summary of the chapter."
              },
              topics: {
                type: "array",
                items: {
                  type: "string",
                  description: "A topic within the chapter."
                }
              }
            },
            required: [
              "title",
              "summary",
              "topics"
            ]
          }
        }
      },
      required: [
        "summary",
        "chapters"
      ]
    },
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: " Generate a study material for `${topic}` for `${courseType}` and level of difficulty will be `${difficultyLevel}` with summary of course, list of chapters along with summary for each chapter, topic list in each chapter in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "{\n  {\n  \"\"chapters\": [\n    {\n      \"summary\": \"This chapter introduceschapters\": [\n    {\n      \"summary\": \"This chapter introduces the concept of Object-Oriented Programming (OOP), its core principles, and advantages over procedural programming. It also covers basic OOP concepts like classes, objects, inheritance, polymorphism, and encapsulation.\",\n      \"title\": \"Introduction to Object-Oriented the fundamental concepts of object-oriented programming (OOP). It covers the core principles, including encapsulation, inheritance, and polymorphism, providing a solid foundation for understanding and applying OOP in Java.\",\n      \"title\": \"Introduction to Object-Oriented Programming\",\n      \"topics\": [\n        \"Classes and Objects\",\n        \"Encapsulation\",\n        \"Inheritance\",\n        \"Polymorphism\",\n        \"Abstraction\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter delves into the concept of classes and objects in Java, explaining how to define classes, create objects, and use them to model real-world entities Programming\",\n      \"topics\": [\n        \"Procedural Programming vs. Object-Oriented Programming\",\n        \"Core Principles of OOP: Encapsulation, Inheritance, Polymorphism\",\n        \"Classes and Objects: Definition and Instantiation\",\n        \"Advantages of OOP: Modularity, Reusability, Maintainability\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter dives deeper into classes and objects, covering topics such as attributes, methods, constructors, and destructors.  It also explains how to define and use classes, create objects, access object members, and understand the concept of 'this' pointer. It also covers constructors, methods, and instance variables.\",\n      \"title\": \"Classes and Objects in Java\",\n      \"topics\": [\n        \"Defining Classes\",\n        \"Creating Objects\",\n        \"Constructors\",\n        \"Methods\",\n        \"Instance Variables\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter explores the concept of inheritance in Java, explaining how to create new classes based on existing classes, inherit their properties and behaviors, and override methods. It covers single inheritance, multiple inheritance, and hierarchical.\",\n      \"title\": \"Classes and Objects\",\n      \"topics\": [\n        \"Class Definition: Attributes (Data Members) and Methods (Member Functions)\",\n        \"Object Creation and Instantiation\",\n        \"Accessing Object Members: Dot Operator\",\n        \"Constructors: Default, Parameterized, and Copy Constructors\",\n        \"Destructors: Purpose and Usage\",\n        \"The 'this' Pointer: Understanding its Role\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter focuses on inheritance, one of the fundamental concepts of OOP. It covers different types of inheritance (single, multiple, multilevel inheritance.\",\n      \"title\": \"Inheritance in Java\",\n      \"topics\": [\n        \"Single Inheritance\",\n        \"Multiple Inheritance (Interfaces)\",\n        \"Hierarchical Inheritance\",\n        \"Method Overriding\",\n        \"Super Keyword\"\n      ]\n    },\n    {\n      \"summary\":, hierarchical, and hybrid), virtual functions, and abstract classes. It also illustrates how inheritance promotes code reusability and reduces redundancy.\",\n      \"title\": \"Inheritance\",\n      \"topics\": [\n        \"Types of Inheritance: Single, Multiple, Multilevel, Hierarchical, Hybrid\",\n        \"Base \"This chapter focuses on polymorphism in Java, explaining how to create objects that can take on multiple forms and how to use interfaces to achieve polymorphism. It covers method overloading, method overriding, and dynamic binding.\",\n      \"title\": \"Polymorphism in Java\",\n      \"topics\": [\n        \"Method Overloading\",\n        \"Method Overriding\",\n        \"Dynamic Binding\",\n        \"Interfaces\",\n        \"Abstract Classes\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter covers exception handling in Java, explaining how to handle exceptions, use try-catch blocks, and throw custom exceptions. It Class and Derived Class: Access Modifiers (Public, Private, Protected)\",\n        \"Virtual Functions: Runtime Polymorphism\",\n        \"Abstract Classes: Defining Abstract Methods\",\n        \"Advantages of Inheritance: Code Reusability and Extensibility\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter explains polymorphism, the ability of an object to take on many forms. It covers compile-time polymorphism (function overloading and operator overloading) and runtime polymorphism (virtual functions). Examples will be provided for function and operator overloading.\",\n      \"title\": \"Polymorphism\",\n      \"topics\": [\n        \"Compile also covers different types of exceptions, including checked exceptions, unchecked exceptions, and errors.\",\n      \"title\": \"Exception Handling in Java\",\n      \"topics\": [\n        \"Try-Catch Blocks\",\n        \"Finally Block\",\n        \"Throwing Exceptions\",\n        \"Custom Exceptions\",\n        \"Checked vs. Unchecked Exceptions\"\n      ]\n    }\n  ],\n  \"summary\": \"This course provides a comprehensive introduction to Object-Oriented Programming (OOP) concepts in Java. It covers the fundamental principles of OOP, including classes, objects, inheritance, polymorphism, and exception handling. The course is designed for beginners-time Polymorphism: Function Overloading and Operator Overloading\",\n        \"Runtime Polymorphism: Virtual Functions and Dynamic Binding\",\n        \"Function Overloading: Defining Multiple Functions with the Same Name\",\n        \"Operator Overloading: Overloading Operators for User-Defined Types\",\n        \"Virtual Functions and Pure with little or no prior programming experience. The difficulty level is beginner.\"\n} Virtual Functions\"\n      ]\n    },\n    {\n      \"summary\": \"This chapter introduces the concept of encapsulation and data abstraction. It covers access modifiers (public, private, and protected) and explains how to use them to control access to class members.  The concepts of information hiding are also discussed.\",\n      \""},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();