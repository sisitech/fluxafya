(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~doctors-doctors-module~form-form-module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


/***/ }),

/***/ "./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js":
/*!***************************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minYear,i=void 0===r?1:r,d=t.maxYear,u=void 0===d?9999:d,s=e.split(/[^dmyHMS]+/).sort(function(e,t){return o.indexOf(e)-o.indexOf(t)});return function(t){var r=[],o={dd:31,mm:12,yy:99,yyyy:u,HH:23,MM:59,SS:59},d={dd:1,mm:1,yy:0,yyyy:i,HH:0,MM:0,SS:0},a=t.split("");s.forEach(function(t){var n=e.indexOf(t),i=parseInt(o[t].toString().substr(0,1),10);parseInt(a[n],10)>i&&(a[n+1]=a[n],a[n]=0,r.push(n))});var y=0,f=s.some(function(r){var s=e.indexOf(r),a=r.length,f=t.substr(s,a).replace(/\D/g,""),p=parseInt(f,10);"mm"===r&&(y=p||0);var c="dd"===r?n[y]:o[r];if("yyyy"===r&&(1!==i||9999!==u)){var l=parseInt(o[r].toString().substring(0,f.length),10),m=parseInt(d[r].toString().substring(0,f.length),10);return p<m||p>l}return p>c||f.length===a&&p<d[r]});return!f&&{value:a.join(""),indexesOfPipedChars:r}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[31,31,29,31,30,31,30,31,31,30,31,30,31],o=["yyyy","yy","mm","dd","HH","MM","SS"]}])});

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/createNumberMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createNumberMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/emailMask.js":
/*!*********************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/emailMask.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){e=e.replace(y,h);var n=t.placeholderChar,r=t.currentCaretPosition,u=e.indexOf(x),s=e.lastIndexOf(d),f=s<u?-1:s,p=o(e,u+1,x),g=o(e,f-1,d),v=c(e,u,n),m=i(e,u,f,n),O=a(e,f,n,r);v=l(v),m=l(m),O=l(O,!0);var b=v.concat(p).concat(m).concat(g).concat(O);return b}function o(e,t,n){var r=[];return e[t]===n?r.push(n):r.push(g,n),r.push(g),r}function c(e,t){return t===-1?e:e.slice(0,t)}function i(e,t,n,r){var u=h;return t!==-1&&(u=n===-1?e.slice(t+1,e.length):e.slice(t+1,n)),u=u.replace(new RegExp("[\\s"+r+"]",m),h),u===x?p:u.length<1?v:u[u.length-1]===d?u.slice(0,u.length-1):u}function a(e,t,n,r){var u=h;return t!==-1&&(u=e.slice(t+1,e.length)),u=u.replace(new RegExp("[\\s"+n+".]",m),h),0===u.length?e[t-1]===d&&r!==e.length?p:h:u}function l(e,t){return e.split(h).map(function(e){return e===v?e:t?b:O})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),f=r(s),p="*",d=".",h="",x="@",g="[]",v=" ",m="g",O=/[^\s]/,b=/[^.\s]/,y=/\s/g;t.default={mask:u,pipe:f.default}},function(e,t){"use strict";function n(e,t){var n=t.currentCaretPosition,o=t.rawValue,p=t.previousConformedValue,d=t.placeholderChar,h=e;h=r(h);var x=h.indexOf(i),g=null===o.match(new RegExp("[^@\\s."+d+"]"));if(g)return c;if(h.indexOf(l)!==-1||x!==-1&&n!==x+1||o.indexOf(u)===-1&&p!==c&&o.indexOf(a)!==-1)return!1;var v=h.indexOf(u),m=h.slice(v+1,h.length);return(m.match(f)||s).length>1&&h.substr(-1)===a&&n!==o.length&&(h=h.slice(0,h.length-1)),h}function r(e){var t=0;return e.replace(o,function(){return t++,1===t?u:c})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u="@",o=/@/g,c="",i="@.",a=".",l="..",s=[],f=/\./g}])});

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/form/basic/basic.component.html":
/*!*************************************************!*\
  !*** ./src/app/form/basic/basic.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Default Bootstrap elements\n      </div>\n      <div class=\"card-body\">\n        <p>\n          Bootstrap provides several form control styles, layout options, and custom components for creating a wide\n          variety of forms.\n        </p>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleSelect1\">Example select</label>\n            <select class=\"form-control\" id=\"exampleSelect1\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleSelect2\">Example multiple select</label>\n            <select multiple class=\"form-control\" id=\"exampleSelect2\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleTextarea\">Example textarea</label>\n            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputFile\">File input</label>\n            <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n            <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the\n              above input. It's a bit lighter and easily wraps to a new line.</small>\n          </div>\n          <fieldset class=\"form-group\">\n            <p>Radio buttons</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\"\n                  checked>\n                Option one is this and that&mdash;be sure to include why it's great\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n                Option two can be something else and selecting it will deselect option one\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"\n                  disabled>\n                Option three is disabled\n              </label>\n            </div>\n          </fieldset>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              Check me out\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Textual inputs\n      </div>\n      <div class=\"card-body\">\n        <p>Here are examples of <code>.form-control</code> applied to each textual HTML5 <code>&lt;input&gt;</code>\n          <code>type</code>.</p>\n        <div class=\"form-group row\">\n          <label for=\"example-text-input\" class=\"col-2 col-form-label\">Text</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"text\" value=\"Artisanal kale\" id=\"example-text-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-search-input\" class=\"col-2 col-form-label\">Search</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"search\" value=\"How do I shoot web\" id=\"example-search-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"email\" value=\"bootstrap@example.com\" id=\"example-email-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-url-input\" class=\"col-2 col-form-label\">URL</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"url\" value=\"https://getbootstrap.com\" id=\"example-url-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-tel-input\" class=\"col-2 col-form-label\">Telephone</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"tel\" value=\"1-(555)-555-5555\" id=\"example-tel-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-password-input\" class=\"col-2 col-form-label\">Password</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"password\" value=\"hunter2\" id=\"example-password-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-number-input\" class=\"col-2 col-form-label\">Number</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"number\" value=\"42\" id=\"example-number-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">Date and time</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"datetime-local\" value=\"2011-08-19T13:45:00\" id=\"example-datetime-local-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-date-input\" class=\"col-2 col-form-label\">Date</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"date\" value=\"2011-08-19\" id=\"example-date-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-month-input\" class=\"col-2 col-form-label\">Month</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"month\" value=\"2011-08\" id=\"example-month-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-week-input\" class=\"col-2 col-form-label\">Week</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"week\" value=\"2011-W33\" id=\"example-week-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-time-input\" class=\"col-2 col-form-label\">Time</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"time\" value=\"13:45:00\" id=\"example-time-input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"example-color-input\" class=\"col-2 col-form-label\">Color</label>\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"color\" value=\"#563d7c\" id=\"example-color-input\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Form groups\n      </div>\n      <div class=\"card-body\">\n        <p>The <code class=\"highlighter-rouge\">.form-group</code> class is the easiest way to add some structure to\n          forms. Its only purpose is to provide <code class=\"highlighter-rouge\">margin-bottom</code> around a label and\n          control pairing. As a bonus, since it’s a class you can use it with <code class=\"highlighter-rouge\">&lt;fieldset&gt;</code>s,\n          <code class=\"highlighter-rouge\">&lt;div&gt;</code>s, or nearly any other element.</p>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Example label</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Another label</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Inline forms\n      </div>\n      <div class=\"card-body\">\n        <p>Use the <code class=\"highlighter-rouge\">.form-inline</code> class to display a series of labels, form\n          controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their\n          default states.</p>\n\n        <p>Visible labels</p>\n        <form class=\"form-inline pb-5\">\n          <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormInput\" placeholder=\"Jane Doe\">\n\n          <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\">@</div>\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\">\n          </div>\n\n          <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n            </label>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n\n        <p>Custom form controls and selects are also supported.</p>\n        <form class=\"form-inline\">\n          <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Preference</label>\n          <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"inlineFormCustomSelect\">\n            <option selected>Choose...</option>\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3\">Three</option>\n          </select>\n\n          <label class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Remember my preference</span>\n          </label>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Grid\n      </div>\n      <div class=\"card-body\">\n        <p>For more structured form layouts that are also responsive, you can utilize Bootstrap’s <a href=\"/layout/grid/\">predefined\n            grid classes</a> or <a href=\"/layout/grid/#sass-mixins\">mixins</a> to create horizontal forms. Add the\n          <code class=\"highlighter-rouge\">.row</code> class to form groups and use the <code class=\"highlighter-rouge\">.col-*-*</code>\n          classes to specify the width of your labels and controls.</p>\n        <form>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n            </div>\n          </div>\n          <fieldset class=\"form-group row\">\n            <legend class=\"col-form-legend col-sm-2\">Radios</legend>\n            <div class=\"col-sm-10\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\"\n                    checked>\n                  Option one is this and that&mdash;be sure to include why it's great\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n                  Option two can be something else and selecting it will deselect option one\n                </label>\n              </div>\n              <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\"\n                    disabled>\n                  Option three is disabled\n                </label>\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2\">Checkbox</label>\n            <div class=\"col-sm-10\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"> Check me out\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-2 col-sm-10\">\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Checkboxes and radios\n      </div>\n      <div class=\"card-body\">\n        <p>Default checkboxes and radios are improved upon with the help of <code class=\"highlighter-rouge\">.form-check</code>,\n          <strong>a single class for both input types that improves the layout and behavior of their HTML elements</strong>.\n          Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from\n          many.</p>\n        <p class=\"mt-4\">Default (stacked)</p>\n        <div class=\"form-check\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n            Option one is this and that&mdash;be sure to include why it's great\n          </label>\n        </div>\n        <div class=\"form-check disabled\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled>\n            Option two is disabled\n          </label>\n        </div>\n        <br />\n        <div class=\"form-check\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"\n              checked>\n            Option one is this and that&mdash;be sure to include why it's great\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n            Option two can be something else and selecting it will deselect option one\n          </label>\n        </div>\n        <div class=\"form-check disabled\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\"\n              disabled>\n            Option three is disabled\n          </label>\n        </div>\n        <br />\n        <p class=\"mt-4\">Inline</p>\n        <div class=\"form-check form-check-inline\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"> 1\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\"> 2\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline disabled\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\" disabled> 3\n          </label>\n        </div>\n        <br />\n        <div class=\"form-check form-check-inline\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> 1\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> 2\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline disabled\">\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"\n              disabled> 3\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Static controls\n      </div>\n      <div class=\"card-body\">\n        <p>When you need to place plain text next to a form label within a form, use the <code class=\"highlighter-rouge\">.form-control-static</code>\n          class on an element of your choice.</p>\n        <form>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <p class=\"form-control-static\">email@example.com</p>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n          </div>\n        </form>\n        <br />\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <label class=\"sr-only\">Email</label>\n            <p class=\"form-control-static\">email@example.com</p>\n          </div>\n          <div class=\"form-group mx-sm-3\">\n            <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Confirm identity</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Disabled states\n      </div>\n      <div class=\"card-body\">\n        <p>Add the <code class=\"highlighter-rouge\">disabled</code> boolean attribute on an input to prevent user\n          interactions. Disabled inputs appear lighter and add a <code class=\"highlighter-rouge\">not-allowed</code>\n          cursor.</p>\n        <form>\n          <fieldset disabled>\n            <div class=\"form-group\">\n              <label for=\"disabledTextInput\">Disabled input</label>\n              <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"disabledSelect\">Disabled select menu</label>\n              <select id=\"disabledSelect\" class=\"form-control\">\n                <option>Disabled select</option>\n              </select>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Can't check this\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Readonly inputs</div>\n      <div class=\"card-body\">\n        <p>Add the <code class=\"highlighter-rouge\">readonly</code> boolean attribute on an input to prevent\n          modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain\n          the standard cursor.</p>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Readonly input here…\" readonly>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Control sizing\n      </div>\n      <div class=\"card-body\">\n        <p>Set heights using classes like <code class=\"highlighter-rouge\">.form-control-lg</code>, and set widths using\n          grid column classes like <code class=\"highlighter-rouge\">.col-lg-*</code>.</p>\n        <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\"><br />\n        <input class=\"form-control\" type=\"text\" placeholder=\"Default input\"><br />\n        <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\n        <br />\n        <select class=\"form-control form-control-lg\">\n          <option>Large select</option>\n        </select><br />\n        <select class=\"form-control\">\n          <option>Default select</option>\n        </select><br />\n        <select class=\"form-control form-control-sm\">\n          <option>Small select</option>\n        </select>\n        <br />\n        <p class=\"mt-5\">Column sizing</p>\n        <p>Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.</p>\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-2\">\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-3\">\n          </div>\n          <div class=\"col-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">Help text</div>\n      <div class=\"card-body\">\n        <p>Block-level help text in forms can be created using <code class=\"highlighter-rouge\">.form-text</code>\n          (previously known as <code class=\"highlighter-rouge\">.help-block</code> in v3). Inline help text can be\n          flexibly implemented using any inline HTML element and utility classes like <code class=\"highlighter-rouge\">.text-muted</code>.</p>\n\n        <p class=\"mt-5\">Block level</p>\n        <label for=\"inputPassword5\">Password</label>\n        <input type=\"password\" id=\"inputPassword5\" class=\"form-control\" aria-describedby=\"passwordHelpBlock\">\n        <p id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special\n          characters, or emoji.\n        </p>\n\n        <p class=\"mt-5\">Inline</p>\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <label for=\"inputPassword4\">Password</label>\n            <input type=\"password\" id=\"inputPassword4\" class=\"form-control mx-sm-3\" aria-describedby=\"passwordHelpInline\">\n            <small id=\"passwordHelpInline\" class=\"text-muted\">\n              Must be 8-20 characters long.\n            </small>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Validation\n      </div>\n      <div class=\"card-body\">\n        <p>Bootstrap includes validation styles for danger, warning, and success states on most form controls.</p>\n        <div class=\"form-group has-success\">\n          <label class=\"form-control-label\" for=\"inputSuccess1\">Input with success</label>\n          <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\n          <div class=\"form-control-feedback\">Success! You've done it.</div>\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n        </div>\n        <div class=\"form-group has-warning\">\n          <label class=\"form-control-label\" for=\"inputWarning1\">Input with warning</label>\n          <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\n          <div class=\"form-control-feedback\">Shucks, check the formatting of that and try again.</div>\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n        </div>\n        <div class=\"form-group has-danger\">\n          <label class=\"form-control-label\" for=\"inputDanger1\">Input with danger</label>\n          <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\n          <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n          <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n        </div>\n        <br />\n        <p class=\"mt-5\">Those same states can also be used with horizontal forms.</p>\n        <form>\n          <div class=\"form-group row has-success\">\n            <label for=\"inputHorizontalSuccess\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control form-control-success\" id=\"inputHorizontalSuccess\" placeholder=\"name@example.com\">\n              <div class=\"form-control-feedback\">Success! You've done it.</div>\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n            </div>\n          </div>\n          <div class=\"form-group row has-warning\">\n            <label for=\"inputHorizontalWarning\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control form-control-warning\" id=\"inputHorizontalWarning\" placeholder=\"name@example.com\">\n              <div class=\"form-control-feedback\">Shucks, check the formatting of that and try again.</div>\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n            </div>\n          </div>\n          <div class=\"form-group row has-danger\">\n            <label for=\"inputHorizontalDnger\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"email\" class=\"form-control form-control-danger\" id=\"inputHorizontalDnger\" placeholder=\"name@example.com\">\n              <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n              <small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\n            </div>\n          </div>\n        </form>\n        <br />\n        <p class=\"mt-5\">Checkboxes and radios are also supported.</p>\n        <div class=\"form-check has-success\">\n          <label class=\"form-check-label\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxSuccess\" value=\"option1\">\n            Checkbox with success\n          </label>\n        </div>\n        <div class=\"form-check has-warning\">\n          <label class=\"form-check-label\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxWarning\" value=\"option1\">\n            Checkbox with warning\n          </label>\n        </div>\n        <div class=\"form-check has-danger\">\n          <label class=\"form-check-label\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"checkboxDanger\" value=\"option1\">\n            Checkbox with danger\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Custom forms\n      </div>\n      <div class=\"card-body\">\n        <p>For even more customization and cross browser consistency, use our completely custom form elements to\n          replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid\n          replacements for any default form control.</p>\n\n        <p class=\"mt-5\">Checkboxes</p>\n        <label class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\">\n          <span class=\"custom-control-label\"></span>\n          <span class=\"custom-control-description\">Check this custom checkbox</span>\n        </label>\n\n        <p class=\"mt-5\">Radios</p>\n        <label class=\"custom-control custom-radio\">\n          <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\">\n          <span class=\"custom-control-label\"></span>\n          <span class=\"custom-control-description\">Toggle this custom radio</span>\n        </label>\n        <label class=\"custom-control custom-radio\">\n          <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\">\n          <span class=\"custom-control-label\"></span>\n          <span class=\"custom-control-description\">Or toggle this other custom radio</span>\n        </label>\n\n        <p class=\"mt-5\">Disabled</p>\n        <label class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" disabled>\n          <span class=\"custom-control-label\"></span>\n          <span class=\"custom-control-description\">Check this custom checkbox</span>\n        </label>\n\n        <label class=\"custom-control custom-radio\">\n          <input id=\"radio3\" name=\"radioDisabled\" type=\"radio\" class=\"custom-control-input\" disabled>\n          <span class=\"custom-control-label\"></span>\n          <span class=\"custom-control-description\">Toggle this custom radio</span>\n        </label>\n\n        <p class=\"mt-5\">Validation states</p>\n        <div class=\"form-group has-success\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\n          </label>\n        </div>\n        <div class=\"form-group has-warning\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\n          </label>\n        </div>\n        <div class=\"form-group has-danger mb-0\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Check this custom checkbox</span>\n          </label>\n        </div>\n\n        <p class=\"mt-5\">Stacked</p>\n        <div class=\"custom-controls-stacked\">\n          <label class=\"custom-control custom-radio\">\n            <input id=\"radioStacked1\" name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Toggle this custom radio</span>\n          </label>\n          <label class=\"custom-control custom-radio\">\n            <input id=\"radioStacked2\" name=\"radio-stacked\" type=\"radio\" class=\"custom-control-input\">\n            <span class=\"custom-control-label\"></span>\n            <span class=\"custom-control-description\">Or toggle this other custom radio</span>\n          </label>\n        </div>\n\n        <p class=\"mt-5\">Select menu</p>\n        <select class=\"custom-select\">\n          <option selected>Open this select menu</option>\n          <option value=\"1\">One</option>\n          <option value=\"2\">Two</option>\n          <option value=\"3\">Three</option>\n        </select>\n\n        <p class=\"mt-5\">File browser</p>\n        <label class=\"custom-file\">\n          <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n          <span class=\"custom-file-control\"></span>\n        </label>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form/basic/basic.component.scss":
/*!*************************************************!*\
  !*** ./src/app/form/basic/basic.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/basic/basic.component.ts":
/*!***********************************************!*\
  !*** ./src/app/form/basic/basic.component.ts ***!
  \***********************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/form/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.scss */ "./src/app/form/basic/basic.component.scss")]
        })
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _form_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form.routing */ "./src/app/form/form.routing.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/form/basic/basic.component.ts");
/* harmony import */ var _masks_masks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masks/masks.component */ "./src/app/form/masks/masks.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/form/validation/validation.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/form/upload/upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_form_routing__WEBPACK_IMPORTED_MODULE_8__["FormRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"]
            ],
            declarations: [
                _basic_basic_component__WEBPACK_IMPORTED_MODULE_9__["BasicComponent"],
                _masks_masks_component__WEBPACK_IMPORTED_MODULE_10__["MasksComponent"],
                _validation_validation_component__WEBPACK_IMPORTED_MODULE_11__["ValidationComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"]
            ]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/form/form.routing.ts":
/*!**************************************!*\
  !*** ./src/app/form/form.routing.ts ***!
  \**************************************/
/*! exports provided: FormRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutes", function() { return FormRoutes; });
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/form/basic/basic.component.ts");
/* harmony import */ var _masks_masks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masks/masks.component */ "./src/app/form/masks/masks.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/form/validation/validation.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/form/upload/upload.component.ts");




var FormRoutes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__["BasicComponent"],
                data: {
                    heading: 'Basic forms'
                }
            },
            {
                path: 'masks',
                component: _masks_masks_component__WEBPACK_IMPORTED_MODULE_1__["MasksComponent"],
                data: {
                    heading: 'Masks'
                }
            },
            {
                path: 'validation',
                component: _validation_validation_component__WEBPACK_IMPORTED_MODULE_2__["ValidationComponent"],
                data: {
                    heading: 'Validation'
                }
            },
            {
                path: 'upload',
                component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"],
                data: {
                    heading: 'Upload'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/form/masks/constants.ts":
/*!*****************************************!*\
  !*** ./src/app/form/masks/constants.ts ***!
  \*****************************************/
/*! exports provided: placeholderChars, textMaskProps, alphabetic, digit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeholderChars", function() { return placeholderChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textMaskProps", function() { return textMaskProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphabetic", function() { return alphabetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
var placeholderChars = {
    whitespace: '\u2000',
    underscore: '_'
};
var textMaskProps = [
    'placeholder',
    'placeholderChar',
    'pipe',
    'keepCharPositions',
    'mask',
    'guide'
];
var alphabetic = /[A-Z]/i;
var digit = /\d/;


/***/ }),

/***/ "./src/app/form/masks/masks.component.html":
/*!*************************************************!*\
  !*** ./src/app/form/masks/masks.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Input text masks</div>\n  <div class=\"card-body\">\n    <div class=\"form-group row\" *ngFor=\"let choice of choices\">\n      <label class=\"col-2 col-form-label\">{{choice.name}}</label>\n      <div class=\"col-10\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"{{choice.placeholder}}\" [textMask]=\"{mask: choice.mask}\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form/masks/masks.component.scss":
/*!*************************************************!*\
  !*** ./src/app/form/masks/masks.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/masks/masks.component.ts":
/*!***********************************************!*\
  !*** ./src/app/form/masks/masks.component.ts ***!
  \***********************************************/
/*! exports provided: MasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasksComponent", function() { return MasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text-mask-addons/dist/emailMask */ "./node_modules/text-mask-addons/dist/emailMask.js");
/* harmony import */ var text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! text-mask-addons/dist/createAutoCorrectedDatePipe */ "./node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/app/form/masks/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var defaultValues = {
    placeholderChar: _constants__WEBPACK_IMPORTED_MODULE_5__["placeholderChars"].whitespace,
    guide: true,
    pipe: null,
    keepCharPositions: false,
    help: null,
    placeholder: null
};
var MasksComponent = /** @class */ (function () {
    function MasksComponent() {
        this.formControlInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.choices = [
            {
                name: 'US phone number',
                mask: [
                    '(',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ],
                placeholder: '(555) 495-3947'
            },
            {
                name: 'US phone number with country code',
                mask: [
                    '+',
                    '1',
                    ' ',
                    '(',
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ],
                placeholder: '+1 (555) 495-3947'
            },
            {
                name: 'Date',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                placeholder: '25/09/1970'
            },
            {
                name: 'Date (auto-corrected)',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                pipe: text_mask_addons_dist_createAutoCorrectedDatePipe__WEBPACK_IMPORTED_MODULE_3___default()(),
                placeholder: 'Please enter a date'
            },
            {
                name: 'US dollar amount',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()(),
                placeholder: 'Enter an amount'
            },
            {
                name: 'US dollar amount (allows decimal)',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({ allowDecimal: true }),
                placeholder: 'Enter an amount'
            },
            {
                name: 'Percentage amount',
                mask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({ suffix: '%', prefix: '' }),
                placeholder: 'Enter an amount'
            },
            {
                name: 'Email',
                mask: text_mask_addons_dist_emailMask__WEBPACK_IMPORTED_MODULE_2___default.a,
                placeholder: 'john@smith.com'
            },
            {
                name: 'US zip code',
                mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/],
                placeholder: '94303'
            },
            {
                name: 'Canadian postal code',
                mask: [_constants__WEBPACK_IMPORTED_MODULE_5__["alphabetic"], _constants__WEBPACK_IMPORTED_MODULE_5__["digit"], _constants__WEBPACK_IMPORTED_MODULE_5__["alphabetic"], ' ', _constants__WEBPACK_IMPORTED_MODULE_5__["digit"], _constants__WEBPACK_IMPORTED_MODULE_5__["alphabetic"], _constants__WEBPACK_IMPORTED_MODULE_5__["digit"]],
                pipe: function (conformedValue) { return ({ value: conformedValue.toUpperCase() }); },
                placeholder: 'K1A 0B2'
            }
        ];
        this.mask = [
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/
        ];
        this.myModel = '';
        this.modelWithValue = '5554441234';
        this.formControlInput.setValue('5555551234');
    }
    MasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masks',
            template: __webpack_require__(/*! ./masks.component.html */ "./src/app/form/masks/masks.component.html"),
            styles: [__webpack_require__(/*! ./masks.component.scss */ "./src/app/form/masks/masks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MasksComponent);
    return MasksComponent;
}());



/***/ }),

/***/ "./src/app/form/upload/upload.component.html":
/*!***************************************************!*\
  !*** ./src/app/form/upload/upload.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Angular2 File Upload</div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <p>Select files</p>\n\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n          class=\"well my-drop-zone\">\n          Base drop zone\n        </div>\n\n        <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\"\n          [uploader]=\"uploader\" class=\"well my-drop-zone\">\n          Another drop zone\n        </div>\n\n        Multiple\n        <label class=\"custom-file mb-3\">\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"custom-file-input\">\n          <span class=\"custom-file-control\"></span>\n        </label>\n\n        Single\n        <label class=\"custom-file\">\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"custom-file-input\">\n          <span class=\"custom-file-control\"></span>\n        </label>\n      </div>\n\n      <div class=\"col-md-9\">\n        <p>Upload queue</p>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n              <th>Progress</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n              <td><strong>{{ item?.file?.name }}</strong></td>\n              <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n              <td *ngIf=\"uploader.isHTML5\">\n                <div class=\"progress\" style=\"margin-bottom: 0;\">\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n              </td>\n              <td nowrap>\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"item.remove()\">\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div>\n          <p>Queue progress: <ngb-progressbar type=\"primary\" [value]=\"uploader.progress\"></ngb-progressbar>\n          </p>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n            <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n          </button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n          </button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n            <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form/upload/upload.component.scss":
/*!***************************************************!*\
  !*** ./src/app/form/upload/upload.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n.my-drop-zone {\n  min-height: 1.5rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: dashed 1px;\n  border-radius: 0.25rem; }\n.nv-file-over {\n  border-color: #dee2e6; }\n.another-file-over-class {\n  border-color: #66bb6a; }\n"

/***/ }),

/***/ "./src/app/form/upload/upload.component.ts":
/*!*************************************************!*\
  !*** ./src/app/form/upload/upload.component.ts ***!
  \*************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/form/upload/upload.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/form/upload/upload.component.scss")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/form/validation/validation.component.html":
/*!***********************************************************!*\
  !*** ./src/app/form/validation/validation.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Input text masks</div>\n  <div class=\"card-body\">\n    <form class=\"form-horizontal\" novalidate>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': requried?.errors?.required}\">\n        <label class=\"col-2 col-form-label\">Required</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"requried\" #requried=\"ngModel\" required [ngClass]=\"{'form-control-danger': requried?.errors?.required}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"requried?.errors?.required\">required error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minlength?.errors?.minlength}\">\n        <label class=\"col-2 col-form-label\">minlength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minlength\" #minlength=\"ngModel\" minlength=\"5\" [ngClass]=\"{'form-control-danger': minlength?.errors?.minlength}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"minlength?.errors?.minlength\">minlength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxlength?.errors?.maxlength}\">\n        <label class=\"col-2 col-form-label\">maxlength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxlength\" #maxlength=\"ngModel\" maxlength=\"5\" [ngClass]=\"{'form-control-danger': maxlength?.errors?.maxlength}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"maxlength?.errors?.maxlength\">maxlength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': pattern?.errors?.pattern}\">\n        <label class=\"col-2 col-form-label\">pattern</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"pattern\" #pattern=\"ngModel\" pattern=\"[a-z]{6}\"\n            [ngClass]=\"{'form-control-danger': pattern?.errors?.pattern}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"pattern?.errors?.pattern\">pattern error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': base64?.errors?.base64}\">\n        <label class=\"col-2 col-form-label\">base64</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"base64\" #base64=\"ngModel\" base64 [ngClass]=\"{'form-control-danger': base64?.errors?.base64}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"base64?.errors?.base64\">base64 error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': creditCard?.errors?.creditCard}\">\n        <label class=\"col-2 col-form-label\">creditCard</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"creditCard\" #creditCard=\"ngModel\" creditCard [ngClass]=\"{'form-control-danger': creditCard?.errors?.creditCard}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"creditCard?.errors?.creditCard\">creditCard error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': date?.errors?.date}\">\n        <label class=\"col-2 col-form-label\">date</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"date\" #date=\"ngModel\" date [ngClass]=\"{'form-control-danger': date?.errors?.date}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"date?.errors?.date\">date error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': dateISO?.errors?.dateISO}\">\n        <label class=\"col-2 col-form-label\">dateISO</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"dateISO\" #dateISO=\"ngModel\" dateISO [ngClass]=\"{'form-control-danger': dateISO?.errors?.dateISO}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"dateISO?.errors?.dateISO\">dateISO error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxDate?.errors?.maxDate}\">\n        <label class=\"col-2 col-form-label\">maxDate</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxDate\" #maxDate=\"ngModel\" maxDate=\"2016-12-12\"\n            [ngClass]=\"{'form-control-danger': maxDate?.errors?.maxDate}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"maxDate?.errors?.maxDate\">maxDate error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minDate?.errors?.minDate}\">\n        <label class=\"col-2 col-form-label\">minDate</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minDate\" #minDate=\"ngModel\" minDate=\"2016-12-12\"\n            [ngClass]=\"{'form-control-danger': minDate?.errors?.minDate}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"minDate?.errors?.minDate\">minDate error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': digits?.errors?.digits}\">\n        <label class=\"col-2 col-form-label\">digits</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"digits\" #digits=\"ngModel\" digits [ngClass]=\"{'form-control-danger': digits?.errors?.digits}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"digits?.errors?.digits\">digits error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': email?.errors?.email}\">\n        <label class=\"col-2 col-form-label\">email</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"email\" #email=\"ngModel\" email [ngClass]=\"{'form-control-danger': email?.errors?.email}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.email\">email error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equal?.errors?.equal}\">\n        <label class=\"col-2 col-form-label\">equal</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equal\" #equal=\"ngModel\" equal=\"aabbcc\" [ngClass]=\"{'form-control-danger': equal?.errors?.equal}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"equal?.errors?.equal\">equal error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqual?.errors?.notEqual}\">\n        <label class=\"col-2 col-form-label\">notEqual</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqual\" #notEqual=\"ngModel\" notEqual=\"aabbcc\"\n            [ngClass]=\"{'form-control-danger': notEqual?.errors?.notEqual}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"notEqual?.errors?.notEqual\">notEqual error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equalTo?.errors?.equalTo}\">\n        <label class=\"col-2 col-form-label\">equalTo</label>\n        <div class=\"col-10\">\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"password\" #password=\"ngModel\" />\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equalTo\" #equalTo=\"ngModel\" [equalTo]=\"password\"\n            [ngClass]=\"{'form-control-danger': equalTo?.errors?.equalTo}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"equalTo?.errors?.equalTo\">equalTo error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqualTo?.errors?.notEqualTo}\">\n        <label class=\"col-2 col-form-label\">notEqualTo</label>\n        <div class=\"col-10\">\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"oldPassword\" #oldPassword=\"ngModel\" />\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqualTo\" #notEqualTo=\"ngModel\" [notEqualTo]=\"oldPassword\"\n            [ngClass]=\"{'form-control-danger': notEqualTo?.errors?.notEqualTo}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"notEqualTo?.errors?.notEqualTo\">notEqualTo error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': gt?.errors?.gt}\">\n        <label class=\"col-2 col-form-label\">greater than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"gt\" #gt=\"ngModel\" gt=\"10\" [ngClass]=\"{'form-control-danger': gt?.errors?.gt}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"gt?.errors?.gt\">greater than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\n        <label class=\"col-2 col-form-label\">less than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\n        <label class=\"col-2 col-form-label\">less than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': json?.errors?.json}\">\n        <label class=\"col-2 col-form-label\">json</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"json\" #json=\"ngModel\" json [ngClass]=\"{'form-control-danger': json?.errors?.json}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"json?.errors?.json\">json error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': max?.errors?.max}\">\n        <label class=\"col-2 col-form-label\">max</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"max\" #max=\"ngModel\" max=\"5\" [ngClass]=\"{'form-control-danger': max?.errors?.max}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"max?.errors?.max\">max error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': min?.errors?.min}\">\n        <label class=\"col-2 col-form-label\">min</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"min\" #min=\"ngModel\" min=\"5\" [ngClass]=\"{'form-control-danger': min?.errors?.min}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"min?.errors?.min\">min error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': number?.errors?.number}\">\n        <label class=\"col-2 col-form-label\">number</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"number\" #number=\"ngModel\" number [ngClass]=\"{'form-control-danger': number?.errors?.number}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"number?.errors?.number\">number error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': phone?.errors?.phone}\">\n        <label class=\"col-2 col-form-label\">phone</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"phone\" #phone=\"ngModel\" phone [ngClass]=\"{'form-control-danger': phone?.errors?.phone}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"phone?.errors?.phone\">phone error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': range?.errors?.range}\">\n        <label class=\"col-2 col-form-label\">range</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"range\" #range=\"ngModel\" [range]=\"[4,9]\" [ngClass]=\"{'form-control-danger': range?.errors?.range}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"range?.errors?.range\">range error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': rangeLength?.errors?.rangeLength}\">\n        <label class=\"col-2 col-form-label\">rangeLength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"rangeLength\" #rangeLength=\"ngModel\" [rangeLength]=\"[4,9]\"\n            [ngClass]=\"{'form-control-danger': rangeLength?.errors?.rangeLength}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"rangeLength?.errors?.rangeLength\">rangeLength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': url?.errors?.url}\">\n        <label class=\"col-2 col-form-label\">url</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"url\" #url=\"ngModel\" url [ngClass]=\"{'form-control-danger': url?.errors?.url}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"url?.errors?.url\">url error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': uuid?.errors?.uuid}\">\n        <label class=\"col-2 col-form-label\">uuid</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"uuid\" #uuid=\"ngModel\" uuid=\"3\" [ngClass]=\"{'form-control-danger': uuid?.errors?.uuid}\" />\n          <div class=\"form-control-feedback\" *ngIf=\"uuid?.errors?.uuid\">uuid error</div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/form/validation/validation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/form/validation/validation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/validation/validation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/form/validation/validation.component.ts ***!
  \*********************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
        this.num = 5;
    }
    ValidationComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var certainPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].notEqualTo(password));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: password,
            certainPassword: certainPassword
        });
    };
    ValidationComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    ValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validation',
            template: __webpack_require__(/*! ./validation.component.html */ "./src/app/form/validation/validation.component.html"),
            styles: [__webpack_require__(/*! ./validation.component.scss */ "./src/app/form/validation/validation.component.scss")]
        })
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~doctors-doctors-module~form-form-module.js.map