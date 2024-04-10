import { useEffect } from "react";
import "./Translate.css";

const Translate = () => {
  // Define doGTranslate function outside of the useEffect hook
  function doGTranslate(a, b) {
    var c = document.getElementById("google_translate_element2");
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
          includedLanguages: "ko,zh-CN,zh-TW,en",
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

  return (
    <>
      <button onClick={() => doGTranslate("ko|ko")} className="gflag nturl">
        한국어
      </button>
      <button onClick={() => doGTranslate("ko|en")} className="gflag nturl">
        영어
      </button>
      <button onClick={() => doGTranslate("ko|zh-CN")} className="gflag nturl">
        중국어
      </button>
      <div id="google_translate_element2"></div>
    </>
  );
};

export default Translate;
