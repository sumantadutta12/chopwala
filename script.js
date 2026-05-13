const revealEls = document.querySelectorAll(".reveal");

document.body.classList.add("is-loading");
window.addEventListener("load", () => {
  const loader = document.querySelector(".site-loader");
  setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 150);
});

const translations = {
  hi: {
    "Menu": "मेनू",
    "Why Us": "क्यों हम",
    "Store": "स्टोर",
    "Order": "ऑर्डर",
    "Order Now": "अभी ऑर्डर करें",
    "Premium Bengali Street Food": "प्रीमियम बंगाली स्ट्रीट फूड",
    "Bengal's Favorite Evening Snacks": "बंगाल का पसंदीदा शाम का नाश्ता",
    "Freshly made Chop, Cutlet & Telebhaja served hot with authentic Bengali taste.": "ताज़ा बने चॉप, कटलेट और टेलिभाजा असली बंगाली स्वाद के साथ गरम परोसे जाते हैं।",
    "Visit Store": "स्टोर देखें",
    "Rated": "रेटेड",
    "Signature Snacks": "सिग्नेचर स्नैक्स",
    "Fast Pickup": "फास्ट पिकअप",
    "4.9 Kolkata Love": "4.9 कोलकाता लव",
    "Served Hot": "गरम परोसा गया",
    "Featured Items": "फीचर्ड आइटम",
    "Fresh from the kadai and kettle": "कड़ाही और केतली से ताज़ा",
    "Hot Bengali chops, crispy pakora, and garam cha for everyday evening cravings.": "हर शाम की क्रेविंग के लिए गरम बंगाली चॉप, कुरकुरा पकोड़ा और गरम चाय।",
    "Best Seller": "बेस्ट सेलर",
    "Veg": "वेज",
    "Crispy": "क्रिस्पी",
    "Classic": "क्लासिक",
    "Seasonal": "सीजनल",
    "Special": "स्पेशल",
    "Crunchy": "क्रंची",
    "Hot Tea": "गरम चाय",
    "Aloo Chop": "आलू चॉप",
    "Vegetable Chop": "वेजिटेबल चॉप",
    "Bread Chop": "ब्रेड चॉप",
    "Onion Pakora": "प्याज पकोड़ा",
    "Mocha Chop": "मोचा चॉप",
    "Paneer Chop": "पनीर चॉप",
    "Beetroot Chop": "चुकंदर चॉप",
    "Why ChopWala": "चॉपवाला क्यों",
    "Street-food soul, startup polish": "स्ट्रीट-फूड का स्वाद, स्टार्टअप की पॉलिश",
    "Every snack is built around crisp texture, honest Bengali flavour, and a service experience that feels clean, quick, and premium.": "हर स्नैक कुरकुरी बनावट, असली बंगाली स्वाद और साफ, तेज़, प्रीमियम सेवा के लिए बनाया गया है।",
    "Fresh Ingredients": "ताज़ी सामग्री",
    "Daily-prepped fillings, herbs, crumb and kasundi pairings.": "रोज़ तैयार फिलिंग, हर्ब्स, क्रम्ब और कसुंदी पेयरिंग।",
    "Authentic Bengali Taste": "असली बंगाली स्वाद",
    "Classic Kolkata seasoning with a clean modern service ritual.": "क्लासिक कोलकाता मसाला, साफ और आधुनिक सेवा के साथ।",
    "Hygienic Cooking": "हाइजीनिक कुकिंग",
    "Visible prep, fresh oil discipline, and careful packaging.": "साफ तैयारी, ताज़े तेल का ध्यान, और अच्छी पैकिंग।",
    "Fast Service": "तेज़ सेवा",
    "Built for evening rush, pickup windows, and hot delivery.": "शाम की भीड़, पिकअप और गरम डिलीवरी के लिए तैयार।",
    "Evening Snacks Specialist": "ईवनिंग स्नैक्स स्पेशलिस्ट",
    "Focused menu tuned for adda, tea breaks, and rainy cravings.": "अड्डा, चाय ब्रेक और बारिश की क्रेविंग के लिए खास मेनू।",
    "Affordable Pricing": "किफायती कीमत",
    "Premium feel without losing everyday neighborhood value.": "प्रीमियम अनुभव, रोज़मर्रा की कीमत के साथ।",
    "Store Experience": "स्टोर अनुभव",
    "Rain, tea, kasundi, and one hot chop.": "बारिश, चाय, कसुंदी और एक गरम चॉप।",
    "Step into a polished Kolkata evening snack counter where the food stays familiar,": "एक प्रीमियम कोलकाता शाम के स्नैक काउंटर में आएं, जहां स्वाद अपना लगता है,",
    "the service feels sharp, and every order lands crisp.": "सेवा तेज़ लगती है, और हर ऑर्डर कुरकुरा मिलता है।",
    "Open 6 AM - 12 PM, 4 PM - 9 PM": "सुबह 6 बजे - दोपहर 12 बजे, शाम 4 बजे - रात 9 बजे तक खुला",
    "Ukhra Puratanhattala, West Bengal, India": "उखरा पुरातनहाटतला, पश्चिम बंगाल, भारत",
    "WhatsApp Order Rules": "WhatsApp ऑर्डर नियम",
    "Fresh snacks delivered nearby": "पास में ताज़े स्नैक्स की डिलीवरी",
    "Order on WhatsApp and get hot snacks delivered within 3KM. Minimum order value": "WhatsApp पर ऑर्डर करें और 3KM के अंदर गरम स्नैक्स पाएं। न्यूनतम ऑर्डर वैल्यू",
    "must be Rs 100 or above.": "Rs 100 या उससे अधिक होनी चाहिए।",
    "Up to 3KM": "3KM तक",
    "Delivery fee Rs 10": "डिलीवरी शुल्क Rs 10",
    "Rs 100+": "Rs 100+",
    "Minimum order value": "न्यूनतम ऑर्डर वैल्यू",
    "10 min": "10 मिनट",
    "Fast nearby delivery": "तेज़ नज़दीकी डिलीवरी",
    "Order on WhatsApp": "WhatsApp पर ऑर्डर करें",
    "Online Order": "ऑनलाइन ऑर्डर",
    "Order Fresh & Hot Snacks Now": "ताज़े और गरम स्नैक्स अभी ऑर्डर करें",
    "Choose Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop or Hot Tea and confirm on WhatsApp in seconds.": "Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop या Hot Tea चुनें और WhatsApp पर तुरंत कन्फर्म करें।",
    "WhatsApp Order": "WhatsApp ऑर्डर",
    "Explore Menu": "मेनू देखें",
    "Tonight's Combo": "आज का कॉम्बो",
    "Aloo Chop + Hot Tea": "आलू चॉप + गरम चाय",
    "Confirm Hot Delivery": "गरम डिलीवरी कन्फर्म करें",
    "Gallery": "गैलरी",
    "Golden-hour cravings": "गोल्डन-आवर क्रेविंग्स",
    "Signature Chop Platter": "सिग्नेचर चॉप प्लेटर",
    "Rainy Kolkata Counter": "रेनी कोलकाता काउंटर",
    "Tandoor Cha & Cold Drinks": "तंदूर चाय और कोल्ड ड्रिंक्स",
    "Cutlet & Telebhaja": "कटलेट और टेलिभाजा",
    "Evening Adda Mood": "ईवनिंग अड्डा मूड",
    "Motka Cha Moments": "मटका चाय मोमेंट्स",
    "Customer Love": "कस्टमर लव",
    "Evening regulars say it best": "हमारे नियमित ग्राहक सबसे अच्छा कहते हैं",
    "Every Evening Needs A Chop": "हर शाम को चाहिए एक चॉप"
  },
  bn: {
    "Menu": "মেনু",
    "Why Us": "কেন আমরা",
    "Store": "স্টোর",
    "Order": "অর্ডার",
    "Order Now": "এখন অর্ডার করুন",
    "Premium Bengali Street Food": "প্রিমিয়াম বাঙালি স্ট্রিট ফুড",
    "Bengal's Favorite Evening Snacks": "বাংলার প্রিয় সন্ধ্যার নাস্তা",
    "Freshly made Chop, Cutlet & Telebhaja served hot with authentic Bengali taste.": "তাজা তৈরি চপ, কাটলেট ও তেলেভাজা আসল বাঙালি স্বাদে গরম গরম পরিবেশন করা হয়।",
    "Visit Store": "স্টোর দেখুন",
    "Rated": "রেটেড",
    "Signature Snacks": "সিগনেচার স্ন্যাকস",
    "Fast Pickup": "ফাস্ট পিকআপ",
    "4.9 Kolkata Love": "4.9 কলকাতার ভালোবাসা",
    "Served Hot": "গরম পরিবেশন",
    "Featured Items": "ফিচার্ড আইটেম",
    "Fresh from the kadai and kettle": "কড়াই ও কেটলি থেকে একদম তাজা",
    "Hot Bengali chops, crispy pakora, and garam cha for everyday evening cravings.": "প্রতিদিনের সন্ধ্যার খিদেতে গরম বাঙালি চপ, মুচমুচে পাকোড়া আর গরম চা।",
    "Best Seller": "বেস্ট সেলার",
    "Veg": "ভেজ",
    "Crispy": "ক্রিস্পি",
    "Classic": "ক্লাসিক",
    "Seasonal": "সিজনাল",
    "Special": "স্পেশাল",
    "Crunchy": "ক্রাঞ্চি",
    "Hot Tea": "গরম চা",
    "Aloo Chop": "আলু চপ",
    "Vegetable Chop": "ভেজিটেবল চপ",
    "Bread Chop": "ব্রেড চপ",
    "Onion Pakora": "পেঁয়াজ পাকোড়া",
    "Mocha Chop": "মোচা চপ",
    "Paneer Chop": "পনির চপ",
    "Beetroot Chop": "বিটরুট চপ",
    "Why ChopWala": "কেন ChopWala",
    "Street-food soul, startup polish": "স্ট্রিট-ফুডের আত্মা, স্টার্টআপের পলিশ",
    "Every snack is built around crisp texture, honest Bengali flavour, and a service experience that feels clean, quick, and premium.": "প্রতিটি স্ন্যাকস তৈরি হয় মুচমুচে টেক্সচার, আসল বাঙালি স্বাদ এবং পরিষ্কার, দ্রুত, প্রিমিয়াম সার্ভিসের জন্য।",
    "Fresh Ingredients": "তাজা উপকরণ",
    "Daily-prepped fillings, herbs, crumb and kasundi pairings.": "প্রতিদিন তৈরি ফিলিং, হার্বস, ক্রাম্ব এবং কাসুন্দি পেয়ারিং।",
    "Authentic Bengali Taste": "আসল বাঙালি স্বাদ",
    "Classic Kolkata seasoning with a clean modern service ritual.": "ক্লাসিক কলকাতা সিজনিং, পরিষ্কার আধুনিক সার্ভিসের সঙ্গে।",
    "Hygienic Cooking": "হাইজেনিক রান্না",
    "Visible prep, fresh oil discipline, and careful packaging.": "পরিষ্কার প্রস্তুতি, তাজা তেলের যত্ন, এবং ভালো প্যাকেজিং।",
    "Fast Service": "দ্রুত সার্ভিস",
    "Built for evening rush, pickup windows, and hot delivery.": "সন্ধ্যার ভিড়, পিকআপ এবং গরম ডেলিভারির জন্য তৈরি।",
    "Evening Snacks Specialist": "ইভনিং স্ন্যাকস স্পেশালিস্ট",
    "Focused menu tuned for adda, tea breaks, and rainy cravings.": "আড্ডা, চা-ব্রেক এবং বৃষ্টির খিদে অনুযায়ী তৈরি মেনু।",
    "Affordable Pricing": "সাশ্রয়ী দাম",
    "Premium feel without losing everyday neighborhood value.": "প্রিমিয়াম ফিল, কিন্তু পাড়ার প্রতিদিনের দামের মধ্যে।",
    "Store Experience": "স্টোর এক্সপেরিয়েন্স",
    "Rain, tea, kasundi, and one hot chop.": "বৃষ্টি, চা, কাসুন্দি আর এক গরম চপ।",
    "Step into a polished Kolkata evening snack counter where the food stays familiar,": "একটি প্রিমিয়াম কলকাতা সন্ধ্যার স্ন্যাক কাউন্টারে আসুন, যেখানে খাবার চেনা স্বাদের,",
    "the service feels sharp, and every order lands crisp.": "সার্ভিস দ্রুত, আর প্রতিটি অর্ডার মুচমুচে।",
    "Open 6 AM - 12 PM, 4 PM - 9 PM": "সকাল ৬টা - দুপুর ১২টা, বিকেল ৪টা - রাত ৯টা খোলা",
    "Ukhra Puratanhattala, West Bengal, India": "উখরা পুরাতনহাটতলা, পশ্চিমবঙ্গ, ভারত",
    "WhatsApp Order Rules": "WhatsApp অর্ডার নিয়ম",
    "Fresh snacks delivered nearby": "কাছাকাছি তাজা স্ন্যাকস ডেলিভারি",
    "Order on WhatsApp and get hot snacks delivered within 3KM. Minimum order value": "WhatsApp-এ অর্ডার করুন এবং 3KM-এর মধ্যে গরম স্ন্যাকস পান। ন্যূনতম অর্ডার ভ্যালু",
    "must be Rs 100 or above.": "Rs 100 বা তার বেশি হতে হবে।",
    "Up to 3KM": "3KM পর্যন্ত",
    "Delivery fee Rs 10": "ডেলিভারি ফি Rs 10",
    "Rs 100+": "Rs 100+",
    "Minimum order value": "ন্যূনতম অর্ডার ভ্যালু",
    "10 min": "১০ মিনিট",
    "Fast nearby delivery": "দ্রুত কাছাকাছি ডেলিভারি",
    "Order on WhatsApp": "WhatsApp-এ অর্ডার করুন",
    "Online Order": "অনলাইন অর্ডার",
    "Order Fresh & Hot Snacks Now": "তাজা ও গরম স্ন্যাকস এখনই অর্ডার করুন",
    "Choose Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop or Hot Tea and confirm on WhatsApp in seconds.": "Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop বা Hot Tea বেছে WhatsApp-এ সেকেন্ডে কনফার্ম করুন।",
    "WhatsApp Order": "WhatsApp অর্ডার",
    "Explore Menu": "মেনু দেখুন",
    "Tonight's Combo": "আজকের কম্বো",
    "Aloo Chop + Hot Tea": "আলু চপ + গরম চা",
    "Confirm Hot Delivery": "গরম ডেলিভারি কনফার্ম করুন",
    "Gallery": "গ্যালারি",
    "Golden-hour cravings": "গোল্ডেন-আওয়ার ক্রেভিংস",
    "Signature Chop Platter": "সিগনেচার চপ প্ল্যাটার",
    "Rainy Kolkata Counter": "বৃষ্টির কলকাতা কাউন্টার",
    "Tandoor Cha & Cold Drinks": "তন্দুর চা ও কোল্ড ড্রিঙ্কস",
    "Cutlet & Telebhaja": "কাটলেট ও তেলেভাজা",
    "Evening Adda Mood": "সন্ধ্যার আড্ডা মুড",
    "Motka Cha Moments": "মটকা চা মোমেন্টস",
    "Customer Love": "কাস্টমার লাভ",
    "Evening regulars say it best": "নিয়মিত কাস্টমাররাই ভালো বলেন",
    "Every Evening Needs A Chop": "প্রতি সন্ধ্যায় চাই এক চপ"
  },
};

const fullTranslations = {
  hi: {
    "Menu": "मेनू",
    "Why Us": "क्यों हम",
    "Store": "स्टोर",
    "Order": "ऑर्डर",
    "Order Now": "अभी ऑर्डर करें",
    "Visit Store": "स्टोर देखें",
    "Premium Bengali Street Food": "प्रीमियम बंगाली स्ट्रीट फूड",
    "Bengal's Favorite Evening Snacks": "बंगाल का पसंदीदा शाम का नाश्ता",
    "Freshly made Chop, Cutlet & Telebhaja served hot with authentic Bengali taste.": "ताजा बने चॉप, कटलेट और तेलभाजा असली बंगाली स्वाद के साथ गरम परोसे जाते हैं।",
    "Rated": "रेटेड",
    "Signature Snacks": "सिग्नेचर स्नैक्स",
    "Fast Pickup": "फास्ट पिकअप",
    "Served Hot": "गरम परोसा जाता है",
    "Visit Our Store": "हमारे स्टोर आएं",
    "Featured Items": "फीचर्ड आइटम",
    "Fresh from the kadai and kettle": "कड़ाही और केतली से ताजा",
    "Hot Bengali chops, crispy pakora, and garam cha for everyday evening cravings.": "हर शाम की क्रेविंग के लिए गरम बंगाली चॉप, कुरकुरा पकोड़ा और गरम चाय।",
    "Best Seller": "बेस्ट सेलर",
    "Veg": "वेज",
    "Crispy": "क्रिस्पी",
    "Classic": "क्लासिक",
    "Seasonal": "सीजनल",
    "Special": "स्पेशल",
    "Crunchy": "क्रंची",
    "Hot Tea": "गरम चाय",
    "Aloo Chop": "आलू चॉप",
    "Vegetable Chop": "वेजिटेबल चॉप",
    "Bread Chop": "ब्रेड चॉप",
    "Onion Pakora": "प्याज पकोड़ा",
    "Mocha Chop": "मोचा चॉप",
    "Paneer Chop": "पनीर चॉप",
    "Beetroot Chop": "बीटरूट चॉप",
    "Why ChopWala": "ChopWala क्यों",
    "Street-food soul, startup polish": "स्ट्रीट-फूड का स्वाद, स्टार्टअप जैसी polish",
    "Every snack is built around crisp texture, honest Bengali flavour, and a service experience that feels clean, quick, and premium.": "हर स्नैक कुरकुरी बनावट, असली बंगाली स्वाद और साफ, तेज, प्रीमियम सर्विस के लिए बनाया गया है।",
    "Fresh Ingredients": "ताजा सामग्री",
    "Daily-prepped fillings, herbs, crumb and kasundi pairings.": "रोज तैयार फिलिंग, हर्ब्स, क्रम्ब और कसुंदी पेयरिंग।",
    "Authentic Bengali Taste": "असली बंगाली स्वाद",
    "Classic Kolkata seasoning with a clean modern service ritual.": "क्लासिक कोलकाता मसाला, साफ और आधुनिक सर्विस के साथ।",
    "Hygienic Cooking": "हाइजीनिक कुकिंग",
    "Visible prep, fresh oil discipline, and careful packaging.": "साफ तैयारी, ताजा तेल का ध्यान और सावधानी से पैकिंग।",
    "Fast Service": "तेज सेवा",
    "Built for evening rush, pickup windows, and hot delivery.": "शाम की भीड़, पिकअप और गरम डिलीवरी के लिए तैयार।",
    "Evening Snacks Specialist": "ईवनिंग स्नैक्स स्पेशलिस्ट",
    "Focused menu tuned for adda, tea breaks, and rainy cravings.": "अड्डा, चाय ब्रेक और बारिश की क्रेविंग के लिए खास मेनू।",
    "Affordable Pricing": "किफायती कीमत",
    "Premium feel without losing everyday neighborhood value.": "प्रीमियम अनुभव, रोजमर्रा की कीमत के साथ।",
    "Event Orders": "इवेंट ऑर्डर",
    "Snacks for every celebration": "हर उत्सव के लिए स्नैक्स",
    "We take bulk orders for Wedding Ceremony, rice ceremony, birthday, office snacks, puja gatherings, family functions and other special occasions.": "हम शादी, अन्नप्राशन, जन्मदिन, ऑफिस स्नैक्स, पूजा, पारिवारिक कार्यक्रम और दूसरे मौकों के लिए bulk orders लेते हैं।",
    "Enquire on WhatsApp": "WhatsApp पर पूछें",
    "Call Now": "अभी कॉल करें",
    "Wedding Ceremony": "शादी समारोह",
    "Fresh hot chop counters for wedding gatherings.": "शादी के लिए ताजा गरम चॉप काउंटर।",
    "Rice Ceremony": "अन्नप्राशन",
    "Family-friendly snack packs for annaprashan events.": "अन्नप्राशन के लिए परिवार-friendly स्नैक पैक।",
    "Puja & Functions": "पूजा और फंक्शन",
    "Bulk evening snacks for local celebrations.": "स्थानीय कार्यक्रमों के लिए bulk evening snacks।",
    "Office Orders": "ऑफिस ऑर्डर",
    "Tea-time boxes for teams and small meetings.": "टीम और छोटी मीटिंग के लिए tea-time boxes।",
    "4.9 Rating": "4.9 रेटिंग",
    "Best Chop in Town": "शहर का बेस्ट चॉप",
    "Authentic Taste": "असली स्वाद",
    "Store Experience": "स्टोर अनुभव",
    "Rain, tea, kasundi, and one hot chop.": "बारिश, चाय, कसुंदी और एक गरम चॉप।",
    "Step into a polished Kolkata evening snack counter where the food stays familiar, the service feels sharp, and every order lands crisp.": "एक polished Kolkata evening snack counter में आइए, जहां स्वाद अपना लगता है, सर्विस तेज है और हर ऑर्डर कुरकुरा मिलता है।",
    "Open 6 AM - 12 PM, 4 PM - 9 PM": "सुबह 6 बजे - दोपहर 12 बजे, शाम 4 बजे - रात 9 बजे",
    "Checking...": "चेक हो रहा है...",
    "Open Now": "अभी खुला है",
    "Closed Now": "अभी बंद है",
    "Ukhra Puratanhattala, West Bengal, India": "उखरा पुरातनहट्टाला, पश्चिम बंगाल, भारत",
    "View Map": "मैप देखें",
    "WhatsApp Order Rules": "WhatsApp ऑर्डर नियम",
    "Fresh snacks delivered nearby": "पास में ताजा स्नैक्स डिलीवरी",
    "Order on WhatsApp and get hot snacks delivered within 2KM. Minimum order value must be Rs 100 or above.": "WhatsApp पर ऑर्डर करें और 2KM के अंदर गरम स्नैक्स पाएं। न्यूनतम ऑर्डर Rs 100 या उससे अधिक होना चाहिए।",
    "Up to 2KM": "2KM तक",
    "Delivery fee Rs 10": "डिलीवरी शुल्क Rs 10",
    "Rs 100+": "Rs 100+",
    "Minimum order value": "न्यूनतम ऑर्डर वैल्यू",
    "10 min": "10 मिनट",
    "Fast nearby delivery": "तेज नजदीकी डिलीवरी",
    "Call Confirm": "कॉल कन्फर्म",
    "Dispatch only after call confirmation": "कॉल कन्फर्मेशन के बाद ही dispatch",
    "Order on WhatsApp": "WhatsApp पर ऑर्डर करें",
    "Call Now: +91 6295 703 896": "अभी कॉल करें: +91 6295 703 896",
    "Online Order": "ऑनलाइन ऑर्डर",
    "Order Fresh & Hot Snacks Now": "ताजा और गरम स्नैक्स अभी ऑर्डर करें",
    "Choose Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop or Hot Tea and confirm on WhatsApp in seconds.": "Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop या Hot Tea चुनें और WhatsApp पर तुरंत कन्फर्म करें।",
    "WhatsApp Order": "WhatsApp ऑर्डर",
    "Explore Menu": "मेनू देखें",
    "Build Your Order": "अपना ऑर्डर बनाएं",
    "Hot Tea can only be ordered in 30 cups.": "Hot Tea सिर्फ 30 कप में ऑर्डर की जा सकती है।",
    "Customer name": "ग्राहक का नाम",
    "Phone number": "फोन नंबर",
    "Your location": "आपका स्थान",
    "After sending the WhatsApp order, please share your live location directly from WhatsApp so we can deliver faster.": "WhatsApp ऑर्डर भेजने के बाद कृपया WhatsApp से अपनी live location शेयर करें ताकि delivery जल्दी हो सके।",
    "Minimum order Rs 100. Delivery fee Rs 10 up to 2KM. If customer does not receive call, order on hold.": "न्यूनतम ऑर्डर Rs 100। 2KM तक delivery fee Rs 10। अगर customer call receive नहीं करता है, order hold रहेगा।",
    "Send Order on WhatsApp": "WhatsApp पर ऑर्डर भेजें",
    "Gallery": "गैलरी",
    "Golden-hour cravings": "Golden-hour cravings",
    "Signature Chop Platter": "सिग्नेचर चॉप प्लेटर",
    "Rainy Kolkata Counter": "बारिश वाला Kolkata counter",
    "Tandoor Cha & Cold Drinks": "तंदूर चाय और cold drinks",
    "Cutlet & Telebhaja": "कटलेट और तेलभाजा",
    "Evening Adda Mood": "शाम का अड्डा mood",
    "Motka Cha Moments": "मटका चाय moments",
    "Customer Love": "Customer Love",
    "Evening regulars say it best": "नियमित ग्राहक सबसे अच्छा बताते हैं",
    "\"Crisp outside, proper Bengali filling inside. The kasundi is perfect.\"": "\"बाहर से crisp, अंदर proper Bengali filling. कसुंदी perfect है।\"",
    "Ritwik Sen": "Ritwik Sen",
    "Aloo Chop Regular": "Aloo Chop Regular",
    "\"Feels like old Kolkata adda with a premium cafe finish.\"": "\"Old Kolkata adda जैसा feel, premium cafe finish के साथ।\"",
    "Madhurima Dey": "Madhurima Dey",
    "Ukhra Local": "Ukhra Local",
    "\"Fast, hot, hygienic, and still tastes like real telebhaja.\"": "\"Fast, hot, hygienic और फिर भी real telebhaja जैसा taste।\"",
    "Anirban Ghosh": "Anirban Ghosh",
    "Evening Pickup": "Evening Pickup",
    "\"Tandoor cha with hot chop is now my regular evening order.\"": "\"Tandoor cha और hot chop अब मेरा regular evening order है।\"",
    "Sayantani Roy": "Sayantani Roy",
    "Tandoor Cha Fan": "Tandoor Cha Fan",
    "\"Hot tea, Vegetable Chop, and fast service. Proper premium street-food feel.\"": "\"Hot tea, Vegetable Chop और fast service. Proper premium street-food feel।\"",
    "Subhajit Pal": "Subhajit Pal",
    "Evening Combo": "Evening Combo",
    "\"Clean packaging and the snacks still arrive crispy.\"": "\"Clean packaging और snacks फिर भी crispy आते हैं।\"",
    "Priyanka Basu": "Priyanka Basu",
    "Delivery Order": "Delivery Order",
    "Every Evening Needs A Chop": "हर शाम को चाहिए एक चॉप",
    "Enter your name": "अपना नाम लिखें",
    "10-digit phone number": "10 अंकों का फोन नंबर",
    "Enter delivery location": "डिलीवरी location लिखें",
    "Select items to build your WhatsApp order.": "WhatsApp order बनाने के लिए items चुनें।",
    "Add customer name to continue.": "आगे बढ़ने के लिए customer name जोड़ें।",
    "Enter a valid 10-digit Indian phone number.": "Valid 10-digit Indian phone number लिखें।",
    "Add delivery location to continue.": "आगे बढ़ने के लिए delivery location जोड़ें।"
  },
  bn: {
    "Menu": "মেনু",
    "Why Us": "কেন আমরা",
    "Store": "স্টোর",
    "Order": "অর্ডার",
    "Order Now": "এখন অর্ডার করুন",
    "Visit Store": "স্টোর দেখুন",
    "Premium Bengali Street Food": "প্রিমিয়াম বাঙালি স্ট্রিট ফুড",
    "Bengal's Favorite Evening Snacks": "বাংলার প্রিয় সন্ধ্যার নাস্তা",
    "Freshly made Chop, Cutlet & Telebhaja served hot with authentic Bengali taste.": "তাজা চপ, কাটলেট ও তেলেভাজা আসল বাঙালি স্বাদে গরম গরম পরিবেশন করা হয়।",
    "Rated": "রেটেড",
    "Signature Snacks": "সিগনেচার স্ন্যাকস",
    "Fast Pickup": "ফাস্ট পিকআপ",
    "Served Hot": "গরম পরিবেশন",
    "Visit Our Store": "আমাদের স্টোরে আসুন",
    "Featured Items": "ফিচার্ড আইটেম",
    "Fresh from the kadai and kettle": "কড়াই আর কেটলি থেকে একদম তাজা",
    "Hot Bengali chops, crispy pakora, and garam cha for everyday evening cravings.": "প্রতিদিনের সন্ধ্যার খিদেতে গরম বাঙালি চপ, মুচমুচে পাকোড়া আর গরম চা।",
    "Best Seller": "বেস্ট সেলার",
    "Veg": "ভেজ",
    "Crispy": "ক্রিস্পি",
    "Classic": "ক্লাসিক",
    "Seasonal": "সিজনাল",
    "Special": "স্পেশাল",
    "Crunchy": "ক্রাঞ্চি",
    "Hot Tea": "গরম চা",
    "Aloo Chop": "আলু চপ",
    "Vegetable Chop": "ভেজিটেবল চপ",
    "Bread Chop": "ব্রেড চপ",
    "Onion Pakora": "পেঁয়াজ পাকোড়া",
    "Mocha Chop": "মোচা চপ",
    "Paneer Chop": "পনির চপ",
    "Beetroot Chop": "বিটরুট চপ",
    "Why ChopWala": "কেন ChopWala",
    "Street-food soul, startup polish": "স্ট্রিট-ফুডের স্বাদ, স্টার্টআপের polish",
    "Every snack is built around crisp texture, honest Bengali flavour, and a service experience that feels clean, quick, and premium.": "প্রতিটি স্ন্যাকস তৈরি হয় মুচমুচে texture, আসল বাঙালি স্বাদ এবং পরিষ্কার, দ্রুত, premium service-এর জন্য।",
    "Fresh Ingredients": "তাজা উপকরণ",
    "Daily-prepped fillings, herbs, crumb and kasundi pairings.": "প্রতিদিন তৈরি filling, herbs, crumb এবং kasundi pairing।",
    "Authentic Bengali Taste": "আসল বাঙালি স্বাদ",
    "Classic Kolkata seasoning with a clean modern service ritual.": "ক্লাসিক Kolkata seasoning, পরিষ্কার modern service-এর সঙ্গে।",
    "Hygienic Cooking": "হাইজেনিক রান্না",
    "Visible prep, fresh oil discipline, and careful packaging.": "পরিষ্কার preparation, তাজা তেলের যত্ন এবং ভালো packaging।",
    "Fast Service": "দ্রুত সার্ভিস",
    "Built for evening rush, pickup windows, and hot delivery.": "সন্ধ্যার ভিড়, pickup এবং hot delivery-এর জন্য তৈরি।",
    "Evening Snacks Specialist": "ইভনিং স্ন্যাকস স্পেশালিস্ট",
    "Focused menu tuned for adda, tea breaks, and rainy cravings.": "আড্ডা, চা-break এবং বৃষ্টির craving-এর জন্য focused menu।",
    "Affordable Pricing": "সাশ্রয়ী দাম",
    "Premium feel without losing everyday neighborhood value.": "Premium feel, কিন্তু পাড়ার everyday value বজায় রেখে।",
    "Event Orders": "ইভেন্ট অর্ডার",
    "Snacks for every celebration": "প্রতিটি celebration-এর জন্য snacks",
    "We take bulk orders for Wedding Ceremony, rice ceremony, birthday, office snacks, puja gatherings, family functions and other special occasions.": "আমরা wedding ceremony, rice ceremony, birthday, office snacks, puja gatherings, family functions এবং অন্যান্য special occasion-এর bulk order নিই।",
    "Enquire on WhatsApp": "WhatsApp-এ জিজ্ঞাসা করুন",
    "Call Now": "এখন কল করুন",
    "Wedding Ceremony": "বিয়ের অনুষ্ঠান",
    "Fresh hot chop counters for wedding gatherings.": "Wedding gathering-এর জন্য fresh hot chop counter।",
    "Rice Ceremony": "অন্নপ্রাশন",
    "Family-friendly snack packs for annaprashan events.": "অন্নপ্রাশনের জন্য family-friendly snack pack।",
    "Puja & Functions": "পূজা ও function",
    "Bulk evening snacks for local celebrations.": "Local celebration-এর জন্য bulk evening snacks।",
    "Office Orders": "অফিস অর্ডার",
    "Tea-time boxes for teams and small meetings.": "Team আর small meeting-এর জন্য tea-time box।",
    "4.9 Rating": "4.9 rating",
    "Best Chop in Town": "শহরের best chop",
    "Authentic Taste": "আসল স্বাদ",
    "Store Experience": "স্টোর experience",
    "Rain, tea, kasundi, and one hot chop.": "বৃষ্টি, চা, কাসুন্দি আর এক গরম চপ।",
    "Step into a polished Kolkata evening snack counter where the food stays familiar, the service feels sharp, and every order lands crisp.": "একটি polished Kolkata evening snack counter-এ আসুন, যেখানে খাবারের taste familiar, service sharp, আর প্রতিটি order crispy।",
    "Open 6 AM - 12 PM, 4 PM - 9 PM": "সকাল ৬টা - দুপুর ১২টা, বিকেল ৪টা - রাত ৯টা",
    "Checking...": "চেক করা হচ্ছে...",
    "Open Now": "এখন খোলা",
    "Closed Now": "এখন বন্ধ",
    "Ukhra Puratanhattala, West Bengal, India": "উখরা পুরাতনহাটতলা, পশ্চিমবঙ্গ, ভারত",
    "View Map": "ম্যাপ দেখুন",
    "WhatsApp Order Rules": "WhatsApp order rules",
    "Fresh snacks delivered nearby": "কাছাকাছি fresh snacks delivery",
    "Order on WhatsApp and get hot snacks delivered within 2KM. Minimum order value must be Rs 100 or above.": "WhatsApp-এ order করুন এবং 2KM-এর মধ্যে hot snacks delivery পান। Minimum order value Rs 100 বা তার বেশি হতে হবে।",
    "Up to 2KM": "2KM পর্যন্ত",
    "Delivery fee Rs 10": "Delivery fee Rs 10",
    "Rs 100+": "Rs 100+",
    "Minimum order value": "Minimum order value",
    "10 min": "10 মিনিট",
    "Fast nearby delivery": "দ্রুত nearby delivery",
    "Call Confirm": "Call confirm",
    "Dispatch only after call confirmation": "Call confirmation-এর পর dispatch",
    "Order on WhatsApp": "WhatsApp-এ order করুন",
    "Call Now: +91 6295 703 896": "এখন কল করুন: +91 6295 703 896",
    "Online Order": "Online order",
    "Order Fresh & Hot Snacks Now": "Fresh ও hot snacks এখনই order করুন",
    "Choose Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop or Hot Tea and confirm on WhatsApp in seconds.": "Aloo Chop, Vegetable Chop, Bread Chop, Onion Pakora, Mocha Chop, Paneer Chop বা Hot Tea বেছে WhatsApp-এ confirm করুন।",
    "WhatsApp Order": "WhatsApp order",
    "Explore Menu": "Menu দেখুন",
    "Build Your Order": "আপনার order তৈরি করুন",
    "Hot Tea can only be ordered in 30 cups.": "Hot Tea শুধু 30 cup-এ order করা যাবে।",
    "Customer name": "Customer name",
    "Phone number": "Phone number",
    "Your location": "আপনার location",
    "After sending the WhatsApp order, please share your live location directly from WhatsApp so we can deliver faster.": "WhatsApp order পাঠানোর পরে দ্রুত delivery-এর জন্য WhatsApp থেকে live location share করুন।",
    "Minimum order Rs 100. Delivery fee Rs 10 up to 2KM. If customer does not receive call, order on hold.": "Minimum order Rs 100। 2KM পর্যন্ত delivery fee Rs 10। Customer call receive না করলে order hold থাকবে।",
    "Send Order on WhatsApp": "WhatsApp-এ order পাঠান",
    "Gallery": "Gallery",
    "Golden-hour cravings": "Golden-hour cravings",
    "Signature Chop Platter": "Signature Chop Platter",
    "Rainy Kolkata Counter": "Rainy Kolkata Counter",
    "Tandoor Cha & Cold Drinks": "Tandoor Cha & Cold Drinks",
    "Cutlet & Telebhaja": "Cutlet & Telebhaja",
    "Evening Adda Mood": "Evening Adda Mood",
    "Motka Cha Moments": "Motka Cha Moments",
    "Customer Love": "Customer Love",
    "Evening regulars say it best": "Regular customer-রা best বলেন",
    "\"Crisp outside, proper Bengali filling inside. The kasundi is perfect.\"": "\"বাইরে crisp, ভিতরে proper Bengali filling। Kasundi perfect।\"",
    "Ritwik Sen": "Ritwik Sen",
    "Aloo Chop Regular": "Aloo Chop Regular",
    "\"Feels like old Kolkata adda with a premium cafe finish.\"": "\"Old Kolkata adda feel, premium cafe finish-এর সঙ্গে।\"",
    "Madhurima Dey": "Madhurima Dey",
    "Ukhra Local": "Ukhra Local",
    "\"Fast, hot, hygienic, and still tastes like real telebhaja.\"": "\"Fast, hot, hygienic, আর taste real telebhaja-এর মতো।\"",
    "Anirban Ghosh": "Anirban Ghosh",
    "Evening Pickup": "Evening Pickup",
    "\"Tandoor cha with hot chop is now my regular evening order.\"": "\"Tandoor cha আর hot chop এখন আমার regular evening order।\"",
    "Sayantani Roy": "Sayantani Roy",
    "Tandoor Cha Fan": "Tandoor Cha Fan",
    "\"Hot tea, Vegetable Chop, and fast service. Proper premium street-food feel.\"": "\"Hot tea, Vegetable Chop, আর fast service। Proper premium street-food feel।\"",
    "Subhajit Pal": "Subhajit Pal",
    "Evening Combo": "Evening Combo",
    "\"Clean packaging and the snacks still arrive crispy.\"": "\"Clean packaging, আর snacks crispy অবস্থায় আসে।\"",
    "Priyanka Basu": "Priyanka Basu",
    "Delivery Order": "Delivery Order",
    "Every Evening Needs A Chop": "প্রতি সন্ধ্যায় চাই এক চপ",
    "Enter your name": "আপনার নাম লিখুন",
    "10-digit phone number": "10-digit phone number",
    "Enter delivery location": "Delivery location লিখুন",
    "Select items to build your WhatsApp order.": "WhatsApp order তৈরি করতে items select করুন।",
    "Add customer name to continue.": "চালিয়ে যেতে customer name দিন।",
    "Enter a valid 10-digit Indian phone number.": "Valid 10-digit Indian phone number দিন।",
    "Add delivery location to continue.": "চালিয়ে যেতে delivery location দিন।"
  },
};

Object.assign(translations.hi, fullTranslations.hi);
Object.assign(translations.bn, fullTranslations.bn);

const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
let currentLanguage = localStorage.getItem("chopwala-language") || "en";
const translateText = (text) =>
  currentLanguage === "en" ? text : translations[currentLanguage]?.[text] || text;
const translatableNodes = [];
const translatableAttributes = [];

const collectTranslatableNodes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = normalizeText(node.nodeValue);
    if (text && (translations.hi[text] || translations.bn[text])) {
      translatableNodes.push({ node, text });
    }
  }

  document.querySelectorAll("[placeholder]").forEach((node) => {
    const text = normalizeText(node.getAttribute("placeholder") || "");
    if (text && (translations.hi[text] || translations.bn[text])) {
      translatableAttributes.push({ node, attr: "placeholder", text });
    }
  });
};

const applyLanguage = (lang) => {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  translatableNodes.forEach(({ node, text }) => {
    const translated = lang === "en" ? text : translations[lang][text] || text;
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
  translatableAttributes.forEach(({ node, attr, text }) => {
    const translated = lang === "en" ? text : translations[lang][text] || text;
    node.setAttribute(attr, translated);
  });
  document.title =
    lang === "hi"
      ? "ChopWala | बंगाल का पसंदीदा शाम का नाश्ता"
      : lang === "bn"
        ? "ChopWala | বাংলার প্রিয় সন্ধ্যার নাস্তা"
        : "ChopWala | Bengal's Favorite Evening Snacks";
  localStorage.setItem("chopwala-language", lang);
};

collectTranslatableNodes();

const languageSwitchers = document.querySelectorAll(".language-switcher");
if (languageSwitchers.length) {
  languageSwitchers.forEach((switcher) => {
    switcher.value = currentLanguage;
  });
  applyLanguage(currentLanguage);
  languageSwitchers.forEach((switcher) => {
    switcher.addEventListener("change", (event) => {
      languageSwitchers.forEach((otherSwitcher) => {
        otherSwitcher.value = event.target.value;
      });
      applyLanguage(event.target.value);
    });
  });
}

const updateOpeningStatus = () => {
  const status = document.querySelector(".opening-status");
  if (!status) return;

  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(timeParts.find((part) => part.type === "hour")?.value || 0);
  const minute = Number(timeParts.find((part) => part.type === "minute")?.value || 0);
  const minutesNow = hour * 60 + minute;
  const morningOpen = minutesNow >= 6 * 60 && minutesNow < 12 * 60;
  const eveningOpen = minutesNow >= 16 * 60 && minutesNow < 21 * 60;
  const isOpen = morningOpen || eveningOpen;

  status.classList.toggle("is-open", isOpen);
  const label = status.querySelector("strong");
  if (label) {
    label.textContent = translateText(isOpen ? "Open Now" : "Closed Now");
  }
};

updateOpeningStatus();
setInterval(updateOpeningStatus, 60000);

const orderBuilder = document.querySelector(".order-builder");
if (orderBuilder) {
  const totalEl = orderBuilder.querySelector(".builder-total");
  const noteEl = orderBuilder.querySelector(".builder-note");
  const nameInput = orderBuilder.querySelector(".builder-name");
  const phoneInput = orderBuilder.querySelector(".builder-phone");
  const locationInput = orderBuilder.querySelector(".builder-location-input");
  const whatsappLink = orderBuilder.querySelector(".builder-whatsapp");
  const items = Array.from(orderBuilder.querySelectorAll(".builder-item"));

  const syncQuantityButtons = () => {
    items.forEach((item) => {
      const qty = Number(item.querySelector("output").textContent);
      const max = Number(item.dataset.max || Infinity);
      const minusButton = item.querySelector('[data-action="minus"]');
      const plusButton = item.querySelector('[data-action="plus"]');

      if (minusButton) minusButton.disabled = qty <= 0;
      if (plusButton) plusButton.disabled = qty >= max;
    });
  };

  const updateOrderBuilder = () => {
    const selected = items
      .map((item) => {
        const qty = Number(item.querySelector("output").textContent);
        return {
          name: item.dataset.name,
          price: Number(item.dataset.price),
          qty,
        };
      })
      .filter((item) => item.qty > 0);

    const subtotal = selected.reduce((sum, item) => sum + item.price * item.qty, 0);
    const deliveryFee = subtotal >= 100 ? 10 : 0;
    const total = subtotal + deliveryFee;
    const customerName = nameInput.value.trim();
    const phone = phoneInput.value.replace(/\D/g, "");
    const location = locationInput.value.trim();
    const hasValidPhone = /^[6-9]\d{9}$/.test(phone);
    const hasCustomerDetails = customerName && hasValidPhone && location;
    const hotTea = selected.find((item) => item.name === "Hot Tea");
    const hasInvalidHotTeaQty = hotTea && hotTea.qty < 30;

    items.forEach((item) => {
      const qty = Number(item.querySelector("output").textContent);
      const isInvalidHotTea = item.dataset.name === "Hot Tea" && qty > 0 && qty < 30;
      item.classList.toggle("has-alert", isInvalidHotTea);
    });

    totalEl.textContent = `Rs ${total}`;
    syncQuantityButtons();
    phoneInput.classList.toggle("is-valid", hasValidPhone);
    phoneInput.classList.toggle("is-invalid", phone.length > 0 && !hasValidPhone);

    if (!selected.length) {
      noteEl.textContent = translateText("Select items to build your WhatsApp order.");
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
      return;
    }

    if (subtotal < 100) {
      noteEl.textContent =
        currentLanguage === "hi"
          ? `Delivery के लिए Rs ${100 - subtotal} और जोड़ें। Minimum order Rs 100 है।`
          : currentLanguage === "bn"
            ? `Delivery-এর জন্য আরও Rs ${100 - subtotal} যোগ করুন। Minimum order Rs 100।`
            : `Add Rs ${100 - subtotal} more for delivery. Minimum order is Rs 100.`;
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
    } else if (hasInvalidHotTeaQty) {
      noteEl.textContent =
        currentLanguage === "hi"
          ? "Hot Tea order के लिए exactly 30 cups चाहिए। Hot Tea quantity 30 करें या remove करें।"
          : currentLanguage === "bn"
            ? "Hot Tea order করতে exactly 30 cups লাগবে। Hot Tea quantity 30 করুন অথবা remove করুন।"
            : "Hot Tea order requires exactly 30 cups. Set Hot Tea quantity to 30 or remove it.";
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
    } else if (!customerName) {
      noteEl.textContent = translateText("Add customer name to continue.");
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
    } else if (!hasValidPhone) {
      noteEl.textContent = translateText("Enter a valid 10-digit Indian phone number.");
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
    } else if (!location) {
      noteEl.textContent = translateText("Add delivery location to continue.");
      noteEl.classList.remove("is-ok");
      whatsappLink.classList.add("is-disabled");
    } else {
      noteEl.textContent =
        currentLanguage === "hi"
          ? `Subtotal Rs ${subtotal} + delivery fee Rs 10। अगर customer call receive नहीं करता है, order hold रहेगा।`
          : currentLanguage === "bn"
            ? `Subtotal Rs ${subtotal} + delivery fee Rs 10। Customer call receive না করলে order hold থাকবে।`
            : `Subtotal Rs ${subtotal} + delivery fee Rs 10. If customer does not receive call, order on hold.`;
      noteEl.classList.add("is-ok");
      whatsappLink.classList.remove("is-disabled");
    }

    const orderText = selected.map((item) => `- ${item.qty} x ${item.name}`).join("\n");
    const message = `Hi ChopWala,\nI want to place an order.\n\nOrder Items:\n${orderText}\n\nCustomer Details:\nName: ${customerName}\nPhone: ${phone}\nLocation: ${location}\n\nBill Summary:\nSubtotal: Rs ${subtotal}\nDelivery Fee: Rs ${deliveryFee}\nTotal: Rs ${total}\n\nPayment Mode:\nCash on delivery. The delivery person can share the QR code at the time of delivery, and QR code payment can be accepted then.\n\nConfirmation:\nI will reply YES to confirm this order. Delivery order will be dispatched only after call confirmation. If the call is not received, please keep the order on hold.\n\nNote:\n${customerName} will share live location directly from WhatsApp so you can deliver faster.`;
    whatsappLink.href = `https://wa.me/916295703896?text=${encodeURIComponent(message)}`;
  };

  orderBuilder.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const item = button.closest(".builder-item");
    const output = item.querySelector("output");
    const current = Number(output.textContent);
    const max = Number(item.dataset.max || Infinity);
    const next =
      button.dataset.action === "plus"
        ? Math.min(max, current + 1)
        : Math.max(0, current - 1);
    output.textContent = next;
    updateOrderBuilder();
  });

  [nameInput, phoneInput, locationInput].forEach((input) => {
    input.addEventListener("input", updateOrderBuilder);
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
  });

  updateOrderBuilder();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealEls.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 6, 4) * 70}ms`;
  observer.observe(el);
});

document.querySelectorAll(".food-card").forEach((card) => {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.transform = `translateY(-9px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

if (window.jQuery && jQuery.fn.owlCarousel) {
  const heroCarousel = jQuery(".hero-carousel");
  const heroChip = document.querySelector(".chip-hot");

  const updateHeroChip = (event) => {
    if (!heroChip) return;
    const items = event.relatedTarget?.$stage?.children(".owl-item");
    const currentItem = items?.eq(event.item.index);
    const chipText = currentItem?.find(".hero-slide").data("chip");
    if (chipText) heroChip.textContent = translateText(chipText);
  };

  heroCarousel.on("initialized.owl.carousel translated.owl.carousel", updateHeroChip);
  heroCarousel.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3600,
    autoplayHoverPause: true,
    smartSpeed: 650,
  });

  jQuery(".gallery-carousel").owlCarousel({
    loop: true,
    margin: 18,
    nav: true,
    dots: true,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 4200,
    autoplayHoverPause: true,
    smartSpeed: 450,
    navText: ["‹", "›"],
    responsive: {
      0: { items: 1 },
      700: { items: 2 },
      1060: { items: 3 },
    },
  });

  jQuery(".testimonials").owlCarousel({
    loop: true,
    margin: 18,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4600,
    autoplayHoverPause: true,
    smartSpeed: 450,
    navText: ["‹", "›"],
    responsive: {
      0: { items: 1 },
      700: { items: 2 },
      1060: { items: 3 },
    },
  });
}
