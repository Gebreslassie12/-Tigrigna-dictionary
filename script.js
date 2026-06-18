// መኽዘን ቃላት
const dictionaryData = {
  "ሀ": [
    {
      "ቃል": "ሃገር", 
      "ትርጉም_en": "State, country",
      "ትርጉም_ti": "ሰፊሕ መሬትን ህዝብን ዘለዎ ሉዓላዊ ግዝኣት።"
    },
    {
      "ቃል": "ሃነፀ", 
      "ትርጉም_en": "Build, construct",
      "ትርጉም_ti": "ገዛ ወይ ህንጻ ሰረተ።"
    }
  ],
  "ለ": [
    {
      "ቃል": "ለባም", 
      "ትርጉም_en": "Wise, intelligent",
      "ትርጉም_ti": "ኣስተውዓሊ፣ ምስትውዓል ዘለዎ ሰብ።"
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