import React from 'react';
type ScriptProviderProps = {
    disableAnalytics?: boolean;
    googleTagManagerId?: string;
    googleAnalyticsId?: string;
    gtmId?: string;
    hotJarId?: string;
    redditPixelId?: string;
    segmentWriteKey?: string;
    tikTokPixelId?: string;
    facebookPixelId?: string;
    klaviyoCompanyId?: string;
    visualWebsiteOptimizerId?: string;
    children: React.ReactNode;
};
declare const ScriptProvider: (props: ScriptProviderProps) => React.JSX.Element;
export default ScriptProvider;
