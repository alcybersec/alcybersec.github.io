/**
 * Portfolio Website - Projects data + renderer
 * Static data only (no live GitHub API). To add a project, append one object
 * to the `projects` array below — no HTML editing required.
 */

const projects = [
    {
        name: "StudyAIO",
        featured: true,
        tagline: "Local-first AI study workspace that turns lecture files (PDF/DOCX/PPTX) into organized, searchable, exam-ready materials.",
        tech: ["FastAPI", "Celery", "React 19", "TypeScript", "PostgreSQL + pgvector", "Redis", "Docker", "AWS Terraform"],
        metrics: ["38 data models", "111 API endpoints", "~1,200 tests", "4 AI providers"],
        highlights: [
            "6-stage processing pipeline (ingest \u2192 classify \u2192 extract \u2192 summarize \u2192 index \u2192 assets)",
            "Semantic search + RAG Q&A with source citations (pgvector)",
            "SM-2 spaced-repetition flashcards, quiz/exam engine, D3 knowledge graph",
            "Multi-provider AI (Claude CLI / Anthropic / OpenAI / Ollama), switchable at runtime"
        ],
        status: "Active \u00b7 v2",
        repo: "https://github.com/alcybersec/StudyAIO",
        demo: null
    },
    {
        name: "Transaction Intelligence App",
        featured: false,
        tagline: "Self-hosted financial transaction intelligence \u2014 ingests SMS (Tasker) and email (Proton Bridge), parses bank notifications, and serves an analytics PWA. Data stays on your hardware.",
        tech: ["FastAPI", "React", "Vite PWA", "PostgreSQL", "Redis / RQ", "Ollama", "Docker"],
        metrics: ["Pluggable bank adapters", "Local-only AI", "MIT licensed"],
        highlights: [],
        status: "Shipped \u00b7 v1.0.0",
        repo: "https://github.com/alcybersec/transaction_intelligence_app",
        demo: null
    },
    {
        name: "Homelab Infrastructure",
        featured: false,
        tagline: "Infrastructure-as-Code for a 22-host Proxmox homelab \u2014 Ansible automation, full observability, and layered security.",
        tech: ["Ansible", "Proxmox VE", "Prometheus", "Grafana", "Loki", "Caddy", "CrowdSec", "Authelia", "Infisical"],
        metrics: ["22 hosts", "10 playbooks / 8 roles", "23 scrape targets", "17 alert rules", "5 dashboards"],
        highlights: [],
        status: "Active",
        repo: "https://github.com/alcybersec/homelab-infrastructure",
        demo: null
    },
    {
        name: "n8n Homelab Automation",
        featured: false,
        tagline: "Five production n8n workflows powering AI incident response, daily infrastructure digests, Docker update orchestration, and security correlation.",
        tech: ["n8n", "Ollama (llama3.2)", "Trivy", "Prometheus / Alertmanager", "Telegram", "SSH"],
        metrics: ["5 workflows", "AI auto-remediation w/ kill switch", "CVE-gated deploys"],
        highlights: [],
        status: "Active",
        repo: "https://github.com/alcybersec/n8n-homelab-automation",
        demo: null
    }
];

/* ----------------------------------------------------------------------- */

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// "Active" / "Active · v2" -> active (green) ; "Shipped · v1.0.0" -> shipped (blue)
function statusClass(status) {
    var first = status.split(/[\s\u00b7]/)[0].toLowerCase();
    if (first === 'shipped') { return 'shipped'; }
    if (first === 'active')  { return 'active'; }
    return 'neutral';
}

function renderProject(p) {
    var tech = p.tech.map(function (t) {
        return '<span class="tech-badge">' + escapeHtml(t) + '</span>';
    }).join('');

    var metrics = p.metrics.map(function (m) {
        return '<span class="metric-chip"><i class="fas fa-circle-check"></i>' + escapeHtml(m) + '</span>';
    }).join('');

    var highlights = '';
    if (p.highlights && p.highlights.length) {
        highlights = '<ul class="project-highlights">' +
            p.highlights.map(function (h) {
                return '<li>' + escapeHtml(h) + '</li>';
            }).join('') +
            '</ul>';
    }

    var links = '<a class="project-link" href="' + p.repo + '" target="_blank" rel="noopener noreferrer">' +
                '<i class="fab fa-github"></i> View Repository</a>';
    if (p.demo) {
        links += '<a class="project-link" href="' + p.demo + '" target="_blank" rel="noopener noreferrer">' +
                 '<i class="fas fa-external-link-alt"></i> Demo</a>';
    }

    var sClass = statusClass(p.status);
    var featuredLabel = p.featured
        ? '<span class="featured-flag"><i class="fas fa-star"></i> Featured</span>'
        : '';

    return '' +
        '<article class="project-card' + (p.featured ? ' featured' : '') + '">' +
            '<div class="project-card-head">' +
                '<div class="project-title-row">' +
                    featuredLabel +
                    '<h3 class="project-title">' + escapeHtml(p.name) + '</h3>' +
                '</div>' +
                '<span class="status-pill ' + sClass + '">' + escapeHtml(p.status) + '</span>' +
            '</div>' +
            '<p class="project-tagline">' + escapeHtml(p.tagline) + '</p>' +
            highlights +
            '<div class="metric-row">' + metrics + '</div>' +
            '<div class="tech-row">' + tech + '</div>' +
            '<div class="project-links">' + links + '</div>' +
        '</article>';
}

document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('projects-grid');
    if (!grid) { return; }

    grid.innerHTML = projects.map(renderProject).join('');
});
