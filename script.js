// መኽዘን ቃላት
const dictionaryData = {
const dictionaryData = {
  "ቃላት": [
    {
      "ቃል": "ጽቡቕ",
      "ትርጉም_en": "good",
      "ትርጉም_ti": "ጽቡቕ፣ ሕሩይ ወይ ተፈታዊ"
    },
    {
      "ቃል": "ብሉጽ",
      "ትርጉም_en": "excellent",
      "ትርጉም_ti": "ኣዝዩ ጽቡቕ፣ ብሉጽ"
    },
    {
      "ቃል": "ዘደንቕ",
      "ትርጉም_en": "wonderful",
      "ትርጉም_ti": "ዘገርምን ዘደንቕን"
    },
    {
      "ቃል": "ዓቢ",
      "ትርጉም_en": "big",
      "ትርጉም_ti": "ብመጠን ወይ ብዓቐን ዓቢ"
    },
    {
      "ቃል": "ሰፊሕ",
      "ትርጉም_en": "large",
      "ትርጉም_ti": "ብስፍሓት ዓቢ"
    },
    {
      "ቃል": "ግዙፍ",
      "ትርጉም_en": "massive",
      "ትርጉም_ti": "ኣዝዩ ዓቢን ከቢድን"
    },
    {
      "ቃል": "ንእሽቶ",
      "ትርጉም_en": "small",
      "ትርጉም_ti": "ብመጠን ወይ ብዓቐን ንእሽቶ"
    },
    {
      "ቃል": "ሕጉስ",
      "ትርጉም_en": "happy",
      "ትርጉም_ti": "ሓጎስ ዝስምዖ"
    },
    {
      "ቃል": "ጓሂ",
      "ትርጉም_en": "sad",
      "ትርጉም_ti": "ዝሓዘነ ወይ ዝተጨነቐ"
    },
    {
      "ቃል": "ቅልጡፍ",
      "ትርጉም_en": "fast",
      "ትርጉም_ti": "ብፍጥነት ዝፍጸም"
    },
    {
      "ቃል": "ኣረጊት",
      "ትርጉም_en": "old",
      "ትርጉም_ti": "ብዙሕ ዕድመ ዘለዎ ወይ ዝቖየ"
    },
    {
      "ቃል": "ሓድሽ",
      "ትርጉም_en": "new",
      "ትርጉም_ti": "ቀረባ ግዜ ዝተፈጥረ ወይ ዝተሰርሐ"
    },
    {
      "ቃል": "ከቢድ",
      "ትርጉም_en": "hard",
      "ትርጉም_ti": "ንምፍጻም ወይ ንምርዳእ ዘጸግም"
    },
    {
      "ቃል": "ኣጸጋሚ",
      "ትርጉም_en": "difficult",
      "ትርጉም_ti": "ብዙሕ ጻዕሪ ዝሓትት"
    },
    {
      "ቃል": "ብድሆ",
      "ትርጉም_en": "challenge",
      "ትርጉም_ti": "ክትሰግሮ ዘለካ ጸገም ወይ ፈተና"
    },
    {
      "ቃል": "ቀሊል",
      "ትርጉም_en": "easy",
      "ትርጉም_ti": "ብቐሊሉ ዝፍጸም"
    },
    {
      "ቃል": "ደኸመ",
      "ትርጉም_en": "tired",
      "ትርጉም_ti": "ሓይሉ ዝተወድአ"
    },
    {
      "ቃል": "ህላወ",
      "ትርጉም_en": "existence",
      "ትርጉም_ti": "ምህላው ወይ ምንባር"
    },
    {
      "ቃል": "ልምምድ",
      "ትርጉም_en": "workout",
      "ትርጉም_ti": "ኣካላዊ ልምምድ"
    },
    {
      "ቃል": "ጥሙይ",
      "ትርጉም_en": "hungry",
      "ትርጉም_ti": "ምግቢ ዘድልዮ"
    }
  ]
};

// ናይ ቋንቋ ትርጉማት (UI Translations)
const uiTranslations = {
    ti: {
        title: " መዝገበ ቃላት ትግርኛ",
        subtitle: "ዝደለይዎ ቃል ብትግርኛ ፅሒፎም ይድለዩ",
        placeholder: "ቃል ኣብዚ የእትዉ...",
        search: "ድለ",
        supportTitle: "🌟 ነዚ መዝገበ ቃላት ንምግፋሕን ንምምዕባልን ሓገዝኩም ኣይፈለየና!",
        supportLabel: "Support/ሓግዝ:",
        teleLabel: "ብቴሌብር (telebirr):",
        copy: "ኮፒ ግበር",
        noResult: "ይቕሬታ፣ ቁልቁል ዝበለ ቃል ኣይተረኽበን።",
        copied: "✓ ቁፅሪ ተቀዲሑ ኣሎ (Copied!)"
    },
    en: {
        title: "Tigrinya Dictionary",
        subtitle: "Type a word in Tigrinya to search",
        placeholder: "Type a word here...",
        search: "Search",
        supportTitle: "🌟 Your support keeps this project growing and expanding!",
        supportLabel: "Support:",
        teleLabel: "via Telebirr:",
        copy: "Copy",
        noResult: "Sorry, word not found.",
        copied: "✓ Number Copied!"
    }
};

// ቋንቋ ንምቕያር ዝሰርሕ ፋንክሽን
function changeLanguage() {
    const lang = document.getElementById("langSelect").value;
    const text = uiTranslations[lang];

    document.getElementById("mainTitle").innerText = text.title;
    document.getElementById("subTitle").innerText = text.subtitle;
    document.getElementById("searchInput").placeholder = text.placeholder;
    document.getElementById("searchBtn").innerText = text.search;
    document.getElementById("supportTitle").innerText = text.supportTitle;
    document.getElementById("supportLabel").innerText = text.supportLabel;
    document.getElementById("teleLabel").innerText = text.teleLabel;
    document.getElementById("copyBtn").innerText = text.copy;
    
    document.getElementById('resultContainer').innerHTML = "";
    document.getElementById('searchInput').value = "";
}

// ምድላይ ዝፍፅም ፋንክሽን
function searchWord() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    const lang = document.getElementById("langSelect").value;
    
    if (searchInput === "") {
        resultContainer.innerHTML = "";
        return;
    }

    resultContainer.innerHTML = ""; 
    let found = false;

    for (let letter in dictionaryData) {
        const wordsArray = dictionaryData[letter];
        
        const matchedWords = wordsArray.filter(item => 
            item.ቃል.toLowerCase().includes(searchInput) || 
            item.ትርጉም_en.toLowerCase().includes(searchInput)
        );

        if (matchedWords.length > 0) {
            found = true;
            matchedWords.forEach(item => {
                const card = document.createElement('div');
                card.className = 'word-card';
                card.innerHTML = `
                    <p class="word-title">${item.ቃል}</p>
                    <p class="word-definition" style="color: #2980b9; font-size: 18px; font-weight: 600; margin: 5px 0;">
                        <strong>English:</strong> ${item.ትርጉም_en}
                    </p>
                    <p class="word-definition" style="color: #555; margin: 5px 0;">
                        <strong>ትግርኛ መግለፂ:</strong> ${item.ትርጉም_ti}
                    </p>
                `;
                resultContainer.appendChild(card);
            });
        }
    }

    if (!found) {
        resultContainer.innerHTML = `<p class="no-result">${uiTranslations[lang].noResult}</p>`;
    }
}

// ናይ ቴሌብር ኮፒ ሜላ
function copyTelebirr() {
    const teleNum = document.getElementById("teleNum").innerText;
    const lang = document.getElementById("langSelect").value;
    
    const el = document.createElement('textarea');
    el.value = teleNum;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const feedback = document.getElementById("copyFeedback");
    feedback.innerText = uiTranslations[lang].copied;
    setTimeout(() => { feedback.innerText = ""; }, 3000);
}

// ----------------------------------------------------
// 🚀 ሓዱሽ ክፋል፡ ንኣፕሊኬሽን (Offline & Real App) ዝሰርሕ መስመር
// ----------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("Service Worker ብዓወት ተመዝጊቡ ኣሎ!"))
      .catch((err) => console.log("ਸਿਸਟਮ ጌጋ ኣጋጢሙ:", err));
  });
}

window.onload = changeLanguage;
