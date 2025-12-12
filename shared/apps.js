/**
 * Shared App List Configuration
 *
 * To add a new app:
 * 1. Add entry to APP_LIST below
 * 2. Done! All pages will automatically update
 */

const APP_LIST = [
    {
        id: 'yomu',
        name: 'YOMU',
        nameEn: 'YOMU',
        description: '小説家になろうリーダー',
        descriptionEn: 'Narou Novel Reader',
        url: 'https://kt828.github.io/yomu/',
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: '<svg viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>'
    },
    {
        id: 'kaku',
        name: 'KAKU',
        nameEn: 'KAKU',
        description: '小説執筆支援アプリ',
        descriptionEn: 'Novel Writing App',
        url: 'https://kt828.github.io/kaku/',
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'
    },
    {
        id: 'fandom',
        name: 'Fandom Finance',
        nameEn: 'Fandom Finance',
        description: '推し活のお金管理',
        descriptionEn: 'Fan Activity Budget',
        url: 'https://kt828.github.io/fandom/',
        color: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        icon: '<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>'
    }
];

/**
 * Render related apps section
 * @param {string} currentAppId - The ID of the current app (to exclude from list)
 * @param {string} containerId - The ID of the container element
 * @param {object} options - { lang: 'ja' | 'en', accentColor: '#hex' }
 */
function renderRelatedApps(currentAppId, containerId, options = {}) {
    const { lang = 'ja', accentColor = '#667eea' } = options;
    const container = document.getElementById(containerId);
    if (!container) return;

    const otherApps = APP_LIST.filter(app => app.id !== currentAppId);

    const titleJa = '関連アプリ';
    const titleEn = 'Related Apps';
    const title = lang === 'en' ? titleEn : titleJa;

    const html = `
        <h2 style="font-size:1.5rem;margin-bottom:20px;display:flex;align-items:center;gap:10px;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
            ${title}
        </h2>
        <div style="display:flex;flex-wrap:wrap;gap:16px;">
            ${otherApps.map(app => `
                <a href="${app.url}" style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;text-decoration:none;color:#fff;transition:all 0.3s;"
                   onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.transform='translateY(-2px)'"
                   onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.transform='none'">
                    <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${app.color};">
                        <span style="width:24px;height:24px;fill:white;display:flex;align-items:center;justify-content:center;">${app.icon}</span>
                    </div>
                    <div>
                        <div style="font-size:1rem;font-weight:600;margin-bottom:2px;">${lang === 'en' ? app.nameEn : app.name}</div>
                        <div style="font-size:0.85rem;color:#b8c5d6;">${lang === 'en' ? app.descriptionEn : app.description}</div>
                    </div>
                </a>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;
}

// Auto-initialize if data attributes are present
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('[data-related-apps]');
    if (container) {
        const currentApp = container.dataset.relatedApps;
        const lang = container.dataset.lang || 'ja';
        renderRelatedApps(currentApp, container.id, { lang });
    }
});
