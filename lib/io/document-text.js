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

var IoDocumentText = function (_React$Component) {
    _inherits(IoDocumentText, _React$Component);

    function IoDocumentText() {
        _classCallCheck(this, IoDocumentText);

        return _possibleConstructorReturn(this, (IoDocumentText.__proto__ || Object.getPrototypeOf(IoDocumentText)).apply(this, arguments));
    }

    _createClass(IoDocumentText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.8 13.2c0.1 0.2 0.2 0.5 0.2 0.8v19.1c0 1-0.8 1.9-1.7 1.9h-19c-0.9 0-1.8-0.9-1.8-1.9v-26.2c0-1 0.9-1.9 1.8-1.9h12.5c0.2 0 0.5 0 0.7 0.2 0.2 0 0.4 0.2 0.5 0.3l6.6 7.2c0.2 0.2 0.2 0.3 0.2 0.5z m-18.5 0.8v0.8c0 0 0 0.2 0.2 0.2h5.5c0.2 0 0.3-0.2 0.3-0.2v-0.8c0-0.2-0.1-0.3-0.3-0.3h-5.5c-0.2 0-0.2 0.1-0.2 0.3z m0 10v0.8c0 0 0 0.2 0.2 0.2h9.6c0.1 0 0.1-0.2 0.1-0.2v-0.8c0-0.2 0-0.3-0.1-0.3h-9.6c-0.2 0-0.3 0.1-0.3 0.3z m12.5 5.8v-0.8c0-0.2 0-0.2-0.2-0.2h-12.1c-0.2 0-0.2 0-0.2 0.2v0.8c0 0 0 0.2 0.2 0.2h12.1c0.2 0 0.2-0.2 0.2-0.2z m2.5-10v-0.8c0-0.2 0-0.2-0.2-0.2h-14.6c-0.2 0-0.2 0-0.2 0.2v0.8c0 0 0 0.2 0.2 0.2h14.6c0.2 0 0.2-0.2 0.2-0.2z m-3.7-5.9h4.7l-5.6-6.1v5.2c0 0.4 0.4 0.9 0.9 0.9z' })
                )
            );
        }
    }]);

    return IoDocumentText;
}(React.Component);

exports.default = IoDocumentText;
module.exports = exports['default'];