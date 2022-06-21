const { useState, useContext, createContext, useEffect } = wp.element;

const LanguageContext = createContext();

const languageList = [
    {
        languageName: 'en',
        languageData: [
            {
                componentName: 'banner',
                componentData: {
                    title: "Your personal browser",
                    content: "Faster, safer and smarter than default browsers. Fully-featured for privacy, security, and so much more. See More",
                    buttonText: 'Download Now'
                }
            }
        ]
    },
    {
        languageName: 'vi',
        languageData: [
            {
                componentName: 'banner',
                componentData: {
                    title: "Trình dyuệt của bạn",
                    content: "Nhanh hơn, an toàn hơn và thông minh hơn các trình duyệt mặc định. Đầy đủ tính năng cho quyền riêng tư, bảo mật và hơn thế nữa. Xem thêm",
                    buttonText: 'Tải ngay'
                }
            }
        ]
    }
]

function LanguageProvider({ children }) {

    const [language, setLanguage] = useState(localStorage.getItem('language') ? localStorage.getItem('language') : 'en')
    const [languageData, setLanguageData] = useState([])

    // languageList.forEach(languageItem => {
    //     if (language == languageItem.languageName) {

    //     }
    // });

    useEffect(() => {
        const handleChangeLanguage = () => {
            switch (language) {
                case 'en': {
                    languageList.forEach(languageItem => {
                        if (languageItem.languageName == 'en') {
                            setLanguageData(languageItem.languageData);
                        }
                    });
                    break;
                }
                case 'vi': {
                    languageList.forEach(languageItem => {
                        if (languageItem.languageName == 'vi') {
                            setLanguageData(languageItem.languageData);
                        }
                    });
                    break;
                }
                default:
                    break;
            }
        }

        handleChangeLanguage();
    }, [language])

    return (
        <LanguageContext.Provider value={{
            language, setLanguage,
            languageData
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
