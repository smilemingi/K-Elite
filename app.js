// data.js — Avodo K-Elite curriculum
// English speakers learning survival Korean: 8 courses, 50 stages total.
// Each stage has: title (Korean), titleEn (English), mode ("standard" | "pronunciation"), items[]
// item shape: { kr, ro, en, note? }  — kr=Korean, ro=romanization, en=English gloss

const COURSES = [
  {
    id: "basic-words",
    title: "초급 단어",
    titleEn: "Beginner Vocabulary",
    icon: "book",
    stages: [
      {
        title: "인사말 기초",
        titleEn: "Basic Greetings",
        mode: "standard",
        items: [
          { kr: "안녕하세요", ro: "annyeonghaseyo", en: "Hello (formal)" },
          { kr: "안녕히 가세요", ro: "annyeonghi gaseyo", en: "Goodbye (to someone leaving)" },
          { kr: "안녕히 계세요", ro: "annyeonghi gyeseyo", en: "Goodbye (to someone staying)" },
          { kr: "감사합니다", ro: "gamsahamnida", en: "Thank you" },
          { kr: "죄송합니다", ro: "joesonghamnida", en: "I'm sorry" },
          { kr: "네", ro: "ne", en: "Yes" },
          { kr: "아니요", ro: "aniyo", en: "No" },
          { kr: "괜찮아요", ro: "gwaenchanayo", en: "It's okay / I'm fine" }
        ]
      },
      {
        title: "나와 너",
        titleEn: "People & Pronouns",
        mode: "standard",
        items: [
          { kr: "저", ro: "jeo", en: "I, me (polite)" },
          { kr: "당신", ro: "dangsin", en: "you (formal — use with care)" },
          { kr: "이름", ro: "ireum", en: "name" },
          { kr: "친구", ro: "chingu", en: "friend" },
          { kr: "가족", ro: "gajok", en: "family" },
          { kr: "남자", ro: "namja", en: "man" },
          { kr: "여자", ro: "yeoja", en: "woman" },
          { kr: "아이", ro: "ai", en: "child" }
        ]
      },
      {
        title: "한자어 숫자",
        titleEn: "Sino-Korean Numbers 1–10",
        mode: "standard",
        items: [
          { kr: "일", ro: "il", en: "one (1)" },
          { kr: "이", ro: "i", en: "two (2)" },
          { kr: "삼", ro: "sam", en: "three (3)" },
          { kr: "사", ro: "sa", en: "four (4)" },
          { kr: "오", ro: "o", en: "five (5)" },
          { kr: "육", ro: "yuk", en: "six (6)" },
          { kr: "칠", ro: "chil", en: "seven (7)" },
          { kr: "팔", ro: "pal", en: "eight (8)" },
          { kr: "구", ro: "gu", en: "nine (9)" },
          { kr: "십", ro: "sip", en: "ten (10)" }
        ]
      },
      {
        title: "고유어 숫자",
        titleEn: "Native Korean Numbers 1–10",
        mode: "standard",
        items: [
          { kr: "하나", ro: "hana", en: "one (native)" },
          { kr: "둘", ro: "dul", en: "two (native)" },
          { kr: "셋", ro: "set", en: "three (native)" },
          { kr: "넷", ro: "net", en: "four (native)" },
          { kr: "다섯", ro: "daseot", en: "five (native)" },
          { kr: "여섯", ro: "yeoseot", en: "six (native)" },
          { kr: "일곱", ro: "ilgop", en: "seven (native)" },
          { kr: "여덟", ro: "yeodeol", en: "eight (native)" },
          { kr: "아홉", ro: "ahop", en: "nine (native)" },
          { kr: "열", ro: "yeol", en: "ten (native)" }
        ]
      },
      {
        title: "장소",
        titleEn: "Places",
        mode: "standard",
        items: [
          { kr: "집", ro: "jip", en: "house, home" },
          { kr: "학교", ro: "hakgyo", en: "school" },
          { kr: "회사", ro: "hoesa", en: "company, office" },
          { kr: "병원", ro: "byeongwon", en: "hospital" },
          { kr: "은행", ro: "eunhaeng", en: "bank" },
          { kr: "화장실", ro: "hwajangsil", en: "restroom" },
          { kr: "식당", ro: "sikdang", en: "restaurant" },
          { kr: "호텔", ro: "hotel", en: "hotel" }
        ]
      },
      {
        title: "사물",
        titleEn: "Everyday Objects",
        mode: "standard",
        items: [
          { kr: "휴대폰", ro: "hyudaepon", en: "cell phone" },
          { kr: "가방", ro: "gabang", en: "bag" },
          { kr: "지갑", ro: "jigap", en: "wallet" },
          { kr: "우산", ro: "usan", en: "umbrella" },
          { kr: "시계", ro: "sigye", en: "watch, clock" },
          { kr: "컴퓨터", ro: "keompyuteo", en: "computer" },
          { kr: "물", ro: "mul", en: "water" },
          { kr: "커피", ro: "keopi", en: "coffee" }
        ]
      },
      {
        title: "색깔과 크기",
        titleEn: "Colors & Sizes",
        mode: "standard",
        items: [
          { kr: "빨간색", ro: "ppalgansaek", en: "red" },
          { kr: "파란색", ro: "paransaek", en: "blue" },
          { kr: "크다", ro: "keuda", en: "to be big" },
          { kr: "작다", ro: "jakda", en: "to be small" },
          { kr: "많다", ro: "manta", en: "to be a lot, many" },
          { kr: "적다", ro: "jeokda", en: "to be few, little" },
          { kr: "예쁘다", ro: "yeppeuda", en: "to be pretty" },
          { kr: "좋다", ro: "jota", en: "to be good" }
        ]
      },
      {
        title: "시간 표현 단어",
        titleEn: "Time Words",
        mode: "standard",
        items: [
          { kr: "오늘", ro: "oneul", en: "today" },
          { kr: "내일", ro: "naeil", en: "tomorrow" },
          { kr: "어제", ro: "eoje", en: "yesterday" },
          { kr: "지금", ro: "jigeum", en: "now" },
          { kr: "아침", ro: "achim", en: "morning" },
          { kr: "점심", ro: "jeomsim", en: "lunch, noon" },
          { kr: "저녁", ro: "jeonyeok", en: "evening" },
          { kr: "밤", ro: "bam", en: "night" }
        ]
      }
    ]
  },
  {
    id: "basic-sentences",
    title: "기본 문장",
    titleEn: "Basic Sentences",
    icon: "chat",
    stages: [
      {
        title: "인사 표현",
        titleEn: "Greeting Expressions",
        mode: "standard",
        items: [
          { kr: "안녕하세요!", ro: "annyeonghaseyo!", en: "Hello!" },
          { kr: "만나서 반갑습니다", ro: "mannaseo bangapseumnida", en: "Nice to meet you" },
          { kr: "처음 뵙겠습니다", ro: "cheoeum boepgesseumnida", en: "Nice to meet you (very formal, first time)" },
          { kr: "잘 지내세요?", ro: "jal jinaeseyo?", en: "How have you been?" },
          { kr: "저는 마이크입니다", ro: "jeoneun maikeuimnida", en: "I am Mike" },
          { kr: "이름이 뭐예요?", ro: "ireumi mwoyeyo?", en: "What is your name?" },
          { kr: "어디에서 왔어요?", ro: "eodieseo wasseoyo?", en: "Where are you from?" },
          { kr: "안녕히 가세요", ro: "annyeonghi gaseyo", en: "Goodbye (safe travels)" }
        ]
      },
      {
        title: "자기소개",
        titleEn: "Self-Introduction",
        mode: "standard",
        items: [
          { kr: "저는 마이크입니다", ro: "jeoneun maikeuimnida", en: "I am Mike" },
          { kr: "저는 미국 사람이에요", ro: "jeoneun miguk saramieyo", en: "I am American" },
          { kr: "한국어를 공부해요", ro: "hangugeoreul gongbuhaeyo", en: "I study Korean" },
          { kr: "만나서 반가워요", ro: "mannaseo bangawoyo", en: "Nice to meet you (casual-polite)" },
          { kr: "나이가 어떻게 되세요?", ro: "naiga eotteoke doeseyo?", en: "How old are you? (polite)" },
          { kr: "직업이 뭐예요?", ro: "jigeobi mwoyeyo?", en: "What is your job?" },
          { kr: "저는 학생이에요", ro: "jeoneun haksaengieyo", en: "I am a student" },
          { kr: "여행 중이에요", ro: "yeohaeng jungieyo", en: "I am traveling" }
        ]
      },
      {
        title: "있다/없다",
        titleEn: "There Is / There Isn't",
        mode: "standard",
        items: [
          { kr: "이거 있어요?", ro: "igeo isseoyo?", en: "Do you have this?" },
          { kr: "화장실이 어디에 있어요?", ro: "hwajangsiri eodie isseoyo?", en: "Where is the restroom?" },
          { kr: "시간 있어요?", ro: "sigan isseoyo?", en: "Do you have a moment?" },
          { kr: "돈이 없어요", ro: "doni eopsseoyo", en: "I don't have money" },
          { kr: "문제 없어요", ro: "munje eopsseoyo", en: "No problem" },
          { kr: "여기 있어요", ro: "yeogi isseoyo", en: "Here it is" },
          { kr: "저기에 있어요", ro: "jeogie isseoyo", en: "It's over there" },
          { kr: "잠깐만요", ro: "jamkkanmanyo", en: "Just a moment" }
        ]
      },
      {
        title: "좋아요/싫어요",
        titleEn: "Likes & Dislikes",
        mode: "standard",
        items: [
          { kr: "이거 좋아요", ro: "igeo joayo", en: "I like this" },
          { kr: "매운 음식을 좋아해요", ro: "maeun eumsigeul joahaeyo", en: "I like spicy food" },
          { kr: "안 좋아해요", ro: "an joahaeyo", en: "I don't like it" },
          { kr: "마음에 들어요", ro: "maeume deureoyo", en: "I really like it" },
          { kr: "별로예요", ro: "byeolloyeyo", en: "It's just so-so" },
          { kr: "최고예요", ro: "choegoyeyo", en: "It's the best" },
          { kr: "저는 괜찮아요", ro: "jeoneun gwaenchanayo", en: "I'm fine with it" },
          { kr: "싫어요", ro: "silheoyo", en: "I don't want it / I dislike it" }
        ]
      },
      {
        title: "질문하기",
        titleEn: "Asking Questions",
        mode: "standard",
        items: [
          { kr: "이게 뭐예요?", ro: "ige mwoyeyo?", en: "What is this?" },
          { kr: "얼마예요?", ro: "eolmayeyo?", en: "How much is it?" },
          { kr: "여기가 어디예요?", ro: "yeogiga eodiyeyo?", en: "Where is this place?" },
          { kr: "언제예요?", ro: "eonjeyeyo?", en: "When is it?" },
          { kr: "왜요?", ro: "waeyo?", en: "Why?" },
          { kr: "어떻게 가요?", ro: "eotteoke gayo?", en: "How do I get there?" },
          { kr: "몇 시예요?", ro: "myeot siyeyo?", en: "What time is it?" },
          { kr: "누구예요?", ro: "nuguyeyo?", en: "Who is it?" }
        ]
      },
      {
        title: "부탁하기",
        titleEn: "Making Requests",
        mode: "standard",
        items: [
          { kr: "도와주세요", ro: "dowajuseyo", en: "Please help me" },
          { kr: "천천히 말해 주세요", ro: "cheoncheonhi malhae juseyo", en: "Please speak slowly" },
          { kr: "다시 말해 주세요", ro: "dasi malhae juseyo", en: "Please say it again" },
          { kr: "저기요!", ro: "jeogiyo!", en: "Excuse me! (to get attention)" },
          { kr: "이거 주세요", ro: "igeo juseyo", en: "This one, please" },
          { kr: "좀 깎아 주세요", ro: "jom kkakka juseyo", en: "Please give me a discount" },
          { kr: "사진 좀 찍어 주세요", ro: "sajin jom jjigeo juseyo", en: "Please take a photo for me" },
          { kr: "잠깐 기다려 주세요", ro: "jamkkan gidaryeo juseyo", en: "Please wait a moment" }
        ]
      },
      {
        title: "동의와 거절",
        titleEn: "Agreeing & Disagreeing",
        mode: "standard",
        items: [
          { kr: "네, 맞아요", ro: "ne, majayo", en: "Yes, that's right" },
          { kr: "아니요, 틀려요", ro: "aniyo, teullyeoyo", en: "No, that's wrong" },
          { kr: "좋아요", ro: "joayo", en: "Sounds good" },
          { kr: "알겠어요", ro: "algesseoyo", en: "Got it / I understand" },
          { kr: "모르겠어요", ro: "moreugesseoyo", en: "I don't know" },
          { kr: "괜찮아요", ro: "gwaenchanayo", en: "That's fine" },
          { kr: "안 돼요", ro: "an dwaeyo", en: "That won't work / not allowed" },
          { kr: "그럴게요", ro: "geureolgeyo", en: "Sure, I'll do that" }
        ]
      },
      {
        title: "감정 표현",
        titleEn: "Expressing Feelings",
        mode: "standard",
        items: [
          { kr: "기뻐요", ro: "gippeoyo", en: "I'm glad" },
          { kr: "슬퍼요", ro: "seulpeoyo", en: "I'm sad" },
          { kr: "피곤해요", ro: "pigonhaeyo", en: "I'm tired" },
          { kr: "배고파요", ro: "baegopayo", en: "I'm hungry" },
          { kr: "배불러요", ro: "baebulleoyo", en: "I'm full" },
          { kr: "무서워요", ro: "museowoyo", en: "I'm scared" },
          { kr: "화나요", ro: "hwanayo", en: "I'm angry" },
          { kr: "행복해요", ro: "haengbokhaeyo", en: "I'm happy" }
        ]
      }
    ]
  },
  {
    id: "pronunciation",
    title: "발음 연습",
    titleEn: "Pronunciation Practice",
    icon: "wave",
    stages: [
      {
        title: "기본 자음",
        titleEn: "Basic Consonants",
        mode: "pronunciation",
        items: [
          { kr: "ㄱ", ro: "g / k", en: "Like 'g' in \"go\"", note: "가방 (gabang) — bag" },
          { kr: "ㄴ", ro: "n", en: "Like 'n' in \"no\"", note: "나비 (nabi) — butterfly" },
          { kr: "ㄷ", ro: "d / t", en: "Like 'd' in \"dog\"", note: "다리 (dari) — leg, bridge" },
          { kr: "ㄹ", ro: "r / l", en: "Between 'r' and 'l'", note: "라면 (ramyeon) — ramyeon noodles" },
          { kr: "ㅁ", ro: "m", en: "Like 'm' in \"mom\"", note: "마음 (maeum) — heart, mind" },
          { kr: "ㅂ", ro: "b / p", en: "Like 'b' in \"boy\"", note: "바다 (bada) — sea" },
          { kr: "ㅅ", ro: "s", en: "Like 's' in \"sun\"", note: "사람 (saram) — person" },
          { kr: "ㅇ", ro: "(silent) / ng", en: "Silent at the start, 'ng' at the end", note: "아기 (agi) — baby" }
        ]
      },
      {
        title: "기본 모음",
        titleEn: "Basic Vowels",
        mode: "pronunciation",
        items: [
          { kr: "ㅏ", ro: "a", en: "Like 'a' in \"father\"", note: "아빠 (appa) — dad" },
          { kr: "ㅑ", ro: "ya", en: "Like 'ya' in \"yard\"", note: "야구 (yagu) — baseball" },
          { kr: "ㅓ", ro: "eo", en: "Like 'u' in \"up\"", note: "어머니 (eomeoni) — mother" },
          { kr: "ㅕ", ro: "yeo", en: "Like 'yu' in \"young\"", note: "여자 (yeoja) — woman" },
          { kr: "ㅗ", ro: "o", en: "Like 'o' in \"go\"", note: "오늘 (oneul) — today" },
          { kr: "ㅛ", ro: "yo", en: "Like 'yo' in \"yoga\"", note: "교실 (gyosil) — classroom" },
          { kr: "ㅜ", ro: "u", en: "Like 'oo' in \"food\"", note: "우유 (uyu) — milk" },
          { kr: "ㅠ", ro: "yu", en: "Like 'yu' in \"you\"", note: "유치원 (yuchiwon) — kindergarten" },
          { kr: "ㅡ", ro: "eu", en: "Like 'oo' in \"book\", unrounded", note: "그림 (geurim) — picture" },
          { kr: "ㅣ", ro: "i", en: "Like 'ee' in \"see\"", note: "이름 (ireum) — name" }
        ]
      },
      {
        title: "받침 소리",
        titleEn: "Final Consonant Sounds (Batchim)",
        mode: "pronunciation",
        items: [
          { kr: "책", ro: "chaek", en: "Final ㄱ = a clipped 'k'", note: "means \"book\"" },
          { kr: "눈", ro: "nun", en: "Final ㄴ = 'n'", note: "means \"eye\" or \"snow\"" },
          { kr: "곧", ro: "got", en: "Final ㄷ,ㅅ,ㅈ,ㅊ,ㅌ,ㅎ all clip to 't'", note: "means \"soon\"" },
          { kr: "물", ro: "mul", en: "Final ㄹ = a light 'l'", note: "means \"water\"" },
          { kr: "밤", ro: "bam", en: "Final ㅁ = 'm'", note: "means \"night\" or \"chestnut\"" },
          { kr: "밥", ro: "bap", en: "Final ㅂ,ㅍ both clip to 'p'", note: "means \"rice, meal\"" },
          { kr: "방", ro: "bang", en: "Final ㅇ = 'ng'", note: "means \"room\"" }
        ]
      },
      {
        title: "된소리",
        titleEn: "Tense Consonants",
        mode: "pronunciation",
        items: [
          { kr: "ㄲ", ro: "kk", en: "A tighter, sharper 'k' than ㄱ", note: "꽃 (kkot) — flower" },
          { kr: "ㄸ", ro: "tt", en: "A tighter, sharper 't' than ㄷ", note: "딸기 (ttalgi) — strawberry" },
          { kr: "ㅃ", ro: "pp", en: "A tighter, sharper 'p' than ㅂ", note: "빵 (ppang) — bread" },
          { kr: "ㅆ", ro: "ss", en: "A sharper 's' than ㅅ", note: "쌀 (ssal) — uncooked rice" },
          { kr: "ㅉ", ro: "jj", en: "A tighter, sharper 'j' than ㅈ", note: "짜다 (jjada) — to be salty" }
        ]
      },
      {
        title: "연음 법칙",
        titleEn: "The Liaison Rule",
        mode: "pronunciation",
        items: [
          { kr: "한국어 → [한구거]", ro: "han-gu-geo", en: "Batchim ㄱ slides onto the next syllable's ㅇ", note: "means \"Korean language\"" },
          { kr: "선생님이 → [선생니미]", ro: "seon-saeng-ni-mi", en: "Batchim ㅁ slides onto the next syllable", note: "means \"the teacher (subject)\"" },
          { kr: "옷이 → [오시]", ro: "o-si", en: "Batchim ㅅ slides onto the next syllable", note: "means \"clothes (subject)\"" },
          { kr: "밥을 → [바블]", ro: "ba-beul", en: "Batchim ㅂ slides onto the next syllable", note: "means \"rice (object)\"" },
          { kr: "꽃이 → [꼬치]", ro: "kko-chi", en: "Batchim ㅊ slides onto the next syllable", note: "means \"flower (subject)\"" }
        ]
      },
      {
        title: "억양과 리듬",
        titleEn: "Intonation & Rhythm",
        mode: "pronunciation",
        items: [
          { kr: "밥 먹었어요.", ro: "bap meogeosseoyo.", en: "Statement — pitch falls at the end", note: "\"I ate.\"" },
          { kr: "밥 먹었어요?", ro: "bap meogeosseoyo?", en: "Question — pitch rises at the end", note: "\"Did you eat?\"" },
          { kr: "진짜요?", ro: "jinjjayo?", en: "A sharp rise shows surprise", note: "\"Really?\"" },
          { kr: "아... 그렇구나", ro: "a... geureokuna", en: "A falling, drawn-out tone shows realization", note: "\"Oh... I see\"" },
          { kr: "네!", ro: "ne!", en: "Short and crisp shows enthusiasm", note: "\"Yes!\"" },
          { kr: "네...", ro: "ne...", en: "Drawn out and falling shows hesitation", note: "\"Yeah... (unsure)\"" }
        ]
      }
    ]
  },
  {
    id: "numbers-time",
    title: "숫자와 시간",
    titleEn: "Numbers & Time",
    icon: "clock",
    stages: [
      {
        title: "큰 숫자",
        titleEn: "Larger Numbers",
        mode: "standard",
        items: [
          { kr: "백", ro: "baek", en: "hundred (100)" },
          { kr: "천", ro: "cheon", en: "thousand (1,000)" },
          { kr: "만", ro: "man", en: "ten-thousand (10,000)" },
          { kr: "이천이십육 년", ro: "icheon-isip-yuk nyeon", en: "the year 2026" },
          { kr: "오천 원", ro: "ocheon won", en: "5,000 won" },
          { kr: "삼만 원", ro: "samman won", en: "30,000 won" },
          { kr: "십만", ro: "simman", en: "hundred-thousand (100,000)" },
          { kr: "백만", ro: "baengman", en: "million (1,000,000)" }
        ]
      },
      {
        title: "시간 말하기",
        titleEn: "Telling Time",
        mode: "standard",
        items: [
          { kr: "시", ro: "si", en: "o'clock (uses native numbers)" },
          { kr: "분", ro: "bun", en: "minute (uses Sino-Korean numbers)" },
          { kr: "한 시", ro: "han si", en: "1 o'clock" },
          { kr: "두 시 반", ro: "du si ban", en: "2:30 (half past two)" },
          { kr: "세 시 십오 분", ro: "se si sibo bun", en: "3:15" },
          { kr: "몇 시예요?", ro: "myeot siyeyo?", en: "What time is it?" },
          { kr: "오전", ro: "ojeon", en: "AM" },
          { kr: "오후", ro: "ohu", en: "PM" }
        ]
      },
      {
        title: "요일",
        titleEn: "Days of the Week",
        mode: "standard",
        items: [
          { kr: "월요일", ro: "woryoil", en: "Monday" },
          { kr: "화요일", ro: "hwayoil", en: "Tuesday" },
          { kr: "수요일", ro: "suyoil", en: "Wednesday" },
          { kr: "목요일", ro: "mogyoil", en: "Thursday" },
          { kr: "금요일", ro: "geumyoil", en: "Friday" },
          { kr: "토요일", ro: "toyoil", en: "Saturday" },
          { kr: "일요일", ro: "iryoil", en: "Sunday" }
        ]
      },
      {
        title: "날짜",
        titleEn: "Dates",
        mode: "standard",
        items: [
          { kr: "월", ro: "wol", en: "month" },
          { kr: "일", ro: "il", en: "day (of the month)" },
          { kr: "오늘은 며칠이에요?", ro: "oneureun myeochirieyo?", en: "What is today's date?" },
          { kr: "칠월 이일", ro: "chirwol iil", en: "July 2nd" },
          { kr: "생일", ro: "saengil", en: "birthday" },
          { kr: "어제", ro: "eoje", en: "yesterday" },
          { kr: "다음 주", ro: "daeum ju", en: "next week" },
          { kr: "지난달", ro: "jinandal", en: "last month" }
        ]
      },
      {
        title: "가격 묻고 답하기",
        titleEn: "Asking & Telling Prices",
        mode: "standard",
        items: [
          { kr: "얼마예요?", ro: "eolmayeyo?", en: "How much is it?" },
          { kr: "전부 얼마예요?", ro: "jeonbu eolmayeyo?", en: "How much is it all together?" },
          { kr: "이만 원이에요", ro: "iman wonieyo", en: "It's 20,000 won" },
          { kr: "조금 비싸요", ro: "jogeum bissayo", en: "It's a bit expensive" },
          { kr: "싸요", ro: "ssayo", en: "It's cheap" },
          { kr: "할인 있어요?", ro: "halin isseoyo?", en: "Is there a discount?" },
          { kr: "현금만 돼요", ro: "hyeongeumman dwaeyo", en: "Cash only" },
          { kr: "카드 돼요?", ro: "kadeu dwaeyo?", en: "Do you take cards?" }
        ]
      },
      {
        title: "전화번호",
        titleEn: "Phone Numbers",
        mode: "standard",
        items: [
          { kr: "전화번호", ro: "jeonhwabeonho", en: "phone number" },
          { kr: "전화번호가 뭐예요?", ro: "jeonhwabeonhoga mwoyeyo?", en: "What's your phone number?" },
          { kr: "공일공", ro: "gong-il-gong", en: "010 (mobile prefix, read digit by digit)" },
          { kr: "번호를 눌러 주세요", ro: "beonhoreul nulleo juseyo", en: "Please dial the number" },
          { kr: "문자 주세요", ro: "munja juseyo", en: "Please text me" },
          { kr: "전화 주세요", ro: "jeonhwa juseyo", en: "Please call me" },
          { kr: "통화 중이에요", ro: "tonghwa jungieyo", en: "The line is busy" }
        ]
      }
    ]
  },
  {
    id: "food-cafe",
    title: "음식과 카페",
    titleEn: "Food & Café",
    icon: "cup",
    stages: [
      {
        title: "식당 기본 표현",
        titleEn: "Restaurant Basics",
        mode: "standard",
        items: [
          { kr: "메뉴판 주세요", ro: "menyupan juseyo", en: "Menu, please" },
          { kr: "주문할게요", ro: "jumunhalgeyo", en: "I'd like to order" },
          { kr: "이거 주세요", ro: "igeo juseyo", en: "I'll have this" },
          { kr: "추천 메뉴가 뭐예요?", ro: "chucheon menyuga mwoyeyo?", en: "What do you recommend?" },
          { kr: "몇 분이세요?", ro: "myeot bunieseyo?", en: "How many people?" },
          { kr: "두 명이에요", ro: "du myeongieyo", en: "Two people" },
          { kr: "맛있게 드세요", ro: "masitge deuseyo", en: "Enjoy your meal" },
          { kr: "잘 먹었습니다", ro: "jal meogeotsseumnida", en: "That was delicious (said after eating)" }
        ]
      },
      {
        title: "음식 이름",
        titleEn: "Food Names",
        mode: "standard",
        items: [
          { kr: "김치", ro: "gimchi", en: "kimchi" },
          { kr: "비빔밥", ro: "bibimbap", en: "bibimbap (mixed rice)" },
          { kr: "불고기", ro: "bulgogi", en: "bulgogi (marinated grilled beef)" },
          { kr: "김밥", ro: "gimbap", en: "gimbap (seaweed rice roll)" },
          { kr: "삼겹살", ro: "samgyeopsal", en: "grilled pork belly" },
          { kr: "라면", ro: "ramyeon", en: "ramyeon (instant noodles)" },
          { kr: "떡볶이", ro: "tteokbokki", en: "spicy stir-fried rice cakes" },
          { kr: "냉면", ro: "naengmyeon", en: "cold noodles" }
        ]
      },
      {
        title: "카페 주문",
        titleEn: "Café Ordering",
        mode: "standard",
        items: [
          { kr: "아메리카노", ro: "amerikano", en: "Americano" },
          { kr: "라떼", ro: "latte", en: "latte" },
          { kr: "아이스로 주세요", ro: "aiseuro juseyo", en: "Iced, please" },
          { kr: "따뜻한 걸로 주세요", ro: "ttatteutan geollo juseyo", en: "A warm one, please" },
          { kr: "사이즈는 뭐로 하시겠어요?", ro: "saijeuneun mworo hasigesseoyo?", en: "What size would you like?" },
          { kr: "톨 사이즈로 주세요", ro: "tol saijeuro juseyo", en: "Tall size, please" },
          { kr: "여기서 드세요, 가져가세요?", ro: "yeogiseo deuseyo, gajyeogaseyo?", en: "For here or to go?" },
          { kr: "테이크아웃 할게요", ro: "teikeuaut halgeyo", en: "I'll take it to go" }
        ]
      },
      {
        title: "맛 표현",
        titleEn: "Taste Descriptions",
        mode: "standard",
        items: [
          { kr: "맵다", ro: "maepda", en: "to be spicy" },
          { kr: "달다", ro: "dalda", en: "to be sweet" },
          { kr: "짜다", ro: "jjada", en: "to be salty" },
          { kr: "시다", ro: "sida", en: "to be sour" },
          { kr: "쓰다", ro: "sseuda", en: "to be bitter" },
          { kr: "싱겁다", ro: "singeopda", en: "to be bland" },
          { kr: "맛있다", ro: "masitda", en: "to be delicious" },
          { kr: "맛없다", ro: "maseopda", en: "to taste bad" }
        ]
      },
      {
        title: "식당 상황",
        titleEn: "Restaurant Situations",
        mode: "standard",
        items: [
          { kr: "저기요!", ro: "jeogiyo!", en: "Excuse me! (calling staff)" },
          { kr: "반찬 더 주세요", ro: "banchan deo juseyo", en: "More side dishes, please" },
          { kr: "물 좀 주세요", ro: "mul jom juseyo", en: "Water, please" },
          { kr: "여기 하나 빠졌어요", ro: "yeogi hana ppajyeosseoyo", en: "One item is missing here" },
          { kr: "이건 안 시켰어요", ro: "igeon an sikyeosseoyo", en: "I didn't order this" },
          { kr: "포장해 주세요", ro: "pojanghae juseyo", en: "Please pack this to go" },
          { kr: "계산해 주세요", ro: "gyesanhae juseyo", en: "Check, please" },
          { kr: "나눠서 계산할게요", ro: "nanwoseo gyesanhalgeyo", en: "We'll split the bill" }
        ]
      },
      {
        title: "배달 음식",
        titleEn: "Delivery Food",
        mode: "standard",
        items: [
          { kr: "배달", ro: "baedal", en: "delivery" },
          { kr: "배달돼요?", ro: "baedaldwaeyo?", en: "Do you deliver?" },
          { kr: "최소 주문 금액이 있어요?", ro: "choeso jumun geumaegi isseoyo?", en: "Is there a minimum order?" },
          { kr: "배달비", ro: "baedalbi", en: "delivery fee" },
          { kr: "얼마나 걸려요?", ro: "eolmana geollyeoyo?", en: "How long will it take?" },
          { kr: "문 앞에 놓아 주세요", ro: "mun ape noa juseyo", en: "Please leave it at the door" },
          { kr: "포장", ro: "pojang", en: "packaging / to-go" }
        ]
      }
    ]
  },
  {
    id: "shopping",
    title: "쇼핑과 화폐",
    titleEn: "Shopping & Money",
    icon: "bag",
    stages: [
      {
        title: "쇼핑 기본 표현",
        titleEn: "Shopping Basics",
        mode: "standard",
        items: [
          { kr: "이거 얼마예요?", ro: "igeo eolmayeyo?", en: "How much is this?" },
          { kr: "그냥 구경하는 거예요", ro: "geunyang gugyeonghaneun geoyeyo", en: "I'm just looking" },
          { kr: "다른 색 있어요?", ro: "dareun saek isseoyo?", en: "Do you have another color?" },
          { kr: "입어 봐도 돼요?", ro: "ibeo bwado dwaeyo?", en: "Can I try it on?" },
          { kr: "이거 주세요", ro: "igeo juseyo", en: "I'll take this" },
          { kr: "봉투 필요해요", ro: "bongtu piryohaeyo", en: "I need a bag" },
          { kr: "영수증 주세요", ro: "yeongsujeung juseyo", en: "Receipt, please" }
        ]
      },
      {
        title: "옷과 사이즈",
        titleEn: "Clothes & Sizes",
        mode: "standard",
        items: [
          { kr: "옷", ro: "ot", en: "clothes" },
          { kr: "사이즈가 어떻게 되세요?", ro: "saijeuga eotteoke doeseyo?", en: "What size are you?" },
          { kr: "좀 더 큰 사이즈 있어요?", ro: "jom deo keun saijeu isseoyo?", en: "Do you have a bigger size?" },
          { kr: "작은 사이즈", ro: "jageun saijeu", en: "small size" },
          { kr: "딱 맞아요", ro: "ttak majayo", en: "It fits perfectly" },
          { kr: "너무 커요", ro: "neomu keoyo", en: "It's too big" },
          { kr: "너무 작아요", ro: "neomu jagayo", en: "It's too small" },
          { kr: "탈의실이 어디예요?", ro: "taruisiri eodiyeyo?", en: "Where is the fitting room?" }
        ]
      },
      {
        title: "흥정과 할인",
        titleEn: "Bargaining & Discounts",
        mode: "standard",
        items: [
          { kr: "좀 깎아 주세요", ro: "jom kkakka juseyo", en: "Please give me a discount" },
          { kr: "세일 중이에요", ro: "seil jungieyo", en: "It's on sale" },
          { kr: "정가예요", ro: "jeonggayeyo", en: "It's a fixed price" },
          { kr: "하나 더 주시면 안 돼요?", ro: "hana deo jusimyeon an dwaeyo?", en: "Could you throw in one more?" },
          { kr: "너무 비싸요", ro: "neomu bissayo", en: "It's too expensive" },
          { kr: "조금만 깎아 주세요", ro: "jogeumman kkakka juseyo", en: "Just a little discount, please" }
        ]
      },
      {
        title: "결제 방법",
        titleEn: "Payment Methods",
        mode: "standard",
        items: [
          { kr: "현금", ro: "hyeongeum", en: "cash" },
          { kr: "카드", ro: "kadeu", en: "card" },
          { kr: "카드로 계산할게요", ro: "kadeuro gyesanhalgeyo", en: "I'll pay by card" },
          { kr: "현금으로 할게요", ro: "hyeongeumeuro halgeyo", en: "I'll pay in cash" },
          { kr: "일시불로 해 주세요", ro: "ilsibullo hae juseyo", en: "One-time payment, please" },
          { kr: "영수증 필요 없어요", ro: "yeongsujeung piryo eopsseoyo", en: "I don't need a receipt" },
          { kr: "잔돈 여기 있어요", ro: "jandon yeogi isseoyo", en: "Here's your change" }
        ]
      },
      {
        title: "환불과 교환",
        titleEn: "Refund & Exchange",
        mode: "standard",
        items: [
          { kr: "교환하고 싶어요", ro: "gyohwanhago sipeoyo", en: "I'd like to exchange this" },
          { kr: "환불하고 싶어요", ro: "hwanbulhago sipeoyo", en: "I'd like a refund" },
          { kr: "영수증 가지고 있어요", ro: "yeongsujeung gajigo isseoyo", en: "I have the receipt" },
          { kr: "사이즈가 안 맞아요", ro: "saijeuga an majayo", en: "The size doesn't fit" },
          { kr: "이거 고장났어요", ro: "igeo gojangnasseoyo", en: "This is broken" },
          { kr: "새 걸로 바꿔 주세요", ro: "sae geollo bakkwo juseyo", en: "Please exchange it for a new one" }
        ]
      }
    ]
  },
  {
    id: "transport",
    title: "교통과 길찾기",
    titleEn: "Transportation & Directions",
    icon: "bus",
    stages: [
      {
        title: "대중교통",
        titleEn: "Public Transportation",
        mode: "standard",
        items: [
          { kr: "지하철", ro: "jihacheol", en: "subway" },
          { kr: "버스", ro: "beoseu", en: "bus" },
          { kr: "지하철역", ro: "jihacheollyeok", en: "subway station" },
          { kr: "버스 정류장", ro: "beoseu jeongnyujang", en: "bus stop" },
          { kr: "교통카드", ro: "gyotongkadeu", en: "transit card" },
          { kr: "환승", ro: "hwanseung", en: "transfer" },
          { kr: "다음 역은 어디예요?", ro: "daeum yeogeun eodiyeyo?", en: "What is the next station?" },
          { kr: "여기서 내려요", ro: "yeogiseo naeryeoyo", en: "I'll get off here" }
        ]
      },
      {
        title: "택시 타기",
        titleEn: "Taking a Taxi",
        mode: "standard",
        items: [
          { kr: "택시", ro: "taeksi", en: "taxi" },
          { kr: "여기로 가 주세요", ro: "yeogiro ga juseyo", en: "Please take me here" },
          { kr: "얼마나 걸려요?", ro: "eolmana geollyeoyo?", en: "How long will it take?" },
          { kr: "여기서 세워 주세요", ro: "yeogiseo sewo juseyo", en: "Please stop here" },
          { kr: "트렁크 좀 열어 주세요", ro: "teureongkeu jom yeoreo juseyo", en: "Please open the trunk" },
          { kr: "미터기", ro: "miteogi", en: "(taxi) meter" },
          { kr: "카드 결제 돼요?", ro: "kadeu gyeolje dwaeyo?", en: "Can I pay by card?" }
        ]
      },
      {
        title: "길 묻기",
        titleEn: "Asking Directions",
        mode: "standard",
        items: [
          { kr: "길을 잃었어요", ro: "gireul ireosseoyo", en: "I'm lost" },
          { kr: "여기가 어디예요?", ro: "yeogiga eodiyeyo?", en: "Where am I?" },
          { kr: "이 근처에 있어요?", ro: "i geuncheoe isseoyo?", en: "Is it near here?" },
          { kr: "여기서 멀어요?", ro: "yeogiseo meoreoyo?", en: "Is it far from here?" },
          { kr: "걸어서 갈 수 있어요?", ro: "georeoseo gal su isseoyo?", en: "Can I walk there?" },
          { kr: "지도 좀 보여 주세요", ro: "jido jom boyeo juseyo", en: "Please show me on the map" },
          { kr: "같이 가 주실 수 있어요?", ro: "gachi ga jusil su isseoyo?", en: "Could you go with me?" }
        ]
      },
      {
        title: "방향과 위치",
        titleEn: "Directions & Location Words",
        mode: "standard",
        items: [
          { kr: "왼쪽", ro: "oenjjok", en: "left" },
          { kr: "오른쪽", ro: "oreunjjok", en: "right" },
          { kr: "직진", ro: "jikjin", en: "straight ahead" },
          { kr: "앞", ro: "ap", en: "front" },
          { kr: "뒤", ro: "dwi", en: "back" },
          { kr: "옆", ro: "yeop", en: "next to, side" },
          { kr: "위", ro: "wi", en: "above" },
          { kr: "아래", ro: "arae", en: "below" }
        ]
      },
      {
        title: "기차와 공항",
        titleEn: "Train & Airport",
        mode: "standard",
        items: [
          { kr: "기차역", ro: "gichayeok", en: "train station" },
          { kr: "공항", ro: "gonghang", en: "airport" },
          { kr: "왕복 표", ro: "wangbok pyo", en: "round-trip ticket" },
          { kr: "편도 표", ro: "pyeondo pyo", en: "one-way ticket" },
          { kr: "탑승구", ro: "tapseunggu", en: "boarding gate" },
          { kr: "짐", ro: "jim", en: "luggage" },
          { kr: "여권", ro: "yeogwon", en: "passport" },
          { kr: "몇 시에 출발해요?", ro: "myeot sie chulbalhaeyo?", en: "What time does it depart?" }
        ]
      }
    ]
  },
  {
    id: "travel-emergency",
    title: "여행과 응급상황",
    titleEn: "Travel & Emergencies",
    icon: "plane",
    stages: [
      {
        title: "숙소 체크인",
        titleEn: "Hotel Check-in",
        mode: "standard",
        items: [
          { kr: "예약했어요", ro: "yeyakhaesseoyo", en: "I have a reservation" },
          { kr: "체크인하고 싶어요", ro: "chekeuinhago sipeoyo", en: "I'd like to check in" },
          { kr: "체크아웃은 몇 시예요?", ro: "chekeuauseun myeot siyeyo?", en: "What time is check-out?" },
          { kr: "방 좀 보여 주세요", ro: "bang jom boyeo juseyo", en: "Please show me the room" },
          { kr: "와이파이 비밀번호가 뭐예요?", ro: "waipai bimilbeonhoga mwoyeyo?", en: "What's the WiFi password?" },
          { kr: "수건 좀 더 주세요", ro: "sugeon jom deo juseyo", en: "More towels, please" },
          { kr: "하루 더 묵고 싶어요", ro: "haru deo mukgo sipeoyo", en: "I'd like to stay one more night" }
        ]
      },
      {
        title: "관광지에서",
        titleEn: "At Tourist Spots",
        mode: "standard",
        items: [
          { kr: "입장료가 얼마예요?", ro: "ipjangnyoga eolmayeyo?", en: "How much is the admission fee?" },
          { kr: "사진 좀 찍어 주시겠어요?", ro: "sajin jom jjigeo jusigesseoyo?", en: "Could you take a photo for me?" },
          { kr: "몇 시에 문 닫아요?", ro: "myeot sie mun dadayo?", en: "What time does it close?" },
          { kr: "화장실이 어디예요?", ro: "hwajangsiri eodiyeyo?", en: "Where is the restroom?" },
          { kr: "기념품 가게가 어디예요?", ro: "ginyeompum gagega eodiyeyo?", en: "Where is the souvenir shop?" },
          { kr: "정말 아름다워요", ro: "jeongmal areumdawoyo", en: "It's really beautiful" },
          { kr: "안내소가 어디예요?", ro: "annaesoga eodiyeyo?", en: "Where is the information center?" }
        ]
      },
      {
        title: "아플 때",
        titleEn: "When You're Sick",
        mode: "standard",
        items: [
          { kr: "아파요", ro: "apayo", en: "It hurts / I'm sick" },
          { kr: "배가 아파요", ro: "baega apayo", en: "My stomach hurts" },
          { kr: "머리가 아파요", ro: "meoriga apayo", en: "I have a headache" },
          { kr: "열이 나요", ro: "yeori nayo", en: "I have a fever" },
          { kr: "약국이 어디예요?", ro: "yakgugi eodiyeyo?", en: "Where is the pharmacy?" },
          { kr: "이 약 어떻게 먹어요?", ro: "i yak eotteoke meogeoyo?", en: "How do I take this medicine?" },
          { kr: "병원에 가고 싶어요", ro: "byeongwone gago sipeoyo", en: "I want to go to the hospital" },
          { kr: "감기에 걸렸어요", ro: "gamgie geollyeosseoyo", en: "I have a cold" }
        ]
      },
      {
        title: "분실과 도난",
        titleEn: "Lost & Stolen Items",
        mode: "standard",
        items: [
          { kr: "여권을 잃어버렸어요", ro: "yeogwoneul ireobeoryeosseoyo", en: "I lost my passport" },
          { kr: "지갑을 잃어버렸어요", ro: "jigabeul ireobeoryeosseoyo", en: "I lost my wallet" },
          { kr: "가방을 도둑맞았어요", ro: "gabangeul dodukmajasseoyo", en: "My bag was stolen" },
          { kr: "분실물 센터가 어디예요?", ro: "bunsilmul senteoga eodiyeyo?", en: "Where is the lost and found?" },
          { kr: "경찰서가 어디예요?", ro: "gyeongchalseoga eodiyeyo?", en: "Where is the police station?" },
          { kr: "신고하고 싶어요", ro: "singohago sipeoyo", en: "I'd like to report this" }
        ]
      },
      {
        title: "긴급상황",
        titleEn: "Emergency Phrases",
        mode: "standard",
        items: [
          { kr: "도와주세요!", ro: "dowajuseyo!", en: "Help me!" },
          { kr: "경찰을 불러 주세요", ro: "gyeongchareul bulleo juseyo", en: "Please call the police" },
          { kr: "구급차를 불러 주세요", ro: "gugeupchareul bulleo juseyo", en: "Please call an ambulance" },
          { kr: "불이야!", ro: "buriya!", en: "Fire!" },
          { kr: "119에 전화해 주세요", ro: "il-il-gu-e jeonhwahae juseyo", en: "Please call 119 (emergency number)" },
          { kr: "위험해요!", ro: "wiheomhaeyo!", en: "It's dangerous!" },
          { kr: "대사관이 어디예요?", ro: "daesagwani eodiyeyo?", en: "Where is the embassy?" }
        ]
      },
      {
        title: "작별인사와 마무리",
        titleEn: "Farewells & Wrap-up",
        mode: "standard",
        items: [
          { kr: "정말 감사했습니다", ro: "jeongmal gamsahaetsseumnida", en: "Thank you so much for everything" },
          { kr: "즐거운 시간이었어요", ro: "jeulgeoun siganieosseoyo", en: "It was a fun time" },
          { kr: "다음에 또 만나요", ro: "daeume tto mannayo", en: "Let's meet again next time" },
          { kr: "한국이 그리울 거예요", ro: "hangugi geuriul geoyeyo", en: "I'll miss Korea" },
          { kr: "건강하세요", ro: "geonganghaseyo", en: "Stay healthy, take care" },
          { kr: "행운을 빌어요", ro: "haenguneul bireoyo", en: "I wish you luck" },
          { kr: "수고하셨습니다", ro: "sugohasyeotsseumnida", en: "Thank you for your hard work" },
          { kr: "안녕히 계세요!", ro: "annyeonghi gyeseyo!", en: "Goodbye!" }
        ]
      }
    ]
  }
];

if (typeof module !== "undefined") { module.exports = { COURSES }; }
