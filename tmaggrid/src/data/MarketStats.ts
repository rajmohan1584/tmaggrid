export const marketStatsData = [{
    name: 'SEG1',
    recordCount:179754,
    secCount: 130951,
    messageRate: 106,
    updates: 192
}];

export interface IMarketStats {
    name: string,
    recordCount: number | null,
    secCount: number | null,
    messageRate: number | null,
    updates: number | null,
};
