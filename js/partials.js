/**
 * alcybersec.github.io — Shared partials (terminal theme)
 * Injects the background layers, status-bar nav, and footer into every page so
 * the markup lives in ONE place. Runs at top level (script is `defer`, so the
 * <header>/<footer> placeholders exist and this runs before main.js's
 * DOMContentLoaded handlers wire up the hamburger).
 *
 * Pages provide: <header data-partial="nav"></header> and
 *                <footer data-partial="footer"></footer>
 */
(function () {
    'use strict';

    var NAV_ITEMS = [
        { href: 'index.html',    label: 'Home' },
        { href: 'about.html',    label: 'About' },
        { href: 'skills.html',   label: 'Skills' },
        { href: 'projects.html', label: 'Projects' },
        { href: 'cv.html',       label: 'CV' },
        { href: 'blog.html',     label: 'Blog' },
        { href: 'contact.html',  label: 'Contact' }
    ];

    var SOCIALS = [
        { href: 'https://github.com/alcybersec',                   icon: 'fab fa-github',   label: 'github' },
        { href: 'https://www.linkedin.com/in/aleksandr-shavyrin/', icon: 'fab fa-linkedin', label: 'linkedin' },
        { href: 'mailto:alworkm@proton.me',                        icon: 'fas fa-envelope', label: 'email' }
    ];

    // ── background layers (grid + scanlines) ─────────────────────────────
    if (!document.querySelector('.bg-grid')) {
        var grid = document.createElement('div'); grid.className = 'bg-grid';
        var scan = document.createElement('div'); scan.className = 'bg-scan';
        document.body.insertBefore(scan, document.body.firstChild);
        document.body.insertBefore(grid, document.body.firstChild);
    }

    // ── path prefix for nested pages ─────────────────────────────────────
    // Blog articles live in /assets/blog-pages/ (two levels below the root),
    // so their nav/footer links need a relative prefix and should highlight
    // the "Blog" tab rather than their own filename.
    var inSubdir = /\/blog-pages\//.test(location.pathname);
    var prefix = inSubdir ? '../../' : '';

    // ── current page (default index.html for "/" roots) ──────────────────
    var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (current === '') { current = 'index.html'; }
    if (inSubdir) { current = 'blog.html'; }

    var navLinks = NAV_ITEMS.map(function (item) {
        var active = item.href.toLowerCase() === current ? ' class="active"' : '';
        return '<li><a href="' + prefix + item.href + '"' + active + '>' + item.label + '</a></li>';
    }).join('\n                ');

    var headerHTML =
        '<span class="nav-prompt"><span class="live-dot"></span> aleksandr@alcybersec<b>:~$</b></span>\n' +
        '        <nav>\n' +
        '            <ul>\n                ' + navLinks + '\n            </ul>\n' +
        '            <div class="hamburger">\n' +
        '                <span></span>\n' +
        '                <span></span>\n' +
        '                <span></span>\n' +
        '            </div>\n' +
        '        </nav>';

    var socialLinks = SOCIALS.map(function (s) {
        var attrs = s.href.indexOf('mailto:') === 0 ? '' : ' target="_blank" rel="noopener noreferrer"';
        return '<a href="' + s.href + '"' + attrs + ' aria-label="' + s.label + '">' +
               '<i class="' + s.icon + '"></i>[' + s.label + ']</a>';
    }).join('\n                ');

    var footerHTML =
        '<div class="footer-inner">\n' +
        '            <span class="footer-copy">&copy; <span id="year"></span> aleksandr shavyrin <span class="accent">//</span> built &amp; self-hosted</span>\n' +
        '            <span class="footer-links">\n                ' + socialLinks + '\n            </span>\n' +
        '        </div>';

    var header = document.querySelector('header[data-partial="nav"]');
    if (header) { header.innerHTML = headerHTML; }

    var footer = document.querySelector('footer[data-partial="footer"]');
    if (footer) { footer.innerHTML = footerHTML; }

    var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
