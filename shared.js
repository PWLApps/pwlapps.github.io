var PWL = {
    developer: 'PWL Apps',
    email: 'contact.pwlapps@gmail.com',
    copyright: '2026',
    subtitle: { pt: 'Nossos aplicativos', en: 'Our apps' },
    privacyLink: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    storeBadgeAlt: { pt: 'Disponível no Google Play', en: 'Get it on Google Play' },
    responseDays: { pt: '15 dias úteis', en: '15 business days' }
};

var PWL_APPS = {
    'mystic-app': {
        version: '1.0',
        appName: { pt: 'Mystic App', en: 'Mystic App' },
        appFullName: { pt: 'Mystic - Leitura de Tarô com IA', en: 'Mystic - AI Tarot Reading' },
        description: {
            pt: 'Tarot personalizado com tiragem de 3 cartas. Escolha um tema, faça sua pergunta e receba uma leitura interpretada com padrões, alertas e próximos passos.',
            en: 'Personalized tarot with a 3-card spread. Choose a theme, ask your question and receive an interpreted reading with patterns, alerts and next steps.'
        },
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pwlapps.mystic_app',
        icon: 'assets/icons/mystic.webp',
        privacyPath: '/privacy/mystic-app/',
        lastUpdated: { pt: '17 de janeiro de 2026', en: 'January 17, 2026' }
    },
    'invest-calc': {
        version: '1.0',
        appName: { pt: 'Finança Pro', en: 'Finança Pro' },
        appFullName: { pt: 'Finança Pro - Calculadoras Financeiras', en: 'Finança Pro - Financial Calculators' },
        description: {
            pt: 'Calculadoras financeiras completas: juros compostos, renda fixa, equivalência de investimentos, independência financeira e cotações em tempo real.',
            en: 'Complete financial calculators: compound interest, fixed income, investment comparison, financial independence and real-time quotes.'
        },
        storeUrl: 'https://play.google.com/store/apps/details?id=com.pwlapps.invest_calc',
        icon: 'assets/icons/financa_pro.png',
        privacyPath: '/privacy/invest-calc/',
        lastUpdated: { pt: '7 de abril de 2026', en: 'April 7, 2026' }
    }
};

function renderLangToggle() {
    return '<div class="lang-toggle" id="langToggle" onclick="toggleLang()">' +
        '<span id="labelPt" class="active flag">&#127463;&#127479;</span>' +
        '<div class="switch"></div>' +
        '<span id="labelEn" class="flag">&#127482;&#127480;</span>' +
        '</div>';
}

function renderPrivacyHeader(appKey) {
    var app = PWL_APPS[appKey];
    var labels = {
        pt: { policyTitle: 'Política de Privacidade', lastUpdated: 'Última atualização', developer: 'Desenvolvedor', contactEmail: 'Email de contato', application: 'Aplicativo' },
        en: { policyTitle: 'Privacy Policy', lastUpdated: 'Last updated', developer: 'Developer', contactEmail: 'Contact email', application: 'Application' }
    };

    var html = '';
    ['pt', 'en'].forEach(function(lang) {
        var l = labels[lang];
        var cls = lang === 'en' ? 'content-en' : 'content-pt';
        html += '<div class="' + cls + '">' +
            '<header><div class="wrap">' +
            '<a href="/" class="back-link">&larr; ' + PWL.developer + '</a>' +
            '<h1>' + l.policyTitle + ' - ' + app.appName[lang] + ' <span class="badge">v' + app.version + '</span></h1>' +
            '<p class="meta"><strong>' + l.lastUpdated + ':</strong> ' + app.lastUpdated[lang] + '</p>' +
            '<p class="meta">' +
            '<strong>' + l.developer + ':</strong> ' + PWL.developer + '<br/>' +
            '<strong>' + l.contactEmail + ':</strong> <a href="mailto:' + PWL.email + '">' + PWL.email + '</a><br/>' +
            '<strong>' + l.application + ':</strong> ' + app.appFullName[lang] +
            '</p></div></header></div>';
    });
    return html;
}

function renderPrivacyFooter(appKey) {
    var app = PWL_APPS[appKey];
    var labels = {
        pt: { version: 'Versão', effectiveDate: 'Data de vigência', rights: 'Todos os direitos reservados' },
        en: { version: 'Version', effectiveDate: 'Effective date', rights: 'All rights reserved' }
    };

    var html = '';
    ['pt', 'en'].forEach(function(lang) {
        var l = labels[lang];
        var cls = lang === 'en' ? 'content-en' : 'content-pt';
        html += '<div class="' + cls + '">' +
            '<p>' + l.version + ' ' + app.version + ' &middot; ' + l.effectiveDate + ': ' + app.lastUpdated[lang] + '</p>' +
            '<p>&copy; ' + PWL.copyright + ' ' + PWL.developer + '. ' + l.rights + '.</p>' +
            '</div>';
    });
    return html;
}

function renderHomeCards() {
    var storeBadge = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
    var html = '';
    Object.keys(PWL_APPS).forEach(function(key) {
        var app = PWL_APPS[key];
        html += '<div class="app-card">' +
            '<a href="' + app.storeUrl + '" style="text-decoration: none; color: inherit;">' +
            '<img src="' + app.icon + '" alt="' + app.appName.en + '" class="icon">' +
            '<h2>' + app.appName.pt + '</h2>' +
            '<p class="description" data-pt="' + app.description.pt + '" data-en="' + app.description.en + '">' + app.description.pt + '</p>' +
            '<div class="store-badge">' +
            '<img src="' + storeBadge + '" data-pt-alt="' + PWL.storeBadgeAlt.pt + '" data-en-alt="' + PWL.storeBadgeAlt.en + '" alt="' + PWL.storeBadgeAlt.pt + '">' +
            '</div></a>' +
            '<a href="' + app.privacyPath + '" class="privacy-link" data-pt="' + PWL.privacyLink.pt + '" data-en="' + PWL.privacyLink.en + '">' + PWL.privacyLink.pt + '</a>' +
            '</div>';
    });
    return html;
}

function initHomePage() {
    document.getElementById('home-toggle').innerHTML = renderLangToggle();
    document.getElementById('home-subtitle').textContent = PWL.subtitle.pt;
    document.getElementById('home-subtitle').setAttribute('data-pt', PWL.subtitle.pt);
    document.getElementById('home-subtitle').setAttribute('data-en', PWL.subtitle.en);
    document.getElementById('home-cards').innerHTML = renderHomeCards();
    document.getElementById('home-footer').innerHTML = '&copy; ' + PWL.copyright + ' ' + PWL.developer;
    applyLang();
}

function initPrivacyPage(appKey) {
    document.getElementById('privacy-toggle').innerHTML = renderLangToggle();
    document.getElementById('privacy-header').innerHTML = renderPrivacyHeader(appKey);
    document.getElementById('privacy-footer').innerHTML = renderPrivacyFooter(appKey);
    applyLang();
}

function detectLang() {
    var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return navLang.startsWith('pt') ? 'pt' : 'en';
}

var lang = detectLang();

function applyLang() {
    document.getElementById('langToggle').classList.toggle('en', lang === 'en');
    document.getElementById('labelPt').classList.toggle('active', lang === 'pt');
    document.getElementById('labelEn').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

    document.querySelectorAll('[data-pt]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('[data-pt-alt]').forEach(function(el) {
        el.alt = el.getAttribute('data-' + lang + '-alt');
    });
    document.querySelectorAll('.content-pt').forEach(function(el) {
        el.style.display = lang === 'pt' ? '' : 'none';
    });
    document.querySelectorAll('.content-en').forEach(function(el) {
        el.style.display = lang === 'en' ? 'block' : 'none';
    });
}

function toggleLang() {
    lang = lang === 'pt' ? 'en' : 'pt';
    applyLang();
}
