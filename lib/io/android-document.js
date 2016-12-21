'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoAndroidDocument = function (_React$Component) {
    _inherits(IoAndroidDocument, _React$Component);

    function IoAndroidDocument() {
        _classCallCheck(this, IoAndroidDocument);

        return _possibleConstructorReturn(this, (IoAndroidDocument.__proto__ || Object.getPrototypeOf(IoAndroidDocument)).apply(this, arguments));
    }

    _createClass(IoAndroidDocument, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 3.8l10 10v19.3c0 1.7-1.4 3.2-3.1 3.2h-18.8c-1.7 0-3.1-1.5-3.1-3.2v-26.2c0-1.7 1.4-3.1 3.1-3.1h11.9z m-1.2 11.2h8.7l-8.7-8.7v8.7z' })
                )
            );
        }
    }]);

    return IoAndroidDocument;
}(React.Component);

exports.default = IoAndroidDocument;
module.exports = exports['default'];