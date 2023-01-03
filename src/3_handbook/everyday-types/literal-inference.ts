declare const someCondition: boolean;

// ---cut---
const obj = { counter: 0 };
if (someCondition) {
    obj.counter = 1;
}

// @errors: 2345
declare function handleRequest(url: string, method: "GET" | "POST"): void;
// ---cut---
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// Change 1:
const req2 = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req2.url, req2.method as "GET");

const req3 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req3.url, req3.method);

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
