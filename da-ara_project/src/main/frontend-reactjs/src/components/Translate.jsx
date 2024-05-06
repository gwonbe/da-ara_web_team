import { useEffect } from "react";
import "./Translate.css";

const Translate = ({ isDropdownOpen }) => {
  function doGTranslate(a, b) {
    if (b === "") return;
    var d = a.split("|")[1];
    var e;
    var f = document.getElementsByTagName("select");
    for (var g = 0; g < f.length; g++)
      if (f[g].className == "goog-te-combo") e = f[g];
    if (
      document.getElementById("google_translate_element2") === undefined ||
      document.getElementById("google_translate_element2").length == 0 ||
      e.length == 0 ||
      e === undefined ||
      e.length == 0
    ) {
      setTimeout(function () {
        doGTranslate(a);
      }, 500);
    } else {
      e.value = d;
      e.dispatchEvent(new Event("change"));
      e.dispatchEvent(new Event("change"));
    }
  }

  useEffect(() => {
    function googleTranslateElementInit2() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ko",
          includedLanguages: "ko,zh-CN,en,ja",
          autoDisplay: false,
        },
        "google_translate_element2"
      );
    }

    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit2;
  }, []);

  const handleLanguageChange = (language) => {
    doGTranslate(`ko|${language}`);
  };

  return (
    <div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <button onClick={() => handleLanguageChange("ko")}>한국어</button>{" "}
          <br />
          <button onClick={() => handleLanguageChange("en")}>
            English
          </button>{" "}
          <br />
          <button onClick={() => handleLanguageChange("zh-CN")}>中国人</button>
          <br />
          <button onClick={() => handleLanguageChange("ja")}>日本語</button>
        </div>
      )}
      <div id="google_translate_element2"></div>
    </div>
  );
};

export default Translate;
