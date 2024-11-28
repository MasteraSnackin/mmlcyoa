import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Copy Chat Logs': 'Copy Chat Logs',
      'Restart Chat': 'Restart Chat',
      'Export Chat': 'Export Chat',
      'Dark Mode': 'Dark Mode',
      'Language': 'Language',
      'Chat Restarted': 'Chat Restarted',
      'Chat has been reset': 'The chat has been reset to the beginning.',
      'Chat logs copied': 'Chat logs copied!',
      'Chat history copied': 'The chat history has been copied to your clipboard.',
      'Failed to copy': 'Failed to copy',
      'Could not copy logs': 'Could not copy chat logs to clipboard.',
      'Chat exported': 'Chat exported!',
      'Chat history downloaded': 'The chat history has been downloaded as a text file.',
      'Game Master': 'Game Master',
      'Player': 'Player',
      'Interactive Adventure Quest': 'Interactive Adventure Quest',
      'Quick Choices': 'Quick Choices',
      'Custom Response': 'Custom Response',
      'Voice Input': 'Voice Input',
      'Choose Action': 'Choose Action',
      'Start Recording': 'Start Recording',
      'Stop Recording': 'Stop Recording',
      'Type a message...': 'Type a message...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  es: {
    translation: {
      'Copy Chat Logs': 'Copiar registros',
      'Restart Chat': 'Reiniciar chat',
      'Export Chat': 'Exportar chat',
      'Dark Mode': 'Modo oscuro',
      'Language': 'Idioma',
      'Chat Restarted': 'Chat Reiniciado',
      'Chat has been reset': 'El chat se ha reiniciado al principio.',
      'Chat logs copied': '¡Registros copiados!',
      'Chat history copied': 'El historial del chat se ha copiado al portapapeles.',
      'Failed to copy': 'Error al copiar',
      'Could not copy logs': 'No se pudieron copiar los registros del chat.',
      'Chat exported': '¡Chat exportado!',
      'Chat history downloaded': 'El historial del chat se ha descargado como archivo de texto.',
      'Game Master': 'Maestro del Juego',
      'Player': 'Jugador',
      'Interactive Adventure Quest': 'Aventura Interactiva',
      'Quick Choices': 'Opciones Rápidas',
      'Custom Response': 'Respuesta Personalizada',
      'Voice Input': 'Entrada de Voz',
      'Choose Action': 'Elegir Acción',
      'Start Recording': 'Comenzar Grabación',
      'Stop Recording': 'Detener Grabación',
      'Type a message...': 'Escribe un mensaje...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  fr: {
    translation: {
      'Copy Chat Logs': 'Copier les journaux',
      'Restart Chat': 'Redémarrer le chat',
      'Export Chat': 'Exporter le chat',
      'Dark Mode': 'Mode sombre',
      'Language': 'Langue',
      'Chat Restarted': 'Chat Redémarré',
      'Chat has been reset': 'Le chat a été réinitialisé au début.',
      'Chat logs copied': 'Journaux copiés !',
      'Chat history copied': "L'historique du chat a été copié dans le presse-papiers.",
      'Failed to copy': 'Échec de la copie',
      'Could not copy logs': 'Impossible de copier les journaux du chat.',
      'Chat exported': 'Chat exporté !',
      'Chat history downloaded': "L'historique du chat a été téléchargé sous forme de fichier texte.",
      'Game Master': 'Maître du Jeu',
      'Player': 'Joueur',
      'Interactive Adventure Quest': 'Quête Aventure Interactive',
      'Quick Choices': 'Choix Rapides',
      'Custom Response': 'Réponse Personnalisée',
      'Voice Input': 'Entrée Vocale',
      'Choose Action': 'Choisir une Action',
      'Start Recording': "Commencer l'Enregistrement",
      'Stop Recording': "Arrêter l'Enregistrement",
      'Type a message...': 'Écrivez un message...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  de: {
    translation: {
      'Copy Chat Logs': 'Chat-Protokolle kopieren',
      'Restart Chat': 'Chat neustarten',
      'Export Chat': 'Chat exportieren',
      'Dark Mode': 'Dunkelmodus',
      'Language': 'Sprache',
      'Chat Restarted': 'Chat Neugestartet',
      'Chat has been reset': 'Der Chat wurde auf den Anfang zurückgesetzt.',
      'Chat logs copied': 'Chat-Protokolle kopiert!',
      'Chat history copied': 'Der Chat-Verlauf wurde in die Zwischenablage kopiert.',
      'Failed to copy': 'Kopieren fehlgeschlagen',
      'Could not copy logs': 'Chat-Protokolle konnten nicht kopiert werden.',
      'Chat exported': 'Chat exportiert!',
      'Chat history downloaded': 'Der Chat-Verlauf wurde als Textdatei heruntergeladen.',
      'Game Master': 'Spielleiter',
      'Player': 'Spieler',
      'Interactive Adventure Quest': 'Interaktive Abenteuerquest',
      'Quick Choices': 'Schnellauswahl',
      'Custom Response': 'Benutzerdefinierte Antwort',
      'Voice Input': 'Spracheingabe',
      'Choose Action': 'Aktion wählen',
      'Start Recording': 'Aufnahme starten',
      'Stop Recording': 'Aufnahme stoppen',
      'Type a message...': 'Nachricht eingeben...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  it: {
    translation: {
      'Copy Chat Logs': 'Copia log chat',
      'Restart Chat': 'Riavvia chat',
      'Export Chat': 'Esporta chat',
      'Dark Mode': 'Modalità scura',
      'Language': 'Lingua',
      'Chat Restarted': 'Chat Riavviata',
      'Chat has been reset': 'La chat è stata reimpostata all\'inizio.',
      'Chat logs copied': 'Log chat copiati!',
      'Chat history copied': 'La cronologia della chat è stata copiata negli appunti.',
      'Failed to copy': 'Copia fallita',
      'Could not copy logs': 'Impossibile copiare i log della chat.',
      'Chat exported': 'Chat esportata!',
      'Chat history downloaded': 'La cronologia della chat è stata scaricata come file di testo.',
      'Game Master': 'Game Master',
      'Player': 'Giocatore',
      'Interactive Adventure Quest': 'Avventura Interattiva',
      'Quick Choices': 'Scelte Rapide',
      'Custom Response': 'Risposta Personalizzata',
      'Voice Input': 'Input Vocale',
      'Choose Action': 'Scegli Azione',
      'Start Recording': 'Avvia Registrazione',
      'Stop Recording': 'Ferma Registrazione',
      'Type a message...': 'Scrivi un messaggio...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  zh: {
    translation: {
      'Copy Chat Logs': '复制聊天记录',
      'Restart Chat': '重新开始聊天',
      'Export Chat': '导出聊天',
      'Dark Mode': '深色模式',
      'Language': '语言',
      'Chat Restarted': '聊天已重新开始',
      'Chat has been reset': '聊天已重置到开始状态',
      'Chat logs copied': '聊天记录已复制！',
      'Chat history copied': '聊天历史已复制到剪贴板',
      'Failed to copy': '复制失败',
      'Could not copy logs': '无法复制聊天记录',
      'Chat exported': '聊天已导出！',
      'Chat history downloaded': '聊天历史已下载为文本文件',
      'Game Master': '游戏主持人',
      'Player': '玩家',
      'Interactive Adventure Quest': '互动冒险任务',
      'Quick Choices': '快速选择',
      'Custom Response': '自定义回复',
      'Voice Input': '语音输入',
      'Choose Action': '选择动作',
      'Start Recording': '开始录音',
      'Stop Recording': '停止录音',
      'Type a message...': '输入消息...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  fi: {
    translation: {
      'Copy Chat Logs': 'Kopioi keskusteluloki',
      'Restart Chat': 'Aloita keskustelu alusta',
      'Export Chat': 'Vie keskustelu',
      'Dark Mode': 'Tumma tila',
      'Language': 'Kieli',
      'Chat Restarted': 'Keskustelu aloitettu alusta',
      'Chat has been reset': 'Keskustelu on aloitettu alusta.',
      'Chat logs copied': 'Keskusteluloki kopioitu!',
      'Chat history copied': 'Keskusteluhistoria on kopioitu leikepöydälle.',
      'Failed to copy': 'Kopiointi epäonnistui',
      'Could not copy logs': 'Keskustelulokin kopiointi epäonnistui.',
      'Chat exported': 'Keskustelu viety!',
      'Chat history downloaded': 'Keskusteluhistoria on ladattu tekstitiedostona.',
      'Game Master': 'Pelinjohtaja',
      'Player': 'Pelaaja',
      'Interactive Adventure Quest': 'Interaktiivinen Seikkailutehtävä',
      'Quick Choices': 'Pikavalinnat',
      'Custom Response': 'Mukautettu vastaus',
      'Voice Input': 'Äänisyöte',
      'Choose Action': 'Valitse toiminto',
      'Start Recording': 'Aloita äänitys',
      'Stop Recording': 'Lopeta äänitys',
      'Type a message...': 'Kirjoita viesti...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
  sv: {
    translation: {
      'Copy Chat Logs': 'Kopiera chattloggar',
      'Restart Chat': 'Starta om chatten',
      'Export Chat': 'Exportera chatten',
      'Dark Mode': 'Mörkt läge',
      'Language': 'Språk',
      'Chat Restarted': 'Chatten omstartad',
      'Chat has been reset': 'Chatten har återställts till början.',
      'Chat logs copied': 'Chattloggar kopierade!',
      'Chat history copied': 'Chatthistoriken har kopierats till urklipp.',
      'Failed to copy': 'Kunde inte kopiera',
      'Could not copy logs': 'Kunde inte kopiera chattloggar.',
      'Chat exported': 'Chatten exporterad!',
      'Chat history downloaded': 'Chatthistoriken har laddats ned som en textfil.',
      'Game Master': 'Spelledare',
      'Player': 'Spelare',
      'Interactive Adventure Quest': 'Interaktivt Äventyrsuppdrag',
      'Quick Choices': 'Snabbval',
      'Custom Response': 'Anpassat svar',
      'Voice Input': 'Röstinmatning',
      'Choose Action': 'Välj handling',
      'Start Recording': 'Börja spela in',
      'Stop Recording': 'Sluta spela in',
      'Type a message...': 'Skriv ett meddelande...',
      'Mythic Mind Labs': 'Mythic Mind Labs',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
