export const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
}

export function isHomeInView() {
    const element = document.querySelector(`#home`) as HTMLElement;
    const rect = element.getBoundingClientRect();
    return rect.top > -312.6125183105469 && rect.bottom > 1980.7999572753906;
}

export function isProjectsInView(id: string) {
    const element = document.querySelector(`#${id}`) as HTMLElement;
    const rect = element.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= -49;
}

export function isAboutInView(id: string) {
    const element = document.querySelector(`#${id}`) as HTMLElement;
    const rect = element.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > 68.5999755859375;
}

export function isContactInView(id: string) {
    const element = document.querySelector(`#${id}`) as HTMLElement;
    const rect = element.getBoundingClientRect();
    return rect.top <= 68.5999984741211 && rect.bottom <= 775.8000106811523;
}