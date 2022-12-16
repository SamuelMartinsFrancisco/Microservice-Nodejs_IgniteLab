"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const node_crypto_1 = require("node:crypto");
class Notification {
    constructor(props) {
        var _a;
        this._id = (0, node_crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    set recipientId(recipientId) {
        this.props.recipientId = recipientId;
    }
    get content() {
        return this.props.content;
    }
    set content(content) {
        this.props.content = content;
    }
    get category() {
        return this.props.category;
    }
    set category(category) {
        this.props.category = category;
    }
    get readAt() {
        return this.props.readAt;
    }
    set readAt(readAt) {
        this.props.readAt = readAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map