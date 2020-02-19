import { DialogUtils } from "../common/dialogUtils";

export class EmailTemplate {
    public SyncTransactionalEmailTemplates = () => {
        DialogUtils.OpenWebResourceInDialog('cmb_/html/transactionalEmailSyncTemplates.html', null, { width: 410, height: 200 }, undefined);
    }
}

window.Columbus = window.Columbus || {};
window.Columbus.EmailTemplate = new EmailTemplate();