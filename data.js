/* ------------------------------------------------------------------
 * 国内 AI 大厂动态监测台 · 数据文件
 * ------------------------------------------------------------------
 * 唯一数据源。更新时只改本文件的 items 与 meta.updatedAt，index.html 不用动。
 *
 * 排序口径（重要性评分，完整规则见 meta.scoring）：
 *   按「这条事实本身值不值得你知道」给每条动态打分，满分 100，分高者居前。
 *   四个维度：事实分量 40 / 信源可信度 30 / 可验证度 20 / 时效 10。
 *   每条动态独立计分，分数只由它自身的四个维度决定；一条事实就是一条。
 *   每条都保留原始 url，点标题直达原文；摘要只写可验证事实。
 *
 * 字段：id, company, date, category, tier, tierName, spec,
 *       title, summary, products, source, url
 * 注意：本文件是检索整理快照，不是实时抓取；媒体转述与内测曝光已单独标注。
 * ------------------------------------------------------------------ */

window.MONITOR_DATA = {
  "meta": {
    "title": "国内 AI 大厂动态监测台",
    "subtitle": "21 家厂商 · 按重要度评分排序",
    "updatedAt": "2026-11-20",
    "coverage": "21 家厂商 · 2026-06 → 2026-11",
    "categories": [
      "模型发布",
      "产品上线",
      "开源开放",
      "硬件终端",
      "生态大会",
      "战略资本",
      "内测曝光",
      "行业动态"
    ],
    "tiers": [
      {
        "id": 1,
        "key": "T1",
        "name": "官方一手",
        "desc": "厂商官网 / 官方博客 / API 文档 / 官方公告 / 投资者关系 / 官方模型卡与权重仓库"
      },
      {
        "id": 1.5,
        "key": "T1.5",
        "name": "官方媒体",
        "desc": "新华社、科技日报、中国日报、经济日报 / 中国经济网、上海证券报、证券时报、央视等"
      },
      {
        "id": 2,
        "key": "T2",
        "name": "权威媒体",
        "desc": "财联社、界面新闻、澎湃、第一财经、钛媒体、36氪、IT之家、凤凰科技、动点科技等"
      },
      {
        "id": 3,
        "key": "T3",
        "name": "行业聚合",
        "desc": "行业周报、第三方模型库、百科词条、研报转述、自媒体与聚合站"
      }
    ],
    "insight": [
      "每条动态按「这条事实本身值不值得你知道」打分：事实分量 40 + 信源可信度 30 + 可验证度 20 + 时效 10，满分 100，分高者居前。",
      "官方一手、真正发布了模型 / 权重 / 产品、带可复核参数的条目自然排前；参会观点、资本传闻、二手转述沉底。时效只占 10 分，避免「新」压过「重要」。",
      "每条动态独立计分，分数只由这条事实自身的四个维度决定，可逐条点开核对。",
      "默认只露出得分最高的 10 条，想看更多再逐层展开；点标题直达原文。"
    ],
    "scoring": {
      "name": "什么是重要信息 · 评分方法",
      "principle": "一条动态重不重要，只看它本身：改变了什么、可不可信、能否复核、是否还值得现在看。",
      "total": 100,
      "catScore": {
        "模型发布": 40,
        "开源开放": 38,
        "产品上线": 34,
        "硬件终端": 28,
        "战略资本": 22,
        "生态大会": 16,
        "内测曝光": 12,
        "行业动态": 8
      },
      "tierScore": {
        "1": 30,
        "2": 16,
        "3": 6,
        "1.5": 24
      },
      "specScore": {
        "spec": 20,
        "numeric": 10,
        "none": 0
      },
      "recencyScore": [
        {
          "within": 30,
          "score": 10,
          "label": "30 天内"
        },
        {
          "within": 90,
          "score": 7,
          "label": "31–90 天"
        },
        {
          "within": 180,
          "score": 4,
          "label": "91–180 天"
        },
        {
          "within": 99999,
          "score": 1,
          "label": "180 天以上"
        }
      ],
      "dimensions": [
        {
          "key": "A",
          "name": "事实分量",
          "max": 40,
          "why": "发布了模型 / 权重 / 产品，比参会、观点、资本传闻更改变格局"
        },
        {
          "key": "B",
          "name": "信源可信度",
          "max": 30,
          "why": "官方一手可当事实采信，未经证实的转述不配排前面"
        },
        {
          "key": "C",
          "name": "可验证度",
          "max": 20,
          "why": "带参数规模、上下文、定价、许可、跑分的条目可被复核与比较"
        },
        {
          "key": "D",
          "name": "时效",
          "max": 10,
          "why": "只占 10 分，刻意压低，避免「新」压过「重要」"
        }
      ],
      "levels": [
        {
          "min": 85,
          "name": "重要",
          "color": "#B4232F"
        },
        {
          "min": 65,
          "name": "关注",
          "color": "#B8790C"
        },
        {
          "min": 0,
          "name": "备查",
          "color": "#7A8799"
        }
      ],
      "tieBreak": "同分依次按：日期更近 → 信源可信度更高 → id 稳定排序",
      "excluded": "每条动态独立计分，分数只由这条事实自身的四个维度决定；默认只露出得分最高的 10 条，不把全库一次铺开。"
    }
  },
  "companies": [
    {
      "id": "alibaba",
      "name": "阿里巴巴",
      "short": "阿里",
      "color": "#F26522",
      "soft": "#FFF1E8",
      "lines": "千问 Qwen / 通义万相 Wan / 阿里云 / 平头哥"
    },
    {
      "id": "tencent",
      "name": "腾讯",
      "short": "腾讯",
      "color": "#1668DC",
      "soft": "#EAF2FE",
      "lines": "混元 Hy / 元宝 / ima / WorkBuddy / CodeBuddy"
    },
    {
      "id": "bytedance",
      "name": "字节跳动",
      "short": "字节",
      "color": "#7048E8",
      "soft": "#F2EDFE",
      "lines": "豆包 / Seed / 即梦 / 火山引擎 / TRAE"
    },
    {
      "id": "moonshot",
      "name": "月之暗面",
      "short": "Kimi",
      "color": "#0E9F6E",
      "soft": "#E6F7F0",
      "lines": "Kimi / K3 系列 / Hosted Agents"
    },
    {
      "id": "zhipu",
      "name": "智谱",
      "short": "智谱",
      "color": "#D93F6C",
      "soft": "#FDECF1",
      "lines": "GLM 系列 / Z.ai / Z Code / Coding Plan"
    },
    {
      "id": "minimax",
      "name": "MiniMax",
      "short": "MiniMax",
      "color": "#00838F",
      "soft": "#E4F4F5",
      "lines": "M3 系列 / M3.1 Flash / H3"
    },
    {
      "id": "deepseek",
      "name": "深度求索 DeepSeek",
      "short": "DeepSeek",
      "color": "#3454B4",
      "soft": "#EAF0FC",
      "lines": "DeepSeek V4 / V4.1 Flash / DeepInfer"
    },
    {
      "id": "baidu",
      "name": "百度",
      "short": "百度",
      "color": "#D93025",
      "soft": "#FDECEA",
      "lines": "文心 ERNIE / 百度智能云 / 昆仑芯 / 秒哒"
    },
    {
      "id": "kuaishou",
      "name": "快手",
      "short": "快手",
      "color": "#E0960C",
      "soft": "#FFF4DE",
      "lines": "可灵 Kling / 可灵 4.0 / 企业 AI 生产力"
    },
    {
      "id": "ant",
      "name": "蚂蚁集团",
      "short": "蚂蚁",
      "color": "#0E93B8",
      "soft": "#E5F6FA",
      "lines": "百灵 Ling / 灵光 / 蚂蚁百炼"
    },
    {
      "id": "huawei",
      "name": "华为",
      "short": "华为",
      "color": "#2C3E50",
      "soft": "#EAEFF4",
      "lines": "昇腾 / 超节点 / CANN / 盘古"
    },
    {
      "id": "stepfun",
      "name": "阶跃星辰",
      "short": "阶跃",
      "color": "#B0651C",
      "soft": "#FBF0E4",
      "lines": "Step 系列 / Step 5 Preview"
    },
    {
      "id": "meituan",
      "name": "美团",
      "short": "美团",
      "color": "#A6820A",
      "soft": "#FBF4DC",
      "lines": "LongCat / 妙手 AI 经营工作台"
    },
    {
      "id": "iflytek",
      "name": "科大讯飞",
      "short": "讯飞",
      "color": "#4F7A22",
      "soft": "#EFF6E6",
      "lines": "星火 X2.6 / 端云一体 / 飞星平台"
    },
    {
      "id": "xiaomi",
      "name": "小米",
      "short": "小米",
      "color": "#8E3A9E",
      "soft": "#F6EAF9",
      "lines": "MiMo-V2.6 / 全模态开源模型"
    },
    {
      "id": "sensetime",
      "name": "商汤科技",
      "short": "商汤",
      "color": "#1C7C8C",
      "soft": "#E7F3F5",
      "lines": "日日新 SenseNova / 商汤小浣熊 / 大装置"
    },
    {
      "id": "kunlun",
      "name": "昆仑万维",
      "short": "昆仑",
      "color": "#9C3D8F",
      "soft": "#F7EAF5",
      "lines": "天工 Skywork / Matrix-Game / Mureka / SkyProduction"
    },
    {
      "id": "shengshu",
      "name": "生数科技",
      "short": "生数",
      "color": "#0B7A55",
      "soft": "#E5F4EE",
      "lines": "Vidu / Q4 / 多模态生成与世界模型"
    },
    {
      "id": "modelbest",
      "name": "面壁智能",
      "short": "面壁",
      "color": "#8C6A18",
      "soft": "#F8F1DE",
      "lines": "MiniCPM / OpenBMB / 端侧多模态"
    },
    {
      "id": "chinamobile",
      "name": "中国移动",
      "short": "中移动",
      "color": "#3D63A8",
      "soft": "#EAF0FA",
      "lines": "九天大模型 / MoMA 开放计划 / 梧桐平台"
    },
    {
      "id": "chinatelecom",
      "name": "中国电信",
      "short": "中电信",
      "color": "#A83F55",
      "soft": "#FAECF0",
      "lines": "星辰大模型 / TeleAgent / 智能体云电脑"
    }
  ],
  "items": [
    {
      "id": "a01",
      "company": "alibaba",
      "date": "2026-08",
      "category": "模型发布",
      "title": "通义万相 Wan3.0 正式上线，登顶文生视频与视频编辑双榜",
      "summary": "原生多模态架构，支持单次 30 秒视频生成、文档/表格/网页等结构化输入、原生音画同步，输出覆盖 480P / 720P / 1080P；在 Artificial Analysis 文生视频与视频编辑双榜位列全球第一。",
      "products": [
        "Wan3.0",
        "通义万相"
      ],
      "source": "新华财经 · 云栖大会资料",
      "url": "https://m.cnfin.com/gs-lb/zixun/20260922/4473395_1.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "a02",
      "company": "alibaba",
      "date": "2026-09-22",
      "category": "生态大会",
      "title": "2026 云栖大会：阿里亮出「模型—芯片—云」全栈 AI 版图",
      "summary": "吴泳铭提出 AI 模型、AI 芯片、AI 云为机器智能三大基石；Qwen4 已投入训练，后续版本参数规划至 5–10 万亿。平头哥发布真武 V900，阿里云提出 Agentic Cloud，百炼上线 Agent Studio 与 AgentCore，并发布千问办公、Qoder、千问 APP 等 Agent 产品。",
      "products": [
        "Qwen4",
        "真武V900",
        "Agentic Cloud",
        "百炼",
        "千问办公"
      ],
      "source": "新华财经 / 赛迪网",
      "url": "https://www.ccidnet.com/kx/1127954.jhtml",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "a03",
      "company": "alibaba",
      "date": "2026-09-22",
      "category": "模型发布",
      "title": "全模态矩阵集中更新，预告 11 月发布下一代视频模型",
      "summary": "Qwen-Image-3.1、Qwen-Audio-3.1（ASR / TTS / Realtime 国内第一）、世界模型 HappyOyster-2.0-Preview 集中亮相；Qwen3.8-Max 获 Artificial Analysis 智能体第一、CodeArena 前端编程第一。官方透露下一代视频模型将于 11 月发布，主攻更长时长与导演级叙事。",
      "products": [
        "Qwen-Image-3.1",
        "Qwen-Audio-3.1",
        "HappyOyster-2.0",
        "Qwen3.8-Max"
      ],
      "source": "新华财经",
      "url": "https://m.cnfin.com/gs-lb/zixun/20260922/4473395_1.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "a04",
      "company": "alibaba",
      "date": "2026-10-13",
      "category": "硬件终端",
      "title": "千问发布 AI 眼镜 N1 / N1 Pro 与 Bose 联名耳夹耳机",
      "summary": "N1 系列搭载 5000 万像素影像与全天候环境感知；N1 Pro 新增体征监测、眼动交互与虹膜核身（联合蚂蚁 GPASS，误识率低于百万分之一），支持支付宝「看一下支付」。叠加国补后 N1 到手 2218 元起、耳机 1099 元起，定位 Personal Agent 的物理入口。",
      "products": [
        "千问N1",
        "N1 Pro",
        "千问AI耳机",
        "千问App"
      ],
      "source": "科技日报",
      "url": "https://www.stdaily.com/web/gdxw/2026-10/13/content_595525.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "N1 ¥2218 起 / N1 Pro ¥2600 起 · 5000 万像素 · 眼动交互 + 虹膜支付 · 耳机 ¥1099 起"
    },
    {
      "id": "a05",
      "company": "alibaba",
      "date": "2026-10",
      "category": "产品上线",
      "title": "千问 C 端密集迭代：千问Go! 个人智能体、AI 陪逛、千问办公电商版",
      "summary": "10 月内千问入局 Personal Agent 赛道，「千问Go!」开放体验申请并上线「我的应用」（无需编程搭建工具）；千问 APP 上线「AI 陪逛」支持屏幕共享实时购物问答；千问办公电商版计划双 11 前夕上线；蚂蚁灵光 2.0 升级为可跨平台持续运行任务的 AI 助理。",
      "products": [
        "千问Go!",
        "千问App",
        "千问办公",
        "灵光2.0"
      ],
      "source": "网经社《人工智能月刊》10月号",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "a06",
      "company": "alibaba",
      "date": "2026-11-04",
      "category": "内测曝光",
      "title": "阿里内测 AI 影视创作平台 Looogen（逻辑智片）曝光",
      "summary": "主打「有逻辑，自成片」的桌面端工作台，提供影视 Agent 对话与影视套件两种形态，可完成剧本拆集、导演级分镜、角色/场景素材、配音配乐与成片制作。核心差异是会话与素材全部本机留存、支持私有化部署与接入自有模型；内测版搭载 Seedance 2.5 / Wan3.0 等模型。",
      "products": [
        "Looogen",
        "Wan3.0",
        "Seedance 2.5"
      ],
      "source": "36氪 / 读佳 / 钜亨网",
      "url": "https://news.cnyes.com/news/id/6653107",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "a07",
      "company": "alibaba",
      "date": "2026-11",
      "category": "开源开放",
      "title": "Qwen3.8 全系开源，千问开源下载破 10 亿次",
      "summary": "11 月上旬 Qwen3.8 全系开源，含旗舰 2.4 万亿参数、27B 多模态主力量与 Flash 轻量版。杭州方面披露千问开源模型累计下载突破 10 亿次、衍生模型约 20 万个；同期预告 Qwen4 系列将含面向个人 PC 的 27B 版本。",
      "products": [
        "Qwen3.8",
        "Qwen3.8-27B"
      ],
      "source": "AI 行业周报 001",
      "url": "http://mp.weixin.qq.com/s?__biz=MzU2Nzg2NjkwMQ==&mid=2247484802&idx=1&sn=e480ead9aa4d9bcf003fe696117a4d1b",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "a08",
      "company": "alibaba",
      "date": "2026-11-10",
      "category": "战略资本",
      "title": "阿里拟分拆平头哥上市，AI 芯片业务单独定价",
      "summary": "据周报汇总，阿里平头哥已递交港交所主板上市申请，AI 芯片、CPU、互联芯片等产品线将被资本市场单独定价。此前蔡崇信将 2023 年之后的阿里定义为以「电商 + 全栈 AI」为两大核心业务的新阶段。",
      "products": [
        "平头哥",
        "真武系列"
      ],
      "source": "财中社 / 周报汇总",
      "url": "https://m.caizhongshe.cn/news-1757938711548908850.html",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "a09",
      "company": "alibaba",
      "date": "2026-11-16",
      "category": "模型发布",
      "title": "阿里正式发布 Qwen4-Max：2.4 万亿参数、原生视觉、百万上下文",
      "summary": "Qwen4 新架构稀疏 MoE，总参数 2.4T、每 token 仅激活 710 亿，支持 100 万 token 上下文与原生视觉；Code Arena 第六，Work360 覆盖 721 个细分领域。高强度推理下 token 用量减少 35%、单任务平均成本降约六成；缓存命中每百万 token 低至 0.5 元。已上线千问 AI 平台 / QwenCloud，中小尺寸开源模型将陆续发布。",
      "products": [
        "Qwen4-Max",
        "千问AI平台",
        "QwenCloud",
        "Qoder"
      ],
      "source": "阿里巴巴集团（官方新闻稿）",
      "url": "https://www.alibabagroup.com/document-2060139246777270272",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "2.4T 总参 / 710B 激活 · 1M 上下文 · 原生视觉 · 缓存命中 ¥0.5/百万 token · Code Arena 第 6"
    },
    {
      "id": "a10",
      "company": "alibaba",
      "date": "2026-11-17",
      "category": "生态大会",
      "title": "阿里云香港峰会：Qwen4-Max 落地，三项企业级 Agent 能力发布",
      "summary": "阿里云在 2026 香港峰会宣布 Qwen4-Max 可用，并展示 QwenWork、WonderClip、Model Studio 等产品；面向企业推出 AgentCore（智能体统一开发/运行/管理）、AI-BAS（多智能体渗透测试）与零数据留存 ZDR。香港客户超 6.5 万，连续六年居当地 IaaS 市场第一，95% 企业客户已采用 AI 服务。",
      "products": [
        "Qwen4-Max",
        "AgentCore",
        "AI-BAS",
        "QwenWork",
        "WonderClip"
      ],
      "source": "阿里云官方博客",
      "url": "https://www.alibabacloud.com/blog/alibaba-cloud-unveils-new-ai-initiatives-at-hong-kong-summit-to-advance-the-city%E2%80%99s-ai-ecosystem_603792",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "a11",
      "company": "alibaba",
      "date": "2026-11-17",
      "category": "产品上线",
      "title": "阿里云上线 Qovest AI 投研工作台，千问 AI Office 升级端内编辑",
      "summary": "近一周产业落地动态：阿里云上线 Qovest AI 投研工作台；千问 AI Office 升级端内编辑能力；同期 Qwen4-Max 预览版在千问 AI 平台开放，强化编程、3D 建模、前端设计与复杂办公任务。",
      "products": [
        "Qovest",
        "千问AI Office",
        "Qwen4-Max"
      ],
      "source": "新浪科技 · 一周进展汇总",
      "url": "https://www.sina.cn/news/detail/5364977504355279.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t01",
      "company": "tencent",
      "date": "2026-08-28",
      "category": "开源开放",
      "title": "腾讯发布并开源 Hy4 preview，重回生产力任务第一梯队",
      "summary": "混元在代码、办公、科学等真实生产力任务上重回第一梯队，随后在 WorkBuddy / CodeBuddy、元宝、ima 同步上线。自 2026 年 2 月重建基础设施以来，混元形成约每两个月一次大版本、preview 先行正式版跟进的迭代节奏。",
      "products": [
        "Hy4 preview",
        "WorkBuddy",
        "CodeBuddy",
        "元宝",
        "ima"
      ],
      "source": "财联社 / 腾讯混元",
      "url": "https://finance.sina.com.cn/wm/2026-10-30/doc-iniwziit4603859.shtml",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "t02",
      "company": "tencent",
      "date": "2026-09",
      "category": "产品上线",
      "title": "混元推出「智囊团」专家平台，垂直领域知识进入训练闭环",
      "summary": "邀请金融、法律、医疗、代码、设计、翻译、文学等垂直领域专家，为混元大模型提供数据集生产与知识审核服务，配合 Co-design Loop 把真实产品反馈注入模型训练。",
      "products": [
        "混元",
        "混元智囊团"
      ],
      "source": "百度百科 · 腾讯混元大模型词条",
      "url": "https://baike.baidu.com/item/%E8%85%BE%E8%AE%AF%E6%B7%B7%E5%85%83%E5%A4%A7%E6%A8%A1%E5%9E%8B",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t03",
      "company": "tencent",
      "date": "2026-10-16",
      "category": "开源开放",
      "title": "Hy-Memory-30B-A3B 长期记忆写入模型开源",
      "summary": "约 30B 总参 / 3B 激活，用于替代 Mem0、MemOS 等外部记忆框架，决定「保留什么、如何表示、如何更新」。官方称在四个记忆框架固定 20% 基准子样本上宏平均 55.49，高于 Claude Opus 5 的 54.62。",
      "products": [
        "Hy-Memory-30B-A3B"
      ],
      "source": "稀土掘金 · AI 厂商动态速览",
      "url": "https://juejin.cn/post/7701525643873091619",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t04",
      "company": "tencent",
      "date": "2026-10-29",
      "category": "生态大会",
      "title": "2026 腾讯全球数字生态大会：Agent 工厂与 Buddy One 亮相",
      "summary": "官宣 Hy4 正式版与 Hy4 Flash 即将推出；发布面向个人的 Buddy One 办公协同体系（打通腾讯文档、会议、网盘与 ima，统一账号/积分/数据池）与「腾讯网盘」作为 Agent 记忆空间。WorkBuddy 自 3 月上线累计完成约 90 亿次任务请求，开放平台汇聚超 5 万家伙伴、20 万个技能应用。",
      "products": [
        "Hy4",
        "Buddy One",
        "腾讯网盘",
        "WorkBuddy",
        "WMA"
      ],
      "source": "财联社 / 同花顺财经",
      "url": "https://m.10jqka.com.cn/20261031/c681321681.shtml",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "t05",
      "company": "tencent",
      "date": "2026-10-29",
      "category": "产品上线",
      "title": "腾讯 Agent 矩阵铺开：小微、大圆、Miora、WorkRally、TAI 座舱",
      "summary": "存量应用焕新：微信「小微」持续扩大灰测、企业微信「大圆」、腾讯文档 AI 工作台、QQ 浏览器 Qbot 等；专业 Agent 新品含创意智能体工作室 Miora、工业级漫剧平台 WorkRally、Ardot、Onsolo。大会同时发布智能座舱 TAI 智能体，把元宝接入车内，已服务超 100 家车企、装车 2000 多万辆。",
      "products": [
        "小微",
        "大圆",
        "Miora",
        "WorkRally",
        "元宝",
        "TAI"
      ],
      "source": "财联社 / 苏南早报",
      "url": "https://snzbw.com/page?classid=4&id=4522",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "t06",
      "company": "tencent",
      "date": "2026-10",
      "category": "产品上线",
      "title": "元宝搜索对外开放，元宝助手 App 筹备；腾讯元器 11 月 9 日停服",
      "summary": "10 月元宝搜索正式对外开放，日均调用数亿次、接入超 50 个腾讯业务；腾讯将推出「元宝助手」App 布局 Personal Agent 赛道。同期腾讯元器宣布于 2026 年 11 月 9 日正式停止平台服务，属产品线收缩信号。",
      "products": [
        "元宝",
        "元宝助手",
        "腾讯元器"
      ],
      "source": "网经社《人工智能月刊》10月号",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t07",
      "company": "tencent",
      "date": "2026-11-04",
      "category": "模型发布",
      "title": "腾讯混元 Hy4 正式版发布：首次引入视觉理解与电脑操作",
      "summary": "MoE 架构 770B 总参 / 约 49B 激活，100 万 token 上下文。首次引入视觉理解，首次支持 Computer Use（结合命令行与图形界面，针对 Blender、CAD 等专业软件专项训练）。定价维持输入 6 元、输出 18 元、缓存命中 0.3 元/百万 token；官方计划开源模型权重，并联合 vLLM / SGLang 社区提供生态支持。",
      "products": [
        "Hy4",
        "腾讯云TokenHub",
        "OpenRouter"
      ],
      "source": "腾讯混元官方 / 腾讯新闻",
      "url": "https://hunyuan.tencent.com/research/hy4",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "770B 总参 / 49B 激活 · 1M 上下文 · 首次视觉 + Computer Use · 输入 ¥6 / 输出 ¥18 每百万 token"
    },
    {
      "id": "t08",
      "company": "tencent",
      "date": "2026-11-04",
      "category": "产品上线",
      "title": "Hy4 全矩阵接入，限免与五折同步开启",
      "summary": "Hy4 已在腾讯云 TokenHub、WorkBuddy / CodeBuddy、元宝、企业微信智能助理大圆、ima 上线，API 接入 OpenRouter、Hermes、OpenCode；QQ、微信读书、腾讯新闻等持续接入中。11 月 4–15 日 WorkBuddy / CodeBuddy 提供免费额度，TokenHub 按刊例价五折至 2026 年 12 月 31 日。",
      "products": [
        "Hy4",
        "WorkBuddy",
        "元宝",
        "ima",
        "大圆"
      ],
      "source": "腾讯官方",
      "url": "https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "t09",
      "company": "tencent",
      "date": "2026-11-16",
      "category": "模型发布",
      "title": "Hy4 Flash 发布：224B 总参，单任务成本约 Hy4 的 1/20",
      "summary": "224B 总参（含 64B Engram）/ 每 token 激活 12B，多模态输入、100 万 token 上下文，解码速度超 150 tps。WorkIndex 评测集上单任务成本为 Hy4 preview 的 1/13、Hy4 的 1/20；输入 0.5 元、输出 2 元、缓存命中 0.02 元/百万 token。已上线腾讯云 TokenHub、WorkBuddy、元宝、企业微信、QQ、ima、Marvis。",
      "products": [
        "Hy4 Flash",
        "WorkBuddy",
        "元宝",
        "ima"
      ],
      "source": "IT之家 / 腾讯混元",
      "url": "https://www.ithome.com/1/027/630.htm",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "224B 总参 / 12B 激活 · 1M 上下文 · 输入 ¥0.5 / 输出 ¥2 每百万 token · 单任务成本约 Hy4 的 1/20"
    },
    {
      "id": "t10",
      "company": "tencent",
      "date": "2026-11-17",
      "category": "模型发布",
      "title": "混元 Hy Realtime 上线，接入元宝语音通话与腾讯客服",
      "summary": "强化实时语音、多轮指令与情绪表达能力，已接入元宝语音通话和腾讯客服场景。属腾讯在实时交互链路上的增量更新，与 Hy4 / Hy4 Flash 形成旗舰 + 高性价比 + 实时语音的分层布局。",
      "products": [
        "Hy Realtime",
        "元宝"
      ],
      "source": "新浪科技 · 一周进展汇总",
      "url": "https://www.sina.cn/news/detail/5364977504355279.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t11",
      "company": "tencent",
      "date": "2026-10",
      "category": "战略资本",
      "title": "腾讯加码 AI 基建：拟发行约 50 亿美元债券，Q2 资本开支同比 +176%",
      "summary": "10 月腾讯拟发行约 50 亿美元债券及 18 亿美元 / 260 亿元人民币票据，用于 AI 基础设施与芯片采购。2026 年二季报显示研发支出 272.8 亿元（同比 +35%）、资本开支 527.8 亿元（同比 +176%），管理层明确第一优先用途是训练更大的混元模型。",
      "products": [
        "混元",
        "腾讯云"
      ],
      "source": "网经社 / 券商中国",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "t12",
      "company": "tencent",
      "date": "2026-11-16",
      "category": "战略资本",
      "title": "腾讯总办 LinkTime：要求核心业务「心态归零」面向 AI 重新创业",
      "summary": "腾讯文化公开 28 周年司庆总办交流笔记，管理层将 AI 变化形容为不容旁观的技术革命，要求所有核心业务每个团队面向 AI 时代重新创业、打破山头主义。同时披露 WorkBuddy 上线 8 个月已成为内部口径下中国 Token 使用量最高的单一 AI 产品之一。",
      "products": [
        "WorkBuddy",
        "混元"
      ],
      "source": "财中社",
      "url": "https://m.caizhongshe.cn/news-1757938711548908850.html",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "b01",
      "company": "bytedance",
      "date": "2026-06-23",
      "category": "模型发布",
      "title": "火山引擎 FORCE 大会发布豆包 Seed 2.1 系列",
      "summary": "发布面向真实生产力的新一代 Agent 模型 Seed 2.1 Pro 与 Turbo。火山引擎总裁谭待披露豆包大模型日均 Tokens 使用量超 180 万亿；现场演示 500 多个智能 Agent 基于该模型协同构建 3D 虚拟城市。",
      "products": [
        "Seed 2.1 Pro",
        "Seed 2.1 Turbo",
        "火山方舟"
      ],
      "source": "百度百科 · 豆包 Seed 2.1 词条",
      "url": "https://baike.baidu.com/item/%E8%B1%86%E5%8C%85%20Seed%202.1/68083538",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b02",
      "company": "bytedance",
      "date": "2026-09-15",
      "category": "模型发布",
      "title": "Seed 2.1 Pro / Lite 更新 0915 版，上下文扩至 1024K",
      "summary": "0915 版本在中国区火山引擎提供 1,024K token 上下文、最大输出 256K；Pro 定价 ¥6 / ¥30 每百万 token，Lite 为 ¥0.80 / ¥2.70。已集成至豆包工作，TRAE 同步接入。同期 Seed-Evolving 采用同一模型 ID 每周至少更新一次。",
      "products": [
        "Seed 2.1 Pro",
        "Seed 2.1 Lite",
        "Seed-Evolving",
        "豆包工作",
        "TRAE"
      ],
      "source": "Second Talent 模型对照 / 百度百科",
      "url": "https://www.secondtalent.com/resources/every-doubao-ai-model-explained-and-compared/",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b03",
      "company": "bytedance",
      "date": "2026-10-07",
      "category": "产品上线",
      "title": "豆包 App 上线华为鸿蒙电脑端",
      "summary": "首版本搭载豆包 Seed 2.1 Turbo 与 Pro 两档模型，支持普通聊天与工作模式切换，并具备深度研究、PPT 生成等能力，为后续豆包工作鸿蒙桌面版铺路。",
      "products": [
        "豆包App",
        "Seed 2.1",
        "鸿蒙"
      ],
      "source": "百度百科 · 豆包 Seed 2.1 词条",
      "url": "https://baike.baidu.com/item/%E8%B1%86%E5%8C%85%20Seed%202.1/68083538",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b04",
      "company": "bytedance",
      "date": "2026-10-23",
      "category": "模型发布",
      "title": "火山引擎发布 Seedance 2.5 4K，面向影视大屏交付",
      "summary": "4K 原生输出 + 10-bit 色深，专项训练人物表情、细微动作与画面细节；首创 Draft 模式可先用 480P 样片验证分镜再出 4K 正片，单段最长 30 秒并支持局部精修。首批以企业试用方式定向供应全球 20 家工作室及导演，与作品绑定。",
      "products": [
        "Seedance 2.5 4K",
        "火山方舟",
        "即梦"
      ],
      "source": "动点科技 / IT之家",
      "url": "https://technode.com/2026/10/23/bytedance-launches-seedance-2-5-4k-video-model-for-film-production",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "4K / 10-bit · Draft 480P 样片 · 单段最长 30s · 首批定向 20 家工作室"
    },
    {
      "id": "b05",
      "company": "bytedance",
      "date": "2026-10",
      "category": "行业动态",
      "title": "豆包手机助手开放屏幕自动化权限，155 款 App 拒绝接入",
      "summary": "字节为豆包手机助手开放屏幕自动化权限后，腾讯、阿里、快手、美团系共 155 款应用拒绝接入，电商与超级 App 生态博弈升级。",
      "products": [
        "豆包手机助手",
        "豆包"
      ],
      "source": "网经社《人工智能月刊》10月号",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b06",
      "company": "bytedance",
      "date": "2026-10-29",
      "category": "产品上线",
      "title": "豆包工作默认开放多模型，火山引擎 MaaS 份额 45.1% 居首",
      "summary": "豆包工作默认开放 Kimi 3.1 Pro / GLM 5.3 / DeepSeek V4.1 Flash，按既有 AI 点数结算。IDC 披露 2026 上半年中国 MaaS 市场规模 106.3 亿元，火山引擎以 45.1% 份额居首。",
      "products": [
        "豆包工作",
        "火山方舟"
      ],
      "source": "全球 AI 动态周报 第23期",
      "url": "https://wujiaming88.github.io/2026/10/30/global-ai-weekly.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b07",
      "company": "bytedance",
      "date": "2026-11-05",
      "category": "产品上线",
      "title": "豆包工作鸿蒙桌面版上线，打通飞书账号体系",
      "summary": "围绕鸿蒙 PC 桌面交互做 Agent 级适配，接入后可调用企业内部文档、群聊与会议记录，用于起草方案、整理纪要、生成报告，并支持表格分析、图片与短视频剪辑、轻量网页应用搭建。首发内置 Seed 2.1 Turbo 与 Pro 双档模型。",
      "products": [
        "豆包工作",
        "飞书",
        "Seed 2.1",
        "鸿蒙"
      ],
      "source": "今日头条 / 凤凰网、IT之家转述",
      "url": "https://www.toutiao.com/article/7705389339328397851/",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "b08",
      "company": "bytedance",
      "date": "2026-11-05",
      "category": "模型发布",
      "title": "Seed-Evolving 更新，重点改善复杂 Agent 任务与抗幻觉",
      "summary": "火山方舟模型发布记录显示，豆包 Seed-Evolving 于 11 月 5 日继续升级，重点改善复杂 Agent 任务执行、工具调用与事实一致性。该模型 ID 不固定版本、每周至少更新一次，适合追求迭代速度但不适合需要可复现结果的场景。",
      "products": [
        "Seed-Evolving",
        "火山方舟"
      ],
      "source": "Second Talent / 财中社",
      "url": "https://www.secondtalent.com/resources/every-doubao-ai-model-explained-and-compared/",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b09",
      "company": "bytedance",
      "date": "2026-11-09",
      "category": "模型发布",
      "title": "字节发布 Seedream 5.5 图像模型，支持百轮编辑与原生透明素材",
      "summary": "实现非编辑区域像素级保持，支持围绕同一作品连续 100 轮编辑；原生输出带 Alpha 通道的 RGBA 透明素材；改善光照、材质、皮肤纹理并强化小字渲染。2K 方图编辑单张约 0.28 元，不到 Seedream 5.0 Pro 一半。豆包、豆包工作、即梦已同步接入，API 上线火山方舟。",
      "products": [
        "Seedream 5.5",
        "豆包",
        "即梦",
        "豆包工作",
        "火山方舟"
      ],
      "source": "字节跳动 Seed 官方博客 / 科技日报",
      "url": "https://seed.bytedance.com/zh/blog/more-realistic-images-more-stable-editing-across-100-rounds-introducing-seedream-5-5",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "2K 方图编辑约 ¥0.28/张 · 100 轮编辑像素级保持 · 原生 RGBA 透明素材"
    },
    {
      "id": "b10",
      "company": "bytedance",
      "date": "2026-11-11",
      "category": "内测曝光",
      "title": "彭博：字节筹备类 Meta Muse 个人助手，项目代号 Spell",
      "summary": "由豆包手机助手团队主导，对标 Meta Muse，支持语音交互与动画虚拟形象，覆盖日程、检索与内容创作；内部代号「小豆」已灰度。张一鸣在 AI 团队全员会上表示，追平 OpenAI / Anthropic 前沿水平最早要到 2029 或 2030 年，并指出 Seed 预训练数据规模不足。QuestMobile 显示 9 月豆包 App 月活 4.19 亿。",
      "products": [
        "Spell",
        "小豆",
        "豆包",
        "Seed"
      ],
      "source": "彭博社 / AI 产品库转述",
      "url": "https://aiproducthub.cn/newsflash/bytedance-doubao-muse-like-ai-assistant-spell-project",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b11",
      "company": "bytedance",
      "date": "2026-11-12",
      "category": "模型发布",
      "title": "Seedance 2.5 flash 上线即梦、LibTV，视频生成提速约一倍",
      "summary": "视频生成速度提升约一倍，720P 文生 / 图生视频约 0.99 元/秒，已在即梦、LibTV 上线。与 10 月的 Seedance 2.5 4K 形成「高质量交付 + 低成本跑量」双档。",
      "products": [
        "Seedance 2.5 flash",
        "即梦",
        "LibTV"
      ],
      "source": "新浪科技 · 一周进展汇总",
      "url": "https://www.sina.cn/news/detail/5364977504355279.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "b12",
      "company": "bytedance",
      "date": "2026-11-16",
      "category": "产品上线",
      "title": "Seedance 2.5 4K API 全面开放",
      "summary": "火山引擎宣布 Seedance 2.5 4K 的 API 全面开放，开发者与企业客户可通过接口调用该 4K 视频生成模型，此前仅面向定向企业试用的限制解除。",
      "products": [
        "Seedance 2.5 4K",
        "火山方舟"
      ],
      "source": "百度百科 · Seedance 2.5 4K 词条",
      "url": "https://baike.baidu.com/item/Seedance%202.5%204K/69515184",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "4K API 全面开放 · 开发者与企业客户可调用"
    },
    {
      "id": "m01",
      "company": "moonshot",
      "date": "2026-10-24",
      "category": "模型发布",
      "title": "月之暗面发布 Kimi K3.1 Pro，3 万亿级参数刷新开源上限",
      "summary": "在 K3 基座上以大规模跨领域联合强化学习迭代，MoE 架构 2.8 万亿总参 / 约 1040 亿激活、100 万 token 上下文、原生多模态视觉理解，重点强化编程、3D 创作、金融建模与复杂 Agent 任务。官方称价格约为 GPT-6 Astra 的五分之一，并承诺 11 月 4 日前放出完整权重。",
      "products": [
        "Kimi K3.1 Pro",
        "K3"
      ],
      "source": "国际科技创新中心（官方发布转述）",
      "url": "https://www.ncsti.gov.cn/kjdt/xwjj/202610/t20261026_259121.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "2.8T 总参 / 104B 激活 · 1M 上下文 · 原生多模态 · 价格约为 GPT-6 Astra 的 1/5"
    },
    {
      "id": "m02",
      "company": "moonshot",
      "date": "2026-11-05",
      "category": "开源开放",
      "title": "Kimi K3.1 Pro 完整权重开放，同步推出 Hosted Agents",
      "summary": "Hugging Face 放出 2.8T 权重，Agent Arena 榜单位列开放权重模型第一、全球第 13，工作/编程/聊天三类均居开放模型首位（基于 1.75 万次真实长周期会话）。同日推出 Kimi Hosted Agents，把 Harness 框架做成 7×24 云端托管服务；昇腾实现 0Day 推理适配。",
      "products": [
        "Kimi K3.1 Pro",
        "Kimi Hosted Agents",
        "Hugging Face"
      ],
      "source": "Hugging Face 官方模型卡 · moonshotai",
      "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "权重约 1.56TB / 96 分片 · MXFP4 权重 + MXFP8 激活 · vLLM / SGLang / TokenSpeed · Kimi K3.1 Pro License"
    },
    {
      "id": "m03",
      "company": "moonshot",
      "date": "2026-11",
      "category": "战略资本",
      "title": "开源前主动剔除网络攻防训练数据，估值约 500 亿美元",
      "summary": "官方说明在中期训练与强化学习两阶段移除漏洞发现与利用类数据，自研漏洞利用基准解决率由 90.5% 降至 81.0%，接受可量化的能力损失。另据报道，公司最后一轮融资估值约 500 亿美元，计划 2027 年一季度在香港上市。",
      "products": [
        "Kimi K3.1 Pro"
      ],
      "source": "钛媒体",
      "url": "https://www.tmtpost.com/8189769.html",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "z01",
      "company": "zhipu",
      "date": "2026-10-05",
      "category": "产品上线",
      "title": "GLM-5.3 上架 Amazon Bedrock，开放权重走海外云分成",
      "summary": "AWS 官方博客宣布 7530 亿参数 MoE 模型 GLM-5.3 可在 Bedrock 托管调用，面向编程与长周期智能体任务；模型权重此前已在 Hugging Face 发布，企业也可自行部署。这是智谱开启海外云厂商分成模式的一步。",
      "products": [
        "GLM-5.3",
        "Amazon Bedrock"
      ],
      "source": "AWS 博客 / 威多 AI 转述",
      "url": "https://wedoingai.com/article/glm-5-3-amazon-bedrock-2026-10",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "z02",
      "company": "zhipu",
      "date": "2026-10-12",
      "category": "开源开放",
      "title": "GLM-5.3 开源：同基座靠后训练，编码能力提升 50%",
      "summary": "753B 参数，与 GLM-5.2 使用同一基座，全部增益来自后训练。自研 Z.ai Code Bench 较上代提升 50%，Terminal Bench 3.0（4.6→28.3）与 Agents' Last Exam 取得开源 SOTA，CyberGym 漏洞发现 84.5。官方称是目前编码能力最强的开源权重模型。",
      "products": [
        "GLM-5.3",
        "GLM-5.2",
        "ModelScope"
      ],
      "source": "魔搭社区官方模型页 / 读懂AI时代",
      "url": "https://modelscope.cn/models/ZhipuAI/GLM-5.3",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "753B 参数 · 与 GLM-5.2 同基座 · Z.ai Code Bench +50% · Terminal Bench 3.0 28.3 · CyberGym 84.5"
    },
    {
      "id": "z03",
      "company": "zhipu",
      "date": "2026-10-22",
      "category": "产品上线",
      "title": "GLM-5.3 API 正式上线，AA 智能指数 60 分并列开源第一",
      "summary": "API 定价与 GLM-5.2 一致，已接入 Z Code 等编码平台并纳入 GLM Coding Plan；Artificial Analysis Intelligence Index 得 60 分，与 Claude Fable 5、GPT-5.6 Sol 等闭源旗舰同一水平，与 Kimi K3 并列开源模型第一。",
      "products": [
        "GLM-5.3",
        "Z Code",
        "GLM Coding Plan"
      ],
      "source": "AI 前线 / 行业媒体",
      "url": "http://ai.hfbcw.cn/index.php/2026/10/23/zhipu-glm-53-api-launch",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "AA 智能指数 60 分 · 与 Kimi K3 并列开源第一 · API 定价同 GLM-5.2"
    },
    {
      "id": "z04",
      "company": "zhipu",
      "date": "2026-11-04",
      "category": "战略资本",
      "title": "摩根大通将智谱列为板块首选，下一代 GLM 成观察点",
      "summary": "研报称智谱今年在相同硬件条件下单位推理成本下降约 80%，开放平台及 API 业务毛利率由一年前的 -0.4% 升至 2026 上半年 24.6%；公司约每两至三个月推出一代新模型。研报将预计 11 月推出的 GLM-5.5 / GLM-6 列为下一催化剂（截至检索日尚未见官方发布页）。",
      "products": [
        "GLM-5.5",
        "GLM-6",
        "智谱开放平台"
      ],
      "source": "智通财经 / 新浪财经",
      "url": "https://finance.sina.com.cn/stock/hkstock/hkgg/2026-11-04/doc-inixqhkw1556517.shtml",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "x01",
      "company": "minimax",
      "date": "2026-10-19",
      "category": "模型发布",
      "title": "MiniMax M3.1 Flash 上线，OpenRouter 周榜第三",
      "summary": "面向复杂智能体、电脑操作与软件开发场景，官方披露推理速度提升近三倍、调用成本下降七成。10/19–25 周榜以 13.7 万亿 Token 位列全球第三，主要瞄准中小开发者批量自动化任务；同期品牌官方旗舰店登陆电商平台并上线分层订阅套餐。",
      "products": [
        "M3.1 Flash",
        "OpenRouter"
      ],
      "source": "界面新闻 / 网易科技",
      "url": "https://www.163.com/dy/article/LA6A50IK0534A4SC.html",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "推理速度近 3× · 调用成本 -70% · OpenRouter 周榜 13.7T Token"
    },
    {
      "id": "x02",
      "company": "minimax",
      "date": "2026-11",
      "category": "开源开放",
      "title": "MiniMax M3 开放权重：1M 上下文、原生图像与视频输入",
      "summary": "第三方模型库 11 月 18 日更新的资料显示，M3 为开放权重模型，支持 100 万 token 上下文、原生图像/视频输入与桌面电脑操作，官方输入价约 0.30 美元/百万 token；在 OmniDocBench 1.5、SpreadSheetBench-v1 等多项基准上排名靠前。",
      "products": [
        "MiniMax M3",
        "H3-Image"
      ],
      "source": "LLMBoard 模型库",
      "url": "https://www.llmboard.ai/models/minimax-m3",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "x03",
      "company": "minimax",
      "date": "2026-11-04",
      "category": "战略资本",
      "title": "摩根大通：性价比受认可，前沿地位仍待 M3 Pro 验证",
      "summary": "研报维持中性评级，认为 M3 与 M3.1 Flash 以领先实验室中最低区间的价格提供有实力的模型，但公司全年未上调 ARR 指引，性价比策略尚未转化为企业需求升级。关键观察点是预计 11 月发布的 M3 Pro 能否按前沿模型定价（截至检索日未见官方发布页）。",
      "products": [
        "M3 Pro",
        "M3.1 Flash"
      ],
      "source": "亚洲财经 / 摩根大通研报转述",
      "url": "http://www.affta.cn/jrzx/198035.html",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "d01",
      "company": "deepseek",
      "date": "2026-10-26",
      "category": "模型发布",
      "title": "V4.1-Flash-1017 单周 33.6 万亿 Token 登顶 OpenRouter",
      "summary": "10/17 更新的版本以 552B 总参 / 输入激活 8B、输出激活 16B 的非对称 MoE 架构，重点优化代码、自动化 Agent 与视觉任务；10/19–25 周调用量环比 +801% 登顶全球，国产模型包揽前五、周调用量连续 26 周超过美国。",
      "products": [
        "V4.1-Flash-1017",
        "DeepSeek V4.1 Flash",
        "OpenRouter"
      ],
      "source": "界面新闻 / 网易科技",
      "url": "https://www.163.com/dy/article/LA6A50IK0534A4SC.html",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "552B 总参 / 输入 8B、输出 16B 激活 非对称 MoE · 1M 上下文 · 周调用 33.6T Token（+801%）"
    },
    {
      "id": "d02",
      "company": "deepseek",
      "date": "2026-10-20",
      "category": "开源开放",
      "title": "开源自研大规模推理框架 DeepInfer",
      "summary": "DeepInfer 是支撑 V4.1 Flash 系列高吞吐服务的底层底座，同时兼容英伟达 GPU 与华为昇腾 NPU。此前 4 月 V4 发布即在昇腾首发，9 月 30 日又开源面向昇腾的基础设施组件，双方合作从推理适配走向共同开发软件栈。",
      "products": [
        "DeepInfer",
        "V4.1 Flash",
        "昇腾"
      ],
      "source": "DeepSeek 官方 API 文档",
      "url": "https://api-docs.deepseek.com/zh-cn/news/news261017",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "d03",
      "company": "deepseek",
      "date": "2026-11-16",
      "category": "战略资本",
      "title": "融资与算力双线推进，因调用量飙升推出限额措施",
      "summary": "10 月 22 日报道拟筹资约 1000 亿元，腾讯、宁德时代为主要出资方；11 月报道称二轮融资 1055 亿元、投后估值 6155 亿元，官方未发布公告确认。同期因调用量飙升出现多次故障而推出限额使用，并计划在乌兰察布建 GW 级数据中心、部署至少 16 万颗国产 AI 芯片。",
      "products": [
        "DeepSeek",
        "乌兰察布数据中心"
      ],
      "source": "同花顺财经 / 科技日报",
      "url": "https://m.10jqka.com.cn/20261116/c681853022.shtml",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "d04",
      "company": "deepseek",
      "date": "2026-11-03",
      "category": "行业动态",
      "title": "芯模协同：V4 全面跑在国产芯片，传 V5 基于昇腾预训练",
      "summary": "V4 万亿参数 MoE 全面运行在华为昇腾、寒武纪等国产芯片，技术架构从 CUDA 迁移到 CANN，被称为全球首个纯国产算力部署的万亿参数 MoE 模型。11 月 3 日《科创板日报》援引产业链人士称，下一代 V5 计划基于昇腾芯片开展预训练。",
      "products": [
        "DeepSeek V4",
        "DeepSeek V5",
        "昇腾",
        "CANN"
      ],
      "source": "DAMO 开发者矩阵 / 券商研报",
      "url": "https://damodev.csdn.net/6af5e7fd40858c2d881b0872.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "bd01",
      "company": "baidu",
      "date": "2026-11-05",
      "category": "开源开放",
      "title": "百度开源 ERNIE-5.5-Flash-Base 预训练底座",
      "summary": "280B 总参 / 14B 激活，33.5T tokens 从零预训练，训练上下文 128K、推理支持 1M；沿用 DeepSeek V4 的压缩注意力与 mHC 残差并做四处改动，自测 30 项基准赢 DeepSeek-V4-Flash 底座 26 项。许可为年收入 5000 万美元以下商用免费，已上架 Hugging Face。",
      "products": [
        "ERNIE-5.5-Flash-Base",
        "文心 5.5 Flash",
        "飞桨",
        "SGLang"
      ],
      "source": "AI 前线 / 新浪财经（Hugging Face 模型卡转述）",
      "url": "https://finance.sina.com.cn/roll/2026-11-05/doc-inixsvxu9396063.shtml",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "280B 总参 / 14B 激活 · 33.5T tokens 从零预训练 · 推理 1M 上下文 · 年收入 <$50M 商用免费"
    },
    {
      "id": "bd02",
      "company": "baidu",
      "date": "2026-11-12",
      "category": "生态大会",
      "title": "百度世界 2026：李彦宏提「智能组织是 AI 时代的新厂房」",
      "summary": "同场发布文心 5.5 Flash 预览版（2800 亿总参、每 token 激活 140 亿、百万上下文）与文心闪电深度思考、文心一镜微表情两款应用模型，走为具体场景优化的路子。李彦宏判断「只是换了电机，没有重新设计工厂」，给出打破岗位边界、沉淀隐性知识、设计流程闭环三原则。",
      "products": [
        "文心 5.5 Flash",
        "文心闪电",
        "文心一镜"
      ],
      "source": "AI 行业周报 / 腾讯云开发者周报",
      "url": "https://cloud.tencent.com.cn/developer/article/2786760",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "bd03",
      "company": "baidu",
      "date": "2026-11",
      "category": "开源开放",
      "title": "文心 5.5 Flash Preview 计划 11 月 25 日前 Apache 2.0 开源",
      "summary": "预览版在 Code Arena WebDev 得 1668 分，高于 DeepSeek V4.1 Flash 的 1664、Kimi K3 的 1658，位列开放模型第二、前端总榜第 17；已可在 OpenRouter 免费试用。官方计划 11 月 25 日前以 Apache 2.0 放出权重，本地部署门槛仍取决于量化方案与社区适配。",
      "products": [
        "ERNIE 5.5 Flash Preview",
        "OpenRouter",
        "千帆"
      ],
      "source": "AI 铺子 / Arena 榜单",
      "url": "https://www.aipuzi.cn/ai-news/ernie-5-5-flash-preview.html",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "280B / 14B 激活 · 1M 上下文 · 生成 >200 token/s · Code Arena WebDev 1668 · Apache 2.0"
    },
    {
      "id": "bd04",
      "company": "baidu",
      "date": "2026-10",
      "category": "战略资本",
      "title": "百度智能云组织调整，昆仑芯路线图与秒哒整合同步推进",
      "summary": "10 月百度智能云事业群组（ACG）完成新一轮组织调整，聚焦 AI 云与智能体规模化落地；秒哒运营团队并入百度搭子、以 Skill 形式集成。算力侧昆仑芯 M100 已上市、M300 计划 2027 年推出，天池 1024 卡超节点计划 2027 年推出。",
      "products": [
        "百度智能云",
        "昆仑芯 M100",
        "秒哒",
        "百度搭子"
      ],
      "source": "网经社《人工智能月刊》10月号",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "k01",
      "company": "kuaishou",
      "date": "2026-10-15",
      "category": "模型发布",
      "title": "可灵 Kling 4.0 正式全量上线，瞄准专业影像生产级交付",
      "summary": "单次原生生成最长 30 秒、支持长镜头连续叙事，最高 10-bit HDR 与 4K、21:9 超宽画幅；全能参考最多 15 项素材组合、最多 10 张关键帧，提示词上限 8000 tokens，支持多语种与方言口型匹配。快手 10 月 17 日发布投资者关系公告确认。",
      "products": [
        "Kling 4.0",
        "可灵 AI"
      ],
      "source": "快手投资者关系（官方公告）",
      "url": "https://ir.kuaishou.com/zh-hans/news-releases/news-release-details/kelingaixinyidaimoxingklin1g-40zhengshishangxian/",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "原生 30s · 10-bit HDR / 4K / 21:9 · 最多 10 关键帧 + 15 项参考 · 提示词 8000 tokens"
    },
    {
      "id": "k02",
      "company": "kuaishou",
      "date": "2026-11-04",
      "category": "产品上线",
      "title": "Kling 4.0 Flash 全面开放，接入 Adobe 全家桶插件",
      "summary": "轻量版主打生成速度与成本效率，9 月 28 日先向黑金年卡会员小范围开放，11 月 4 日宣布全面开放，所有用户可通过官网及 API 使用，并支持 MCP、CLI 与 AI 插件接入，可在 Photoshop、Premiere Pro、After Effects 中调用。此前 10 月 21 日 Kling 4.0 API 已首发上线。",
      "products": [
        "Kling 4.0 Flash",
        "Kling 4.0 API",
        "MCP",
        "Adobe 插件"
      ],
      "source": "可灵 AI 官方模型发布页",
      "url": "https://klingai.com/dev/model-release/kling-4",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "k03",
      "company": "kuaishou",
      "date": "2026-10",
      "category": "战略资本",
      "title": "可灵传赴港上市，快手成立「企业 AI 生产力」组织",
      "summary": "消息称可灵 AI 拟明年赴港上市、募资至少 10 亿美元；快手成立「企业 AI 生产力」组织统筹 AI 基建与协同，并发布商业 AI 全景图。9 月 30 日高管分工调整，原社区科学线负责人于越转任可灵 AI 公司董事兼 CEO。",
      "products": [
        "可灵 AI",
        "快手商业 AI"
      ],
      "source": "网经社《人工智能月刊》10月号 / 百度百科",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "an01",
      "company": "ant",
      "date": "2026-11-06",
      "category": "模型发布",
      "title": "蚂蚁百灵发布 Ling-3.2-flash 原生多模态模型",
      "summary": "560B 总参 / 25B 激活、100 万 token 上下文，支持文字、图像与视频输入，重点强化复杂视觉理解、多模态长程 Agent、3D 理解与医疗多模态。官方自测 OmniDocBench1.5 得 92.21（Claude Opus 5 max 为 90.56）；API 输入 0.30 美元、输出 0.90 美元/百万 token，兼容 OpenAI 与 Anthropic 协议，前两周免费。",
      "products": [
        "Ling-3.2-flash",
        "蚂蚁百炼",
        "百灵大模型"
      ],
      "source": "IT之家 / 动点科技",
      "url": "https://next.ithome.com/archiver/1/023/043.htm",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "560B 总参 / 25B 激活 · 1M 上下文 · 图文视频输入 · $0.30 / $0.90 每百万 token · 兼容 OpenAI / Anthropic 协议"
    },
    {
      "id": "an02",
      "company": "ant",
      "date": "2026-10",
      "category": "产品上线",
      "title": "灵光 2.0 升级「能管事的 AI 助理」，个人智能体内测",
      "summary": "10 月蚂蚁灵光 2.0 升级为可跨平台持续运行任务的 AI 助理，并内测对标 Meta Muse 的个人智能体；灵光随后新增微信 ClawBot、QQ 机器人等连接器。同期 Ling-3.1-flash 上架阿里云百炼。",
      "products": [
        "灵光 2.0",
        "Ling-3.1-flash",
        "ClawBot"
      ],
      "source": "网经社《人工智能月刊》10月号 / 一周进展汇总",
      "url": "https://ec100.cn/detail--6665450.html",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "hw01",
      "company": "huawei",
      "date": "2026-10",
      "category": "硬件终端",
      "title": "华为发布昇腾 960 超节点，全球首个 NPO 近封装光学方案",
      "summary": "全联接大会发布，单超节点 4096 卡、RTT 时延低至 2μs，提供 8 EFLOPS FP8 算力，可支撑十万亿参数模型训练；基于灵衢统一互联，集群最大支持百万卡。960DT 提前至 2027 Q1、960PR 至 2027 Q3，970/980 按年迭代。研报称 4K 超节点组成的 10 万卡集群 MFU 提升 2.75 倍。",
      "products": [
        "昇腾 960",
        "灵衢 UnifiedBus",
        "Hi-ONE",
        "CANN"
      ],
      "source": "中财网 / 东方财富研报",
      "url": "https://stock.cfi.cn/p20261013000052.html",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "单超节点 4096 卡 · RTT 2μs · 8 EFLOPS FP8 · 最大百万卡集群 · 960DT 2027 Q1"
    },
    {
      "id": "hw02",
      "company": "huawei",
      "date": "2026-11-03",
      "category": "行业动态",
      "title": "昇腾生态 0Day 适配国产旗舰模型，走向预训练协同",
      "summary": "11 月 5 日 Kimi K3.1 Pro 权重发布同日，昇腾依托 vLLM Ascend、SGLang 实现 0Day 推理适配；此前 DeepSeek V4 在昇腾首发并完成全系列适配，9 月 30 日开源面向昇腾的基础设施组件。11 月 3 日《科创板日报》称 DeepSeek V5 计划基于昇腾开展预训练。",
      "products": [
        "昇腾",
        "Kimi K3.1 Pro",
        "DeepSeek V5",
        "vLLM Ascend"
      ],
      "source": "新浪财经 · 券商研报 / 澎湃新闻",
      "url": "https://stockfinance.sina.cn/stock/go.php/paper/reportid/848214934716/index.phtml",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "sf01",
      "company": "stepfun",
      "date": "2026-09-20",
      "category": "模型发布",
      "title": "阶跃星辰发布 Step 5 Preview，主打智能与成本的最优边界",
      "summary": "稀疏 MoE 600B 总参 / 27B 激活、100 万 token 上下文、原生视觉输入，采用 92 层「窄而深」Transformer 与长程 RL、上下文压缩，面向软件工程、专业知识工作与金融场景。Artificial Analysis 智能指数 44 分，官方称单任务成本约为 Claude Opus 5 的八分之一。",
      "products": [
        "Step 5 Preview"
      ],
      "source": "阶跃星辰官方",
      "url": "https://www.stepfun.com/step-5-preview",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "600B 总参 / 27B 激活 · 1M 上下文 · 视觉输入 · 92 层 · AA 指数 44"
    },
    {
      "id": "sf02",
      "company": "stepfun",
      "date": "2026-10-15",
      "category": "开源开放",
      "title": "Step 5 Preview 正式开源，同步放出技术报告与部署工具",
      "summary": "开放 BF16 与 FP8 权重、技术报告、配套开源工具及部署指南，上线 Hugging Face 与 ModelScope，支持 vLLM / SGLang 部署兼容 OpenAI 接口。开源当日位列 OpenRouter Token 用量周榜及日榜全球第二；10 月 12 日起可在腾讯 WorkBuddy 中直接调用。",
      "products": [
        "Step 5 Preview",
        "Hugging Face",
        "ModelScope"
      ],
      "source": "上观新闻 / 新浪财经",
      "url": "https://finance.sina.com.cn/jjxw/2026-10-15/doc-inivhyan4606407.shtml",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "mt01",
      "company": "meituan",
      "date": "2026-11-02",
      "category": "模型发布",
      "title": "美团发布 LongCat-2.5，1.6 万亿参数全程国产算力训练",
      "summary": "面向长程智能体任务的原生多模态模型，总参 1.6 万亿、每 token 激活约 480 亿，中训练阶段采用最长 1M token 序列；强化原生视觉理解与智能体编程，美团称是目前国产算力上完成的最大训练任务。同期推出 AI 经营工作台「妙手」，已服务古茗、益禾堂等连锁品牌。",
      "products": [
        "LongCat-2.5",
        "妙手"
      ],
      "source": "南方都市报 / 网易",
      "url": "https://www.163.com/dy/article/LAO4J7GL05129QAF.html",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "1.6T 总参 / 约 48B 激活 · 1M 序列中训练 · 全程国产算力 · MIT 开源"
    },
    {
      "id": "mt02",
      "company": "meituan",
      "date": "2026-11-10",
      "category": "开源开放",
      "title": "美团开源 LongCat-2.5，采用 MIT 协议",
      "summary": "正式以 MIT 协议开源，支持商用推理部署与二次训练、无需额外授权；1M 上下文长程训练累计数万亿 token，并把真实 Agent 失败轨迹转化为可复现的训练任务。此前 MiniMax、阶跃、小米等也密集放出开放权重。",
      "products": [
        "LongCat-2.5",
        "LongCat-2.0"
      ],
      "source": "美团消息 / 百度百科词条",
      "url": "https://baike.baidu.com/item/LongCat-2.5/69582445",
      "tier": 3,
      "tierName": "T3 行业聚合"
    },
    {
      "id": "if01",
      "company": "iflytek",
      "date": "2026-10-22",
      "category": "模型发布",
      "title": "科大讯飞发布星火 X2.6，首次推出端云一体协同架构",
      "summary": "基于全国产算力训练，云端模型支持百万 Token 上下文；按任务难度、端侧能力与数据安全需求在纯端侧、端云协同、纯云侧之间路由（准确率 96.1%）。超长上下文训练效率提升约 4 倍、国产芯片推理效率提升 4.5 倍；X2.6-4B 端侧模型智能体任务覆盖度 41.9%。",
      "products": [
        "星火 X2.6",
        "X2.6-4B",
        "飞星平台",
        "端云一体"
      ],
      "source": "重庆日报 / 1024 开发者节",
      "url": "https://www.cqrb.cn/jingji/zixun/2026-10-22/2802944_pc.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "云端 1M 上下文 · 端侧 4B / 1.7B · 训练效率 4× · 推理效率 4.5× · 路由准确率 96.1%"
    },
    {
      "id": "if02",
      "company": "iflytek",
      "date": "2026-11-02",
      "category": "开源开放",
      "title": "星火端侧模型登 Hugging Face 趋势榜，累计下载超 400 万次",
      "summary": "10 月 X2.6-4B 长期位列 Hugging Face 趋势榜前三，X2.5 / X2.6 官方及社区衍生版本累计下载超 400 万次，其中约 58% 来自第三方衍生模型。11 月乌镇世界互联网大会上，讯飞集中展示国产算力、端云协同与行业落地成果；同期 SparkAudio 1.0 上线，支持 99 种语言、202 种方言。",
      "products": [
        "星火 X2.6-4B",
        "SparkAudio 1.0",
        "Hugging Face"
      ],
      "source": "中国日报网 / 合肥晚报",
      "url": "https://gxq.hefei.gov.cn/xwdt/mtjj/18985671.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "mi01",
      "company": "xiaomi",
      "date": "2026-09-22",
      "category": "开源开放",
      "title": "小米发布并开源 MiMo-V2.6 Pro 与 Flash 全模态模型",
      "summary": "两款均为原生全模态、100 万 token 上下文，能力覆盖编码、电脑操作、3D 推理与内容创作。小米称 V2.6-Pro 在 Artificial Analysis 开放权重智能指数得 46.32 分，同等智能水平下成本约为海外模型的 1/20 至 1/60。",
      "products": [
        "MiMo-V2.6-Pro",
        "MiMo-V2.6-Flash"
      ],
      "source": "SiliconANGLE / CSDN 周报转述",
      "url": "https://blog.csdn.net/kenshin1980/article/details/166692685",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "原生全模态 · 1M 上下文 · AA 开放权重指数 46.32"
    },
    {
      "id": "mi02",
      "company": "xiaomi",
      "date": "2026-10",
      "category": "行业动态",
      "title": "MiMo-V2.6-Flash 挤进 OpenRouter 月榜前四",
      "summary": "10 月 OpenRouter 周榜第 8（6.07 万亿 Token）、月榜第 4（39.5 万亿 Token），与 DeepSeek、GLM、MiniMax 的 Flash 轻量版一同把国产模型送进前十。该周期榜单前五席位全部由国内大模型占据。",
      "products": [
        "MiMo-V2.6-Flash",
        "OpenRouter"
      ],
      "source": "界面新闻 / OpenRouter 榜单",
      "url": "http://mp.weixin.qq.com/s?__biz=MjM5NTE0ODc2Nw==&mid=2650991807&idx=1&sn=111899cf37208dcc947583afbbeafb9b",
      "tier": 2,
      "tierName": "T2 权威媒体"
    },
    {
      "id": "d05",
      "company": "deepseek",
      "date": "2026-10-17",
      "category": "模型发布",
      "title": "DeepSeek 官方发布 V4.1-Flash-1017，并开放 Search / Fetch 接口",
      "summary": "官方 API 文档公告：新版本在性能、任务完成速度与输出长度上较前代实现帕累托改进，已在官网、App 与 API 上线，并针对 DeepSeek Harness、CodeBuddy、WorkBuddy 优化。同步开放 Search 与 Fetch 接口（¥5/千次），模型权重在 Hugging Face 与 ModelScope 开源。",
      "products": [
        "V4.1-Flash-1017",
        "DeepSeek Harness",
        "Search / Fetch API"
      ],
      "source": "DeepSeek 官方 API 文档",
      "url": "https://api-docs.deepseek.com/zh-cn/news/news261017",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "V4.1-Flash-1017 权重开源 · Search / Fetch API 开放 · ¥5/千次"
    },
    {
      "id": "d06",
      "company": "deepseek",
      "date": "2026-11-13",
      "category": "产品上线",
      "title": "DeepSeek 开放全家桶应用 API，App 级能力全部可调用",
      "summary": "官方公告将联网搜索、深度思考搜索、文件输入、阅读链接、模型安全等能力整合进 Messages / Responses / Chat Completions 三类接口，OCR、ASR、TTS 另开放独立接口；工具调用与上下文拼接由服务端完成。同步开源轻量前端 Demo 与示例代码。",
      "products": [
        "全家桶应用 API",
        "deepseek_web_search",
        "deepseek_read_url",
        "OCR / ASR / TTS"
      ],
      "source": "DeepSeek 官方 API 文档",
      "url": "https://api-docs.deepseek.com/zh-cn/news/news261113/",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "联网搜索 / 文件 / URL / 安全 + OCR / ASR / TTS 独立接口 · 搜索 ¥5/千次 · OCR ¥1.5/千页"
    },
    {
      "id": "st01",
      "company": "sensetime",
      "date": "2026-11-02",
      "category": "模型发布",
      "title": "商汤发布日日新 SenseNova 6.8 Flash 正式版",
      "summary": "支持跨任务、跨会话协作，交付形态覆盖静态网页、动态内容与设计成果；设计生成支持 Web、SVG、Three.js、Blender、PPT，并可接入 Figma。官方称在智能体协作、数据分析与演示生成等场景超过部分国际前沿模型。可通过 SenseNova Studio、Token Plan、商汤小浣熊体验。",
      "products": [
        "SenseNova 6.8 Flash",
        "SenseNova Studio",
        "商汤小浣熊"
      ],
      "source": "上海证券报 · 中国证券网",
      "url": "https://www.cnstock.com/commonDetail/822955",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "跨任务跨会话协作 · Web / SVG / Three.js / Blender / PPT 生成 · 可接入 Figma"
    },
    {
      "id": "st02",
      "company": "sensetime",
      "date": "2026-11-02",
      "category": "开源开放",
      "title": "商汤开源 SenseNova Loop-9B-Preview",
      "summary": "与 SenseNova 6.8 Flash 同日开源。IDC 2026 上半年中国企业级 MaaS 报告显示，商汤大装置在大模型私有化部署市场以 9.4% 份额位列第二。",
      "products": [
        "SenseNova Loop-9B-Preview",
        "商汤大装置"
      ],
      "source": "上海证券报 · 中国证券网 / 中国经济网",
      "url": "https://www.cnstock.com/commonDetail/822955",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "kl01",
      "company": "kunlun",
      "date": "2026-10",
      "category": "开源开放",
      "title": "昆仑万维迭代发布并开源 Matrix-Game 4.0",
      "summary": "公司投资者关系活动记录表披露：10 月迭代发布并开源 Matrix-Game 4.0，配套 Coding Agent，支持通过自然语言定制游戏场景、交互规则与玩法逻辑；官方称其为全球首款运行在单张消费级显卡上的视频大模型游戏。同期推出 Mureka V9.5 与 O3 两款音乐大模型。",
      "products": [
        "Matrix-Game 4.0",
        "Mureka V9.5",
        "Mureka O3",
        "Skywork"
      ],
      "source": "昆仑万维投资者关系活动记录表（2026-004）",
      "url": "https://stock.cfi.cn/p20261103000142.html",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "kl02",
      "company": "kunlun",
      "date": "2026-11-02",
      "category": "战略资本",
      "title": "昆仑万维 Q3：天工 AI 收入 43.21 亿元，同比 +168.29%",
      "summary": "投资者关系活动记录表披露前三季度营收 89.37 亿元（同比 +53.96%）、归母净利润扭亏，海外收入 87.06 亿元（+60.78%），天工 AI 业务收入 43.21 亿元（+168.29%），第三季度毛利率 74.41%。旗下 SkyProduction（天工工作台）宣布接入可灵 Kling 4.0。",
      "products": [
        "天工 AI",
        "SkyProduction",
        "Kling 4.0"
      ],
      "source": "昆仑万维投资者关系活动记录表（2026-004）",
      "url": "https://stock.cfi.cn/p20261103000142.html",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "ss01",
      "company": "shengshu",
      "date": "2026-10-08",
      "category": "模型发布",
      "title": "生数科技发布 Vidu Q4 Preview",
      "summary": "升级人物演绎、镜头语言与复杂视效，最多支持 15 张参考图、3 段参考音频，支持 2K 与 4K 输出；首发优惠价 0.09 元/秒起。公司 2022 年提出 U-ViT 架构，2024 年 4 月首次公开 Vidu。",
      "products": [
        "Vidu Q4 Preview",
        "U-ViT"
      ],
      "source": "中国日报网",
      "url": "https://cn.chinadaily.com.cn/a/202610/09/WS6ac8a8b9e4b09a165c78e7a2.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "最多 15 参考图 / 3 参考音频 · 2K / 4K 输出 · ¥0.09/秒起"
    },
    {
      "id": "ss02",
      "company": "shengshu",
      "date": "2026-10-07",
      "category": "产品上线",
      "title": "Vidu 官方更新日志上线 Q4 preview 模型",
      "summary": "官方 API 文档更新记录：新增 Vidu Q4 preview，支持参考音色、更自然的人物情绪、高动态场景流畅运动、爆炸/烟火/粒子等复杂视效、2K 与 4K 输出，最多 15 张参考图，并降低生成成本。同期记录 S2-Avatar 实时交互与 S2-Editing 实时编辑模型。",
      "products": [
        "Vidu Q4 preview",
        "S2-Avatar",
        "S2-Editing"
      ],
      "source": "Vidu 官方 API 文档 · Update Notice",
      "url": "https://platform.vidu.com/docs/api-reference/updates",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "mb01",
      "company": "modelbest",
      "date": "2026-10-13",
      "category": "模型发布",
      "title": "面壁智能发布 MiniCPM-V 4.7，35B 模型跑上手机",
      "summary": "含 35B-A3B 与 1B 两个版本。35B-A3B 采用 MoE 架构，总参 350 亿、每次激活 30 亿，约 3GB 内存即可运行，解码速度 15+ token/s；发布当日支持瑞芯微、NVIDIA、Intel、Apple 芯片平台及 iOS / 安卓 / 鸿蒙系统。自研 LES 前瞻专家调度技术同步开源。",
      "products": [
        "MiniCPM-V 4.7",
        "LES",
        "OpenBMB"
      ],
      "source": "科技日报 / 新京报",
      "url": "https://www.163.com/dy/article/LBC6FBE90514R9OJ.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "35B 总参 / 3B 激活 MoE · 约 3GB 内存 · 15+ token/s · iOS / 安卓 / 鸿蒙"
    },
    {
      "id": "mb02",
      "company": "modelbest",
      "date": "2026-11-10",
      "category": "开源开放",
      "title": "面壁开源端侧推理引擎与 App，MiniCPM 累计下载超 6000 万次",
      "summary": "科技日报报道：面壁智能已开源推理引擎、App 代码及相关安装包；MiniCPM 系列全球累计下载突破 6000 万次，覆盖文本、视觉、语音全模态。35B 模型在手机端内存占用约 3GB、生成速度超 20 token/s，1B 版本下探至千元机。",
      "products": [
        "MiniCPM",
        "端侧推理引擎",
        "OpenBMB"
      ],
      "source": "科技日报（环球网转载）",
      "url": "https://www.163.com/dy/article/LBC6FBE90514R9OJ.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "cm01",
      "company": "chinamobile",
      "date": "2026-11-06",
      "category": "生态大会",
      "title": "中国移动启动 MoMA 开放计划与九天众擎 AI+ 联创计划",
      "summary": "2026 移动网络大会算网数智全栈创新论坛上发布。MoMA 开放计划围绕 Agent、终端、模型、技术、算力五大方向共建生态，配套营销资源共享、Token 费用扶持、伙伴共赢分成；九天众擎计划开放九天安全可信大模型、MaaS 与智能体平台、梧桐·模数共振平台等全栈能力。",
      "products": [
        "九天大模型",
        "MoMA",
        "梧桐·模数共振"
      ],
      "source": "新华社客户端",
      "url": "https://h.xinhuaxmt.com/vh512/share/13364128",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "ct01",
      "company": "chinatelecom",
      "date": "2026-11-06",
      "category": "产品上线",
      "title": "中国电信星辰超级智能体 TeleAgent 升级 V3.0",
      "summary": "推出「智能体 + 云电脑」模式，桌面端、移动端、网页端共控同一云端运行环境；新增 9 大生态连接器，Office 系列深度适配。在 28 个场景、336 个用例的安全测试中使用率 99.7%，IDC《中国企业级通用 Agent 产品技术评估》综合得分 6.85、位列第三。",
      "products": [
        "TeleAgent V3.0",
        "星辰大模型",
        "智能体云电脑"
      ],
      "source": "上海证券报 · 中国证券网",
      "url": "https://finance.sina.com.cn/roll/2026-11-09/doc-iniycfna6551545.shtml",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体"
    },
    {
      "id": "d20261120-01",
      "company": "alibaba",
      "date": "2026-11-19",
      "category": "战略资本",
      "title": "阿里发布 2026 年 9 月季度业绩：AI 云与算力服务收入 609.73 亿元，同比增 53%",
      "summary": "截至 2026 年 9 月 30 日止季度，AI 云与算力服务收入 609.73 亿元、同比增长 53%，外部客户收入同比加速至 64%，外部经常性收入增长 67%；AI 相关产品收入 179.18 亿元，连续第 13 个季度三位数增长。经调整 EBITA 88.38 亿元、同比增长 121%，利润率 14.5%；季度资本开支 504.77 亿元、同比增长 60%。",
      "spec": "AI云与算力服务收入 609.73 亿元 / 同比 +53% / AI 相关产品收入 179.18 亿元 / 经调整 EBITA 88.38 亿元 (+121%) / 资本开支 504.77 亿元 (+60%)",
      "products": [
        "阿里云",
        "Qwen4-Max",
        "平头哥"
      ],
      "source": "阿里巴巴集团官网业绩公告",
      "url": "https://www.alibabagroup.com/document-2060147792046718976",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "d20261120-02",
      "company": "alibaba",
      "date": "2026-11-19",
      "category": "硬件终端",
      "title": "阿里公告披露芯片路线：真武 V900 明年一季度上市，平头哥 SAIL 软件栈开源",
      "summary": "官方业绩公告称，下一代训推一体 AI 芯片真武 V900 基于自研并行计算架构，计划 2027 年第一季度上市；同时开源真武芯片软件栈「平头哥 SAIL」，用于简化应用迁移并兼容主流 AI 框架。8 月推出的真武 M890 超节点实例支持超过 2 万亿参数模型推理，集成 V900 的下一代超节点单一集群可扩展至 50 万卡。",
      "spec": "真武 V900 计划 2027 Q1 上市 / 真武 M890 超节点支持 > 2 万亿参数推理 / 下一代超节点单一集群 50 万卡",
      "products": [
        "真武V900",
        "真武M890",
        "平头哥SAIL",
        "平头哥"
      ],
      "source": "港交所业绩公告 / 阿里巴巴集团",
      "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/1119/2026111900874_c.pdf",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "d20261120-03",
      "company": "huawei",
      "date": "2026-11-11",
      "category": "开源开放",
      "title": "华为 CSL 开源 MACaQ 量化框架：32.5GB 显存 64 分钟完成 1220 亿参数模型量化",
      "summary": "华为计算系统实验室以 Apache-2.0 开源模型无关量化框架 MACaQ，支持 llama.cpp、vLLM、Diffusers、PyTorch，覆盖文本、图像、视频、音频模型。论文报告 MXFP4 W4A4 后训练量化可在 32.5GB 显存下 64 分钟量化 1220 亿参数模型，在 Qwen3-32B 上端到端推理开销 2.3%；仓库另附 MACaQ-R 用于细化已有 GGUF 模型。",
      "spec": "Apache-2.0 / MXFP4 W4A4 / 122B 模型 64 分钟量化 / 32.5GB 显存 / Qwen3-32B 推理开销 2.3%",
      "products": [
        "MACaQ",
        "MACaQ-R",
        "昇腾"
      ],
      "source": "华为 CSL 官方 GitHub / arXiv:2611.10649",
      "url": "https://github.com/huawei-csl/MACaQ",
      "tier": 1,
      "tierName": "T1 官方一手"
    },
    {
      "id": "d20261120-04",
      "company": "tencent",
      "date": "2026-11-18",
      "category": "开源开放",
      "title": "腾讯混元开源 Hy4 flash 三版本：标准版 / FP8 / Base",
      "summary": "腾讯混元宣布开源 Hy4 flash 家族，包含 Hy4 flash、Hy4 flash-FP8 与 Hy4 flash-Base 三个版本，权重在 GitHub、Hugging Face、ModelScope、GitCode 同步放出。模型总参 224B（含 64B Engram 参数）、每 token 激活 12B，支持多模态输入与 100 万 token 上下文；官方表示正在加速推进旗舰 Hy4 模型开源。",
      "products": [
        "Hy4 flash",
        "混元 Hy4"
      ],
      "source": "腾讯混元官方权重仓库（Hugging Face）",
      "url": "https://huggingface.co/tencent/Hy4-flash",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "224B 总参（含 64B Engram）/ 12B 激活 · 1M 上下文 · 标准 / FP8 / Base 三版本"
    },
    {
      "id": "d20261120-05",
      "company": "tencent",
      "date": "2026-11-19",
      "category": "战略资本",
      "title": "腾讯三季报：Hy4 登顶 Agent Arena 中国模型榜，WorkBuddy 日活破千万",
      "summary": "腾讯 2026 Q3 财报发布：游戏收入 665 亿元（本土 476 亿、海外 189 亿），微信及 WeChat 合并月活 14.49 亿。AI 侧：Hy4 位列 Agent Arena 全球开源模型前列、Artificial Analysis 智能指数中国模型第二；Hy4 flash 上线首日 Token 调用量突破 50 万亿并登顶 OpenRouter 日榜；WorkBuddy 首次披露日活超 1000 万、日均 Token 消耗超 100 万亿，企业版进入 50 多个行业、覆盖中国 500 强企业的 50%。",
      "products": [
        "Hy4",
        "Hy4 flash",
        "WorkBuddy",
        "元宝"
      ],
      "source": "新华网",
      "url": "https://www.xinhuanet.com/tech/20261119/2de9c90cea4e406ea38469875a3b6439/c.html",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "Q3 游戏收入 665 亿 · Hy4 flash 首日 50 万亿 Token · WorkBuddy 日活 1000 万+ / 日均 100 万亿 Token"
    },
    {
      "id": "d20261120-06",
      "company": "bytedance",
      "date": "2026-11-19",
      "category": "产品上线",
      "title": "火山引擎上线豆包实时音视频通话模型 SeedRealtime 1.0 API",
      "summary": "火山引擎正式全量开放 SeedRealtime 1.0 API 服务：将声音、画面、时序与表达统一到一个端到端模型，在连续多模态信息流上实时交互，替代传统 ASR + VLM + TTS 级联方案。官方称相比级联模型，音视频对话节奏问题减少一半，具备持续环境感知与主动开口能力，适用于语音助手、智能硬件、实时客服等场景。",
      "products": [
        "SeedRealtime 1.0",
        "豆包",
        "火山引擎"
      ],
      "source": "IT之家（凤凰网科技转载）",
      "url": "https://tech.ifeng.com/c/8yBFqL4cEQv",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "端到端音视频融合 · 对话节奏问题减少 50% · 支持主动表达与环境感知"
    },
    {
      "id": "d20261120-07",
      "company": "zhipu",
      "date": "2026-11-19",
      "category": "开源开放",
      "title": "智谱开源 GLM-4.7（358B / MIT）与 GLM-4.7-Flash（30B/3B）",
      "summary": "转述 BusinessWire 官方公告与多家报道：智谱发布并开源新一代旗舰 GLM-4.7，总参 358B、每 token 激活约 32B，MIT 协议，权重上线 Hugging Face，Cerebras 推理吞吐超 1500 token/s；内置 Interleaved / Preserved / Turn-Level 三种面向多步智能体的推理模式，厂商自报在 SWE-bench Verified、TerminalBench 2.0、τ²-Bench 等评测居开源模型第一（尚待独立复现），兼容 Claude Code、Cline、OpenCode 等框架。GLM-4.7-Flash（30B 总参 / 3B 激活）同日开源，在智谱开放平台免费替代 GLM-4.5-Flash。网传「1.2% 幻觉率」「纯昇腾训练」无一手信源，不予采信。",
      "products": [
        "GLM-4.7",
        "GLM-4.7-Flash"
      ],
      "source": "The Agent Times（转述 BusinessWire 官方公告）",
      "url": "https://theagenttimes.com/agents/article/zhipu-ai-open-sources-glm-4-7-a-358b-parameter-model-built-f-092ca953",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "358B / 32B 激活 MoE · MIT · Cerebras 1500+ tok/s · Flash 版 30B / 3B 免费"
    },
    {
      "id": "d20261120-08",
      "company": "sensetime",
      "date": "2026-11-19",
      "category": "行业动态",
      "title": "商汤 SenseNova U1 Pro 登顶 DesignArena 图片生成 / 编辑中国双榜",
      "summary": "商汤官网披露：DesignArena 图片榜单更新，日日新 SenseNova U1 Pro 在图片生成与图片编辑两大榜单均位列中国第一、全球第六（前五位均为 OpenAI GPT Image 2.x 系列模型）。模型支持从论文提取信息生成视觉内容、商品图与详情页设计、海报菜单分镜等系列交付，已在商汤小浣熊上线体验。",
      "products": [
        "SenseNova U1 Pro",
        "商汤小浣熊"
      ],
      "source": "商汤科技官网",
      "url": "https://www.sensetime.com/cn/news/sensenova-u1-pro-design-arena-20261119-1414",
      "tier": 1,
      "tierName": "T1 官方一手",
      "spec": "DesignArena 图片生成 + 图片编辑中国第一 · 全球第六"
    },
    {
      "id": "d20261120-09",
      "company": "kuaishou",
      "date": "2026-11-19",
      "category": "战略资本",
      "title": "快手 Q3 营收 316 亿元：Kling 4.0 上线带动可灵 AI 流水提升",
      "summary": "快手发布 2026 Q3 业绩并召开电话会：总收入 316 亿元、经调整净利润 7.9 亿元，日活 4.17 亿、月活 8.19 亿创新高。CEO 程一笑披露 Kling 4.0 于 10 月 15 日全量上线后可灵流水提升，收入增长由企业客户 API 调用与专业创作者付费订阅双轮驱动；Kling 4.0 API 已于 10 月 28 日向全球企业客户开放。截至 9 月平台日均活跃短剧数量较 1 月增长超 350%。",
      "products": [
        "Kling 4.0",
        "可灵 AI"
      ],
      "source": "上海证券报 · 中国证券网",
      "url": "https://www.cnstock.com/commonDetail/830954",
      "tier": 1.5,
      "tierName": "T1.5 官方媒体",
      "spec": "Q3 营收 316 亿 · 日活 4.17 亿 · 短剧日均活跃数量较 1 月 +350%"
    },
    {
      "id": "d20261120-10",
      "company": "huawei",
      "date": "2026-11-16",
      "category": "开源开放",
      "title": "华为云发布并开源昇腾原生具身世界模型 CloudRobo-WM1.2，双榜第一",
      "summary": "转述证券日报等报道：华为云「行业AI梦工厂」发布并开源昇腾原生具身世界模型 CloudRobo-WM1.2，采用 PPA 多模态世界表征与原生 DualAct 架构，由世界模型直接生成机器人动作，在 RoboTwin 2.0 与 LiberoPro 2.0 两项仿真评测均位列第一。权重、推理代码、后训练代码全量开源，训练框架与 WAM 昇腾算力代码库面向核心伙伴定向开放；同日华为云与福龙马联合研制的下一代智能清扫机器人启动预售。",
      "products": [
        "CloudRobo-WM1.2",
        "昇腾",
        "行业AI梦工厂"
      ],
      "source": "ChinaTechNews（转述证券日报报道）",
      "url": "https://www.chinatechnews.com/2026/11/20/133175-huawei-cloud-launches-industry-ai-dream-factory-and-open-sources-embodied-world-model",
      "tier": 3,
      "tierName": "T3 行业聚合",
      "spec": "DualAct 原生动作生成 · RoboTwin 2.0 / LiberoPro 2.0 双榜第一 · 昇腾训练"
    },
    {
      "id": "d20261120-11",
      "company": "modelbest",
      "date": "2026-11-19",
      "category": "行业动态",
      "title": "面壁智能：MiniCPM 家族模型全球下载量超 7000 万次",
      "summary": "面壁智能官方宣布，截至 2026 年 11 月，MiniCPM 家族模型全球下载量已超 7000 万次（10 天前该数字为 6000 万）。10 月发布的 MiniCPM-V 4.7 提供 35B-A3B 与 1B 两种规格，35B-A3B 为端侧首个无损流畅运行的开源 MoE 模型；MiniCPM 系列已深度赋能三星 Galaxy Z Fold8 / Flip8 的 Galaxy AI。",
      "products": [
        "MiniCPM",
        "MiniCPM-V 4.7"
      ],
      "source": "IT之家（凤凰网科技转载）",
      "url": "https://tech.ifeng.com/c/8yBfAjCyZ3V",
      "tier": 2,
      "tierName": "T2 权威媒体",
      "spec": "MiniCPM 家族全球下载 7000 万+ 次（11 月 10 日为 6000 万）"
    }
  ]
};
