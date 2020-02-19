export class WebResourceUtils {
    static GetParameter(parameter: string): string | null {
        const regex = new RegExp(`${parameter}=(.+)`);
        const result = decodeURIComponent(location.search)
            .substring(1)
            .split('&')
            .filter(p => p.search(regex) !== -1)
            .map(p => (p.match(regex) as RegExpMatchArray)[1]);
        return result.length ? result[0] : null;
    }
    static GetDataParameter(): string | null {
        return WebResourceUtils.GetParameter('data');
    }
}