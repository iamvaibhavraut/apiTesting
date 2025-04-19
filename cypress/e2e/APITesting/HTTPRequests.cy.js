describe("API Testing with Cypress", () => {
  it("GET Request", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("eq", 200);
  });

  it("POST Request", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });
});
describe("API Testing with Cypress", () => {
  it("PUT Request", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
    });
  });

  it("DELETE Request", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Approach 1: Hard-coded JSON object", () => {
    const requestBody1 = {
      tourist_name: "John",
      tourist_email: "johnxyz123@gmail.com",
      tourist_location: "London",
    };

    cy.request({
      method: "POST",
      url: "http://restapi.adequateshop.com/api/Tourist",
      body: requestBody1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.tourist_name).to.eq("John");
      expect(response.body.tourist_email).to.eq("johnxyz123@gmail.com");
      expect(response.body.tourist_location).to.eq("London");
    });
  });
});
