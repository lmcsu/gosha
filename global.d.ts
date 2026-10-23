export {};

declare global {
    type Lang = 'RU' | 'UA' | 'EN';

    type GptModel = 'gpt-3.5-turbo' | 'gpt-5.4-mini';

    type Strategy = {
        model: GptModel;
        useRofl: boolean;
        useCaption: boolean;
        tries: number;
    };

    type Variant = {
        content: string;
        isGood: boolean;
    };

    type Config = {
        openaiApiKey: string;
        proxyUrl?: string;
        botToken: string;
        botUsername: string;
        banList: number[];
        prompt: string;
        captionPrompt: string;
        mentions: Record<Lang, Array<string>>;
        logsChatId: number;
        adminIds: Array<number>;
        helloMessage: string;
        anonMessage: Record<Lang, string>;
        censoredMessage: Record<Lang, string>;
        cooldownMessage: Record<Lang, string>;
    };
}
