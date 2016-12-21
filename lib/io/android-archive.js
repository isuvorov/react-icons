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

var IoAndroidArchive = function (_React$Component) {
    _inherits(IoAndroidArchive, _React$Component);

    function IoAndroidArchive() {
        _classCallCheck(this, IoAndroidArchive);

        return _possibleConstructorReturn(this, (IoAndroidArchive.__proto__ || Object.getPrototypeOf(IoAndroidArchive)).apply(this, arguments));
    }

    _createClass(IoAndroidArchive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.2 7.8c0.6 0.6 0.8 1.3 0.8 2.3v22.6c0 1.9-1.6 3.6-3.6 3.6h-25.3c-2 0-3.6-1.7-3.6-3.6v-22.6c0-1 0.2-1.7 0.8-2.3l2.6-3c0.4-0.7 1.2-1 2-1h21.7c0.8 0 1.6 0.3 2 1z m-15.4 22.1l9.9-9.9h-6.4v-3.6h-7.1v3.6h-6.4z m-12.5-22.6h24.8l-1.7-1.8h-21.7z' })
                )
            );
        }
    }]);

    return IoAndroidArchive;
}(React.Component);

exports.default = IoAndroidArchive;
module.exports = exports['default'];