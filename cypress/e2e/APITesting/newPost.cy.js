const datajson = require("../../fixtures/createUser.json");

describe("API Testing with Cypress", () => {
  it("POST Request", () => {
    let emailid = "Tenali" + Math.floor(Math.random() * 1000000) + "@gmail.com";
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer " +
          "f9d47fdc447d8b13b928d70b4a3f37968cae2a853fe975f62b3429621c13f8dc",
      },
      body: {
        name: datajson.name,
        gender: datajson.gender,
        email: emailid,
        status: datajson.status,
      },
    })
      .then((response) => {
        //cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.name).to.eq("Tenali Ramakrishna");
        expect(response.body.email).to.eq(emailid);
        expect(response.body.status).to.eq("active");
      })
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        const userId = response.body.id;
        cy.log("User ID: " + userId);
        cy.request({
          method: "GET",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            Authorization:
              "Bearer " +
              "f9d47fdc447d8b13b928d70b4a3f37968cae2a853fe975f62b3429621c13f8dc",
          },
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(200);
          expect(getResponse.body).to.have.property("id", userId);
          expect(getResponse.body.name).to.eq("Tenali Ramakrishna");
          expect(getResponse.body.email).to.eq(emailid);
          expect(getResponse.body.status).to.eq("active");
        });
      });
  });
});
