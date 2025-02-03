export function formatDate(isoString: string): string {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
        return 'Fecha inválida';
    }
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formatter.format(date);
}