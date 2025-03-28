describe("Anasayfa tesleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Metin kontrolü", () => {
    cy.contains("KOD ACIKTIRIR PİZZA, DOYURUR");
    cy.contains("Sipariş Ver");
    cy.contains("Pizza");
    cy.contains("Burger");
    cy.contains("Fast Food");
    cy.contains("fırsatı kaçırma");
    cy.contains("en çok paketlenen menüler");
    cy.contains("Acıktıran Kodlara Doyuran Lezzetler");
    cy.contains("Instagram");
  });

  it("Buton kontrolü", () => {
    cy.get("[data-cy=home-button]").should("be.visible");
  });
  it("Butona tıklama", () => {
    cy.get("[data-cy=home-button]").click();
    cy.url().should("include", "/order-pizza");
  });
  it("Sipariş ver buton kontrolü", () => {
    cy.contains("Sipariş Ver").should("be.visible");
  });
  it("Sipariş ver tıklama", () => {
    cy.contains("Sipariş Ver").click();
    cy.url().should("include", "/order-pizza");
  });
  it("Logo tıklama", () => {
    cy.get("[data-cy=logo]").click();
    cy.url().should("include", "/");
  });
});

function siparisVer() {
  cy.visit("http://localhost:5173/order-pizza");
  cy.contains("M").click();
  cy.get("[data-cy=dough-select]").select("Süpper Kalın");
  cy.get("[data-cy=input-topping-0]").check();
  cy.get("[data-cy=input-topping-1]").check();
  cy.get("[data-cy=input-topping-2]").check();
  cy.get("[data-cy=input-topping-3]").check();
  cy.get("[data-cy=input-topping-4]").check();
  cy.get("[data-cy=input-topping-5]").check();
  cy.get("[data-cy=input-topping-6]").check();
  cy.get("[data-cy=name-input]").type("Aslı");
  cy.get("[data-cy=order-button]").should("be.enabled");
  cy.get("[data-cy=order-button]").click();
  cy.url().should("include", "/success");
}

describe("Sipariş sayfası testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order-pizza");
  });

  it("Metin kontrolü", () => {
    cy.contains("--Hamur Kalınlığı Seç --");
    cy.contains("İtalyan");
    cy.contains("Kanada Jambonu");
    cy.contains("S");
    cy.contains("Sipariş Notu");
    cy.contains("Sipariş Ver");
    cy.contains("Sipariş Oluştur");
    cy.contains("pizzetta");
    cy.contains("Hackathlon");
  });

  it("Dörtten fazla malzeme seçmek", () => {
    cy.get("[data-cy=input-topping-0]").check();
    cy.get("[data-cy=input-topping-1]").check();
    cy.get("[data-cy=input-topping-2]").check();
    cy.contains("Lütfen en az 4 malzeme seçiniz.").should("be.visible");
  });

  it("Ondan fazla malzeme seçmek", () => {
    cy.get("[data-cy=input-topping-0]").check();
    cy.get("[data-cy=input-topping-1]").check();
    cy.get("[data-cy=input-topping-2]").check();
    cy.get("[data-cy=input-topping-3]").check();
    cy.get("[data-cy=input-topping-4]").check();
    cy.get("[data-cy=input-topping-5]").check();
    cy.get("[data-cy=input-topping-6]").check();
    cy.get("[data-cy=input-topping-7]").check();
    cy.get("[data-cy=input-topping-8]").check();
    cy.get("[data-cy=input-topping-9]").check();
    cy.get("[data-cy=input-topping-10]").check();
    cy.contains("En fazla 10 malzeme seçebilirsiniz.").should("be.visible");
  });

  it("Normal sayıda malzeme seçmek", () => {
    cy.get("[data-cy=input-topping-0]").check();
    cy.contains("Lütfen en az 4 malzeme seçiniz.").should("be.visible");
    cy.get("[data-cy=input-topping-1]").check();
    cy.get("[data-cy=input-topping-2]").check();
    cy.get("[data-cy=input-topping-3]").check();
    cy.contains("Lütfen en az 4 malzeme seçiniz.").should("not.exist");
    cy.get("[data-cy=input-topping-4]").check();
    cy.get("[data-cy=input-topping-5]").check();
    cy.get("[data-cy=input-topping-6]").check();
    cy.get("[data-cy=input-topping-7]").check();
    cy.get("[data-cy=input-topping-8]").check();
    cy.get("[data-cy=input-topping-9]").check();
    cy.get("[data-cy=input-topping-10]").check();
    cy.contains("En fazla 10 malzeme seçebilirsiniz.").should("be.visible");
    cy.get("[data-cy=input-topping-5]").uncheck();
    cy.contains("En fazla 10 malzeme seçebilirsiniz.").should("not.exist");
  });

  it("Maksimum malzeme seçimi kontrolü", () => {
    for (let i = 0; i <= 10; i++) {
      cy.get(`[data-cy=input-topping-${i}]`).check();
    }
    cy.contains("En fazla 10 malzeme seçebilirsiniz.").should("be.visible");
  });

  it("Sipariş ver buton kontrolü", () => {
    cy.contains("Sipariş Ver").should("be.visible");
  });
  it("Sipariş vermek", () => {
    siparisVer();
  });
  it("Logo tıklama", () => {
    cy.get("[data-cy=logo]").click();
    cy.url().should("include", "/");
  });
});

describe("Success sayfası testleri", () => {
  it("Metin kontrolü", () => {
    cy.visit("http://localhost:5173/success");
    cy.contains("Sipariş Alınamadı!");
  });

  it("Form gönderip sayfaya erişince yazı kontrolü", () => {
    siparisVer();
    cy.contains("Boyut: M");
    cy.contains("Hamur: Süpper Kalın");
    cy.contains(
      "Ek Malzemeler:Pepperoni, Sosis, Kanada Jambonu, Tavuk Izgara, Soğan, Domates, Mısır"
    );
  });
  it("Logo tıklama", () => {
    cy.visit("http://localhost:5173/success");
    cy.get("[data-cy=logo]").click();
    cy.url().should("include", "/");
  });
});
