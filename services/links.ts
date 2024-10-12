import { Linking } from "react-native";

export function btn_chatWhatsapp(){
    const numeroPhone = "558488136674"

    let url = `whatsapp://send?phone=${numeroPhone}`
    Linking.openURL(url).catch(err => {
        alert(`Falha ao abrir a URL ${err}`);
    });
}

export function btn_suporteEmail(){
    const email = 'rafaelb120934@gmail.com';
    const url = `mailto:${email}`;

    Linking.openURL(url).catch(err =>{
        alert(`Falha ao abrir o email: ${err}`);
    })
}

export function btn_linkedin(){
    const url = 'https://www.linkedin.com/in/rafabsilva/'

    Linking.openURL(url).catch(err => {
        alert(`Falha ao abrir o Linkedin: ${err}`)
    })
}