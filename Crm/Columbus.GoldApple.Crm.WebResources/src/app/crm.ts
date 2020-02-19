declare global {
    interface Window {
        Columbus: any;
        closeWindow(dontKnowWhatIsIt:boolean):void;
    }
}

declare global {
    namespace Xrm {
        interface XrmStatic {
            Internal: any;
            DialogOptions: any;
        }
    }
    namespace Mscrm.Utilities {
        function setReturnValue(value: any): void;
    }
}
// export default Window;

export * from '../entities/emailTemplate';

