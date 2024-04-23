import es from "./locales/es.json";
import en from "./locales/en.json";

import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy:false,
    locale: "en",
    globalInjection: true,
    messages: {en,es}
})

export default i18n;
