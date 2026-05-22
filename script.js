const text = {
  zh: {
    navWork: "作品", navPapers: "论文", navCode: "代码", navArchive: "档案",
    heroKicker: "AI Agent Builder / Product Founder / Computer Vision Researcher",
    heroTitle: "我做能把混乱工作变成可验证产出的 AI 系统。",
    heroThesis: "我关心的不是把模型包装成聊天框，而是把专业工作拆成可执行、可追踪、可审查、可交付的系统：agent workflow、source grounding、实时状态、human-in-the-loop，以及足够好的产品品味。",
    resumeLink: "简历", nowLabel: "现在", nowValue: "Lawless Co-founder & CTO", baseLabel: "位置", baseValue: "上海 / 中国可入职", focusLabel: "主线",
    p1Title: "Agents are workflow, not magic.", p1Body: "好的 agent 产品需要 context、tools、memory、eval、failure recovery 和 review UX。模型能力只是底层燃料。",
    p2Title: "Evidence beats fluent answers.", p2Body: "法律、合规、专利、企业知识里，答案不够。来源、引用、责任边界和下一步动作才是可交付价值。",
    p3Title: "Taste is execution power.", p3Body: "我做过视觉生成和审美评估。产品好不好，不只看模型分数，也看用户能不能更快得到更好的判断。",
    workTitle: "我想被记住的不是职位，而是这些问题。",
    lawlessTitle: "Enterprise legal AI agents that do work, not just answer questions.",
    lawlessBody: "作为 Co-founder & CTO，我把法律问答推进为企业法律工作助手：材料摄取、检索、任务拆解、工具调用、source grounding、citation verification、人审确认、交付跟踪。场景包括跨境合规、公司法务、TRO/资金冻结、专利检索和专业服务自动化。",
    shanTitle: "Aesthetic generation as a product system.",
    shanBody: "在广州全职带 7 人团队，从 0 到 1 做服装灵感、活动 T 恤和视觉物料生成产品。核心不是“出图”，而是 prompt 控制、风格一致性、商业可用性、对比测试和用户反馈闭环。",
    researchTitle: "From 3D humans to interactive 3D scene generation.",
    researchBody: "在 MSU Computer Vision Lab 做 paid RA，研究 3D/4D generation、semantic visual tokenization、long-term person re-ID 和 LLM scene priors。这个底盘让我更习惯把模糊问题拆成数据、表示、约束和评测。",
    paperTitle: "论文不是装饰，是我怎么形成工程判断的证据。",
    paperOne: "把长期人物再识别从“同衣服行人匹配”推进到更真实的衣服变化、姿态变化和长期活动场景；通过 3D shape representation 分离身份与非身份因素。",
    paperTwo: "探索把 LLM scene priors 和 2D diffusion backbone 结合到 text-to-3D scene generation，让用户用自然语言交互式编辑 3D 场景，并让物理约束进入生成过程。",
    codeTitle: "能公开看的东西放这里；不能公开的产品，用结构讲清楚。",
    repoOne: "Video diffusion / DDPM implementation adapted toward urban planning and generative modeling experiments.",
    repoTwo: "公开课程/研究代码，展示机器学习和系统实现能力。",
    repoThree: "这个网站：一个可公开编辑的研究、产品判断和作品索引。",
    archiveTitle: "轨迹。",
    a1: "Michigan State University Honors College, B.S. Computer Science and Engineering, GPA 3.7/4.0.",
    a2: "Co-founder & CTO, Lawless: enterprise legal AI agent platform.",
    a3: "Co-founder & CEO, 1shanai: generative visual product, aesthetics evaluation, early team management.",
    a4: "PhysiBuilder preprint on interactive physics-informed 3D scene generation and editing.",
    a5: "ICCV 2023 publication on clothing and pose invariant 3D shape representation for long-term person re-ID.",
    a6: "MSU Spartan Hack Best Use of Generative AI, first place among 106 teams.",
    footerTitle: "I am looking for serious AI agent work, not permission.",
    footerBody: "如果你在做真实的 agent 产品、AI-native workflow、应用研究或高强度产品工程，我愿意聊。"
  },
  en: {
    navWork: "Work", navPapers: "Papers", navCode: "Code", navArchive: "Archive",
    heroKicker: "AI Agent Builder / Product Founder / Computer Vision Researcher",
    heroTitle: "I build AI systems that turn messy work into verifiable output.",
    heroThesis: "I care less about wrapping models in chat boxes and more about systems that make professional work executable, traceable, reviewable, and deliverable: agent workflows, source grounding, live state, human-in-the-loop review, and product taste.",
    resumeLink: "Resume", nowLabel: "Now", nowValue: "Lawless Co-founder & CTO", baseLabel: "Base", baseValue: "Shanghai / China-ready", focusLabel: "Focus",
    p1Title: "Agents are workflow, not magic.", p1Body: "Good agent products need context, tools, memory, evals, failure recovery, and review UX. Model capability is only the fuel.",
    p2Title: "Evidence beats fluent answers.", p2Body: "In legal, compliance, patent, and enterprise knowledge work, answers are not enough. Sources, citations, boundaries, and next actions create value.",
    p3Title: "Taste is execution power.", p3Body: "I have built in visual generation and aesthetic evaluation. Product quality is not only model score; it is whether users reach better judgment faster.",
    workTitle: "I do not want to be remembered by titles. I want to be remembered by the problems.",
    lawlessTitle: "Enterprise legal AI agents that do work, not just answer questions.",
    lawlessBody: "As Co-founder & CTO, I push legal AI from Q&A into enterprise work systems: material ingestion, retrieval, task decomposition, tool use, source grounding, citation verification, human review, and delivery tracking across compliance, legal ops, TRO/frozen-funds cases, patent search, and professional-service automation.",
    shanTitle: "Aesthetic generation as a product system.",
    shanBody: "In Guangzhou, I led a 7-person team building generative products for fashion inspiration, event T-shirts, and visual materials. The hard part was not image generation; it was prompt control, style consistency, commercial usability, comparative testing, and feedback loops.",
    researchTitle: "From 3D humans to interactive 3D scene generation.",
    researchBody: "As a paid RA at MSU CVLab, I worked on 3D/4D generation, semantic visual tokenization, long-term person re-ID, and LLM scene priors. This trained me to turn ambiguity into data, representations, constraints, and evaluation.",
    paperTitle: "Papers are not decoration. They are evidence for how I form engineering judgment.",
    paperOne: "Extends long-term person re-identification toward realistic clothing changes, pose variation, and diverse long-horizon activities; uses 3D shape representation to separate identity from non-identity factors.",
    paperTwo: "Explores combining LLM scene priors and 2D diffusion backbones for text-to-3D scene generation, enabling natural-language interactive scene editing with physics-aware constraints.",
    codeTitle: "Public artifacts go here. Private products are explained through structure.",
    repoOne: "Video diffusion / DDPM implementation adapted toward urban planning and generative modeling experiments.",
    repoTwo: "Public coursework/research artifact showing machine learning and systems implementation work.",
    repoThree: "This site: a public, editable index of research, product judgment, and selected work.",
    archiveTitle: "Trajectory.",
    a1: "Michigan State University Honors College, B.S. Computer Science and Engineering, GPA 3.7/4.0.",
    a2: "Co-founder & CTO, Lawless: enterprise legal AI agent platform.",
    a3: "Co-founder & CEO, 1shanai: generative visual product, aesthetics evaluation, early team management.",
    a4: "PhysiBuilder preprint on interactive physics-informed 3D scene generation and editing.",
    a5: "ICCV 2023 publication on clothing and pose invariant 3D shape representation for long-term person re-ID.",
    a6: "MSU Spartan Hack Best Use of Generative AI, first place among 106 teams.",
    footerTitle: "I am looking for serious AI agent work, not permission.",
    footerBody: "If you are building real agent products, AI-native workflows, applied research, or high-intensity product engineering, I am interested."
  }
};

const button = document.querySelector(".lang");
let lang = localStorage.getItem("zg-site-lang") || "zh";
function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = text[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  button.textContent = lang === "zh" ? "中文" : "EN";
  localStorage.setItem("zg-site-lang", lang);
}
button.addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));
applyLang(lang);
