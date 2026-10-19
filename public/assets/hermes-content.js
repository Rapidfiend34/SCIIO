// Content adapted from the official Hermes landing page, reviewed 2026-10-19.
globalThis.SCIIO_HERMES = {
  source: 'https://hermes-agent.nousresearch.com/',
  links: {
    hermesHome: 'https://hermes-agent.nousresearch.com/',
    hermesDocs: 'https://hermes-agent.nousresearch.com/docs',
    hermesGithub: 'https://github.com/NousResearch/hermes-agent',
    hermesCloud: 'https://portal.nousresearch.com/cloud',
    hermesPortal: 'https://portal.nousresearch.com/',
    hermesPlans: 'https://portal.nousresearch.com/manage-subscription',
    hermesCommunity: 'https://discord.gg/nousresearch',
    hermesDownloads: 'https://hermes-agent.nousresearch.com/#downloads',
    hermesInstall: 'https://hermes-agent.nousresearch.com/#install',
  },
  installCommand: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash',
  pages: {
    overview: {
      id: 'hermes-overview', title: 'THE AGENT THAT GROWS WITH YOU', tag: 'HERMES AGENT / NOUS RESEARCH / MIT',
      body: 'An open-source agent that keeps context across sessions. Conversations, memories and reusable skills stay with you as your projects develop.\n\nWork from the desktop, terminal or a connected messaging platform. Run locally, use an isolated environment, or choose optional cloud hosting.\n\nThe agent is free under the MIT license. Model providers and hosted services are billed separately.',
    },
    features: {
      id: 'hermes-features', title: 'SIX WAYS TO EXTEND YOUR REACH', tag: 'CONNECT / REMEMBER / SCHEDULE / DELEGATE',
      body: '01 CONNECT / LIVES EVERYWHERE\nUse a shared agent across CLI, Telegram, Discord, Slack, WhatsApp, Signal and email.\n\n02 REMEMBER / PERSISTENT MEMORY\nKeep project context and build reusable skills from previous work.\n\n03 SCHEDULE / FOCUSED AUTOMATION\nSchedule reports, backups and briefings in natural language through the gateway.\n\n04 DELEGATE / TASKS MULTIPLIED\nGive isolated subagents their own conversations and terminals.\n\n05 SEARCH / BROWSE THE WEB\nCombine web search, browser tools, vision, image generation and speech.\n\n06 EXPERIMENT / ISOLATED SANDBOXING\nChoose local, Docker, SSH, Singularity or Modal execution backends.',
    },
    install: {
      id: 'hermes-install', title: 'YOUR TERMINAL. YOUR AGENT.', tag: 'MACOS / LINUX / WINDOWS / CLOUD',
      body: 'MACOS + LINUX\nCopy the official install command below and run it in your own terminal when ready.\n\nOFFICIAL COMMAND\ncurl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash\n\nWINDOWS\nThe official site offers a Windows desktop installer, alongside a macOS desktop app. Use DOWNLOADS to choose your platform.\n\nNEXT STEP\nFollow the setup flow to connect a model provider, then start a conversation.\n\nALWAYS ON\nOptional cloud deployment is available through Nous Portal.\n\nThis SCIIO screen displays information and copies text; it does not install or run an agent.',
    },
    faqs: {
      id: 'hermes-faqs', title: 'FREQUENTLY ASKED QUESTIONS', tag: 'ANSWERS FROM THE HERMES PROJECT',
      body: 'HOW DOES PRICING WORK?\nHermes is free and MIT licensed. Your model provider and optional hosting have separate costs.\n\nHOW DO I START?\nInstall the desktop app or use the terminal installer, connect a model provider and begin chatting.\n\nWHERE CAN I CHAT?\nOn the desktop, in the terminal or through supported messaging integrations.\n\nDOES MY DATA PERSIST?\nConversations, memories and skills are stored between sessions. Back up your Hermes data when moving devices.\n\nWHAT IF I STOP THE AGENT?\nThe local process stops; saved data remains. Tasks requiring an active process pause until it runs again. Hosted agents are managed separately.',
    },
    portal: {
      id: 'hermes-portal', title: 'NOUS PORTAL / CHOOSE YOUR ACCESS', tag: 'MODELS / TOOL CREDITS / OPTIONAL CLOUD',
      body: 'Use your own model provider or connect to Nous Portal for model and tool credits. Cloud hosting is optional.\n\nFREE / $0\nFree models, standard rate limits, no monthly credits.\n\nPLUS / $20 PER MONTH\n$22 in monthly credits; $10 rollover cap.\n\nSUPER / $100 PER MONTH\n$110 in monthly credits; $50 rollover cap.\n\nULTRA / $200 PER MONTH\n$220 in monthly credits; $100 rollover cap.\n\nPaid tiers list access to 200+ models and hosted tools. Snapshot: 19 OCT 2026. Check CURRENT PLANS for live pricing and terms.',
    },
  },
};
