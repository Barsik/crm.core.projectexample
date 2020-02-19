interface Size {
    width: number;
    height: number;
}

export class DialogUtils {
    static OpenDialog(url: string, width: number, height: number, callback?: (returnedValue: any) => void): void {
        let options = new Xrm.DialogOptions();
        options.width = width;
        options.height = height;

        Xrm.Internal.openDialog(url, options,
            null, null, callback || (() => { }));
    }

    static OpenWebResourceInDialog(webResourceName: string, data: string | null, size: Size, callback?: (returnedValue: any) => void): void {
        DialogUtils.OpenDialog(`${Xrm.Page.context.getClientUrl()}/webresources/${webResourceName}?data=${data}`, size.width, size.height, callback);
    }

    static SetEmptyCrossCallback() {
        window.onunload = function () { Mscrm.Utilities.setReturnValue(null); }
    }

    static CloseThisDialog(returnValue?: any) {
        Mscrm.Utilities.setReturnValue(returnValue);
        window.closeWindow(true);
    }
}