import d3LogoUrl from './assets/d3-logo.svg';


export default function () {
    return  new class BasicFactory {
        constructory() {}
        getLogoUrl() {
            return d3LogoUrl;
        }
    }
};