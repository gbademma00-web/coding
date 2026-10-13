const pupils = [
        { id: 1, name: "Mike", age: 16, score: 94 },
        { id: 2, name: "Tunde", age: 16, score: 85 },
        { id: 3, name: "Makinde", age: 18, score: 70 },
        { id: 4, name: "Akin", age: 17, score: 65},
        { id: 5, name: "Abdul", age: 16, score: 56 },
        { id: 6, name: "Matthew", age: 16, score: 43 },
      ];

      const output = document.getElementById("output");
      const showBtn = document.getElementById("showBtn");
      const clrBtn = document.getElementById("clrBtn");

      showBtn.addEventListener("click", function () {
        let html = "<ul>";

        for (let pupil of pupils) {
          if (pupil.score >= 90) {
            html += `<li><h1> ${pupil.name} - ${pupil.score} Distinction <h1></li>`;
          } else if (pupil.score >= 75) {
            html += `<li> ${pupil.name} - ${pupil.score} Great Results</li>`;
          } else if (pupil.score >= 60) {
            html += `<li> ${pupil.name} - ${pupil.score} Student needs improvement </li>`;
          }  else if (pupil.score >= 35) {
            html += `<li> ${pupil.name} - ${pupil.score} Student needs to repeat! </li>`;
          }
        }
        html += "</ul>";
        output.innerHTML = html;
      });
      clrBtn.addEventListener("click", function () {
        output.innerHTML = "";
      });