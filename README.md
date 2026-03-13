## 18 Skills · 十八般兵器

这里是我的 AI Skills 武库 —— 以中国武术里的「十八般兵器」为灵感，把一个个实用的 AI 能力打磨成可复用的技能，随时抽刀出鞘、解决具体问题。

This repository is a curated collection of reusable AI skills, designed like a toolbox of “18 weapons” for everyday development, automation, and personal workflows.

---

## 仓库结构 / Repository Structure

```bash
.
├── README.md              # 本文件 / This file
├── skills/                # 所有 Skills 的主目录
│   ├── README.md          # Skills 索引与导航
│   └── <skill-name>/      # 每个 Skill 一把「兵器」
│       ├── README.md      # Skill 说明与使用文档（人类友好）
│       └── SKILL.md       # Skill 的正式定义与指令（给 AI 用）
└── .gitignore
```

- **`skills/`**: 每个子目录就是一把「兵器」（一个独立的 AI Skill）。
- **`README.md` (per skill)**: 面向使用者的介绍、用例、配置方法。
- **`SKILL.md`**: Skill 的正式描述文件，定义触发词、能力边界和行为规范。

示例结构可以参考任意已存在的 Skill 目录（如 `skills/matter-day-reminder/`）。

---

## Skill 设计规范 / Skill Conventions

每个 Skill 推荐至少包含以下内容：

- **`README.md`**
  - Skill 做什么（What）
  - 适用场景（When）
  - 使用方式与示例（How）
- **`SKILL.md`**
  - Skill 描述与目标
  - 触发关键词（让模型知道何时启用）
  - 行为约束与边界
  - 输入 / 输出规范

如有需要，还可以为 Skill 添加：

- **脚本与工具代码**（如 `scripts/`, `src/` 等）
- **测试用例**（如 `tests/`）
- **示例数据**（如 `examples/`）

---

## 如何锻造一件新兵器 / Create a New Skill

1. **创建目录**
   - 在 `skills/` 下新建一个子目录，例如：
     - `skills/matter-day-reminder/`
     - `skills/<your-new-skill>/`

2. **编写文档**
   - 在新目录中创建：
     - `README.md`：写给人看的使用说明
     - `SKILL.md`：写给 AI 的 Skill 定义（可参考现有 Skill）

3. **更新索引**
   - 在 `skills/README.md` 中添加你的 Skill 条目（名称、简介、路径）。

4. **本地测试与迭代**
   - 在自己的工作流中实际调用这个 Skill，根据使用体验不断打磨指令与文档。

---

## 适用场景 / When to Use This Repo

- 想把一些高频「套路操作」沉淀为可复用的 AI 能力。
- 想为 Cursor / 本地代理 / 其他 LLM 环境维护一份自己的 Skill 武库。
- 想系统化管理技能的说明文档、触发词、行为边界与测试示例。

---

## 命名哲学 / Naming Philosophy

- 仓库名叫 **18 Skills / 十八般兵器**，不要求真的只限制在 18 个 Skills，但希望每个加入的 Skill 都是「打磨过的兵器」，而不是一次性脚本。
- 优先选择 **清晰、具体、有画面感** 的名字，例如：
  - `matter-day-reminder`：重要日期提醒 & 礼物建议助手
  - 未来可以是：`code-blacksmith`, `reading-sensei`, `finance-ledger` 等

愿这个仓库，能像武馆里的兵器架一样：拿得出手，用得顺手。
