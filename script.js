/* ═══════════════════════════════════════════════════════
   VERIFFY  —  script.js
   All logic: data, render, charts, search, voice, AI chat,
   upload analyzer, i18n, theme, particles, modals, toasts
═══════════════════════════════════════════════════════ */

/* ── DEVELOPER DATA ─────────────────────────────────────
   status: 'verified' | 'lowcode' | 'fraud'
   score: 0-100 credibility
   loc: lines of code (thousands)
   commits: # of commits
═══════════════════════════════════════════════════════ */
const DEVS = [
  {
    id:1, name:"Arjun Sharma", initials:"AS", color:"#22c55e",
    title:"Full-Stack Engineer", location:"Bangalore, KA",
    specialty:"Distributed Systems", yoe:5,
    skills:["React","Go","Rust","PostgreSQL","Docker","K8s"],
    score:94, loc:48.2, commits:1842, projects:12,
    status:"verified", bio:"Building scalable systems. OSS contributor. Rust & Go enthusiast. IIT Delhi alumnus.",
    github:"arjunsharma", stars:2840,
    projectList:[
      {name:"DistributedKV",lang:"Go",stars:842,desc:"Raft-consensus distributed key-value store"},
      {name:"RustHTTP",lang:"Rust",stars:512,desc:"High-performance async HTTP/2 server"},
      {name:"ReactDashKit",lang:"TypeScript",stars:1203,desc:"Production-ready dashboard component library"},
    ],
    heat:[12,18,7,23,31,15,28,42,19,35,22,40,17,29,38,11,25,33,14,20,45,8,16,37,26,19,43,30,22,48]
  },
  {
    id:2, name:"Priya Nair", initials:"PN", color:"#f472b6",
    title:"Flutter & Mobile Lead", location:"Mumbai, MH",
    specialty:"Mobile Development", yoe:3,
    skills:["Flutter","Dart","Firebase","Swift","GraphQL"],
    score:88, loc:32.7, commits:1120, projects:8,
    status:"verified", bio:"Crafting beautiful mobile experiences. 3M+ app downloads. Google Developer Expert.",
    github:"priyanair", stars:3240,
    projectList:[
      {name:"FlutterAnimKit",lang:"Dart",stars:2341,desc:"Advanced animation toolkit for Flutter apps"},
      {name:"FirebaseChatApp",lang:"Dart",stars:678,desc:"Real-time chat with E2E encryption"},
    ],
    heat:[8,14,22,17,29,11,35,19,42,26,33,15,38,24,17,44,12,28,36,21,47,9,31,18,40,27,13,39,23,50]
  },
  {
    id:3, name:"Rahul Mehta", initials:"RM", color:"#a78bfa",
    title:"ML Engineer & Researcher", location:"Hyderabad, TS",
    specialty:"Machine Learning / AI", yoe:6,
    skills:["Python","PyTorch","TensorFlow","CUDA","MLOps"],
    score:91, loc:55.1, commits:2210, projects:9,
    status:"verified", bio:"ML systems at scale. 4 published papers. Kaggle Grandmaster. Loves transformers.",
    github:"rahulml", stars:5120,
    projectList:[
      {name:"TransformerXL",lang:"Python",stars:3102,desc:"From-scratch Transformer-XL with optimizations"},
      {name:"FaceNet3D",lang:"Python",stars:1876,desc:"3D facial recognition using neural radiance fields"},
    ],
    heat:[20,32,15,44,28,37,11,49,22,38,16,41,27,18,45,33,12,29,43,25,17,48,31,14,39,26,42,19,36,53]
  },
  {
    id:4, name:"Sneha Kapoor", initials:"SK", color:"#34d399",
    title:"DevOps & Platform Engineer", location:"Pune, MH",
    specialty:"DevOps / Cloud", yoe:4,
    skills:["Terraform","AWS","Helm","ArgoCD","Go"],
    score:86, loc:29.8, commits:890, projects:7,
    status:"verified", bio:"I automate everything so you don't have to. Terraform contributor. GitOps evangelist.",
    github:"snehakapoor", stars:1890,
    projectList:[
      {name:"TerraformModules",lang:"HCL",stars:1124,desc:"Production-ready Terraform module collection"},
      {name:"K8sAutoScaler",lang:"Go",stars:678,desc:"Custom HPA controller with ML-based predictions"},
    ],
    heat:[16,24,9,38,21,30,14,43,28,35,12,46,19,32,41,7,27,36,22,45,13,29,40,18,33,48,11,25,39,17]
  },
  {
    id:5, name:"Vikram Das", initials:"VD", color:"#fbbf24",
    title:"Web3 & Smart Contract Dev", location:"Delhi, DL",
    specialty:"Blockchain / Web3", yoe:3,
    skills:["Solidity","Rust","Web3.js","Hardhat","ZK Proofs"],
    score:83, loc:26.4, commits:920, projects:6,
    status:"verified", bio:"Building the decentralised future. Solidity auditor. ZK proofs enthusiast.",
    github:"vikramweb3", stars:1450,
    projectList:[
      {name:"DeFiProtocol",lang:"Solidity",stars:892,desc:"AMM-based DeFi protocol with flash loans"},
      {name:"ZKProofLib",lang:"Rust",stars:456,desc:"Zero-knowledge proof library for privacy apps"},
    ],
    heat:[11,19,28,14,36,23,41,17,33,26,45,12,38,21,30,47,15,28,43,19,35,8,29,42,16,37,24,50,13,31]
  },
  {
    id:6, name:"Ananya Roy", initials:"AR", color:"#f87171",
    title:"Site Reliability Engineer", location:"Chennai, TN",
    specialty:"SRE & Observability", yoe:5,
    skills:["Python","Go","Prometheus","Grafana","Kafka"],
    score:89, loc:38.9, commits:1560, projects:10,
    status:"verified", bio:"99.99% uptime advocate. Chaos engineering. Observability-first mindset.",
    github:"ananyaroy", stars:2790,
    projectList:[
      {name:"ObservabilityStack",lang:"Go",stars:1456,desc:"Full observability stack with tracing & metrics"},
      {name:"ChaosMonkey-k8s",lang:"Python",stars:823,desc:"Kubernetes chaos engineering framework"},
    ],
    heat:[23,15,38,27,12,44,19,35,29,42,16,31,47,22,36,11,28,41,17,33,48,14,26,39,21,45,18,32,43,20]
  },
  {
    id:7, name:"Rohan Tiwari", initials:"RT", color:"#fb923c",
    title:"Compiler & PL Engineer", location:"Bhopal, MP",
    specialty:"Compilers / PL Theory", yoe:5,
    skills:["C++","LLVM","Haskell","OCaml","Rust"],
    score:82, loc:44.3, commits:1430, projects:5,
    status:"verified", bio:"Building compilers and language runtimes. LLVM contributor. Type theory nerd.",
    github:"rohantiwari", stars:1120,
    projectList:[
      {name:"MiniCompiler",lang:"C++",stars:723,desc:"Toy compiler with LLVM backend targeting WASM"},
      {name:"TypeInferEngine",lang:"Haskell",stars:389,desc:"Hindley-Milner type inference implementation"},
    ],
    heat:[14,19,11,24,17,28,8,21,26,14,18,22,9,25,16,19,12,27,15,20,10,23,17,21,13,18,24,16,11,22]
  },
  {
    id:8, name:"Kavitha Suresh", initials:"KS", color:"#2dd4bf",
    title:"AR/VR Developer", location:"Kochi, KL",
    specialty:"AR/VR / Spatial Computing", yoe:3,
    skills:["Unity","ARKit","WebXR","C#","Three.js"],
    score:68, loc:18.5, commits:540, projects:5,
    status:"lowcode", bio:"Building the spatial web. ARKit, WebXR, and Unity enthusiast. Exploring mixed reality.",
    github:"kavithasuresh", stars:380,
    projectList:[
      {name:"ARNavigation",lang:"C#",stars:234,desc:"Indoor AR navigation using ARKit + CoreML"},
      {name:"WebXRViewer",lang:"JavaScript",stars:145,desc:"Web-based 3D product viewer with WebXR"},
    ],
    heat:[6,10,4,13,8,15,5,11,17,8,12,6,14,9,16,7,11,5,13,10,6,14,8,12,5,10,7,13,9,11]
  },
  {
    id:9, name:"Aditya Kulkarni", initials:"AK", color:"#818cf8",
    title:"Game Developer (Unity/Unreal)", location:"Nagpur, MH",
    specialty:"Game Development", yoe:3,
    skills:["Unity","C#","Unreal","HLSL","Blender"],
    score:71, loc:22.1, commits:670, projects:6,
    status:"lowcode", bio:"Building immersive game experiences. Unity3D shader programmer.",
    github:"adityagamedev", stars:745,
    projectList:[
      {name:"ProceduralWorld",lang:"C#",stars:456,desc:"Procedural terrain generation with LOD"},
      {name:"ShaderPack",lang:"HLSL",stars:289,desc:"Advanced PBR shader collection for Unity"},
    ],
    heat:[8,13,5,17,10,22,7,15,19,11,14,8,20,6,13,18,9,16,12,21,7,14,10,17,8,19,13,11,16,9]
  },
  {
    id:10, name:"Meera Iyer", initials:"MI", color:"#c084fc",
    title:"Data Engineer", location:"Coimbatore, TN",
    specialty:"Data Engineering", yoe:2,
    skills:["Python","Spark","Airflow","dbt","Snowflake"],
    score:63, loc:15.8, commits:420, projects:4,
    status:"lowcode", bio:"Building data pipelines at scale. Apache Spark enthusiast. Open to opportunities.",
    github:"meeraiyer", stars:346,
    projectList:[
      {name:"SparkPipeline",lang:"Python",stars:234,desc:"Real-time data pipeline with Spark & Kafka"},
      {name:"DBT-Models",lang:"SQL",stars:112,desc:"Production dbt models for e-commerce analytics"},
    ],
    heat:[6,12,8,15,4,10,17,9,13,7,11,5,14,8,16,6,10,13,7,12,4,9,15,8,11,6,13,7,10,14]
  },
  {
    id:11, name:"Siddharth Rao", initials:"SR", color:"#22d3ee",
    title:"Embedded Systems Engineer", location:"Ahmedabad, GJ",
    specialty:"Embedded Systems / IoT", yoe:4,
    skills:["C","C++","FreeRTOS","ARM","MQTT"],
    score:78, loc:31.4, commits:980, projects:6,
    status:"verified", bio:"Low-level firmware. RTOS, ARM Cortex-M, IoT protocols. C/C++ purist.",
    github:"siddharthrao", stars:534,
    projectList:[
      {name:"RTOSScheduler",lang:"C",stars:345,desc:"Custom RTOS scheduler for ARM Cortex-M4"},
      {name:"IoTGateway",lang:"C++",stars:189,desc:"MQTT-based IoT gateway with TLS"},
    ],
    heat:[10,16,8,21,13,18,25,11,17,14,22,9,19,15,23,12,18,10,20,16,13,21,8,17,14,19,11,22,16,13]
  },
  {
    id:12, name:"Lakshmi Reddy", initials:"LR", color:"#f59e0b",
    title:"NLP / Conversational AI Engineer", location:"Vijayawada, AP",
    specialty:"NLP & Conversational AI", yoe:4,
    skills:["Python","HuggingFace","spaCy","LangChain","FastAPI"],
    score:79, loc:27.6, commits:840, projects:7,
    status:"verified", bio:"Building LLM-powered products. Telugu NLP advocate. spaCy & HuggingFace contributor.",
    github:"lakshmi_nlp", stars:701,
    projectList:[
      {name:"TeluguNLP",lang:"Python",stars:412,desc:"Telugu language NLP models & tokenizer"},
      {name:"LLMChatbot",lang:"Python",stars:289,desc:"Production LLM chatbot with RAG pipeline"},
    ],
    heat:[9,14,7,19,12,17,8,22,15,11,18,6,20,14,17,10,15,9,21,13,8,18,12,19,7,14,11,20,15,12]
  },
  {
    id:13, name:"Karan Bose", initials:"KB", color:"#60a5fa",
    title:"Junior Frontend Developer", location:"Kolkata, WB",
    specialty:"Frontend Basics", yoe:1,
    skills:["HTML","CSS","JavaScript","React"],
    score:38, loc:3.2, commits:112, projects:2,
    status:"lowcode", bio:"Learning React. Fresh grad from Jadavpur University. Working on small projects.",
    github:"karanbose", stars:12,
    projectList:[
      {name:"PortfolioSite",lang:"JavaScript",stars:12,desc:"Personal portfolio in plain HTML/CSS/JS"},
    ],
    heat:[2,0,1,3,0,2,5,1,0,3,2,4,1,0,2,3,0,1,4,2,0,1,3,2,0,4,1,2,0,3]
  },
  {
    id:14, name:"Pooja Singh", initials:"PS", color:"#fb7185",
    title:"UI/UX Designer (Transitioning to Dev)", location:"Lucknow, UP",
    specialty:"UI/UX Design", yoe:1,
    skills:["Figma","HTML","CSS","Tailwind"],
    score:42, loc:4.5, commits:145, projects:2,
    status:"lowcode", bio:"Designer pivoting into frontend dev. Figma-to-React journey in progress.",
    github:"poojasingh", stars:34,
    projectList:[
      {name:"DesignSystem",lang:"CSS",stars:34,desc:"Figma-to-code design system with Tailwind"},
    ],
    heat:[1,3,2,0,4,1,2,0,3,1,0,2,4,1,3,0,2,1,0,3,2,4,1,0,3,2,1,4,0,2]
  },
  {
    id:15, name:"Rohit 'Pro' Sharma", initials:"RS", color:"#ef4444",
    title:"10x Full-Stack AI Engineer", location:"Mumbai, MH",
    specialty:"Claims All Specialties", yoe:8,
    skills:["Everything","AI","Blockchain","Quantum"],
    score:12, loc:0.3, commits:4, projects:1,
    status:"fraud", bio:"Ex-Google, Ex-Meta, Ex-Amazon. Built 500+ apps. Zero actual commit history.",
    github:"—", stars:0,
    projectList:[
      {name:"AI-Blockchain-Quantum-App",lang:"Python",stars:9999,desc:"Revolutionary app combining AI + Blockchain + Quantum"},
    ],
    heat:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  },
  {
    id:16, name:"Fake Dev Gupta", initials:"FD", color:"#ef4444",
    title:"Senior Architect & CTO", location:"Delhi, DL",
    specialty:"Fraud / Impersonation", yoe:10,
    skills:["All Languages","All Frameworks"],
    score:8, loc:0.1, commits:0, projects:1,
    status:"fraud", bio:"10 years exp. Worked at all FAANG companies. PhD from MIT Online. Zero real code.",
    github:"—", stars:0,
    projectList:[
      {name:"FAANG-Level-App",lang:"TypeScript",stars:99999,desc:"Used by 1 billion users. Completely fictional."},
    ],
    heat:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  },
];

/* ── i18n ──────────────────────────────────────────────── */
const I18N = {
  en: {
    nav_dashboard:"Dashboard", nav_profiles:"Developers", nav_leaderboard:"Leaderboard",
    nav_upload:"Upload", nav_help:"Help",
    hero_badge:"✦ Proof-of-Work · Anti-AI-Fraud · Real Code Verified",
    hero_title:"Resumes Lie.<br><span class='gradient-text'>Code Doesn't.</span>",
    hero_sub:"Veriffy verifies developers through real commits, actual project complexity, and code authenticity — not polished PDFs.",
    search_placeholder:"Search by name, skill, location, specialty…",
    btn_search:"Search", btn_analyze:"⚡ Analyze Project", btn_send:"Send",
    stat_total:"Total Developers", stat_verified:"Verified", stat_low:"Low Code",
    stat_fraud:"Fraud Detected", stat_avg:"Avg. Score",
    sec_dashboard:"📊 Recruiter Quick View", sec_dashboard_sub:"Real-time credibility analytics across all developers",
    chart_dist:"Score Distribution", chart_status:"Developer Status Breakdown",
    chart_loc:"Activity by Commit Tier", chart_spec:"Top Specialties",
    sec_upload:"⬆ Project Analyzer", sec_upload_sub:"Upload a project URL to get an instant credibility report",
    lbl_devname:"Developer Name", lbl_github:"GitHub URL", lbl_lang:"Primary Language", lbl_desc:"Project Description",
    analyze_wait:"Fill in the details and click Analyze to see the credibility report",
    sec_leaderboard:"🏆 Leaderboard", sec_leaderboard_sub:"Top 5 developers by credibility score",
    sec_profiles:"👨‍💻 Developer Profiles",
    filter_all:"All", filter_verified:"✓ Verified", filter_low:"📉 Low Code", filter_fraud:"⚠ Fraud",
    sec_ask:"🤖 Ask Veriffy AI", sec_ask_sub:"Ask anything about how Veriffy works",
    chat_intro:"Hi! I'm Veriffy AI. Ask me how credibility scoring works, how to spot fraud, or anything about this platform.",
    chat_placeholder:"Ask a question…",
    sec_help:"❓ Help & FAQ",
  },
  hi: {
    nav_dashboard:"डैशबोर्ड", nav_profiles:"डेवलपर", nav_leaderboard:"लीडरबोर्ड",
    nav_upload:"अपलोड", nav_help:"सहायता",
    hero_badge:"✦ कार्य-प्रमाण · एआई-धोखाधड़ी रोधी · असली कोड सत्यापित",
    hero_title:"रेज़्यूमे झूठ बोलते हैं।<br><span class='gradient-text'>कोड नहीं।</span>",
    hero_sub:"Veriffy डेवलपर्स को उनके वास्तविक कमिट और प्रोजेक्ट जटिलता से सत्यापित करता है।",
    search_placeholder:"नाम, कौशल, स्थान से खोजें…",
    btn_search:"खोजें", btn_analyze:"⚡ प्रोजेक्ट विश्लेषण", btn_send:"भेजें",
    stat_total:"कुल डेवलपर", stat_verified:"सत्यापित", stat_low:"कम कोड",
    stat_fraud:"धोखाधड़ी", stat_avg:"औसत स्कोर",
    sec_dashboard:"📊 भर्तीकर्ता त्वरित दृश्य", sec_dashboard_sub:"सभी डेवलपर्स का लाइव विश्वसनीयता विश्लेषण",
    chart_dist:"स्कोर वितरण", chart_status:"डेवलपर स्थिति", chart_loc:"कमिट टियर", chart_spec:"शीर्ष विशेषताएं",
    sec_upload:"⬆ प्रोजेक्ट विश्लेषक", sec_upload_sub:"तत्काल रिपोर्ट के लिए GitHub लिंक डालें",
    lbl_devname:"डेवलपर नाम", lbl_github:"GitHub URL", lbl_lang:"प्रमुख भाषा", lbl_desc:"प्रोजेक्ट विवरण",
    analyze_wait:"विवरण भरें और विश्लेषण पर क्लिक करें",
    sec_leaderboard:"🏆 लीडरबोर्ड", sec_leaderboard_sub:"स्कोर के अनुसार शीर्ष 5",
    sec_profiles:"👨‍💻 डेवलपर प्रोफाइल",
    filter_all:"सभी", filter_verified:"✓ सत्यापित", filter_low:"📉 कम कोड", filter_fraud:"⚠ धोखाधड़ी",
    sec_ask:"🤖 Veriffy AI से पूछें", sec_ask_sub:"प्लेटफ़ॉर्म के बारे में कुछ भी पूछें",
    chat_intro:"नमस्ते! मैं Veriffy AI हूँ। विश्वसनीयता स्कोर या धोखाधड़ी के बारे में पूछें।",
    chat_placeholder:"प्रश्न पूछें…",
    sec_help:"❓ सहायता और FAQ",
  },
  kn: {
    nav_dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", nav_profiles:"ಡೆವಲಪರ್‌ಗಳು", nav_leaderboard:"ಲೀಡರ್‌ಬೋರ್ಡ್",
    nav_upload:"ಅಪ್‌ಲೋಡ್", nav_help:"ಸಹಾಯ",
    hero_badge:"✦ ಕೆಲಸ-ಪ್ರಮಾಣ · AI ವಂಚನೆ ವಿರೋಧಿ · ನಿಜವಾದ ಕೋಡ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    hero_title:"ರೆಸ್ಯೂಮ್‌ಗಳು ಸುಳ್ಳು ಹೇಳುತ್ತವೆ।<br><span class='gradient-text'>ಕೋಡ್ ಹೇಳುವುದಿಲ್ಲ।</span>",
    hero_sub:"Veriffy ಡೆವಲಪರ್‌ಗಳನ್ನು ನಿಜವಾದ ಕಮಿಟ್‌ಗಳು ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಸಂಕೀರ್ಣತೆಯ ಮೂಲಕ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    search_placeholder:"ಹೆಸರು, ಕೌಶಲ್ಯ, ಸ್ಥಳದ ಮೂಲಕ ಹುಡುಕಿ…",
    btn_search:"ಹುಡುಕು", btn_analyze:"⚡ ಪ್ರಾಜೆಕ್ಟ್ ವಿಶ್ಲೇಷಣೆ", btn_send:"ಕಳುಹಿಸಿ",
    stat_total:"ಒಟ್ಟು ಡೆವಲಪರ್‌ಗಳು", stat_verified:"ಪರಿಶೀಲಿಸಲಾಗಿದೆ", stat_low:"ಕಡಿಮೆ ಕೋಡ್",
    stat_fraud:"ವಂಚನೆ ಪತ್ತೆ", stat_avg:"ಸರಾಸರಿ ಸ್ಕೋರ್",
    sec_dashboard:"📊 ರಿಕ್ರೂಟರ್ ತ್ವರಿತ ನೋಟ", sec_dashboard_sub:"ಎಲ್ಲ ಡೆವಲಪರ್‌ಗಳ ವಿಶ್ವಾಸಾರ್ಹತೆ ವಿಶ್ಲೇಷಣೆ",
    chart_dist:"ಸ್ಕೋರ್ ವಿತರಣೆ", chart_status:"ಡೆವಲಪರ್ ಸ್ಥಿತಿ", chart_loc:"ಕಮಿಟ್ ಟಿಯರ್", chart_spec:"ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳು",
    sec_upload:"⬆ ಪ್ರಾಜೆಕ್ಟ್ ವಿಶ್ಲೇಷಕ", sec_upload_sub:"ತಕ್ಷಣದ ವಿಶ್ವಾಸಾರ್ಹತೆ ವರದಿಗಾಗಿ GitHub ಲಿಂಕ್ ನಮೂದಿಸಿ",
    lbl_devname:"ಡೆವಲಪರ್ ಹೆಸರು", lbl_github:"GitHub URL", lbl_lang:"ಪ್ರಾಥಮಿಕ ಭಾಷೆ", lbl_desc:"ಪ್ರಾಜೆಕ್ಟ್ ವಿವರಣೆ",
    analyze_wait:"ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
    sec_leaderboard:"🏆 ಲೀಡರ್‌ಬೋರ್ಡ್", sec_leaderboard_sub:"ಅಗ್ರ 5 ಡೆವಲಪರ್‌ಗಳು",
    sec_profiles:"👨‍💻 ಡೆವಲಪರ್ ಪ್ರೊಫೈಲ್‌ಗಳು",
    filter_all:"ಎಲ್ಲಾ", filter_verified:"✓ ಪರಿಶೀಲಿಸಲಾಗಿದೆ", filter_low:"📉 ಕಡಿಮೆ ಕೋಡ್", filter_fraud:"⚠ ವಂಚನೆ",
    sec_ask:"🤖 Veriffy AI ಕೇಳಿ", sec_ask_sub:"ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ",
    chat_intro:"ನಮಸ್ಕಾರ! ನಾನು Veriffy AI. ವಿಶ್ವಾಸಾರ್ಹತೆ ಸ್ಕೋರಿಂಗ್ ಅಥವಾ ವಂಚನೆ ಪತ್ತೆ ಬಗ್ಗೆ ಕೇಳಿ.",
    chat_placeholder:"ಪ್ರಶ್ನೆ ಕೇಳಿ…",
    sec_help:"❓ ಸಹಾಯ ಮತ್ತು FAQ",
  }
};
let currentLang = 'en';

/* ── FAQ DATA ───────────────────────────────────────────── */
const FAQS = [
  { q:"How is the credibility score calculated?", a:"The credibility score (0–100) is based on total lines of code, commit frequency, project count, GitHub stars, and code complexity analysis. Developers with consistent contributions over time score higher." },
  { q:"What is fraud detection?", a:"Fraud detection flags accounts that claim high experience but have near-zero commit history, unrealistically inflated project stats, or no verifiable GitHub presence. These are highlighted in red with a ⚠ badge." },
  { q:"What does 'Low Code' mean?", a:"A developer is tagged Low Code when they have fewer than 20K lines of verified code or very few commits relative to their claimed experience. This is a caution flag, not a disqualifier." },
  { q:"How do I get verified?", a:"Link your GitHub account and upload at least 3 projects. Veriffy's engine will analyse your commit history, code authorship, and project complexity. Scores above 75 with consistent activity get the Verified badge." },
  { q:"Can I use Veriffy as a recruiter?", a:"Yes! The Recruiter Quick View dashboard gives you an instant visual breakdown of all candidates — verified, low code, and fraud flagged — so you can shortlist in seconds." },
  { q:"Is voice search available?", a:"Yes. Click the 🎙 microphone button next to the search bar. Veriffy uses the Web Speech API to transcribe your voice query and search developers instantly." },
  { q:"What does the Project Analyzer do?", a:"The Project Analyzer takes a GitHub URL and developer details to simulate a credibility analysis — scoring code complexity, commit depth, and authenticity using an in-browser algorithm." },
  { q:"How does the leaderboard work?", a:"The leaderboard ranks the top 5 developers by their credibility score. It updates in real time as you filter or search developers." },
];

/* ── AI CHAT RESPONSES ──────────────────────────────────── */
const AI_RESPONSES = [
  { keys:["score","credibility","calculated","how"], ans:"The credibility score (0–100) combines: lines of code (40%), commit frequency (30%), project count (20%), and community stars (10%). Developers above 80 are typically Verified. Below 50 gets a Low Code flag, and near-zero commit counts with inflated claims trigger Fraud detection." },
  { keys:["fraud","fake","detect","flagged"], ans:"Fraud is detected when: claimed experience is ≥5 years but commits are <10, stars appear fabricated, or GitHub profile is absent. Fraud accounts are highlighted in red with a blinking ⚠ badge across the platform." },
  { keys:["verified","badge","green","tick"], ans:"A developer earns the Verified badge when their credibility score exceeds 75, they have a linked GitHub with consistent commit history, and at least 3 projects with real code authorship." },
  { keys:["low code","lowcode","few","small"], ans:"The Low Code warning appears when a developer has fewer than 20K lines of verified code, or fewer than 300 commits despite claiming experience. It's a caution flag to dig deeper, not an automatic rejection." },
  { keys:["upload","analyze","project","github"], ans:"The Project Analyzer takes a developer's name, GitHub URL, primary language, and description. It simulates an analysis using our scoring algorithm and returns a full credibility breakdown including complexity score, commit depth, and authenticity verdict." },
  { keys:["voice","speak","microphone","search"], ans:"Click the 🎙 button next to the search bar. Veriffy uses the Web Speech API (available in Chrome and Edge). Speak the name, skill, or location and the platform will search instantly." },
  { keys:["leaderboard","top","ranking","best"], ans:"The leaderboard shows the Top 5 developers sorted by credibility score. It's designed for recruiters who want to instantly see who the most trustworthy candidates are." },
  { keys:["recruiter","hire","hiring","dashboard"], ans:"Recruiters get a dedicated Quick View dashboard with four charts: score distribution, status breakdown (verified/low-code/fraud), activity tiers, and specialty distribution. It's designed for fast decisions — under 60 seconds to assess any developer." },
  { keys:["language","hindi","kannada","english"], ans:"Veriffy supports English, Hindi (हिन्दी), and Kannada (ಕನ್ನಡ). Use the language dropdown in the header or Settings to switch. The entire UI including labels, buttons, and sections will update." },
  { keys:["dark","light","theme","mode"], ans:"Toggle between dark and light mode using the 🌙 button in the header or the Settings panel. The theme preference is applied immediately across the entire interface." },
];

/* ── STATE ──────────────────────────────────────────────── */
let currentFilter = 'all';
let currentSearch = '';
let currentSearchRec = '';
let charts = {};

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  createParticles();
  // Content will be shown after login based on role
  // pre-warm data but don't render into hidden views yet
});

/* ── PARTICLES ──────────────────────────────────────────── */
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const colors = ['#22c55e','#00e5ff','#a78bfa','#fbbf24'];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation-duration:${Math.random()*20+10}s;
      animation-delay:${Math.random()*10}s;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      opacity:${Math.random()*0.4+0.1};
    `;
    container.appendChild(p);
  }
}

/* ── THEME ──────────────────────────────────────────────── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
  showToast(isDark ? 'Switched to light mode' : 'Switched to dark mode', 'info');
  // Redraw charts with new colours
  setTimeout(() => { destroyCharts(); initCharts(); }, 100);
}

/* ── i18n ───────────────────────────────────────────────── */
function switchLang(lang) {
  currentLang = lang;
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
  // Sync both selects
  document.getElementById('langSelect').value = lang;
  document.getElementById('langSelect2').value = lang;
  showToast(`Language switched to ${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Kannada'}`, 'success');
}

/* ── SCROLL TO TOP ──────────────────────────────────────── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── STATS ──────────────────────────────────────────────── */
function updateStats() {
  const v = DEVS.filter(d => d.status === 'verified').length;
  const l = DEVS.filter(d => d.status === 'lowcode').length;
  const f = DEVS.filter(d => d.status === 'fraud').length;
  const avg = Math.round(DEVS.filter(d=>d.status!=='fraud').reduce((a,d)=>a+d.score,0)/DEVS.filter(d=>d.status!=='fraud').length);
  animateNumber('statTotal', DEVS.length);
  animateNumber('statVerified', v);
  animateNumber('statLow', l);
  animateNumber('statFraud', f);
  animateNumber('statAvg', avg);
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  let cur = 0;
  const step = Math.ceil(target / 40);
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur;
    if (cur >= target) clearInterval(t);
  }, 30);
}

/* ── CHARTS ─────────────────────────────────────────────── */
function getChartDefaults() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    textColor: isDark ? '#8fa3c0' : '#334155',
    gridColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    cardBg: isDark ? '#0f1a2e' : '#ffffff',
  };
}

function destroyCharts() {
  Object.values(charts).forEach(c => c && c.destroy());
  charts = {};
}

function initCharts() {
  const d = getChartDefaults();

  // 1. Score Distribution Bar
  const scoreRanges = [0, 0, 0, 0, 0]; // 0-20,21-40,41-60,61-80,81-100
  DEVS.forEach(dev => {
    const i = Math.min(Math.floor(dev.score / 20), 4);
    scoreRanges[i]++;
  });
  charts.dist = new Chart(document.getElementById('chartDist'), {
    type: 'bar',
    data: {
      labels: ['0–20', '21–40', '41–60', '61–80', '81–100'],
      datasets: [{
        label: 'Developers',
        data: scoreRanges,
        backgroundColor: ['#ef4444','#f87171','#fbbf24','#60a5fa','#22c55e'],
        borderRadius: 8, borderSkipped: false,
      }]
    },
    options: chartOpts(d, 'Number of Developers')
  });

  // 2. Status Doughnut
  charts.status = new Chart(document.getElementById('chartStatus'), {
    type: 'doughnut',
    data: {
      labels: ['Verified', 'Low Code', 'Fraud'],
      datasets: [{
        data: [
          DEVS.filter(d=>d.status==='verified').length,
          DEVS.filter(d=>d.status==='lowcode').length,
          DEVS.filter(d=>d.status==='fraud').length,
        ],
        backgroundColor: ['#22c55e','#fbbf24','#ef4444'],
        borderWidth: 3,
        borderColor: d.cardBg,
        hoverBorderColor: d.cardBg,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      cutout: '65%',
      plugins: {
        legend: { position:'bottom', labels: { color: d.textColor, padding:16, font:{size:12,weight:'600'} } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} devs` } }
      }
    }
  });

  // 3. Commit Tier Horizontal Bar
  const tiers = { 'Elite (1000+)':0, 'Senior (500–999)':0, 'Mid (200–499)':0, 'Junior (<200)':0 };
  DEVS.forEach(d => {
    if (d.commits >= 1000) tiers['Elite (1000+)']++;
    else if (d.commits >= 500) tiers['Senior (500–999)']++;
    else if (d.commits >= 200) tiers['Mid (200–499)']++;
    else tiers['Junior (<200)']++;
  });
  charts.commit = new Chart(document.getElementById('chartCommit'), {
    type: 'bar',
    data: {
      labels: Object.keys(tiers),
      datasets: [{
        label: 'Developers',
        data: Object.values(tiers),
        backgroundColor: ['#22c55e','#3b82f6','#fbbf24','#ef4444'],
        borderRadius: 8, borderSkipped: false,
      }]
    },
    options: { ...chartOpts(d, ''), indexAxis: 'y' }
  });

  // 4. Specialties Radar
  const specCounts = {};
  DEVS.filter(d=>d.status!=='fraud').forEach(d => {
    specCounts[d.specialty] = (specCounts[d.specialty] || 0) + 1;
  });
  const topSpecs = Object.entries(specCounts).sort((a,b)=>b[1]-a[1]).slice(0,6);
  charts.spec = new Chart(document.getElementById('chartSpec'), {
    type: 'radar',
    data: {
      labels: topSpecs.map(s=>s[0].split('/')[0].trim()),
      datasets: [{
        label: 'Developers',
        data: topSpecs.map(s=>s[1]),
        backgroundColor: 'rgba(34,197,94,0.15)',
        borderColor: '#22c55e',
        pointBackgroundColor: '#22c55e',
        pointRadius: 4, borderWidth: 2,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        r: {
          grid: { color: d.gridColor },
          ticks: { color: d.textColor, font:{size:10}, backdropColor:'transparent' },
          pointLabels: { color: d.textColor, font:{size:10} }
        }
      },
      plugins: { legend: { labels: { color: d.textColor } } }
    }
  });
}

function chartOpts(d, yLabel) {
  return {
    responsive: true, maintainAspectRatio: true,
    scales: {
      x: { grid: { color: d.gridColor }, ticks: { color: d.textColor, font:{size:11} } },
      y: { grid: { color: d.gridColor }, ticks: { color: d.textColor, font:{size:11} }, title: yLabel ? { display:false } : undefined }
    },
    plugins: { legend: { display:false } },
    animation: { duration: 1000, easing:'easeOutQuart' }
  };
}

/* ── LEADERBOARD ────────────────────────────────────────── */
function renderLeaderboard() {
  renderLeaderboardIn('leaderboardList');
}

function renderLeaderboardIn(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const sorted = [...DEVS].filter(d=>d.status!=='fraud').sort((a,b)=>b.score-a.score).slice(0,5);
  container.innerHTML = sorted.map((dev, i) => `
    <div class="lb-row" onclick="openDevModal(${dev.id})">
      <div class="lb-rank ${i===0?'lb-rank-1':i===1?'lb-rank-2':i===2?'lb-rank-3':'lb-rank-n'}">${i+1}</div>
      <div class="lb-avatar" style="background:${dev.color}22;color:${dev.color}">${dev.initials}</div>
      <div class="lb-info">
        <div class="lb-name">${dev.name}</div>
        <div class="lb-title">${dev.specialty} · ${dev.location}</div>
      </div>
      <div>
        <div class="lb-bar-wrap">
          <div class="lb-bar"><div class="lb-bar-fill" style="width:0%;--w:${dev.score}%" data-w="${dev.score}"></div></div>
        </div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px;text-align:right">${dev.score}/100</div>
      </div>
      <div class="lb-score">${dev.score}</div>
    </div>
  `).join('');
  setTimeout(() => {
    container.querySelectorAll('.lb-bar-fill').forEach(el => {
      el.style.width = el.getAttribute('data-w') + '%';
    });
  }, 200);
}

/* ── PROFILE RENDERING ──────────────────────────────────── */
function scoreClass(s) {
  if (s >= 75) return 'score-high';
  if (s >= 50) return 'score-mid';
  return 'score-low';
}
function scoreBarColor(s) {
  if (s >= 75) return 'var(--green)';
  if (s >= 50) return 'var(--yellow)';
  return 'var(--red)';
}
function statusBadge(status) {
  if (status === 'verified') return '<span class="badge badge-green">✓ Verified</span>';
  if (status === 'lowcode') return '<span class="badge badge-yellow">📉 Low Code</span>';
  if (status === 'fraud') return '<span class="badge badge-red">⚠ Fraud</span>';
  return '';
}

/* ── Role-aware card renderer ── */
function renderDevCard(dev, role) {
  const isFraud = dev.status === 'fraud';
  const bannerBg = isFraud
    ? 'linear-gradient(135deg,rgba(239,68,68,0.3),rgba(239,68,68,0.05))'
    : `linear-gradient(135deg,${dev.color}33,${dev.color}08)`;
  const isRecruiter = role === 'recruiter';
  return `
  <div class="dev-card glass ${dev.status} ${isFraud ? 'fraud-glow' : dev.status === 'verified' ? 'verified-glow' : ''}" onclick="openDevModal(${dev.id})" style="animation-delay:${Math.random()*0.2}s">
    ${isFraud ? `<div class="fraud-banner"><span>⚠ FRAUD ACCOUNT DETECTED</span></div>` : ''}
    <div class="dev-card-banner" style="background:${bannerBg}"></div>
    <div class="dev-card-body">
      <div class="dev-avatar" style="background:${dev.color}18;color:${dev.color}">${dev.initials}</div>
      <div class="dev-name" style="color:${isFraud ? 'var(--red)' : 'var(--text)'}">${dev.name}</div>
      <div class="dev-title">${dev.title}</div>
      <div class="dev-loc">📍 ${dev.location}</div>
      <div class="dev-specialty">⚡ ${dev.specialty}</div>
      <div class="dev-badges">
        ${statusBadge(dev.status)}
        ${dev.skills.slice(0,3).map(s=>`<span class="badge badge-cyan">${s}</span>`).join('')}
      </div>
      <div class="dev-score-row">
        <div class="dev-score-num ${scoreClass(dev.score)}">${dev.score}</div>
        <div class="score-bar" style="max-width:80px">
          <div class="score-bar-fill" style="width:${dev.score}%;background:${scoreBarColor(dev.score)}"></div>
        </div>
      </div>
      <div class="dev-stats-row">
        <div class="dev-stat"><strong>${dev.projects}</strong><br>Projects</div>
        <div class="dev-stat"><strong>${dev.loc}K</strong><br>Lines</div>
        <div class="dev-stat"><strong>${dev.commits}</strong><br>Commits</div>
        <div class="dev-stat"><strong>${dev.yoe}y</strong><br>Exp</div>
      </div>
      <div class="dev-card-actions">
        <button class="btn-green btn-sm" onclick="event.stopPropagation();openDevModal(${dev.id})">View Profile</button>
        <button class="btn-outline btn-sm" onclick="event.stopPropagation();verifyDev(${dev.id})">Verify</button>
        ${!isRecruiter ? `<button class="btn-sm" onclick="event.stopPropagation();startInterview(${dev.id})" style="background:linear-gradient(135deg,#a78bfa,#7c3aed);color:#fff;border:none;border-radius:9px;padding:5px 12px;font-weight:700;font-size:12px;cursor:pointer;font-family:'Inter',sans-serif">🎯 Interview</button>` : ''}
      </div>
    </div>
  </div>`;
}

function renderProfiles(devs = null) {
  const role = currentUser ? currentUser.role : 'recruiter';
  const list = devs || getFilteredDevs(currentSearch, currentFilter);
  const grid = document.getElementById('profilesGrid');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="no-results"><h3>No developers found</h3><p>Try a different search or filter.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(dev => renderDevCard(dev, role)).join('');
}

function getFilteredDevs(searchTerm, filterStatus) {
  const q = (searchTerm || '').toLowerCase();
  const f = filterStatus || 'all';
  return DEVS.filter(dev => {
    const matchQ = !q ||
      dev.name.toLowerCase().includes(q) ||
      dev.skills.some(s => s.toLowerCase().includes(q)) ||
      dev.location.toLowerCase().includes(q) ||
      dev.specialty.toLowerCase().includes(q) ||
      dev.status.toLowerCase().includes(q);
    const matchF = f === 'all' || dev.status === f;
    return matchQ && matchF;
  });
}

/* ── Developer search ── */
function filterDevs() {
  const q = document.getElementById('searchInput').value.trim();
  currentSearch = q;
  const results = document.getElementById('devSearchResults');
  const grid = document.getElementById('devSearchGrid');
  const label = document.getElementById('devSearchResultLabel');
  if (!q) {
    results.style.display = 'none';
    return;
  }
  const devs = getFilteredDevs(q, 'all');
  label.textContent = `${devs.length} result${devs.length !== 1 ? 's' : ''} for "${q}"`;
  grid.innerHTML = devs.length
    ? devs.map(dev => renderDevCard(dev, 'developer')).join('')
    : `<div class="no-results"><h3>No developers found</h3><p>Try a different search term.</p></div>`;
  results.style.display = '';
}

function clearDevSearch() {
  document.getElementById('searchInput').value = '';
  currentSearch = '';
  document.getElementById('devSearchResults').style.display = 'none';
}

function quickSearch(q) {
  document.getElementById('searchInput').value = q;
  currentSearch = q;
  filterDevs();
  document.getElementById('devSearch').scrollIntoView({ behavior: 'smooth' });
}

/* ── Recruiter search ── */
function filterDevsRec() {
  const q = document.getElementById('searchInputRec').value.trim();
  currentSearchRec = q;
  const results = document.getElementById('recSearchResults');
  const grid = document.getElementById('recSearchGrid');
  const label = document.getElementById('recSearchResultLabel');
  if (!q) {
    results.style.display = 'none';
    return;
  }
  const devs = getFilteredDevs(q, 'all');
  label.textContent = `${devs.length} result${devs.length !== 1 ? 's' : ''} for "${q}"`;
  grid.innerHTML = devs.length
    ? devs.map(dev => renderDevCard(dev, 'recruiter')).join('')
    : `<div class="no-results"><h3>No developers found</h3><p>Try a different search term.</p></div>`;
  results.style.display = '';
}

function clearRecSearch() {
  document.getElementById('searchInputRec').value = '';
  currentSearchRec = '';
  document.getElementById('recSearchResults').style.display = 'none';
}

function quickSearchRec(q) {
  document.getElementById('searchInputRec').value = q;
  currentSearchRec = q;
  filterDevsRec();
  document.getElementById('recSearch').scrollIntoView({ behavior: 'smooth' });
}

function applyFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProfiles();
}

/* ── VERIFY BUTTON ──────────────────────────────────────── */
function verifyDev(id) {
  const dev = DEVS.find(d=>d.id===id);
  if (!dev) return;
  if (dev.status === 'fraud') {
    showToast(`⚠ ${dev.name} is flagged as FRAUD. Do not hire.`, 'error');
  } else if (dev.status === 'verified') {
    showToast(`✓ ${dev.name} is Verified! Score: ${dev.score}/100`, 'success');
  } else {
    showToast(`📉 ${dev.name} has low code activity. Score: ${dev.score}/100`, 'info');
  }
}

/* ── DEV MODAL ──────────────────────────────────────────── */
function openDevModal(id) {
  const dev = DEVS.find(d => d.id === id);
  if (!dev) return;
  const isFraud = dev.status === 'fraud';
  const modal = document.getElementById('devModal');
  const content = document.getElementById('devModalContent');

  const heatHtml = dev.heat.map(v => {
    const max = Math.max(...dev.heat, 1);
    const alpha = 0.05 + (v/max) * 0.9;
    return `<div class="heatmap-cell" title="${v} commits" style="background:rgba(34,197,94,${alpha.toFixed(2)})"></div>`;
  }).join('');

  content.innerHTML = `
    <div class="modal-header" style="background:${isFraud?'rgba(239,68,68,0.1)':'var(--card)'}">
      <h3>${isFraud?'⚠ FRAUD: ':''}${dev.name}</h3>
      <button class="icon-btn" onclick="document.getElementById('devModal').classList.remove('open')">×</button>
    </div>
    ${isFraud ? `<div style="background:rgba(239,68,68,0.12);border-bottom:1px solid rgba(239,68,68,0.3);padding:12px 20px;display:flex;gap:10px;align-items:center">
      <span style="font-size:24px">⚠</span>
      <div><div style="font-weight:800;color:var(--red);font-size:15px">FRAUD ACCOUNT DETECTED</div>
      <div style="font-size:12px;color:#fca5a5;margin-top:2px">Zero real commit history. Claims are fabricated. Do not proceed.</div></div>
    </div>` : ''}
    <div class="modal-banner" style="background:${isFraud?'linear-gradient(135deg,rgba(239,68,68,0.3),rgba(239,68,68,0.05))':
      `linear-gradient(135deg,${dev.color}40,${dev.color}10)`}"></div>
    <div class="modal-avatar-row">
      <div class="modal-avatar" style="background:${dev.color}22;color:${dev.color}">${dev.initials}</div>
      <div>${statusBadge(dev.status)}</div>
    </div>
    <div class="modal-info">
      <div class="modal-name" style="color:${isFraud?'var(--red)':'var(--text)'}">${dev.name}</div>
      <div class="modal-sub">${dev.title} · ${dev.location}</div>
      <div class="modal-sub" style="margin-top:4px">⚡ ${dev.specialty} · ${dev.yoe} years experience</div>
      <div class="modal-bio">${dev.bio}</div>
      <div class="modal-skills">
        ${dev.skills.map(s=>`<span class="badge ${isFraud?'badge-red':'badge-cyan'}">${s}</span>`).join('')}
      </div>
    </div>
    <div class="modal-stat-grid">
      ${[
        {l:'Credibility', v:dev.score+'/100', c: isFraud?'var(--red)':dev.score>=75?'var(--green)':'var(--yellow)'},
        {l:'Projects', v:dev.projects, c:'var(--cyan)'},
        {l:'Lines of Code', v:dev.loc+'K', c:'var(--purple)'},
        {l:'Commits', v:dev.commits, c:'var(--blue)'},
        {l:'Stars', v:dev.stars, c:'var(--yellow)'},
        {l:'YoE', v:dev.yoe+'y', c:'var(--green)'},
      ].map(s=>`
        <div class="modal-stat-box" style="border-top-color:${s.c}">
          <div class="modal-stat-val" style="color:${s.c}">${s.v}</div>
          <div class="modal-stat-lbl">${s.l}</div>
        </div>
      `).join('')}
    </div>
    <div style="padding:0 20px 8px"><div style="font-size:13px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Commit Heatmap (Last 30 Days)</div></div>
    <div class="heatmap-row">${heatHtml}</div>
    <div class="modal-projects">
      <div style="font-size:13px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">Projects</div>
      ${dev.projectList.map(p=>`
        <div class="modal-proj" style="border-left-color:${isFraud?'var(--red)':'var(--green)'}">
          <div class="modal-proj-name">${p.name}</div>
          <div class="modal-proj-desc">${p.desc}</div>
          <div class="modal-proj-meta">
            <span style="background:rgba(34,197,94,.1);color:var(--green);padding:2px 8px;border-radius:99px;font-weight:700">${p.lang}</span>
            <span>★ ${p.stars.toLocaleString()} stars</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="padding:0 20px 20px;display:flex;gap:10px;flex-wrap:wrap">
      ${isFraud
        ? `<button class="btn-danger" onclick="showToast('Fraud report submitted. Account flagged for review.','error');document.getElementById('devModal').classList.remove('open')">🚨 Report Fraud</button>`
        : `<button class="btn-green" onclick="verifyDev(${dev.id});document.getElementById('devModal').classList.remove('open')">✓ Verify Developer</button>`
      }
      <button class="btn-outline" onclick="document.getElementById('devModal').classList.remove('open')">Close</button>
    </div>
  `;
  modal.classList.add('open');
}

function closeDevModal(e) {
  if (e.target === document.getElementById('devModal')) {
    document.getElementById('devModal').classList.remove('open');
  }
}

/* ── SIGN OUT ────────────────────────────────────────────── */
function doSignOut() {
  currentUser = null;
  selectedRole = null;
  currentSearch = '';
  currentSearchRec = '';
  const hu = document.getElementById('headerUser');
  if (hu) hu.remove();
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPass').value  = '';
  // Hide role views
  document.getElementById('developerView').style.display = 'none';
  document.getElementById('recruiterView').style.display = 'none';
  // Reset sign-in to role select step
  document.getElementById('roleSelectStep').style.display = '';
  document.getElementById('authStep').style.display = 'none';
  document.getElementById('roleCardDev').classList.remove('role-card-active');
  document.getElementById('roleCardRec').classList.remove('role-card-active');
  const btn = document.getElementById('roleNextBtn');
  btn.style.opacity = '.4';
  btn.style.pointerEvents = 'none';
  // Show sign-in overlay
  const overlay = document.getElementById('signInOverlay');
  overlay.style.display = '';
  overlay.style.animation = 'fadeIn .3s ease';
  document.getElementById('settingsModal').classList.remove('open');
  showToast('Signed out successfully. See you soon! 👋', 'info');
}

/* ── UPLOAD / ANALYZE → triggers quiz inline ──────────────────── */
function analyzeProject() {
  const name = document.getElementById('uName').value.trim();
  const url  = document.getElementById('uUrl').value.trim();
  const lang = document.getElementById('uLang').value;
  const desc = document.getElementById('uDesc').value.trim();

  if (!name) { showToast('Please enter the developer name', 'error'); return; }
  if (!url)  { showToast('Please enter a GitHub repository URL', 'error'); return; }
  if (!url.startsWith('http')) { showToast('Enter a valid URL starting with https://', 'error'); return; }
  if (!currentUser) { showToast('Please sign in before analyzing a project', 'error'); return; }

  const result = document.getElementById('analyzeResult');
  result.innerHTML = `
    <div style="text-align:center;padding:48px 20px;color:var(--text3)">
      <div class="spinner" style="width:40px;height:40px;margin:0 auto 16px;border-width:3px"></div>
      <div style="font-size:15px;font-weight:700;margin-bottom:6px">Scanning repository…</div>
      <div style="font-size:12px">Fetching commit history, tech stack, code complexity</div>
    </div>`;

  // After "scan" — auto-launch quiz immediately (no extra button click needed)
  setTimeout(() => {
    showToast('Repository scanned — launching quiz now!', 'success');
    // Small delay so user sees the toast then quiz launches
    setTimeout(() => launchProjectQuiz(name, lang, url, desc), 600);
  }, 2000);
}

/* ══════════════════════════════════════════════════════════
   PROJECT QUIZ ENGINE
══════════════════════════════════════════════════════════ */
const QUIZ_BANK = {
  Go: [
    { type:'Fix the Bug', q:'This Go function should return the sum of a slice, but always returns 0. What is wrong?',
      code:`func sum(nums []int) int {
  total := 0
  for i := 0; i < len(nums); i++ {
    total == nums[i]  // ← BUG
  }
  return total
}`,
      opts:['`==` should be `+=` (assignment vs comparison)','`len(nums)` should be `cap(nums)`','Function should return `float64`','Missing `defer` statement'], ans:0 },
    { type:'Identify the Error', q:'This Go code has a critical resource-management bug. What is it?',
      code:`func readFile(path string) string {
  f, _ := os.Open(path)
  data, _ := ioutil.ReadAll(f)
  return string(data)
}`,
      opts:['File `f` is never closed — resource/goroutine leak','`ioutil.ReadAll` is the bug','`os.Open` does not work for binary files','`string(data)` causes a nil-pointer panic'], ans:0 },
    { type:'Suggest Optimization', q:'This duplicate-check runs in O(n²). What is the best way to make it O(n)?',
      code:`func hasDuplicate(arr []int) bool {
  for i := 0; i < len(arr); i++ {
    for j := i+1; j < len(arr); j++ {
      if arr[i] == arr[j] { return true }
    }
  }
  return false
}`,
      opts:['Use a `map[int]bool` to track seen values in one pass','Sort the array first with O(n log n)','Use `sync.Map` for thread safety','Increase the outer loop step to 2'], ans:0 },
    { type:'Explain the Function', q:'What does this Go code print?',
      code:`func fibonacci(n int) int {
  if n <= 1 { return n }
  return fibonacci(n-1) + fibonacci(n-2)
}
func main() { fmt.Println(fibonacci(7)) }`,
      opts:['13','21','8','34'], ans:0 },
  ],
  Python: [
    { type:'Fix the Bug', q:'This function removes duplicates from a list but crashes on an empty input. Why?',
      code:`def first_unique(lst):
  seen = set()
  for item in lst:
    if item not in seen:
      seen.add(item)
  return seen.pop()  # BUG on empty input`,
      opts:['`set.pop()` raises `KeyError` if `seen` is empty — add a guard','`seen` should be a `list` not a `set`','`item not in seen` should be `item in seen`','`seen.add(item)` should be `seen.append(item)`'], ans:0 },
    { type:'Suggest Optimization', q:'This prime-check runs in O(n). What is the optimal improvement?',
      code:`def is_prime(n):
  if n < 2: return False
  for i in range(2, n):
    if n % i == 0: return False
  return True`,
      opts:['Loop only up to √n — reduces to O(√n)','Use `functools.lru_cache` for memoization','Use a lookup dictionary of known primes','Replace `range` with a `while` loop'], ans:0 },
    { type:'Identify the Error', q:'This async function has a blocking call inside it. What is the issue?',
      code:`import asyncio, requests

async def fetch(url):
  response = requests.get(url)  # ← BUG
  return response.json()

asyncio.run(fetch("https://api.example.com"))`,
      opts:['`requests.get` is synchronous/blocking — use `aiohttp` or `httpx`','`asyncio.run` cannot call async functions','`response.json()` must be awaited','Missing `async with` statement'], ans:0 },
    { type:'Explain the Function', q:'What does this Python decorator do?',
      code:`def retry(times=3):
  def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
      for attempt in range(times):
        try:
          return func(*args, **kwargs)
        except Exception as e:
          if attempt == times-1: raise e
    return wrapper
  return decorator`,
      opts:['Retries the function up to `times` attempts on exception','Limits the function to 3 calls per second','Caches results for 3 seconds','Validates arguments before each call'], ans:0 },
    { type:'Fix the Bug', q:'This code has a common Python mutable-default-argument bug. Identify it.',
      code:`def append_to(element, lst=[]):  # BUG
  lst.append(element)
  return lst

print(append_to(1))  # [1]
print(append_to(2))  # ???`,
      opts:['Default mutable argument `lst=[]` is shared across all calls — use `lst=None` and init inside','`lst.append` should be `lst += [element]`','`return lst` should be `return lst.copy()`','No bug — prints `[1]` then `[2]`'], ans:0 },
  ],
  TypeScript: [
    { type:'Fix the Bug', q:'This TypeScript function has a null-safety issue. What is wrong?',
      code:`interface User { id: number; name: string; email?: string; }

function greet(user: User): string {
  return "Hello, " + user.email.toUpperCase(); // BUG
}`,
      opts:['`email` is optional — calling `.toUpperCase()` without null-check causes runtime error','`id` should be typed as `string`','Return type should be `void`','`interface` should be `type`'], ans:0 },
    { type:'Identify the Error', q:'What will happen at the marked line?',
      code:`type RO = Readonly<{ id: number; name: string }>;
const u: RO = { id: 1, name: 'Arjun' };
u.name = 'Rahul'; // ← What happens?`,
      opts:['TypeScript compile error — `name` is readonly','Silent runtime failure','Works fine in non-strict mode','`Readonly` only applies to top-level keys'], ans:0 },
    { type:'Suggest Optimization', q:'How can you type this function to be safer and avoid the `any` escape hatch?',
      code:`function getProperty(obj: any, key: string): any {
  return obj[key];
}`,
      opts:['Use generics: `<T, K extends keyof T>(obj: T, key: K): T[K]`','Use `unknown` instead of `any`','Use `object` type instead of `any`','Add `as const` to the return value'], ans:0 },
  ],
  React: [
    { type:'Fix the Bug', q:'This React component causes an infinite re-render loop. What is the cause?',
      code:`function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users').then(r=>r.json()).then(setUsers);
  }); // ← BUG: no dependency array
  return <ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
}`,
      opts:['Missing `[]` dependency array — `useEffect` runs after every render causing infinite fetch loop','`useState([])` should be `useState(null)`','`fetch` is not allowed in `useEffect`','`key` prop should use array index, not `u.id`'], ans:0 },
    { type:'Identify the Error', q:'What performance issue does this component have?',
      code:`function Parent({ items }) {
  const handleClick = () => console.log('clicked');
  return items.map(i =>
    <Child key={i.id} item={i} onClick={handleClick}/>
  );
}`,
      opts:['`handleClick` is recreated every render — wrap in `useCallback` to prevent unnecessary Child re-renders','`items.map` should be inside `useMemo`','`key` should not use `i.id`','No issue — this is correct React code'], ans:0 },
  ],
  Rust: [
    { type:'Fix the Bug', q:'This Rust code fails to compile. What is the ownership error?',
      code:`fn main() {
  let s1 = String::from("hello");
  let s2 = s1;           // move happens here
  println!("{}", s1);    // BUG
}`,
      opts:['`s1` has been moved into `s2` — use `s1.clone()` to keep both','`String::from` is not allowed in main','`println!` macro cannot print `String` type','Add `mut` keyword to `s1`'], ans:0 },
    { type:'Identify the Error', q:'What does this Rust function actually return?',
      code:`fn add(x: i32, y: i32) -> i32 {
  x + y;   // ← note the semicolon
}`,
      opts:['Compile error — semicolon makes the expression a statement, returning `()` instead of `i32`','Returns 0 (default integer)','Returns the sum correctly','Runtime panic when called'], ans:0 },
  ],
  Dart: [
    { type:'Fix the Bug', q:'This Flutter widget crashes at runtime. What is wrong?',
      code:`class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final ctrl = AnimationController(
      vsync: this,  // BUG
      duration: Duration(seconds: 2),
    );
    return Container();
  }
}`,
      opts:['`StatelessWidget` cannot be a `TickerProvider` — use `SingleTickerProviderStateMixin` in a `StatefulWidget`','`AnimationController` must be declared `const`','`Duration` syntax is incorrect','Missing `super.build(context)` call'], ans:0 },
  ],
  Solidity: [
    { type:'Identify the Error', q:'This Solidity withdraw function is vulnerable to a well-known attack. Identify it.',
      code:`contract Bank {
  mapping(address => uint) bal;
  function withdraw(uint amount) public {
    require(bal[msg.sender] >= amount);
    (bool ok,) = msg.sender.call{value: amount}("");
    require(ok);
    bal[msg.sender] -= amount;  // BUG: too late!
  }
}`,
      opts:['Reentrancy — balance must be decremented BEFORE the external `.call`','Missing `payable` modifier','Integer underflow in subtraction','`msg.sender.call` is deprecated'], ans:0 },
  ],
  'C++': [
    { type:'Identify the Error', q:'This C++ function has a classic memory safety bug. What is it?',
      code:`int* makeArray(int size) {
  int arr[size];                // Stack allocation
  for (int i=0; i<size; i++) arr[i] = i;
  return arr;                   // BUG
}`,
      opts:['Returning a pointer to stack memory — undefined behaviour after function returns','`int arr[size]` is invalid C++','Missing `new` keyword','`size` should be `const`'], ans:0 },
  ],
  default: [
    { type:'Fix the Bug', q:'This binary search always returns -1 on a valid target. What is the bug?',
      code:`function binarySearch(arr, target) {
  let lo = 0, hi = arr.length;    // BUG: should be length-1
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
      opts:['`hi` should be `arr.length - 1`, not `arr.length` (off-by-one)','`lo <= hi` should be `lo < hi`','`Math.floor` should be `Math.ceil`','`mid + 1` should be `mid + 2`'], ans:0 },
    { type:'Suggest Optimization', q:'What is the time complexity of bubble sort and what should replace it for large data?',
      code:`function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n-i-1; j++)
      if (arr[j] > arr[j+1])
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  return arr;
}`,
      opts:['O(n²) — replace with merge sort O(n log n) or quicksort','O(n log n) — already optimal','O(n) — already linear','O(n³) — needs two less nested loops'], ans:0 },
    { type:'Identify the Error', q:'This SQL query tries to find users with no orders but returns no rows. Why?',
      code:`SELECT u.id, u.name
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;`,
      opts:['INNER JOIN excludes users with no orders — must use LEFT JOIN','`WHERE o.id IS NULL` should be `WHERE u.id IS NULL`','Should be `CROSS JOIN`','The query is correct as written'], ans:0 },
    { type:'Explain the Function', q:'What design pattern does this code implement?',
      code:`class EventBus {
  _subs = {};
  on(event, fn) {
    (this._subs[event] = this._subs[event] || []).push(fn);
  }
  emit(event, data) {
    (this._subs[event] || []).forEach(fn => fn(data));
  }
}`,
      opts:['Observer / Pub-Sub (publish-subscribe) pattern','Singleton pattern','Factory / Builder pattern','Strategy / Command pattern'], ans:0 },
    { type:'Fix the Bug', q:'This JavaScript async function swallows errors silently. What is wrong?',
      code:`async function loadUser(id) {
  const res = await fetch('/api/users/' + id);
  const data = await res.json();  // BUG if res.ok is false
  return data;
}`,
      opts:['Missing `if (!res.ok) throw new Error(...)` check — non-2xx responses are not automatically errors with `fetch`','`await fetch(...)` should be inside try/catch','`res.json()` should be `res.text()`','`async` functions cannot use `fetch`'], ans:0 },
  ],
};

/* ── Quiz state ── */
let QZ = {
  devName:'', lang:'', url:'', questions:[],
  current:0, score:0, timer:null, timeLeft:10, answers:[], active:false
};

function launchProjectQuiz(devName, lang, url, desc) {
  // Build question pool from language + defaults
  let pool = [];
  const key = Object.keys(QUIZ_BANK).find(k => lang.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(lang.toLowerCase()));
  if (key && QUIZ_BANK[key]) pool.push(...QUIZ_BANK[key]);
  pool.push(...QUIZ_BANK.default);
  pool = pool.sort(() => Math.random() - .5);

  QZ = {
    devName, lang, url,
    questions: pool.slice(0, 6),
    current:0, score:0, timer:null, timeLeft:10, answers:[], active:true
  };

  qzLockNav();
  document.getElementById('quizOverlay').classList.add('active');
  document.getElementById('quizDevLabel').textContent = `Developer: ${devName} · ${lang}`;
  qzRenderQuestion();
}

function qzRenderQuestion() {
  const q = QZ.questions[QZ.current];
  if (!q) { qzEnd(); return; }

  const total = QZ.questions.length;
  document.getElementById('quizProgressBar').style.width = `${(QZ.current / total) * 100}%`;
  document.getElementById('quizQNum').textContent = `Q ${QZ.current + 1} of ${total}`;
  document.getElementById('quizTypeBadge').textContent = q.type;
  document.getElementById('quizQuestion').textContent = q.q;
  document.getElementById('quizScoreOf').textContent = QZ.current;
  document.getElementById('quizScoreNum').textContent = QZ.score;

  // Code block
  const cw = document.getElementById('quizCodeWrap');
  if (q.code) { cw.style.display = ''; document.getElementById('quizCode').textContent = q.code; }
  else          { cw.style.display = 'none'; }

  // Options vs textarea
  const optDiv = document.getElementById('quizOptions');
  const taDiv  = document.getElementById('quizTextWrap');
  if (q.opts) {
    optDiv.style.display = ''; taDiv.style.display = 'none';
    optDiv.innerHTML = q.opts.map((opt, i) => `
      <button class="quiz-opt" onclick="qzSelectOpt(this,${i})">
        <span class="opt-letter">${String.fromCharCode(65+i)}</span>
        <span>${opt}</span>
      </button>`).join('');
  } else {
    optDiv.style.display = 'none'; taDiv.style.display = '';
    document.getElementById('quizTextAns').value = '';
  }

  qzStartTimer();
}

function qzStartTimer() {
  clearInterval(QZ.timer);
  QZ.timeLeft = 10;  // 10 seconds per question
  const el = document.getElementById('quizTimerVal');
  el.textContent = 10;
  el.className = 'green-time';

  QZ.timer = setInterval(() => {
    QZ.timeLeft--;
    el.textContent = Math.max(0, QZ.timeLeft);
    if (QZ.timeLeft > 6)       el.className = 'green-time';
    else if (QZ.timeLeft > 3)  el.className = 'yellow-time';
    else                        el.className = 'blink';

    if (QZ.timeLeft <= 0) {
      clearInterval(QZ.timer);
      QZ.answers.push({ q: QZ.questions[QZ.current].q, type: QZ.questions[QZ.current].type, correct:false, timedOut:true });
      showToast('⏱ Time up! Next question.', 'error');
      QZ.current++;
      setTimeout(() => qzRenderQuestion(), 400);
    }
  }, 1000);
}

function qzSelectOpt(btn, idx) {
  document.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.chosen = idx;
}

function quizSubmit() {
  const q = QZ.questions[QZ.current];
  const opts = document.querySelectorAll('.quiz-opt');
  let chosen = -1, correct = false;

  if (q.opts) {
    opts.forEach((b, i) => { if (b.classList.contains('selected')) chosen = i; });
    if (chosen === -1) { showToast('Please select an answer first', 'error'); return; }
    correct = (chosen === q.ans);
    // Visual feedback then move on
    opts.forEach((b, i) => {
      b.disabled = true;
      if (i === q.ans) b.classList.add('correct');
      else if (i === chosen && !correct) b.classList.add('wrong');
    });
  } else {
    const ans = document.getElementById('quizTextAns').value.trim();
    if (!ans) { showToast('Please type your answer', 'error'); return; }
    chosen = ans;
    correct = ans.length > 25; // credit non-trivial text answers
  }

  if (correct) QZ.score++;
  QZ.answers.push({ q: q.q, type: q.type, chosen, correct, timedOut:false });
  document.getElementById('quizScoreNum').textContent = QZ.score;
  clearInterval(QZ.timer);
  setTimeout(() => { QZ.current++; qzRenderQuestion(); }, 1100);
}

function quizSkip() {
  QZ.answers.push({ q: QZ.questions[QZ.current]?.q, type: QZ.questions[QZ.current]?.type, correct:false, timedOut:false, skipped:true });
  clearInterval(QZ.timer);
  QZ.current++;
  qzRenderQuestion();
}

function qzEnd() {
  clearInterval(QZ.timer);
  document.getElementById('quizProgressBar').style.width = '100%';

  const total   = QZ.questions.length;
  const pct     = Math.round((QZ.score / total) * 100);
  const passed  = pct >= 50;
  const color   = passed ? 'var(--green)' : 'var(--red)';
  const verdict = passed ? '✓ Verification Passed' : '✕ Verification Denied';
  const ringPct = `${pct * 3.6}deg`;

  // Update the analyse result card
  document.getElementById('analyzeResult').innerHTML = `
    <div style="animation:fadeIn .4s ease;text-align:center">
      <div style="font-size:13px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:16px">Verification Report — ${QZ.devName}</div>
      <div style="width:100px;height:100px;border-radius:50%;background:conic-gradient(${color} ${ringPct},var(--bg2) 0);display:flex;align-items:center;justify-content:center;position:relative;margin:0 auto 16px">
        <div style="position:absolute;inset:8px;border-radius:50%;background:var(--card2)"></div>
        <div style="position:relative;font-size:22px;font-weight:900;color:${color};font-family:'JetBrains Mono',monospace">${pct}%</div>
      </div>
      <div style="font-size:18px;font-weight:900;color:${color};margin-bottom:6px">${verdict}</div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${QZ.score}/${total} correct · ${QZ.lang} quiz</div>
      ${passed
        ? `<div class="verified-stamp">✓ Developer Verified on Veriffy</div>`
        : `<div class="denied-stamp">✕ Does not meet verification threshold (50%)</div>`
      }
      <div style="margin-top:16px;display:flex;flex-direction:column;gap:6px;text-align:left">
        ${QZ.answers.map((a,i)=>`
          <div style="display:flex;gap:8px;padding:8px 12px;border-radius:8px;background:var(--bg2);border:1px solid var(--border);font-size:12px">
            <span style="flex-shrink:0;font-size:15px">${a.correct?'✅':a.timedOut?'⏱':a.skipped?'⏭':'❌'}</span>
            <div>
              <div style="font-weight:700;color:var(--text)">Q${i+1}: ${a.type||''}</div>
              <div style="color:var(--text3);margin-top:1px">${(a.q||'').slice(0,70)}…</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  // Show result overlay
  const ro = document.getElementById('quizResultOverlay');
  ro.classList.add('show');
  document.getElementById('quizResultInner').innerHTML = `
    <div class="qr-ring" style="border:4px solid ${color};box-shadow:0 0 36px ${color}55">
      <div class="qr-ring-score" style="color:${color}">${pct}%</div>
      <div class="qr-ring-sub">${QZ.score}/${total} correct</div>
    </div>
    <div class="qr-verdict" style="color:${color}">${verdict}</div>
    <div class="qr-sub">${QZ.devName} · ${QZ.lang} · ${passed ? 'Meets the 50% verification threshold' : 'Below the 50% threshold — verification denied'}</div>
    ${passed ? `<div class="verified-stamp" style="margin:0 auto">✓ Officially Verified on Veriffy</div>` : `<div class="denied-stamp" style="margin:0 auto">✕ Cannot be verified — needs more practice</div>`}
    <div class="qr-review" style="margin-top:18px">
      ${QZ.answers.map((a,i)=>`
        <div class="qr-row">
          <span class="qr-icon">${a.correct?'✅':a.timedOut?'⏱':a.skipped?'⏭':'❌'}</span>
          <div>
            <div style="font-weight:700;color:var(--text);font-size:12px">Q${i+1}: ${a.type||'Question'}</div>
            <div style="color:var(--text3);font-size:11px;margin-top:2px">${(a.q||'').slice(0,80)}…</div>
            <div style="font-size:10px;margin-top:3px;font-weight:700;color:${a.correct?'var(--green)':a.timedOut?'var(--yellow)':'var(--red)'}">${a.correct?'Correct':a.timedOut?'Timed out':a.skipped?'Skipped':'Incorrect'}</div>
          </div>
        </div>`).join('')}
    </div>`;

  const pb = document.getElementById('quizResultPrimaryBtn');
  pb.className = passed ? 'btn-green' : 'btn-danger';
  pb.textContent = passed ? '✓ Done — Close' : '↺ Close & Retry';
  pb.onclick = function() { closeQuiz(); };

  qzUnlockNav();
  QZ.active = false;
  showToast(passed ? `✓ ${QZ.devName} passed verification!` : `✕ ${QZ.devName} failed — score ${pct}%`, passed ? 'success' : 'error');
}

function closeQuiz() {
  const quizOverlay = document.getElementById('quizOverlay');
  const resultOverlay = document.getElementById('quizResultOverlay');
  quizOverlay.classList.remove('active');
  resultOverlay.classList.remove('show');
  // Force hide in case classList didn't work
  quizOverlay.style.display = 'none';
  resultOverlay.style.display = 'none';
  // Reset display via class toggle after a tick so CSS transitions work next time
  setTimeout(() => {
    quizOverlay.style.display = '';
    resultOverlay.style.display = '';
  }, 50);
  clearInterval(QZ.timer);
  qzUnlockNav();
  QZ.active = false;
  // Reset analyze form placeholder
  const analyzeResult = document.getElementById('analyzeResult');
  if (analyzeResult) {
    analyzeResult.innerHTML = `
      <div class="analyze-placeholder">
        <div style="font-size:48px;">✓</div>
        <p style="margin-top:12px;color:var(--green);font-weight:700">Quiz complete! Fill in new details to analyze another project.</p>
      </div>`;
  }
}

/* ── Nav lock / unlock for quiz ── */
function qzLockNav() {
  window.addEventListener('beforeunload', qzBeforeUnload);
  document.addEventListener('visibilitychange', qzVisChange);
  history.pushState(null, '', location.href);
  window.addEventListener('popstate', qzPopState);
  document.querySelectorAll('.nav-a').forEach(a => { a.style.pointerEvents='none'; a.style.opacity='.3'; });
}
function qzUnlockNav() {
  window.removeEventListener('beforeunload', qzBeforeUnload);
  document.removeEventListener('visibilitychange', qzVisChange);
  window.removeEventListener('popstate', qzPopState);
  document.querySelectorAll('.nav-a').forEach(a => { a.style.pointerEvents=''; a.style.opacity=''; });
}
function qzBeforeUnload(e) {
  e.preventDefault(); e.returnValue = 'Quiz in progress! Leaving will forfeit your results.';
  return e.returnValue;
}
function qzVisChange() {
  if (document.hidden && QZ.active) {
    const b = document.getElementById('quizTabBanner');
    b.classList.add('show');
    showToast('⚠ Tab switch detected! Your session is being monitored.', 'error');
    setTimeout(() => b.classList.remove('show'), 5000);
  }
}
function qzPopState() {
  history.pushState(null, '', location.href);
  showToast('⚠ Navigation blocked during quiz!', 'error');
}

/* ── FAQ ───────────────────────────────────────────────── */
function renderFAQ() {
  const grid = document.getElementById('faqGrid');
  grid.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFAQ(this)">
        <span>${f.q}</span>
        <span class="arrow">▼</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(el) {
  const ans = el.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-q').forEach(q=>q.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a=>a.classList.remove('open'));
  if (!isOpen) {
    el.classList.add('open');
    ans.classList.add('open');
  }
}

function renderFAQDev() {
  const grid = document.getElementById('faqGridDev');
  if (!grid) return;
  grid.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFAQ(this)">
        <span>${f.q}</span>
        <span class="arrow">▼</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

/* ── Developer-view search (voice only here, text handled above) ── */

function startVoiceRec() {
  const btn = document.getElementById('voiceBtnRec');
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Voice search is not supported in this browser. Try Chrome.', 'error');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-IN';
  rec.interimResults = false;
  btn.classList.add('listening');
  showToast('🎙 Listening… speak now', 'info');
  rec.onresult = e => {
    const t = e.results[0][0].transcript;
    document.getElementById('searchInputRec').value = t;
    currentSearchRec = t;
    filterDevsRec();
    showToast(`Searched: "${t}"`, 'success');
  };
  rec.onerror = () => showToast('Voice input error. Try again.', 'error');
  rec.onend = () => btn.classList.remove('listening');
  rec.start();
}

/* ── Developer chat (separate from recruiter chat) ── */
function sendChatDev() {
  const input = document.getElementById('chatInputDev');
  const q = input.value.trim();
  if (!q) return;
  appendMsgTo(q, 'user', 'chatMessagesDev');
  input.value = '';
  setTimeout(() => {
    const ans = getAIAnswer(q);
    appendMsgTo(ans, 'bot', 'chatMessagesDev');
  }, 600);
}

function askSuggestionDev(el) {
  document.getElementById('chatInputDev').value = el.textContent;
  sendChatDev();
}

function startVoiceChatDev() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Voice input not supported in this browser.', 'error');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-IN';
  rec.interimResults = false;
  showToast('🎙 Listening for your question…', 'info');
  rec.onresult = e => {
    document.getElementById('chatInputDev').value = e.results[0][0].transcript;
    sendChatDev();
  };
  rec.onerror = () => showToast('Voice error. Try again.', 'error');
  rec.start();
}

function appendMsgTo(text, role, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = `
    <div class="chat-avatar">${role === 'bot' ? '✓' : '👤'}</div>
    <div class="chat-bubble">${text}</div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ── Recruiter project analyzer (no quiz, just report) ── */
function analyzeProjectRec() {
  const name = document.getElementById('uNameRec').value.trim();
  const url  = document.getElementById('uUrlRec').value.trim();
  const lang = document.getElementById('uLangRec').value;
  const desc = document.getElementById('uDescRec').value.trim();

  if (!name) { showToast('Please enter the developer name', 'error'); return; }
  if (!url)  { showToast('Please enter a GitHub repository URL', 'error'); return; }
  if (!url.startsWith('http')) { showToast('Enter a valid URL starting with https://', 'error'); return; }

  const result = document.getElementById('analyzeResultRec');
  result.innerHTML = `
    <div style="text-align:center;padding:48px 20px;color:var(--text3)">
      <div class="spinner" style="width:40px;height:40px;margin:0 auto 16px;border-width:3px"></div>
      <div style="font-size:15px;font-weight:700;margin-bottom:6px">Scanning repository…</div>
      <div style="font-size:12px">Fetching commit history, tech stack, code complexity</div>
    </div>`;

  setTimeout(() => {
    // Generate a realistic score based on URL and name length (deterministic-ish for demo)
    const seed = (name.length * 7 + url.length * 3) % 30;
    const score = 55 + seed;
    const passed = score >= 70;
    const color = passed ? 'var(--green)' : score >= 50 ? 'var(--yellow)' : 'var(--red)';
    const verdict = passed ? '✓ Credible Developer' : score >= 50 ? '⚠ Moderate Credibility' : '✕ Low Credibility';
    result.innerHTML = `
      <div style="animation:fadeIn .4s ease;text-align:center">
        <div style="font-size:13px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:16px">Credibility Report — ${name}</div>
        <div style="width:100px;height:100px;border-radius:50%;background:conic-gradient(${color} ${score*3.6}deg,var(--bg2) 0);display:flex;align-items:center;justify-content:center;position:relative;margin:0 auto 16px">
          <div style="position:absolute;inset:8px;border-radius:50%;background:var(--card2)"></div>
          <div style="position:relative;font-size:22px;font-weight:900;color:${color};font-family:'JetBrains Mono',monospace">${score}</div>
        </div>
        <div style="font-size:18px;font-weight:900;color:${color};margin-bottom:6px">${verdict}</div>
        <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${lang} project · ${url.slice(0,30)}…</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:left">
          ${[
            {l:'Language', v:lang, c:'var(--cyan)'},
            {l:'Credibility Score', v:score+'/100', c:color},
            {l:'Code Depth', v: score > 70 ? 'High' : score > 50 ? 'Medium' : 'Low', c:color},
            {l:'Verdict', v: passed ? 'Hire Ready' : 'Needs Review', c:color},
          ].map(s=>`<div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
            <div style="font-size:10px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:.06em">${s.l}</div>
            <div style="font-size:13px;font-weight:700;color:${s.c};margin-top:3px;font-family:'JetBrains Mono',monospace">${s.v}</div>
          </div>`).join('')}
        </div>
      </div>`;
    showToast('Repository scanned — credibility report ready!', 'success');
  }, 2000);
}

/* ── VOICE SEARCH ───────────────────────────────────────── */
function startVoice() {
  const btn = document.getElementById('voiceBtn');
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Voice search is not supported in this browser. Try Chrome.', 'error');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-IN';
  rec.interimResults = false;
  btn.classList.add('listening');
  showToast('🎙 Listening… speak now', 'info');
  rec.onresult = e => {
    const t = e.results[0][0].transcript;
    document.getElementById('searchInput').value = t;
    currentSearch = t;
    filterDevs();
    showToast(`Searched: "${t}"`, 'success');
  };
  rec.onerror = () => showToast('Voice input error. Try again.', 'error');
  rec.onend = () => btn.classList.remove('listening');
  rec.start();
}

/* ── CHAT AI ────────────────────────────────────────────── */
function sendChat() {
  const input = document.getElementById('chatInput');
  const q = input.value.trim();
  if (!q) return;
  appendMsg(q, 'user');
  input.value = '';
  setTimeout(() => {
    const ans = getAIAnswer(q);
    appendMsg(ans, 'bot');
  }, 600);
}

function askSuggestion(el) {
  document.getElementById('chatInput').value = el.textContent;
  sendChat();
}

function getAIAnswer(q) {
  const ql = q.toLowerCase();
  for (const entry of AI_RESPONSES) {
    if (entry.keys.some(k => ql.includes(k))) return entry.ans;
  }
  return "I'm not sure about that one! Try asking about credibility scores, fraud detection, verification, the leaderboard, or voice search. I'm here to help you get the most out of Veriffy.";
}

function appendMsg(text, role) {
  appendMsgTo(text, role, 'chatMessages');
}

function startVoiceChat() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    showToast('Voice input not supported in this browser.', 'error');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-IN';
  rec.interimResults = false;
  showToast('🎙 Listening for your question…', 'info');
  rec.onresult = e => {
    document.getElementById('chatInput').value = e.results[0][0].transcript;
    sendChat();
  };
  rec.onerror = () => showToast('Voice error. Try again.', 'error');
  rec.start();
}

/* ── SETTINGS ───────────────────────────────────────────── */
function openSettings() {
  document.getElementById('settingsModal').classList.add('open');
}
function closeSettings(e) {
  if (e.target === document.getElementById('settingsModal')) {
    document.getElementById('settingsModal').classList.remove('open');
  }
}

function openHelpFromSettings() {
  document.getElementById('settingsModal').classList.remove('open');
  // Scroll to correct help section based on role
  const role = currentUser ? currentUser.role : null;
  let helpEl = null;
  if (role === 'developer') {
    helpEl = document.getElementById('devHelp');
  } else if (role === 'recruiter') {
    helpEl = document.getElementById('recHelp');
  }
  if (helpEl) {
    helpEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    showToast('Please sign in to access Help & FAQ', 'info');
  }
}

/* ── TOAST ──────────────────────────────────────────────── */
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span><span style="flex:1">${msg}</span><span class="toast-close" onclick="this.parentElement.remove()">×</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

/* ── SCROLL ANIMATIONS ──────────────────────────────────── */
function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.5s ease both';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.chart-card,.stat-card,.lb-row,.dev-card,.faq-item').forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════════════════════
   SIGN IN / AUTH
══════════════════════════════════════════════════════════ */
const DEMO_USERS = [
  { email:'dev@veriffy.dev',   pass:'demo1234', name:'Arjun Sharma',   role:'developer'  },
  { email:'recruiter@veriffy.dev', pass:'demo1234', name:'Priya Recruiter', role:'recruiter' },
];
let currentUser = null;
let selectedRole = null; // 'developer' or 'recruiter'

/* ── Role selection ── */
function selectRole(role) {
  selectedRole = role;
  document.getElementById('roleCardDev').classList.toggle('role-card-active', role === 'developer');
  document.getElementById('roleCardRec').classList.toggle('role-card-active', role === 'recruiter');
  const btn = document.getElementById('roleNextBtn');
  btn.style.opacity = '1';
  btn.style.pointerEvents = 'auto';
  // Also pre-select regRole if visible
  const regRoleEl = document.getElementById('regRole');
  if (regRoleEl) regRoleEl.value = role;
}

function proceedToAuth() {
  if (!selectedRole) return;
  document.getElementById('roleSelectStep').style.display = 'none';
  document.getElementById('authStep').style.display = '';
  const isRec = selectedRole === 'recruiter';
  document.getElementById('selectedRoleIcon').textContent = isRec ? '🏢' : '👨‍💻';
  document.getElementById('selectedRoleLabel').textContent = isRec ? 'Recruiter' : 'Developer';
  document.getElementById('selectedRoleDesc').textContent = isRec
    ? 'Find verified talent, spot fraud, hire confidently'
    : 'Verify your skills, build credibility, get hired';
  // sync regRole select
  const regRoleEl = document.getElementById('regRole');
  if (regRoleEl) regRoleEl.value = selectedRole;
}

function backToRoleSelect() {
  document.getElementById('authStep').style.display = 'none';
  document.getElementById('roleSelectStep').style.display = '';
}

function switchAuthTab(tab) {
  document.getElementById('loginForm').style.display    = tab==='login'    ? '' : 'none';
  document.getElementById('registerForm').style.display = tab==='register' ? '' : 'none';
  document.getElementById('tabLogin').classList.toggle('active',   tab==='login');
  document.getElementById('tabRegister').classList.toggle('active', tab==='register');
}

function togglePwd(id, btn) {
  const inp = document.getElementById(id);
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁' : '🙈';
}

document.getElementById('regPass')?.addEventListener('input', function() {
  const v = this.value, bar = document.getElementById('pwdStrength');
  if (!bar) return;
  let str = 0;
  if (v.length >= 8)  str++;
  if (/[A-Z]/.test(v)) str++;
  if (/[0-9]/.test(v)) str++;
  if (/[^a-zA-Z0-9]/.test(v)) str++;
  const colors = ['var(--red)','var(--red)','var(--yellow)','var(--blue)','var(--green)'];
  const labels = ['','Weak','Fair','Good','Strong'];
  bar.style.background = colors[str];
  bar.style.width = (str*25) + '%';
  bar.title = labels[str];
});

function doSignIn() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('Please enter email and password','error'); return; }
  const found = DEMO_USERS.find(u => u.email===email && u.pass===pass) || { email, name: email.split('@')[0], role: selectedRole || 'developer' };
  // Override with selected role if user isn't in demo list
  if (!DEMO_USERS.find(u => u.email===email)) found.role = selectedRole || found.role;
  currentUser = found;
  completeSignIn(found.name, found.role);
}

function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const role  = selectedRole || document.getElementById('regRole').value;
  if (!name || !email || !pass) { showToast('Please fill all required fields','error'); return; }
  if (pass.length < 8) { showToast('Password must be at least 8 characters','error'); return; }
  currentUser = { name, email, role };
  completeSignIn(name, role);
}

function doSocialLogin(provider) {
  const role = selectedRole || 'developer';
  currentUser = { name: `${provider} User`, email:`user@${provider.toLowerCase()}.com`, role };
  completeSignIn(currentUser.name, currentUser.role);
}

function completeSignIn(name, role) {
  showToast(`Welcome, ${name}! 👋`, 'success');
  const overlay = document.getElementById('signInOverlay');
  overlay.style.animation = 'fadeIn .3s ease reverse';
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
  updateHeaderUser(name, role);
  showRoleView(role);
}

function showRoleView(role) {
  const devView = document.getElementById('developerView');
  const recView = document.getElementById('recruiterView');
  if (role === 'recruiter') {
    devView.style.display = 'none';
    recView.style.display = '';
    // init recruiter-specific leaderboard and charts
    renderLeaderboardIn('leaderboardListRec');
    updateStats();
    setTimeout(() => { destroyCharts(); initCharts(); }, 100);
    renderFAQ();
    renderProfiles();
    animateOnScroll();
  } else {
    recView.style.display = 'none';
    devView.style.display = '';
    renderLeaderboardIn('leaderboardListDev');
    renderFAQDev();
    animateOnScroll();
  }
}

function updateHeaderUser(name, role) {
  const ctrl = document.querySelector('.header-controls');
  const existing = document.getElementById('headerUser');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.id = 'headerUser';
  el.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer';
  el.innerHTML = `
    <div style="width:32px;height:32px;border-radius:50%;background:rgba(34,197,94,0.15);border:1.5px solid rgba(34,197,94,0.4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;color:var(--green)">${name.slice(0,2).toUpperCase()}</div>
    <div style="font-size:12px;line-height:1.3">
      <div style="font-weight:700;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${name}</div>
      <div style="color:var(--green);font-size:11px;font-weight:600">${role}</div>
    </div>`;
  el.onclick = openSettings;
  ctrl.insertBefore(el, ctrl.firstChild);
}

/* ══════════════════════════════════════════════════════════
   INTERVIEW SYSTEM
══════════════════════════════════════════════════════════ */

/* ── Question bank keyed by tech ── */
const QUESTION_BANK = {
  Go: [
    { type:'Fix the Bug', q:'The following Go function is supposed to return the sum of a slice of integers, but it always returns 0. What is wrong?', code:`func sum(nums []int) int {
  total := 0
  for i := 0; i < len(nums); i++ {
    total == nums[i]  // BUG HERE
  }
  return total
}`, options:['`==` should be `+=`','`len(nums)` should be `cap(nums)`','Function should return `float64`','Missing `defer` statement'], answer:0 },
    { type:'Explain the Function', q:'What does the following Go code do and what is the output?', code:`package main
import "fmt"
func fibonacci(n int) int {
  if n <= 1 { return n }
  return fibonacci(n-1) + fibonacci(n-2)
}
func main() { fmt.Println(fibonacci(7)) }`, options:['Prints 13','Prints 21','Prints 8','Prints 34'], answer:0 },
    { type:'Identify the Error', q:'This Go code is supposed to read a file safely. What is the critical error?', code:`func readFile(path string) string {
  f, _ := os.Open(path)
  data, _ := ioutil.ReadAll(f)
  return string(data)
}`, options:['File is never closed — resource leak','`ioutil.ReadAll` is deprecated only','`os.Open` does not work for text files','`string(data)` causes a panic'], answer:0 },
    { type:'Suggest Optimization', q:'This function finds duplicates in O(n²). How can you optimize it to O(n)?', code:`func hasDuplicate(arr []int) bool {
  for i := 0; i < len(arr); i++ {
    for j := i+1; j < len(arr); j++ {
      if arr[i] == arr[j] { return true }
    }
  }
  return false
}`, options:['Use a `map[int]bool` to track seen values','Sort the array first','Use `sync.Map` for concurrency','Increase the loop step to 2'], answer:0 },
  ],
  Rust: [
    { type:'Fix the Bug', q:'This Rust function fails to compile. What is the ownership error?', code:`fn main() {
  let s1 = String::from("hello");
  let s2 = s1;
  println!("{}", s1); // ERROR
}`, options:['`s1` has been moved to `s2`; use `.clone()`','String literals are immutable in Rust','`println!` macro cannot take `String` type','Missing `mut` keyword on `s1`'], answer:0 },
    { type:'Identify the Error', q:'What will this Rust code print and why?', code:`fn add(x: i32, y: i32) -> i32 {
  x + y;  // Note: semicolon!
}
fn main() { println!("{}", add(3, 4)); }`, options:['Compile error: mismatched types (returns `()`)','Prints 7','Prints 0','Prints garbage value'], answer:0 },
  ],
  Python: [
    { type:'Fix the Bug', q:'This Python function should return a list with duplicates removed, preserving order. What is wrong?', code:`def remove_dups(lst):
  seen = {}
  result = []
  for item in lst:
    if item not in seen:
      seen[item] = True
      result.append(item)
  return result
# Called as: remove_dups([1,2,2,3,1])`, options:['Nothing — this is correct','Should use `set` instead of `dict`','`result.append` should be `result.extend`','`seen[item] = True` should be `seen.add(item)`'], answer:0 },
    { type:'Suggest Optimization', q:'This function checks if a number is prime. Suggest an optimisation to reduce time complexity.', code:`def is_prime(n):
  if n < 2: return False
  for i in range(2, n):
    if n % i == 0: return False
  return True`, options:['Loop only up to √n instead of n','Use a lookup table for all primes','Memoize using `functools.lru_cache`','Both A and C — loop to √n and cache results'], answer:3 },
    { type:'Explain the Function', q:'What does this Python decorator do?', code:`import functools
def retry(times=3):
  def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
      for attempt in range(times):
        try:
          return func(*args, **kwargs)
        except Exception as e:
          if attempt == times-1: raise e
    return wrapper
  return decorator`, options:['Retries the function up to 3 times on exception','Limits function call rate to 3 per second','Caches function results for 3 seconds','Validates function arguments 3 times'], answer:0 },
    { type:'Identify the Error', q:'This async Python code has a critical bug. What is it?', code:`import asyncio
async def fetch_data(url):
  response = requests.get(url)  # BUG
  return response.json()

asyncio.run(fetch_data("https://api.example.com"))`, options:['`requests.get` is blocking — use `aiohttp` or `httpx`','`asyncio.run` cannot accept async functions','`response.json()` is not awaited','Missing `await` before `asyncio.run`'], answer:0 },
  ],
  TypeScript: [
    { type:'Fix the Bug', q:'This TypeScript interface and function have a type error. Identify it.', code:`interface User {
  id: number;
  name: string;
  email?: string;
}
function greet(user: User): string {
  return "Hello, " + user.email.toUpperCase();
}`, options:['`email` is optional — needs null check before `.toUpperCase()`','`id` should be `string`, not `number`','Function return type should be `void`','`interface` should be `type`'], answer:0 },
    { type:'Explain the Function', q:'What TypeScript utility type does this code demonstrate and what does it produce?', code:`type ReadonlyUser = Readonly<{
  id: number;
  name: string;
  role: 'admin' | 'user';
}>;
const u: ReadonlyUser = { id: 1, name: 'Arjun', role: 'admin' };
u.name = 'Rahul'; // What happens?`, options:['TypeScript compile error — `name` is readonly','Runtime error — object is frozen','No error — `Readonly` is just a hint','Error only in strict mode'], answer:0 },
  ],
  'C#': [
    { type:'Fix the Bug', q:'This C# LINQ query is supposed to return users older than 25, but returns all users. Why?', code:`var users = new List<User> { ... };
var result = users.Where(u => {
  u.Age > 25; // BUG
  return true;
}).ToList();`, options:['Missing `return` before `u.Age > 25` — the condition is never used','`Where` does not accept block lambdas','`.ToList()` should be `.AsEnumerable()`','`List<User>` should be `IEnumerable<User>`'], answer:0 },
  ],
  'C++': [
    { type:'Identify the Error', q:'This C++ function has a classic memory safety bug. What is it?', code:`int* createArray(int size) {
  int arr[size];  // Stack allocation
  for (int i=0; i<size; i++) arr[i] = i;
  return arr;    // BUG: returning pointer to local
}`, options:['Returning pointer to stack-allocated memory — undefined behaviour','`int arr[size]` is invalid C++ (VLA)','Missing `new` keyword for array creation','`size` should be `const int`'], answer:0 },
  ],
  Dart: [
    { type:'Fix the Bug', q:'This Dart Flutter widget rebuilds on every frame. What is wrong?', code:`class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final controller = AnimationController(
      vsync: this,  // ERROR: StatelessWidget has no vsync
      duration: Duration(seconds: 2),
    );
    return Container();
  }
}`, options:['StatelessWidget cannot be a `TickerProvider`; use `SingleTickerProviderStateMixin` in a `StatefulWidget`','`AnimationController` must be `const`','`Duration` syntax is wrong','Missing `super.build(context)` call'], answer:0 },
  ],
  Solidity: [
    { type:'Identify the Error', q:'This Solidity function is vulnerable to a well-known attack. What is it?', code:`contract Bank {
  mapping(address => uint) balances;
  function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    (bool ok,) = msg.sender.call{value: amount}("");
    require(ok);
    balances[msg.sender] -= amount; // BUG: balance updated AFTER call
  }
}`, options:['Reentrancy attack — balance must be updated BEFORE the external call','Integer overflow in subtraction','`msg.sender.call` is not allowed in Solidity','Missing `payable` modifier on function'], answer:0 },
  ],
  React: [
    { type:'Fix the Bug', q:'This React component has a performance bug causing infinite re-renders. What is wrong?', code:`function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => setUsers(data));
  }); // BUG: missing dependency array
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`, options:['`useEffect` has no dependency array — runs after every render, causing infinite loop','`useState` should use `useReducer` for arrays','`fetch` is not allowed inside `useEffect`','`key` prop should use index not `u.id`'], answer:0 },
  ],
  default: [
    { type:'Fix the Bug', q:'This pseudocode function should binary-search a sorted array. Identify the bug.', code:`function binarySearch(arr, target):
  low = 0
  high = len(arr) - 1
  while low <= high:
    mid = (low + high) / 2    // BUG in some languages
    if arr[mid] == target: return mid
    elif arr[mid] < target: low = mid + 1
    else: high = mid - 1
  return -1`, options:['Integer overflow: use `low + (high - low) / 2` instead','`high` should start at `len(arr)`','The while condition should be `low < high`','`mid` should use ceiling division'], answer:0 },
    { type:'Suggest Optimization', q:'What is the time complexity of this sorting algorithm and how can it be improved?', code:`function bubbleSort(arr):
  n = len(arr)
  for i in range(n):
    for j in range(0, n-i-1):
      if arr[j] > arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]
  return arr`, options:['O(n²) — replace with merge sort O(n log n) or use built-in sort','O(n log n) — already optimal','O(n³) — remove the inner swap','O(1) — this is already constant time'], answer:0 },
    { type:'Explain the Function', q:'What design pattern does this code implement?', code:`class EventBus {
  _subscribers = {};
  subscribe(event, fn) {
    if (!this._subscribers[event]) this._subscribers[event] = [];
    this._subscribers[event].push(fn);
  }
  publish(event, data) {
    (this._subscribers[event] || []).forEach(fn => fn(data));
  }
}`, options:['Observer / Pub-Sub pattern','Singleton pattern','Factory pattern','Strategy pattern'], answer:0 },
    { type:'Identify the Error', q:'This SQL query is supposed to find users who have no orders. What is wrong?', code:`SELECT u.id, u.name
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;`, options:['Should use LEFT JOIN not INNER JOIN — INNER JOIN excludes users with no orders','`WHERE o.id IS NULL` should be `WHERE u.id IS NULL`','`JOIN` should be `CROSS JOIN`','Nothing is wrong — this query is correct'], answer:0 },
  ]
};

/* ── Interview state ── */
let IV = {
  devId: null, questions: [], current: 0,
  score: 0, timer: null, timeLeft: 60,
  answers: [], started: false
};

/* ── Start interview ── */
function startInterview(devId) {
  if (!currentUser) { showToast('Please sign in to start an interview','error'); return; }
  const dev = DEVS.find(d=>d.id===devId);
  if (!dev) return;
  if (dev.status==='fraud') { showToast('⚠ Fraud account — interview blocked','error'); return; }

  IV = { devId, questions:[], current:0, score:0, timer:null, timeLeft:60, answers:[], started:true };

  // Build question set from dev's tech stack
  let pool = [];
  dev.skills.forEach(skill => {
    const key = Object.keys(QUESTION_BANK).find(k => skill.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(skill.toLowerCase()));
    if (key && QUESTION_BANK[key]) pool.push(...QUESTION_BANK[key]);
  });
  if (pool.length < 4) pool.push(...QUESTION_BANK.default);
  // Shuffle and pick 6
  pool = pool.sort(()=>Math.random()-.5);
  IV.questions = pool.slice(0, Math.min(6, pool.length));

  // Lock navigation
  lockNavigation();

  // Show overlay
  document.getElementById('interviewOverlay').classList.add('active');
  document.getElementById('ivDevInfo').textContent = `Developer: ${dev.name} · ${dev.specialty}`;
  renderIVQuestion();
}

/* ── Render current question ── */
function renderIVQuestion() {
  const q = IV.questions[IV.current];
  if (!q) { endInterview(); return; }

  const total = IV.questions.length;
  document.getElementById('ivProgressBar').style.width = `${(IV.current/total)*100}%`;
  document.getElementById('ivQCounter').textContent = `Question ${IV.current+1} / ${total}`;
  document.getElementById('ivQuestionType').textContent = q.type;
  document.getElementById('ivQuestion').textContent = q.q;
  document.getElementById('ivScoreTotal').textContent = IV.current;

  // Code block
  const codeBlock = document.getElementById('ivCodeBlock');
  if (q.code) {
    codeBlock.style.display = '';
    document.getElementById('ivCode').textContent = q.code;
  } else {
    codeBlock.style.display = 'none';
  }

  // Options
  const optDiv = document.getElementById('ivOptions');
  const taDiv  = document.getElementById('ivTextArea');
  if (q.options) {
    optDiv.style.display = '';
    taDiv.style.display  = 'none';
    optDiv.innerHTML = q.options.map((opt,i)=>
      `<button class="iv-option" onclick="ivSelectOption(this,${i})">${String.fromCharCode(65+i)}. ${opt}</button>`
    ).join('');
  } else {
    optDiv.style.display = 'none';
    taDiv.style.display  = '';
    document.getElementById('ivAnswer').value = '';
  }

  // Reset & start timer
  startIVTimer();
}

function startIVTimer() {
  clearInterval(IV.timer);
  IV.timeLeft = 60;
  const el = document.getElementById('ivTimer');
  el.textContent = IV.timeLeft;
  el.classList.remove('warning');
  IV.timer = setInterval(() => {
    IV.timeLeft--;
    el.textContent = Math.max(0, IV.timeLeft);
    if (IV.timeLeft <= 15) el.classList.add('warning');
    if (IV.timeLeft <= 0) {
      clearInterval(IV.timer);
      showToast('⏱ Time is up! Moving to next question.','error');
      IV.answers.push({ q: IV.questions[IV.current].q, selected: -1, correct: IV.questions[IV.current].answer ?? -1, timedOut: true });
      IV.current++;
      setTimeout(() => renderIVQuestion(), 400);
    }
  }, 1000);
}

/* ── Option select ── */
function ivSelectOption(btn, idx) {
  document.querySelectorAll('.iv-option').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.chosen = idx;
}

/* ── Submit answer ── */
function ivSubmit() {
  const q = IV.questions[IV.current];
  const opts = document.querySelectorAll('.iv-option');
  let chosen = -1;
  let correct = false;

  if (q.options) {
    opts.forEach((b,i) => { if (b.classList.contains('selected')) chosen = i; });
    if (chosen === -1) { showToast('Please select an answer','error'); return; }
    correct = (chosen === q.answer);
    // Visual feedback
    opts.forEach((b,i) => {
      if (i === q.answer) b.classList.add('correct');
      else if (i === chosen && !correct) b.classList.add('wrong');
      b.disabled = true;
    });
  } else {
    const ans = document.getElementById('ivAnswer').value.trim();
    if (!ans) { showToast('Please type your answer','error'); return; }
    chosen = ans;
    correct = ans.length > 20; // text answer: credited if non-trivial
  }

  if (correct) IV.score++;
  IV.answers.push({ q: q.q, type: q.type, chosen, correct, timedOut: false });
  document.getElementById('ivScoreNum').textContent = IV.score;

  clearInterval(IV.timer);
  setTimeout(() => {
    IV.current++;
    renderIVQuestion();
  }, 1200);
}

/* ── Skip question ── */
function ivSkip() {
  IV.answers.push({ q: IV.questions[IV.current]?.q, type: IV.questions[IV.current]?.type, chosen:-1, correct:false, timedOut:false, skipped:true });
  IV.current++;
  clearInterval(IV.timer);
  renderIVQuestion();
}

/* ── End interview ── */
function endInterview() {
  clearInterval(IV.timer);
  document.getElementById('ivProgressBar').style.width = '100%';
  const total = IV.questions.length;
  const pct   = Math.round((IV.score/total)*100);
  const color = pct>=70?'var(--green)':pct>=40?'var(--yellow)':'var(--red)';
  const verdict = pct>=70?'✓ Competent':'⚠ Needs Review';

  const reviewHtml = IV.answers.map((a,i)=>`
    <div class="iv-q-row">
      <span class="iv-q-icon">${a.correct?'✅':a.timedOut?'⏱':a.skipped?'⏭':'❌'}</span>
      <div>
        <div style="font-weight:700;color:var(--text);margin-bottom:2px">Q${i+1}: ${a.type||'Question'}</div>
        <div style="color:var(--text3)">${(a.q||'').slice(0,80)}…</div>
        <div style="margin-top:4px;font-size:11px;color:${a.correct?'var(--green)':a.timedOut?'var(--yellow)':'var(--red)'}">${a.correct?'Correct':a.timedOut?'Timed out':a.skipped?'Skipped':'Incorrect'}</div>
      </div>
    </div>`).join('');

  document.getElementById('ivResultOverlay').style.display = 'flex';
  document.getElementById('ivResultHeader').innerHTML = `
    <div class="iv-result-ring" style="border-color:${color};box-shadow:0 0 32px ${color}66">
      <div class="iv-result-score" style="color:${color}">${pct}%</div>
      <div class="iv-result-label">${IV.score}/${total} correct</div>
    </div>
    <h2 style="font-size:22px;font-weight:900;margin-bottom:4px">${verdict}</h2>
    <p style="color:var(--text2);font-size:14px">Interview completed · ${DEVS.find(d=>d.id===IV.devId)?.name}</p>`;
  document.getElementById('ivResultBody').innerHTML = `<div class="iv-q-review">${reviewHtml}</div>`;

  // Update dev score in UI
  const dev = DEVS.find(d=>d.id===IV.devId);
  if (dev && pct >= 70) { showToast(`${dev.name} passed the interview! Score updated.`,'success'); }
  else if (dev) { showToast(`${dev.name} did not pass the interview.`,'info'); }
}

function closeInterview() {
  document.getElementById('interviewOverlay').classList.remove('active');
  document.getElementById('ivResultOverlay').style.display = 'none';
  unlockNavigation();
  clearInterval(IV.timer);
  IV = { devId:null, questions:[], current:0, score:0, timer:null, timeLeft:60, answers:[], started:false };
}

/* ── Navigation Lock ── */
function lockNavigation() {
  // Warn on beforeunload
  window.addEventListener('beforeunload', onBeforeUnload);
  // Warn on visibilitychange (tab switch)
  document.addEventListener('visibilitychange', onVisibilityChange);
  // Intercept back button
  history.pushState(null, '', location.href);
  window.addEventListener('popstate', onPopState);
  // Disable nav links
  document.querySelectorAll('.nav-a').forEach(a => { a.style.pointerEvents='none'; a.style.opacity='.3'; });
}

function unlockNavigation() {
  window.removeEventListener('beforeunload', onBeforeUnload);
  document.removeEventListener('visibilitychange', onVisibilityChange);
  window.removeEventListener('popstate', onPopState);
  document.querySelectorAll('.nav-a').forEach(a => { a.style.pointerEvents=''; a.style.opacity=''; });
}

function onBeforeUnload(e) {
  e.preventDefault(); e.returnValue = 'Interview in progress! Are you sure you want to leave? Your results will be lost.';
  return e.returnValue;
}

function onVisibilityChange() {
  if (document.hidden && IV.started) {
    const warn = document.getElementById('ivTabWarning');
    warn.classList.add('show');
    showToast('⚠ Tab switch detected! Return immediately.','error');
    setTimeout(()=>warn.classList.remove('show'), 5000);
  }
}

function onPopState() {
  history.pushState(null, '', location.href);
  showToast('⚠ Navigation blocked — interview in progress!','error');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('devModal').classList.remove('open');
    document.getElementById('settingsModal').classList.remove('open');
  }
  if ((e.ctrlKey||e.metaKey) && e.key === '/') {
    document.getElementById('searchInput').focus();
    e.preventDefault();
  }
});