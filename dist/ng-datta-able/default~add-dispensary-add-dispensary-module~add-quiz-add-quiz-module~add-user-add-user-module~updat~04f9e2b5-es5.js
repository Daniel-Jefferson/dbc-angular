function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5"], {
  /***/
  "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
    \******************************************************************/

  /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

  /***/
  function node_modulesNg2FileUploadFesm2015Ng2FileUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
      return FileDropDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileItem", function () {
      return FileItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
      return FileLikeObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
      return FileSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
      return FileUploader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} node
     * @return {?}
     */


    function isElement(node) {
      return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }

    var FileLikeObject =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} fileOrInput
       */
      function FileLikeObject(fileOrInput) {
        _classCallCheck(this, FileLikeObject);

        this.rawFile = fileOrInput;
        /** @type {?} */

        var isInput = isElement(fileOrInput);
        /** @type {?} */

        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */

        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */

        var method = '_createFrom' + postfix;

        /** @type {?} */
        this[method](fakePathOrObject);
      }
      /**
       * @param {?} path
       * @return {?}
       */


      _createClass(FileLikeObject, [{
        key: "_createFromFakePath",
        value: function _createFromFakePath(path) {
          this.lastModifiedDate = void 0;
          this.size = void 0;
          this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
          this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
        }
        /**
         * @param {?} object
         * @return {?}
         */

      }, {
        key: "_createFromObject",
        value: function _createFromObject(object) {
          this.size = object.size;
          this.type = object.type;
          this.name = object.name;
        }
      }]);

      return FileLikeObject;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileItem =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} uploader
       * @param {?} some
       * @param {?} options
       */
      function FileItem(uploader, some, options) {
        _classCallCheck(this, FileItem);

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
        this.file = new FileLikeObject(some);
        this._file = some;

        if (uploader.options) {
          this.method = uploader.options.method || 'POST';
          this.alias = uploader.options.itemAlias || 'file';
        }

        this.url = uploader.options.url;
      }
      /**
       * @return {?}
       */


      _createClass(FileItem, [{
        key: "upload",
        value: function upload() {
          try {
            this.uploader.uploadItem(this);
          } catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});

            this.uploader._onErrorItem(this, '', 0, {});
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this.uploader.cancelItem(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          this.uploader.removeFromQueue(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBeforeUpload",
        value: function onBeforeUpload() {
          return void 0;
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildForm",
        value: function onBuildForm(form) {
          return {
            form: form
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgress",
        value: function onProgress(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccess",
        value: function onSuccess(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancel",
        value: function onCancel(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onComplete",
        value: function onComplete(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBeforeUpload",
        value: function _onBeforeUpload() {
          this.isReady = true;
          this.isUploading = true;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.onBeforeUpload();
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildForm",
        value: function _onBuildForm(form) {
          this.onBuildForm(form);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgress",
        value: function _onProgress(progress) {
          this.progress = progress;
          this.onProgress(progress);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccess",
        value: function _onSuccess(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = true;
          this.isCancel = false;
          this.isError = false;
          this.progress = 100;
          this.index = void 0;
          this.onSuccess(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onError",
        value: function _onError(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = true;
          this.progress = 0;
          this.index = void 0;
          this.onError(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancel",
        value: function _onCancel(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = true;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.onCancel(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onComplete",
        value: function _onComplete(response, status, headers) {
          this.onComplete(response, status, headers);

          if (this.uploader.options.removeAfterUpload) {
            this.remove();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_prepareToUploading",
        value: function _prepareToUploading() {
          this.index = this.index || ++this.uploader._nextIndex;
          this.isReady = true;
        }
      }]);

      return FileItem;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileType =
    /*#__PURE__*/
    function () {
      function FileType() {
        _classCallCheck(this, FileType);
      }

      _createClass(FileType, null, [{
        key: "getMimeClass",

        /**
         * @param {?} file
         * @return {?}
         */
        value: function getMimeClass(file) {
          /** @type {?} */
          var mimeClass = 'application';

          if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
          } else if (file.type.match('image.*')) {
            mimeClass = 'image';
          } else if (file.type.match('video.*')) {
            mimeClass = 'video';
          } else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
          } else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
          } else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
          } else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
          } else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
          } else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
          }

          if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
          }

          return mimeClass;
        }
        /**
         * @param {?} inputFilename
         * @return {?}
         */

      }, {
        key: "fileTypeDetection",
        value: function fileTypeDetection(inputFilename) {
          /** @type {?} */
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
            'bz2': 'compress',
            'gz': 'compress',
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
          /** @type {?} */

          var chunks = inputFilename.split('.');

          if (chunks.length < 2) {
            return 'application';
          }
          /** @type {?} */


          var extension = chunks[chunks.length - 1].toLowerCase();

          if (types[extension] === undefined) {
            return 'application';
          } else {
            return types[extension];
          }
        }
      }]);

      return FileType;
    }();
    /*  MS office  */


    FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
    FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
    FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
    /* PSD */

    FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
    /* Compressed files */

    FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function _isFile(value) {
      return File && value instanceof File;
    }
    /**
     * @record
     */


    function Headers() {}

    if (false) {}
    /**
     * @record
     */


    function FileUploaderOptions() {}

    if (false) {}

    var FileUploader =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} options
       */
      function FileUploader(options) {
        _classCallCheck(this, FileUploader);

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
          formatDataFunction:
          /**
          * @param {?} item
          * @return {?}
          */
          function formatDataFunction(item) {
            return item._file;
          },
          formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(FileUploader, [{
        key: "setOptions",
        value: function setOptions(options) {
          this.options = Object.assign(this.options, options);
          this.authToken = this.options.authToken;
          this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
          this.autoUpload = this.options.autoUpload;
          this.options.filters.unshift({
            name: 'queueLimit',
            fn: this._queueLimitFilter
          });

          if (this.options.maxFileSize) {
            this.options.filters.unshift({
              name: 'fileSize',
              fn: this._fileSizeFilter
            });
          }

          if (this.options.allowedFileType) {
            this.options.filters.unshift({
              name: 'fileType',
              fn: this._fileTypeFilter
            });
          }

          if (this.options.allowedMimeType) {
            this.options.filters.unshift({
              name: 'mimeType',
              fn: this._mimeTypeFilter
            });
          }

          for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
          }
        }
        /**
         * @param {?} files
         * @param {?=} options
         * @param {?=} filters
         * @return {?}
         */

      }, {
        key: "addToQueue",
        value: function addToQueue(files, options, filters) {
          var _this = this;

          /** @type {?} */
          var list = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var file = _step.value;
              list.push(file);
            }
            /** @type {?} */

          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var arrayOfFilters = this._getFilters(filters);
          /** @type {?} */


          var count = this.queue.length;
          /** @type {?} */

          var addedFileItems = [];
          list.map(
          /**
          * @param {?} some
          * @return {?}
          */
          function (some) {
            if (!options) {
              options = _this.options;
            }
            /** @type {?} */


            var temp = new FileLikeObject(some);

            if (_this._isValidFile(temp, arrayOfFilters, options)) {
              /** @type {?} */
              var fileItem = new FileItem(_this, some, options);
              addedFileItems.push(fileItem);

              _this.queue.push(fileItem);

              _this._onAfterAddingFile(fileItem);
            } else {
              /** @type {?} */
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
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "removeFromQueue",
        value: function removeFromQueue(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];

          if (item.isUploading) {
            item.cancel();
          }

          this.queue.splice(index, 1);
          this.progress = this._getTotalProgress();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearQueue",
        value: function clearQueue() {
          while (this.queue.length) {
            this.queue[0].remove();
          }

          this.progress = 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "uploadItem",
        value: function uploadItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

          item._prepareToUploading();

          if (this.isUploading) {
            return;
          }

          this.isUploading = true;

          /** @type {?} */
          this[transport](item);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cancelItem",
        value: function cancelItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var prop = this.options.isHTML5 ? item._xhr : item._form;

          if (item && item.isUploading) {
            prop.abort();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "uploadAll",
        value: function uploadAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems().filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploading;
          });

          if (!items.length) {
            return;
          }

          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._prepareToUploading();
          });
          items[0].upload();
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelAll",
        value: function cancelAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems();
          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.cancel();
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFile",
        value: function isFile(value) {
          return _isFile(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFileLikeObject",
        value: function isFileLikeObject(value) {
          return value instanceof FileLikeObject;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "getIndexOfItem",
        value: function getIndexOfItem(value) {
          return typeof value === 'number' ? value : this.queue.indexOf(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getNotUploadedItems",
        value: function getNotUploadedItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploaded;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getReadyItems",
        value: function getReadyItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.isReady && !item.isUploading;
          }).sort(
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1.index - item2.index;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          return void 0;
        }
        /**
         * @param {?} fileItems
         * @return {?}
         */

      }, {
        key: "onAfterAddingAll",
        value: function onAfterAddingAll(fileItems) {
          return {
            fileItems: fileItems
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildItemForm",
        value: function onBuildItemForm(fileItem, form) {
          return {
            fileItem: fileItem,
            form: form
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onAfterAddingFile",
        value: function onAfterAddingFile(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "onWhenAddingFileFailed",
        value: function onWhenAddingFileFailed(item, filter, options) {
          return {
            item: item,
            filter: filter,
            options: options
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onBeforeUploadItem",
        value: function onBeforeUploadItem(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressItem",
        value: function onProgressItem(fileItem, progress) {
          return {
            fileItem: fileItem,
            progress: progress
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressAll",
        value: function onProgressAll(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccessItem",
        value: function onSuccessItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onErrorItem",
        value: function onErrorItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancelItem",
        value: function onCancelItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCompleteItem",
        value: function onCompleteItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompleteAll",
        value: function onCompleteAll() {
          return void 0;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_mimeTypeFilter",
        value: function _mimeTypeFilter(item) {
          return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileSizeFilter",
        value: function _fileSizeFilter(item) {
          return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileTypeFilter",
        value: function _fileTypeFilter(item) {
          return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onErrorItem",
        value: function _onErrorItem(item, response, status, headers) {
          item._onError(response, status, headers);

          this.onErrorItem(item, response, status, headers);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCompleteItem",
        value: function _onCompleteItem(item, response, status, headers) {
          item._onComplete(response, status, headers);

          this.onCompleteItem(item, response, status, headers);
          /** @type {?} */

          var nextItem = this.getReadyItems()[0];
          this.isUploading = false;

          if (nextItem) {
            nextItem.upload();
            return;
          }

          this.onCompleteAll();
          this.progress = this._getTotalProgress();

          this._render();
        }
        /**
         * @protected
         * @param {?} parsedHeaders
         * @return {?}
         */

      }, {
        key: "_headersGetter",
        value: function _headersGetter(parsedHeaders) {
          return (
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
              }

              return parsedHeaders;
            }
          );
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_xhrTransport",
        value: function _xhrTransport(item) {
          var _this2 = this;

          /** @type {?} */
          var that = this;
          /** @type {?} */

          var xhr = item._xhr = new XMLHttpRequest();
          /** @type {?} */

          var sendable;

          this._onBeforeUploadItem(item);

          if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
          }

          if (!this.options.disableMultipart) {
            sendable = new FormData();

            this._onBuildItemForm(item, sendable);
            /** @type {?} */


            var appendFile =
            /**
            * @return {?}
            */
            function appendFile() {
              return sendable.append(item.alias, item._file, item.file.name);
            };

            if (!this.options.parametersBeforeFiles) {
              appendFile();
            } // For AWS, Additional Parameters must come BEFORE Files


            if (this.options.additionalParameter !== undefined) {
              Object.keys(this.options.additionalParameter).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                  paramVal = paramVal.replace('{{file_name}}', item.file.name);
                }

                sendable.append(key, paramVal);
              });
            }

            if (this.options.parametersBeforeFiles) {
              appendFile();
            }
          } else {
            sendable = this.options.formatDataFunction(item);
          }

          xhr.upload.onprogress =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

            _this2._onProgressItem(item, progress);
          };

          xhr.onload =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);
            /** @type {?} */


            var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */

            var method = '_on' + gist + 'Item';

            /** @type {?} */
            _this2[method](item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onerror =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onErrorItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onabort =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onCancelItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;

          if (this.options.headers) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.options.headers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var header = _step2.value;
                xhr.setRequestHeader(header.name, header.value);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          if (item.headers.length) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = item.headers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _header = _step3.value;
                xhr.setRequestHeader(_header.name, _header.value);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
          }

          xhr.onreadystatechange =
          /**
          * @return {?}
          */
          function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              that.response.emit(xhr.responseText);
            }
          };

          if (this.options.formatDataFunctionIsAsync) {
            sendable.then(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return xhr.send(JSON.stringify(result));
            });
          } else {
            xhr.send(sendable);
          }

          this._render();
        }
        /**
         * @protected
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_getTotalProgress",
        value: function _getTotalProgress() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.options.removeAfterUpload) {
            return value;
          }
          /** @type {?} */


          var notUploaded = this.getNotUploadedItems().length;
          /** @type {?} */

          var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
          /** @type {?} */

          var ratio = 100 / this.queue.length;
          /** @type {?} */

          var current = value * ratio / 100;
          return Math.round(uploaded * ratio + current);
        }
        /**
         * @protected
         * @param {?} filters
         * @return {?}
         */

      }, {
        key: "_getFilters",
        value: function _getFilters(filters) {
          if (!filters) {
            return this.options.filters;
          }

          if (Array.isArray(filters)) {
            return filters;
          }

          if (typeof filters === 'string') {
            /** @type {?} */
            var names = filters.match(/[^\s,]+/g);
            return this.options.filters.filter(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              return names.indexOf(filter.name) !== -1;
            });
          }

          return this.options.filters;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_render",
        value: function _render() {
          return void 0;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_queueLimitFilter",
        value: function _queueLimitFilter() {
          return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
        }
        /**
         * @protected
         * @param {?} file
         * @param {?} filters
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_isValidFile",
        value: function _isValidFile(file, filters, options) {
          var _this3 = this;

          this._failFilterIndex = -1;
          return !filters.length ? true : filters.every(
          /**
          * @param {?} filter
          * @return {?}
          */
          function (filter) {
            _this3._failFilterIndex++;
            return filter.fn.call(_this3, file, options);
          });
        }
        /**
         * @protected
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_isSuccessCode",
        value: function _isSuccessCode(status) {
          return status >= 200 && status < 300 || status === 304;
        }
        /**
         * @protected
         * @param {?} response
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_transformResponse",
        value: function _transformResponse(response, headers) {
          return response;
        }
        /**
         * @protected
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_parseHeaders",
        value: function _parseHeaders(headers) {
          /** @type {?} */
          var parsed = {};
          /** @type {?} */

          var key;
          /** @type {?} */

          var val;
          /** @type {?} */

          var i;

          if (!headers) {
            return parsed;
          }

          headers.split('\n').map(
          /**
          * @param {?} line
          * @return {?}
          */
          function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();

            if (key) {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_onWhenAddingFileFailed",
        value: function _onWhenAddingFileFailed(item, filter, options) {
          this.onWhenAddingFileFailed(item, filter, options);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onAfterAddingFile",
        value: function _onAfterAddingFile(item) {
          this.onAfterAddingFile(item);
        }
        /**
         * @protected
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_onAfterAddingAll",
        value: function _onAfterAddingAll(items) {
          this.onAfterAddingAll(items);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onBeforeUploadItem",
        value: function _onBeforeUploadItem(item) {
          item._onBeforeUpload();

          this.onBeforeUploadItem(item);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildItemForm",
        value: function _onBuildItemForm(item, form) {
          item._onBuildForm(form);

          this.onBuildItemForm(item, form);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgressItem",
        value: function _onProgressItem(item, progress) {
          /** @type {?} */
          var total = this._getTotalProgress(progress);

          this.progress = total;

          item._onProgress(progress);

          this.onProgressItem(item, progress);
          this.onProgressAll(total);

          this._render();
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccessItem",
        value: function _onSuccessItem(item, response, status, headers) {
          item._onSuccess(response, status, headers);

          this.onSuccessItem(item, response, status, headers);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancelItem",
        value: function _onCancelItem(item, response, status, headers) {
          item._onCancel(response, status, headers);

          this.onCancelItem(item, response, status, headers);
        }
      }]);

      return FileUploader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileSelectDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function FileSelectDirective(element) {
        _classCallCheck(this, FileSelectDirective);

        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileSelectDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @return {?}
         */

      }, {
        key: "isEmptyAfterSelection",
        value: function isEmptyAfterSelection() {
          return !!this.element.nativeElement.attributes.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          /** @type {?} */
          var files = this.element.nativeElement.files;
          /** @type {?} */

          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();
          this.uploader.addToQueue(files, options, filters);
          this.onFileSelected.emit(files);

          if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
          }
        }
      }]);

      return FileSelectDirective;
    }();

    FileSelectDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng2FileSelect]'
      }]
    }];
    /** @nocollapse */

    FileSelectDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileSelectDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onFileSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['change']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileDropDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       */
      function FileDropDirective(element) {
        _classCallCheck(this, FileDropDirective);

        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileDropDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDrop",
        value: function onDrop(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!transfer) {
            return;
          }
          /** @type {?} */


          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();

          this._preventAndStop(event);

          this.uploader.addToQueue(transfer.files, options, filters);
          this.fileOver.emit(false);
          this.onFileDrop.emit(transfer.files);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!this._haveFiles(transfer.types)) {
            return;
          }

          transfer.dropEffect = 'copy';

          this._preventAndStop(event);

          this.fileOver.emit(true);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (
          /** @type {?} */
          this.element) {
            if (event.currentTarget ===
            /** @type {?} */
            this.element[0]) {
              return;
            }
          }

          this._preventAndStop(event);

          this.fileOver.emit(false);
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getTransfer",
        value: function _getTransfer(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_preventAndStop",
        value: function _preventAndStop(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @protected
         * @param {?} types
         * @return {?}
         */

      }, {
        key: "_haveFiles",
        value: function _haveFiles(types) {
          if (!types) {
            return false;
          }

          if (types.indexOf) {
            return types.indexOf('Files') !== -1;
          } else if (types.contains) {
            return types.contains('Files');
          } else {
            return false;
          }
        }
      }]);

      return FileDropDirective;
    }();

    FileDropDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng2FileDrop]'
      }]
    }];
    /** @nocollapse */

    FileDropDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileDropDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fileOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onFileDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drop', ['$event']]
      }],
      onDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragover', ['$event']]
      }],
      onDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragleave', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };

    FileUploadModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [FileDropDirective, FileSelectDirective],
        exports: [FileDropDirective, FileSelectDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng2-file-upload.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~add-dispensary-add-dispensary-module~add-quiz-add-quiz-module~add-user-add-user-module~updat~04f9e2b5-es5.js.map