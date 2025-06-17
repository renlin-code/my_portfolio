export function useResumeLink() {
    const { locale } = useI18n()

    const RESUMES = [
        {
            lang: 'en',
            url: 'https://drive.google.com/file/d/12WpZO_QZhVsvQ7lp3tCjfw73-vDoU1MK/view'
        },
        {
            lang: 'es',
            url: 'https://drive.google.com/file/d/1i8XIDWavLxXIrnrgt2xu2UQ1sqeSlRpn/view'
        }
    ]

    const link = computed(() => RESUMES.find(r => r.lang === locale.value)?.url || '')
    
    return {
        link,
    };
}