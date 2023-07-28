export const timestampToDateTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleString();

export const formatAmount = (locale: string, amount: number, currency: string | null) => {
    const convertedAmount = amount / 100;
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency || 'EUR',
    }).format(convertedAmount);
};