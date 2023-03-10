describe("Test Suite", function(){
  it("Test 01", function(){
      // Googleページへ
      cy.visit("https://www.google.com/");

      // 検索boxにcypress入力 → エンター入力
      cy.get('input[type="text"][name="q"]').type("cypress.io").type("{enter}") 

        // 最初の検索結果をクリック
        cy.get('#search a').first().click();

      // アサーション ページタイトル確認
      cy.title().should("include", "JavaScript End to End Testing Framework | cypress.io"); 
      // その他の操作
      cy.screenshot(); // スクリーンショット
      cy.reload(); // ページのリロード
      cy.log("test log"); // ログ出力

  });
});